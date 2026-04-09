import { cn } from "@/lib/utils";

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export function Card({ children, className }: CardProps) {
  return (
    <div className={cn("surface-card p-6 transition hover:shadow-lg", className)}>
      {children}
    </div>
  );
}
