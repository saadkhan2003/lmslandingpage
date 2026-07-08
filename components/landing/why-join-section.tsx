import { Users, Rocket, Search, Zap, FileText, ClipboardList } from "lucide-react";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const features = [
  {
    title: "Beginner Friendly",
    description: "No previous business or AI experience required.",
    icon: Users,
  },
  {
    title: "Step-by-Step Roadmap",
    description: "Follow a clear 5-day action plan from learning to client outreach.",
    icon: Rocket,
  },
  {
    title: "Client Finding System",
    description: "Learn how to find people who need AI-based services.",
    icon: Search,
  },
  {
    title: "Real AI Business Skills",
    description: "Learn practical services you can offer using AI tools.",
    icon: Zap,
  },
  {
    title: "Templates Included",
    description: "Get message templates, offer examples, and service ideas.",
    icon: FileText,
  },
  {
    title: "Practical Assignments",
    description: "Apply what you learn instead of only watching lessons.",
    icon: ClipboardList,
  },
];

export function WhyJoinSection() {
  return (
    <section className="relative w-full overflow-hidden bg-white py-20 md:py-28">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-emerald-50/60 via-transparent to-transparent" />
      <div className="bg-dots pointer-events-none absolute inset-0 opacity-30" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-emerald-600">
            Why Choose Us
          </p>
          <h2 className="mt-3 text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl md:text-4xl">
            Why Join This Program?
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Everything is designed to help beginners take action quickly and
            confidently.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <Card
              key={feature.title}
              className="group rounded-2xl border border-slate-200 bg-white/80 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-emerald-200 hover:shadow-lg"
              style={{ animationDelay: `${index * 75}ms` }}
            >
              <CardHeader className="pb-3">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-amber-100 transition-colors group-hover:bg-emerald-100">
                  <feature.icon className="h-6 w-6 text-amber-700 transition-colors group-hover:text-emerald-700" />
                </div>
                <CardTitle className="text-lg font-semibold text-slate-950">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
