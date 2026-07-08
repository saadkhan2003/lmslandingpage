import Link from "next/link";
import { CheckCircle, ArrowRight, Sparkles } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const trustBullets = [
  "Limited seats available",
  "Beginner friendly",
  "Lifetime access",
  "Templates included",
  "Practical roadmap",
  "6 complete modules",
  "Exclusive bonuses",
];

export function PricingSection() {
  return (
    <section id="pricing" className="relative w-full overflow-hidden bg-stone-50 py-20 md:py-28">
      <div className="bg-grid pointer-events-none absolute inset-0" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-stone-50 via-transparent to-stone-50" />
      <div className="pointer-events-none absolute -left-40 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-emerald-100/50 blur-3xl" />
      <div className="pointer-events-none absolute -right-40 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-amber-100/50 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <Badge className="rounded-full bg-emerald-100 px-4 py-1.5 text-sm font-semibold text-emerald-800 hover:bg-emerald-100">
            <Sparkles className="mr-1.5 h-3.5 w-3.5" />
            Limited-Time Offer
          </Badge>
          <h2 className="mt-4 text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl md:text-5xl">
            Join AI Tools Business Mastery Today
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Get the complete roadmap, templates, bonuses, and practical training
            for one simple price.
          </p>
        </div>

        <div className="mt-14 flex justify-center">
          <Card className="relative w-full max-w-lg overflow-hidden rounded-3xl border-2 border-emerald-600 bg-white shadow-2xl shadow-emerald-900/10">
            <div className="absolute right-0 top-0 rounded-bl-2xl bg-emerald-600 px-5 py-2 text-sm font-bold text-white">
              SAVE Rs. 2001
            </div>

            <CardHeader className="pb-4 pt-12 text-center">
              <CardTitle className="text-xl font-bold text-slate-950 sm:text-2xl">
                AI Tools Business Mastery Program
              </CardTitle>
              <p className="mt-2 text-sm text-slate-500">
                Everything you need to start your AI service business
              </p>
            </CardHeader>

            <CardContent className="space-y-8">
              <div className="flex items-end justify-center gap-4">
                <span className="text-2xl text-slate-400 line-through">
                  Rs. 5000
                </span>
                <span className="text-5xl font-bold tracking-tight text-slate-950 sm:text-6xl">
                  Rs. 2999
                </span>
              </div>

              <ul className="grid gap-3 sm:grid-cols-2">
                {trustBullets.map((bullet) => (
                  <li
                    key={bullet}
                    className="flex items-center gap-3 text-sm font-medium text-slate-700"
                  >
                    <CheckCircle className="h-5 w-5 shrink-0 text-emerald-600" />
                    {bullet}
                  </li>
                ))}
              </ul>

              <Button
                asChild
                size="lg"
                className="h-12 w-full rounded-xl bg-emerald-600 text-base font-semibold shadow-lg shadow-emerald-900/15 transition-all hover:-translate-y-0.5 hover:bg-emerald-700 hover:shadow-xl"
              >
                <Link href="#pricing">
                  Enroll Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>

              <p className="text-center text-sm text-slate-500">
                Start today and follow the 5-day action roadmap.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
