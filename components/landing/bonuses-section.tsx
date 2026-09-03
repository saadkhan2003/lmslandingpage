import Link from "next/link";
import {
  Users,
  Infinity as InfinityIcon,
  Crown,
  Bot,
  BadgeCheck,
  Zap,
  Wallet,
  ArrowRight,
  Gift,
  Sparkles,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const bonuses = [
  {
    icon: Users,
    title: "Paid Community",
    description: "Get access to the private paid community of action-takers.",
    accent: "from-blue-500/20 to-blue-600/5",
    iconBg: "bg-blue-500/15 ring-blue-500/30",
    iconColor: "text-blue-400",
  },
  {
    icon: InfinityIcon,
    title: "Course Lifetime Access",
    description: "Keep the full course forever and revisit it anytime.",
    accent: "from-purple-500/20 to-purple-600/5",
    iconBg: "bg-purple-500/15 ring-purple-500/30",
    iconColor: "text-purple-400",
  },
  {
    icon: Crown,
    title: "Lifetime Membership",
    description: "Lifetime membership with all updates for 2 years included.",
    accent: "from-amber-500/20 to-amber-600/5",
    iconBg: "bg-amber-500/15 ring-amber-500/30",
    iconColor: "text-amber-400",
  },
  {
    icon: Bot,
    title: "FREE BOTs (Worth 10K Each)",
    description: "Ready-to-use AI bots you can sell — worth 10K each.",
    accent: "from-red-500/20 to-red-600/5",
    iconBg: "bg-red-500/15 ring-red-500/30",
    iconColor: "text-red-400",
    highlight: true,
  },
  {
    icon: BadgeCheck,
    title: "Trusted Seller",
    description: "Buy from a trusted seller people are happy to buy from.",
    accent: "from-emerald-500/20 to-emerald-600/5",
    iconBg: "bg-emerald-500/15 ring-emerald-500/30",
    iconColor: "text-emerald-400",
  },
  {
    icon: Zap,
    title: "First Sell in Just 3 Days",
    description: "A proven system to land your first sale in just 3 days.",
    accent: "from-orange-500/20 to-orange-600/5",
    iconBg: "bg-orange-500/15 ring-orange-500/30",
    iconColor: "text-orange-400",
  },
  {
    icon: Wallet,
    title: "2nd Income Source",
    description: "Build a reliable second income source from AI tools.",
    accent: "from-cyan-500/20 to-cyan-600/5",
    iconBg: "bg-cyan-500/15 ring-cyan-500/30",
    iconColor: "text-cyan-400",
  },
];

export function BonusesSection() {
  return (
    <section
      id="bonuses"
      className="relative w-full overflow-hidden bg-black py-20 md:py-28"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-neutral-950 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-neutral-950 to-transparent" />
      <div className="pointer-events-none absolute -bottom-20 right-1/2 h-[400px] w-[700px] translate-x-1/2 rounded-full bg-red-600/10 blur-3xl" />
      <div className="pointer-events-none absolute -top-20 left-1/2 h-[300px] w-[500px] -translate-x-1/2 rounded-full bg-red-600/8 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <Badge className="mx-auto w-fit rounded-full border border-red-500/30 bg-red-500/10 px-4 py-1.5 text-sm font-semibold text-red-400 hover:bg-red-500/10">
            <Gift className="mr-1 h-3.5 w-3.5" />
            Everything Included
          </Badge>
          <h2 className="mt-4 text-2xl font-bold tracking-tight text-white sm:text-3xl md:text-4xl">
            What You&apos;ll Get In This Program
          </h2>
          <p className="mt-4 text-lg text-white/60">
            Worth it. Every FREE BOT alone is worth 10K each.
          </p>
        </div>

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {bonuses.map((bonus, index) => (
            <Card
              key={bonus.title}
              className={`group relative overflow-hidden rounded-2xl border-0 bg-neutral-900 ring-1 transition-all duration-300 hover:-translate-y-2 ${
                bonus.highlight
                  ? "ring-red-500/50 shadow-[0_0_30px_-6px_rgb(220_38_38/0.3)]"
                  : "ring-white/10 hover:ring-white/25"
              }`}
            >
              {/* Gradient glow top-left */}
              <div
                className={`pointer-events-none absolute -left-20 -top-20 h-40 w-40 rounded-full bg-gradient-to-br blur-2xl transition-opacity duration-500 group-hover:opacity-100 ${
                  bonus.highlight ? "opacity-80" : "opacity-0"
                } ${bonus.accent}`}
              />
              {/* Number badge */}
              <div className="absolute right-4 top-4 text-4xl font-black text-white/[0.04]">
                0{index + 1}
              </div>
              <CardContent className="relative flex items-start gap-4 p-5">
                <div
                  className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ring-1 transition-all duration-300 group-hover:scale-110 ${bonus.iconBg}`}
                >
                  <bonus.icon className={`h-6 w-6 ${bonus.iconColor}`} />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="flex items-center gap-2 font-semibold text-white">
                    {bonus.title}
                    {bonus.highlight && (
                      <Sparkles className="h-3.5 w-3.5 text-red-400 animate-pulse" />
                    )}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-white/50">
                    {bonus.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Separator className="my-12 bg-white/10" />

        <div className="flex justify-center">
          <Button
            asChild
            className="h-13 rounded-xl bg-red-600 px-8 text-base font-semibold text-white shadow-[0_0_40px_-8px_rgb(220_38_38/0.8)] transition-all hover:-translate-y-0.5 hover:bg-red-500"
          >
            <Link href="#pricing">
              Join The 3-Day Challenge
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
