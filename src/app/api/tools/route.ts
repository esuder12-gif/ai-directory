import { NextResponse } from 'next/server';
import { getTools } from '@/lib/data';

export const dynamic = 'force-dynamic';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const category = searchParams.get('category');
  const search = searchParams.get('search');
  const featured = searchParams.get('featured');
  const limit = parseInt(searchParams.get('limit') || '50');

  const tools = getTools({
    category: category || undefined,
    search: search || undefined,
    featured: featured === 'true',
    limit,
  });

  return NextResponse.json({ tools, total: tools.length }, {
    headers: { 'Cache-Control': 'no-store' }
  });
}
