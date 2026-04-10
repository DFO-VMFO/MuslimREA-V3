import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { FileText, BookOpen, BarChart2, ArrowRight, Download } from 'lucide-react';

const theme = {
  navy: '#0B1A30',
  gold: '#D4AF37',
  charcoal: '#333333',
  lightGray: '#F5F7FA',
};

const pressReleases = [
  { date: 'March 2026', title: 'MREA Launches Four Strategic Councils to Serve Global Muslim Real Estate Community', tag: 'Announcement' },
  { date: 'February 2026', title: 'Muslim Women Real Estate Alliance Officially Established as MREA Division', tag: 'Division Launch' },
  { date: 'January 2026', title: 'MREA Expands to 50 Chapters Across North America, MENA, and Europe', tag: 'Growth' },
];

const research = [
  { title: 'Muslim Homeownership Report 2026', desc: 'Analysis of homeownership rates, barriers, and trends among Muslim households in the United States.', tag: 'Market Research' },
  { title: 'Halal Real Estate Financing: A Practitioner\'s Guide', desc: 'Overview of Shariah-compliant mortgage structures, accessibility, and lender landscape in 2026.', tag: 'Finance' },
  { title: 'Community Wealth Gap: Muslim Americans & Real Estate Equity', desc: 'Data-driven report on wealth disparities and policy recommendations for community advocacy.', tag: 'Policy' },
];

const education = [
  { title: 'Real Estate Licensing Prep Resources', desc: 'Links and guides for members pursuing their first real estate license.', icon: <BookOpen size={20} /> },
  { title: 'CE Credits & Continuing Education', desc: 'Accredited continuing education courses available to MREA members.', icon: <BookOpen size={20} /> },
  { title: 'Investment Fundamentals Series', desc: 'Member-only video series covering buy-and-hold, commercial, and syndication basics.', icon: <BarChart2 size={20} /> },
  { title: 'Fair Housing & Ethics Training', desc: 'Annual certification recommended for all active MREA members.', icon: <FileText size={20} /> },
];

export default function ResourcesPage() {
  return (
    <div className="font-sans flex flex-col min-h-screen text-slate-900">
      <Navbar />
      <main className="flex-grow">

        {/* Header */}
        <div className="py-20 text-white" style={{ backgroundColor: theme.navy }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="uppercase tracking-[0.25em] text-xs font-bold block mb-4" style={{ color: theme.gold }}>
              Knowledge Hub
            </span>
            <h1 className="text-5xl font-serif font-bold mb-5">Resources</h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Media, industry research, and educational materials to support Muslim real estate professionals at every stage of their career.
            </p>
          </div>
        </div>

        {/* Section Nav */}
        <div className="bg-white border-b border-gray-200 sticky top-20 z-40">
          <div className="max-w-5xl mx-auto px-4 flex gap-8 overflow-x-auto">
            {[
              { label: 'Media & Press', href: '#media' },
              { label: 'Industry Research', href: '#research' },
              { label: 'Educational Materials', href: '#education' },
            ].map(tab => (
              <a key={tab.href} href={tab.href} className="py-4 font-bold text-sm uppercase tracking-wide whitespace-nowrap text-gray-500 hover:text-gray-900 border-b-2 border-transparent hover:border-gray-400 transition">
                {tab.label}
              </a>
            ))}
          </div>
        </div>

        {/* Media & Press */}
        <div id="media" className="py-20 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 mb-10">
              <FileText className="w-6 h-6" style={{ color: theme.gold }} />
              <h2 className="text-2xl font-serif font-bold" style={{ color: theme.navy }}>Media & Press Releases</h2>
            </div>
            <div className="space-y-5">
              {pressReleases.map((item, i) => (
                <div key={i} className="bg-slate-50 border border-gray-100 rounded-sm p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-xs font-bold px-2 py-1 rounded uppercase tracking-wider" style={{ backgroundColor: `${theme.gold}20`, color: theme.charcoal }}>{item.tag}</span>
                      <span className="text-xs text-gray-400">{item.date}</span>
                    </div>
                    <h3 className="font-semibold text-slate-900 leading-snug">{item.title}</h3>
                  </div>
                  <button className="flex items-center gap-2 text-sm font-bold whitespace-nowrap" style={{ color: theme.gold }}>
                    Read More <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
            <div className="mt-8 text-center">
              <p className="text-gray-500 text-sm mb-3">Press inquiries?</p>
              <Link href="/contact" className="text-sm font-bold hover:underline" style={{ color: theme.navy }}>Contact our communications team →</Link>
            </div>
          </div>
        </div>

        {/* Industry Research */}
        <div id="research" className="py-20" style={{ backgroundColor: theme.lightGray }}>
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 mb-10">
              <BarChart2 className="w-6 h-6" style={{ color: theme.gold }} />
              <h2 className="text-2xl font-serif font-bold" style={{ color: theme.navy }}>Industry Research</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {research.map((item, i) => (
                <div key={i} className="bg-white p-6 rounded-sm shadow-sm border border-gray-100 flex flex-col">
                  <span className="text-xs font-bold px-2 py-1 rounded uppercase tracking-wider self-start mb-4" style={{ backgroundColor: `${theme.navy}10`, color: theme.navy }}>{item.tag}</span>
                  <h3 className="font-bold mb-3 leading-snug" style={{ color: theme.navy }}>{item.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed flex-1">{item.desc}</p>
                  <button className="mt-5 flex items-center gap-2 text-sm font-bold" style={{ color: theme.gold }}>
                    <Download className="w-4 h-4" /> Download Report
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Educational Materials */}
        <div id="education" className="py-20 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 mb-10">
              <BookOpen className="w-6 h-6" style={{ color: theme.gold }} />
              <h2 className="text-2xl font-serif font-bold" style={{ color: theme.navy }}>Educational Materials</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {education.map((item, i) => (
                <div key={i} className="border border-gray-100 rounded-sm p-6 flex gap-4 hover:shadow-md transition bg-slate-50">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: `${theme.navy}10`, color: theme.navy }}>
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-bold mb-1 text-sm" style={{ color: theme.navy }}>{item.title}</h3>
                    <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-10 bg-slate-900 rounded-sm p-8 text-center text-white">
              <h3 className="text-lg font-serif font-bold mb-2">Full Resource Library Available to Members</h3>
              <p className="text-gray-400 text-sm mb-5">Join MREA to access our complete library of research reports, video courses, and professional development tools.</p>
              <Link href="/membership" className="inline-block px-6 py-2 rounded-sm font-bold text-sm transition hover:opacity-90"
                    style={{ backgroundColor: theme.gold, color: theme.navy }}>
                Become a Member
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
