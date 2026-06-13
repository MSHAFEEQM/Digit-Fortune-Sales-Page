import { Link, createFileRoute } from "@tanstack/react-router";
import { ArrowLeft, Sparkles, Mail, MapPin, Clock, Send } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/contact-us")({
  head: () => ({
    meta: [
      { title: "Contact Us — Digit Fortune" },
      { name: "description", content: "Contact Digit Fortune for support, refund requests, partnership inquiries, or general questions about our digital products." },
      { property: "og:title", content: "Contact Us — Digit Fortune" },
      { property: "og:description", content: "Contact Digit Fortune for support, refund requests, partnership inquiries, or general questions about our digital products." },
    ],
  }),
  component: ContactUs,
});

function ContactUs() {
  const [submitted, setSubmitted] = useState(false);

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
        <div className="mx-auto max-w-5xl px-4">
          <div className="text-center max-w-2xl mx-auto">
            <h1 className="text-3xl sm:text-4xl font-bold">Contact Us</h1>
            <p className="mt-3 text-muted-foreground">
              Have a question about your order, need technical support, or want to partner with us? We are here to help.
            </p>
          </div>

          <div className="mt-14 grid lg:grid-cols-3 gap-8">
            {/* Contact Info Cards */}
            <div className="space-y-5">
              <div className="glass rounded-2xl p-5">
                <div className="h-10 w-10 rounded-xl bg-primary/10 grid place-items-center mb-3">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground">Email Us</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  For general inquiries and support
                </p>
                <a href="mailto:fortunemechanics@gmail.com" className="mt-2 inline-block text-sm text-primary hover:underline">
                  fortunemechanics@gmail.com
                </a>
              </div>

              <div className="glass rounded-2xl p-5">
                <div className="h-10 w-10 rounded-xl bg-primary/10 grid place-items-center mb-3">
                  <Clock className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground">Response Time</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  We typically respond within 24-48 hours on business days.
                </p>
              </div>

              <div className="glass rounded-2xl p-5">
                <div className="h-10 w-10 rounded-xl bg-primary/10 grid place-items-center mb-3">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground">Business Hours</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  Monday – Saturday<br />10:00 AM – 6:00 PM IST
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              {submitted ? (
                <div className="glass rounded-2xl p-8 text-center">
                  <div className="h-14 w-14 rounded-full bg-emerald-500/10 grid place-items-center mx-auto mb-4">
                    <Send className="h-7 w-7 text-emerald-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">Message Sent!</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Thank you for reaching out. We have received your message and will get back to you as soon as possible.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-6 inline-flex items-center justify-center rounded-xl bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSubmitted(true);
                  }}
                  className="glass rounded-2xl p-6 sm:p-8 space-y-5"
                >
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1.5">
                        Full Name
                      </label>
                      <input
                        id="name"
                        type="text"
                        required
                        placeholder="John Doe"
                        className="flex h-10 w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1.5">
                        Email Address
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        placeholder="john@example.com"
                        className="flex h-10 w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-1.5">
                      Subject
                    </label>
                    <select
                      id="subject"
                      required
                      className="flex h-10 w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary"
                    >
                      <option value="" className="bg-background">Select a subject</option>
                      <option value="order" className="bg-background">Order / Download Issue</option>
                      <option value="refund" className="bg-background">Refund Request</option>
                      <option value="product" className="bg-background">Product Question</option>
                      <option value="partnership" className="bg-background">Partnership / Collaboration</option>
                      <option value="other" className="bg-background">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="order-id" className="block text-sm font-medium text-foreground mb-1.5">
                      Order ID (if applicable)
                    </label>
                    <input
                      id="order-id"
                      type="text"
                      placeholder="e.g., ORD-123456"
                      className="flex h-10 w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1.5">
                      Message
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={5}
                      placeholder="How can we help you?"
                      className="flex w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary resize-y"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
                  >
                    <Send className="h-4 w-4" /> Send Message
                  </button>

                  <p className="text-xs text-muted-foreground text-center">
                    This is a demo contact form. For real inquiries, please email us directly at{" "}
                    <a href="mailto:fortunemechanics@gmail.com" className="text-primary hover:underline">fortunemechanics@gmail.com</a>.
                  </p>
                </form>
              )}
            </div>
          </div>

          {/* FAQ Quick Links */}
          <div className="mt-16 text-center">
            <p className="text-sm text-muted-foreground">
              Looking for quick answers? Check our{" "}
              <Link to="/" className="text-primary hover:underline">FAQ section</Link>{" "}
              on the homepage.
            </p>
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
