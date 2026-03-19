import type { Metadata } from "next";
import { Inter, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "900"],
  variable: "--font-inter",
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-ibm-plex-mono",
});

export const metadata: Metadata = {
  title: "AIValueWorx \u2014 A certain path from pilots to production",
  description:
    "Turn AI into measured value, safely. Roadmaps, governance, delivery\u2014without the theatre. Free policy check + 200+ case studies.",
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"
  ),
  openGraph: {
    title: "AIValueWorx \u2014 A certain path from pilots to production",
    description:
      "Turn AI into measured value, safely. Roadmaps, governance, delivery\u2014without the theatre.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${ibmPlexMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
