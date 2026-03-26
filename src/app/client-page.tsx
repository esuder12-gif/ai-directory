'use client';

import { useState } from 'react';
import { Search, TrendingUp, Sparkles, ArrowRight, Zap, X } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ToolCard } from '@/components/directory/tool-card';
import { CategoryCard } from '@/components/directory/category-card';
import { Newsletter } from '@/components/directory/newsletter';
import { AdBanner, AdSidebar } from '@/components/directory/ad-banner';
import { ToolModal } from '@/components/directory/tool-modal';

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

interface ClientPageProps {
  initialTools: Tool[];
  initialFeaturedTools: Tool[];
  initialCategories: Category[];
}

type ViewMode = 'home' | 'category' | 'search';

export function ClientPage({ initialTools, initialFeaturedTools, initialCategories }: ClientPageProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [tools] = useState<Tool[]>(initialTools);
  const [featuredTools] = useState<Tool[]>(initialFeaturedTools);
  const [categories] = useState<Category[]>(initialCategories);

  // View state
  const [viewMode, setViewMode] = useState<ViewMode>('home');
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);
  const [selectedTool, setSelectedTool] = useState<Tool | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  // Filter state
  const [pricingFilter, setPricingFilter] = useState<string>('all');

  // Filter tools based on current view and filters
  const getFilteredTools = () => {
    let filtered = [...tools];

    // Filter by category
    if (viewMode === 'category' && selectedCategory) {
      filtered = filtered.filter(
        (tool) => tool.category?.slug === selectedCategory.slug
      );
    }

    // Filter by search
    if (searchQuery) {
      filtered = filtered.filter(
        (tool) =>
          tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          tool.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
          tool.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Filter by pricing
    if (pricingFilter !== 'all') {
      filtered = filtered.filter((tool) => tool.pricing === pricingFilter);
    }

    return filtered;
  };

  const filteredTools = getFilteredTools();

  const handleCategoryClick = (category: Category) => {
    setSelectedCategory(category);
    setViewMode('category');
    setSearchQuery('');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleToolClick = (tool: Tool) => {
    setSelectedTool(tool);
    setModalOpen(true);
  };

  const handleBackToHome = () => {
    setViewMode('home');
    setSelectedCategory(null);
    setSearchQuery('');
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    if (query) {
      setViewMode('search');
    } else if (viewMode === 'search') {
      setViewMode('home');
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <button
              onClick={handleBackToHome}
              className="flex items-center gap-2 hover:opacity-80 transition-opacity"
            >
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center">
                <Zap className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="font-bold text-xl">AI Directory</span>
            </button>

            {/* Navigation */}
            <nav className="hidden md:flex items-center gap-6">
              <button
                onClick={() => {
                  document.getElementById('featured')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="text-sm font-medium hover:text-primary transition-colors"
              >
                Featured
              </button>
              <button
                onClick={() => {
                  document.getElementById('categories')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="text-sm font-medium hover:text-primary transition-colors"
              >
                Categories
              </button>
              <button
                onClick={() => {
                  document.getElementById('tools')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="text-sm font-medium hover:text-primary transition-colors"
              >
                All Tools
              </button>
            </nav>

            {/* CTA */}
            <div className="flex items-center gap-3">
              <Button variant="ghost" size="sm" className="hidden sm:flex" asChild>
                <a href="mailto:submit@aidirectory.com?subject=Submit AI Tool">Sign In</a>
              </Button>
              <Button size="sm" className="gap-1.5" asChild>
                <a href="mailto:submit@aidirectory.com?subject=Submit AI Tool">
                  <Sparkles className="w-4 h-4" />
                  Submit Tool
                </a>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

        <div className="container mx-auto px-4 py-12 md:py-20">
          <div className="max-w-3xl mx-auto text-center">
            {/* Badge */}
            <Badge
              variant="secondary"
              className="mb-6 px-4 py-1.5 text-sm font-medium"
            >
              <TrendingUp className="w-3.5 h-3.5 mr-1.5" />
              {tools.length}+ AI Tools & Growing
            </Badge>

            {/* Headline */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
              Discover the Best{' '}
              <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                AI Tools
              </span>{' '}
              for Your Projects
            </h1>

            {/* Subheadline */}
            <p className="text-base md:text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              The ultimate directory of AI tools for writing, image generation, coding, productivity, and more.
            </p>

            {/* Search */}
            <div className="relative max-w-xl mx-auto">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search AI tools... (e.g., 'image generator', 'writing')"
                value={searchQuery}
                onChange={(e) => handleSearch(e.target.value)}
                className="pl-12 h-12 text-base shadow-lg border-2 focus:border-primary"
              />
              {searchQuery && (
                <button
                  onClick={() => handleSearch('')}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Quick Links */}
            <div className="flex flex-wrap justify-center gap-2 mt-4">
              <span className="text-sm text-muted-foreground">Popular:</span>
              {['ChatGPT', 'Midjourney', 'Claude', 'ElevenLabs'].map((tool) => (
                <button
                  key={tool}
                  onClick={() => handleSearch(tool)}
                  className="text-sm font-medium text-primary hover:underline"
                >
                  {tool}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Category View Header */}
      {viewMode === 'category' && selectedCategory && (
        <section className="container mx-auto px-4 py-6">
          <button
            onClick={handleBackToHome}
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary mb-4"
          >
            <ArrowRight className="w-4 h-4 rotate-180" />
            Back to All Tools
          </button>
          <div className="flex items-center gap-4">
            <h2 className="text-2xl md:text-3xl font-bold">
              {selectedCategory.name}
            </h2>
            <Badge variant="secondary">
              {filteredTools.length} tools
            </Badge>
          </div>
          {selectedCategory.description && (
            <p className="text-muted-foreground mt-2">
              {selectedCategory.description}
            </p>
          )}
        </section>
      )}

      {/* Search Results Header */}
      {viewMode === 'search' && searchQuery && (
        <section className="container mx-auto px-4 py-6">
          <button
            onClick={handleBackToHome}
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary mb-4"
          >
            <ArrowRight className="w-4 h-4 rotate-180" />
            Clear search
          </button>
          <h2 className="text-2xl md:text-3xl font-bold">
            Search Results for "{searchQuery}"
          </h2>
          <p className="text-muted-foreground mt-1">
            Found {filteredTools.length} tools
          </p>
        </section>
      )}

      {/* Ad Banner */}
      {(viewMode === 'home' || viewMode === 'category') && (
        <div className="container mx-auto px-4 mb-8">
          <AdBanner />
        </div>
      )}

      {/* Featured Tools (Home only) */}
      {viewMode === 'home' && (
        <section id="featured" className="container mx-auto px-4 py-12">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-2">
                ⭐ Featured Tools
              </h2>
              <p className="text-muted-foreground">
                Hand-picked AI tools chosen by our editors
              </p>
            </div>
            <Button variant="outline" className="hidden sm:flex gap-1.5" onClick={() => document.getElementById('tools')?.scrollIntoView({ behavior: 'smooth' })}>
              View All
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredTools.map((tool) => (
              <button
                key={tool.id}
                onClick={() => handleToolClick(tool)}
                className="text-left w-full"
              >
                <ToolCard tool={tool} featured />
              </button>
            ))}
          </div>
        </section>
      )}

      {/* Categories (Home only) */}
      {viewMode === 'home' && (
        <section id="categories" className="container mx-auto px-4 py-12">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-2">
              Browse by Category
            </h2>
            <p className="text-muted-foreground">
              Find AI tools organized by what they do best
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => handleCategoryClick(category)}
                className="text-left w-full"
              >
                <CategoryCard category={category} />
              </button>
            ))}
          </div>
        </section>
      )}

      {/* All Tools / Category Tools / Search Results */}
      <section id="tools" className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content */}
          <div className="flex-1">
            {viewMode === 'home' && (
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-2">
                    🔥 Trending AI Tools
                  </h2>
                  <p className="text-muted-foreground">
                    Most popular tools this month
                  </p>
                </div>

                {/* Pricing Filter */}
                <div className="hidden sm:flex items-center gap-2">
                  <span className="text-sm text-muted-foreground">Filter:</span>
                  <select
                    value={pricingFilter}
                    onChange={(e) => setPricingFilter(e.target.value)}
                    className="text-sm border rounded-lg px-3 py-1.5 bg-background"
                  >
                    <option value="all">All Pricing</option>
                    <option value="FREE">Free</option>
                    <option value="FREEMIUM">Freemium</option>
                    <option value="PAID">Paid</option>
                    <option value="OPEN_SOURCE">Open Source</option>
                  </select>
                </div>
              </div>
            )}

            {/* Mobile Filter */}
            {viewMode !== 'home' && (
              <div className="flex sm:hidden items-center gap-2 mb-6">
                <span className="text-sm text-muted-foreground">Filter:</span>
                <select
                  value={pricingFilter}
                  onChange={(e) => setPricingFilter(e.target.value)}
                  className="text-sm border rounded-lg px-3 py-1.5 bg-background flex-1"
                >
                  <option value="all">All Pricing</option>
                  <option value="FREE">Free</option>
                  <option value="FREEMIUM">Freemium</option>
                  <option value="PAID">Paid</option>
                  <option value="OPEN_SOURCE">Open Source</option>
                </select>
              </div>
            )}

            {filteredTools.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-muted-foreground">
                  No tools found. Try a different search or filter.
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredTools.map((tool) => (
                  <button
                    key={tool.id}
                    onClick={() => handleToolClick(tool)}
                    className="text-left w-full"
                  >
                    <ToolCard tool={tool} />
                  </button>
                ))}
              </div>
            )}

            {/* Load More */}
            {filteredTools.length > 0 && (
              <div className="text-center mt-8">
                <Button variant="outline" size="lg" className="gap-1.5">
                  Load More Tools
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:w-80">
            <AdSidebar />
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="container mx-auto px-4 py-12">
        <Newsletter />
      </section>

      {/* Stats Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-2 gap-6 max-w-lg mx-auto">
          {[
            { label: 'AI Tools Listed', value: `${tools.length}` },
            { label: 'Categories', value: `${categories.length}` },
          ].map((stat, i) => (
            <div
              key={i}
              className="text-center p-6 rounded-xl bg-muted/50 border border-border/50"
            >
              <div className="text-3xl md:text-4xl font-bold text-primary mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/50 bg-muted/30">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="col-span-2 md:col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center">
                  <Zap className="w-5 h-5 text-primary-foreground" />
                </div>
                <span className="font-bold text-xl">AI Directory</span>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                The ultimate directory for discovering AI tools. Find the perfect tool for your next project.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><button onClick={handleBackToHome} className="hover:text-primary">All Tools</button></li>
                <li><button onClick={() => document.getElementById('categories')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-primary">Categories</button></li>
                <li><button onClick={() => document.getElementById('featured')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-primary">Featured</button></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Categories</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {categories.slice(0, 4).map((cat) => (
                  <li key={cat.id}>
                    <button
                      onClick={() => handleCategoryClick(cat)}
                      className="hover:text-primary"
                    >
                      {cat.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">For Creators</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="mailto:submit@aidirectory.com?subject=Submit AI Tool" className="hover:text-primary transition-colors">Submit Tool</a></li>
                <li><a href="mailto:advertise@aidirectory.com?subject=Featured Listing" className="hover:text-primary transition-colors">Featured Listing</a></li>
                <li><a href="mailto:advertise@aidirectory.com?subject=Advertising" className="hover:text-primary transition-colors">Advertise</a></li>
                <li><a href="mailto:api@aidirectory.com?subject=API Access Request" className="hover:text-primary transition-colors">API Access</a></li>
              </ul>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-border/50 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              © 2026 AI Directory. All rights reserved.
            </p>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <a href="/privacy" className="hover:text-primary transition-colors">Privacy</a>
              <a href="/terms" className="hover:text-primary transition-colors">Terms</a>
              <a href="mailto:contact@aidirectory.com" className="hover:text-primary transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Tool Detail Modal */}
      <ToolModal
        tool={selectedTool}
        open={modalOpen}
        onOpenChange={setModalOpen}
      />
    </div>
  );
}
