import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Star,
  Users,
  BadgeCheck,
  Radio,
  PlayCircle,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden bg-black py-24 sm:py-28 md:py-40">
      {/* Background image - same for all devices */}
      <div className="absolute inset-0">
        <Image
          src="/images/mentor.jpg"
          alt=""
          fill
          className="object-cover object-[65%_30%] sm:object-center"
          priority
          sizes="100vw"
        />
        {/* Dark overlays */}
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/20 to-black/80" />
      </div>

      {/* Bottom fade */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-black sm:h-40" />

      {/* Glow accents - hidden on mobile for performance */}
      <div className="pointer-events-none absolute -right-40 -top-40 hidden h-[600px] w-[600px] rounded-full bg-red-600/20 blur-3xl sm:block" />
      <div className="pointer-events-none absolute -bottom-40 -left-40 hidden h-[600px] w-[600px] rounded-full bg-red-600/10 blur-3xl sm:block" />

      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-4 sm:gap-5 md:gap-8">
          <Badge className="flex w-fit items-center gap-1.5 rounded-full border border-red-500/30 bg-red-500/10 px-3 py-1 text-xs font-semibold text-red-400 backdrop-blur-sm sm:gap-2 sm:px-4 sm:py-1.5 sm:text-sm">
            <span className="relative flex h-1.5 w-1.5 sm:h-2 sm:w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-500 opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-red-500 sm:h-2 sm:w-2" />
            </span>
            <Radio className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
            <span className="hidden sm:inline">Recorded Session is Available NOW</span>
            <span className="sm:hidden">Recorded Session NOW</span>
          </Badge>

          <h1 className="text-2xl font-bold leading-tight tracking-tight text-white sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
            We Challenge YOU To Get Your First{" "}
            <span className="text-gradient">AI Tools Customer</span>{" "}
            In Just <span className="text-red-500">3 Days</span>
          </h1>

          <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 md:gap-3">
            <Badge
              variant="secondary"
              className="gap-1 rounded-full border border-white/10 bg-white/5 px-2 py-1 text-[10px] text-white/80 backdrop-blur-sm sm:px-3 sm:py-1.5 sm:text-sm"
            >
              No Experience Needed
            </Badge>
            <Badge
              variant="secondary"
              className="gap-1 rounded-full border border-white/10 bg-white/5 px-2 py-1 text-[10px] text-white/80 backdrop-blur-sm sm:px-3 sm:py-1.5 sm:text-sm"
            >
              No Big Investment
            </Badge>
            <Badge
              variant="secondary"
              className="gap-1 rounded-full border border-white/10 bg-white/5 px-2 py-1 text-[10px] text-white/80 backdrop-blur-sm sm:px-3 sm:py-1.5 sm:text-sm"
            >
              No Complicated Business Model
            </Badge>
          </div>

          <div className="flex w-full flex-col gap-2.5 sm:w-auto sm:flex-row sm:gap-3">
            <Button
              asChild
              className="h-14 w-full rounded-xl bg-red-600 px-6 text-base font-semibold text-white shadow-[0_0_40px_-8px_rgb(220_38_38/0.8)] transition-all hover:-translate-y-0.5 hover:bg-red-500 sm:h-16 sm:w-auto sm:px-10 sm:text-lg"
            >
              <Link href="/payment">
                Join Ai Tools Business Mastery Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="h-14 w-full rounded-xl border-white/20 bg-white/5 px-6 text-base font-semibold text-white backdrop-blur-sm transition-all hover:-translate-y-0.5 hover:bg-white/10 sm:h-16 sm:w-auto sm:px-10 sm:text-lg"
            >
              <Link href="#outline">
                <PlayCircle className="mr-2 h-5 w-5" />
                View Blueprint
              </Link>
            </Button>
          </div>

          <div className="flex items-center justify-center gap-1.5 pt-1 sm:gap-3 sm:pt-2">
            <Badge
              variant="secondary"
              className="gap-1 rounded-full border border-white/10 bg-white/5 px-2 py-1 text-[10px] text-white/80 backdrop-blur-sm sm:px-3 sm:py-1.5 sm:text-sm"
            >
              <Star className="h-3 w-3 fill-red-500 text-red-500 sm:h-4 sm:w-4" />
              <span className="font-semibold text-white">4.9</span>
              <span className="hidden sm:inline">Rating</span>
            </Badge>
            <Badge
              variant="secondary"
              className="gap-1 rounded-full border border-white/10 bg-white/5 px-2 py-1 text-[10px] text-white/80 backdrop-blur-sm sm:px-3 sm:py-1.5 sm:text-sm"
            >
              <Users className="h-3 w-3 text-red-500 sm:h-4 sm:w-4" />
              <span className="font-semibold text-white">130+</span>
              <span className="hidden sm:inline">Marketers</span>
            </Badge>
            <Badge
              variant="secondary"
              className="gap-1 rounded-full border border-white/10 bg-white/5 px-2 py-1 text-[10px] text-white/80 backdrop-blur-sm sm:px-3 sm:py-1.5 sm:text-sm"
            >
              <BadgeCheck className="h-3 w-3 text-red-500 sm:h-4 sm:w-4" />
              <span className="hidden sm:inline">2026 Fully Updated</span>
              <span className="sm:hidden">2026 Updated</span>
            </Badge>
          </div>
        </div>
      </div>
    </section>
  );
}
