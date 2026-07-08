import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { BookOpen } from "lucide-react";

const modules = [
  {
    title: "Module 1: Introduction to AI Tools Business",
    content:
      "Understand the AI tools business model, how people earn with AI services, and what opportunities are available for beginners.",
  },
  {
    title: "Module 2: Finding Profitable AI Services",
    content:
      "Learn how to identify simple AI services that businesses and individuals are already willing to pay for.",
  },
  {
    title: "Module 3: Creating Your Offer",
    content:
      "Package your AI service into a clear offer with pricing, benefits, and a simple delivery process.",
  },
  {
    title: "Module 4: Finding Clients",
    content:
      "Discover where to find potential clients and how to build a list of people to contact.",
  },
  {
    title: "Module 5: Closing Clients",
    content:
      "Learn simple outreach, follow-up, and closing methods to convert interested people into paying clients.",
  },
  {
    title: "Module 6: Delivery & Scaling",
    content:
      "Learn how to deliver your service, improve your process, collect testimonials, and scale your income.",
  },
];

export function CourseOutline() {
  return (
    <section className="relative w-full bg-stone-50 py-20 md:py-28">
      <div className="bg-grid pointer-events-none absolute inset-0" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-stone-50 via-transparent to-stone-50" />
      <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-emerald-600">
            What You Will Learn
          </p>
          <h2 className="mt-3 text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl md:text-4xl">
            Course Outline
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            A clear module-by-module roadmap designed for beginners.
          </p>
        </div>

        <Accordion defaultValue={[]} className="mt-14 space-y-4">
          {modules.map((module, index) => (
            <AccordionItem
              key={index}
              value={`module-${index}`}
              className="overflow-hidden rounded-2xl border border-slate-200 bg-white px-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <AccordionTrigger className="py-5 text-left text-sm font-semibold text-slate-950 hover:no-underline sm:text-base">
                <span className="flex items-start gap-3">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-emerald-100 text-xs font-bold text-emerald-700 sm:h-8 sm:w-8 sm:text-sm">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="flex items-center gap-2">
                    <BookOpen className="hidden h-4 w-4 text-emerald-600 sm:inline" />
                    {module.title.replace(`Module ${index + 1}: `, "")}
                  </span>
                </span>
              </AccordionTrigger>
              <AccordionContent className="pb-5 pl-10 text-sm text-slate-600 sm:pl-11 sm:text-base">
                {module.content}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
