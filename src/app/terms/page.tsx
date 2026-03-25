
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

export default function TermsPage() {
  return (
    <>
      <Header />
      <main className="flex-1 bg-background py-16">
        <div className="container px-4 mx-auto max-w-3xl bg-white p-8 lg:p-12 shadow-sm rounded-2xl">
          <h1 className="text-4xl font-headline text-primary mb-8 text-center">Terms of Service</h1>
          <div className="prose prose-blue max-w-none text-muted-foreground space-y-6">
            <p>Welcome to StopAndDesist. By using our website and services, you agree to comply with and be bound by the following terms and conditions.</p>
            
            <section>
              <h2 className="text-xl font-bold text-primary">1. Not a Law Firm</h2>
              <p>StopAndDesist is a technology platform and not a law firm. We do not provide legal advice, legal opinions, or legal recommendations. Our AI-driven tool generates documents based on information you provide.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-primary">2. No Attorney-Client Relationship</h2>
              <p>Your use of this service does not create an attorney-client relationship between you and StopAndDesist or any of its employees. No information provided by our service is intended to be a substitute for professional legal advice.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-primary">3. AI-Generated Content</h2>
              <p>Our letters are generated using artificial intelligence. While we strive for accuracy, we do not guarantee that the generated content is free of errors or that it will be effective in all jurisdictions or for all types of debt.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-primary">4. User Responsibility</h2>
              <p>You are solely responsible for the information you input into our forms. You must ensure all information is accurate and truthful. You are responsible for the actual delivery and use of the generated letter.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-primary">5. No Guarantee of Outcome</h2>
              <p>We do not guarantee that a debt collector will stop their activities upon receipt of our letter. While the FDCPA provides protections, enforcement may require additional legal action beyond the scope of our service.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-primary">6. Payment Terms</h2>
              <p>Payments are handled securely via Paddle. Access to the generation tool is granted upon successful processing of the $49 service fee.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-primary">7. Limitation of Liability</h2>
              <p>StopAndDesist shall not be liable for any direct, indirect, incidental, or consequential damages resulting from the use or inability to use our services.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-primary">8. Jurisdiction</h2>
              <p>These terms are governed by the laws of the United States. Any disputes shall be resolved in accordance with US federal and state regulations.</p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
