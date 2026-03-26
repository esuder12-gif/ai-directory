import { affiliatePrograms, affiliateNetworks } from '@/lib/data';

export default function AffiliateResourcesPage() {
  const tier1Programs = affiliatePrograms.filter(p => p.priority === 1);
  const tier2Programs = affiliatePrograms.filter(p => p.priority === 2);
  const tier3Programs = affiliatePrograms.filter(p => p.priority === 3);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      {/* Header */}
      <header className="bg-gray-900/50 border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                Affiliate Program Resources
              </h1>
              <p className="text-gray-400 mt-1">Apply to AI tool affiliate programs and earn commissions</p>
            </div>
            <a href="/" className="text-gray-300 hover:text-white transition">
              ← Back to Directory
            </a>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
            <div className="text-3xl font-bold text-emerald-400">{affiliatePrograms.length}</div>
            <div className="text-gray-400 text-sm">Active Programs</div>
          </div>
          <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
            <div className="text-3xl font-bold text-cyan-400">{affiliateNetworks.length}</div>
            <div className="text-gray-400 text-sm">Affiliate Networks</div>
          </div>
          <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
            <div className="text-3xl font-bold text-purple-400">45%</div>
            <div className="text-gray-400 text-sm">Highest Commission</div>
          </div>
          <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
            <div className="text-3xl font-bold text-pink-400">$781+</div>
            <div className="text-gray-400 text-sm">Est. Monthly Potential</div>
          </div>
        </div>

        {/* Application Checklist */}
        <div className="bg-gradient-to-r from-emerald-900/30 to-cyan-900/30 rounded-xl p-6 border border-emerald-700/50 mb-8">
          <h2 className="text-xl font-semibold text-emerald-400 mb-4">📋 Application Checklist</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="text-emerald-400">✅</span>
                <span className="text-gray-300">Website URL: <code className="text-cyan-400">https://ai-directory-ebd6.vercel.app</code></span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-emerald-400">✅</span>
                <span className="text-gray-300">Niche: AI Tools Directory</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-emerald-400">✅</span>
                <span className="text-gray-300">Content: Reviews, Comparisons, Guides</span>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="text-gray-400">⬜</span>
                <span className="text-gray-300">Prepare PayPal email for payments</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-gray-400">⬜</span>
                <span className="text-gray-300">Set up affiliate network accounts</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-gray-400">⬜</span>
                <span className="text-gray-300">Track applications in spreadsheet</span>
              </div>
            </div>
          </div>
        </div>

        {/* Tier 1 - High Priority */}
        <section className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-2xl">🔥</span>
            <h2 className="text-xl font-semibold text-white">Tier 1 - Apply First (Highest ROI)</h2>
            <span className="bg-red-500/20 text-red-400 text-xs px-2 py-1 rounded">Priority</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {tier1Programs.map((program) => (
              <div key={program.toolId} className="bg-gray-800/50 rounded-xl p-5 border border-gray-700 hover:border-emerald-500/50 transition">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-semibold text-white">{program.toolName}</h3>
                  <span className="bg-emerald-500/20 text-emerald-400 text-xs px-2 py-1 rounded">{program.commission}</span>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between text-gray-400">
                    <span>Type:</span>
                    <span className="text-gray-300">{program.commissionType}</span>
                  </div>
                  <div className="flex justify-between text-gray-400">
                    <span>Cookie:</span>
                    <span className="text-gray-300">{program.cookieDays} days</span>
                  </div>
                  <div className="flex justify-between text-gray-400">
                    <span>Min Payout:</span>
                    <span className="text-gray-300">{program.minPayout}</span>
                  </div>
                  <div className="flex justify-between text-gray-400">
                    <span>Network:</span>
                    <span className="text-gray-300">{program.network}</span>
                  </div>
                  <div className="text-gray-400 text-xs mt-2 pt-2 border-t border-gray-700">
                    💰 {program.estimatedEarnings}
                  </div>
                </div>
                <a
                  href={program.programUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 block text-center bg-emerald-600 hover:bg-emerald-700 text-white py-2 px-4 rounded-lg transition text-sm"
                >
                  Apply Now →
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Tier 2 - Medium Priority */}
        <section className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-2xl">⭐</span>
            <h2 className="text-xl font-semibold text-white">Tier 2 - Apply Next</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {tier2Programs.map((program) => (
              <div key={program.toolId} className="bg-gray-800/50 rounded-xl p-5 border border-gray-700 hover:border-cyan-500/50 transition">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-semibold text-white">{program.toolName}</h3>
                  <span className="bg-cyan-500/20 text-cyan-400 text-xs px-2 py-1 rounded">{program.commission}</span>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between text-gray-400">
                    <span>Type:</span>
                    <span className="text-gray-300">{program.commissionType}</span>
                  </div>
                  <div className="flex justify-between text-gray-400">
                    <span>Cookie:</span>
                    <span className="text-gray-300">{program.cookieDays} days</span>
                  </div>
                  <div className="flex justify-between text-gray-400">
                    <span>Network:</span>
                    <span className="text-gray-300">{program.network}</span>
                  </div>
                  <div className="text-gray-400 text-xs mt-2 pt-2 border-t border-gray-700">
                    💰 {program.estimatedEarnings}
                  </div>
                </div>
                <a
                  href={program.programUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 block text-center bg-cyan-600 hover:bg-cyan-700 text-white py-2 px-4 rounded-lg transition text-sm"
                >
                  Apply Now →
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Tier 3 - Good to Have */}
        <section className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-2xl">📋</span>
            <h2 className="text-xl font-semibold text-white">Tier 3 - Additional Programs</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {tier3Programs.map((program) => (
              <div key={program.toolId} className="bg-gray-800/30 rounded-xl p-4 border border-gray-700 hover:border-purple-500/50 transition">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-medium text-white text-sm">{program.toolName}</h3>
                  <span className="bg-purple-500/20 text-purple-400 text-xs px-2 py-0.5 rounded">{program.commission}</span>
                </div>
                <p className="text-gray-500 text-xs mb-2">{program.notes}</p>
                <a
                  href={program.programUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-400 hover:text-purple-300 text-xs"
                >
                  Apply →
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Affiliate Networks */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-white mb-4">🌐 Join These Affiliate Networks</h2>
          <p className="text-gray-400 mb-4">Sign up for these networks to access multiple affiliate programs from a single dashboard:</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {affiliateNetworks.map((network) => (
              <div key={network.name} className={`rounded-xl p-5 border ${network.recommended ? 'bg-emerald-900/20 border-emerald-700/50' : 'bg-gray-800/50 border-gray-700'}`}>
                <div className="flex items-center gap-2 mb-3">
                  <h3 className="font-semibold text-white">{network.name}</h3>
                  {network.recommended && <span className="text-emerald-400 text-xs">★ Recommended</span>}
                </div>
                <div className="text-gray-400 text-sm mb-3">
                  <strong className="text-gray-300">Tools:</strong> {network.tools.join(', ')}
                </div>
                <ul className="text-gray-500 text-xs space-y-1 mb-3">
                  {network.benefits.map((benefit, i) => (
                    <li key={i}>• {benefit}</li>
                  ))}
                </ul>
                <a
                  href={network.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block text-center py-2 px-4 rounded-lg transition text-sm ${network.recommended ? 'bg-emerald-600 hover:bg-emerald-700 text-white' : 'bg-gray-700 hover:bg-gray-600 text-gray-300'}`}
                >
                  Sign Up →
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Application Email Template */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-white mb-4">📧 Application Email Template</h2>
          <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700 font-mono text-sm">
            <div className="text-gray-400 mb-2">Subject: Affiliate Program Application - AI Tools Directory</div>
            <div className="text-gray-300 mt-4 whitespace-pre-wrap">
{`Dear Affiliate Team,

I am writing to apply for your affiliate program. I operate the AI Tools Directory (https://ai-directory-ebd6.vercel.app), a curated platform showcasing the best AI tools for creators, developers, and businesses.

About Our Platform:
- Comprehensive directory of 50+ AI tools
- Detailed reviews and comparisons
- Growing monthly traffic
- Target audience: tech professionals, creators, and businesses

Our Promotion Strategy:
- Feature your tool in relevant categories
- Create dedicated review content
- Social media promotion across platforms
- Newsletter mentions to our subscriber base

We would love to partner with you and help drive quality signups to your platform.

Best regards,
[Your Name]
AI Tools Directory
https://ai-directory-ebd6.vercel.app`}
            </div>
          </div>
        </section>

        {/* Revenue Calculator */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-white mb-4">💰 Potential Earnings Calculator</h2>
          <div className="bg-gradient-to-r from-purple-900/30 to-pink-900/30 rounded-xl p-6 border border-purple-700/50">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-gray-400 border-b border-gray-700">
                  <th className="text-left py-2">Monthly Traffic</th>
                  <th className="text-right py-2">Ad Revenue</th>
                  <th className="text-right py-2">Affiliate Revenue</th>
                  <th className="text-right py-2">Total Potential</th>
                </tr>
              </thead>
              <tbody className="text-gray-300">
                <tr className="border-b border-gray-700/50">
                  <td className="py-2">1,000 visitors</td>
                  <td className="text-right">$5-15</td>
                  <td className="text-right">$20-50</td>
                  <td className="text-right text-emerald-400">$25-65</td>
                </tr>
                <tr className="border-b border-gray-700/50">
                  <td className="py-2">10,000 visitors</td>
                  <td className="text-right">$50-150</td>
                  <td className="text-right">$200-500</td>
                  <td className="text-right text-emerald-400">$250-650</td>
                </tr>
                <tr className="border-b border-gray-700/50">
                  <td className="py-2">50,000 visitors</td>
                  <td className="text-right">$250-750</td>
                  <td className="text-right">$1,000-2,500</td>
                  <td className="text-right text-emerald-400">$1,250-3,250</td>
                </tr>
                <tr className="border-b border-gray-700/50">
                  <td className="py-2">100,000 visitors</td>
                  <td className="text-right">$500-1,500</td>
                  <td className="text-right">$2,000-5,000</td>
                  <td className="text-right text-emerald-400">$2,500-6,500</td>
                </tr>
                <tr>
                  <td className="py-2">500,000 visitors</td>
                  <td className="text-right">$2,500-7,500</td>
                  <td className="text-right">$10,000-25,000</td>
                  <td className="text-right text-emerald-400 font-bold">$12,500-32,500</td>
                </tr>
              </tbody>
            </table>
            <p className="text-gray-500 text-xs mt-4">* Estimates based on 1% conversion rate and average commission rates</p>
          </div>
        </section>

        {/* Next Steps */}
        <section className="bg-gray-800/30 rounded-xl p-6 border border-gray-700">
          <h2 className="text-xl font-semibold text-white mb-4">🚀 Next Steps</h2>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <span className="bg-emerald-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">1</span>
              <div>
                <h3 className="text-white font-medium">Sign up for PartnerStack</h3>
                <p className="text-gray-400 text-sm">This single network gives you access to Jasper, Copy.ai, Surfer SEO, Notion, ElevenLabs, and HeyGen</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="bg-emerald-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">2</span>
              <div>
                <h3 className="text-white font-medium">Apply to Grammarly via ShareASale</h3>
                <p className="text-gray-400 text-sm">Grammarly has the highest conversion rate and $25 per signup</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="bg-emerald-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">3</span>
              <div>
                <h3 className="text-white font-medium">Apply to Canva via Impact</h3>
                <p className="text-gray-400 text-sm">$36 flat commission with massive brand recognition</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="bg-emerald-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">4</span>
              <div>
                <h3 className="text-white font-medium">Track all applications</h3>
                <p className="text-gray-400 text-sm">Create a spreadsheet to track: Tool, Date Applied, Status, Approval Date, Affiliate Link</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="bg-emerald-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">5</span>
              <div>
                <h3 className="text-white font-medium">Update affiliate links in your directory</h3>
                <p className="text-gray-400 text-sm">Once approved, update your data.ts with real affiliate tracking links</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
