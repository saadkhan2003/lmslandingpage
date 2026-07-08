import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const results = [
  {
    title: "Real Campaign Results",
    description:
      "See actual outreach campaigns and ad performance that bring interested clients.",
    image: "/images/result-1.jpg",
  },
  {
    title: "System Performance Proof",
    description:
      "The same client-finding system shared inside the program, shown with real data.",
    image: "/images/result-2.jpg",
  },
  {
    title: "Student Progress Screenshots",
    description:
      "Examples of students taking action, sending messages, and booking calls.",
    image: "/images/result-3.jpg",
  },
];

export function ResultsSection() {
  return (
    <section id="results" className="relative w-full bg-stone-50 py-20 md:py-28">
      <div className="bg-grid pointer-events-none absolute inset-0" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-stone-50 via-transparent to-stone-50" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-emerald-600">
            Real Proof
          </p>
          <h2 className="mt-3 text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl md:text-4xl">
            Proven Results From Real Ads & Systems
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            See the real proof behind the program before you join.
          </p>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {results.map((result, index) => (
            <Card
              key={result.title}
              className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader className="pb-3">
                <div className="overflow-hidden rounded-xl border border-slate-200">
                  <Image
                    src={result.image}
                    alt={result.title}
                    width={600}
                    height={450}
                    className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <CardTitle className="text-lg font-semibold text-slate-950">
                  {result.title}
                </CardTitle>
                <p className="text-slate-600">{result.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Button
            asChild
            className="h-12 rounded-xl bg-slate-950 px-8 font-medium hover:bg-slate-800"
          >
            <Link href="#pricing">
              Enroll Now
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
