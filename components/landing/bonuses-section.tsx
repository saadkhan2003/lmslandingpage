import { Gift, MessageCircle, TrendingUp, BookOpen } from "lucide-react";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const bonuses = [
  {
    title: "AI Tools List",
    description: "A curated list of useful AI tools you can use to create services.",
    icon: Gift,
  },
  {
    title: "Client Message Templates",
    description: "Ready-to-use messages for reaching potential clients.",
    icon: MessageCircle,
  },
  {
    title: "Service Pricing Guide",
    description: "Learn how to price your AI services with confidence.",
    icon: TrendingUp,
  },
  {
    title: "Offer Creation Sheet",
    description: "A simple worksheet to help you build your first service offer.",
    icon: BookOpen,
  },
];

export function BonusesSection() {
  return (
    <section className="relative w-full overflow-hidden bg-white py-20 md:py-28">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,_var(--tw-gradient-stops))] from-amber-50/50 via-transparent to-transparent" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-emerald-600">
            Free Bonuses
          </p>
          <h2 className="mt-3 text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl md:text-4xl">
            Exclusive Bonuses Included
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Join today and get extra resources to help you take action faster.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {bonuses.map((bonus, index) => (
            <Card
              key={bonus.title}
              className="group rounded-2xl border border-slate-200 bg-white/80 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-amber-200 hover:shadow-lg"
              style={{ animationDelay: `${index * 75}ms` }}
            >
              <CardHeader className="pb-3">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-amber-100 transition-colors group-hover:bg-emerald-100">
                  <bonus.icon className="h-6 w-6 text-amber-700 transition-colors group-hover:text-emerald-700" />
                </div>
                <CardTitle className="text-lg font-semibold text-slate-950">
                  {bonus.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">{bonus.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
