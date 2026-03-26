'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Sparkles } from 'lucide-react';
import { AdSenseAd, AD_UNITS, AdPlaceholder } from './adsense';

// AdSense is now enabled with your Publisher ID
const ADSENSE_ENABLED = true;

export function AdBanner() {
  if (ADSENSE_ENABLED) {
    return (
      <div className="w-full">
        <div className="text-center text-xs text-muted-foreground mb-1">
          Advertisement
        </div>
        <div className="bg-muted/30 rounded-lg overflow-hidden">
          <AdSenseAd
            adSlot={AD_UNITS.HORIZONTAL_BANNER}
            adFormat="horizontal"
            className="w-full"
          />
        </div>
      </div>
    );
  }

  // Placeholder until AdSense is configured
  return (
    <Card className="bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-950/30 dark:to-orange-950/30 border-amber-200 dark:border-amber-800">
      <CardContent className="p-4">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center text-white font-bold text-sm">
              AD
            </div>
            <div>
              <p className="text-xs text-amber-600 dark:text-amber-400 font-medium">
                SPONSORED
              </p>
              <p className="text-sm font-semibold">
                🚀 List Your AI Tool - Get Featured Today!
              </p>
              <p className="text-xs text-muted-foreground">
                Promote your AI tool to our growing community
              </p>
            </div>
          </div>
          <Button
            asChild
            size="sm"
            className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600"
          >
            <a
              href="mailto:advertise@aidirectory.com?subject=Featured Listing Inquiry"
              className="flex items-center gap-1"
            >
              Get Featured
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

export function AdSidebar() {
  return (
    <div className="sticky top-4 space-y-4">
      {/* AdSense Sidebar Ad */}
      {ADSENSE_ENABLED ? (
        <div className="bg-muted/30 rounded-lg p-4">
          <div className="text-center text-xs text-muted-foreground mb-2">
            Advertisement
          </div>
          <div className="min-h-[250px] flex items-center justify-center">
            <AdSenseAd
              adSlot={AD_UNITS.SIDEBAR_RECTANGLE}
              adFormat="rectangle"
            />
          </div>
        </div>
      ) : (
        <Card className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
          <CardContent className="p-4 text-center">
            <div className="w-full h-48 bg-slate-200 dark:bg-slate-700 rounded-lg flex items-center justify-center text-muted-foreground text-sm">
              300×250 Ad Space
            </div>
            <p className="text-xs text-muted-foreground mt-2">Advertisement</p>
          </CardContent>
        </Card>
      )}

      {/* Submit Your Tool CTA */}
      <Card className="bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
        <CardContent className="p-4">
          <div className="flex items-center gap-2 mb-2">
            <Sparkles className="w-5 h-5 text-primary" />
            <h4 className="font-bold">📌 List Your Tool</h4>
          </div>
          <p className="text-sm text-muted-foreground mb-3">
            Get your AI tool featured in our directory and reach users looking for AI solutions.
          </p>
          <ul className="text-xs text-muted-foreground space-y-1 mb-4">
            <li>✓ Premium placement</li>
            <li>✓ Detailed analytics</li>
            <li>✓ Click tracking</li>
          </ul>
          <Button
            asChild
            className="w-full"
          >
            <a href="mailto:submit@aidirectory.com?subject=Submit AI Tool">
              Submit Your Tool
            </a>
          </Button>
        </CardContent>
      </Card>

      {/* Newsletter in Sidebar */}
      <Card className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30 border-blue-200 dark:border-blue-800">
        <CardContent className="p-4">
          <h4 className="font-bold mb-2">📧 Weekly AI Digest</h4>
          <p className="text-sm text-muted-foreground mb-3">
            Get the best AI tools delivered to your inbox every week
          </p>
          <Button variant="outline" className="w-full" asChild>
            <a href="#newsletter">Subscribe Free</a>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
