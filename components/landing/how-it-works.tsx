import { BookOpen, Target, MessageCircle, TrendingUp } from "lucide-react";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const steps = [
  {
    number: "01",
    title: "Learn AI Tools",
    description:
      "Understand the most useful AI tools and how they can solve real business problems.",
    icon: BookOpen,
  },
  {
    number: "02",
    title: "Pick a High-Demand Service",
    description:
      "Choose a simple AI service that people and businesses are already willing to pay for.",
    icon: Target,
  },
  {
    number: "03",
    title: "Find & Close Clients",
    description:
      "Learn how to reach potential clients, message them, and close your first deal.",
    icon: MessageCircle,
  },
  {
    number: "04",
    title: "Earn, Improve & Scale",
    description:
      "Deliver the service, improve your offer, and grow your income step by step.",
    icon: TrendingUp,
  },
];

export function HowItWorks() {
  return (
    <section id="program" className="relative w-full bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-emerald-600">
            Simple Process
          </p>
          <h2 className="mt-3 text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl md:text-4xl">
            How The Program Works
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            A simple step-by-step roadmap to help you go from beginner to
            action-taker.
          </p>
        </div>

        <div className="relative mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Connecting line - desktop only */}
          <div className="pointer-events-none absolute top-[3.5rem] left-0 hidden h-0.5 w-full bg-gradient-to-r from-emerald-100 via-emerald-200 to-emerald-100 lg:block" />

          {steps.map((step, index) => (
            <Card
              key={step.number}
              className="relative rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader className="pb-3">
                <div className="relative mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100 ring-4 ring-white">
                  <step.icon className="h-6 w-6 text-emerald-700" />
                </div>
                <div className="absolute right-5 top-5 text-4xl font-bold text-slate-100">
                  {step.number}
                </div>
                <CardTitle className="text-xl font-semibold text-slate-950">
                  {step.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
