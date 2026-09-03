import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle, Radio } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const benefits = [
  "First sale in just 3 days",
  "FREE BOTs worth 10K each",
  "Lifetime membership & access",
];

export function FinalCta() {
  return (
    <section
      id="pricing"
      className="relative w-full overflow-hidden bg-black py-20 md:py-28"
    >
      <div className="bg-grid pointer-events-none absolute inset-0" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-neutral-950 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-neutral-950 to-transparent" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-600/20 blur-3xl" />

      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-3xl border border-red-600/30 bg-neutral-950 glow-red-lg">
          <div className="relative">
            <Image
              src="/images/mentor.jpg"
              alt="Claim your spot in the AI Tools Business Mastery 3-Day Challenge"
              width={1200}
              height={500}
              className="aspect-[21/9] w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-transparent" />
          </div>

          <div className="-mt-16 px-6 pb-12 text-center sm:px-12">
            <Badge className="mx-auto mb-6 flex w-fit items-center gap-2 rounded-full border border-red-500/30 bg-red-500/10 px-4 py-1.5 text-sm font-semibold text-red-400 hover:bg-red-500/10">
              <Radio className="h-3.5 w-3.5" />
              Recorded Session Available NOW
            </Badge>
            <h2 className="relative text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
              Claim Your{" "}
              <span className="text-gradient">Spot Below</span>
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-lg text-white/70">
              We challenge YOU to get your first AI Tools customer in just 3
              days. Join AI Tools Business Mastery today and get instant access.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              {benefits.map((benefit) => (
                <Badge
                  key={benefit}
                  variant="secondary"
                  className="gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white/80 hover:bg-white/5"
                >
                  <CheckCircle className="h-4 w-4 text-red-500" />
                  {benefit}
                </Badge>
              ))}
            </div>

            <Button
              asChild
              className="mt-10 h-13 rounded-xl bg-red-600 px-10 text-base font-semibold text-white shadow-[0_0_50px_-8px_rgb(220_38_38/0.9)] transition-all hover:-translate-y-0.5 hover:bg-red-500"
            >
              <Link href="/payment">
                Save My First Spot
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <p className="mt-4 text-sm text-white/50">
              Get Instant Access · Recorded Session Available NOW
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
