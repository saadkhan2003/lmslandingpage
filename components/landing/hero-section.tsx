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
      {/* Mentor background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/mentor.jpg"
          alt=""
          fill
          className="object-cover object-top sm:object-center"
          priority
          sizes="100vw"
        />
        {/* Dark overlay so text is readable */}
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/70" />
      </div>

      {/* Bottom fade into next section */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-black sm:h-40" />

      {/* Red glow accents */}
      <div className="pointer-events-none absolute -right-40 -top-40 h-[400px] w-[400px] rounded-full bg-red-600/20 blur-3xl sm:h-[600px] sm:w-[600px]" />
      <div className="pointer-events-none absolute -bottom-40 -left-40 h-[400px] w-[400px] rounded-full bg-red-600/10 blur-3xl sm:h-[600px] sm:w-[600px]" />

      <div className="relative mx-auto max-w-4xl px-4 pt-8 text-center sm:px-6 sm:pt-12 lg:px-8">
        <div className="flex flex-col items-center gap-5 sm:gap-6 md:gap-8">
          <Badge className="flex w-fit items-center gap-1.5 rounded-full border border-red-500/30 bg-red-500/10 px-3 py-1 text-xs font-semibold text-red-400 hover:bg-red-500/10 backdrop-blur-sm sm:gap-2 sm:px-4 sm:py-1.5 sm:text-sm">
            <span className="relative flex h-1.5 w-1.5 sm:h-2 sm:w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-500 opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-red-500 sm:h-2 sm:w-2" />
            </span>
            <Radio className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
            <span className="hidden sm:inline">Recorded Session is Available NOW</span>
            <span className="sm:hidden">Recorded Session NOW</span>
          </Badge>

          <h1 className="text-2xl font-bold tracking-tight text-white sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
            We Challenge YOU To Get Your First{" "}
            <span className="text-gradient">AI Tools Customer</span>{" "}
            In Just <span className="text-red-500">3 Days</span>
          </h1>

          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            <Badge
              variant="secondary"
              className="gap-1 rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-white/80 backdrop-blur-sm sm:gap-1.5 sm:px-3 sm:py-1.5 sm:text-sm"
            >
              No Experience Needed
            </Badge>
            <Badge
              variant="secondary"
              className="gap-1 rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-white/80 backdrop-blur-sm sm:gap-1.5 sm:px-3 sm:py-1.5 sm:text-sm"
            >
              No Big Investment
            </Badge>
            <Badge
              variant="secondary"
              className="gap-1 rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-white/80 backdrop-blur-sm sm:gap-1.5 sm:px-3 sm:py-1.5 sm:text-sm"
            >
              No Complicated Business Model
            </Badge>
          </div>

          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <Button
              asChild
              className="h-12 w-full rounded-xl bg-red-600 px-6 text-sm font-semibold text-white shadow-[0_0_40px_-8px_rgb(220_38_38/0.8)] transition-all hover:-translate-y-0.5 hover:bg-red-500 sm:h-13 sm:w-auto sm:px-8 sm:text-base"
            >
              <Link href="#pricing">
                Join AI Tools Business Mastery Today
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="h-12 w-full rounded-xl border-white/20 bg-white/5 px-6 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:-translate-y-0.5 hover:bg-white/10 sm:h-13 sm:w-auto sm:px-8 sm:text-base"
            >
              <Link href="#blueprint">
                <PlayCircle className="mr-2 h-4 w-4" />
                View Blueprint
              </Link>
            </Button>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2 pt-1 sm:gap-3 sm:pt-2">
            <Badge
              variant="secondary"
              className="gap-1 rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-white/80 backdrop-blur-sm sm:gap-1.5 sm:px-3 sm:py-1.5 sm:text-sm"
            >
              <Star className="h-3 w-3 fill-red-500 text-red-500 sm:h-4 sm:w-4" />
              <span className="font-semibold text-white">4.9</span>
              <span className="hidden sm:inline">Rating</span>
            </Badge>
            <Badge
              variant="secondary"
              className="gap-1 rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-white/80 backdrop-blur-sm sm:gap-1.5 sm:px-3 sm:py-1.5 sm:text-sm"
            >
              <Users className="h-3 w-3 text-red-500 sm:h-4 sm:w-4" />
              <span className="font-semibold text-white">130+</span>
              <span className="hidden sm:inline">Marketers</span>
            </Badge>
            <Badge
              variant="secondary"
              className="gap-1 rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-white/80 backdrop-blur-sm sm:gap-1.5 sm:px-3 sm:py-1.5 sm:text-sm"
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
