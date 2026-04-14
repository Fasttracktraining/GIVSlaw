import { auth } from "@/lib/auth";
import { prisma } from "@/lib/db";
import MessageThread from "./MessageThread";

export default async function PortalMessagesPage() {
  const session = await auth();
  const user = session?.user as Record<string, unknown>;
  const userId = user.id as string;

  const activeCase = await prisma.case.findFirst({
    where: { clientId: userId },
    orderBy: { createdAt: "desc" },
    include: { assignedAdvisor: true },
  });

  if (!activeCase) {
    return (
      <div>
        <h1 style={{ fontSize: "1.5rem", fontWeight: 700, color: "#0B1B3D", marginBottom: "1rem" }}>Messages</h1>
        <div style={{ background: "white", borderRadius: "0.75rem", padding: "3rem", textAlign: "center", boxShadow: "0 1px 3px rgba(0,0,0,0.1)" }}>
          <p style={{ color: "#6B7280" }}>No active case. Messages will be available once your case is created.</p>
        </div>
      </div>
    );
  }

  const messages = await prisma.message.findMany({
    where: { caseId: activeCase.id },
    orderBy: { createdAt: "asc" },
    include: { sender: true },
  });

  const serialized = messages.map((m) => ({
    id: m.id,
    content: m.content,
    createdAt: m.createdAt.toISOString(),
    senderName: `${m.sender.firstName} ${m.sender.lastName}`,
    senderRole: m.sender.role,
    isMe: m.senderId === userId,
  }));

  return (
    <div>
      <h1 style={{ fontSize: "1.5rem", fontWeight: 700, color: "#0B1B3D", marginBottom: "0.25rem" }}>Messages</h1>
      <p style={{ color: "#6B7280", fontSize: "0.875rem", marginBottom: "1.5rem" }}>
        Chat with your advisor — {activeCase.assignedAdvisor.firstName} {activeCase.assignedAdvisor.lastName}
      </p>

      <MessageThread messages={serialized} caseId={activeCase.id} />
    </div>
  );
}
