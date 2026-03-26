'use client';

import Link from 'next/link';
import { ExternalLink, ThumbsUp, Eye, Star } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';

interface Tool {
  id: string;
  name: string;
  slug: string;
  tagline: string;
  description: string;
  websiteUrl: string;
  logoUrl?: string | null;
  imageUrl?: string | null;
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

interface ToolCardProps {
  tool: Tool;
  featured?: boolean;
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

export function ToolCard({ tool, featured = false }: ToolCardProps) {
  const initials = tool.name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .slice(0, 2);

  return (
    <Card
      className={`group relative overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
        featured
          ? 'border-2 border-amber-400/50 bg-gradient-to-br from-amber-50/50 to-orange-50/50 dark:from-amber-950/20 dark:to-orange-950/20'
          : 'border border-border/50 hover:border-primary/30'
      }`}
    >
      {featured && (
        <div className="absolute top-0 right-0">
          <div className="bg-gradient-to-l from-amber-500 to-orange-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
            ⭐ FEATURED
          </div>
        </div>
      )}

      <CardContent className="p-5">
        <div className="flex items-start gap-4">
          {/* Logo/Avatar */}
          <div
            className={`flex-shrink-0 w-14 h-14 rounded-xl flex items-center justify-center text-lg font-bold shadow-sm ${
              featured
                ? 'bg-gradient-to-br from-amber-400 to-orange-500 text-white'
                : 'bg-gradient-to-br from-primary/80 to-primary text-primary-foreground'
            }`}
          >
            {tool.logoUrl ? (
              <img
                src={tool.logoUrl}
                alt={tool.name}
                className="w-14 h-14 rounded-xl object-cover"
              />
            ) : (
              initials
            )}
          </div>

          {/* Content */}
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1">
              <Link href={`/tool/${tool.slug}`}>
                <h3 className="font-bold text-lg group-hover:text-primary transition-colors truncate">
                  {tool.name}
                </h3>
              </Link>
            </div>

            <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
              {tool.tagline}
            </p>

            {/* Meta info */}
            <div className="flex flex-wrap items-center gap-2">
              {tool.category && (
                <Link href={`/category/${tool.category.slug}`}>
                  <Badge variant="secondary" className="text-xs hover:bg-primary/10">
                    {tool.category.name}
                  </Badge>
                </Link>
              )}
              <Badge
                variant="outline"
                className={`text-xs ${pricingColors[tool.pricing] || ''}`}
              >
                {pricingLabels[tool.pricing] || tool.pricing}
              </Badge>
              {tool.priceDetails && (
                <span className="text-xs text-muted-foreground">
                  {tool.priceDetails}
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Stats & CTA */}
        <div className="flex items-center justify-between mt-4 pt-4 border-t border-border/50">
          <div className="flex items-center gap-4 text-xs text-muted-foreground">
            <span className="flex items-center gap-1">
              <Eye className="w-3.5 h-3.5" />
              {tool.viewCount.toLocaleString()}
            </span>
            <span className="flex items-center gap-1">
              <ThumbsUp className="w-3.5 h-3.5" />
              {tool.upvoteCount.toLocaleString()}
            </span>
          </div>

          <a
            href={tool.websiteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
          >
            Visit
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </CardContent>
    </Card>
  );
}
