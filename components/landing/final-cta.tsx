import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";

import { Button } from "@/components/ui/button";

const benefits = [
  "5-day action roadmap",
  "Templates + bonuses",
  "Lifetime access",
];

export function FinalCta() {
  return (
    <section className="relative w-full overflow-hidden bg-stone-50 py-20 md:py-28">
      <div className="bg-grid pointer-events-none absolute inset-0" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-stone-50 via-transparent to-stone-50" />
      <div className="pointer-events-none absolute -left-40 top-0 h-[500px] w-[500px] rounded-full bg-emerald-100/60 blur-3xl" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-[500px] w-[500px] rounded-full bg-amber-100/60 blur-3xl" />

      <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl md:text-5xl">
          Ready to Start Your{" "}
          <span className="text-gradient">AI Tools Business</span>?
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-lg text-slate-600">
          Join the AI Tools Business Mastery Program today and start building
          your first income system with a clear step-by-step roadmap.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          {benefits.map((benefit) => (
            <div
              key={benefit}
              className="flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm ring-1 ring-slate-100"
            >
              <CheckCircle className="h-4 w-4 text-emerald-600" />
              {benefit}
            </div>
          ))}
        </div>

        <Button
          asChild
          size="lg"
          className="mt-10 h-12 rounded-xl bg-slate-950 px-10 text-base font-semibold shadow-xl shadow-slate-900/10 transition-all hover:-translate-y-0.5 hover:bg-slate-800 hover:shadow-2xl"
        >
          <Link href="#pricing">
            Enroll Now
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </section>
  );
}
