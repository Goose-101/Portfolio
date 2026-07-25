"use client";

import * as React from "react";

/**
 * Minimal Slot implementation (Radix-style) so `asChild` can merge props
 * onto a single child element without pulling in extra dependencies.
 */
export const Slot = React.forwardRef<
  HTMLElement,
  React.HTMLAttributes<HTMLElement> & { children?: React.ReactNode }
>(({ children, ...props }, ref) => {
  if (!React.isValidElement(children)) return null;

  const child = children as React.ReactElement<Record<string, unknown>>;

  return React.cloneElement(child, {
    ...props,
    ...child.props,
    className: [props.className, child.props.className]
      .filter(Boolean)
      .join(" "),
    ref,
  } as Record<string, unknown>);
});
Slot.displayName = "Slot";
