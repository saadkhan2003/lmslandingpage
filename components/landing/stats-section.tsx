import { Users, Star, Cpu, CalendarCheck } from "lucide-react";

import {
  Card,
  CardContent,
} from "@/components/ui/card";

const stats = [
  {
    icon: Users,
    value: "130+",
    label: "Marketers Using This",
  },
  {
    icon: Star,
    value: "4.9%",
    label: "Average Rating",
  },
  {
    icon: Cpu,
    value: "Latest Model",
    label: "AI Tools Business Mastery",
  },
  {
    icon: CalendarCheck,
    value: "2026",
    label: "Fully Updated",
  },
];

export function StatsSection() {
  return (
    <section className="relative w-full bg-neutral-950 py-14">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black to-transparent" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-px divide-y divide-white/10 bg-white/10 sm:grid-cols-2 sm:divide-y-0 sm:divide-x lg:grid-cols-4">
          {stats.map((stat) => (
            <Card
              key={stat.label}
              className="rounded-none border-0 bg-neutral-950 ring-0 transition-colors hover:bg-neutral-900"
            >
              <CardContent className="flex flex-col items-center gap-3 py-8 text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-500/10 ring-1 ring-red-500/20">
                  <stat.icon className="h-6 w-6 text-red-500" />
                </div>
                <div>
                  <p className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-sm font-medium text-white/60">
                    {stat.label}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
