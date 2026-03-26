import { NextResponse } from 'next/server';
import { getCategories } from '@/lib/data';

export const dynamic = 'force-dynamic';

export async function GET() {
  const categories = getCategories();
  // Transform categories to include _count.tools format for the CategoryCard component
  // This ensures the frontend displays correct tool counts per category
  const transformedCategories = categories.map(cat => ({
    ...cat,
    _count: { tools: cat.toolCount || 0 }
  }));
  return NextResponse.json(transformedCategories, {
    headers: { 'Cache-Control': 'no-store' }
  });
}
