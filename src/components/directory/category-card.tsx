'use client';

import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import {
  Pen,
  Image,
  Video,
  Mic,
  MessageSquare,
  Code,
  Megaphone,
  Zap,
} from 'lucide-react';

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

const iconMap: Record<string, React.ElementType> = {
  pen: Pen,
  image: Image,
  video: Video,
  mic: Mic,
  message: MessageSquare,
  code: Code,
  megaphone: Megaphone,
  zap: Zap,
};

const colorMap: Record<string, { bg: string; text: string; hover: string }> = {
  emerald: {
    bg: 'bg-emerald-100 dark:bg-emerald-900/30',
    text: 'text-emerald-600 dark:text-emerald-400',
    hover: 'hover:border-emerald-300 dark:hover:border-emerald-700',
  },
  purple: {
    bg: 'bg-purple-100 dark:bg-purple-900/30',
    text: 'text-purple-600 dark:text-purple-400',
    hover: 'hover:border-purple-300 dark:hover:border-purple-700',
  },
  rose: {
    bg: 'bg-rose-100 dark:bg-rose-900/30',
    text: 'text-rose-600 dark:text-rose-400',
    hover: 'hover:border-rose-300 dark:hover:border-rose-700',
  },
  amber: {
    bg: 'bg-amber-100 dark:bg-amber-900/30',
    text: 'text-amber-600 dark:text-amber-400',
    hover: 'hover:border-amber-300 dark:hover:border-amber-700',
  },
  blue: {
    bg: 'bg-blue-100 dark:bg-blue-900/30',
    text: 'text-blue-600 dark:text-blue-400',
    hover: 'hover:border-blue-300 dark:hover:border-blue-700',
  },
  cyan: {
    bg: 'bg-cyan-100 dark:bg-cyan-900/30',
    text: 'text-cyan-600 dark:text-cyan-400',
    hover: 'hover:border-cyan-300 dark:hover:border-cyan-700',
  },
  orange: {
    bg: 'bg-orange-100 dark:bg-orange-900/30',
    text: 'text-orange-600 dark:text-orange-400',
    hover: 'hover:border-orange-300 dark:hover:border-orange-700',
  },
  indigo: {
    bg: 'bg-indigo-100 dark:bg-indigo-900/30',
    text: 'text-indigo-600 dark:text-indigo-400',
    hover: 'hover:border-indigo-300 dark:hover:border-indigo-700',
  },
};

export function CategoryCard({ category }: { category: Category }) {
  const Icon = iconMap[category.icon || 'zap'] || Zap;
  const colors = colorMap[category.color || 'blue'] || colorMap.blue;

  return (
    <Link href={`/category/${category.slug}`}>
      <Card
        className={`group h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-2 border-transparent ${colors.hover}`}
      >
        <CardContent className="p-6">
          <div className="flex items-start gap-4">
            <div
              className={`flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center ${colors.bg} transition-transform group-hover:scale-110`}
            >
              <Icon className={`w-6 h-6 ${colors.text}`} />
            </div>

            <div className="flex-1 min-w-0">
              <h3 className="font-bold text-lg mb-1 group-hover:text-primary transition-colors">
                {category.name}
              </h3>
              {category.description && (
                <p className="text-sm text-muted-foreground line-clamp-2">
                  {category.description}
                </p>
              )}
              <div className="mt-2 text-xs text-muted-foreground">
                {category._count?.tools || category.toolCount || 0} tools
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
