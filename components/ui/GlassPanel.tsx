import { type HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

function GlassPanel({
  className,
  children,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "relative z-[2] bg-glass backdrop-blur-[16px] saturate-[1.3] border border-glass-border rounded-2xl",
        "shadow-[0_8px_60px_rgba(0,0,0,0.3),0_0_120px_rgba(91,141,239,0.06),inset_0_1px_0_rgba(255,255,255,0.08)]",
        "overflow-hidden glass-glow-line",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export { GlassPanel };
