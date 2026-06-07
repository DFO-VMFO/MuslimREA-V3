import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'MREA Privacy Policy — how we collect, use, and protect your information.',
};

const theme = { navy: '#0B1A30', gold: '#D4AF37', lightGray: '#F5F7FA' };

const SECTIONS = [
  {
    title: 'Information We Collect',
    body: `When you interact with MREA's website, membership application, or event registrations, we may collect:

- Contact information: name, email address, phone number
- Professional information: company, title, real estate license number
- Payment information: processed securely through third-party payment processors (we do not store card data)
- Usage data: pages visited, time on site, browser type (collected anonymously via analytics)`,
  },
  {
    title: 'How We Use Your Information',
    body: `We use collected information to:

- Process membership applications and renewals
- Send chapter updates, event invitations, and MREA newsletters (you may opt out at any time)
- Administer council and committee participation
- Respond to inquiries submitted through our contact form
- Improve the website and member experience

We do not sell, rent, or trade your personal information to third parties.`,
  },
  {
    title: 'Communications',
    body: `By joining MREA or subscribing to our mailing list, you consent to receive Association communications. You may unsubscribe at any time using the link in any email, or by contacting us at admin@muslimrea.org.

MREA does not send unsolicited commercial messages (spam).`,
  },
  {
    title: 'Data Security',
    body: `We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction. However, no internet transmission is completely secure; we cannot guarantee the absolute security of data transmitted to our site.`,
  },
  {
    title: 'Third-Party Services',
    body: `MREA may use trusted third-party services for email delivery, payment processing, analytics, and event management. These providers are contractually obligated to protect your data and may not use it for their own purposes.`,
  },
  {
    title: 'Your Rights',
    body: `You have the right to:

- Access the personal data we hold about you
- Request correction of inaccurate data
- Request deletion of your data (subject to legal retention obligations)
- Opt out of marketing communications at any time

To exercise these rights, contact us at admin@muslimrea.org.`,
  },
  {
    title: 'Changes to This Policy',
    body: `MREA may update this Privacy Policy from time to time. We will post the revised policy on this page with the updated effective date. Continued use of our website or services after changes constitutes acceptance of the updated policy.`,
  },
];

export default function PrivacyPolicy() {
  return (
    <div className="font-sans flex flex-col min-h-screen text-slate-900">
      <Navbar />
      <main className="flex-grow">
        <div style={{ backgroundColor: theme.navy }} className="py-16 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <span className="uppercase tracking-[0.2em] text-xs font-bold block mb-3" style={{ color: theme.gold }}>Legal</span>
            <h1 className="text-4xl font-serif font-bold mb-2">Privacy Policy</h1>
            <p className="text-gray-400 text-sm">Effective Date: April 24, 2026 · Muslim Real Estate Association, a Texas Nonprofit Corporation</p>
          </div>
        </div>

        <div className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-slate max-w-none">
              <p className="text-gray-600 text-sm leading-relaxed mb-10">
                Muslim Real Estate Association (&quot;MREA,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website or engage with our Association.
              </p>
              <div className="space-y-10">
                {SECTIONS.map((s, i) => (
                  <div key={i}>
                    <h2 className="text-lg font-bold mb-3" style={{ color: theme.navy }}>{i + 1}. {s.title}</h2>
                    {s.body.split('\n\n').map((para, j) => (
                      para.startsWith('-') ? (
                        <ul key={j} className="list-disc list-inside text-gray-600 text-sm space-y-1 mb-3">
                          {para.split('\n').filter(l => l.startsWith('-')).map((line, k) => (
                            <li key={k}>{line.replace(/^-\s*/, '')}</li>
                          ))}
                        </ul>
                      ) : (
                        <p key={j} className="text-gray-600 text-sm leading-relaxed mb-3">{para}</p>
                      )
                    ))}
                  </div>
                ))}
              </div>
              <div className="mt-12 pt-8 border-t border-gray-200">
                <p className="text-gray-500 text-sm">For privacy-related questions, contact us at <a href="mailto:admin@muslimrea.org" className="underline">admin@muslimrea.org</a>.</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
