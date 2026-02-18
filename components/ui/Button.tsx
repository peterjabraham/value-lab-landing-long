import { forwardRef, type AnchorHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: "primary" | "secondary";
}

const Button = forwardRef<HTMLAnchorElement, ButtonProps>(
  ({ className, variant = "primary", children, ...props }, ref) => {
    return (
      <a
        ref={ref}
        className={cn(
          "inline-flex items-center gap-2 px-7 py-3.5 rounded-md font-semibold text-sm no-underline transition-all cursor-pointer group",
          variant === "primary" &&
            "bg-accent text-black shadow-[0_0_30px_var(--accent-glow)] hover:-translate-y-0.5 hover:shadow-[0_0_50px_var(--accent-glow)]",
          variant === "secondary" &&
            "bg-white/[0.06] text-foreground border border-white/[0.12] hover:bg-white/10 hover:border-white/20",
          className
        )}
        {...props}
      >
        {children}
      </a>
    );
  }
);

Button.displayName = "Button";

export { Button };
