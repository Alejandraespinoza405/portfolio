type Props = {
  id?: string;
  className?: string;     // fondo, padding vertical, etc.
  children: React.ReactNode;
};

// Sección que ocupa todo el ancho, con padding lateral responsivo
export function FullWidthSection({ id, className = "", children }: Props) {
  return (
    <section id={id} className={`w-full ${className}`}>
      {/* padding lateral; sin max-w */}
      <div className="px-4 sm:px-6 lg:px-10 xl:px-16">{children}</div>
    </section>
  );
}
