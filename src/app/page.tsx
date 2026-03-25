
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { 
  ShieldCheck, 
  Clock, 
  Scale, 
  FileText, 
  CheckCircle2, 
  ArrowRight,
  ShieldAlert,
  HandCoins,
  Smile
} from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

export default function LandingPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-20 lg:py-32 overflow-hidden bg-primary text-primary-foreground">
          <div className="container px-4 mx-auto relative z-10">
            <div className="max-w-3xl">
              <h1 className="text-4xl lg:text-6xl font-headline mb-6 leading-tight">
                Stop Debt Collector Harassment Instantly
              </h1>
              <p className="text-xl lg:text-2xl mb-10 text-blue-100 font-light">
                Take control of your financial peace. Get the support you need to exercise your legal rights under the FDCPA.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-primary font-bold text-lg h-14 px-8" asChild>
                  <Link href="/contact">Get Help Now</Link>
                </Button>
                <Button size="lg" variant="outline" className="bg-transparent border-secondary text-secondary hover:bg-secondary/10 h-14 px-8" asChild>
                  <a href="#how-it-works">See How It Works</a>
                </Button>
              </div>
              <div className="mt-12 flex flex-wrap gap-6 items-center opacity-80 text-sm">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5" /> FDCPA Compliance
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5" /> Private & confidential
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5" /> Expert Guidance
                </div>
              </div>
            </div>
          </div>
          <div className="absolute right-0 top-1/2 -translate-y-1/2 opacity-10 pointer-events-none hidden lg:block">
            <Scale size={600} />
          </div>
        </section>

        {/* How It Works */}
        <section id="how-it-works" className="py-20 bg-white">
          <div className="container px-4 mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-headline mb-16 text-primary">How It Works</h2>
            <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">
              {[
                { step: "1", title: "Reach Out", desc: "Contact our support team to describe the harassment you are facing.", icon: FileText },
                { step: "2", title: "Expert Review", desc: "We review your situation against consumer protection laws.", icon: Scale },
                { step: "3", title: "Resolution", desc: "We provide the tools and guidance to stop unlawful collection attempts.", icon: CheckCircle2 }
              ].map((item, idx) => (
                <div key={idx} className="flex flex-col items-center">
                  <div className="w-20 h-20 rounded-full bg-blue-50 flex items-center justify-center text-secondary mb-6 relative">
                    <item.icon className="w-10 h-10" />
                    <span className="absolute -top-2 -right-2 bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">
                      {item.step}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-background">
          <div className="container px-4 mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl lg:text-4xl font-headline mb-8 text-primary">Protect Your Legal Rights</h2>
                <div className="space-y-6">
                  {[
                    { icon: ShieldAlert, title: "Lawyer-Grade Guidance", desc: "Our processes are built around FDCPA regulations to ensure professional outcomes." },
                    { icon: Clock, title: "Rapid Response", desc: "Don't wait for a slow legal system. Get the information you need to take action today." },
                    { icon: HandCoins, title: "Cost-Effective", desc: "Access high-quality legal tools and support without the massive attorney retainers." },
                    { icon: Smile, title: "Reduce Stress", desc: "Stop the incessant phone calls and regain your peace of mind." }
                  ].map((benefit, idx) => (
                    <div key={idx} className="flex gap-4">
                      <div className="shrink-0 w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-secondary border border-blue-50">
                        <benefit.icon className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="font-bold text-lg mb-1">{benefit.title}</h4>
                        <p className="text-muted-foreground">{benefit.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-primary rounded-3xl p-8 lg:p-12 text-white relative overflow-hidden">
                <h3 className="text-2xl font-headline mb-6">StopAndDesist Guarantee</h3>
                <p className="text-blue-100 mb-8 leading-relaxed">
                  We stand by the quality of our tools and support. If you encounter issues exercising your rights, our team is committed to helping you find a path forward.
                </p>
                <div className="flex items-center gap-4 py-4 border-t border-white/10">
                  <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center">
                    <ShieldCheck className="text-secondary" />
                  </div>
                  <div>
                    <p className="font-bold">Privacy Guaranteed</p>
                    <p className="text-xs text-blue-200">We do not sell your data to third parties.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-background">
          <div className="container px-4 mx-auto max-w-3xl">
            <h2 className="text-3xl font-headline text-center mb-16 text-primary">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible className="w-full space-y-4">
              <AccordionItem value="item-1" className="bg-white px-6 rounded-lg border">
                <AccordionTrigger className="text-left font-bold py-6">Is this legal?</AccordionTrigger>
                <AccordionContent className="pb-6 text-muted-foreground">
                  Yes. Under the Fair Debt Collection Practices Act (FDCPA), consumers have the legal right to demand that a debt collector cease communications.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2" className="bg-white px-6 rounded-lg border">
                <AccordionTrigger className="text-left font-bold py-6">Will collectors stop calling?</AccordionTrigger>
                <AccordionContent className="pb-6 text-muted-foreground">
                  Once a debt collector receives a formal cease and desist letter, they are legally required to stop contacting you except for very specific legal reasons.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-24 bg-primary text-white text-center">
          <div className="container px-4 mx-auto">
            <h2 className="text-4xl lg:text-5xl font-headline mb-8">Take Back Your Peace Today</h2>
            <p className="text-xl mb-12 text-blue-100 max-w-2xl mx-auto">
              Join thousands of Americans who have used StopAndDesist to end collector harassment.
            </p>
            <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-primary font-bold text-xl h-16 px-12 rounded-full shadow-xl" asChild>
              <Link href="/contact">
                Contact Support <ArrowRight className="ml-2 w-6 h-6" />
              </Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
