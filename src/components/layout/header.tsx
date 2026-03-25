
"use client"

import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { Scale } from "lucide-react";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-secondary transition-transform group-hover:scale-105">
            <Scale className="w-6 h-6" />
          </div>
          <span className="text-xl font-headline font-bold text-primary tracking-tight">StopAndDesist</span>
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          <Link href="/#how-it-works" className="text-muted-foreground hover:text-primary transition-colors">How It Works</Link>
          <Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">Support</Link>
        </nav>
        <div className="flex items-center gap-4">
          <Button variant="ghost" className="hidden sm:inline-flex" asChild>
            <Link href="/contact">Contact</Link>
          </Button>
          <Button className="bg-secondary hover:bg-secondary/90 text-primary font-bold" asChild>
            <Link href="/contact">Get Help</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
