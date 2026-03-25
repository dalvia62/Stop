
"use client"

import Link from 'next/link';
import { Scale } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container flex h-16 items-center justify-between px-4 mx-auto">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-secondary transition-transform group-hover:scale-105">
            <Scale className="w-6 h-6" />
          </div>
          <span className="text-xl font-headline font-bold text-primary tracking-tight">StopAndDesist</span>
        </Link>
        <nav className="flex items-center gap-4 md:gap-8 text-sm font-medium">
          <Link href="/#how-it-works" className="text-muted-foreground hover:text-primary transition-colors hidden sm:block">How It Works</Link>
          <Button asChild variant="secondary" className="font-bold text-primary shadow-sm hover:shadow-md transition-all">
            <Link href="/contact">Support</Link>
          </Button>
        </nav>
      </div>
    </header>
  );
}
