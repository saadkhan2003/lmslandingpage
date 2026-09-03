"use client";

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import { Menu } from "lucide-react";

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
  { label: "Blueprint", href: "#outline" },
  { label: "Bonuses", href: "#bonuses" },
  { label: "Reviews", href: "#reviews" },
  { label: "FAQ", href: "#faq" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  const handleNavClick = () => setOpen(false);

  return (
    <header className="sticky top-0 z-50 h-[72px] w-full border-b border-white/10 bg-black/70 backdrop-blur-md">
      <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          href="#"
          className="flex items-center gap-2 text-lg font-bold tracking-tight text-white sm:text-xl"
        >
          <Image
            src="/logo.png"
            alt="AI Tools Mastery"
            width={40}
            height={40}
            className="h-8 w-8 rounded-lg object-contain sm:h-10 sm:w-10"
          />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="relative text-sm font-medium text-white/70 transition-colors hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button
            asChild
            className="h-13 rounded-xl bg-red-600 px-6 font-semibold text-white shadow-[0_0_30px_-6px_rgb(220_38_38/0.7)] transition-all hover:-translate-y-0.5 hover:bg-red-500"
          >
            <Link href="/payment">Join The Challenge</Link>
          </Button>
        </div>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-white transition-colors hover:bg-white/10 md:hidden"
            aria-label="Open menu"
          >
            <Menu className="h-6 w-6" />
          </SheetTrigger>
          <SheetContent
            side="right"
            className="w-full border-l border-white/10 bg-neutral-950 px-0 sm:w-[360px]"
          >
            <SheetHeader className="px-6 pb-4">
              <SheetTitle className="flex items-center gap-2 text-left text-xl font-bold text-white">
                <Image
                  src="/logo.png"
                  alt="AI Tools Mastery"
                  width={32}
                  height={32}
                  className="h-8 w-8 rounded-lg object-contain"
                />
              </SheetTitle>
            </SheetHeader>

            <Separator className="bg-white/10" />

            <nav className="flex flex-col py-4">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={handleNavClick}
                  className="px-6 py-3 text-base font-medium text-white/70 transition-colors hover:bg-white/5 hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <Separator className="bg-white/10" />

            <div className="p-6">
              <Button
                asChild
                className="h-14 w-full rounded-xl bg-red-600 text-base font-semibold text-white hover:bg-red-500"
              >
                <Link href="/payment" onClick={handleNavClick}>
                  Join The Challenge
                </Link>
              </Button>
              <p className="mt-3 text-center text-xs text-white/50">
                130+ marketers already taking action.
              </p>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
