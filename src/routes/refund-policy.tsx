import { Link, createFileRoute } from "@tanstack/react-router";
import { ArrowLeft, Sparkles, Check, X } from "lucide-react";

export const Route = createFileRoute("/refund-policy")({
  head: () => ({
    meta: [
      { title: "Refund Policy — Digit Fortune" },
      { name: "description", content: "Digit Fortune refund policy. Learn about our 7-day money-back guarantee and refund eligibility for digital products." },
      { property: "og:title", content: "Refund Policy — Digit Fortune" },
      { property: "og:description", content: "Digit Fortune refund policy. Learn about our 7-day money-back guarantee and refund eligibility for digital products." },
    ],
  }),
  component: RefundPolicy,
});

function RefundPolicy() {
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
          <h1 className="text-3xl sm:text-4xl font-bold">Refund Policy</h1>
          <p className="mt-2 text-sm text-muted-foreground">Last updated: June 2026</p>

          <div className="mt-10 space-y-10 text-sm sm:text-base leading-relaxed text-muted-foreground">
            <section>
              <h2 className="text-lg font-semibold text-foreground">1. Our Commitment</h2>
              <p className="mt-2">
                At Digit Fortune, we stand behind the quality of our digital products. We want you to be satisfied with your purchase. This Refund Policy outlines when and how you can request a refund.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground">2. 3-Day Money-Back Guarantee</h2>
              <p className="mt-2">
                We offer a <strong>7-day money-back guarantee</strong> on all purchases. If you are unable to access or download your purchased files due to technical issues, and our support team cannot resolve the problem within 3 days of your purchase, you are eligible for a full refund.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground">3. Eligible Refund Reasons</h2>
              <ul className="mt-2 space-y-2">
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Broken or corrupted download files that prevent you from using the product.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-emerald-400 shrink-0 mt-0.5" />
                  <span>You were charged multiple times for the same product due to a payment gateway error.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-emerald-400 shrink-0 mt-0.5" />
                  <span>The product description was significantly misleading or the contents did not match what was advertised.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Technical issues on our end that prevent file delivery or access to your account.</span>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground">4. Non-Eligible Refund Reasons</h2>
              <p className="mt-2">
                Due to the digital and instantly accessible nature of our products, we cannot offer refunds in the following situations:
              </p>
              <ul className="mt-2 space-y-2">
                <li className="flex items-start gap-2">
                  <X className="h-5 w-5 text-rose-400 shrink-0 mt-0.5" />
                  <span>You changed your mind or no longer need the product after purchase.</span>
                </li>
                <li className="flex items-start gap-2">
                  <X className="h-5 w-5 text-rose-400 shrink-0 mt-0.5" />
                  <span>You failed to download the files within the active link period (30 days from purchase).</span>
                </li>
                <li className="flex items-start gap-2">
                  <X className="h-5 w-5 text-rose-400 shrink-0 mt-0.5" />
                  <span>You did not read the product description or misunderstood what was included.</span>
                </li>
                <li className="flex items-start gap-2">
                  <X className="h-5 w-5 text-rose-400 shrink-0 mt-0.5" />
                  <span>You purchased the product by mistake but did not contact us within 3 days.</span>
                </li>
                <li className="flex items-start gap-2">
                  <X className="h-5 w-5 text-rose-400 shrink-0 mt-0.5" />
                  <span>You are dissatisfied with the quality for subjective reasons after downloading and reviewing the files.</span>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground">5. How to Request a Refund</h2>
              <ul className="mt-2 list-disc list-inside space-y-1">
                <li>Email us at <a href="mailto:fortunemechanics@gmail.com" className="text-primary hover:underline">fortunemechanics@gmail.com</a> within 7 days of your purchase.</li>
                <li>Include your order ID, purchase email, and a brief explanation of the issue.</li>
                <li>Attach screenshots or screen recordings if applicable to help us understand the problem.</li>
                <li>Our support team will review your request within 2-3 business days.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground">6. Refund Processing</h2>
              <ul className="mt-2 list-disc list-inside space-y-1">
                <li>Approved refunds will be processed to the original payment method within 5-10 business days.</li>
                <li>Depending on your bank or payment provider, it may take additional time for the refund to reflect in your account.</li>
                <li>We do not offer partial refunds. Refunds are issued for the full purchase amount only.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground">7. Chargebacks & Disputes</h2>
              <p className="mt-2">
                We encourage you to contact us directly before initiating a chargeback or payment dispute. Chargebacks without contacting us first may result in the suspension of your access to all purchased products. We reserve the right to dispute illegitimate chargebacks.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground">8. Changes to This Policy</h2>
              <p className="mt-2">
                We may update this Refund Policy at any time. Changes will be posted on this page with an updated effective date. Refund requests are subject to the policy in effect at the time of purchase.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground">9. Contact Us</h2>
              <p className="mt-2">
                For refund requests or questions about this policy, please email{" "}
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
