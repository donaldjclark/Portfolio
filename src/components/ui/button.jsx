export function Button({ href, variant = "default", className = "", ...props }) {
  const base = "inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition active:scale-[.98] disabled:opacity-50 disabled:pointer-events-none";
  const variants = {
    default: "bg-white text-zinc-900 hover:bg-zinc-200",
    secondary: "bg-white/10 text-zinc-100 hover:bg-white/20 border border-white/10",
  };
  if (href) {
    return (
      <a
        href={href}
        className={`${base} ${variants[variant]} ${className}`}
        {...props}
      />
    );
  }
  return (
    <button
      className={`${base} ${variants[variant]} ${className}`}
      {...props}
    />
  );
}
