"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Copy,
  CheckCircle,
  MessageCircle,
  Shield,
  Clock,
  Mail,
  Phone,
  User,
  MapPin,
  CreditCard,
  Send,
  AlertCircle,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const courseDetails = {
  name: "Ai Tools Business Mastery – 3-Day Challenge",
  price: "RS 4,999",
  originalPrice: "RS 9,999",
  discount: "50% OFF",
};

const paymentMethods = [
  {
    type: "EasyPaisa",
    number: "0318-9614122",
    holder: "Kashan Ahmad",
    icon: "📱",
  },
  {
    type: "Bank Alfalah",
    number: "5753-5002-3791-42",
    holder: "Kashan Ahmad",
    title: "Account Number",
    icon: "🏦",
    extra: {
      label: "IBAN",
      value: "PK53ALFH5753005002379142",
    },
  },
];

export default function PaymentPage() {
  const [copied, setCopied] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    city: "",
    paymentMethod: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopied(id);
    setTimeout(() => setCopied(null), 2000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      await fetch("/api/submit-payment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
    } catch {
      // Continue even if email fails
    }
    setSubmitted(true);
  };

  const whatsappMessage = encodeURIComponent(
    `Hi! I just sent payment for the Ai Tools Business Mastery course.\n\nName: ${form.name}\nPhone: ${form.phone}\nEmail: ${form.email}\nPayment Method: ${form.paymentMethod}\n\nPlease verify my payment.`
  );

  if (submitted) {
    return (
      <div className="min-h-screen bg-neutral-950 text-white">
        <div className="mx-auto max-w-2xl px-4 py-16 text-center sm:px-6 sm:py-20 lg:px-8">
          <div className="rounded-3xl border border-green-500/30 bg-green-500/5 p-6 sm:p-10">
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-green-500/10 sm:h-20 sm:w-20">
              <CheckCircle className="h-8 w-8 text-green-500 sm:h-10 sm:w-10" />
            </div>
            <h1 className="text-2xl font-bold text-white sm:text-3xl">
              Details Submitted!
            </h1>
            <p className="mt-4 text-base text-white/60 sm:text-lg">
              Now send your payment screenshot on WhatsApp for instant
              verification.
            </p>
            <p className="mt-2 text-sm text-white/40">
              After verification, you&apos;ll receive your course login details
              via email and WhatsApp.
            </p>
            <div className="mt-8 flex flex-col gap-3">
              <Button
                asChild
                className="h-12 rounded-xl bg-green-600 px-6 text-base font-semibold text-white shadow-[0_0_40px_-8px_rgb(34_197_94/0.7)] transition-all hover:-translate-y-0.5 hover:bg-green-500 sm:h-13"
              >
                <Link
                  href={`https://wa.me/923189614122?text=${whatsappMessage}`}
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Send on WhatsApp
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="h-12 rounded-xl border-white/20 bg-white/5 px-6 text-base font-semibold text-white sm:h-13"
              >
                <Link href="/">← Back to Home</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      {/* Header */}
      <div className="border-b border-white/10 bg-black/50 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 sm:py-4 lg:px-8">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/logo.png"
              alt="Ai Tools Business Mastery"
              width={36}
              height={36}
              className="h-8 w-8 rounded-lg object-contain sm:h-9 sm:w-9"
            />
          </Link>
          <Badge className="rounded-full border border-green-500/30 bg-green-500/10 px-2.5 py-1 text-[10px] text-green-400 sm:px-3 sm:text-xs">
            <Clock className="mr-1 h-3 w-3" />
            Limited Time Offer
          </Badge>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-4 py-6 sm:px-6 sm:py-10 lg:px-8">
        {/* Course Card - Full width on mobile */}
        <div className="mb-6 rounded-2xl border border-white/10 bg-neutral-900 p-4 sm:p-6">
          <div className="flex items-start justify-between">
            <div>
              <Badge className="mb-2 rounded-full border border-red-500/30 bg-red-500/10 px-2.5 py-0.5 text-[10px] text-red-400 sm:mb-3 sm:px-3 sm:text-xs">
                3-Day Challenge
              </Badge>
              <h1 className="text-lg font-bold text-white sm:text-xl md:text-2xl">
                {courseDetails.name}
              </h1>
              <p className="mt-1.5 text-xs text-white/50 sm:mt-2 sm:text-sm">
                Lifetime access · All episodes · Bonuses · Community
              </p>
            </div>
          </div>
          <div className="mt-3 flex items-baseline gap-2 sm:mt-4 sm:gap-3">
            <span className="text-2xl font-bold text-white sm:text-3xl">
              {courseDetails.price}
            </span>
            <span className="text-sm text-white/40 line-through sm:text-lg">
              {courseDetails.originalPrice}
            </span>
            <Badge className="rounded-full bg-red-600 px-1.5 py-0.5 text-[10px] text-white sm:px-2 sm:text-xs">
              {courseDetails.discount}
            </Badge>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1fr_380px]">
          {/* Left: Form */}
          <div className="rounded-2xl border border-white/10 bg-neutral-900 p-4 sm:p-6">
            <h2 className="mb-4 flex items-center gap-2 text-base font-bold text-white sm:mb-6 sm:text-lg">
              <User className="h-4 w-4 text-red-500 sm:h-5 sm:w-5" />
              Your Details
            </h2>
            <form onSubmit={handleSubmit} className="space-y-3.5 sm:space-y-4">
              <div>
                <label className="mb-1 block text-xs font-medium text-white/70 sm:mb-1.5 sm:text-sm">
                  Full Name *
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-white/30" />
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) =>
                      setForm({ ...form, name: e.target.value })
                    }
                    placeholder="Your full name"
                    className="h-11 w-full rounded-xl border border-white/10 bg-white/5 pl-10 pr-4 text-sm text-white placeholder-white/30 outline-none transition-colors focus:border-red-500/50 focus:ring-1 focus:ring-red-500/30 sm:h-12"
                  />
                </div>
              </div>

              <div>
                <label className="mb-1 block text-xs font-medium text-white/70 sm:mb-1.5 sm:text-sm">
                  Phone Number *
                </label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-white/30" />
                  <input
                    type="tel"
                    required
                    value={form.phone}
                    onChange={(e) =>
                      setForm({ ...form, phone: e.target.value })
                    }
                    placeholder="0300-1234567"
                    className="h-11 w-full rounded-xl border border-white/10 bg-white/5 pl-10 pr-4 text-sm text-white placeholder-white/30 outline-none transition-colors focus:border-red-500/50 focus:ring-1 focus:ring-red-500/30 sm:h-12"
                  />
                </div>
              </div>

              <div>
                <label className="mb-1 block text-xs font-medium text-white/70 sm:mb-1.5 sm:text-sm">
                  Email Address *
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-white/30" />
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) =>
                      setForm({ ...form, email: e.target.value })
                    }
                    placeholder="you@example.com"
                    className="h-11 w-full rounded-xl border border-white/10 bg-white/5 pl-10 pr-4 text-sm text-white placeholder-white/30 outline-none transition-colors focus:border-red-500/50 focus:ring-1 focus:ring-red-500/30 sm:h-12"
                  />
                </div>
                <p className="mt-1 text-[11px] text-white/40 sm:text-xs">
                  Your course login will be sent here
                </p>
              </div>

              <div>
                <label className="mb-1 block text-xs font-medium text-white/70 sm:mb-1.5 sm:text-sm">
                  City
                </label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-white/30" />
                  <input
                    type="text"
                    value={form.city}
                    onChange={(e) =>
                      setForm({ ...form, city: e.target.value })
                    }
                    placeholder="Lahore, Karachi, etc."
                    className="h-11 w-full rounded-xl border border-white/10 bg-white/5 pl-10 pr-4 text-sm text-white placeholder-white/30 outline-none transition-colors focus:border-red-500/50 focus:ring-1 focus:ring-red-500/30 sm:h-12"
                  />
                </div>
              </div>

              <Separator className="bg-white/10" />

              {/* Payment Method Selection */}
              <div>
                <label className="mb-2 block text-xs font-medium text-white/70 sm:mb-3 sm:text-sm">
                  Select Payment Method *
                </label>
                <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2 sm:gap-3">
                  {paymentMethods.map((method) => (
                    <button
                      key={method.type}
                      type="button"
                      onClick={() =>
                        setForm({ ...form, paymentMethod: method.type })
                      }
                      className={`flex items-center gap-3 rounded-xl border p-3 text-left transition-all sm:p-4 ${
                        form.paymentMethod === method.type
                          ? "border-red-500/50 bg-red-500/10 ring-1 ring-red-500/30"
                          : "border-white/10 bg-white/5 hover:border-white/20"
                      }`}
                    >
                      <span className="text-xl sm:text-2xl">{method.icon}</span>
                      <div>
                        <p className="text-sm font-semibold text-white">
                          {method.type}
                        </p>
                        <p className="text-xs text-white/50">
                          {method.number}
                        </p>
                        <p className="text-[11px] text-white/40">
                          {method.holder}
                        </p>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              <Button
                type="submit"
                disabled={submitting}
                className="h-14 w-full rounded-xl bg-red-600 text-base font-semibold text-white shadow-[0_0_40px_-8px_rgb(220_38_38/0.8)] transition-all hover:-translate-y-0.5 hover:bg-red-500 disabled:opacity-50 sm:h-16 sm:text-lg"
              >
                {submitting ? (
                  "Submitting..."
                ) : (
                  <>
                    <Send className="mr-2 h-4 w-4" />
                    Submit & Send Screenshot
                  </>
                )}
              </Button>
            </form>
          </div>

          {/* Right: Payment Details */}
          <div className="space-y-4 sm:space-y-6 lg:sticky lg:top-6 lg:self-start">
            {/* How to Buy */}
            <div className="rounded-2xl border border-yellow-500/30 bg-yellow-500/5 p-4 sm:p-6">
              <h3 className="mb-2.5 flex items-center gap-2 text-sm font-bold text-yellow-400 sm:mb-3 sm:text-base">
                <AlertCircle className="h-4 w-4 sm:h-5 sm:w-5" />
                How to Buy
              </h3>
              <ol className="space-y-1.5 text-xs text-white/60 sm:space-y-2 sm:text-sm">
                <li className="flex gap-2">
                  <span className="font-bold text-yellow-400">1.</span>
                  Fill in your details on the left
                </li>
                <li className="flex gap-2">
                  <span className="font-bold text-yellow-400">2.</span>
                  Send <span className="font-semibold text-white">RS 4,999</span> to any payment method below
                </li>
                <li className="flex gap-2">
                  <span className="font-bold text-yellow-400">3.</span>
                  Take a screenshot of the payment confirmation
                </li>
                <li className="flex gap-2">
                  <span className="font-bold text-yellow-400">4.</span>
                  Send the screenshot on WhatsApp
                </li>
                <li className="flex gap-2">
                  <span className="font-bold text-yellow-400">5.</span>
                  Get verified & receive login details within 2 hours
                </li>
              </ol>
            </div>

            {/* Payment Methods */}
            <div className="rounded-2xl border border-white/10 bg-neutral-900 p-4 sm:p-6">
              <h3 className="mb-3 flex items-center gap-2 text-sm font-bold text-white sm:mb-4 sm:text-base">
                <CreditCard className="h-4 w-4 text-red-500 sm:h-5 sm:w-5" />
                Payment Details
              </h3>
              <div className="space-y-3 sm:space-y-4">
                {paymentMethods.map((method) => (
                  <div
                    key={method.type}
                    className="rounded-xl border border-white/10 bg-white/5 p-3 sm:p-4"
                  >
                    <div className="mb-2 flex items-center gap-2">
                      <span className="text-base sm:text-lg">{method.icon}</span>
                      <span className="text-xs font-bold text-white sm:text-sm">
                        {method.type}
                      </span>
                    </div>
                    <div className="flex items-start justify-between gap-2">
                      <div className="space-y-0.5 sm:space-y-1">
                        <p className="text-[10px] text-white/40 sm:text-xs">
                          {method.title || "Account Number"}
                        </p>
                        <p className="font-mono text-xs font-semibold text-white sm:text-sm">
                          {method.number}
                        </p>
                        <p className="text-[10px] text-white/40 sm:text-xs">Account Holder</p>
                        <p className="text-xs font-semibold text-white sm:text-sm">
                          {method.holder}
                        </p>
                        {method.extra && (
                          <>
                            <p className="text-[10px] text-white/40 sm:text-xs">{method.extra.label}</p>
                            <p className="font-mono text-[10px] text-white/70 sm:text-xs">
                              {method.extra.value}
                            </p>
                          </>
                        )}
                      </div>
                      <button
                        onClick={() =>
                          handleCopy(method.number, method.type)
                        }
                        className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-white/50 transition-colors hover:border-red-500/50 hover:text-red-400 sm:h-9 sm:w-9"
                      >
                        {copied === method.type ? (
                          <CheckCircle className="h-3.5 w-3.5 text-green-500 sm:h-4 sm:w-4" />
                        ) : (
                          <Copy className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                        )}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* WhatsApp Contact */}
            <div className="rounded-2xl border border-green-500/30 bg-green-500/5 p-4 sm:p-6">
              <h3 className="mb-1.5 flex items-center gap-2 text-sm font-bold text-green-400 sm:mb-2 sm:text-base">
                <MessageCircle className="h-4 w-4 sm:h-5 sm:w-5" />
                Need Help?
              </h3>
              <p className="mb-3 text-xs text-white/60 sm:mb-4 sm:text-sm">
                Send us a message on WhatsApp for instant support.
              </p>
              <Button
                asChild
                className="h-10 w-full rounded-xl bg-green-600 text-sm font-semibold text-white hover:bg-green-500 sm:h-11"
              >
                <Link
                  href="https://wa.me/923189614122?text=Hi!%20I%20need%20help%20with%20the%20AI%20Tools%20course."
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="mr-2 h-4 w-4" />
                  Chat on WhatsApp
                </Link>
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap items-center justify-center gap-3 rounded-2xl border border-white/10 bg-neutral-900 p-3 sm:gap-4 sm:p-4">
              <div className="flex items-center gap-1.5 text-[10px] text-white/50 sm:text-xs">
                <Shield className="h-3 w-3 text-green-500 sm:h-4 sm:w-4" />
                Secure Payment
              </div>
              <div className="flex items-center gap-1.5 text-[10px] text-white/50 sm:text-xs">
                <Clock className="h-3 w-3 text-blue-500 sm:h-4 sm:w-4" />
                Instant Verification
              </div>
              <div className="flex items-center gap-1.5 text-[10px] text-white/50 sm:text-xs">
                <CheckCircle className="h-3 w-3 text-red-500 sm:h-4 sm:w-4" />
                Instant Access
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
