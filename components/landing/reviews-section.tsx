"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, TrendingUp, Star, ZoomIn } from "lucide-react";

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

const reviewImages = Array.from({ length: 18 }, (_, i) => ({
  src: `/images/reviews/review-${i + 1}.jpeg`,
  alt: `Student WhatsApp review ${i + 1}`,
}));

export function ReviewsSection() {
  return (
    <section
      id="reviews"
      className="relative w-full overflow-hidden bg-neutral-950 py-20 md:py-28"
    >
      <div className="bg-grid pointer-events-none absolute inset-0" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black to-transparent" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <Badge className="mx-auto flex w-fit items-center gap-2 rounded-full border border-red-500/30 bg-red-500/10 px-4 py-1.5 text-sm font-semibold text-red-400 hover:bg-red-500/10">
            <TrendingUp className="h-4 w-4" />
            Trusted by 130+ Students
          </Badge>
          <h2 className="mt-5 text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
            Student <span className="text-gradient">Reviews</span>
          </h2>
          <p className="mt-4 text-lg text-white/60">
            Real screenshots from real students.
          </p>
          <div className="mt-4 flex items-center justify-center gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-5 w-5 fill-red-500 text-red-500" />
            ))}
            <span className="ml-2 text-sm font-medium text-white/70">
              4.9 average from 130+ marketers
            </span>
          </div>
        </div>

        <div className="relative mt-16">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {reviewImages.map((image) => (
                <CarouselItem
                  key={image.src}
                  className="pl-4 sm:basis-1/2 lg:basis-1/3"
                >
                  <Dialog>
                    <DialogTrigger
                      render={
                        <button
                          type="button"
                          className="group relative block w-full cursor-pointer text-left"
                          aria-label={`Open ${image.alt}`}
                        />
                      }
                    >
                      <div className="relative w-full overflow-hidden rounded-xl border border-white/10 bg-neutral-900 shadow-xl transition-all duration-300 group-hover:-translate-y-1 group-hover:border-red-600/50 group-hover:shadow-[0_0_30px_-8px_rgb(220_38_38/0.4)]">
                        <div className="relative w-full">
                          <Image
                            src={image.src}
                            alt={image.alt}
                            width={1100}
                            height={400}
                            className="h-auto w-full object-cover"
                          />
                          <div className="absolute inset-0 bg-black/0 transition-colors group-hover:bg-black/20" />
                          <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity group-hover:opacity-100">
                            <ZoomIn className="h-8 w-8 text-white drop-shadow-lg" />
                          </div>
                        </div>
                      </div>
                    </DialogTrigger>
                    <DialogContent className="max-w-[calc(100%-2rem)] border-0 bg-neutral-950 p-2 ring-1 ring-white/10 sm:max-w-2xl">
                      <DialogTitle className="sr-only">
                        {image.alt}
                      </DialogTitle>
                      <div className="relative w-full overflow-hidden rounded-lg">
                        <Image
                          src={image.src}
                          alt={image.alt}
                          width={1200}
                          height={500}
                          className="h-auto w-full object-contain"
                        />
                      </div>
                    </DialogContent>
                  </Dialog>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute top-1/2 z-10 hidden h-10 w-10 -translate-y-1/2 rounded-full border border-white/20 bg-neutral-900/90 text-white backdrop-blur-sm transition-all hover:border-red-500/50 hover:bg-red-600 hover:text-white hover:shadow-[0_0_20px_-4px_rgb(220_38_38/0.6)] sm:flex sm:-left-6 lg:-left-8" />
            <CarouselNext className="absolute top-1/2 z-10 hidden h-10 w-10 -translate-y-1/2 rounded-full border border-white/20 bg-neutral-900/90 text-white backdrop-blur-sm transition-all hover:border-red-500/50 hover:bg-red-600 hover:text-white hover:shadow-[0_0_20px_-4px_rgb(220_38_38/0.6)] sm:flex sm:-right-6 lg:-right-8" />
          </Carousel>

          <div className="mt-4 flex items-center justify-center gap-2 sm:hidden">
            <span className="text-xs text-white/40">← swipe →</span>
          </div>
        </div>

        <p className="mt-6 hidden text-center text-sm text-white/40 sm:block">
          ← Use arrows to see more reviews →
        </p>

        <div className="mt-12 flex justify-center">
          <Button
            asChild
            size="lg"
            className="h-13 rounded-xl bg-red-600 px-8 text-base font-semibold text-white shadow-[0_0_40px_-8px_rgb(220_38_38/0.8)] transition-all hover:-translate-y-0.5 hover:bg-red-500"
          >
            <Link
              href="https://lms.aitoolsbusinessmastery.store/courses/"
              target="_blank"
            >
              Join The 3-Day Challenge
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
