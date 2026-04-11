import * as React from "react";
import { cn } from "@/lib/utils";

// Variants map to the CSS class system in globals.css
type ButtonVariant = "solid" | "neutral" | "stroke" | "primary" | "secondary" | "outline" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
}

const VARIANT_MAP: Record<ButtonVariant, string> = {
  solid:     "btn-solid",
  primary:   "btn-solid",   // alias — btn-solid is the canonical primary
  neutral:   "btn-neutral",
  secondary: "btn-neutral", // alias
  stroke:    "btn-stroke",
  outline:   "btn-stroke",  // alias
  ghost:     "btn-ghost",
};

const SIZE_MAP: Record<ButtonSize, string> = {
  sm: "h-9 px-4 text-xs rounded-lg",
  md: "h-11 px-5 text-sm rounded-xl",
  lg: "h-12 px-7 text-sm rounded-xl",
};

export function Button({
  className,
  variant = "solid",
  size = "md",
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        "focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-60",
        VARIANT_MAP[variant],
        SIZE_MAP[size],
        className
      )}
      {...props}
    />
  );
}
