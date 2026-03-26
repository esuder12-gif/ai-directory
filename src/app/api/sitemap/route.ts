import { tools, categories } from '@/lib/data';
import { NextResponse } from 'next/server';

export async function GET() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://ai-directory-ebd6.vercel.app';

  const urls = [
    { loc: baseUrl, lastmod: new Date().toISOString(), priority: '1.0', changefreq: 'daily' },
    ...tools.map((tool) => ({
      loc: `${baseUrl}/tool/${tool.slug}`,
      lastmod: new Date().toISOString(),
      priority: '0.8',
      changefreq: 'weekly',
    })),
    ...categories.map((cat) => ({
      loc: `${baseUrl}/category/${cat.slug}`,
      lastmod: new Date().toISOString(),
      priority: '0.7',
      changefreq: 'weekly',
    })),
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (url) => `  <url>
    <loc>${url.loc}</loc>
    <lastmod>${url.lastmod}</lastmod>
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`;

  return new NextResponse(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  });
}
