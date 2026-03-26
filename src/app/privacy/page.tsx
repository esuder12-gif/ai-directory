export const metadata = {
  title: 'Privacy Policy - AI Directory',
  description: 'Privacy Policy for AI Directory - Learn how we collect, use, and protect your data.',
};

export default function PrivacyPolicy() {
  return (
    <div style={{ minHeight: '100vh', background: '#fafafa' }}>
      <header style={{ position: 'sticky', top: 0, background: 'rgba(255,255,255,0.95)', backdropFilter: 'blur(10px)', borderBottom: '1px solid #eee', padding: '12px 24px', zIndex: 100 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{ width: 36, height: 36, background: 'linear-gradient(135deg, #6366f1, #8b5cf6)', borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: 18 }}>⚡</div>
          <span style={{ fontWeight: 700, fontSize: 22 }}>AI Directory</span>
        </div>
      </header>

      <main style={{ maxWidth: 800, margin: '0 auto', padding: '40px 24px' }}>
        <h1 style={{ fontSize: 36, fontWeight: 800, marginBottom: 8 }}>Privacy Policy</h1>
        <p style={{ color: '#666', marginBottom: 40 }}>Last updated: March 22, 2026</p>

        <div style={{ background: 'white', borderRadius: 16, padding: 32, boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
          <Section title="1. Information We Collect">
            <p>We collect information you provide directly to us, such as when you subscribe to our newsletter, submit a tool, or contact us. This may include:</p>
            <ul style={{ marginTop: 12, paddingLeft: 20 }}>
              <li>Email address</li>
              <li>Name (optional)</li>
              <li>Website URLs (for tool submissions)</li>
              <li>Any other information you choose to provide</li>
            </ul>
          </Section>

          <Section title="2. How We Use Your Information">
            <p>We use the information we collect to:</p>
            <ul style={{ marginTop: 12, paddingLeft: 20 }}>
              <li>Send you our newsletter and updates about AI tools</li>
              <li>Process tool submissions and sponsorships</li>
              <li>Respond to your comments, questions, and requests</li>
              <li>Improve our website and user experience</li>
              <li>Send you promotional communications (with your consent)</li>
            </ul>
          </Section>

          <Section title="3. Cookies and Tracking">
            <p>We use cookies and similar tracking technologies to:</p>
            <ul style={{ marginTop: 12, paddingLeft: 20 }}>
              <li>Remember your preferences (favorites, settings)</li>
              <li>Analyze site traffic through Google Analytics</li>
              <li>Display relevant advertisements through Google AdSense</li>
            </ul>
            <p style={{ marginTop: 12 }}>You can control cookies through your browser settings.</p>
          </Section>

          <Section title="4. Third-Party Services">
            <p>We use the following third-party services that may collect your information:</p>
            <ul style={{ marginTop: 12, paddingLeft: 20 }}>
              <li><strong>Google AdSense</strong> - For displaying advertisements</li>
              <li><strong>Google Analytics</strong> - For analyzing website traffic</li>
              <li><strong>Stripe</strong> - For processing payments (sponsorships, premium)</li>
            </ul>
            <p style={{ marginTop: 12 }}>These services have their own privacy policies governing their use of your data.</p>
          </Section>

          <Section title="5. Data Security">
            <p>We implement appropriate security measures to protect your personal information. However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.</p>
          </Section>

          <Section title="6. Your Rights">
            <p>You have the right to:</p>
            <ul style={{ marginTop: 12, paddingLeft: 20 }}>
              <li>Access the personal data we hold about you</li>
              <li>Request correction of inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Unsubscribe from our newsletter at any time</li>
              <li>Opt out of personalized advertising</li>
            </ul>
          </Section>

          <Section title="7. Children's Privacy">
            <p>Our website is not intended for children under 13. We do not knowingly collect personal information from children under 13. If you believe we have collected information from a child, please contact us.</p>
          </Section>

          <Section title="8. Changes to This Policy">
            <p>We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.</p>
          </Section>

          <Section title="9. Contact Us">
            <p>If you have any questions about this Privacy Policy, please contact us at:</p>
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
