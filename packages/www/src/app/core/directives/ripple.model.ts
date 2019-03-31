import { ElementRef } from '@angular/core';
import { RippleRenderer } from './ripple-renderer';


/**
 * Interface to avoid a cyclic dependency between RippleRenderer and RippleDirective.
 * and so that we can access the directive elementRef in the renderer.
 */
export interface RippleTarget {
  elementRef?: ElementRef<HTMLElement>;
  rippleConfig: RippleConfig;
  rippleDisabled: boolean;
}
// constants
export const RIPPLE_DURATION = '450ms';

// states of a ripple
export enum RippleState {
  VISIBLE,
  FADING_IN,
  FADING_OUT,
  HIDDEN,
}

export interface RippleConfig {
  color?: string;
  radius?: number;
  centered?: boolean;
  persistent?: boolean;
  terminateOnPointerUp?: boolean;
}

/**
 * Reference to a previously launched ripple element.
 */
export class RippleRef {

  /** Current state of the ripple. */
  state: RippleState = RippleState.HIDDEN;

  constructor(
    private renderer: RippleRenderer,
    /** Reference to the ripple HTML element. */
    public element: HTMLElement,
    /** Ripple configuration used for the ripple. */
    public config: RippleConfig) {
  }

  /** Fades out the ripple element. */
  fadeOut() {
    this.renderer.fadeOutRipple(this);
  }
}
