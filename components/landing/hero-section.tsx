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
    <section className="relative w-full overflow-hidden bg-black">
      {/* Desktop: full background image */}
      <div className="absolute inset-0 hidden sm:block">
        <Image
          src="/images/mentor.jpg"
          alt=""
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black" />
      </div>

      {/* Mobile: mentor image at bottom */}
      <div className="relative sm:hidden">
        <div className="px-4 pt-8 pb-0">
          <div className="flex flex-col items-center gap-4">
            <Badge className="flex w-fit items-center gap-1.5 rounded-full border border-red-500/30 bg-red-500/10 px-3 py-1 text-xs font-semibold text-red-400 backdrop-blur-sm">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-500 opacity-75" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-red-500" />
              </span>
              <Radio className="h-3 w-3" />
              Recorded Session NOW
            </Badge>

            <h1 className="text-center text-[22px] font-bold leading-tight tracking-tight text-white">
              We Challenge YOU To Get Your First{" "}
              <span className="text-gradient">AI Tools Customer</span>{" "}
              In Just <span className="text-red-500">3 Days</span>
            </h1>

            <div className="flex flex-wrap items-center justify-center gap-1.5">
              <Badge
                variant="secondary"
                className="gap-1 rounded-full border border-white/10 bg-white/5 px-2 py-1 text-[10px] text-white/80 backdrop-blur-sm"
              >
                No Experience Needed
              </Badge>
              <Badge
                variant="secondary"
                className="gap-1 rounded-full border border-white/10 bg-white/5 px-2 py-1 text-[10px] text-white/80 backdrop-blur-sm"
              >
                No Big Investment
              </Badge>
              <Badge
                variant="secondary"
                className="gap-1 rounded-full border border-white/10 bg-white/5 px-2 py-1 text-[10px] text-white/80 backdrop-blur-sm"
              >
                No Complicated Model
              </Badge>
            </div>

            <div className="flex w-full flex-col gap-2.5">
              <Button
                asChild
                className="h-11 w-full rounded-xl bg-red-600 px-5 text-sm font-semibold text-white shadow-[0_0_40px_-8px_rgb(220_38_38/0.8)] transition-all hover:-translate-y-0.5 hover:bg-red-500"
              >
                <Link href="/payment">
                  Join Ai Tools Business Mastery
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="h-11 w-full rounded-xl border-white/20 bg-white/5 px-5 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:-translate-y-0.5 hover:bg-white/10"
              >
                <Link href="#outline">
                  <PlayCircle className="mr-2 h-4 w-4" />
                  View Blueprint
                </Link>
              </Button>
            </div>

            <div className="flex items-center justify-center gap-2">
              <Badge
                variant="secondary"
                className="gap-1 rounded-full border border-white/10 bg-white/5 px-2 py-1 text-[10px] text-white/80 backdrop-blur-sm"
              >
                <Star className="h-3 w-3 fill-red-500 text-red-500" />
                <span className="font-semibold text-white">4.9</span>
              </Badge>
              <Badge
                variant="secondary"
                className="gap-1 rounded-full border border-white/10 bg-white/5 px-2 py-1 text-[10px] text-white/80 backdrop-blur-sm"
              >
                <Users className="h-3 w-3 text-red-500" />
                <span className="font-semibold text-white">130+</span>
              </Badge>
              <Badge
                variant="secondary"
                className="gap-1 rounded-full border border-white/10 bg-white/5 px-2 py-1 text-[10px] text-white/80 backdrop-blur-sm"
              >
                <BadgeCheck className="h-3 w-3 text-red-500" />
                2026 Updated
              </Badge>
            </div>
          </div>
        </div>

        {/* Mentor image on mobile */}
        <div className="relative -mt-8 h-[160px] w-full overflow-hidden">
          <Image
            src="/images/mentor.jpg"
            alt="Kashan Ahmad - Ai Tools Business Mastery"
            fill
            className="object-cover object-[center_20%]"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/20 to-transparent" />
        </div>
      </div>

      {/* Desktop content */}
      <div className="relative hidden sm:block">
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-black" />
        <div className="pointer-events-none absolute -right-40 -top-40 h-[600px] w-[600px] rounded-full bg-red-600/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-40 -left-40 h-[600px] w-[600px] rounded-full bg-red-600/10 blur-3xl" />

        <div className="mx-auto max-w-4xl px-6 py-32 text-center lg:px-8">
          <div className="flex flex-col items-center gap-6">
            <Badge className="flex w-fit items-center gap-2 rounded-full border border-red-500/30 bg-red-500/10 px-4 py-1.5 text-sm font-semibold text-red-400 backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-500 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-red-500" />
              </span>
              <Radio className="h-3.5 w-3.5" />
              Recorded Session is Available NOW
            </Badge>

            <h1 className="text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
              We Challenge YOU To Get Your First{" "}
              <span className="text-gradient">AI Tools Customer</span>{" "}
              In Just <span className="text-red-500">3 Days</span>
            </h1>

            <div className="flex flex-wrap items-center justify-center gap-3">
              <Badge
                variant="secondary"
                className="gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-white/80 backdrop-blur-sm"
              >
                No Experience Needed
              </Badge>
              <Badge
                variant="secondary"
                className="gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-white/80 backdrop-blur-sm"
              >
                No Big Investment
              </Badge>
              <Badge
                variant="secondary"
                className="gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-white/80 backdrop-blur-sm"
              >
                No Complicated Business Model
              </Badge>
            </div>

            <div className="flex gap-3">
              <Button
                asChild
                className="h-13 rounded-xl bg-red-600 px-8 text-base font-semibold text-white shadow-[0_0_40px_-8px_rgb(220_38_38/0.8)] transition-all hover:-translate-y-0.5 hover:bg-red-500"
              >
                <Link href="/payment">
                  Join AI Tools Business Mastery Today
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="h-13 rounded-xl border-white/20 bg-white/5 px-8 text-base font-semibold text-white backdrop-blur-sm transition-all hover:-translate-y-0.5 hover:bg-white/10"
              >
                <Link href="#outline">
                  <PlayCircle className="mr-2 h-4 w-4" />
                  View Blueprint
                </Link>
              </Button>
            </div>

            <div className="flex items-center justify-center gap-3 pt-2">
              <Badge
                variant="secondary"
                className="gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-white/80 backdrop-blur-sm"
              >
                <Star className="h-4 w-4 fill-red-500 text-red-500" />
                <span className="font-semibold text-white">4.9</span>
                Rating
              </Badge>
              <Badge
                variant="secondary"
                className="gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-white/80 backdrop-blur-sm"
              >
                <Users className="h-4 w-4 text-red-500" />
                <span className="font-semibold text-white">130+</span>
                Marketers
              </Badge>
              <Badge
                variant="secondary"
                className="gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-white/80 backdrop-blur-sm"
              >
                <BadgeCheck className="h-4 w-4 text-red-500" />
                2026 Fully Updated
              </Badge>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
