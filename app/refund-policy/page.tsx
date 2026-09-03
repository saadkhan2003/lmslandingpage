import Link from "next/link";

export default function RefundPolicyPage() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      <div className="mx-auto max-w-3xl px-4 py-20 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="mb-8 inline-flex items-center gap-2 text-sm text-white/60 transition-colors hover:text-red-400"
        >
          ← Back to Home
        </Link>
        <h1 className="text-3xl font-bold tracking-tight">Refund Policy</h1>
        <p className="mt-2 text-sm text-white/50">Last updated: September 2026</p>

        <div className="prose prose-invert mt-10 max-w-none space-y-8 text-white/70">
          <section>
            <h2 className="text-xl font-semibold text-white">1. All Sales Are Final</h2>
            <p className="mt-3 leading-relaxed">
              Due to the digital nature of the AI Tools Business Mastery course and the immediate access to all course materials upon purchase, all sales are final. We do not offer refunds, exchanges, or credits once payment has been processed.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">2. No Refunds on Digital Products</h2>
            <p className="mt-3 leading-relaxed">
              Once you have purchased the course and received access to the training materials, videos, templates, and community, the transaction is considered complete. No partial or full refunds will be issued under any circumstances.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">3. What You Receive</h2>
            <p className="mt-3 leading-relaxed">
              Your one-time payment grants you lifetime access to the complete 3-Day Challenge course, all bonus materials, and the student community. Please review the course description carefully before purchasing.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">4. Exceptional Circumstances</h2>
            <p className="mt-3 leading-relaxed">
              In rare cases of technical issues that prevent access to the course entirely (e.g., platform errors on our end), we will work to resolve the issue promptly. If the issue cannot be resolved, contact us at support@aitoolsbusinessmastery.store.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">5. Chargebacks</h2>
            <p className="mt-3 leading-relaxed">
              Filing a chargeback or payment dispute for a completed digital product purchase is considered fraud. We will provide proof of delivery (course access logs, download records) to contest any unauthorized chargebacks.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">6. Contact</h2>
            <p className="mt-3 leading-relaxed">
              If you have any questions about this refund policy before purchasing, please contact us at support@aitoolsbusinessmastery.store.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
