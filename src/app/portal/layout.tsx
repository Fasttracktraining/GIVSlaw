import { redirect } from "next/navigation";
import { auth, canAccessPortal } from "@/lib/auth";
import Link from "next/link";
import {
  LayoutDashboard,
  FolderOpen,
  FileText,
  Calendar,
  User,
  MessageCircle,
} from "lucide-react";
import SignOutButton from "@/components/shared/SignOutButton";

const sidebarLinks = [
  { name: "Dashboard", href: "/portal", icon: LayoutDashboard },
  { name: "My Case", href: "/portal/case", icon: FolderOpen },
  { name: "Documents", href: "/portal/documents", icon: FileText },
  { name: "Messages", href: "/portal/messages", icon: MessageCircle },
  { name: "Consultations", href: "/portal/consultations", icon: Calendar },
  { name: "Profile", href: "/portal/profile", icon: User },
];

export default async function PortalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();

  if (!session?.user) {
    redirect("/login");
  }

  const user = session.user as Record<string, unknown>;
  const role = user.role as string;
  const firstName = user.firstName as string;
  const lastName = user.lastName as string;

  if (!canAccessPortal(role as import("@prisma/client").Role)) {
    redirect("/crm");
  }

  return (
    <div style={{ display: "flex", minHeight: "calc(100vh - 7.5rem)" }}>
      {/* Sidebar */}
      <aside style={{ width: "260px", background: "#0B1B3D", color: "white", padding: "1.5rem 0", flexShrink: 0 }}>
        <div style={{ padding: "0 1.5rem", marginBottom: "2rem" }}>
          <p style={{ fontSize: "0.75rem", color: "#9CA3AF", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "0.25rem" }}>
            Client Portal
          </p>
          <p style={{ fontWeight: 600 }}>
            {firstName} {lastName}
          </p>
        </div>

        <nav style={{ display: "flex", flexDirection: "column", gap: "0.25rem" }}>
          {sidebarLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              style={{ display: "flex", alignItems: "center", gap: "0.75rem", padding: "0.75rem 1.5rem", color: "#D1D5DB", textDecoration: "none", fontSize: "0.875rem" }}
            >
              <link.icon style={{ width: "1.25rem", height: "1.25rem", flexShrink: 0 }} />
              {link.name}
            </Link>
          ))}
        </nav>

        <div style={{ marginTop: "auto", padding: "1.5rem", borderTop: "1px solid rgba(255,255,255,0.1)" }}>
          <SignOutButton />
        </div>
      </aside>

      {/* Main Content */}
      <div style={{ flex: 1, background: "#F9FAFB", overflow: "auto" }}>
        <div style={{ padding: "2rem" }}>
          {children}
        </div>
      </div>
    </div>
  );
}
