import * as React from "react";
import { Slot } from "@/components/ui/slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50 [&_svg]:size-4 [&_svg]:shrink-0 active:scale-[0.97]",
  {
    variants: {
      variant: {
        primary:
          "bg-accent text-accent-foreground font-semibold shadow-glow hover:shadow-[0_0_70px_-10px_hsl(var(--accent)/0.7)] hover:brightness-110",
        secondary:
          "glass glass-hover text-foreground hover:text-white",
        outline:
          "border border-border bg-transparent text-foreground hover:border-accent/60 hover:bg-white/[0.03]",
        ghost: "text-muted-foreground hover:text-foreground hover:bg-white/[0.04]",
      },
      size: {
        default: "h-11 px-6",
        lg: "h-13 px-8 text-base py-3.5",
        sm: "h-9 px-4",
        icon: "h-11 w-11",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
