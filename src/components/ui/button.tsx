import * as React from "react";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
}

export function Button({ className, variant = "primary", ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center rounded-xl px-5 py-2.5 text-sm font-semibold transition",
        {
          "bg-red-600 text-white hover:bg-red-700": variant === "primary",
          "bg-white border border-slate-200 text-slate-900 hover:bg-slate-50": variant === "secondary",
          "border border-red-200 text-red-700 hover:bg-red-50": variant === "outline",
          "text-slate-700 hover:bg-slate-100": variant === "ghost",
        },
        className
      )}
      {...props}
    />
  );
}
