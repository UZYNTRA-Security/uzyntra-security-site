import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  description?: string;
  eyebrow?: string;
  align?: "left" | "center";
}

export function SectionHeading({
  title,
  description,
  eyebrow,
  align = "left",
}: SectionHeadingProps) {
  return (
    <div className={cn("max-w-3xl", { "text-center mx-auto": align === "center" })}>
      {eyebrow && <p className="eyebrow mb-3">{eyebrow}</p>}
      <h2 className="text-slate-950 font-semibold">{title}</h2>
      {description && <p className="mt-4 text-slate-600">{description}</p>}
    </div>
  );
}
