'use client';

import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  ExternalLink,
  ThumbsUp,
  Eye,
  Bookmark,
  Link2,
  Check,
} from 'lucide-react';

interface Tool {
  id: string;
  name: string;
  slug: string;
  tagline: string;
  description: string;
  websiteUrl: string;
  logoUrl?: string | null;
  pricing: string;
  priceDetails?: string | null;
  isFeatured: boolean;
  viewCount: number;
  clickCount: number;
  upvoteCount: number;
  category?: {
    name: string;
    slug: string;
    color?: string | null;
  };
}

interface ToolModalProps {
  tool: Tool | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
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

// Share button component
function ShareButtons({ tool }: { tool: Tool }) {
  const [copied, setCopied] = useState(false);
  
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://ai-directory-ebd6.vercel.app';
  const toolUrl = `${siteUrl}/tool/${tool.slug}`;
  const shareText = `Check out ${tool.name} - ${tool.tagline}`;
  const encodedUrl = encodeURIComponent(toolUrl);
  const encodedText = encodeURIComponent(shareText);

  const shareLinks = {
    twitter: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedText}`,
    reddit: `https://www.reddit.com/submit?url=${encodedUrl}&title=${encodeURIComponent(tool.name + ' - ' + tool.tagline)}`,
    telegram: `https://t.me/share/url?url=${encodedUrl}&text=${encodedText}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
  };

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(toolUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <div className="mt-6">
      <h3 className="font-semibold mb-3 flex items-center gap-2">
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
        </svg>
        Share this tool
      </h3>
      <div className="flex flex-wrap gap-2">
        {/* Twitter/X */}
        <a
          href={shareLinks.twitter}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors text-sm font-medium"
        >
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
          </svg>
          Twitter
        </a>

        {/* Reddit */}
        <a
          href={shareLinks.reddit}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors text-sm font-medium"
        >
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z"/>
          </svg>
          Reddit
        </a>

        {/* Telegram */}
        <a
          href={shareLinks.telegram}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors text-sm font-medium"
        >
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
            <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
          </svg>
          Telegram
        </a>

        {/* Facebook */}
        <a
          href={shareLinks.facebook}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition-colors text-sm font-medium"
        >
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
          </svg>
          Facebook
        </a>

        {/* LinkedIn */}
        <a
          href={shareLinks.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 bg-blue-800 text-white rounded-lg hover:bg-blue-900 transition-colors text-sm font-medium"
        >
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
          </svg>
          LinkedIn
        </a>

        {/* Copy Link */}
        <button
          onClick={handleCopyLink}
          className="flex items-center gap-2 px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition-colors text-sm font-medium"
        >
          {copied ? (
            <>
              <Check className="w-4 h-4 text-green-600" />
              Copied!
            </>
          ) : (
            <>
              <Link2 className="w-4 h-4" />
              Copy Link
            </>
          )}
        </button>
      </div>
    </div>
  );
}

export function ToolModal({ tool, open, onOpenChange }: ToolModalProps) {
  const [hasUpvoted, setHasUpvoted] = useState(false);

  if (!tool) return null;

  const initials = tool.name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .slice(0, 2);

  const handleVisit = async () => {
    try {
      await fetch(`/api/tools/${tool.slug}`, { method: 'POST' });
    } catch (error) {
      console.error('Error tracking click:', error);
    }
    window.open(tool.websiteUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-start gap-4">
            {/* Logo */}
            <div
              className={`flex-shrink-0 w-16 h-16 rounded-xl flex items-center justify-center text-xl font-bold shadow-sm ${
                tool.isFeatured
                  ? 'bg-gradient-to-br from-amber-400 to-orange-500 text-white'
                  : 'bg-gradient-to-br from-primary/80 to-primary text-primary-foreground'
              }`}
            >
              {tool.logoUrl ? (
                <img
                  src={tool.logoUrl}
                  alt={tool.name}
                  className="w-16 h-16 rounded-xl object-cover"
                />
              ) : (
                initials
              )}
            </div>

            <div className="flex-1 min-w-0">
              <DialogTitle className="text-2xl">{tool.name}</DialogTitle>
              <p className="text-muted-foreground mt-1">{tool.tagline}</p>

              <div className="flex flex-wrap items-center gap-2 mt-3">
                {tool.category && (
                  <Badge variant="secondary">
                    {tool.category.name}
                  </Badge>
                )}
                <Badge
                  variant="outline"
                  className={pricingColors[tool.pricing] || ''}
                >
                  {pricingLabels[tool.pricing] || tool.pricing}
                </Badge>
                {tool.priceDetails && (
                  <span className="text-sm text-muted-foreground">
                    {tool.priceDetails}
                  </span>
                )}
              </div>
            </div>
          </div>
        </DialogHeader>

        <div className="mt-6">
          {/* Description */}
          <div className="mb-6">
            <h3 className="font-semibold mb-2">About {tool.name}</h3>
            <p className="text-muted-foreground leading-relaxed">
              {tool.description}
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 mb-6">
            <div className="text-center p-3 rounded-lg bg-muted/50">
              <div className="flex items-center justify-center gap-1 text-primary font-bold">
                <Eye className="w-4 h-4" />
                {tool.viewCount.toLocaleString()}
              </div>
              <div className="text-xs text-muted-foreground mt-1">Views</div>
            </div>
            <div className="text-center p-3 rounded-lg bg-muted/50">
              <div className="flex items-center justify-center gap-1 text-primary font-bold">
                <ThumbsUp className="w-4 h-4" />
                {tool.upvoteCount.toLocaleString()}
              </div>
              <div className="text-xs text-muted-foreground mt-1">Upvotes</div>
            </div>
            <div className="text-center p-3 rounded-lg bg-muted/50">
              <div className="flex items-center justify-center gap-1 text-primary font-bold">
                <ExternalLink className="w-4 h-4" />
                {tool.clickCount.toLocaleString()}
              </div>
              <div className="text-xs text-muted-foreground mt-1">Clicks</div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-wrap gap-3">
            <Button size="lg" onClick={handleVisit} className="flex-1 gap-2">
              <ExternalLink className="w-4 h-4" />
              Visit Website
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => setHasUpvoted(!hasUpvoted)}
              className={hasUpvoted ? 'bg-primary/10 text-primary' : ''}
            >
              <ThumbsUp className={`w-4 h-4 ${hasUpvoted ? 'fill-current' : ''}`} />
            </Button>
            <Button variant="outline" size="lg">
              <Bookmark className="w-4 h-4" />
            </Button>
          </div>

          {/* Share Buttons */}
          <ShareButtons tool={tool} />

          {/* Ad Space */}
          <div className="mt-6 p-4 rounded-lg bg-muted/30 border border-border/50 text-center">
            <p className="text-xs text-muted-foreground mb-2">SPONSORED</p>
            <p className="text-sm font-medium">
              Get more done with AI-powered productivity tools
            </p>
            <Button variant="link" size="sm" className="mt-1">
              Learn More →
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
