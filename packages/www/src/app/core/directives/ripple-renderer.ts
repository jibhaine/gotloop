
import {ElementRef, NgZone, Inject, PLATFORM_ID} from '@angular/core';
import { normalizePassiveListenerOptions} from '@angular/cdk/platform';
import {isFakeMousedownFromScreenReader} from '@angular/cdk/a11y';
import { isPlatformBrowser } from '@angular/common';
import { RippleRef, RippleState, RippleTarget, RippleConfig } from './ripple.model';

// animation durations in ms.
export const RIPPLE_ENTER_DURATION = 450;
export const RIPPLE_LEAVE_DURATION = 300 ;

/** Options that apply to all the event listeners that are bound by the ripple renderer. */
const passiveEventOptions = normalizePassiveListenerOptions({passive: true});

/**
 * Timeout for ignoring mouse events. Mouse events will be temporary ignored after touch
 * events to avoid synthetic mouse events.
 */
const ignoreMouseEventsTimeout = 800;

/**
 * Code adapted and simplified from angular/material.
 *
 * The renderer manages all dom manipulation outside
 * angular so that it does not trigger change detection.
 */
export class RippleRenderer {

  /** Element where the ripples are being added to. */
  private containerElement: HTMLElement;

  /** Element which triggers the ripple elements on mouse events. */
  private triggerElement: HTMLElement | null;

  /** Whether the pointer is currently down or not. */
  private isPointerDown = false;

  /** Events to be registered on the trigger element. */
  private triggerEvents = new Map<string, any>();

  /** Set of currently active ripple references. */
  private activeRipples = new Set<RippleRef>();

  /** Latest non-persistent ripple that was triggered. */
  private mostRecentTransientRipple: RippleRef | null;

  /** Time in milliseconds when the last touchstart event happened. */
  private lastTouchStartEvent: number;

  /**
   * Cached dimensions of the ripple container. Set when the first
   * ripple is shown and cleared once no more ripples are visible.
   */
  private containerRect: ClientRect | null;

  constructor(private target: RippleTarget,
              private ngZone: NgZone,
              elementRef: ElementRef<HTMLElement>,
              @Inject(PLATFORM_ID) platformId: any       ) {

    // Only do anything if we're on the browser.
    if (isPlatformBrowser(platformId)) {
      this.containerElement = elementRef.nativeElement;

      // Specify events which need to be registered on the trigger.
      this.triggerEvents
        .set('mousedown', this.onMousedown)
        .set('mouseup', this.onPointerUp)
        .set('mouseleave', this.onPointerUp)

        .set('touchstart', this.onTouchStart)
        .set('touchend', this.onPointerUp)
        .set('touchcancel', this.onPointerUp);
    }
  }

  /**
   * Fades in a ripple at the given coordinates.
   * @param x Coordinate within the element, along the X axis at which to start the ripple.
   * @param y Coordinate within the element, along the Y axis at which to start the ripple.
   * @param config Extra ripple options.
   */
  fadeInRipple(x: number, y: number, config: RippleConfig = {}): RippleRef {
    const containerRect = this.containerRect =
                          this.containerRect || this.containerElement.getBoundingClientRect();
    // const animationConfig = {...defaultRippleAnimationConfig, ...config.animation};

    if (config.centered) {
      x = containerRect.left + containerRect.width / 2;
      y = containerRect.top + containerRect.height / 2;
    }

    const radius = config.radius || distanceToFurthestCorner(x, y, containerRect);
    const offsetX = x - containerRect.left;
    const offsetY = y - containerRect.top;
    // const duration = animationConfig.enterDuration;

    const ripple = document.createElement('div');
    ripple.classList.add('glp-ripple-element');

    ripple.style.left = `${offsetX - radius}px`;
    ripple.style.top = `${offsetY - radius}px`;
    ripple.style.height = `${radius * 2}px`;
    ripple.style.width = `${radius * 2}px`;

    // If the color is not set, the default CSS color will be used.
    ripple.style.backgroundColor = config.color || null;
    ripple.style.transitionDuration = `${RIPPLE_ENTER_DURATION}ms`;

    this.containerElement.appendChild(ripple);

    // By default the browser does not recalculate the styles of dynamically created
    // ripple elements. This is critical because then the `scale` would not animate properly.
    enforceStyleRecalculation(ripple);

    ripple.style.transform = 'scale(1)';

    // Exposed reference to the ripple that will be returned.
    const rippleRef = new RippleRef(this, ripple, config);

    rippleRef.state = RippleState.FADING_IN;

    // Add the ripple reference to the list of all active ripples.
    this.activeRipples.add(rippleRef);

    if (!config.persistent) {
      this.mostRecentTransientRipple = rippleRef;
    }

    // Wait for the ripple element to be completely faded in.
    // Once it's faded in, the ripple can be hidden immediately if the mouse is released.
    this.runTimeoutOutsideZone(() => {
      const isMostRecentTransientRipple = rippleRef === this.mostRecentTransientRipple;

      rippleRef.state = RippleState.VISIBLE;

      // When the timer runs out while the user has kept their pointer down, we want to
      // keep only the persistent ripples and the latest transient ripple. We do this,
      // because we don't want stacked transient ripples to appear after their enter
      // animation has finished.
      if (!config.persistent && (!isMostRecentTransientRipple || !this.isPointerDown)) {
        rippleRef.fadeOut();
      }
    }, RIPPLE_ENTER_DURATION);

    return rippleRef;
  }

  /** Fades out a ripple reference. */
  fadeOutRipple(rippleRef: RippleRef) {
    const wasActive = this.activeRipples.delete(rippleRef);

    if (rippleRef === this.mostRecentTransientRipple) {
      this.mostRecentTransientRipple = null;
    }

    // Clear out the cached bounding rect if we have no more ripples.
    if (!this.activeRipples.size) {
      this.containerRect = null;
    }

    // For ripples that are not active anymore, don't re-run the fade-out animation.
    if (!wasActive) {
      return;
    }

    const rippleEl = rippleRef.element;
    // const animationConfig = {...defaultRippleAnimationConfig, ...rippleRef.config.animation};

    rippleEl.style.transitionDuration = `${RIPPLE_LEAVE_DURATION}ms`;
    rippleEl.style.opacity = '0';
    rippleRef.state = RippleState.FADING_OUT;

    // Once the ripple faded out, the ripple can be safely removed from the DOM.
    this.runTimeoutOutsideZone(() => {
      rippleRef.state = RippleState.HIDDEN;
      rippleEl.parentNode!.removeChild(rippleEl);
    }, RIPPLE_LEAVE_DURATION);
  }

  /** Fades out all currently active ripples. */
  fadeOutAll() {
    this.activeRipples.forEach(ripple => ripple.fadeOut());
  }

  /** Sets up the trigger event listeners */
  setupTriggerEvents(element: HTMLElement) {
    if (!element || element === this.triggerElement) {
      return;
    }

    // Remove all previously registered event listeners from the trigger element.
    this.removeTriggerEvents();

    this.ngZone.runOutsideAngular(() => {
      this.triggerEvents.forEach((fn, type) => {
        element.addEventListener(type, fn, passiveEventOptions);
      });
    });

    this.triggerElement = element;
  }

  /** Function being called whenever the trigger is being pressed using mouse. */
  private onMousedown = (event: MouseEvent) => {
    // Screen readers will fire fake mouse events for space/enter. Skip launching a
    // ripple in this case for consistency with the non-screen-reader experience.
    const isFakeMousedown = isFakeMousedownFromScreenReader(event);
    const isSyntheticEvent = this.lastTouchStartEvent &&
        Date.now() < this.lastTouchStartEvent + ignoreMouseEventsTimeout;

    if (!this.target.rippleDisabled && !isFakeMousedown && !isSyntheticEvent) {
      this.isPointerDown = true;
      this.fadeInRipple(event.clientX, event.clientY, this.target.rippleConfig);
    }
  }

  /** Function being called whenever the trigger is being pressed using touch. */
  private onTouchStart = (event: TouchEvent) => {
    if (!this.target.rippleDisabled) {
      // Some browsers fire mouse events after a `touchstart` event. Those synthetic mouse
      // events will launch a second ripple if we don't ignore mouse events for a specific
      // time after a touchstart event.
      this.lastTouchStartEvent = Date.now();
      this.isPointerDown = true;

      // Use `changedTouches` so we skip any touches where the user put
      // their finger down, but used another finger to tap the element again.
      const touches = event.changedTouches;

      for (let i = 0; i < touches.length; i++) {
        this.fadeInRipple(touches[i].clientX, touches[i].clientY, this.target.rippleConfig);
      }
    }
  }

  /** Function being called whenever the trigger is being released. */
  private onPointerUp = () => {
    if (!this.isPointerDown) {
      return;
    }

    this.isPointerDown = false;

    // Fade-out all ripples that are visible and not persistent.
    this.activeRipples.forEach(ripple => {
      // By default, only ripples that are completely visible will fade out on pointer release.
      // If the `terminateOnPointerUp` option is set, ripples that still fade in will also fade out.
      const isVisible = ripple.state === RippleState.VISIBLE ||
        ripple.config.terminateOnPointerUp && ripple.state === RippleState.FADING_IN;

      if (!ripple.config.persistent && isVisible) {
        ripple.fadeOut();
      }
    });
  }

  /** Runs a timeout outside of the Angular zone to avoid triggering the change detection. */
  private runTimeoutOutsideZone(fn: Function, delay = 0) {
    this.ngZone.runOutsideAngular(() => setTimeout(fn, delay));
  }

  /** Removes previously registered event listeners from the trigger element. */
  removeTriggerEvents() {
    if (this.triggerElement) {
      this.triggerEvents.forEach((fn, type) => {
        this.triggerElement!.removeEventListener(type, fn, passiveEventOptions);
      });
    }
  }
}

/** Enforces a style recalculation of a DOM element by computing its styles. */
function enforceStyleRecalculation(element: HTMLElement) {
  // Enforce a style recalculation by calling `getComputedStyle` and accessing any property.
  // Calling `getPropertyValue` is important to let optimizers know that this is not a noop.
  // See: https://gist.github.com/paulirish/5d52fb081b3570c81e3a
  window.getComputedStyle(element).getPropertyValue('opacity');
}

/**
 * Returns the distance from the point (x, y) to the furthest corner of a rectangle.
 */
function distanceToFurthestCorner(x: number, y: number, rect: ClientRect) {
  const distX = Math.max(Math.abs(x - rect.left), Math.abs(x - rect.right));
  const distY = Math.max(Math.abs(y - rect.top), Math.abs(y - rect.bottom));
  return Math.sqrt(distX * distX + distY * distY);
}
