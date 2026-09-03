import Link from "next/link";
import { CheckCircle, XCircle, ArrowRight, AlertCircle } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const otherSkills = [
  "Takes months to become good",
  "Need to find freelance clients",
  "Income depends on projects",
  "Requires your portfolio",
  "No repeatable sales",
];

const myModel = [
  "First sell in Just 3 Days",
  "Don't need to find clients",
  "Income depends on daily clients",
  "Don't require your portfolio",
  "Focus is on repeatable sales",
];

export function ComparisonSection() {
  return (
    <section className="relative w-full overflow-hidden bg-black py-20 md:py-28">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-neutral-950 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-neutral-950 to-transparent" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-red-600/10 via-transparent to-transparent" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <Badge className="mx-auto w-fit rounded-full border border-red-500/30 bg-red-500/10 px-4 py-1.5 text-sm font-semibold text-red-400 hover:bg-red-500/10">
            <AlertCircle className="mr-1 h-3.5 w-3.5" />
            The Comparison
          </Badge>
          <h2 className="mt-4 text-2xl font-bold tracking-tight text-white sm:text-3xl md:text-4xl">
            Diffrence Between Other Skills And My Model
          </h2>
          <p className="mt-4 text-lg text-white/60">
            This is why beginners are switching to the AI Tools Business Model.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          <Card className="rounded-2xl border-0 bg-neutral-900 ring-1 ring-white/10">
            <CardHeader className="border-b border-white/10 pb-4">
              <Badge className="w-fit rounded-full border-red-500/30 bg-red-500/10 px-3 py-1 text-xs font-bold uppercase tracking-wide text-red-400 hover:bg-red-500/10">
                OLD
              </Badge>
              <CardTitle className="pt-2 text-xl font-semibold text-white/50">
                Other Skills
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 pt-6">
              {otherSkills.map((point) => (
                <div key={point} className="flex items-start gap-3">
                  <XCircle className="mt-0.5 h-5 w-5 shrink-0 text-red-500/60" />
                  <span className="text-white/50">{point}</span>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="relative overflow-visible rounded-2xl border-0 bg-neutral-900 ring-2 ring-red-600 glow-red">
            <div className="absolute -top-4 left-1/2 z-10 -translate-x-1/2 rounded-full bg-red-600 px-4 py-1 text-xs font-semibold text-white shadow-md">
              What Actually Works
            </div>
            <CardHeader className="border-b border-white/10 pb-4">
              <Badge className="w-fit rounded-full border-red-500/40 bg-red-500/20 px-3 py-1 text-xs font-bold uppercase tracking-wide text-red-300 hover:bg-red-500/20">
                New
              </Badge>
              <CardTitle className="pt-2 text-xl font-semibold text-white">
                AI Tools Business Model
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 pt-6">
              {myModel.map((point) => (
                <div key={point} className="flex items-start gap-3">
                  <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-red-500" />
                  <span className="font-medium text-white">{point}</span>
                </div>
              ))}
              <Separator className="bg-white/10" />
              <Button
                asChild
                className="h-12 w-full rounded-xl bg-red-600 font-semibold text-white shadow-[0_0_30px_-8px_rgb(220_38_38/0.7)] transition-all hover:-translate-y-0.5 hover:bg-red-500"
              >
                <Link href="#pricing">
                  Join The 3-Day Challenge
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
