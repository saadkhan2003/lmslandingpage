import Link from "next/link";

import { Separator } from "@/components/ui/separator";

const navigation = [
  { label: "Home", href: "#" },
  { label: "Program", href: "#program" },
  { label: "Results", href: "#results" },
  { label: "Reviews", href: "#reviews" },
  { label: "FAQs", href: "#faqs" },
];

const legal = [
  { label: "Privacy Policy", href: "#" },
  { label: "Terms of Service", href: "#" },
  { label: "Refund Policy", href: "#" },
];

const contact = [
  { label: "Enroll Now", href: "#pricing" },
  { label: "Support", href: "#" },
  { label: "Questions?", href: "#faqs" },
];

export function Footer() {
  return (
    <footer className="w-full border-t border-slate-200 bg-white py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <Link
              href="#"
              className="text-xl font-bold tracking-tight text-slate-950"
            >
              AI Tools Mastery
            </Link>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-slate-600">
              Helping beginners start practical AI service businesses with a
              clear, step-by-step roadmap.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-950">
              Navigation
            </h3>
            <nav className="mt-4 flex flex-col gap-3">
              {navigation.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-sm text-slate-600 transition-colors hover:text-emerald-600"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-950">
              Legal
            </h3>
            <nav className="mt-4 flex flex-col gap-3">
              {legal.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-sm text-slate-600 transition-colors hover:text-emerald-600"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-950">
              Contact
            </h3>
            <nav className="mt-4 flex flex-col gap-3">
              {contact.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-sm text-slate-600 transition-colors hover:text-emerald-600"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>

        <Separator className="my-10 bg-slate-200" />

        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-sm text-slate-500">
            © 2026 AI Tools Mastery. All rights reserved.
          </p>
          <p className="text-sm text-slate-500">
            Built for beginners. Designed for results.
          </p>
        </div>
      </div>
    </footer>
  );
}
