
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

export default function RefundPage() {
  return (
    <>
      <Header />
      <main className="flex-1 bg-background py-16">
        <div className="container px-4 mx-auto max-w-3xl bg-white p-8 lg:p-12 shadow-sm rounded-2xl">
          <h1 className="text-4xl font-headline text-primary mb-8 text-center">Refund Policy</h1>
          <div className="prose prose-blue max-w-none text-muted-foreground space-y-6">
            <p>Our goal is to provide high-quality legal tools to help you stop harassment. Please review our refund policy for digital products.</p>
            
            <section>
              <h2 className="text-xl font-bold text-primary">1. Digital Product Nature</h2>
              <p>Due to the digital nature of our generated letters and the immediate delivery of service, we generally do not offer refunds once a letter has been successfully generated and accessed.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-primary">2. Eligibility for Refunds</h2>
              <p>Refunds may be issued in the following specific circumstances:</p>
              <ul>
                <li>Technical failure of the AI generator that prevents you from receiving your document.</li>
                <li>Duplicate payments made in error.</li>
                <li>System-wide outages that delayed service significantly.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-primary">3. Request Process</h2>
              <p>To request a refund, please contact support@stopanddesist.com within 48 hours of your purchase. Please include your order number and a brief description of the issue.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-primary">4. Support Review</h2>
              <p>All refund requests are subject to review by our support team. We aim to respond to all inquiries within 24-48 hours. Approved refunds will be credited back to the original payment method through Paddle.</p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
