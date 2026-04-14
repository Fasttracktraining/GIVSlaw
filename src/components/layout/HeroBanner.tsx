import Link from "next/link";

interface HeroBannerProps {
  title: string;
  breadcrumbs: { name: string; href: string }[];
}

export default function HeroBanner({ title, breadcrumbs }: HeroBannerProps) {
  return (
    <section className="relative bg-navy py-20 overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute top-4 right-8 w-32 h-32 border border-gold/20 rounded-full" />
      <div className="absolute top-10 right-14 w-20 h-20 border border-gold/30 rounded-full" />
      <div className="absolute -left-10 bottom-0 w-40 h-40 border border-white/5 rounded-full" />

      <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{title}</h1>
        <nav className="flex items-center justify-center gap-2 text-sm text-gray-300">
          {breadcrumbs.map((crumb, index) => (
            <span key={crumb.href} className="flex items-center gap-2">
              {index > 0 && <span>/</span>}
              {index < breadcrumbs.length - 1 ? (
                <Link href={crumb.href} className="hover:text-gold transition-colors">
                  {crumb.name}
                </Link>
              ) : (
                <span className="text-white">{crumb.name}</span>
              )}
            </span>
          ))}
        </nav>
      </div>
    </section>
  );
}
