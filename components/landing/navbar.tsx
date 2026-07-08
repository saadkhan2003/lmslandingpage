"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, Sparkles, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";

const navLinks = [
  { label: "Home", href: "#" },
  { label: "Program", href: "#program" },
  { label: "Results", href: "#results" },
  { label: "Reviews", href: "#reviews" },
  { label: "FAQs", href: "#faqs" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  const handleNavClick = () => setOpen(false);

  return (
    <header className="sticky top-0 z-50 h-[72px] w-full border-b border-slate-200/80 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          href="#"
          className="flex items-center gap-2 text-lg font-bold tracking-tight text-slate-950 sm:text-xl"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-600 text-white">
            <Sparkles className="h-4 w-4" />
          </span>
          AI Tools Mastery
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="relative text-sm font-medium text-slate-600 transition-colors hover:text-slate-950"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button
            asChild
            className="h-11 rounded-xl bg-slate-950 px-6 font-medium shadow-md shadow-slate-900/10 transition-all hover:-translate-y-0.5 hover:bg-slate-800 hover:shadow-lg"
          >
            <Link href="#pricing">Enroll Now</Link>
          </Button>
        </div>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-slate-950 transition-colors hover:bg-slate-100 md:hidden"
            aria-label="Open menu"
          >
            <Menu className="h-6 w-6" />
          </SheetTrigger>
          <SheetContent side="right" className="w-full border-l border-slate-200 bg-white px-0 sm:w-[360px]">
            <SheetHeader className="px-6 pb-4">
              <SheetTitle className="flex items-center gap-2 text-left text-xl font-bold text-slate-950">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-600 text-white">
                  <Sparkles className="h-4 w-4" />
                </span>
                AI Tools Mastery
              </SheetTitle>
            </SheetHeader>

            <Separator className="bg-slate-100" />

            <nav className="flex flex-col py-4">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={handleNavClick}
                  className="px-6 py-3 text-base font-medium text-slate-600 transition-colors hover:bg-slate-50 hover:text-slate-950"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <Separator className="bg-slate-100" />

            <div className="p-6">
              <Button
                asChild
                className="h-12 w-full rounded-xl bg-slate-950 text-base font-semibold hover:bg-slate-800"
              >
                <Link href="#pricing" onClick={handleNavClick}>
                  Enroll Now
                </Link>
              </Button>
              <p className="mt-3 text-center text-xs text-slate-500">
                Join 79+ students already taking action.
              </p>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
