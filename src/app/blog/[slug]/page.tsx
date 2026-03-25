
import Link from 'next/link';
import Image from 'next/image';
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Clock, Calendar, Share2, Facebook, Twitter, Linkedin } from "lucide-react";
import { Metadata } from 'next';

// This would ideally come from a CMS or DB
const posts = {
  "how-to-stop-debt-collectors-legally": {
    title: "How to stop debt collectors legally",
    date: "Oct 12, 2023",
    readTime: "5 min read",
    image: "https://picsum.photos/seed/legal1/1200/600",
    content: `
      <p>Debt collection harassment is a reality for millions of Americans, but you don't have to suffer in silence. The Fair Debt Collection Practices Act (FDCPA) provides you with powerful tools to put an end to incessant calls and aggressive tactics.</p>
      
      <h2>1. Know Your FDCPA Rights</h2>
      <p>The first step in stopping harassment is understanding what a collector can and cannot do. By law, debt collectors are prohibited from:</p>
      <ul>
        <li>Calling before 8:00 AM or after 9:00 PM.</li>
        <li>Using abusive, profane, or threatening language.</li>
        <li>Communicating with third parties (like neighbors or bosses) about your debt.</li>
        <li>Continuing to call you at work if you've told them your employer forbids it.</li>
      </ul>

      <h2>2. Request Debt Validation</h2>
      <p>Within five days of their first contact, a collector must send you a "validation notice" telling you how much money you owe and the name of the creditor. You have 30 days to dispute the debt in writing. Once you dispute it, they must stop collection until they provide proof of the debt.</p>

      <h2>3. The Power of the Cease and Desist Letter</h2>
      <p>This is your most effective tool. Under federal law, if you send a written request telling a debt collector to stop contacting you, they MUST stop. They are only allowed to contact you one more time to notify you of a specific action, such as a lawsuit.</p>
      
      <p>Sending this letter doesn't make the debt go away, but it forces all communication into a formal, written channel, which usually puts an end to the daily harassment.</p>

      <blockquote>
        "A formal cease and desist letter is the most authoritative way to take control of your communication and force collectors to play by the rules."
      </blockquote>

      <h2>4. Document Everything</h2>
      <p>Keep a log of every call, including the date, time, and name of the person you spoke with. If they violate the FDCPA, you may be entitled to damages of up to $1,000 plus attorney fees.</p>
    `
  }
};

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = posts[params.slug as keyof typeof posts];
  return {
    title: post ? `${post.title} | StopAndDesist` : 'Blog | StopAndDesist',
    description: post ? `Read more about ${post.title} at StopAndDesist.` : 'Educational resources for consumer protection.',
  };
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = posts[params.slug as keyof typeof posts];

  if (!post) {
    return (
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Post Not Found</h1>
            <Button asChild><Link href="/blog">Back to Blog</Link></Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <>
      <Header />
      <article className="bg-white pb-20">
        <div className="w-full relative h-[400px] lg:h-[600px]">
          <Image 
            src={post.image} 
            alt={post.title} 
            fill 
            className="object-cover" 
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 flex items-center justify-center text-center px-4">
            <div className="max-w-4xl">
              <Button variant="ghost" className="text-white mb-6 hover:bg-white/20" asChild>
                <Link href="/blog"><ArrowLeft className="mr-2 w-4 h-4" /> Back to Blog</Link>
              </Button>
              <h1 className="text-4xl lg:text-6xl font-headline text-white mb-6 leading-tight">
                {post.title}
              </h1>
              <div className="flex items-center justify-center gap-6 text-white/80 text-sm">
                <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> {post.date}</span>
                <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> {post.readTime}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="container px-4 mx-auto mt-12">
          <div className="max-w-3xl mx-auto">
            <div 
              className="prose prose-lg lg:prose-xl max-w-none text-muted-foreground leading-relaxed
                prose-headings:text-primary prose-headings:font-headline prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6
                prose-blockquote:border-l-secondary prose-blockquote:bg-blue-50 prose-blockquote:p-6 prose-blockquote:rounded-r-lg prose-blockquote:italic
                prose-ul:list-disc prose-li:mb-2 prose-strong:text-primary"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            <div className="mt-16 pt-8 border-t flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <p className="text-sm font-bold text-primary">Share Article:</p>
                <div className="flex gap-2">
                  <Button variant="outline" size="icon" className="rounded-full w-10 h-10"><Facebook className="w-4 h-4" /></Button>
                  <Button variant="outline" size="icon" className="rounded-full w-10 h-10"><Twitter className="w-4 h-4" /></Button>
                  <Button variant="outline" size="icon" className="rounded-full w-10 h-10"><Linkedin className="w-4 h-4" /></Button>
                </div>
              </div>
              <Button className="bg-secondary text-primary hover:bg-secondary/90 font-bold" asChild>
                <Link href="/generate">Generate Your Own Letter</Link>
              </Button>
            </div>
          </div>
        </div>
      </article>
      <Footer />
    </>
  );
}
