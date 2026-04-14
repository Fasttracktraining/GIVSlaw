"use client";

import { ToastProvider } from "@/components/shared/Toast";
import { ReactNode } from "react";

export default function LeadDetailClient({ children }: { children: ReactNode }) {
  return <ToastProvider>{children}</ToastProvider>;
}
