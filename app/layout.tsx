import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AI Tools Business Mastery Program | Start Your AI Business in 5 Days",
  description:
    "Join the AI Tools Business Mastery Program and learn how to find high-demand AI services, close clients, and start building your first income stream with a simple 5-day roadmap.",
  openGraph: {
    title: "AI Tools Business Mastery Program",
    description:
      "A practical beginner-friendly program to help you start an AI tools business, find clients, and build your first income system.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
