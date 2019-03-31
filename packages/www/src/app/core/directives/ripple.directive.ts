import { Directive, ElementRef, NgZone, PLATFORM_ID, Inject, Optional, OnInit, OnDestroy, Input, HostBinding } from '@angular/core';
import { RippleRenderer } from './ripple-renderer';
import { RippleTarget, RippleConfig, RippleRef } from './ripple.model';

@Directive({
  selector: '[glp-ripple], [glpRipple]',
  exportAs: 'glpRipple',
})
export class RippleDirective implements RippleTarget, OnInit, OnDestroy {

  private rippleRenderer: RippleRenderer;

  public rippleColor: string;
  public disabled: boolean;

  /**
   * The element that triggers the ripple when click events are received.
   * Defaults to the directive's host element.
   */

   @Input('rippleTrigger')
  get trigger() { return this.rippleTrigger || this.elementRef.nativeElement; }
  set trigger(trigger: HTMLElement) {
    this.rippleTrigger = trigger;
    this.setupTriggerEventsIfEnabled();
  }
  private rippleTrigger: HTMLElement;

  private isInitialized = false;

  @HostBinding('glp-ripple') true;
  @HostBinding('glp-ripple-unbounded') 'unbounded';
  constructor(
    public elementRef: ElementRef<HTMLElement>,
    ngZone: NgZone,
    @Inject(PLATFORM_ID) platformId: any,
) {

this.rippleRenderer = new RippleRenderer(this, ngZone, elementRef, platformId);

}


ngOnInit() {
  this.isInitialized = true;
  this.setupTriggerEventsIfEnabled();
}

ngOnDestroy() {
  this.rippleRenderer.removeTriggerEvents();
}

  /** Fades out all currently showing ripple elements. */
  fadeOutAll() {
    this.rippleRenderer.fadeOutAll();
  }

  /**
   * Ripple configuration from the directive's input values.
   * @docs-private Implemented as part of RippleTarget
   */
  get rippleConfig(): RippleConfig {
    return {
      // centered: this.centered,
      radius: 56,
      color: this.rippleColor,
      // animation: {...this._globalOptions.animation, ...this.animation},
      terminateOnPointerUp: true,
    };
  }

  /**
   * Whether ripples on pointer-down are disabled or not.
   * @docs-private Implemented as part of RippleTarget
   */
  get rippleDisabled(): boolean {
    return this.disabled; // || !!this._globalOptions.disabled;
  }

  /** Sets up the trigger event listeners if ripples are enabled. */
  private setupTriggerEventsIfEnabled() {
    if (!this.rippleDisabled && this.isInitialized) {
      this.rippleRenderer.setupTriggerEvents(this.trigger);
    }
  }

  /**
   * Launches a manual ripple using the specified ripple configuration.
   * @param config Configuration for the manual ripple.
   */
  launch(config: RippleConfig): RippleRef;

  /**
   * Launches a manual ripple at the specified coordinates within the element.
   * @param x Coordinate within the element, along the X axis at which to fade-in the ripple.
   * @param y Coordinate within the element, along the Y axis at which to fade-in the ripple.
   * @param config Optional ripple configuration for the manual ripple.
   */
  launch(x: number, y: number, config?: RippleConfig): RippleRef;

  /** Launches a manual ripple at the specified coordinated or just by the ripple config. */
  launch(configOrX: number | RippleConfig, y: number = 0, config?: RippleConfig): RippleRef {
    if (typeof configOrX === 'number') {
      return this.rippleRenderer.fadeInRipple(configOrX, y, {...this.rippleConfig, ...config});
    } else {
      return this.rippleRenderer.fadeInRipple(0, 0, {...this.rippleConfig, ...configOrX});
    }
}
}
