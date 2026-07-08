import Link from "next/link";
import { CheckCircle, XCircle, ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const otherCoursePoints = [
  "Only theory",
  "No client system",
  "No practical roadmap",
  "No real execution",
  "No templates",
  "Confusing for beginners",
];

const myCoursePoints = [
  "Practical business roadmap",
  "Client closing method",
  "AI tools list included",
  "Templates and bonuses",
  "Beginner-friendly system",
  "5-day action plan",
];

export function ComparisonSection() {
  return (
    <section className="relative w-full overflow-hidden bg-stone-50 py-20 md:py-28">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-emerald-50/50 via-transparent to-transparent" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-emerald-600">
            Compare
          </p>
          <h2 className="mt-3 text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl md:text-4xl">
            Other Courses vs AI Tools Business Mastery
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            This program is built for practical execution, not just theory.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          <Card className="rounded-2xl border border-slate-200 bg-white/80 shadow-sm backdrop-blur-sm">
            <CardHeader className="border-b border-slate-100 pb-4">
              <CardTitle className="text-xl font-semibold text-slate-500">
                Other Courses
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 pt-6">
              {otherCoursePoints.map((point) => (
                <div key={point} className="flex items-start gap-3">
                  <XCircle className="mt-0.5 h-5 w-5 shrink-0 text-slate-300" />
                  <span className="text-slate-500">{point}</span>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="relative rounded-2xl border-2 border-emerald-600 bg-white shadow-xl shadow-emerald-900/5">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-emerald-600 px-4 py-1 text-xs font-semibold text-white shadow-md">
              Recommended
            </div>
            <CardHeader className="border-b border-emerald-50 pb-4">
              <CardTitle className="text-xl font-semibold text-slate-950">
                AI Tools Business Mastery
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 pt-6">
              {myCoursePoints.map((point) => (
                <div key={point} className="flex items-start gap-3">
                  <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" />
                  <span className="font-medium text-slate-800">{point}</span>
                </div>
              ))}
              <Button
                asChild
                className="mt-4 h-12 w-full rounded-xl bg-emerald-600 font-medium shadow-lg shadow-emerald-900/10 transition-all hover:-translate-y-0.5 hover:bg-emerald-700 hover:shadow-xl"
              >
                <Link href="#pricing">
                  Enroll Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
