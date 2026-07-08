import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "Do I need experience?",
    answer:
      "No. This program is beginner-friendly and explains everything step by step.",
  },
  {
    question: "Can beginners join?",
    answer:
      "Yes. The course is designed for students, freelancers, and beginners who want to start with AI tools.",
  },
  {
    question: "How long is the course?",
    answer:
      "The program is designed around a 5-day action roadmap, so you can start applying the steps quickly.",
  },
  {
    question: "Will I get templates?",
    answer:
      "Yes. You will get useful templates, client message examples, and bonus resources to help you take action.",
  },
  {
    question: "Can I earn from this?",
    answer:
      "The program teaches practical methods for starting an AI tools business, but your results depend on your action, consistency, and effort.",
  },
  {
    question: "How do I enroll?",
    answer: "Click the Enroll Now button and follow the enrollment instructions.",
  },
];

export function FaqsSection() {
  return (
    <section id="faqs" className="relative w-full bg-white py-20 md:py-28">
      <div className="bg-dots pointer-events-none absolute inset-0 opacity-30" />
      <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-emerald-600">
            Got Questions?
          </p>
          <h2 className="mt-3 text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl md:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Get answers to common questions about the program.
          </p>
        </div>

        <Accordion defaultValue={[]} className="mt-14 space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`faq-${index}`}
              className="overflow-hidden rounded-2xl border border-slate-200 bg-white px-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <AccordionTrigger className="py-5 text-left text-sm font-semibold text-slate-950 hover:no-underline sm:text-base">
                <span className="flex items-start gap-3">
                  <HelpCircle className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600 sm:h-5 sm:w-5" />
                  {faq.question}
                </span>
              </AccordionTrigger>
              <AccordionContent className="pb-5 pl-7 text-sm text-slate-600 sm:pl-8 sm:text-base">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
