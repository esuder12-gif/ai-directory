import { getTools, getCategories } from '@/lib/data';
import { ClientPage } from './client-page';

export default async function Home() {
  const tools = getTools();
  const featuredTools = getTools({ featured: true });
  const categories = getCategories().map(cat => ({
    ...cat,
    _count: { tools: cat.toolCount || 0 }
  }));

  return <ClientPage 
    initialTools={tools} 
    initialFeaturedTools={featuredTools} 
    initialCategories={categories}
  />;
}
