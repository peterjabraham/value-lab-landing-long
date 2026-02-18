import { type HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

function Kicker({
  className,
  ...props
}: HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn(
        "inline-block text-[11px] tracking-widest uppercase text-accent font-semibold mb-3",
        className
      )}
      {...props}
    />
  );
}

export { Kicker };
