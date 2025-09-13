export function Card({ className = "", ...props }) {
  return <div className={`rounded-xl border border-white/10 bg-zinc-900/50 ${className}`} {...props} />;
}
export function CardHeader({ className = "", ...props }) {
  return <div className={`p-6 ${className}`} {...props} />;
}
export function CardContent({ className = "", ...props }) {
  return <div className={`p-6 pt-0 ${className}`} {...props} />;
}
export function CardTitle({ className = "", ...props }) {
  return <h3 className={`text-lg font-semibold ${className}`} {...props} />;
}
export function CardDescription({ children, className = "", ...props }) {
  return (
    <p className={`text-sm text-zinc-400 ${className}`} {...props}>
      {children}
    </p>
  );
}
