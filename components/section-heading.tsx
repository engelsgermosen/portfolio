import { cn } from "@/lib/utils";
import Reveal from "./reveal";

interface SectionHeadingProps {
  /** Two-digit index, e.g. "02". */
  number: string;
  /** Short mono eyebrow label, e.g. "Projects". */
  eyebrow: string;
  /** Evocative display heading. */
  title: string;
  className?: string;
  align?: "left" | "center";
}

/**
 * Numbered mono eyebrow ("02 — Projects") above a large Space Grotesk heading,
 * matching the mockup's per-section header style.
 */
const SectionHeading = ({
  number,
  eyebrow,
  title,
  className,
  align = "left",
}: SectionHeadingProps) => {
  return (
    <Reveal
      className={cn(
        "mb-13",
        align === "center" && "text-center",
        className
      )}
    >
      <div className="eyebrow mb-3.5">
        {number} — {eyebrow}
      </div>
      <h2 className="font-display text-[clamp(1.9rem,4.6vw,3rem)] font-bold leading-[1.04] tracking-tight text-foreground">
        {title}
      </h2>
    </Reveal>
  );
};

export default SectionHeading;
