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
  name: "AI Tools Business Mastery – 3-Day Challenge",
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
    `Hi! I just sent payment for the AI Tools Business Mastery course.\n\nName: ${form.name}\nPhone: ${form.phone}\nEmail: ${form.email}\nPayment Method: ${form.paymentMethod}\n\nPlease verify my payment.`
  );

  if (submitted) {
    return (
      <div className="min-h-screen bg-neutral-950 text-white">
        <div className="mx-auto max-w-2xl px-4 py-20 text-center sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-green-500/30 bg-green-500/5 p-10">
            <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-green-500/10">
              <CheckCircle className="h-10 w-10 text-green-500" />
            </div>
            <h1 className="text-3xl font-bold text-white">
              Details Submitted!
            </h1>
            <p className="mt-4 text-lg text-white/60">
              Now send your payment screenshot on WhatsApp for instant
              verification.
            </p>
            <p className="mt-2 text-sm text-white/40">
              After verification, you&apos;ll receive your course login details
              via email and WhatsApp.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
              <Button
                asChild
                className="h-13 rounded-xl bg-green-600 px-8 text-base font-semibold text-white shadow-[0_0_40px_-8px_rgb(34_197_94/0.7)] transition-all hover:-translate-y-0.5 hover:bg-green-500"
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
                className="h-13 rounded-xl border-white/20 bg-white/5 px-8 text-base font-semibold text-white"
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
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/logo.png"
              alt="AI Tools Mastery"
              width={36}
              height={36}
              className="h-9 w-9 rounded-lg object-contain"
            />
          </Link>
          <Badge className="rounded-full border border-green-500/30 bg-green-500/10 px-3 py-1 text-xs text-green-400">
            <Clock className="mr-1 h-3 w-3" />
            Limited Time Offer
          </Badge>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1fr_400px]">
          {/* Left: Form + Instructions */}
          <div className="space-y-8">
            {/* Course Card */}
            <div className="rounded-2xl border border-white/10 bg-neutral-900 p-6">
              <div className="flex items-start justify-between">
                <div>
                  <Badge className="mb-3 rounded-full border border-red-500/30 bg-red-500/10 px-3 py-1 text-xs text-red-400">
                    3-Day Challenge
                  </Badge>
                  <h1 className="text-xl font-bold text-white sm:text-2xl">
                    {courseDetails.name}
                  </h1>
                  <p className="mt-2 text-sm text-white/50">
                    Lifetime access · All episodes · Bonuses · Community
                  </p>
                </div>
              </div>
              <div className="mt-4 flex items-baseline gap-3">
                <span className="text-3xl font-bold text-white">
                  {courseDetails.price}
                </span>
                <span className="text-lg text-white/40 line-through">
                  {courseDetails.originalPrice}
                </span>
                <Badge className="rounded-full bg-red-600 px-2 py-0.5 text-xs text-white">
                  {courseDetails.discount}
                </Badge>
              </div>
            </div>

            {/* User Details Form */}
            <div className="rounded-2xl border border-white/10 bg-neutral-900 p-6">
              <h2 className="mb-6 flex items-center gap-2 text-lg font-bold text-white">
                <User className="h-5 w-5 text-red-500" />
                Your Details
              </h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-white/70">
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
                      placeholder="Muhammad Saad Khan"
                      className="h-12 w-full rounded-xl border border-white/10 bg-white/5 pl-10 pr-4 text-sm text-white placeholder-white/30 outline-none transition-colors focus:border-red-500/50 focus:ring-1 focus:ring-red-500/30"
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-1.5 block text-sm font-medium text-white/70">
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
                      className="h-12 w-full rounded-xl border border-white/10 bg-white/5 pl-10 pr-4 text-sm text-white placeholder-white/30 outline-none transition-colors focus:border-red-500/50 focus:ring-1 focus:ring-red-500/30"
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-1.5 block text-sm font-medium text-white/70">
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
                      className="h-12 w-full rounded-xl border border-white/10 bg-white/5 pl-10 pr-4 text-sm text-white placeholder-white/30 outline-none transition-colors focus:border-red-500/50 focus:ring-1 focus:ring-red-500/30"
                    />
                  </div>
                  <p className="mt-1 text-xs text-white/40">
                    Your course login will be sent here
                  </p>
                </div>

                <div>
                  <label className="mb-1.5 block text-sm font-medium text-white/70">
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
                      className="h-12 w-full rounded-xl border border-white/10 bg-white/5 pl-10 pr-4 text-sm text-white placeholder-white/30 outline-none transition-colors focus:border-red-500/50 focus:ring-1 focus:ring-red-500/30"
                    />
                  </div>
                </div>

                <Separator className="bg-white/10" />

                {/* Payment Method Selection */}
                <div>
                  <label className="mb-3 block text-sm font-medium text-white/70">
                    Select Payment Method *
                  </label>
                  <div className="grid gap-3 sm:grid-cols-2">
                    {paymentMethods.map((method) => (
                      <button
                        key={method.type}
                        type="button"
                        onClick={() =>
                          setForm({ ...form, paymentMethod: method.type })
                        }
                        className={`flex items-center gap-3 rounded-xl border p-4 text-left transition-all ${
                          form.paymentMethod === method.type
                            ? "border-red-500/50 bg-red-500/10 ring-1 ring-red-500/30"
                            : "border-white/10 bg-white/5 hover:border-white/20"
                        }`}
                      >
                        <span className="text-2xl">{method.icon}</span>
                        <div>
                          <p className="text-sm font-semibold text-white">
                            {method.type}
                          </p>
                          <p className="text-xs text-white/50">
                            {method.number}
                          </p>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                <Button
                  type="submit"
                  disabled={submitting}
                  className="h-13 w-full rounded-xl bg-red-600 text-base font-semibold text-white shadow-[0_0_40px_-8px_rgb(220_38_38/0.8)] transition-all hover:-translate-y-0.5 hover:bg-red-500 disabled:opacity-50"
                >
                  {submitting ? (
                    "Submitting..."
                  ) : (
                    <>
                      <Send className="mr-2 h-4 w-4" />
                      Submit & Send Screenshot on WhatsApp
                    </>
                  )}
                </Button>
              </form>
            </div>
          </div>

          {/* Right: Payment Details (Sticky) */}
          <div className="lg:sticky lg:top-6 lg:self-start">
            <div className="space-y-6">
              {/* Payment Instructions */}
              <div className="rounded-2xl border border-yellow-500/30 bg-yellow-500/5 p-6">
                <h3 className="mb-3 flex items-center gap-2 text-base font-bold text-yellow-400">
                  <AlertCircle className="h-5 w-5" />
                  How to Buy
                </h3>
                <ol className="space-y-2 text-sm text-white/60">
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
              <div className="rounded-2xl border border-white/10 bg-neutral-900 p-6">
                <h3 className="mb-4 flex items-center gap-2 text-base font-bold text-white">
                  <CreditCard className="h-5 w-5 text-red-500" />
                  Payment Details
                </h3>
                <div className="space-y-4">
                  {paymentMethods.map((method) => (
                    <div
                      key={method.type}
                      className="rounded-xl border border-white/10 bg-white/5 p-4"
                    >
                      <div className="mb-2 flex items-center gap-2">
                        <span className="text-lg">{method.icon}</span>
                        <span className="text-sm font-bold text-white">
                          {method.type}
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="space-y-1">
                          <p className="text-xs text-white/40">
                            {method.title || "Account Number"}
                          </p>
                          <p className="font-mono text-sm font-semibold text-white">
                            {method.number}
                          </p>
                          <p className="text-xs text-white/40">Account Holder</p>
                          <p className="text-sm font-semibold text-white">
                            {method.holder}
                          </p>
                          {method.extra && (
                            <>
                              <p className="text-xs text-white/40">{method.extra.label}</p>
                              <p className="font-mono text-xs text-white/70">
                                {method.extra.value}
                              </p>
                            </>
                          )}
                        </div>
                        <button
                          onClick={() =>
                            handleCopy(method.number, method.type)
                          }
                          className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-white/50 transition-colors hover:border-red-500/50 hover:text-red-400"
                        >
                          {copied === method.type ? (
                            <CheckCircle className="h-4 w-4 text-green-500" />
                          ) : (
                            <Copy className="h-4 w-4" />
                          )}
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* WhatsApp Contact */}
              <div className="rounded-2xl border border-green-500/30 bg-green-500/5 p-6">
                <h3 className="mb-2 flex items-center gap-2 text-base font-bold text-green-400">
                  <MessageCircle className="h-5 w-5" />
                  Need Help?
                </h3>
                <p className="mb-4 text-sm text-white/60">
                  Send us a message on WhatsApp for instant support.
                </p>
                <Button
                  asChild
                  className="h-11 w-full rounded-xl bg-green-600 font-semibold text-white hover:bg-green-500"
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
              <div className="flex flex-wrap items-center justify-center gap-4 rounded-2xl border border-white/10 bg-neutral-900 p-4">
                <div className="flex items-center gap-2 text-xs text-white/50">
                  <Shield className="h-4 w-4 text-green-500" />
                  Secure Payment
                </div>
                <div className="flex items-center gap-2 text-xs text-white/50">
                  <Clock className="h-4 w-4 text-blue-500" />
                  Instant Verification
                </div>
                <div className="flex items-center gap-2 text-xs text-white/50">
                  <CheckCircle className="h-4 w-4 text-red-500" />
                  Instant Access
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
