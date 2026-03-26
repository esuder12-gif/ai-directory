import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowRight, ExternalLink, ThumbsUp, Eye, Bookmark, Zap, Check, Link2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { getToolBySlug, getTools } from '@/lib/data';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const tools = getTools();
  return tools.map((tool) => ({ slug: tool.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const tool = getToolBySlug(slug);
  
  if (!tool) {
    return { title: 'Tool Not Found' };
  }

  return {
    title: `${tool.name} - AI Tools Directory`,
    description: tool.tagline,
  };
}

const pricingColors: Record<string, string> = {
  FREE: 'bg-green-100 text-green-800 border-green-200',
  FREEMIUM: 'bg-blue-100 text-blue-800 border-blue-200',
  PAID: 'bg-amber-100 text-amber-800 border-amber-200',
  FREE_TRIAL: 'bg-purple-100 text-purple-800 border-purple-200',
  OPEN_SOURCE: 'bg-gray-100 text-gray-800 border-gray-200',
};

const pricingLabels: Record<string, string> = {
  FREE: 'Free',
  FREEMIUM: 'Freemium',
  PAID: 'Paid',
  FREE_TRIAL: 'Free Trial',
  OPEN_SOURCE: 'Open Source',
};

export default async function ToolPage({ params }: Props) {
  const { slug } = await params;
  const tool = getToolBySlug(slug);

  if (!tool) {
    notFound();
  }

  const initials = tool.name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .slice(0, 2);

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://ai-directory-ebd6.vercel.app';
  const toolUrl = `${siteUrl}/tool/${tool.slug}`;
  const shareText = `Check out ${tool.name} - ${tool.tagline}`;

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center">
                <Zap className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="font-bold text-xl">AI Directory</span>
            </Link>
            <Button size="sm" className="gap-1.5">
              Submit Tool
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Back Link */}
        <Link href="/" className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary mb-6">
          <ArrowRight className="w-4 h-4 rotate-180" />
          Back to All Tools
        </Link>

        {/* Tool Header */}
        <div className="flex flex-col md:flex-row gap-6 mb-8">
          {/* Logo */}
          <div
            className={`flex-shrink-0 w-20 h-20 rounded-xl flex items-center justify-center text-2xl font-bold shadow-sm ${
              tool.isFeatured
                ? 'bg-gradient-to-br from-amber-400 to-orange-500 text-white'
                : 'bg-gradient-to-br from-primary/80 to-primary text-primary-foreground'
            }`}
          >
            {initials}
          </div>

          <div className="flex-1">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">{tool.name}</h1>
            <p className="text-lg text-muted-foreground mb-4">{tool.tagline}</p>

            <div className="flex flex-wrap items-center gap-3">
              {tool.category && (
                <Link href={`/category/${tool.category.slug}`}>
                  <Badge variant="secondary" className="hover:bg-primary/10">
                    {tool.category.name}
                  </Badge>
                </Link>
              )}
              <Badge
                variant="outline"
                className={pricingColors[tool.pricing] || ''}
              >
                {pricingLabels[tool.pricing] || tool.pricing}
              </Badge>
              {tool.priceDetails && (
                <span className="text-sm text-muted-foreground">{tool.priceDetails}</span>
              )}
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mb-8 p-4 rounded-xl bg-muted/30">
          <div className="text-center">
            <div className="flex items-center justify-center gap-1 text-primary font-bold text-xl">
              <Eye className="w-5 h-5" />
              {tool.viewCount.toLocaleString()}
            </div>
            <div className="text-sm text-muted-foreground">Views</div>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center gap-1 text-primary font-bold text-xl">
              <ThumbsUp className="w-5 h-5" />
              {tool.upvoteCount.toLocaleString()}
            </div>
            <div className="text-sm text-muted-foreground">Upvotes</div>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center gap-1 text-primary font-bold text-xl">
              <ExternalLink className="w-5 h-5" />
              {tool.clickCount.toLocaleString()}
            </div>
            <div className="text-sm text-muted-foreground">Clicks</div>
          </div>
        </div>

        {/* Description */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-3">About {tool.name}</h2>
          <p className="text-muted-foreground leading-relaxed text-lg">
            {tool.description}
          </p>
        </div>

        {/* Actions */}
        <div className="flex flex-wrap gap-3 mb-8">
          <Button size="lg" asChild className="flex-1 md:flex-none gap-2">
            <a href={tool.websiteUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="w-4 h-4" />
              Visit Website
            </a>
          </Button>
          <Button variant="outline" size="lg" className="gap-2">
            <ThumbsUp className="w-4 h-4" />
            Upvote
          </Button>
          <Button variant="outline" size="lg" className="gap-2">
            <Bookmark className="w-4 h-4" />
            Save
          </Button>
        </div>

        {/* Share */}
        <div className="mb-8">
          <h3 className="font-semibold mb-3">Share this tool</h3>
          <div className="flex flex-wrap gap-2">
            <a
              href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(toolUrl)}&text=${encodeURIComponent(shareText)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors text-sm font-medium"
            >
              Twitter
            </a>
            <a
              href={`https://www.reddit.com/submit?url=${encodeURIComponent(toolUrl)}&title=${encodeURIComponent(tool.name + ' - ' + tool.tagline)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors text-sm font-medium"
            >
              Reddit
            </a>
            <a
              href={`https://t.me/share/url?url=${encodeURIComponent(toolUrl)}&text=${encodeURIComponent(shareText)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors text-sm font-medium"
            >
              Telegram
            </a>
            <a
              href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(toolUrl)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition-colors text-sm font-medium"
            >
              Facebook
            </a>
            <a
              href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(toolUrl)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-blue-800 text-white rounded-lg hover:bg-blue-900 transition-colors text-sm font-medium"
            >
              LinkedIn
            </a>
          </div>
        </div>

        {/* Sponsored */}
        <div className="p-4 rounded-lg bg-muted/30 border border-border/50 text-center">
          <p className="text-xs text-muted-foreground mb-2">SPONSORED</p>
          <p className="text-sm font-medium">
            Get more done with AI-powered productivity tools
          </p>
          <Button variant="link" size="sm" className="mt-1">
            Learn More →
          </Button>
        </div>
      </main>
    </div>
  );
}
