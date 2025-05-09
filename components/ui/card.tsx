import { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
};

type CardContentProps = {
  children: ReactNode;
  className?: string;
};

export function Card({ children }: CardProps) {
  return (
    <div className="bg-white dark:bg-zinc-900 p-4 rounded-xl shadow">
      {children}
    </div>
  );
}

export function CardContent({ children, className = "" }: CardContentProps) {
  return <div className={className}>{children}</div>;
}
