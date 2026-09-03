"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Trophy, Star } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const successImages = Array.from({ length: 31 }, (_, i) => ({
  src: `/images/success-reviews/success-${i + 1}.jpeg`,
  alt: `Student success story ${i + 1}`,
}));

export function SuccessStoriesSection() {
  return (
    <section className="relative w-full overflow-hidden bg-neutral-950 py-20 md:py-28">
      <div className="bg-grid pointer-events-none absolute inset-0" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black to-transparent" />
      <div className="pointer-events-none absolute left-1/2 top-0 h-[300px] w-[600px] -translate-x-1/2 rounded-full bg-red-600/10 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <Badge className="mx-auto flex w-fit items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-4 py-1.5 text-sm font-semibold text-amber-400 hover:bg-amber-500/10">
            <Trophy className="h-4 w-4" />
            Success Stories
          </Badge>
          <h2 className="mt-5 text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
            Students Who Earned{" "}
            <span className="text-gradient">Real Money</span>
          </h2>
          <p className="mt-4 text-lg text-white/60">
            Screenshots from students who landed their first sales and are now
            earning consistently.
          </p>
          <div className="mt-4 flex items-center justify-center gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-5 w-5 fill-amber-500 text-amber-500" />
            ))}
          </div>
        </div>

        <div className="mt-16 px-4 sm:px-16">
          <Carousel
            opts={{ align: "center", loop: true }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {successImages.map((image) => (
                <CarouselItem
                  key={image.src}
                  className="pl-4 sm:basis-1/2 lg:basis-1/4"
                >
                  <Dialog>
                    <DialogTrigger
                      render={
                        <button
                          type="button"
                          className="group relative mx-auto block w-full max-w-[260px] cursor-pointer text-left"
                          aria-label={`Open ${image.alt}`}
                        />
                      }
                    >
                      {/* Phone frame */}
                      <div className="mx-auto w-full max-w-[260px] overflow-hidden rounded-[2rem] border-2 border-white/10 bg-neutral-900 shadow-xl transition-all duration-300 group-hover:-translate-y-2 group-hover:border-amber-600/50 group-hover:shadow-[0_0_30px_-6px_rgb(245_158_11/0.3)]">
                        {/* Notch */}
                        <div className="flex items-center justify-center bg-neutral-800 py-2">
                          <div className="h-2 w-16 rounded-full bg-white/10" />
                        </div>
                        {/* Screenshot */}
                        <div className="relative aspect-[9/16] w-full bg-neutral-950">
                          <Image
                            src={image.src}
                            alt={image.alt}
                            fill
                            sizes="260px"
                            className="object-cover object-top"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                        </div>
                        {/* Home bar */}
                        <div className="flex items-center justify-center bg-neutral-800 py-2">
                          <div className="h-1 w-20 rounded-full bg-white/10" />
                        </div>
                      </div>
                    </DialogTrigger>
                    <DialogContent className="max-w-[calc(100%-2rem)] border-0 bg-neutral-950 p-2 ring-1 ring-white/10 sm:max-w-sm">
                      <DialogTitle className="sr-only">{image.alt}</DialogTitle>
                      <div className="relative w-full overflow-hidden rounded-lg">
                        <Image
                          src={image.src}
                          alt={image.alt}
                          width={800}
                          height={1400}
                          className="h-auto w-full object-contain"
                        />
                      </div>
                    </DialogContent>
                  </Dialog>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="border-white/10 bg-neutral-900 text-white hover:bg-neutral-800 hover:text-white" />
            <CarouselNext className="border-white/10 bg-neutral-900 text-white hover:bg-neutral-800 hover:text-white" />
          </Carousel>
        </div>

        <div className="mt-12 flex justify-center">
          <Button
            asChild
            className="h-16 rounded-xl bg-red-600 px-8 text-lg font-semibold text-white shadow-[0_0_40px_-8px_rgb(220_38_38/0.8)] transition-all hover:-translate-y-0.5 hover:bg-red-500"
          >
            <Link href="/payment">
              Join The 3-Day Challenge
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
