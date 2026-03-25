
"use client"

import { useState } from 'react';
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ShieldCheck, Loader2, Download, Printer, Lock, CheckCircle2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function GeneratePage() {
  const [hasPaid, setHasPaid] = useState(false);
  const [loading, setLoading] = useState(false);
  const [letter, setLetter] = useState<string | null>(null);
  const { toast } = useToast();

  const handlePayment = () => {
    // Mocking Paddle payment success
    setLoading(true);
    setTimeout(() => {
      setHasPaid(true);
      setLoading(false);
      toast({
        title: "Payment Successful",
        description: "Your letter generation tools are now unlocked.",
      });
    }, 1500);
  };

  const handleGenerate = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate generation delay
    setTimeout(() => {
      setLetter(`[Your Full Name]
[Your Address]
[City, State, ZIP Code]
[Email Address]
[Phone Number]
[Date]

[Debt Collector's Name]
[Debt Collector's Address]
[City, State, ZIP Code]

Re: Cease and Desist Communication Regarding Account #[Account Number]

Dear [Debt Collector's Name],

I am writing to exercise my rights under the Fair Debt Collection Practices Act (FDCPA), 15 U.S.C. § 1692c(c), and formally request that you cease and desist all communication with me regarding the above-referenced account.

This letter serves as formal notice that I wish to terminate all contact from you, your agents, representatives, or anyone acting on your behalf. This includes, but is not limited to:

- Telephone calls to my residence, workplace, or mobile phone
- Text messages, emails, or any other form of electronic communication
- Mail, letters, or any other written correspondence
- In-person contact or visits

You are hereby instructed to stop all collection activities related to this account immediately. Any further communication from you may constitute a violation of federal law.

Please note that this request does not constitute an admission of liability for any alleged debt, nor does it waive any of my rights or defenses.

If you believe you have a legal right to continue collection activities, you may contact me in writing only through certified mail. Any other form of contact will be considered harassment.

Sincerely,

[Your Full Name]`);
      setLoading(false);
    }, 2000);
  };

  return (
    <>
      <Header />
      <main className="flex-1 bg-background py-12">
        <div className="container px-4 mx-auto max-w-4xl">
          {!hasPaid ? (
            <Card className="max-w-md mx-auto shadow-xl border-t-4 border-t-secondary">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center text-secondary mx-auto mb-4">
                  <Lock className="w-8 h-8" />
                </div>
                <CardTitle className="text-2xl font-headline">Unlock Your Letter</CardTitle>
                <CardDescription>
                  Complete your payment to access the AI generation form.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="bg-blue-50 p-4 rounded-lg flex items-center justify-between border border-blue-100">
                  <span className="font-bold text-primary">Service Fee</span>
                  <span className="text-2xl font-bold text-primary">$49.00</span>
                </div>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500" /> Professional AI Letter</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500" /> Legal Rights Protection</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500" /> Instant PDF Download</li>
                </ul>
                <Button 
                  className="w-full h-12 text-lg font-bold bg-secondary hover:bg-secondary/90 text-primary" 
                  onClick={handlePayment}
                  disabled={loading}
                >
                  {loading ? <Loader2 className="animate-spin mr-2" /> : "Pay via Paddle Checkout"}
                </Button>
                <p className="text-center text-xs text-muted-foreground flex items-center justify-center gap-1">
                  <ShieldCheck className="w-3 h-3" /> Secure 256-bit Encrypted Payment
                </p>
              </CardContent>
            </Card>
          ) : !letter ? (
            <div className="space-y-8">
              <div className="text-center mb-12">
                <h1 className="text-3xl lg:text-4xl font-headline text-primary mb-4">Generate Your Legal Letter</h1>
                <p className="text-muted-foreground">Please provide the details below to customize your cease and desist notice.</p>
              </div>
              <form onSubmit={handleGenerate}>
                <div className="grid md:grid-cols-2 gap-8">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Your Information</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="fullName">Full Name</Label>
                        <Input id="fullName" name="fullName" placeholder="John Doe" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address</Label>
                        <Input id="email" name="email" type="email" placeholder="john@example.com" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="address">Mailing Address</Label>
                        <Textarea id="address" name="address" placeholder="123 Main St, Apt 4, City, ST 12345" required />
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Debt Collector Information</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="collectorName">Agency Name</Label>
                        <Input id="collectorName" name="collectorName" placeholder="Harassment Recovery Inc." required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="accountNumber">Account Number (Optional)</Label>
                        <Input id="accountNumber" name="accountNumber" placeholder="ABC-12345" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="collectorAddress">Agency Address</Label>
                        <Textarea id="collectorAddress" name="collectorAddress" placeholder="456 Collector Way, Suite 100, City, ST 54321" required />
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="md:col-span-2">
                    <CardHeader>
                      <CardTitle className="text-lg">Description of Harassment</CardTitle>
                      <CardDescription>Tell us about the calls, frequency, or any threats made.</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Textarea 
                        id="harassment" 
                        name="harassment" 
                        placeholder="e.g. They are calling my workplace twice a day and using abusive language despite my verbal requests to stop." 
                        className="min-h-[120px]" 
                        required 
                      />
                    </CardContent>
                  </Card>
                </div>
                <div className="mt-8 text-center">
                  <Button type="submit" size="lg" className="px-12 h-14 text-lg bg-primary text-white" disabled={loading}>
                    {loading ? <><Loader2 className="animate-spin mr-2" /> Generating Letter...</> : "Generate My Professional Letter"}
                  </Button>
                </div>
              </form>
            </div>
          ) : (
            <div className="space-y-8 animate-in fade-in duration-500">
              <div className="text-center">
                <h1 className="text-3xl font-headline text-primary mb-2">Your Letter is Ready</h1>
                <p className="text-muted-foreground mb-8">Review the preview below and download your finalized PDF.</p>
              </div>
              <Card className="shadow-2xl overflow-hidden">
                <div className="bg-muted p-4 flex justify-between items-center border-b">
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" onClick={() => window.print()}>
                      <Printer className="w-4 h-4 mr-2" /> Print
                    </Button>
                    <Button variant="outline" size="sm">
                      <Download className="w-4 h-4 mr-2" /> Download PDF
                    </Button>
                  </div>
                  <span className="text-xs font-mono uppercase text-muted-foreground tracking-widest">Legal Document Preview</span>
                </div>
                <CardContent className="p-8 lg:p-16 bg-white overflow-auto max-h-[700px]">
                  <pre className="whitespace-pre-wrap font-sans leading-relaxed text-gray-800 text-sm md:text-base">
                    {letter}
                  </pre>
                </CardContent>
              </Card>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button variant="outline" onClick={() => setLetter(null)} className="h-12 px-8">
                  Edit Details
                </Button>
                <Button className="bg-secondary text-primary hover:bg-secondary/90 h-12 px-12 font-bold shadow-lg">
                  <Download className="w-5 h-5 mr-2" /> Finalize & Download PDF
                </Button>
              </div>
              <div className="bg-blue-50 border border-blue-100 p-6 rounded-xl">
                <h3 className="font-bold text-primary mb-2">Next Steps:</h3>
                <ol className="list-decimal list-inside text-sm text-muted-foreground space-y-2">
                  <li>Print the downloaded PDF.</li>
                  <li>Sign the document at the bottom.</li>
                  <li>Send it via <strong>Certified Mail with Return Receipt Requested</strong>.</li>
                  <li>Keep the mail receipt as legal proof of delivery.</li>
                </ol>
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
