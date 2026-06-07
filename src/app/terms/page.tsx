import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'MREA Terms of Service — conditions governing use of this website and Association membership.',
};

const theme = { navy: '#0B1A30', gold: '#D4AF37', lightGray: '#F5F7FA' };

const SECTIONS = [
  {
    title: 'Acceptance of Terms',
    body: `By accessing or using the MREA website (muslimrea.org), you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use this website.`,
  },
  {
    title: 'Use of This Website',
    body: `This website is provided for informational purposes and to facilitate MREA membership, chapter engagement, and professional networking. You agree not to:

- Use this site for any unlawful purpose
- Attempt to gain unauthorized access to any portion of the site or its infrastructure
- Transmit spam, malware, or harmful content
- Misrepresent your identity or affiliation with MREA`,
  },
  {
    title: 'Membership Terms',
    body: `MREA membership is subject to separate terms communicated at the time of application, including the MREA Ethics & Standards. Membership dues are non-refundable unless MREA determines otherwise in writing. MREA reserves the right to suspend or revoke membership for violations of its ethics standards or these terms.`,
  },
  {
    title: 'No Investment Advice',
    body: `Nothing on this website constitutes investment advice, legal advice, or financial planning services. MREA is a 501(c)(6) trade association. Content related to real estate markets, investment strategies, or deal flow is provided for general informational and educational purposes only.

Members and visitors should consult qualified professionals before making any investment or legal decisions.`,
  },
  {
    title: 'Not a Securities Dealer',
    body: `MREA is not a registered broker-dealer, investment advisor, or securities dealer. MREA does not facilitate, underwrite, or guarantee any investment transaction. Any investment activity discussed within MREA's network is conducted entirely by individual members acting on their own behalf.`,
  },
  {
    title: 'Intellectual Property',
    body: `All content on this website — including text, images, logos, and design — is the property of the Muslim Real Estate Association or its licensors. You may not reproduce, distribute, or create derivative works without written permission from MREA.`,
  },
  {
    title: 'Disclaimer of Warranties',
    body: `This website is provided "as is" without warranties of any kind, express or implied. MREA does not warrant that the site will be uninterrupted, error-free, or free of viruses or harmful components.`,
  },
  {
    title: 'Limitation of Liability',
    body: `To the maximum extent permitted by law, MREA shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of this website or reliance on any content herein.`,
  },
  {
    title: 'Governing Law',
    body: `These Terms of Service are governed by the laws of the State of Texas, without regard to conflict of law provisions. Any disputes shall be resolved in the courts of competent jurisdiction in Texas.`,
  },
  {
    title: 'Changes to These Terms',
    body: `MREA reserves the right to update these Terms of Service at any time. Updates will be posted on this page. Continued use of the website after changes constitutes acceptance of the updated terms.`,
  },
];

export default function Terms() {
  return (
    <div className="font-sans flex flex-col min-h-screen text-slate-900">
      <Navbar />
      <main className="flex-grow">
        <div style={{ backgroundColor: theme.navy }} className="py-16 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <span className="uppercase tracking-[0.2em] text-xs font-bold block mb-3" style={{ color: theme.gold }}>Legal</span>
            <h1 className="text-4xl font-serif font-bold mb-2">Terms of Service</h1>
            <p className="text-gray-400 text-sm">Effective Date: April 24, 2026 · Muslim Real Estate Association, a Texas Nonprofit Corporation</p>
          </div>
        </div>

        <div className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-10">
              {SECTIONS.map((s, i) => (
                <div key={i}>
                  <h2 className="text-lg font-bold mb-3" style={{ color: theme.navy }}>{i + 1}. {s.title}</h2>
                  {s.body.split('\n\n').map((para, j) => (
                    para.includes('\n-') || para.startsWith('-') ? (
                      <ul key={j} className="list-disc list-inside text-gray-600 text-sm space-y-1 mb-3">
                        {para.split('\n').filter(l => l.trim().startsWith('-')).map((line, k) => (
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
              <p className="text-gray-500 text-sm">Questions about these terms? Contact us at <a href="mailto:admin@muslimrea.org" className="underline">admin@muslimrea.org</a>.</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
