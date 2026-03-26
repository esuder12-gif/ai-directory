'use client';

import { useEffect, useRef, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';

declare global {
  interface Window {
    adsbygoogle: Array<object>;
  }
}

interface AdSenseProps {
  adSlot: string;
  adFormat?: 'auto' | 'rectangle' | 'horizontal' | 'vertical';
  fullWidth?: boolean;
  className?: string;
}

// Your AdSense Publisher ID
const ADSENSE_PUBLISHER_ID = "ca-pub-6465667167208250";

// AdSense Ad Unit IDs - Your actual ad slots
export const AD_UNITS = {
  // Horizontal banner ad (top of page)
  HORIZONTAL_BANNER: '2289580663',
  // Sidebar rectangle ad (300x250)
  SIDEBAR_RECTANGLE: '1791154117',
  // In-content ad - Create in AdSense dashboard if needed
  IN_CONTENT: '3456789012',
  // Mobile banner - Create in AdSense dashboard if needed
  MOBILE_BANNER: '4567890123',
};

export function AdSenseAd({
  adSlot,
  adFormat = 'auto',
  fullWidth = true,
  className = '',
}: AdSenseProps) {
  const adRef = useRef<HTMLModElement>(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;
    
    try {
      // Small delay to ensure container has dimensions
      const timer = setTimeout(() => {
        if (typeof window !== 'undefined' && adRef.current) {
          const container = adRef.current.parentElement;
          if (container && container.offsetWidth > 0) {
            (window.adsbygoogle = window.adsbygoogle || []).push({});
          }
        }
      }, 100);
      
      return () => clearTimeout(timer);
    } catch (error) {
      // Silently fail - don't break the page
    }
  }, [isClient]);

  // Don't render on server
  if (!isClient) {
    return (
      <div className={`adsense-container ${className}`} style={{ minHeight: adFormat === 'rectangle' ? '250px' : '90px' }} />
    );
  }

  return (
    <div className={`adsense-container ${className}`} style={{ minHeight: adFormat === 'rectangle' ? '250px' : '90px' }}>
      <ins
        ref={adRef}
        className="adsbygoogle"
        style={{ display: 'block', minHeight: adFormat === 'rectangle' ? '250px' : '90px' }}
        data-ad-client={ADSENSE_PUBLISHER_ID}
        data-ad-slot={adSlot}
        data-ad-format={adFormat}
        data-full-width-responsive={fullWidth ? 'true' : 'false'}
      />
    </div>
  );
}

// Pre-styled ad components
export function AdBannerTop() {
  return (
    <div className="w-full">
      <div className="text-center text-xs text-muted-foreground mb-1">
        Advertisement
      </div>
      <div className="bg-muted/30 rounded-lg p-4 min-h-[90px] flex items-center justify-center">
        <AdSenseAd
          adSlot={AD_UNITS.HORIZONTAL_BANNER}
          adFormat="horizontal"
          className="w-full"
        />
      </div>
    </div>
  );
}

export function AdSidebarRectangle() {
  return (
    <Card>
      <CardContent className="p-4">
        <div className="text-center text-xs text-muted-foreground mb-2">
          Advertisement
        </div>
        <div className="bg-muted/30 rounded-lg min-h-[250px] flex items-center justify-center">
          <AdSenseAd
            adSlot={AD_UNITS.SIDEBAR_RECTANGLE}
            adFormat="rectangle"
          />
        </div>
      </CardContent>
    </Card>
  );
}

export function AdInContent() {
  return (
    <div className="my-8">
      <div className="text-center text-xs text-muted-foreground mb-1">
        Advertisement
      </div>
      <div className="bg-muted/30 rounded-lg p-4 min-h-[120px] flex items-center justify-center">
        <AdSenseAd
          adSlot={AD_UNITS.IN_CONTENT}
          adFormat="auto"
        />
      </div>
    </div>
  );
}

// Fallback component when AdSense is not configured
export function AdPlaceholder({ type }: { type: 'banner' | 'sidebar' | 'in-content' }) {
  const config = {
    banner: { height: 'h-24', label: '728×90 Banner Ad' },
    sidebar: { height: 'h-64', label: '300×250 Rectangle Ad' },
    'in-content': { height: 'h-32', label: 'Responsive Ad Unit' },
  };

  const { height, label } = config[type];

  return (
    <Card className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <CardContent className="p-4">
        <div className="text-center text-xs text-muted-foreground mb-2">
          Advertisement
        </div>
        <div className={`${height} bg-slate-200 dark:bg-slate-700 rounded-lg flex items-center justify-center text-muted-foreground text-sm`}>
          {label}
        </div>
        <p className="text-xs text-muted-foreground mt-2 text-center">
          Configure AdSense to display ads
        </p>
      </CardContent>
    </Card>
  );
}
