import { auth } from "@/lib/auth";
import { prisma } from "@/lib/db";
import EmailToggle from "./EmailToggle";

export default async function ProfilePage() {
  const session = await auth();
  const user = session?.user as Record<string, unknown>;

  const dbUser = await prisma.user.findUnique({ where: { id: user.id as string } });
  if (!dbUser) return null;

  return (
    <div>
      <h1 style={{ fontSize: "1.5rem", fontWeight: 700, color: "#0B1B3D", marginBottom: "2rem" }}>My Profile</h1>

      {/* Personal Info */}
      <div style={{ background: "white", borderRadius: "0.75rem", padding: "1.5rem", boxShadow: "0 1px 3px rgba(0,0,0,0.1)", marginBottom: "1.5rem" }}>
        <h2 style={{ fontSize: "1rem", fontWeight: 600, color: "#0B1B3D", marginBottom: "1rem", paddingBottom: "0.75rem", borderBottom: "1px solid #E5E7EB" }}>Personal Information</h2>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
          <div>
            <p style={{ fontSize: "0.75rem", fontWeight: 600, color: "#6B7280", textTransform: "uppercase" }}>Name</p>
            <p style={{ fontSize: "0.875rem", color: "#111827", marginTop: "0.25rem" }}>{dbUser.firstName} {dbUser.lastName}</p>
          </div>
          <div>
            <p style={{ fontSize: "0.75rem", fontWeight: 600, color: "#6B7280", textTransform: "uppercase" }}>Email</p>
            <p style={{ fontSize: "0.875rem", color: "#111827", marginTop: "0.25rem" }}>{dbUser.email}</p>
          </div>
          <div>
            <p style={{ fontSize: "0.75rem", fontWeight: 600, color: "#6B7280", textTransform: "uppercase" }}>Phone</p>
            <p style={{ fontSize: "0.875rem", color: "#111827", marginTop: "0.25rem" }}>{dbUser.phone || "Not set"}</p>
          </div>
          <div>
            <p style={{ fontSize: "0.75rem", fontWeight: 600, color: "#6B7280", textTransform: "uppercase" }}>Account Created</p>
            <p style={{ fontSize: "0.875rem", color: "#111827", marginTop: "0.25rem" }}>{dbUser.createdAt.toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}</p>
          </div>
        </div>
      </div>

      {/* Notification Preferences */}
      <div style={{ background: "white", borderRadius: "0.75rem", padding: "1.5rem", boxShadow: "0 1px 3px rgba(0,0,0,0.1)" }}>
        <h2 style={{ fontSize: "1rem", fontWeight: 600, color: "#0B1B3D", marginBottom: "1rem", paddingBottom: "0.75rem", borderBottom: "1px solid #E5E7EB" }}>Notification Preferences</h2>
        <EmailToggle enabled={dbUser.emailNotifications} />
      </div>
    </div>
  );
}
