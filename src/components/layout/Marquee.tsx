import Link from "next/link";

interface MarqueeProps {
  text: string;
  href?: string;
  variant?: "navy" | "gold";
}

export default function Marquee({ text, href, variant = "navy" }: MarqueeProps) {
  const bg = variant === "navy" ? "#0B1B3D" : "#C5963A";

  const content = (
    <span style={{ display: "flex", alignItems: "center", gap: "1rem", padding: "0 1.5rem", flexShrink: 0 }}>
      <span style={{ color: "#D4AB5E" }}>✦</span>
      <span>{text}</span>
    </span>
  );

  return (
    <div style={{ background: bg, color: "white", padding: "0.75rem 0", overflow: "hidden" }}>
      <div className="animate-marquee" style={{ whiteSpace: "nowrap" }}>
        {Array.from({ length: 8 }).map((_, i) =>
          href ? (
            <Link key={i} href={href} className="hover:underline" style={{ flexShrink: 0 }}>
              {content}
            </Link>
          ) : (
            <span key={i} style={{ flexShrink: 0 }}>{content}</span>
          )
        )}
      </div>
    </div>
  );
}
