import * as React from "react";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
}

export function Button({
  className,
  variant = "primary",
  size = "md",
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-60",

        size === "sm" && "h-9 px-4 text-xs",
        size === "md" && "h-11 px-5 text-sm",
        size === "lg" && "h-12 px-7 text-sm",

        variant === "primary" &&
          "bg-red-600 text-white shadow-[0_4px_14px_rgba(220,38,38,0.28)] hover:-translate-y-px hover:bg-red-700 hover:shadow-[0_8px_20px_rgba(220,38,38,0.38)]",

        variant === "secondary" &&
          "btn-secondary",

        variant === "outline" &&
          "btn-outline",

        variant === "ghost" &&
          "btn-ghost",

        className
      )}
      {...props}
    />
  );
}
