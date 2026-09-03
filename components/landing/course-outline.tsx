import { Badge } from "@/components/ui/badge";
import {
  BookOpen,
  ShoppingCart,
  Globe,
  MessageCircle,
  Shield,
  Mic,
  HelpCircle,
} from "lucide-react";

const modules = [
  {
    icon: BookOpen,
    label: "Introduction",
    title: "How to Start an AI Tools Business",
    subtitle: "Beginner's Guide",
    classes: [],
    color: "text-blue-400",
    bg: "bg-blue-500/10",
    ring: "ring-blue-500/20",
  },
  {
    icon: ShoppingCart,
    label: "Module 1",
    title: "Sourcing & Buying",
    subtitle: "",
    classes: [
      "How to Buy Tools From BOT",
      "How to Add $ in Binance",
      "How to Transfer $$ to BOT",
    ],
    color: "text-green-400",
    bg: "bg-green-500/10",
    ring: "ring-green-500/20",
  },
  {
    icon: Globe,
    label: "Module 2",
    title: "Facebook Ads Mastery",
    subtitle: "",
    classes: [
      "Facebook Business Page Creation Masterclass",
      "How to Add Payment Method in Facebook Ads",
      "How to Run WhatsApp Ad for Tools",
      "How to Design a Creative With AI in 10 Seconds",
    ],
    color: "text-blue-500",
    bg: "bg-blue-500/10",
    ring: "ring-blue-500/20",
  },
  {
    icon: MessageCircle,
    label: "Module 3",
    title: "WhatsApp Organic Mastery",
    subtitle: "",
    classes: ["WhatsApp Organic Mastery"],
    color: "text-green-500",
    bg: "bg-green-500/10",
    ring: "ring-green-500/20",
  },
  {
    icon: Shield,
    label: "Module 4",
    title: "Trusted Seller vs Scammer",
    subtitle: "How to Spot the Difference",
    classes: [],
    color: "text-yellow-400",
    bg: "bg-yellow-500/10",
    ring: "ring-yellow-500/20",
  },
  {
    icon: Mic,
    label: "Module 5",
    title: "ElevenLabs Secret Method",
    subtitle: "Step-by-Step for Beginners",
    classes: [],
    color: "text-purple-400",
    bg: "bg-purple-500/10",
    ring: "ring-purple-500/20",
  },
  {
    icon: HelpCircle,
    label: "Q&A / Support",
    title: "Foundation Session",
    subtitle: "Questions Every Beginner Asks",
    classes: [],
    color: "text-red-400",
    bg: "bg-red-500/10",
    ring: "ring-red-500/20",
  },
];

export function CourseOutline() {
  return (
    <section
      id="outline"
      className="relative w-full overflow-hidden bg-neutral-950 py-20 md:py-28"
    >
      <div className="bg-grid-subtle pointer-events-none absolute inset-0" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black to-transparent" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[400px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-600/10 blur-3xl" />

      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <Badge className="mx-auto w-fit rounded-full border border-red-500/30 bg-red-500/10 px-4 py-1.5 text-sm font-semibold text-red-400 hover:bg-red-500/10">
            Course Outline
          </Badge>
          <h2 className="mt-4 text-2xl font-bold tracking-tight text-white sm:text-3xl md:text-4xl">
            What You&apos;ll{" "}
            <span className="text-gradient">Learn</span>
          </h2>
          <p className="mt-4 text-lg text-white/60">
            5 modules + Q&A covering everything from zero to your first sale.
          </p>
        </div>

        <div className="mt-14 space-y-4">
          {modules.map((mod, i) => (
            <div
              key={i}
              className="group rounded-2xl border border-white/10 bg-white/5 p-5 transition-all duration-300 hover:border-white/20 hover:bg-white/[0.07] sm:p-6"
            >
              <div className="flex items-start gap-4">
                <div
                  className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${mod.bg} ring-1 ${mod.ring} transition-colors group-hover:scale-105`}
                >
                  <mod.icon className={`h-5 w-5 ${mod.color}`} />
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <Badge
                      className={`w-fit rounded-full ${mod.bg} ${mod.color} border-0 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-widest hover:${mod.bg}`}
                    >
                      {mod.label}
                    </Badge>
                  </div>
                  <h3 className="mt-1.5 text-lg font-semibold text-white">
                    {mod.title}
                    {mod.subtitle && (
                      <span className="ml-2 text-sm font-normal text-white/50">
                        — {mod.subtitle}
                      </span>
                    )}
                  </h3>
                  {mod.classes.length > 0 && (
                    <ul className="mt-3 space-y-1.5">
                      {mod.classes.map((cls, j) => (
                        <li
                          key={j}
                          className="flex items-center gap-2 text-sm text-white/50"
                        >
                          <span className="h-1 w-1 shrink-0 rounded-full bg-white/30" />
                          {cls}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
