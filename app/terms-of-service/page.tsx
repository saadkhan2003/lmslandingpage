import Link from "next/link";

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      <div className="mx-auto max-w-3xl px-4 py-20 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="mb-8 inline-flex items-center gap-2 text-sm text-white/60 transition-colors hover:text-red-400"
        >
          ← Back to Home
        </Link>
        <h1 className="text-3xl font-bold tracking-tight">Terms of Service</h1>
        <p className="mt-2 text-sm text-white/50">Last updated: September 2026</p>

        <div className="prose prose-invert mt-10 max-w-none space-y-8 text-white/70">
          <section>
            <h2 className="text-xl font-semibold text-white">1. Acceptance of Terms</h2>
            <p className="mt-3 leading-relaxed">
              By accessing or using AI Tools Business Mastery, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">2. Description of Service</h2>
            <p className="mt-3 leading-relaxed">
              AI Tools Business Mastery provides online educational courses, training materials, and resources related to building an AI tools business. Access is granted upon successful payment.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">3. Account Registration</h2>
            <p className="mt-3 leading-relaxed">
              You are responsible for maintaining the confidentiality of your account credentials. You agree to provide accurate and complete information when creating your account and to update it as necessary.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">4. Payment and Pricing</h2>
            <p className="mt-3 leading-relaxed">
              All prices are listed in USD. Payment is required in full before course access is granted. We reserve the right to change pricing at any time, but this will not affect previously purchased courses.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">5. Intellectual Property</h2>
            <p className="mt-3 leading-relaxed">
              All course materials, including videos, templates, text, and graphics, are the intellectual property of AI Tools Business Mastery. You may not reproduce, distribute, or share course materials with non-enrolled individuals.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">6. User Conduct</h2>
            <p className="mt-3 leading-relaxed">
              You agree not to misuse the platform, share your account credentials, redistribute course content, or engage in any activity that disrupts the learning environment. Violation may result in account termination without refund.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">7. Disclaimer of Results</h2>
            <p className="mt-3 leading-relaxed">
              While we provide step-by-step systems and strategies, individual results may vary. We do not guarantee specific income or sales figures. Your success depends on your effort, application of the material, and market conditions.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">8. Limitation of Liability</h2>
            <p className="mt-3 leading-relaxed">
              To the maximum extent permitted by law, AI Tools Business Mastery shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of the service.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">9. Termination</h2>
            <p className="mt-3 leading-relaxed">
              We reserve the right to suspend or terminate your access to the platform at our discretion if you violate these terms. Upon termination, your right to access course materials ceases immediately.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">10. Changes to Terms</h2>
            <p className="mt-3 leading-relaxed">
              We may revise these Terms of Service at any time. Continued use of the platform after changes constitutes acceptance of the revised terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">11. Contact</h2>
            <p className="mt-3 leading-relaxed">
              For questions regarding these Terms, contact us at support@aitoolsbusinessmastery.store.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
