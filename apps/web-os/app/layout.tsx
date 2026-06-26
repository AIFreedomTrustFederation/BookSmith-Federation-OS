import type { ReactNode } from "react";
import "./globals.css";

export const metadata = {
  title: "BookSmith Federation OS",
  description: "Phase 0.1 desktop shell for the AI Freedom Trust Federation.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
