import { ShieldCheck, Clock, Award, BadgeCheck } from "lucide-react";

const trustItems = [
  { icon: ShieldCheck, label: "Secure Enrollment" },
  { icon: Clock, label: "Instant Access" },
  { icon: Award, label: "Quality Content" },
  { icon: BadgeCheck, label: "Verified Program" },
];

export function TrustStrip() {
  return (
    <section className="w-full border-y border-slate-200 bg-white py-5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-px divide-x divide-slate-200 bg-slate-200 md:grid-cols-4">
          {trustItems.map((item) => (
            <div
              key={item.label}
              className="flex items-center justify-center gap-2 bg-white py-4 text-slate-600"
            >
              <item.icon className="h-4 w-4 text-emerald-600" />
              <span className="text-sm font-semibold">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
