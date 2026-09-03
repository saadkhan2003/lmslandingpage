import Image from "next/image";
import Link from "next/link";

import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";

const navigation = [
  { label: "Home", href: "#" },
  { label: "Blueprint", href: "#blueprint" },
  { label: "Bonuses", href: "#bonuses" },
  { label: "Reviews", href: "#reviews" },
  { label: "FAQ", href: "#faq" },
  { label: "Community", href: "#community" },
];

const legal = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms of Service", href: "/terms-of-service" },
  { label: "Refund Policy", href: "/refund-policy" },
];

const contact = [
  { label: "Join The Challenge", href: "/payment" },
  { label: "Support", href: "#" },
  { label: "Questions?", href: "#" },
];

export function Footer() {
  return (
    <footer className="relative w-full bg-neutral-950 py-14">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black to-transparent" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <Link
              href="#"
              className="flex items-center gap-2 text-xl font-bold tracking-tight text-white"
            >
              <Image
                src="/logo.png"
                alt="AI Tools Mastery"
                width={40}
                height={40}
                className="h-8 w-8 rounded-lg object-contain"
              />
            </Link>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-white/60">
              A step-by-step system to learn AI Tools, find customers, and get
              your first sale in just 3 days.
            </p>
            <Badge className="mt-4 w-fit rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/50 hover:bg-white/5">
              130+ Marketers
            </Badge>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Navigation
            </h3>
            <nav className="mt-4 flex flex-col gap-3">
              {navigation.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-sm text-white/60 transition-colors hover:text-red-500"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Legal
            </h3>
            <nav className="mt-4 flex flex-col gap-3">
              {legal.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-sm text-white/60 transition-colors hover:text-red-500"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Contact
            </h3>
            <nav className="mt-4 flex flex-col gap-3">
              {contact.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-sm text-white/60 transition-colors hover:text-red-500"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>

        <Separator className="my-10 bg-white/10" />

        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-sm text-white/50">
            © 2026 AI Tools Mastery. All rights reserved.
          </p>
          <p className="text-sm text-white/50">
            Built for beginners. Designed for your first sale.
          </p>
        </div>
      </div>
    </footer>
  );
}
