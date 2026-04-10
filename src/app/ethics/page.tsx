import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';

const theme = {
  navy: '#0B1A30',
  gold: '#D4AF37',
  charcoal: '#333333',
  lightGray: '#F5F7FA'
};

export const metadata = {
  title: 'Ethics & Standards | MREA',
  description: 'The Muslim Real Estate Association ethics framework governing member conduct, financial integrity, and professional standards.'
};

const STANDARDS = [
  {
    number: '01',
    title: 'Non-Solicitation for Personal Enrichment',
    body: `MREA members and officers shall not use their position, title, or access to the MREA membership network to solicit business, referrals, or investment capital for the personal financial gain of any individual, without full disclosure to and approval by the relevant chapter or national leadership.

The MREA platform exists to serve its members collectively. Any commercial or referral activity conducted through MREA channels must remain transparent, mutually beneficial, and fully disclosed.`
  },
  {
    number: '02',
    title: 'Prohibition on Misrepresenting MREA\'s Role in Private Transactions',
    body: `No member, officer, or affiliate may represent MREA as a direct party, guarantor, or underwriter in any private real estate transaction, investment offering, or business deal. The Association does not invest, co-invest, or underwrite individual member transactions.

Any representation that implies MREA's institutional endorsement, financial backing, or co-participation in a private deal is a violation of these standards and grounds for immediate membership suspension pending review.`
  },
  {
    number: '03',
    title: 'Financial Oversight & Accountability',
    body: `All funds received in MREA's name — including dues, event revenue, sponsorships, and donations — must be deposited into MREA-approved, auditable accounts maintained in the name of the Association.

MREA provides annual financial summaries to its membership as a condition of its status as a 501(c)(6) trade organization. Officers and chapter treasurers are required to maintain accurate records and cooperate fully with any audit or financial review requested by national leadership.`
  },
  {
    number: '04',
    title: 'Conflicts of Interest',
    body: `Members in leadership positions (board directors, chapter presidents, committee chairs) must disclose any material conflict of interest that may affect decisions made on behalf of MREA. Disclosure must be made to the board in writing prior to any vote or decision where the conflict is present.

Failure to disclose a material conflict of interest is grounds for removal from leadership and membership review.`
  },
  {
    number: '05',
    title: 'Confidentiality of Member Information',
    body: `Member contact information, business dealings, financial information, and any data shared within MREA's private platforms or events is confidential. Members may not distribute, sell, or misuse this data outside the context of MREA-approved activities.

Violations of member confidentiality will be reviewed by the Ethics Committee and may result in suspension or permanent removal from the Association.`
  },
  {
    number: '06',
    title: 'Reporting & Enforcement',
    body: `Any member who believes a violation of these Ethics & Standards has occurred may report the matter confidentially to the MREA Ethics Committee or national board. Reports will be reviewed within 30 days. All parties to a review are entitled to respond in writing before any disciplinary action is taken.

MREA is committed to fair process. Retaliation against any member for making a good-faith ethics report is itself a violation of these standards.`
  }
];

export default function Ethics() {
  return (
    <div className="font-sans flex flex-col min-h-screen text-slate-900">
      <Navbar />
      <main className="flex-grow">

        {/* Hero */}
        <div style={{ backgroundColor: theme.navy }} className="py-16 text-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <span className="uppercase tracking-[0.2em] text-xs font-bold block mb-3" style={{ color: theme.gold }}>Member Standards</span>
            <h1 className="text-4xl font-serif font-bold mb-4">Ethics &amp; Standards</h1>
            <p className="text-gray-300 max-w-2xl text-lg leading-relaxed">
              The MREA ethical framework governing professional conduct, financial integrity, and member accountability across all chapters and national divisions.
            </p>
          </div>
        </div>

        {/* Preamble */}
        <div style={{ backgroundColor: theme.gold }} className="py-6">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="font-bold text-sm uppercase tracking-[0.2em]" style={{ color: theme.navy }}>
              Grounded in Adl (Fairness), Amanah (Integrity), and Khilafah (Stewardship)
            </p>
          </div>
        </div>

        {/* Intro */}
        <div className="bg-white py-14">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-gray-700 leading-relaxed mb-4">
                MREA — the Muslim Real Estate Association — is a 501(c)(6) nonprofit professional trade association incorporated in the State of Texas. As a membership organization serving real estate professionals globally, MREA requires that all members, officers, directors, chapter leaders, and affiliates adhere to the following standards of professional conduct.
              </p>
              <p className="text-gray-700 leading-relaxed">
                These standards are not merely procedural — they reflect MREA&apos;s foundational commitment to Islamic principles of justice, trustworthiness, and responsible stewardship of community resources. They apply to all members regardless of their faith background.
              </p>
            </div>
          </div>
        </div>

        {/* Standards */}
        <div className="pb-24" style={{ backgroundColor: theme.lightGray }}>
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 space-y-8">
            {STANDARDS.map((s) => (
              <div key={s.number} className="bg-white rounded-sm shadow-sm border border-gray-100 overflow-hidden">
                <div className="flex items-start gap-6 p-8">
                  <div className="text-5xl font-serif font-bold opacity-10 shrink-0 leading-none" style={{ color: theme.navy }}>{s.number}</div>
                  <div>
                    <h2 className="text-xl font-bold mb-4" style={{ color: theme.navy }}>{s.title}</h2>
                    {s.body.split('\n\n').map((para, i) => (
                      <p key={i} className="text-gray-600 leading-relaxed mb-3 last:mb-0 text-sm">{para}</p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Footer CTA */}
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
            <div className="rounded-sm p-8 text-center" style={{ backgroundColor: theme.navy }}>
              <h3 className="text-xl font-serif font-bold text-white mb-2">Questions About These Standards?</h3>
              <p className="text-gray-400 text-sm mb-6">Contact the MREA Ethics Committee or national board with any questions or to report a concern in confidence.</p>
              <div className="flex flex-wrap gap-3 justify-center">
                <Link href="/contact" className="px-6 py-3 rounded-sm font-bold text-sm transition hover:opacity-90" style={{ backgroundColor: theme.gold, color: theme.navy }}>
                  Contact MREA
                </Link>
                <Link href="/about" className="px-6 py-3 rounded-sm font-bold text-sm border border-gray-500 text-gray-300 hover:border-gray-300 transition">
                  Board of Directors
                </Link>
              </div>
            </div>
          </div>
        </div>

      </main>
      <Footer />
    </div>
  );
}
