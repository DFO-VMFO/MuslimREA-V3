import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { ArrowRight, Building2, Users, DollarSign, BarChart3, Network } from 'lucide-react';

const theme = {
  navy: '#0B1A30',
  gold: '#D4AF37',
  charcoal: '#333333',
  lightGray: '#F5F7FA',
};

const councils = [
  {
    slug: 'mwren',
    name: 'Muslim Women Real Estate Network',
    icon: <Network size={36} />,
    tagline: 'The official women\'s professional network of MREA.',
    description:
      'MWREN is the authorized women\'s division of MREA, dedicated to advancing Muslim women across residential, commercial, and investment real estate. Through mentorship, professional development, and peer community, MWREN ensures Muslim women have a protected, institutional space in the global real estate industry.',
    focus: ['Career Advancement & Mentorship', 'Women\'s Leadership Programming', 'Investment Education (Education-Focused)', 'Local Chapter Women\'s Networks'],
    membership: 'All membership tiers',
  },
  {
    slug: 'capital-network',
    name: 'MREA Capital Network',
    icon: <DollarSign size={36} />,
    tagline: 'Bridging faith-aligned capital with real estate opportunity.',
    description:
      'The MREA Capital Network connects institutional and private investors with vetted deal flow across North America, the Middle East, and beyond. Members gain access to co-investment opportunities, LP introductions, and exclusive capital forums — all structured within an ethical, Shariah-conscious framework.',
    focus: ['Private Equity & LP Deal Flow', 'Shariah-Compliant Financing', 'Cross-Border Investment Forums', 'Family Office Introductions'],
    membership: 'Senior Membership or above',
  },
  {
    slug: 'developer-council',
    name: 'Muslim Developer Council',
    icon: <Building2 size={36} />,
    tagline: 'A peer network for developers building the future.',
    description:
      'The Muslim Developer Council brings together ground-up developers, mixed-use builders, and commercial real estate operators to share intelligence, navigate entitlement challenges, and collaborate on large-scale projects. This council advocates for Muslim developers in policy spaces and national builder coalitions.',
    focus: ['Entitlement & Zoning Advocacy', 'Contractor & Lender Introductions', 'Joint Venture Structuring', 'National Policy Representation'],
    membership: 'Associate Membership or above',
  },
  {
    slug: 'family-office-circle',
    name: 'Muslim Family Office Circle',
    icon: <Users size={36} />,
    tagline: 'Preserving and growing generational wealth.',
    description:
      'An intimate, invite-only council for principals managing multi-generational family wealth. The Family Office Circle provides a confidential environment for peer exchange on portfolio strategy, estate planning, endowment structures, and waqf-inspired wealth preservation models.',
    focus: ['Generational Wealth Strategy', 'Waqf & Endowment Structures', 'Trust & Estate Planning', 'Discreet Peer Introductions'],
    membership: 'Invitation only — Senior Membership required',
  },
  {
    slug: 'investment-review-committee',
    name: 'Investment Review Committee',
    icon: <BarChart3 size={36} />,
    tagline: 'Rigorous analysis. Ethical diligence.',
    description:
      'The IRC serves as a peer review body evaluating investment opportunities submitted through the MREA network. It ensures that deals presented to the community meet standards of transparency, financial soundness, and ethical compliance — protecting members and building trust in the ecosystem.',
    focus: ['Underwriting & Due Diligence Standards', 'Ethical Compliance Review', 'Community Investment Vetting', 'Research & Market Analysis'],
    membership: 'Credentialed analysts & Senior Members',
  },
];

export default function CouncilsPage() {
  return (
    <div className="font-sans flex flex-col min-h-screen text-slate-900">
      <Navbar />
      <main className="flex-grow">
        {/* Header */}
        <div className="py-20 text-white" style={{ backgroundColor: theme.navy }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="uppercase tracking-[0.25em] text-xs font-bold block mb-4" style={{ color: theme.gold }}>
              Strategic Networks
            </span>
            <h1 className="text-5xl font-serif font-bold mb-5">MREA Councils</h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Four specialized councils connecting professionals, capital, and developers around shared goals — built on ethical leadership and institutional rigor.
            </p>
          </div>
        </div>

        {/* Councils Grid */}
        <div className="py-20" style={{ backgroundColor: theme.lightGray }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            {councils.map((council, i) => (
              <div key={council.slug} className={`bg-white rounded-sm shadow-md border border-gray-100 overflow-hidden grid grid-cols-1 lg:grid-cols-3 ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                {/* Color Accent Panel */}
                <div className="lg:col-span-1 p-10 flex flex-col justify-between" style={{ backgroundColor: i % 2 === 0 ? theme.navy : theme.charcoal }}>
                  <div>
                    <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6" style={{ backgroundColor: `${theme.gold}20`, color: theme.gold }}>
                      {council.icon}
                    </div>
                    <h2 className="text-2xl font-serif font-bold text-white mb-3">{council.name}</h2>
                    <p className="text-sm italic" style={{ color: theme.gold }}>{council.tagline}</p>
                  </div>
                  <div className="mt-8">
                    <div className="text-xs uppercase tracking-widest text-gray-400 mb-2">Eligibility</div>
                    <div className="text-sm text-gray-300">{council.membership}</div>
                  </div>
                </div>

                {/* Content Panel */}
                <div className="lg:col-span-2 p-10 flex flex-col justify-between">
                  <div>
                    <p className="text-gray-600 leading-relaxed text-base mb-8">{council.description}</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {council.focus.map(item => (
                        <div key={item} className="flex items-start gap-3">
                          <div className="mt-1 w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: theme.gold }}></div>
                          <span className="text-sm text-gray-700">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="mt-8 flex gap-4">
                    <Link href="/membership" className="inline-flex items-center gap-2 px-6 py-2 rounded-sm font-bold text-sm transition hover:opacity-90"
                          style={{ backgroundColor: theme.gold, color: theme.navy }}>
                      Apply for Access <ArrowRight className="w-4 h-4" />
                    </Link>
                    <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-2 rounded-sm font-bold text-sm border transition hover:bg-gray-50"
                          style={{ borderColor: theme.navy, color: theme.navy }}>
                      Contact Council
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="py-16 bg-white border-t border-gray-100 text-center">
          <div className="max-w-2xl mx-auto px-4">
            <h3 className="text-2xl font-serif font-bold mb-3" style={{ color: theme.navy }}>Ready to engage with a council?</h3>
            <p className="text-gray-500 mb-6">Council access is tied to your MREA membership tier. Upgrade your membership to unlock the right network for your goals.</p>
            <Link href="/membership" className="inline-block px-8 py-3 rounded-sm font-bold transition hover:opacity-90"
                  style={{ backgroundColor: theme.navy, color: 'white' }}>
              View Membership Tiers
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
