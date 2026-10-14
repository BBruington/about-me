import type { Metadata } from "next";
import { IBM_Plex_Mono, IBM_Plex_Sans, Newsreader } from "next/font/google";
import "./globals.css";

const sans = IBM_Plex_Sans({ subsets: ["latin"], weight: ["400", "500", "600"], variable: "--font-sans" });
const serif = Newsreader({ subsets: ["latin"], style: ["normal", "italic"], variable: "--font-serif" });
const mono = IBM_Plex_Mono({ subsets: ["latin"], weight: ["400"], variable: "--font-mono" });

export const metadata: Metadata = {
  title: "Benjamin Bruington · Full-stack engineer",
  description:
    "Full-stack engineer (React, Next.js, TypeScript, Go) building AI features and tools that make technical systems usable by non-engineers.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${sans.variable} ${serif.variable} ${mono.variable} motion-safe:scroll-smooth`}>
      <body className="bg-background font-sans text-foreground antialiased">{children}</body>
    </html>
  );
}
