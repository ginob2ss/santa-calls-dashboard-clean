export function Card({ children }) {
  return <div className="bg-white dark:bg-zinc-900 p-4 rounded-xl shadow">{children}</div>;
}

export function CardContent({ children, className = "" }) {
  return <div className={className}>{children}</div>;
}