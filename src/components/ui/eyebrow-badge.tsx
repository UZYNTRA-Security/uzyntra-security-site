import { type ReactNode } from "react";
import { ShieldCheck } from "lucide-react";
import { cn } from "@/lib/utils";

interface EyebrowBadgeProps {
  children: ReactNode;
  icon?: ReactNode;
  className?: string;
}

/**
 * EyebrowBadge — pill label above section headings.
 * Uses the .eyebrow CSS class (0.75rem / 12px min, theme-aware).
 * Defaults to ShieldCheck icon; pass icon={null} to suppress.
 */
export function EyebrowBadge({ children, icon, className }: EyebrowBadgeProps) {
  const resolvedIcon = icon === undefined
    ? <ShieldCheck className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
    : icon;

  return (
    <div className={cn("eyebrow", className)}>
      {resolvedIcon}
      {children}
    </div>
  );
}
