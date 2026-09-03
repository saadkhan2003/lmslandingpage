import Link from "next/link";

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      <div className="mx-auto max-w-3xl px-4 py-20 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="mb-8 inline-flex items-center gap-2 text-sm text-white/60 transition-colors hover:text-red-400"
        >
          ← Back to Home
        </Link>
        <h1 className="text-3xl font-bold tracking-tight">Privacy Policy</h1>
        <p className="mt-2 text-sm text-white/50">Last updated: September 2026</p>

        <div className="prose prose-invert mt-10 max-w-none space-y-8 text-white/70">
          <section>
            <h2 className="text-xl font-semibold text-white">1. Information We Collect</h2>
            <p className="mt-3 leading-relaxed">
              When you enroll in AI Tools Business Mastery, we collect your name, email address, and payment information. We also collect usage data such as pages visited, videos watched, and interaction with course materials to improve your learning experience.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">2. How We Use Your Information</h2>
            <p className="mt-3 leading-relaxed">
              We use your information to provide course access, send important updates, personalize your experience, process payments, and improve our products. We do not sell your personal information to third parties.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">3. Payment Processing</h2>
            <p className="mt-3 leading-relaxed">
              Payments are processed through secure, PCI-compliant payment processors. We do not store your full credit card details on our servers. All transactions are encrypted using industry-standard SSL technology.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">4. Data Sharing</h2>
            <p className="mt-3 leading-relaxed">
              We may share your information with trusted service providers who assist in operating our platform (e.g., payment processors, email services). These providers are contractually obligated to keep your information confidential and use it only for the services they provide to us.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">5. Cookies</h2>
            <p className="mt-3 leading-relaxed">
              We use cookies and similar technologies to maintain your session, remember your preferences, and analyze usage patterns. You can control cookie settings through your browser preferences.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">6. Your Rights</h2>
            <p className="mt-3 leading-relaxed">
              You have the right to access, correct, or delete your personal data. You may also opt out of marketing communications at any time by clicking the unsubscribe link in our emails or contacting us directly.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">7. Data Security</h2>
            <p className="mt-3 leading-relaxed">
              We implement industry-standard security measures to protect your personal information. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">8. Children&apos;s Privacy</h2>
            <p className="mt-3 leading-relaxed">
              Our services are not intended for individuals under the age of 18. We do not knowingly collect personal information from children. If we become aware that a child has provided us with personal data, we will take steps to delete it.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">9. Changes to This Policy</h2>
            <p className="mt-3 leading-relaxed">
              We may update this Privacy Policy from time to time. We will notify you of any significant changes by posting the new policy on this page and updating the &quot;Last updated&quot; date.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">10. Contact Us</h2>
            <p className="mt-3 leading-relaxed">
              If you have any questions about this Privacy Policy, please contact us at support@aitoolsbusinessmastery.store.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
