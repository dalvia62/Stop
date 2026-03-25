
import Link from 'next/link';
import { Scale, Mail, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-white border-t pt-16 pb-8">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <Scale className="w-6 h-6 text-primary" />
              <span className="text-xl font-headline font-bold text-primary">StopAndDesist</span>
            </Link>
            <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
              Empowering consumers with AI-driven legal tools to fight back against unlawful debt collection practices.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <Mail className="w-4 h-4 text-secondary" />
                support@stopanddesist.com
              </div>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <Phone className="w-4 h-4 text-secondary" />
                +1-800-000-0000
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold mb-6 text-primary uppercase text-xs tracking-widest">Resources</h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li><Link href="/blog" className="hover:text-secondary transition-colors">Our Blog</Link></li>
              <li><Link href="/#how-it-works" className="hover:text-secondary transition-colors">How It Works</Link></li>
              <li><Link href="/contact" className="hover:text-secondary transition-colors">Customer Support</Link></li>
              <li><Link href="/generate" className="hover:text-secondary transition-colors">Letter Generator</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-primary uppercase text-xs tracking-widest">Legal</h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li><Link href="/terms" className="hover:text-secondary transition-colors">Terms of Service</Link></li>
              <li><Link href="/privacy" className="hover:text-secondary transition-colors">Privacy Policy</Link></li>
              <li><Link href="/refund" className="hover:text-secondary transition-colors">Refund Policy</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-primary uppercase text-xs tracking-widest">Disclaimer</h4>
            <p className="text-xs text-muted-foreground leading-relaxed">
              StopAndDesist is not a law firm and does not provide legal advice. Use of our service does not create an attorney-client relationship. Our tool is designed to assist you in exercising your FDCPA rights. Consult with an attorney for specific legal situations.
            </p>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-100 text-center text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} StopAndDesist. All rights reserved. Made for financial peace.</p>
        </div>
      </div>
    </footer>
  );
}
