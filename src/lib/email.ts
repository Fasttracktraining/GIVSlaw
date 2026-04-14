import { prisma } from "@/lib/db";

// ─── Email Transport ─────────────────────────────────────
// Currently logs to console + database.
// To switch to Amazon SES, replace sendViaTransport() only.

interface EmailPayload {
  to: string;
  subject: string;
  html: string;
  template: string;
}

async function sendViaTransport(payload: EmailPayload): Promise<boolean> {
  // ── CURRENT: Console logging (dev mode) ──
  console.log(`\n📧 EMAIL SENT`);
  console.log(`   To: ${payload.to}`);
  console.log(`   Subject: ${payload.subject}`);
  console.log(`   Template: ${payload.template}`);
  console.log(`   ---`);

  // ── FUTURE: Amazon SES ──
  // import { SESClient, SendEmailCommand } from "@aws-sdk/client-ses";
  // const ses = new SESClient({ region: process.env.AWS_REGION });
  // await ses.send(new SendEmailCommand({
  //   Source: "GIVS Law <noreply@givslaw.com>",
  //   Destination: { ToAddresses: [payload.to] },
  //   Message: {
  //     Subject: { Data: payload.subject },
  //     Body: { Html: { Data: payload.html } },
  //   },
  // }));

  return true;
}

export async function sendEmail(to: string, subject: string, html: string, template: string): Promise<void> {
  // Check if user has email notifications enabled
  const user = await prisma.user.findUnique({ where: { email: to } });
  if (user && !user.emailNotifications) {
    console.log(`📧 SKIPPED (notifications off): ${to}`);
    return;
  }

  let status = "sent";
  let error: string | null = null;

  try {
    await sendViaTransport({ to, subject, html, template });
  } catch (e) {
    status = "failed";
    error = e instanceof Error ? e.message : "Unknown error";
    console.error(`📧 FAILED: ${to} — ${error}`);
  }

  // Log to database
  await prisma.emailLog.create({
    data: { to, subject, template, status, error },
  });
}

// ─── Email Templates ─────────────────────────────────────

function wrap(content: string): string {
  return `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"></head>
<body style="margin:0;padding:0;background:#F9FAFB;font-family:Arial,Helvetica,sans-serif;">
  <div style="max-width:560px;margin:0 auto;padding:2rem 1rem;">
    <!-- Header -->
    <div style="text-align:center;padding:1.5rem 0;border-bottom:3px solid #C5963A;">
      <h1 style="margin:0;color:#0B1B3D;font-size:1.25rem;font-weight:700;">GIVS Law</h1>
      <p style="margin:0.25rem 0 0;color:#6B7280;font-size:0.75rem;">Global Immigration and Visa Services</p>
    </div>

    <!-- Body -->
    <div style="background:white;padding:2rem;border-radius:0 0 0.5rem 0.5rem;">
      ${content}
    </div>

    <!-- Footer -->
    <div style="text-align:center;padding:1.5rem 0;font-size:0.75rem;color:#9CA3AF;">
      <p style="margin:0;">GIVS Law · Charterspace, Concorde Business Centre</p>
      <p style="margin:0.25rem 0 0;">Nottingham Road, Nottingham, NG7 7FF · +441156547274</p>
      <p style="margin:0.5rem 0 0;">contact@givslaw.com</p>
    </div>
  </div>
</body>
</html>`;
}

// ─── Template Functions ──────────────────────────────────

export async function emailConsultationBooked(to: string, data: {
  clientName: string;
  advisorName: string;
  date: string;
  time: string;
  service: string;
}) {
  const html = wrap(`
    <h2 style="color:#0B1B3D;margin:0 0 1rem;">Consultation Confirmed</h2>
    <p style="color:#374151;line-height:1.6;">Dear ${data.clientName},</p>
    <p style="color:#374151;line-height:1.6;">Your consultation has been booked. Here are the details:</p>
    <div style="background:#F9FAFB;padding:1rem;border-radius:0.5rem;margin:1rem 0;border-left:4px solid #C5963A;">
      <p style="margin:0 0 0.5rem;color:#111827;"><strong>Date:</strong> ${data.date}</p>
      <p style="margin:0 0 0.5rem;color:#111827;"><strong>Time:</strong> ${data.time}</p>
      <p style="margin:0 0 0.5rem;color:#111827;"><strong>Advisor:</strong> ${data.advisorName}</p>
      <p style="margin:0;color:#111827;"><strong>Service:</strong> ${data.service}</p>
    </div>
    <p style="color:#374151;line-height:1.6;">We look forward to speaking with you. If you need to reschedule, please contact us.</p>
  `);
  await sendEmail(to, "Consultation Confirmed — GIVS Law", html, "consultation_booked");
}

export async function emailConsultationReminder(to: string, data: {
  clientName: string;
  advisorName: string;
  date: string;
  time: string;
  hoursUntil: number;
}) {
  const urgency = data.hoursUntil <= 1 ? "starting soon" : "tomorrow";
  const html = wrap(`
    <h2 style="color:#0B1B3D;margin:0 0 1rem;">Consultation Reminder</h2>
    <p style="color:#374151;line-height:1.6;">Dear ${data.clientName},</p>
    <p style="color:#374151;line-height:1.6;">This is a reminder that your consultation is <strong>${urgency}</strong>.</p>
    <div style="background:#FFFBEB;padding:1rem;border-radius:0.5rem;margin:1rem 0;border-left:4px solid #F59E0B;">
      <p style="margin:0 0 0.5rem;color:#111827;"><strong>Date:</strong> ${data.date}</p>
      <p style="margin:0 0 0.5rem;color:#111827;"><strong>Time:</strong> ${data.time}</p>
      <p style="margin:0;color:#111827;"><strong>Advisor:</strong> ${data.advisorName}</p>
    </div>
    <p style="color:#374151;line-height:1.6;">Please ensure you are available at the scheduled time.</p>
  `);
  await sendEmail(to, `Reminder: Your Consultation is ${urgency} — GIVS Law`, html, "consultation_reminder");
}

export async function emailDocumentUploaded(to: string, data: {
  advisorName: string;
  clientName: string;
  documentName: string;
  caseRef: string;
}) {
  const html = wrap(`
    <h2 style="color:#0B1B3D;margin:0 0 1rem;">New Document Uploaded</h2>
    <p style="color:#374151;line-height:1.6;">Hi ${data.advisorName},</p>
    <p style="color:#374151;line-height:1.6;"><strong>${data.clientName}</strong> has uploaded a new document for case <strong>${data.caseRef}</strong>:</p>
    <div style="background:#EFF6FF;padding:1rem;border-radius:0.5rem;margin:1rem 0;border-left:4px solid #3B82F6;">
      <p style="margin:0;color:#111827;"><strong>${data.documentName}</strong></p>
    </div>
    <p style="color:#374151;line-height:1.6;">Please review this document at your earliest convenience.</p>
  `);
  await sendEmail(to, `New Document: ${data.documentName} — ${data.caseRef}`, html, "document_uploaded");
}

export async function emailDocumentReviewed(to: string, data: {
  clientName: string;
  documentName: string;
  status: string;
  feedback?: string;
}) {
  const isApproved = data.status === "APPROVED";
  const statusColor = isApproved ? "#10B981" : "#EF4444";
  const statusBg = isApproved ? "#F0FDF4" : "#FEF2F2";
  const statusLabel = isApproved ? "Approved" : "Needs Correction";

  const html = wrap(`
    <h2 style="color:#0B1B3D;margin:0 0 1rem;">Document Review Update</h2>
    <p style="color:#374151;line-height:1.6;">Dear ${data.clientName},</p>
    <p style="color:#374151;line-height:1.6;">Your document <strong>${data.documentName}</strong> has been reviewed:</p>
    <div style="background:${statusBg};padding:1rem;border-radius:0.5rem;margin:1rem 0;border-left:4px solid ${statusColor};">
      <p style="margin:0;color:${statusColor};font-weight:700;font-size:1.125rem;">${statusLabel}</p>
      ${data.feedback ? `<p style="margin:0.5rem 0 0;color:#374151;">${data.feedback}</p>` : ""}
    </div>
    ${!isApproved ? `<p style="color:#374151;line-height:1.6;">Please upload a corrected version through your client portal.</p>` : `<p style="color:#374151;line-height:1.6;">No further action is needed for this document.</p>`}
  `);
  await sendEmail(to, `Document ${statusLabel}: ${data.documentName} — GIVS Law`, html, "document_reviewed");
}

export async function emailNewMessage(to: string, data: {
  recipientName: string;
  senderName: string;
  preview: string;
  caseRef: string;
}) {
  const html = wrap(`
    <h2 style="color:#0B1B3D;margin:0 0 1rem;">New Message</h2>
    <p style="color:#374151;line-height:1.6;">Dear ${data.recipientName},</p>
    <p style="color:#374151;line-height:1.6;">You have a new message from <strong>${data.senderName}</strong> regarding case <strong>${data.caseRef}</strong>:</p>
    <div style="background:#F9FAFB;padding:1rem;border-radius:0.5rem;margin:1rem 0;border-left:4px solid #6366F1;">
      <p style="margin:0;color:#374151;font-style:italic;">"${data.preview}"</p>
    </div>
    <p style="color:#374151;line-height:1.6;">Log in to your portal to view and reply.</p>
  `);
  await sendEmail(to, `New Message on ${data.caseRef} — GIVS Law`, html, "new_message");
}

export async function emailCaseStageChanged(to: string, data: {
  clientName: string;
  caseRef: string;
  newStage: string;
  explanation: string;
}) {
  const html = wrap(`
    <h2 style="color:#0B1B3D;margin:0 0 1rem;">Case Update</h2>
    <p style="color:#374151;line-height:1.6;">Dear ${data.clientName},</p>
    <p style="color:#374151;line-height:1.6;">Your case <strong>${data.caseRef}</strong> has been updated:</p>
    <div style="background:#F0FDF4;padding:1rem;border-radius:0.5rem;margin:1rem 0;border-left:4px solid #10B981;">
      <p style="margin:0;color:#0B1B3D;font-weight:700;font-size:1.125rem;">${data.newStage.replace(/_/g, " ")}</p>
    </div>
    <p style="color:#374151;line-height:1.6;">${data.explanation}</p>
    <p style="color:#374151;line-height:1.6;">Log in to your client portal to view your full case progress.</p>
  `);
  await sendEmail(to, `Case Update: ${data.caseRef} — GIVS Law`, html, "case_stage_changed");
}
