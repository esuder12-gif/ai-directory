'use client';

import { useState, useEffect } from 'react';

interface ClickStats {
  total: number;
  byTool: Record<string, number>;
  byCategory: Record<string, number>;
  recentClicks: any[];
}

interface ConversionStats {
  total: number;
  totalRevenue: number;
  byTool: Record<string, { count: number; revenue: number }>;
  recentConversions: any[];
}

export default function AnalyticsDashboard() {
  const [clickStats, setClickStats] = useState<ClickStats | null>(null);
  const [conversionStats, setConversionStats] = useState<ConversionStats | null>(null);
  const [loading, setLoading] = useState(true);
  const [ga4Id, setGa4Id] = useState('');

  useEffect(() => {
    // Fetch click stats
    fetch('/api/track/click')
      .then(res => res.json())
      .then(data => {
        setClickStats(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error fetching click stats:', err);
        setLoading(false);
      });

    // Fetch conversion stats
    fetch('/api/track/conversion')
      .then(res => res.json())
      .then(data => setConversionStats(data))
      .catch(err => console.error('Error fetching conversion stats:', err));
  }, []);

  const topTools = clickStats?.byTool
    ? Object.entries(clickStats.byTool)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 5)
    : [];

  const topCategories = clickStats?.byCategory
    ? Object.entries(clickStats.byCategory)
        .sort((a, b) => b[1] - a[1])
    : [];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      {/* Header */}
      <header className="bg-gray-900/50 border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                📊 Analytics Dashboard
              </h1>
              <p className="text-gray-400 mt-1">Track affiliate clicks and conversions</p>
            </div>
            <a href="/" className="text-gray-300 hover:text-white transition">
              ← Back to Directory
            </a>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* GA4 Setup Notice */}
        <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 rounded-xl p-6 border border-blue-700/50 mb-8">
          <h2 className="text-lg font-semibold text-blue-400 mb-2">🔑 Google Analytics 4 Setup</h2>
          <p className="text-gray-400 text-sm mb-4">
            To enable full conversion tracking, add your GA4 Measurement ID to the layout.tsx file.
          </p>
          <div className="flex items-center gap-4">
            <input
              type="text"
              placeholder="G-XXXXXXXXXX"
              value={ga4Id}
              onChange={(e) => setGa4Id(e.target.value)}
              className="bg-gray-800 border border-gray-600 rounded-lg px-4 py-2 text-sm flex-1"
            />
            <a
              href="https://analytics.google.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg text-sm transition"
            >
              Get GA4 ID →
            </a>
          </div>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
            <div className="text-3xl font-bold text-cyan-400">{clickStats?.total || 0}</div>
            <div className="text-gray-400 text-sm">Total Clicks</div>
          </div>
          <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
            <div className="text-3xl font-bold text-emerald-400">{conversionStats?.total || 0}</div>
            <div className="text-gray-400 text-sm">Conversions</div>
          </div>
          <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
            <div className="text-3xl font-bold text-purple-400">
              ${conversionStats?.totalRevenue?.toFixed(2) || '0.00'}
            </div>
            <div className="text-gray-400 text-sm">Est. Revenue</div>
          </div>
          <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
            <div className="text-3xl font-bold text-pink-400">
              {clickStats?.total ? ((conversionStats?.total || 0) / clickStats.total * 100).toFixed(1) : 0}%
            </div>
            <div className="text-gray-400 text-sm">Conversion Rate</div>
          </div>
        </div>

        {loading ? (
          <div className="text-center py-12 text-gray-400">Loading analytics...</div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Top Tools */}
            <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
              <h2 className="text-xl font-semibold mb-4">🔥 Top Clicked Tools</h2>
              {topTools.length === 0 ? (
                <p className="text-gray-500">No clicks recorded yet. Clicks will appear here once users start clicking on tools.</p>
              ) : (
                <div className="space-y-3">
                  {topTools.map(([toolId, count], i) => (
                    <div key={toolId} className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span className="text-gray-500 w-6">{i + 1}.</span>
                        <span className="font-medium">{toolId}</span>
                      </div>
                      <span className="bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded-full text-sm">
                        {count} clicks
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Top Categories */}
            <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
              <h2 className="text-xl font-semibold mb-4">📁 Clicks by Category</h2>
              {topCategories.length === 0 ? (
                <p className="text-gray-500">No category data yet.</p>
              ) : (
                <div className="space-y-3">
                  {topCategories.map(([category, count], i) => (
                    <div key={category} className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span className="text-gray-500 w-6">{i + 1}.</span>
                        <span className="font-medium">{category}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-24 bg-gray-700 rounded-full h-2">
                          <div
                            className="bg-emerald-500 h-2 rounded-full"
                            style={{ width: `${(count / (clickStats?.total || 1)) * 100}%` }}
                          />
                        </div>
                        <span className="text-gray-400 text-sm w-12 text-right">{count}</span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Recent Clicks */}
            <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
              <h2 className="text-xl font-semibold mb-4">👆 Recent Clicks</h2>
              {clickStats?.recentClicks?.length === 0 ? (
                <p className="text-gray-500">No recent clicks.</p>
              ) : (
                <div className="space-y-2 max-h-64 overflow-y-auto">
                  {clickStats?.recentClicks?.map((click: any, i: number) => (
                    <div key={i} className="flex items-center justify-between py-2 border-b border-gray-700/50">
                      <div>
                        <span className="font-medium">{click.toolName || click.toolId}</span>
                        <span className="text-gray-500 text-sm ml-2">({click.clickType})</span>
                      </div>
                      <span className="text-gray-500 text-xs">
                        {new Date(click.timestamp).toLocaleTimeString()}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Recent Conversions */}
            <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
              <h2 className="text-xl font-semibold mb-4">💰 Recent Conversions</h2>
              {conversionStats?.recentConversions?.length === 0 ? (
                <p className="text-gray-500">No conversions recorded yet. Conversions will appear here when tracked.</p>
              ) : (
                <div className="space-y-2 max-h-64 overflow-y-auto">
                  {conversionStats?.recentConversions?.map((conv: any, i: number) => (
                    <div key={i} className="flex items-center justify-between py-2 border-b border-gray-700/50">
                      <div>
                        <span className="font-medium">{conv.toolName || conv.toolId}</span>
                        <span className="text-emerald-400 ml-2">${conv.estimatedValue}</span>
                      </div>
                      <span className="text-gray-500 text-xs">
                        {new Date(conv.conversionDate).toLocaleDateString()}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}

        {/* GA4 Events Reference */}
        <div className="mt-8 bg-gray-800/30 rounded-xl p-6 border border-gray-700">
          <h2 className="text-xl font-semibold mb-4">📈 Google Analytics 4 Events</h2>
          <p className="text-gray-400 mb-4">The following events are tracked automatically when you add your GA4 ID:</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-gray-800/50 p-4 rounded-lg">
              <div className="text-cyan-400 font-medium">affiliate_click</div>
              <p className="text-gray-500 text-sm mt-1">When user clicks on a tool link</p>
            </div>
            <div className="bg-gray-800/50 p-4 rounded-lg">
              <div className="text-emerald-400 font-medium">purchase</div>
              <p className="text-gray-500 text-sm mt-1">When a conversion is detected</p>
            </div>
            <div className="bg-gray-800/50 p-4 rounded-lg">
              <div className="text-purple-400 font-medium">search</div>
              <p className="text-gray-500 text-sm mt-1">When user searches for tools</p>
            </div>
            <div className="bg-gray-800/50 p-4 rounded-lg">
              <div className="text-pink-400 font-medium">filter_by_category</div>
              <p className="text-gray-500 text-sm mt-1">When user filters by category</p>
            </div>
            <div className="bg-gray-800/50 p-4 rounded-lg">
              <div className="text-orange-400 font-medium">newsletter_signup</div>
              <p className="text-gray-500 text-sm mt-1">When user subscribes</p>
            </div>
            <div className="bg-gray-800/50 p-4 rounded-lg">
              <div className="text-blue-400 font-medium">page_view</div>
              <p className="text-gray-500 text-sm mt-1">On every page navigation</p>
            </div>
          </div>
        </div>

        {/* Instructions */}
        <div className="mt-8 bg-gradient-to-r from-emerald-900/30 to-cyan-900/30 rounded-xl p-6 border border-emerald-700/50">
          <h2 className="text-xl font-semibold text-emerald-400 mb-4">✅ Setup Instructions</h2>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <span className="bg-emerald-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">1</span>
              <div>
                <h3 className="text-white font-medium">Get Google Analytics 4 ID</h3>
                <p className="text-gray-400 text-sm">Go to analytics.google.com, create a property, and copy your Measurement ID (G-XXXXXXXXXX)</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="bg-emerald-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">2</span>
              <div>
                <h3 className="text-white font-medium">Update layout.tsx</h3>
                <p className="text-gray-400 text-sm">Replace GA4_MEASUREMENT_ID in src/app/layout.tsx with your actual ID</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="bg-emerald-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">3</span>
              <div>
                <h3 className="text-white font-medium">Set up GA4 Conversions</h3>
                <p className="text-gray-400 text-sm">In GA4 Admin → Events → Mark "affiliate_click" and "purchase" as conversions</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="bg-emerald-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">4</span>
              <div>
                <h3 className="text-white font-medium">Link to AdSense</h3>
                <p className="text-gray-400 text-sm">Link GA4 to your AdSense account for comprehensive revenue tracking</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
