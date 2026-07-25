import { cn } from "@/lib/utils";

/** Glassmorphism surface used across sections. */
export function Card({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "glass glass-hover rounded-2xl p-6 sm:p-7",
        className
      )}
      {...props}
    />
  );
}
