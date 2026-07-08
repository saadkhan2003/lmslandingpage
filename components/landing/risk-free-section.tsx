import Link from "next/link";
import { ShieldCheck, ArrowRight, CheckCircle } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const guarantees = [
  "Clear step-by-step roadmap",
  "Practical action assignments",
  "Lifetime access to materials",
  "Beginner-friendly guidance",
];

export function RiskFreeSection() {
  return (
    <section className="relative w-full overflow-hidden bg-white py-20 md:py-28">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-emerald-50/60 via-transparent to-transparent" />
      <div className="bg-dots pointer-events-none absolute inset-0 opacity-30" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Card className="mx-auto max-w-3xl rounded-3xl border border-emerald-200 bg-white/90 shadow-xl shadow-emerald-900/5 backdrop-blur-sm">
          <CardHeader className="text-center pb-4">
            <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 ring-8 ring-emerald-50 sm:h-20 sm:w-20">
              <ShieldCheck className="h-8 w-8 text-emerald-700 sm:h-10 sm:w-10" />
            </div>
            <CardTitle className="text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl md:text-4xl">
              Risk-Free Learning Experience
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-8 text-center">
            <p className="mx-auto max-w-xl text-lg text-slate-600">
              Join the program with confidence. You will get a clear step-by-step
              roadmap to start your AI tools business and take action from day one.
            </p>

            <div className="grid gap-3 sm:grid-cols-2">
              {guarantees.map((item) => (
                <div
                  key={item}
                  className="flex items-center justify-center gap-2 rounded-xl bg-emerald-50/80 py-3 text-sm font-medium text-emerald-900"
                >
                  <CheckCircle className="h-4 w-4 text-emerald-600" />
                  {item}
                </div>
              ))}
            </div>

            <Button
              asChild
              size="lg"
              className="h-12 rounded-xl bg-slate-950 px-8 text-base font-medium shadow-lg shadow-slate-900/10 transition-all hover:-translate-y-0.5 hover:bg-slate-800 hover:shadow-xl"
            >
              <Link href="#pricing">
                Get Started Now
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
