'use client';

import { affiliatePrograms, affiliateNetworks } from '@/lib/data';

export default function QuickStartPage() {
  const tier1Programs = affiliatePrograms.filter(p => p.priority === 1);
  const tier2Programs = affiliatePrograms.filter(p => p.priority === 2);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <header className="bg-gray-900/50 border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
            🚀 Quick Start - Do It Now
          </h1>
          <p className="text-gray-400 mt-1">Click each link to complete setup in order</p>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-8">
        {/* Step 1: Networks */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-emerald-400 mb-4 flex items-center gap-2">
            <span className="bg-emerald-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-lg">1</span>
            Sign Up for Affiliate Networks (Required First)
          </h2>
          <div className="space-y-4">
            {affiliateNetworks.filter(n => n.recommended).map((network) => (
              <a
                key={network.name}
                href={network.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-gray-800/50 rounded-xl p-5 border border-gray-700 hover:border-emerald-500 transition group"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold text-lg group-hover:text-emerald-400 transition">{network.name}</h3>
                    <p className="text-gray-400 text-sm mt-1">
                      Tools: {network.tools.slice(0, 3).join(', ')}{network.tools.length > 3 && '...'}
                    </p>
                  </div>
                  <div className="bg-emerald-600 group-hover:bg-emerald-500 px-6 py-3 rounded-lg font-semibold transition">
                    Sign Up →
                  </div>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* Step 2: GA4 */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-blue-400 mb-4 flex items-center gap-2">
            <span className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-lg">2</span>
            Set Up Google Analytics 4 (For Tracking)
          </h2>
          <a
            href="https://analytics.google.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-gray-800/50 rounded-xl p-5 border border-gray-700 hover:border-blue-500 transition group"
          >
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-semibold text-lg group-hover:text-blue-400 transition">Google Analytics 4</h3>
                <p className="text-gray-400 text-sm mt-1">Create property → Get Measurement ID (G-XXXXXXXXXX)</p>
              </div>
              <div className="bg-blue-600 group-hover:bg-blue-500 px-6 py-3 rounded-lg font-semibold transition">
                Open GA4 →
              </div>
            </div>
          </a>
        </section>

        {/* Step 3: Apply to Programs */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-orange-400 mb-4 flex items-center gap-2">
            <span className="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-lg">3</span>
            Apply to Tier 1 Affiliate Programs (High Priority)
          </h2>
          <div className="space-y-3">
            {tier1Programs.map((program) => (
              <a
                key={program.toolId}
                href={program.programUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-gray-800/50 rounded-xl p-4 border border-gray-700 hover:border-orange-500 transition group"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="bg-orange-500/20 text-orange-400 px-3 py-1 rounded text-sm font-semibold">
                      {program.commission}
                    </div>
                    <div>
                      <h3 className="font-semibold group-hover:text-orange-400 transition">{program.toolName}</h3>
                      <p className="text-gray-500 text-xs">{program.network} • {program.commissionType}</p>
                    </div>
                  </div>
                  <div className="bg-orange-600 group-hover:bg-orange-500 px-4 py-2 rounded-lg text-sm font-semibold transition">
                    Apply →
                  </div>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* Step 4: Tier 2 */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-purple-400 mb-4 flex items-center gap-2">
            <span className="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-lg">4</span>
            Apply to Tier 2 Programs (After Tier 1 Approval)
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {tier2Programs.map((program) => (
              <a
                key={program.toolId}
                href={program.programUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-gray-800/30 rounded-xl p-4 border border-gray-700 hover:border-purple-500 transition group"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium group-hover:text-purple-400 transition">{program.toolName}</h3>
                    <p className="text-gray-500 text-xs">{program.commission} • {program.network}</p>
                  </div>
                  <span className="text-purple-400 text-sm">Apply →</span>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* Step 5: Download Spreadsheet */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-pink-400 mb-4 flex items-center gap-2">
            <span className="bg-pink-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-lg">5</span>
            Download Tracking Spreadsheet
          </h2>
          <div className="bg-gray-800/50 rounded-xl p-5 border border-gray-700">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-semibold">Affiliate Tracking Spreadsheet</h3>
                <p className="text-gray-400 text-sm mt-1">Track applications, links, and revenue</p>
              </div>
              <a
                href="https://ai-directory-ebd6.vercel.app/download/affiliate-tracking-spreadsheet.xlsx"
                className="bg-pink-600 hover:bg-pink-500 px-6 py-3 rounded-lg font-semibold transition"
              >
                Download Excel →
              </a>
            </div>
          </div>
        </section>

        {/* Checklist Summary */}
        <section className="bg-gradient-to-r from-emerald-900/30 to-cyan-900/30 rounded-xl p-6 border border-emerald-700/50">
          <h2 className="text-xl font-bold text-white mb-4">✅ Quick Checklist</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" className="w-4 h-4 rounded" />
              <span className="text-gray-300">Signed up for PartnerStack</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" className="w-4 h-4 rounded" />
              <span className="text-gray-300">Signed up for ShareASale</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" className="w-4 h-4 rounded" />
              <span className="text-gray-300">Signed up for Impact</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" className="w-4 h-4 rounded" />
              <span className="text-gray-300">Created GA4 property</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" className="w-4 h-4 rounded" />
              <span className="text-gray-300">Applied to Jasper AI</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" className="w-4 h-4 rounded" />
              <span className="text-gray-300">Applied to Grammarly</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" className="w-4 h-4 rounded" />
              <span className="text-gray-300">Applied to Canva</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" className="w-4 h-4 rounded" />
              <span className="text-gray-300">Applied to Surfer SEO</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" className="w-4 h-4 rounded" />
              <span className="text-gray-300">Applied to Copy.ai</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" className="w-4 h-4 rounded" />
              <span className="text-gray-300">Downloaded tracking spreadsheet</span>
            </label>
          </div>
        </section>
      </main>
    </div>
  );
}
