import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="flex-1 bg-background py-16">
        <div className="container px-4 mx-auto max-w-3xl bg-white p-8 lg:p-12 shadow-sm rounded-2xl">
          <h1 className="text-4xl font-headline text-primary mb-8 text-center">Privacy Policy</h1>
          <div className="prose prose-blue max-w-none text-muted-foreground space-y-6">
            <p>At Stop And Desist, your privacy is our top priority. This policy explains how we collect, use, and protect your personal information.</p>
            
            <section>
              <h2 className="text-xl font-bold text-primary">1. Personal Data Collection</h2>
              <p>We collect information that you voluntarily provide when contacting us or using our services, including your name, email, and details about your situation. This data is used solely to provide support.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-primary">2. No Selling of Data</h2>
              <p>We do not sell, trade, or otherwise transfer your personally identifiable information to outside parties. Your data is private and confidential.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-primary">3. Cookie Usage</h2>
              <p>We use cookies to improve your experience on our site, such as maintaining your session and analyzing traffic. You can choose to disable cookies through your browser settings.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-primary">4. GDPR & CCPA Compliance</h2>
              <p>We comply with the General Data Protection Regulation (GDPR) and the California Consumer Privacy Act (CCPA). You have the right to access, correct, or request the deletion of your personal data at any time.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-primary">5. Data Deletion Requests</h2>
              <p>To request the permanent deletion of your data from our systems, please contact us at stopanddesist@gmail.com. We will process your request within 48 hours.</p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
