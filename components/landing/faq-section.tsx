import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";

const faqs = [
  {
    question: "Do I need any technical skills or coding experience?",
    answer:
      "No. The Ai Tools Business Mastery course is designed for complete beginners. You don't need to know how to code, build websites, or have any technical background. We walk you through everything step by step.",
  },
  {
    question: "How soon can I expect to make my first sale?",
    answer:
      "Most students who follow the system get their first paying customer within the 3-day challenge. Some even land a sale on day one. The system is designed to get you results fast.",
  },
  {
    question: "What exactly do I learn in the 3 episodes?",
    answer:
      "Episode 1: Build your AI Tools business from zero. Episode 2: Find your first AI tools customers. Episode 3: Get your first AI tools sale. Each episode builds on the last so you have a complete system by the end.",
  },
  {
    question: "Is this a one-time payment or a subscription?",
    answer:
      "It's a one-time payment. You get lifetime access to the course materials, all future updates, and the community. No hidden fees, no recurring charges.",
  },
  {
    question: "What if I don't make any money?",
    answer:
      "We stand behind our system. If you go through the material and don't see results, contact us and we'll work with you to get you on track.",
  },
  {
    question: "Can I do this alongside my job or studies?",
    answer:
      "Absolutely. The entire system is designed to work as a side hustle. Most students spend just 1-2 hours per day and still see results within the 3-day challenge.",
  },
  {
    question: "What AI tools will I be selling?",
    answer:
      "You'll learn to identify, package, and sell AI tools that solve real business problems. We show you exactly which tools are in demand and how to position them to the right buyers.",
  },
  {
    question: "Do I get support if I'm stuck?",
    answer:
      "Yes. You get access to the student community where you can ask questions, share wins, and get help from fellow students and mentors.",
  },
];

export function FaqSection() {
  return (
    <section
      id="faq"
      className="relative w-full overflow-hidden bg-neutral-950 py-16 sm:py-20 md:py-28"
    >
      <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <Badge className="mx-auto w-fit rounded-full border border-red-500/30 bg-red-500/10 px-4 py-1.5 text-sm font-semibold text-red-400 hover:bg-red-500/10">
            FAQ
          </Badge>
          <h2 className="mt-4 text-2xl font-bold tracking-tight text-white sm:text-3xl md:text-4xl">
            Frequently Asked{" "}
            <span className="text-gradient">Questions</span>
          </h2>
          <p className="mt-4 text-base text-white/60 sm:text-lg">
            Everything you need to know before you join.
          </p>
        </div>

        <Accordion
          className="mt-10 space-y-3 sm:mt-12"
          defaultValue={["item-0"]}
        >
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="rounded-xl border border-white/10 bg-white/5 px-4 sm:px-5"
            >
              <AccordionTrigger className="py-4 text-sm font-semibold text-white hover:no-underline hover:text-red-400 sm:py-5 sm:text-base">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-sm leading-relaxed text-white/60">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
