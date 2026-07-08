import Link from "next/link";
import { Star, Quote, ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
} from "@/components/ui/card";

const reviews = [
  {
    name: "Ali R.",
    initials: "AR",
    image: "/images/student-ali.jpg",
    review:
      "This program gave me a clear direction. I finally understood how to package AI tools as a service and approach clients.",
  },
  {
    name: "Hamza K.",
    initials: "HK",
    image: "/images/student-hamza.jpg",
    review:
      "The roadmap is simple and practical. I liked that it focuses on action instead of only theory.",
  },
  {
    name: "Ayesha M.",
    initials: "AM",
    image: "/images/student-ayesha.jpg",
    review:
      "The templates and examples helped me understand how to message clients professionally.",
  },
  {
    name: "Usman S.",
    initials: "US",
    image: "/images/student-usman.jpg",
    review:
      "Best for beginners who want to start with AI tools but do not know where to begin.",
  },
];

export function ReviewsSection() {
  return (
    <section id="reviews" className="relative w-full bg-stone-50 py-20 md:py-28">
      <div className="bg-grid pointer-events-none absolute inset-0" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-stone-50 via-transparent to-stone-50" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-emerald-600">
            Testimonials
          </p>
          <h2 className="mt-3 text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl md:text-4xl">
            What Students Are Saying
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Real feedback from students who joined the program and started taking
            action.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {reviews.map((item, index) => (
            <Card
              key={item.name}
              className="relative rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="absolute right-6 top-6 text-emerald-100">
                <Quote className="h-10 w-10 fill-emerald-50" />
              </div>
              <CardContent className="p-6">
                <div className="mb-4 flex items-center gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>
                <p className="mb-6 text-lg leading-relaxed text-slate-700">
                  “{item.review}”
                </p>
                <div className="flex items-center gap-4">
                  <Avatar className="h-12 w-12 border border-slate-200 bg-stone-100">
                    <AvatarImage
                      src={item.image}
                      alt={item.name}
                      className="object-cover"
                    />
                    <AvatarFallback className="text-sm font-semibold text-slate-700">
                      {item.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-slate-950">{item.name}</p>
                    <p className="text-sm text-slate-500">Verified Student</p>
                  </div>
                </div>
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
              Join Now
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
