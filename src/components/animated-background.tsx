"use client";

import { motion, useReducedMotion } from "framer-motion";

/**
 * Ambient page background: soft drifting gradient orbs + a masked grid.
 *
 * Fixed to the viewport and rendered once at the page root, so every section
 * sits on the same wash rather than the hero having a tinted ground and the
 * rest of the page falling back to flat --background.
 *
 * Purely decorative — kept subtle and disabled under reduced-motion.
 */
export function AnimatedBackground() {
  const reduce = useReducedMotion();

  const orb = (extra: object) =>
    reduce
      ? {}
      : {
          animate: { ...extra },
          transition: {
            duration: 18,
            repeat: Infinity,
            repeatType: "mirror" as const,
            ease: "easeInOut",
          },
        };

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      {/* Masked grid */}
      <div className="absolute inset-0 grid-lines opacity-60" />

      {/* Gradient orbs */}
      <motion.div
        className="absolute -top-32 left-[10%] h-[38rem] w-[38rem] rounded-full bg-accent/20 blur-[130px]"
        {...orb({ x: [0, 60, 0], y: [0, 40, 0] })}
      />
      <motion.div
        className="absolute top-[20%] right-[5%] h-[32rem] w-[32rem] rounded-full bg-cyan/15 blur-[130px]"
        {...orb({ x: [0, -50, 0], y: [0, 60, 0] })}
      />
      <motion.div
        className="absolute bottom-0 left-[30%] h-[30rem] w-[30rem] rounded-full bg-indigo-500/10 blur-[130px]"
        {...orb({ x: [0, 40, 0], y: [0, -40, 0] })}
      />

      {/* Top glow. The old bottom fade is gone: it existed to blend the hero
          into the next section, and pinned to the viewport it would read as a
          permanent band across the lower third of every screen. */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,hsl(var(--accent)/0.12),transparent)]" />
    </div>
  );
}
