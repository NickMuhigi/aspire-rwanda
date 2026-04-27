import "./global.css";

import { ReactNode } from "react";
import type { Viewport } from "next";

export const metadata = {
  title: `Aspire Rwanda: Homepage`,
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
