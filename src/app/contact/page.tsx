"use client"

import { useState } from 'react';
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MapPin, Send, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message Sent",
        description: "We've received your message. Support responds within 24-48 hours.",
      });
      (e.target as HTMLFormElement).reset();
    }, 1500);
  };

  return (
    <>
      <Header />
      <main className="flex-1 bg-background py-16">
        <div className="container px-4 mx-auto max-w-5xl">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-1 space-y-8">
              <div>
                <h1 className="text-4xl font-headline text-primary mb-6">Contact Us</h1>
                <p className="text-muted-foreground leading-relaxed">
                  Have questions about your order or need assistance? Our support team is here to help you regain your peace of mind.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-white rounded-lg shadow-sm border flex items-center justify-center text-secondary shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-bold text-sm text-primary uppercase tracking-wider">Email Us</p>
                    <p className="text-muted-foreground">stopanddesist@gmail.com</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-white rounded-lg shadow-sm border flex items-center justify-center text-secondary shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-bold text-sm text-primary uppercase tracking-wider">Call Us</p>
                    <p className="text-muted-foreground">+91 9359013644</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-white rounded-lg shadow-sm border flex items-center justify-center text-secondary shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-bold text-sm text-primary uppercase tracking-wider">Business Name</p>
                    <p className="text-muted-foreground">Stop And Desist</p>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-blue-50 border border-blue-100 rounded-xl">
                <p className="text-sm text-primary font-bold italic mb-2">Response Time Notice:</p>
                <p className="text-sm text-muted-foreground">Our support team responds within 24-48 hours during business days.</p>
              </div>
            </div>

            <div className="lg:col-span-2">
              <Card className="shadow-xl">
                <CardHeader>
                  <CardTitle className="text-xl">Send a Message</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">Your Name</Label>
                        <Input id="name" placeholder="John Doe" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Your Email</Label>
                        <Input id="email" type="email" placeholder="john@example.com" required />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea 
                        id="message" 
                        placeholder="How can we help you today?" 
                        className="min-h-[150px]" 
                        required 
                      />
                    </div>
                    <Button type="submit" size="lg" className="w-full bg-primary text-white" disabled={isSubmitting}>
                      {isSubmitting ? <><Loader2 className="animate-spin mr-2" /> Sending...</> : <><Send className="w-4 h-4 mr-2" /> Send Message</>}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
