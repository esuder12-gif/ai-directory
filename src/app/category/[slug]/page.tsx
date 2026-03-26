import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowRight, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ToolCard } from '@/components/directory/tool-card';
import { AdBanner, AdSidebar } from '@/components/directory/ad-banner';
import { Newsletter } from '@/components/directory/newsletter';
import { getTools, getCategoryBySlug, getCategories } from '@/lib/data';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const categories = getCategories();
  return categories.map((cat) => ({ slug: cat.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);
  
  if (!category) {
    return { title: 'Category Not Found' };
  }

  return {
    title: `${category.name} - AI Tools Directory`,
    description: category.description,
  };
}

export default async function CategoryPage({ params }: Props) {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);

  if (!category) {
    notFound();
  }

  const tools = getTools({ category: slug });

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

      {/* Category Header */}
      <section className="container mx-auto px-4 py-8">
        <Link href="/" className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary mb-4">
          <ArrowRight className="w-4 h-4 rotate-180" />
          Back to All Tools
        </Link>
        <div className="flex items-center gap-4">
          <h1 className="text-3xl md:text-4xl font-bold">{category.name}</h1>
          <Badge variant="secondary">{tools.length} tools</Badge>
        </div>
        {category.description && (
          <p className="text-muted-foreground mt-2 text-lg">{category.description}</p>
        )}
      </section>

      {/* Ad Banner */}
      <div className="container mx-auto px-4 mb-8">
        <AdBanner />
      </div>

      {/* Tools Grid */}
      <section className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="flex-1">
            {tools.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-muted-foreground">No tools found in this category.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {tools.map((tool) => (
                  <Link key={tool.id} href={`/tool/${tool.slug}`}>
                    <ToolCard tool={tool} />
                  </Link>
                ))}
              </div>
            )}
          </div>
          <div className="lg:w-80">
            <AdSidebar />
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="container mx-auto px-4 py-12">
        <Newsletter />
      </section>
    </div>
  );
}
