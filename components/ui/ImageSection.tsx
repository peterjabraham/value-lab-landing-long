import { type HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface ImageSectionProps extends HTMLAttributes<HTMLElement> {
  bgImage: string;
}

function ImageSection({
  className,
  bgImage,
  children,
  ...props
}: ImageSectionProps) {
  return (
    <section className={cn("relative py-[140px] overflow-hidden", className)} {...props}>
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('${bgImage}')` }}
      />

      {/* Light overlay — just enough to keep text legible */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/10 to-background/30" />

      {/* Top fade to dark */}
      <div className="absolute top-0 left-0 right-0 h-[120px] z-[1] bg-gradient-to-b from-background to-transparent" />

      {/* Bottom fade to dark */}
      <div className="absolute bottom-0 left-0 right-0 h-[120px] z-[1] bg-gradient-to-t from-background to-transparent" />

      {/* Content */}
      <div className="max-w-[1200px] mx-auto px-6">{children}</div>
    </section>
  );
}

export { ImageSection };
