
import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/app/lib/utils";


const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-violet)] focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "rounded-full bg-linear-to-r from-[var(--gradient-start)] to-[var(--gradient-end)] text-[var(--hero-button-text)] shadow-[0_0_24px_var(--glow-violet),0_0_48px_var(--glow-cyan)] hover:-translate-y-1 hover:brightness-110",

        secondary:
          "rounded-full border border-[var(--hero-secondary-border)] bg-[var(--hero-secondary-bg)] text-foreground backdrop-blur hover:-translate-y-1 hover:border-[var(--accent-violet)]",

        outline:
          "rounded-full border border-[var(--hero-secondary-border)] bg-transparent text-foreground hover:-translate-y-1 hover:border-[var(--accent-violet)] hover:bg-[var(--hero-secondary-bg)]",

        ghost:
          "rounded-lg text-foreground hover:bg-[var(--footer-surface)] hover:text-[var(--accent-violet)]",

        gradient:
          "rounded-full bg-linear-to-r from-[var(--gradient-start)] to-[var(--gradient-end)] text-[var(--hero-button-text)] hover:-translate-y-1 hover:brightness-110",

        glow:
          "border-gradient rounded-xl bg-white/5 text-foreground glow-violet hover:scale-105 active:scale-95",
      },

      size: {
        sm: "h-9 px-4 text-sm",
        default: "h-11 px-7 text-sm",
        lg: "h-12 px-8 text-base",
        icon: "size-10 p-0",
      },
    },

    defaultVariants: {
      variant: "default",
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
        ref={ref}
        className={cn(buttonVariants({ variant, size }), className)}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export { Button, buttonVariants };
