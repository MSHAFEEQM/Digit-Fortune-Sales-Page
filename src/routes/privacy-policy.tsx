import { Link, createFileRoute } from "@tanstack/react-router";
import { ArrowLeft, Sparkles, Mail } from "lucide-react";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — Digit Fortune" },
      { name: "description", content: "Digit Fortune privacy policy. Learn how we collect, use, and protect your personal information." },
      { property: "og:title", content: "Privacy Policy — Digit Fortune" },
      { property: "og:description", content: "Digit Fortune privacy policy. Learn how we collect, use, and protect your personal information." },
    ],
  }),
  component: PrivacyPolicy,
});

function PrivacyPolicy() {
  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-40 backdrop-blur-xl bg-background/60 border-b border-white/5">
        <div className="mx-auto max-w-7xl px-4 h-16 flex items-center gap-3">
          <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
            <ArrowLeft className="h-4 w-4" /> Back to Home
          </Link>
        </div>
      </header>

      <main className="py-16">
        <div className="mx-auto max-w-3xl px-4">
          <h1 className="text-3xl sm:text-4xl font-bold">Privacy Policy</h1>
          <p className="mt-2 text-sm text-muted-foreground">Last updated: June 2026</p>

          <div className="mt-10 space-y-10 text-sm sm:text-base leading-relaxed text-muted-foreground">
            <section>
              <h2 className="text-lg font-semibold text-foreground">1. Introduction</h2>
              <p className="mt-2">
                Digit Fortune (“we”, “our”, or “us”) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and purchase our digital products.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground">2. Information We Collect</h2>
              <ul className="mt-2 list-disc list-inside space-y-1">
                <li><strong>Personal Information:</strong> Name, email address, phone number, and billing details provided during checkout.</li>
                <li><strong>Payment Information:</strong> Processed securely through our payment gateway (Razorpay / Instamojo). We do not store your full card details on our servers.</li>
                <li><strong>Usage Data:</strong> IP address, browser type, device information, and pages visited to improve our services.</li>
                <li><strong>Cookies:</strong> Small data files stored on your device to enhance user experience and analyze traffic.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground">3. How We Use Your Information</h2>
              <ul className="mt-2 list-disc list-inside space-y-1">
                <li>To process and deliver your orders, including sending download links and access credentials.</li>
                <li>To communicate with you regarding your purchase, support requests, or product updates.</li>
                <li>To send promotional emails and offers (you may opt out at any time).</li>
                <li>To analyze website usage and improve our products, services, and user experience.</li>
                <li>To detect and prevent fraud, abuse, or security incidents.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground">4. Sharing Your Information</h2>
              <p className="mt-2">
                We do not sell your personal information. We may share your data with:
              </p>
              <ul className="mt-2 list-disc list-inside space-y-1">
                <li><strong>Payment Processors:</strong> To securely process your transactions.</li>
                <li><strong>Email Service Providers:</strong> To send order confirmations and marketing communications.</li>
                <li><strong>Analytics Partners:</strong> To understand website traffic and improve our offerings.</li>
                <li><strong>Legal Authorities:</strong> When required by law, court order, or to protect our rights.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground">5. Data Security</h2>
              <p className="mt-2">
                We implement industry-standard security measures including SSL encryption, secure payment gateways, and restricted access to personal data. While we strive to protect your information, no method of transmission over the internet is 100% secure.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground">6. Your Rights</h2>
              <ul className="mt-2 list-disc list-inside space-y-1">
                <li>Access, update, or delete your personal information by contacting us.</li>
                <li>Opt out of marketing emails using the unsubscribe link in any promotional message.</li>
                <li>Request a copy of the data we hold about you.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground">7. Third-Party Links</h2>
              <p className="mt-2">
                Our website may contain links to third-party sites. We are not responsible for the privacy practices or content of those websites.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground">8. Changes to This Policy</h2>
              <p className="mt-2">
                We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated effective date.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground">9. Contact Us</h2>
              <p className="mt-2">
                If you have any questions about this Privacy Policy, please contact us at{" "}
                <a href="mailto:fortunemechanics@gmail.com" className="text-primary hover:underline">fortunemechanics@gmail.com</a>.
              </p>
            </section>
          </div>
        </div>
      </main>

      <footer className="border-t border-white/5 pt-10 pb-10">
        <div className="mx-auto max-w-7xl px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-primary to-primary/40 grid place-items-center">
              <Sparkles className="h-4 w-4 text-primary-foreground" />
            </div>
            <span className="font-display font-bold text-lg">Digit Fortune</span>
          </div>
          <div className="text-xs text-muted-foreground">
            © 2026 Digit Fortune. All Rights Reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
