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
  title:
    "AI Tools Business Mastery | Get Your First AI Tools Customer In Just 3 Days",
  description:
    "We challenge YOU to get your first AI Tools customer in just 3 days. No coding. No big investment. No complicated business model. Just a step-by-step system to learn AI Tools, find customers, and start selling online.",
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
  openGraph: {
    title: "AI Tools Business Mastery | The 3-Day Challenge",
    description:
      "A step-by-step system to learn AI Tools, find customers, and get your first sale in just 3 days.",
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
      className={`dark ${geistSans.variable} ${geistMono.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
