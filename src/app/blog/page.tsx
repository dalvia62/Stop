
import Link from 'next/link';
import Image from 'next/image';
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, Calendar } from "lucide-react";

const blogPosts = [
  {
    slug: "how-to-stop-debt-collectors-legally",
    title: "How to stop debt collectors legally",
    excerpt: "Learn your fundamental rights under the FDCPA and the exact steps to end harassment today.",
    date: "Oct 12, 2023",
    readTime: "5 min read",
    image: "https://picsum.photos/seed/legal1/800/600"
  },
  {
    slug: "what-is-a-cease-and-desist-letter",
    title: "What is a cease and desist letter?",
    excerpt: "A comprehensive guide on what these letters are, why they work, and when you should use one.",
    date: "Oct 15, 2023",
    readTime: "4 min read",
    image: "https://picsum.photos/seed/stress/800/600"
  },
  {
    slug: "fdcpa-rights-explained",
    title: "FDCPA rights explained",
    excerpt: "The Fair Debt Collection Practices Act is your shield. Here's a breakdown of what collectors can and cannot do.",
    date: "Oct 20, 2023",
    readTime: "8 min read",
    image: "https://picsum.photos/seed/law/800/600"
  },
  {
    slug: "can-collectors-call-family-members",
    title: "Can collectors call family members?",
    excerpt: "Are debt collectors bothering your parents or siblings? Learn the legal boundaries of third-party contact.",
    date: "Oct 22, 2023",
    readTime: "6 min read",
    image: "https://picsum.photos/seed/peace/800/600"
  },
  {
    slug: "debt-harassment-laws-in-usa",
    title: "Debt harassment laws in USA",
    excerpt: "A state-by-state look at additional protections you might have beyond federal law.",
    date: "Oct 25, 2023",
    readTime: "10 min read",
    image: "https://picsum.photos/seed/usa/800/600"
  }
];

export default function BlogPage() {
  return (
    <>
      <Header />
      <main className="flex-1 bg-background py-16">
        <div className="container px-4 mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h1 className="text-4xl font-headline text-primary mb-4">Educational Resources</h1>
            <p className="text-muted-foreground">Everything you need to know about debt collection laws, consumer rights, and taking back your financial freedom.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Card key={post.slug} className="flex flex-col h-full overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-48 w-full">
                  <Image 
                    src={post.image} 
                    alt={post.title} 
                    fill 
                    className="object-cover" 
                    data-ai-hint="blog post image"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                    <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {post.date}</span>
                    <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {post.readTime}</span>
                  </div>
                  <CardTitle className="text-xl font-headline text-primary group-hover:text-secondary transition-colors">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-1">
                  <p className="text-sm text-muted-foreground line-clamp-3 leading-relaxed">
                    {post.excerpt}
                  </p>
                </CardContent>
                <CardFooter className="pt-0 border-t bg-gray-50/50">
                  <Button variant="link" className="px-0 text-secondary font-bold" asChild>
                    <Link href={`/blog/${post.slug}`}>
                      Read Article <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
