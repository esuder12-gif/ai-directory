export const metadata = {
  title: 'Terms of Service - AI Directory',
  description: 'Terms of Service for AI Directory - Rules and guidelines for using our platform.',
};

export default function TermsOfService() {
  return (
    <div style={{ minHeight: '100vh', background: '#fafafa' }}>
      <header style={{ position: 'sticky', top: 0, background: 'rgba(255,255,255,0.95)', backdropFilter: 'blur(10px)', borderBottom: '1px solid #eee', padding: '12px 24px', zIndex: 100 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{ width: 36, height: 36, background: 'linear-gradient(135deg, #6366f1, #8b5cf6)', borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: 18 }}>⚡</div>
          <span style={{ fontWeight: 700, fontSize: 22 }}>AI Directory</span>
        </div>
      </header>

      <main style={{ maxWidth: 800, margin: '0 auto', padding: '40px 24px' }}>
        <h1 style={{ fontSize: 36, fontWeight: 800, marginBottom: 8 }}>Terms of Service</h1>
        <p style={{ color: '#666', marginBottom: 40 }}>Last updated: March 22, 2026</p>

        <div style={{ background: 'white', borderRadius: 16, padding: 32, boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
          <Section title="1. Acceptance of Terms">
            <p>By accessing and using AI Directory ("the Service"), you accept and agree to be bound by the terms and provisions of this agreement. If you do not agree to these terms, please do not use the Service.</p>
          </Section>

          <Section title="2. Description of Service">
            <p>AI Directory is a curated directory of AI tools and resources. We provide:</p>
            <ul style={{ marginTop: 12, paddingLeft: 20 }}>
              <li>Tool listings and categories</li>
              <li>User reviews and ratings</li>
              <li>Blog content about AI tools</li>
              <li>Premium subscription features</li>
              <li>Sponsorship and advertising opportunities</li>
            </ul>
          </Section>

          <Section title="3. User Accounts">
            <p>When you create an account or subscribe to our services:</p>
            <ul style={{ marginTop: 12, paddingLeft: 20 }}>
              <li>You are responsible for maintaining the security of your account</li>
              <li>You must provide accurate and complete information</li>
              <li>You may not use the Service for any illegal purpose</li>
              <li>We reserve the right to suspend or terminate accounts that violate these terms</li>
            </ul>
          </Section>

          <Section title="4. Content Guidelines">
            <p>When submitting tools, writing reviews, or creating content:</p>
            <ul style={{ marginTop: 12, paddingLeft: 20 }}>
              <li>Content must be accurate and not misleading</li>
              <li>Content must not infringe on any third party's intellectual property</li>
              <li>Content must not contain offensive, illegal, or harmful material</li>
              <li>Content must not contain spam or promotional abuse</li>
              <li>We reserve the right to remove any content that violates these guidelines</li>
            </ul>
          </Section>

          <Section title="5. Paid Services">
            <p>For premium subscriptions, sponsorships, and paid features:</p>
            <ul style={{ marginTop: 12, paddingLeft: 20 }}>
              <li>All payments are processed securely through Stripe</li>
              <li>Prices are displayed in USD and may be subject to change</li>
              <li>Refunds are available within 7 days of purchase for monthly subscriptions</li>
              <li>Annual subscriptions may be refunded within 14 days</li>
              <li>Sponsorship fees are non-refundable once the campaign has begun</li>
            </ul>
          </Section>

          <Section title="6. Affiliate Disclosure">
            <p>AI Directory participates in affiliate marketing programs. Some links on this website are affiliate links, meaning we may earn a commission if you click through and make a purchase or sign up. This comes at no additional cost to you and helps support our website.</p>
          </Section>

          <Section title="7. Intellectual Property">
            <p>All content on AI Directory, including text, graphics, logos, and software, is the property of AI Directory or its content suppliers and is protected by intellectual property laws. You may not reproduce, distribute, or create derivative works without express written permission.</p>
          </Section>

          <Section title="8. Third-Party Links">
            <p>Our Service contains links to third-party websites. We are not responsible for the content, privacy policies, or practices of any third-party sites. We encourage you to read the terms and privacy policies of each third-party site you visit.</p>
          </Section>

          <Section title="9. Disclaimer of Warranties">
            <p>THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED. WE DO NOT WARRANT THAT THE SERVICE WILL BE UNINTERRUPTED, ERROR-FREE, OR FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS.</p>
          </Section>

          <Section title="10. Limitation of Liability">
            <p>IN NO EVENT SHALL AI DIRECTORY BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES ARISING OUT OF OR RELATED TO YOUR USE OF THE SERVICE, WHETHER BASED ON WARRANTY, CONTRACT, TORT, OR ANY OTHER LEGAL THEORY.</p>
          </Section>

          <Section title="11. Indemnification">
            <p>You agree to indemnify and hold harmless AI Directory and its officers, directors, employees, and agents from any claims, damages, losses, and expenses arising out of your use of the Service or violation of these Terms.</p>
          </Section>

          <Section title="12. Changes to Terms">
            <p>We reserve the right to modify these Terms at any time. We will notify users of significant changes via email or through the Service. Your continued use of the Service after any modifications indicates your acceptance of the new Terms.</p>
          </Section>

          <Section title="13. Governing Law">
            <p>These Terms shall be governed by and construed in accordance with the laws of the United States, without regard to its conflict of law provisions.</p>
          </Section>

          <Section title="14. Contact Us">
            <p>If you have any questions about these Terms, please contact us at:</p>
            <p style={{ marginTop: 12 }}><strong>Email:</strong> contact@aidirectory.com</p>
          </Section>
        </div>

        <div style={{ marginTop: 24, textAlign: 'center' }}>
          <a href="/" style={{ color: '#6366f1', fontWeight: 600, textDecoration: 'none' }}>← Back to Home</a>
        </div>
      </main>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: 32 }}>
      <h2 style={{ fontSize: 20, fontWeight: 700, marginBottom: 12, color: '#333' }}>{title}</h2>
      <div style={{ color: '#555', fontSize: 15, lineHeight: 1.7 }}>{children}</div>
    </div>
  );
}
