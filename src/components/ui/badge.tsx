import { cn } from "@/lib/utils";

/** Small pill used for tech tags and labels. */
export function Badge({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-border/70 bg-white/[0.03] px-3 py-1 text-[13px] font-medium text-muted-foreground transition-colors hover:border-accent/50 hover:text-foreground",
        className
      )}
      {...props}
    />
  );
}
