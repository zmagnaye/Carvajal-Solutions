import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://carvajalsolutions.com"),

  title: {
    default: "Carvajal Solutions | Business Automation Consulting",
    template: "%s | Carvajal Solutions",
  },

  description:
    "Carvajal Solutions helps businesses automate repetitive workflows, improve follow-up, streamline intake and scheduling, connect systems, and reduce unnecessary manual work.",

  applicationName: "Carvajal Solutions",

  keywords: [
    "business automation consulting",
    "workflow automation",
    "business process automation",
    "lead follow-up automation",
    "intake automation",
    "scheduling automation",
    "notification automation",
    "system integration",
    "process automation",
    "Carvajal Solutions",
  ],

  authors: [
    {
      name: "Carvajal Solutions",
    },
  ],

  creator: "Carvajal Solutions",
  publisher: "Carvajal Solutions",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://carvajalsolutions.com",
    siteName: "Carvajal Solutions",
    title: "Carvajal Solutions | Business Automation Consulting",
    description:
      "Practical business automation consulting for workflows, follow-up, intake, scheduling, notifications, and connected processes.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Carvajal Solutions business automation consulting",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Carvajal Solutions | Business Automation Consulting",
    description:
      "Practical business automation consulting for workflows, follow-up, intake, scheduling, notifications, and connected processes.",
    images: ["/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  category: "business",

  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={montserrat.variable}>{children}</body>
    </html>
  );
}