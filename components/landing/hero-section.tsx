import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Star,
  Users,
  BadgeCheck,
  BookOpen,
  Target,
  MessageCircle,
  TrendingUp,
  PlayCircle,
  ShieldCheck,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden bg-white py-20 md:py-32">
      {/* Grid background */}
      <div className="bg-grid pointer-events-none absolute inset-0" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white via-transparent to-white" />

      {/* Gradient orbs */}
      <div className="pointer-events-none absolute -right-40 -top-40 h-[600px] w-[600px] rounded-full bg-emerald-100/50 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -left-40 h-[600px] w-[600px] rounded-full bg-amber-100/50 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div className="flex flex-col gap-8">
            <div className="flex flex-wrap items-center gap-3">
              <Badge className="w-fit rounded-full bg-amber-100 px-4 py-1.5 text-sm font-semibold text-amber-800 hover:bg-amber-100">
                The #1 AI Tools Business Mastery Program
              </Badge>
              <Badge
                variant="outline"
                className="w-fit rounded-full border-emerald-200 px-3 py-1.5 text-xs font-semibold text-emerald-700"
              >
                <ShieldCheck className="mr-1 h-3 w-3" />
                Beginner Friendly
              </Badge>
            </div>

            <h1 className="text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl md:text-5xl lg:text-6xl">
              Start Your AI Business{" "}
              <span className="text-gradient">& Earn Your First Income</span>{" "}
              in Just 5 Days
            </h1>

            <p className="max-w-xl text-lg leading-relaxed text-slate-600">
              Learn how to find high-demand AI tools, close clients, and build
              your first income stream with a simple step-by-step system trusted
              by 79+ students.
            </p>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Button
                asChild
                size="lg"
                className="h-12 rounded-xl bg-slate-950 px-8 text-base font-semibold shadow-lg shadow-slate-900/15 transition-all hover:-translate-y-0.5 hover:bg-slate-800 hover:shadow-xl"
              >
                <Link href="#pricing">
                  Enroll Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="h-12 rounded-xl border-slate-200 px-8 text-base font-semibold text-slate-950 backdrop-blur transition-all hover:-translate-y-0.5 hover:bg-white hover:shadow-md"
              >
                <Link href="#program">
                  <PlayCircle className="mr-2 h-4 w-4" />
                  View Program
                </Link>
              </Button>
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-2 text-sm text-slate-600">
              <div className="flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 shadow-sm ring-1 ring-slate-200">
                <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                <span className="font-semibold text-slate-950">5.0</span>
                <span>Rating</span>
              </div>
              <div className="flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 shadow-sm ring-1 ring-slate-200">
                <Users className="h-4 w-4 text-emerald-600" />
                <span className="font-semibold text-slate-950">79+</span>
                <span>Successful Students</span>
              </div>
              <div className="flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 shadow-sm ring-1 ring-slate-200">
                <BadgeCheck className="h-4 w-4 text-emerald-600" />
                <span>Lifetime Access</span>
              </div>
            </div>
          </div>

          <div className="relative flex justify-center lg:justify-end">
            {/* Floating stat card */}
            <div className="absolute -left-4 top-8 z-10 hidden rounded-2xl border border-slate-200 bg-white p-4 shadow-xl md:block">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-emerald-100">
                  <TrendingUp className="h-5 w-5 text-emerald-700" />
                </div>
                <div>
                  <p className="text-xs text-slate-500">Students took action</p>
                  <p className="text-xl font-bold text-slate-950">79+</p>
                </div>
              </div>
            </div>

            <Card className="relative w-full max-w-md rounded-2xl border border-slate-200 bg-white shadow-2xl shadow-slate-900/8">
              <CardHeader className="pb-4">
                <div className="relative overflow-hidden rounded-xl border border-slate-200">
                  <Image
                    src="/images/mentor.jpg"
                    alt="Your mentor for the AI Tools Business Mastery Program"
                    width={600}
                    height={400}
                    className="aspect-video w-full object-cover"
                    priority
                  />
                  <div className="absolute bottom-3 left-3 rounded-full bg-white px-3 py-1.5 text-xs font-semibold text-slate-800 shadow-md">
                    Course Instructor
                  </div>
                </div>
                <CardTitle className="pt-3 text-xl font-bold text-slate-950 sm:text-2xl">
                  AI Tools Business Mastery Program
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-slate-600">
                  Your mentor will guide you through a practical system designed
                  for beginners.
                </p>
                <div className="grid gap-3">
                  {[
                    { icon: BookOpen, label: "5-Day Action Roadmap" },
                    { icon: Target, label: "Client Finding System" },
                    { icon: MessageCircle, label: "Message Templates Included" },
                    { icon: TrendingUp, label: "Real Income Strategies" },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="group flex items-center gap-3 rounded-xl bg-stone-50 p-3 transition-colors hover:bg-emerald-50/60"
                    >
                      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-amber-100 transition-colors group-hover:bg-emerald-100">
                        <item.icon className="h-4 w-4 text-amber-700 transition-colors group-hover:text-emerald-700" />
                      </div>
                      <span className="text-sm font-semibold text-slate-700">
                        {item.label}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Floating badge */}
            <div className="absolute -right-4 bottom-12 z-10 hidden rounded-2xl border border-slate-200 bg-white p-4 shadow-xl md:block">
              <div className="flex items-center gap-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-100">
                  <Star className="h-5 w-5 fill-amber-600 text-amber-600" />
                </div>
                <div>
                  <p className="text-xs text-slate-500">Rated</p>
                  <p className="text-xl font-bold text-slate-950">5.0 / 5.0</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
