import { Link, createFileRoute } from "@tanstack/react-router";
import { ArrowLeft, Sparkles } from "lucide-react";

export const Route = createFileRoute("/terms-and-conditions")({
  head: () => ({
    meta: [
      { title: "Terms & Conditions — Digit Fortune" },
      { name: "description", content: "Digit Fortune terms and conditions. Read our policies for purchasing and using digital products." },
      { property: "og:title", content: "Terms & Conditions — Digit Fortune" },
      { property: "og:description", content: "Digit Fortune terms and conditions. Read our policies for purchasing and using digital products." },
    ],
  }),
  component: TermsAndConditions,
});

function TermsAndConditions() {
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
          <h1 className="text-3xl sm:text-4xl font-bold">Terms & Conditions</h1>
          <p className="mt-2 text-sm text-muted-foreground">Last updated: June 2026</p>

          <div className="mt-10 space-y-10 text-sm sm:text-base leading-relaxed text-muted-foreground">
            <section>
              <h2 className="text-lg font-semibold text-foreground">1. Overview</h2>
              <p className="mt-2">
                These Terms & Conditions (“Terms”) govern your access to and use of the Digit Fortune website and the purchase of our digital products. By accessing our website or making a purchase, you agree to be bound by these Terms.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground">2. Definitions</h2>
              <ul className="mt-2 list-disc list-inside space-y-1">
                <li><strong>“Product”</strong> means any digital download, template, eBook, prompt pack, or other digital asset sold on our website.</li>
                <li><strong>“License”</strong> means the rights granted to you upon purchase of a Product.</li>
                <li><strong>“We / Us / Our”</strong> refers to Digit Fortune.</li>
                <li><strong>“You / Your”</strong> refers to the purchaser or user of our Products.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground">3. Purchase & Payment</h2>
              <ul className="mt-2 list-disc list-inside space-y-1">
                <li>All prices are listed in Indian Rupees (INR) and are inclusive of applicable taxes unless stated otherwise.</li>
                <li>Payment must be made in full before access to Products is granted.</li>
                <li>We use secure third-party payment processors (Razorpay / Instamojo). We are not responsible for payment gateway errors.</li>
                <li>Prices are subject to change without notice. Promotional prices are valid only during the stated period.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground">4. Delivery</h2>
              <p className="mt-2">
                Upon successful payment, you will receive instant access to your purchased Products via email and/or your account dashboard. Download links are typically active for 30 days. It is your responsibility to download and back up your files.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground">5. License & Usage Rights</h2>
              <ul className="mt-2 list-disc list-inside space-y-1">
                <li>You receive a <strong>non-exclusive, non-transferable license</strong> to use the Products for personal or commercial purposes.</li>
                <li>You may use the Products in client work and end products you create.</li>
                <li>You may <strong>not</strong> resell, redistribute, share, or give away the original files as-is in a way that competes with our store.</li>
                <li>You may <strong>not</strong> claim ownership of the original intellectual property or register trademarks based on our assets.</li>
                <li>All intellectual property rights in the Products remain with Digit Fortune or its licensors.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground">6. Refund Policy</h2>
              <p className="mt-2">
                Due to the digital and instantly accessible nature of our Products, all sales are generally final. We offer a <strong>7-day money-back guarantee</strong> only if you experience technical issues that prevent you from accessing the files, and our support team is unable to resolve the problem. See our <Link to="/refund-policy" className="text-primary hover:underline">Refund Policy</Link> for full details.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground">7. Prohibited Conduct</h2>
              <ul className="mt-2 list-disc list-inside space-y-1">
                <li>Attempting to bypass any access restrictions or share download links publicly.</li>
                <li>Uploading our Products to file-sharing websites, torrents, or giveaway platforms.</li>
                <li>Using our Products for illegal, defamatory, or harmful purposes.</li>
                <li>Reverse engineering or extracting source files from compiled templates without authorization.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground">8. Limitation of Liability</h2>
              <p className="mt-2">
                To the maximum extent permitted by law, Digit Fortune shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of your use of our Products or website. Our total liability shall not exceed the amount you paid for the specific Product in question.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground">9. Disclaimer</h2>
              <p className="mt-2">
                Our Products are provided “as is” without warranties of any kind. While we strive for accuracy, we do not guarantee specific results, income, or business outcomes from using our Products. Your results depend on your effort, skills, and market conditions.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground">10. Governing Law</h2>
              <p className="mt-2">
                These Terms shall be governed by and construed in accordance with the laws of India. Any disputes shall be subject to the exclusive jurisdiction of the courts in [City, India].
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground">11. Changes to Terms</h2>
              <p className="mt-2">
                We reserve the right to modify these Terms at any time. Changes will be effective immediately upon posting. Continued use of our website or Products after changes constitutes acceptance of the new Terms.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground">12. Contact Us</h2>
              <p className="mt-2">
                For questions about these Terms, please email us at{" "}
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
