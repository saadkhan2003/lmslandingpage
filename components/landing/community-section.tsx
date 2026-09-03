import Link from "next/link";
import { Users, ArrowRight, MessageCircle } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function CommunitySection() {
  return (
    <section
      id="community"
      className="relative w-full overflow-hidden bg-black py-20 md:py-28"
    >
      <div className="bg-grid pointer-events-none absolute inset-0" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-neutral-950 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-neutral-950 to-transparent" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-green-600/10 blur-3xl" />

      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-3xl border border-white/10 bg-neutral-900/80 backdrop-blur-sm">
          <div className="grid items-center gap-8 p-8 sm:p-12 md:grid-cols-[1fr_auto]">
            <div>
              <Badge className="mb-4 w-fit gap-2 rounded-full border border-green-500/30 bg-green-500/10 px-4 py-1.5 text-sm font-semibold text-green-400 hover:bg-green-500/10">
                <Users className="h-3.5 w-3.5" />
                Free Community
              </Badge>
              <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl md:text-4xl">
                Join Our Free{" "}
                <span className="text-gradient">WhatsApp Community</span>
              </h2>
              <p className="mt-4 max-w-lg text-base text-white/60 sm:text-lg">
                Get free tips, strategies, and support from 130+ marketers already building their AI tools business. No spam — just value.
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-4">
                <div className="flex items-center gap-2 text-sm text-white/50">
                  <span className="h-2 w-2 rounded-full bg-green-500" />
                  Live discussions
                </div>
                <div className="flex items-center gap-2 text-sm text-white/50">
                  <span className="h-2 w-2 rounded-full bg-green-500" />
                  Free resources
                </div>
                <div className="flex items-center gap-2 text-sm text-white/50">
                  <span className="h-2 w-2 rounded-full bg-green-500" />
                  Network with peers
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center gap-4">
              <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-green-500/10 ring-1 ring-green-500/20">
                <MessageCircle className="h-10 w-10 text-green-500" />
              </div>
              <Button
                asChild
                className="h-13 rounded-xl bg-green-600 px-8 text-base font-semibold text-white shadow-[0_0_40px_-6px_rgb(34_197_94/0.7)] transition-all hover:-translate-y-0.5 hover:bg-green-500"
              >
                <Link
                  href="https://chat.whatsapp.com/DBSZ6CMEMe5EXKiQK9eaE2"
                  rel="noopener noreferrer"
                >
                  Join Free
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <p className="text-center text-xs text-white/40">
                100% free · No spam · Leave anytime
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
