import { Users, Star, BookOpen, Award } from "lucide-react";

const stats = [
  {
    icon: Users,
    value: "79+",
    label: "Successful Students",
  },
  {
    icon: Star,
    value: "5.0",
    label: "Average Rating",
  },
  {
    icon: BookOpen,
    value: "6",
    label: "Practical Modules",
  },
  {
    icon: Award,
    value: "5-Day",
    label: "Action Roadmap",
  },
];

export function StatsSection() {
  return (
    <section className="relative w-full border-y border-slate-200 bg-stone-50 py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-px divide-y divide-slate-200 bg-slate-200 sm:grid-cols-2 sm:divide-y-0 sm:divide-x lg:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center gap-3 bg-stone-50 py-8 text-center transition-colors hover:bg-white"
            >
              <stat.icon className="h-6 w-6 text-emerald-600" />
              <div>
                <p className="text-3xl font-bold tracking-tight text-slate-950">
                  {stat.value}
                </p>
                <p className="mt-1 text-sm font-medium text-slate-600">
                  {stat.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
