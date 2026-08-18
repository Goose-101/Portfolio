/**
 * Shared motion tokens.
 * Keeping the curve and timings in one place means the whole site's feel
 * can be tuned from here rather than per component.
 */

/**
 * Ease-out curve with a soft landing: quick to commit, then a long glide
 * that settles without a visible stop. Used for every entrance animation.
 */
export const ease = [0.16, 1, 0.3, 1] as const;

/** Gentler curve for hover and other reversible state changes. */
export const easeSoft = [0.32, 0.72, 0, 1] as const;

export const duration = {
  /** Small state changes: menu items, icon shifts. */
  fast: 0.45,
  /** Standard entrance for a single element. */
  base: 0.95,
  /** Hero and other large surfaces that need extra room to settle. */
  slow: 1.1,
} as const;
