import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Carvajal Solutions | AI Lead Follow-Up Automation",
  description:
    "Carvajal Solutions helps businesses respond faster, follow up consistently, qualify leads, and move opportunities toward appointments.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}