'use client';

import { useState, useEffect } from 'react';
import { 
  Search, 
  Sparkles, 
  TrendingUp, 
  ArrowRight, 
  Zap, 
  X,
  Star,
  ExternalLink,
  Heart,
  PenTool,
  Image,
  Video,
  Music,
  MessageSquare,
  Code,
  Target,
  Briefcase,
  ChevronDown
} from 'lucide-react';

// Types
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

// Category icons map
const categoryIcons: Record<string, any> = {
  'AI Writing': PenTool,
  'AI Image': Image,
  'AI Video': Video,
  'AI Audio': Music,
  'AI Chatbots': MessageSquare,
  'AI Coding': Code,
  'AI Marketing': Target,
  'AI Productivity': Briefcase,
};

// Pricing badge styles
const pricingStyles: Record<string, string> = {
  FREE: 'badge-free',
  FREEMIUM: 'badge-freemium',
  PAID: 'badge-paid',
  FREE_TRIAL: 'badge-freemium',
  OPEN_SOURCE: 'badge-opensource',
};

const pricingLabels: Record<string, string> = {
  FREE: 'Free',
  FREEMIUM: 'Freemium',
  PAID: 'Paid',
  FREE_TRIAL: 'Free Trial',
  OPEN_SOURCE: 'Open Source',
};

// Category colors
const categoryColors: Record<string, { bg: string; icon: string }> = {
  'AI Writing': { bg: '#ECFDF5', icon: '#059669' },
  'AI Image': { bg: '#F3E8FF', icon: '#9333EA' },
  'AI Video': { bg: '#FEE2E2', icon: '#DC2626' },
  'AI Audio': { bg: '#FEF3C7', icon: '#D97706' },
  'AI Chatbots': { bg: '#EFF6FF', icon: '#2563EB' },
  'AI Coding': { bg: '#CFFAFE', icon: '#0891B2' },
  'AI Marketing': { bg: '#FFF7ED', icon: '#EA580C' },
  'AI Productivity': { bg: '#EDE9FE', icon: '#7C3AED' },
};

export function ClientPage({ initialTools, initialFeaturedTools, initialCategories }: ClientPageProps) {
  const [tools] = useState<Tool[]>(initialTools);
  const [categories] = useState<Category[]>(initialCategories);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedPricing, setSelectedPricing] = useState<string | null>(null);
  const [favorites, setFavorites] = useState<Set<string>>(new Set());
  const [selectedTool, setSelectedTool] = useState<Tool | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [sortBy, setSortBy] = useState<'popular' | 'name'>('popular');

  // Filter and sort tools
  const filteredTools = tools
    .filter(tool => {
      if (selectedCategory && tool.category?.slug !== selectedCategory) return false;
      if (selectedPricing && tool.pricing !== selectedPricing) return false;
      if (searchQuery) {
        const query = searchQuery.toLowerCase();
        return (
          tool.name.toLowerCase().includes(query) ||
          tool.tagline.toLowerCase().includes(query) ||
          tool.description.toLowerCase().includes(query)
        );
      }
      return true;
    })
    .sort((a, b) => {
      if (sortBy === 'name') return a.name.localeCompare(b.name);
      return b.viewCount - a.viewCount;
    });

  const featuredTools = tools.filter(t => t.isFeatured);

  // Toggle favorite
  const toggleFavorite = (e: React.MouseEvent, toolId: string) => {
    e.stopPropagation();
    setFavorites(prev => {
      const next = new Set(prev);
      if (next.has(toolId)) {
        next.delete(toolId);
      } else {
        next.add(toolId);
      }
      return next;
    });
  };

  // Open tool modal
  const openTool = (tool: Tool) => {
    setSelectedTool(tool);
    setShowModal(true);
  };

  // Get tool initials
  const getInitials = (name: string) => {
    return name.split(' ').map(n => n[0]).join('').slice(0, 2).toUpperCase();
  };

  return (
    <div className="min-h-screen flex flex-col" style={{ background: '#FAFBFC' }}>
      {/* Header */}
      <header className="header">
        <div className="container flex items-center justify-between h-16">
          <a href="/" className="flex items-center gap-3 group">
            <div className="logo">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold text-lg" style={{ color: '#1a1a2e' }}>AI Directory</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            <a href="#tools" className="text-sm font-medium hover:text-purple-600 transition-colors" style={{ color: '#6B7280' }}>
              All Tools
            </a>
            <a href="#categories" className="text-sm font-medium hover:text-purple-600 transition-colors" style={{ color: '#6B7280' }}>
              Categories
            </a>
            <a href="/privacy" className="text-sm font-medium hover:text-purple-600 transition-colors" style={{ color: '#6B7280' }}>
              Privacy
            </a>
          </nav>

          <button className="btn-primary">
            <Sparkles className="w-4 h-4" />
            Submit Tool
          </button>
        </div>
      </header>

      {/* Hero */}
      <section className="hero-gradient py-16 md:py-24">
        <div className="container text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-6" style={{ background: '#F3F0FF', color: '#7C3AED' }}>
            <TrendingUp className="w-4 h-4" />
            {tools.length} AI Tools Curated
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6" style={{ color: '#1a1a2e', lineHeight: 1.1 }}>
            Find the Best<br />
            <span style={{ background: 'linear-gradient(135deg, #8B5CF6, #7C3AED)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              AI Tools
            </span> for Your Work
          </h1>

          <p className="text-lg mb-10 max-w-xl mx-auto" style={{ color: '#6B7280' }}>
            A curated collection of AI tools for writing, design, coding, and productivity. 
            Discover tools that actually work.
          </p>

          {/* Search */}
          <div className="max-w-xl mx-auto relative mb-8">
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5" style={{ color: '#9CA3AF' }} />
            <input
              type="text"
              placeholder="Search tools... (e.g., 'chatgpt', 'image generator')"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="search-input"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-5 top-1/2 -translate-y-1/2 p-1 rounded-full hover:bg-gray-100"
              >
                <X className="w-4 h-4" style={{ color: '#9CA3AF' }} />
              </button>
            )}
          </div>

          {/* Quick searches */}
          <div className="flex flex-wrap justify-center gap-2">
            <span className="text-sm" style={{ color: '#9CA3AF' }}>Popular:</span>
            {['ChatGPT', 'Midjourney', 'Claude', 'Cursor', 'ElevenLabs'].map(name => (
              <button
                key={name}
                onClick={() => setSearchQuery(name)}
                className="text-sm font-medium px-3 py-1 rounded-full hover:bg-purple-50 transition-colors"
                style={{ color: '#7C3AED' }}
              >
                {name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section id="categories" className="py-12 bg-white border-b" style={{ borderColor: '#E5E7EB' }}>
        <div className="container">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold" style={{ color: '#1a1a2e' }}>Categories</h2>
            {selectedCategory && (
              <button
                onClick={() => setSelectedCategory(null)}
                className="text-sm font-medium flex items-center gap-1"
                style={{ color: '#7C3AED' }}
              >
                <X className="w-4 h-4" />
                Clear filter
              </button>
            )}
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
            {categories.map(category => {
              const Icon = categoryIcons[category.name] || Sparkles;
              const colors = categoryColors[category.name] || { bg: '#F3F0FF', icon: '#7C3AED' };
              const count = category._count?.tools || category.toolCount || 0;
              const isActive = selectedCategory === category.slug;

              return (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(isActive ? null : category.slug)}
                  className={`category-card ${isActive ? 'active' : ''}`}
                >
                  <div className="icon-container" style={{ background: colors.bg }}>
                    <Icon className="w-5 h-5" style={{ color: colors.icon }} />
                  </div>
                  <div className="text-left">
                    <div className="font-medium text-sm" style={{ color: '#1a1a2e' }}>
                      {category.name.replace('AI ', '')}
                    </div>
                    <div className="text-xs" style={{ color: '#9CA3AF' }}>{count} tools</div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-6 border-b" style={{ borderColor: '#E5E7EB' }}>
        <div className="container">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-sm font-medium" style={{ color: '#6B7280' }}>Pricing:</span>
              {[
                { value: null, label: 'All' },
                { value: 'FREE', label: 'Free' },
                { value: 'FREEMIUM', label: 'Freemium' },
                { value: 'PAID', label: 'Paid' },
                { value: 'OPEN_SOURCE', label: 'Open Source' },
              ].map(filter => (
                <button
                  key={filter.label}
                  onClick={() => setSelectedPricing(filter.value)}
                  className={`filter-chip ${selectedPricing === filter.value ? 'active' : ''}`}
                >
                  {filter.label}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-2">
              <span className="text-sm font-medium" style={{ color: '#6B7280' }}>Sort:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as 'popular' | 'name')}
                className="filter-chip pr-8"
                style={{ appearance: 'none', backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' fill=\'none\' viewBox=\'0 0 24 24\' stroke=\'%236B7280\'%3E%3Cpath stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'2\' d=\'M19 9l-7 7-7-7\'/%3E%3C/svg%3E")', backgroundRepeat: 'no-repeat', backgroundPosition: 'right 8px center', backgroundSize: '16px' }}
              >
                <option value="popular">Most Popular</option>
                <option value="name">Alphabetical</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Tools Grid */}
      <section id="tools" className="py-12 flex-1">
        <div className="container">
          {/* Results header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="section-title">
                {selectedCategory 
                  ? categories.find(c => c.slug === selectedCategory)?.name || 'Tools'
                  : searchQuery 
                    ? `Results for "${searchQuery}"`
                    : 'All Tools'
                }
              </h2>
              <p className="section-subtitle">{filteredTools.length} tools found</p>
            </div>
          </div>

          {/* Tools */}
          {filteredTools.length === 0 ? (
            <div className="text-center py-16">
              <div className="text-4xl mb-4">🔍</div>
              <p className="text-lg font-medium" style={{ color: '#1a1a2e' }}>No tools found</p>
              <p className="text-sm" style={{ color: '#6B7280' }}>Try adjusting your search or filters</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {filteredTools.map((tool, index) => {
                const colors = tool.category ? categoryColors[tool.category.name] : { bg: '#F3F0FF', icon: '#7C3AED' };
                const isFavorite = favorites.has(tool.id);

                return (
                  <div
                    key={tool.id}
                    onClick={() => openTool(tool)}
                    className="tool-card animate-fade-in"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div 
                          className="w-12 h-12 rounded-xl flex items-center justify-center font-bold text-white"
                          style={{ background: `linear-gradient(135deg, ${colors.icon}, ${colors.icon}CC)` }}
                        >
                          {getInitials(tool.name)}
                        </div>
                        <div>
                          <h3 className="font-semibold text-base" style={{ color: '#1a1a2e' }}>{tool.name}</h3>
                          <div className="flex items-center gap-2">
                            {tool.category && (
                              <span className="text-xs" style={{ color: '#9CA3AF' }}>
                                {tool.category.name.replace('AI ', '')}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                      <button
                        onClick={(e) => toggleFavorite(e, tool.id)}
                        className="p-2 rounded-lg hover:bg-gray-50 transition-colors"
                      >
                        <Heart 
                          className={`w-5 h-5 ${isFavorite ? 'fill-red-500 text-red-500' : ''}`}
                          style={{ color: isFavorite ? undefined : '#D1D5DB' }}
                        />
                      </button>
                    </div>

                    {/* Description */}
                    <p className="text-sm mb-4 line-clamp-2" style={{ color: '#6B7280' }}>
                      {tool.tagline}
                    </p>

                    {/* Footer */}
                    <div className="flex items-center justify-between pt-4 border-t" style={{ borderColor: '#F3F4F6' }}>
                      <span className={`badge ${pricingStyles[tool.pricing] || 'badge-freemium'}`}>
                        {pricingLabels[tool.pricing] || tool.pricing}
                      </span>
                      <div className="flex items-center gap-3 text-xs" style={{ color: '#9CA3AF' }}>
                        <span className="flex items-center gap-1">
                          <Star className="w-3.5 h-3.5" />
                          {tool.upvoteCount}
                        </span>
                        <span className="flex items-center gap-1">
                          <TrendingUp className="w-3.5 h-3.5" />
                          {tool.viewCount.toLocaleString()}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* Tool Modal */}
      {showModal && selectedTool && (
        <div 
          className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
          onClick={() => setShowModal(false)}
        >
          <div 
            className="bg-white rounded-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto"
            onClick={e => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="p-6 border-b" style={{ borderColor: '#E5E7EB' }}>
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-4">
                  <div 
                    className="w-14 h-14 rounded-xl flex items-center justify-center font-bold text-white text-lg"
                    style={{ background: 'linear-gradient(135deg, #8B5CF6, #7C3AED)' }}
                  >
                    {getInitials(selectedTool.name)}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold" style={{ color: '#1a1a2e' }}>{selectedTool.name}</h3>
                    <div className="flex items-center gap-2 mt-1">
                      <span className={`badge ${pricingStyles[selectedTool.pricing] || 'badge-freemium'}`}>
                        {pricingLabels[selectedTool.pricing] || selectedTool.pricing}
                      </span>
                      {selectedTool.category && (
                        <span className="text-xs" style={{ color: '#9CA3AF' }}>
                          {selectedTool.category.name}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => setShowModal(false)}
                  className="p-2 rounded-lg hover:bg-gray-100"
                >
                  <X className="w-5 h-5" style={{ color: '#6B7280' }} />
                </button>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-6">
              <p className="text-base mb-6" style={{ color: '#374151' }}>
                {selectedTool.description}
              </p>

              {selectedTool.priceDetails && (
                <div className="mb-6 p-4 rounded-xl" style={{ background: '#F9FAFB' }}>
                  <div className="text-sm font-medium mb-1" style={{ color: '#6B7280' }}>Pricing</div>
                  <div className="font-semibold" style={{ color: '#1a1a2e' }}>{selectedTool.priceDetails}</div>
                </div>
              )}

              <div className="flex items-center gap-4 mb-6 text-sm" style={{ color: '#6B7280' }}>
                <span className="flex items-center gap-1">
                  <Star className="w-4 h-4" />
                  {selectedTool.upvoteCount} upvotes
                </span>
                <span className="flex items-center gap-1">
                  <TrendingUp className="w-4 h-4" />
                  {selectedTool.viewCount.toLocaleString()} views
                </span>
              </div>

              <a
                href={selectedTool.websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full justify-center"
              >
                Visit Website
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="logo">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <span className="font-bold text-lg text-white">AI Directory</span>
              </div>
              <p className="text-sm" style={{ color: '#9CA3AF' }}>
                A curated collection of AI tools to help you work smarter.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-white">Browse</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#tools">All Tools</a></li>
                <li><a href="#categories">Categories</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-white">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="/privacy">Privacy Policy</a></li>
                <li><a href="/terms">Terms of Service</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-white">Contact</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="mailto:contact@aidirectory.com">Email Us</a></li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t flex flex-col md:flex-row items-center justify-between gap-4" style={{ borderColor: 'rgba(255,255,255,0.1)' }}>
            <p className="text-sm" style={{ color: '#6B7280' }}>
              © 2026 AI Directory. All rights reserved.
            </p>
            <p className="text-sm" style={{ color: '#6B7280' }}>
              Made with care for the AI community.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
