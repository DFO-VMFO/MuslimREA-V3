'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { ArrowRight, Users, Building2, TrendingUp, Home, Briefcase, Scale, BookOpen, Network } from 'lucide-react';

const theme = {
  navy: '#0D3918',
  gold: '#7CB342',
  charcoal: '#2D2D2D',
  lightGray: '#F5F7FA'
};

const segments = [
  {
    title: 'Real Estate Agents & Brokers',
    description: 'Professionals dedicated to serving clients and growing their businesses.',
    icon: <Briefcase size={40} />,
    color: '#E8B754'
  },
  {
    title: 'Developers & Contractors',
    description: 'Builders and developers creating value and building communities.',
    icon: <Building2 size={40} />,
    color: '#7CB342'
  },
  {
    title: 'Investors & Private Equity Firms',
    description: 'Capital partners focused on ethical and impactful investments.',
    icon: <TrendingUp size={40} />,
    color: '#D4AF37'
  },
  {
    title: 'Property Managers',
    description: 'Experts managing properties and delivering quality service.',
    icon: <Home size={40} />,
    color: '#9B8C4F'
  },
  {
    title: 'Appraisers & Consultants',
    description: 'Valuation and advisory professionals supporting informed decisions.',
    icon: <Scale size={40} />,
    color: '#6B8E3E'
  },
  {
    title: 'Lenders & Financial Institutions',
    description: 'Financial partners that fuel real estate growth and opportunity.',
    icon: <TrendingUp size={40} />,
    color: '#C4A96D'
  },
  {
    title: 'Legal, Accounting & Service Partners',
    description: 'Trusted professionals providing essential services and guidance.',
    icon: <Briefcase size={40} />,
    color: '#8FA341'
  },
  {
    title: 'Students & Emerging Professionals',
    description: 'The next generation of leaders shaping the future of real estate.',
    icon: <BookOpen size={40} />,
    color: '#5F7A2E'
  }
];

export default function WhoWeServePage() {
  return (
    <div className="font-sans flex flex-col min-h-screen text-slate-900">
      <Navbar />
      <main className="flex-grow">
        {/* Header */}
        <div className="py-20 text-white" style={{ backgroundColor: theme.navy }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex gap-2 text-sm text-gray-400 mb-4 uppercase tracking-widest text-xs font-bold">
              <Link href="/" className="hover:text-white">Home</Link>
              <span>/</span>
              <span style={{ color: theme.gold }}>Who We Serve</span>
            </div>
            <h1 className="text-5xl font-serif font-bold mb-5">Who We Serve</h1>
            <p className="text-xl text-gray-300 max-w-3xl">
              MREA brings together a diverse community of real estate professionals united by shared values of integrity, excellence, and ethical leadership. We serve professionals across every segment of the real estate industry.
            </p>
          </div>
        </div>

        {/* Overview */}
        <div className="py-20 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <h2 className="text-3xl font-serif font-bold mb-4" style={{ color: theme.navy }}>A Tent for All Real Estate Professionals</h2>
              <div className="w-24 h-1 mx-auto" style={{ backgroundColor: theme.gold }}></div>
            </div>
            
            <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed space-y-6">
              <p>
                The Muslim Real Estate Association exists to serve every professional segment in the real estate ecosystem. Whether you're a licensed agent closing residential transactions, a developer managing multi-million-dollar mixed-use projects, a private equity investor sourcing deal flow, or a legal professional advising on complex real estate matters—MREA is built for you.
              </p>
              <p>
                Our membership reflects the full diversity of the industry. From students just beginning their careers to senior executives managing institutional capital, from sole practitioners to national firms, from local chapters to cross-border investments—MREA provides the professional community, resources, and advocacy that every segment needs.
              </p>
              <p style={{ color: theme.navy }} className="font-semibold text-lg border-l-4 pl-6 py-4" style={{ borderColor: theme.gold }}>
                We are open to all who uphold integrity and excellence in their professional practice.
              </p>
            </div>
          </div>
        </div>

        {/* Professional Segments */}
        <div className="py-20" style={{ backgroundColor: theme.lightGray }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <h2 className="text-3xl font-serif font-bold" style={{ color: theme.navy }}>Professionals We Serve</h2>
              <div className="w-24 h-1 mx-auto mt-4" style={{ backgroundColor: theme.gold }}></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
              {segments.map((segment, i) => (
                <div key={segment.title} className="bg-white rounded-lg shadow-sm border border-gray-100 p-8 transition hover:shadow-md">
                  <div className="flex justify-center mb-4">
                    <div 
                      className="w-14 h-14 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: `${segment.color}20`, color: segment.color }}
                    >
                      {segment.icon}
                    </div>
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-center" style={{ color: theme.navy }}>{segment.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed text-center">{segment.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Value Proposition */}
        <div className="py-20 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-serif font-bold mb-6" style={{ color: theme.navy }}>Why MREA Matters</h2>
              <div className="space-y-6 text-left mt-8">
                {[
                  {
                    title: 'Professional Community',
                    desc: 'Access a global network of 15,000+ professionals who share your values and face similar challenges.'
                  },
                  {
                    title: 'Institutional Advocacy',
                    desc: 'Benefit from MREA\'s policy work, industry representation, and voice in national real estate conversations.'
                  },
                  {
                    title: 'Deal Flow & Capital Access',
                    desc: 'Through our councils and networks, connect with vetted investment opportunities and financial partners.'
                  },
                  {
                    title: 'Professional Development',
                    desc: 'Develop your skills, advance your career, and access research and resources exclusive to MREA members.'
                  }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center mt-1" style={{ backgroundColor: theme.gold, color: theme.navy }}>
                      <span className="text-sm font-bold">✓</span>
                    </div>
                    <div>
                      <h4 className="font-bold mb-1" style={{ color: theme.navy }}>{item.title}</h4>
                      <p className="text-gray-600 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="py-16 bg-white border-t border-gray-100">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h3 className="text-2xl font-serif font-bold mb-4" style={{ color: theme.navy }}>Ready to join a community of exceptional professionals?</h3>
            <p className="text-gray-600 mb-8 text-lg">
              Explore membership options tailored to your professional stage and goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/membership" className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-sm font-bold transition hover:opacity-90"
                    style={{ backgroundColor: theme.gold, color: theme.navy }}>
                Explore Membership <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/contact" className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-sm font-bold border transition hover:bg-gray-50"
                    style={{ borderColor: theme.navy, color: theme.navy }}>
                Contact Us <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div className="py-20" style={{ backgroundColor: theme.lightGray }}>
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-serif font-bold mb-12" style={{ color: theme.navy }}>Our Core Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: 'Integrity', desc: 'We uphold the highest standards of ethical conduct and professional responsibility.' },
                { title: 'Excellence', desc: 'We pursue professional excellence and continuous improvement in all endeavors.' },
                { title: 'Community', desc: 'We build a supportive, collaborative community rooted in mutual respect and shared success.' }
              ].map((value, i) => (
                <div key={i} className="bg-white p-8 rounded-lg shadow-sm">
                  <h3 className="text-xl font-bold mb-3" style={{ color: theme.navy }}>{value.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{value.desc}</p>
                </div>
              ))}
            </div>
            <div className="mt-12 pt-8 border-t border-gray-300">
              <p className="text-gray-600 italic text-lg font-serif">FAITH | TRUST | COMMUNITY</p>
              <p className="text-gray-500 text-sm mt-3">www.MuslimREA.org</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
