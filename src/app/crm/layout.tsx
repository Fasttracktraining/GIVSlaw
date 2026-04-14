import { redirect } from "next/navigation";
import { auth, canAccessCRM } from "@/lib/auth";
import { prisma } from "@/lib/db";
import Link from "next/link";
import {
  LayoutDashboard,
  Users,
  FolderOpen,
  FileText,
  Calendar,
  Settings,
  UserPlus,
  Zap,
  LayoutGrid,
} from "lucide-react";
import SignOutButton from "@/components/shared/SignOutButton";

export default async function CRMLayout({
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

  if (!canAccessCRM(role as import("@prisma/client").Role)) {
    redirect("/portal");
  }

  // Notification counts
  const now = new Date();
  const todayStart = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const todayEnd = new Date(todayStart.getTime() + 86400000);

  const [overdueCount, dueTodayCount, newLeadsCount] = await Promise.all([
    prisma.lead.count({ where: { nextFollowUpAt: { lt: todayStart }, status: { notIn: ["CONVERTED", "LOST"] } } }),
    prisma.lead.count({ where: { nextFollowUpAt: { gte: todayStart, lt: todayEnd }, status: { notIn: ["CONVERTED", "LOST"] } } }),
    prisma.lead.count({ where: { status: "NEW" } }),
  ]);

  const urgentCount = overdueCount + dueTodayCount;

  const sidebarLinks = [
    { name: "Dashboard", href: "/crm", icon: LayoutDashboard, badge: urgentCount || null },
    { name: "Setter Queue", href: "/crm/setter", icon: Zap, badge: newLeadsCount || null },
    { name: "Leads", href: "/crm/leads", icon: UserPlus, badge: null },
    { name: "Pipeline", href: "/crm/leads/pipeline", icon: LayoutGrid, badge: null },
    { name: "Work Mode", href: "/crm/leads/work", icon: Zap, badge: overdueCount || null },
    { name: "Cases", href: "/crm/cases", icon: FolderOpen, badge: null },
    { name: "Clients", href: "/crm/clients", icon: Users, badge: null },
    { name: "Documents", href: "/crm/documents", icon: FileText, badge: null },
    { name: "Consultations", href: "/crm/consultations", icon: Calendar, badge: null },
    { name: "Settings", href: "/crm/settings", icon: Settings, badge: null },
  ];

  return (
    <div style={{ display: "flex", minHeight: "calc(100vh - 7.5rem)" }}>
      {/* Sidebar */}
      <aside style={{ width: "260px", background: "#0B1B3D", color: "white", padding: "1.5rem 0", flexShrink: 0, display: "flex", flexDirection: "column" }}>
        <div style={{ padding: "0 1.5rem", marginBottom: "2rem" }}>
          <p style={{ fontSize: "0.75rem", color: "#9CA3AF", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "0.25rem" }}>
            {role}
          </p>
          <p style={{ fontWeight: 600 }}>
            {firstName} {lastName}
          </p>
        </div>

        <nav style={{ display: "flex", flexDirection: "column", gap: "0.25rem", flex: 1 }}>
          {sidebarLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              style={{ display: "flex", alignItems: "center", gap: "0.75rem", padding: "0.75rem 1.5rem", color: "#D1D5DB", textDecoration: "none", fontSize: "0.875rem" }}
            >
              <link.icon style={{ width: "1.25rem", height: "1.25rem", flexShrink: 0 }} />
              <span style={{ flex: 1 }}>{link.name}</span>
              {link.badge && (
                <span style={{ minWidth: "1.25rem", height: "1.25rem", borderRadius: "9999px", background: "#EF4444", color: "white", fontSize: "0.6875rem", fontWeight: 700, display: "flex", alignItems: "center", justifyContent: "center", padding: "0 0.25rem" }}>
                  {link.badge}
                </span>
              )}
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
