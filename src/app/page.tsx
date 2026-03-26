import { Search, TrendingUp, Sparkles, ArrowRight, Zap, X } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ToolCard } from '@/components/directory/tool-card';
import { CategoryCard } from '@/components/directory/category-card';
import { Newsletter } from '@/components/directory/newsletter';
import { AdBanner, AdSidebar } from '@/components/directory/ad-banner';
import { ToolModal } from '@/components/directory/tool-modal';
import { getTools, getCategories } from '@/lib/data';
import { ClientPage } from './client-page';

interface Tool {
  id: string;
  name: string;
  slug: string;
  tagline: string;
  description: string;
  websiteUrl: string;
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

interface Category {
  id: string;
  name: string;
  slug: string;
  description?: string | null;
  icon?: string | null;
  color?: string | null;
  toolCount?: number;
  _count?: { tools: number };
}

// Fetch data server-side
async function getInitialData() {
  const tools = getTools({ limit: 20 });
  const featuredTools = getTools({ featured: true, limit: 6 });
  const categories = getCategories().map(cat => ({
    ...cat,
    _count: { tools: cat.toolCount || 0 }
  }));
  
  return { tools, featuredTools, categories };
}

export default async function Home() {
  const { tools, featuredTools, categories } = await getInitialData();

  return (
    <ClientPage 
      initialTools={tools} 
      initialFeaturedTools={featuredTools} 
      initialCategories={categories}
    />
  );
}
