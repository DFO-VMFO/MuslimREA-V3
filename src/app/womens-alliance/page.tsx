'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Users, BookOpen, TrendingUp, Heart } from 'lucide-react';

const theme = {
  navy: '#0B1A30',
  gold: '#D4AF37',
  charcoal: '#333333',
  lightGray: '#F5F7FA',
  rose: '#8B2252',
};

const pillars = [
  {
    icon: <TrendingUp size={28} />,
    title: 'Career Advancement',
    desc: 'Mentorship programs, credential support, and brokerage partnerships designed to accelerate the careers of Muslim women in residential, commercial, and investment real estate.',
  },
  {
    icon: <Users size={28} />,
    title: 'Professional Network',
    desc: 'An exclusive directory of MWREA members across chapters — facilitating referrals, joint ventures, and collaborations with aligned professionals worldwide.',
  },
  {
    icon: <BookOpen size={28} />,
    title: 'Education & Research',
    desc: 'Access to MREA curated research, market reports, CE credit courses, and leadership development workshops shaped around the unique journey of Muslim women professionals.',
  },
  {
    icon: <Heart size={28} />,
    title: 'Community Impact',
    desc: 'Initiatives focused on homeownership access, affordable housing advocacy, and community wealth-building — rooted in a faith-aligned ethic of service.',
  },
];

const mwiacPillars = [
  {
    title: 'Housing Advocacy',
    items: ['Single mothers', 'Workforce housing', 'Homeownership access', 'Affordable housing initiatives'],
  },
  {
    title: 'Economic Empowerment',
    items: ['Entrepreneurship', 'Real estate investing', 'Access to capital', 'Financial literacy'],
  },
  {
    title: 'Leadership Development',
    items: ['Board appointments', 'Commission appointments', 'Public service', 'Civic leadership'],
  },
  {
    title: 'Government Relations',
    items: ['Meeting elected officials', 'Legislative education', 'Policy recommendations', 'Candidate forums (nonpartisan)'],
  },
];

export default function WomensAlliancePage() {
  const [openPillar, setOpenPillar] = useState(mwiacPillars[0].title);

  return (
    <div className="font-sans flex flex-col min-h-screen text-slate-900">
      <Navbar />
      <main className="flex-grow">

        {/* Hero */}
        <div className="relative h-[560px] flex items-center justify-center">
          <div className="absolute inset-0 z-0">
            <Image
              src="https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=1600"
              alt="Muslim Women Real Estate Alliance"
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0" style={{ backgroundColor: theme.navy, opacity: 0.88 }}></div>
          </div>
          <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
            <span className="uppercase tracking-[0.25em] text-xs font-bold block mb-4" style={{ color: theme.gold }}>
              Official Division of MREA
            </span>
            <h1 className="text-5xl md:text-6xl font-serif text-white font-bold leading-tight mb-5">
              Muslim Women Real Estate Alliance
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Elevating Muslim women across every dimension of real estate — from first-time agents to institutional investors and community developers.
            </p>
            <div className="flex flex-col items-center gap-4">
              <Link href="/membership" className="w-full max-w-xs text-center px-8 py-3 rounded-sm font-bold text-lg transition shadow-xl hover:-translate-y-0.5 inline-block"
                    style={{ backgroundColor: theme.gold, color: theme.navy }}>
                Join MWREA
              </Link>
              <div className="w-full max-w-4xl grid grid-cols-1 sm:grid-cols-3 gap-4">
                <a href="#investment-club" className="w-full text-center px-8 py-3 rounded-sm font-bold text-lg text-white border-2 transition hover:bg-white/10"
                   style={{ borderColor: 'rgba(255,255,255,0.3)' }}>
                  Investment Club
                </a>
                <a href="#advocacy-council" className="w-full text-center px-8 py-3 rounded-sm font-bold text-lg text-white border-2 transition hover:bg-white/10"
                   style={{ borderColor: 'rgba(255,255,255,0.3)' }}>
                  Advocacy Council
                </a>
                <Link href="/events" className="w-full text-center px-8 py-3 rounded-sm font-bold text-lg text-white border-2 transition hover:bg-white/10"
                      style={{ borderColor: 'rgba(255,255,255,0.3)' }}>
                  Events
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Mission Strip */}
        <div style={{ backgroundColor: theme.gold }}>
          <div className="max-w-4xl mx-auto px-4 py-4 text-center">
            <p className="font-bold text-sm uppercase tracking-[0.2em]" style={{ color: theme.navy }}>
              MWREA — Protecting and expanding the space for Muslim women in global real estate
            </p>
          </div>
        </div>

        {/* Four Pillars */}
        <div className="py-24" style={{ backgroundColor: theme.lightGray }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <h2 className="text-3xl font-serif font-bold" style={{ color: theme.navy }}>What the Alliance Offers</h2>
              <div className="w-24 h-1 mx-auto mt-4" style={{ backgroundColor: theme.gold }}></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {pillars.map((p, i) => (
                <div key={i} className="bg-white p-8 rounded shadow-md border border-gray-100 flex gap-5">
                  <div className="flex-shrink-0 w-14 h-14 rounded-full flex items-center justify-center" style={{ backgroundColor: `${theme.navy}10`, color: theme.navy }}>
                    {p.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2" style={{ color: theme.navy }}>{p.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Investment Club */}
        <div id="investment-club" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="uppercase tracking-[0.2em] text-xs font-bold block mb-3" style={{ color: theme.gold }}>
                MWREA Sub-Division
              </span>
              <h2 className="text-3xl font-serif font-bold mb-5" style={{ color: theme.navy }}>
                Muslim Women Real Estate Investment Club
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                The Investment Club is a member-exclusive educational and networking group focused on the fundamentals of real estate investing — from residential rental portfolios to commercial syndications.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                All club activities prioritize <strong>education, relationship building, and discussion of investment strategies</strong> — empowering members to make informed decisions with their own advisors in a fully compliant framework.
              </p>
              <p className="text-gray-500 text-sm italic mb-8 border-l-4 pl-4" style={{ borderColor: theme.gold }}>
                Per MREA bylaws: the club does not pool funds, execute trades, or solicit investments on behalf of members. Activities are educational in nature and designed to be fully securities-compliant.
              </p>
              <div className="flex gap-4">
                <Link href="/membership" className="inline-flex items-center gap-2 px-6 py-3 rounded-sm font-bold text-sm transition hover:opacity-90"
                      style={{ backgroundColor: theme.gold, color: theme.navy }}>
                  Apply for Membership <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
            <div className="bg-slate-900 rounded-sm p-10 text-white">
              <h4 className="font-bold text-xl mb-6 font-serif" style={{ color: theme.gold }}>Club Focus Areas</h4>
              <ul className="space-y-4">
                {[
                  'Residential Buy-and-Hold Strategy',
                  'Short-Term Rental & Vacation Properties',
                  'Commercial Real Estate Fundamentals',
                  'Syndication Education & LP Literacy',
                  'Halal & Ethical Investing Frameworks',
                  'Market Analysis & Property Valuation',
                  'Networking with Female-Led Firms',
                ].map(area => (
                  <li key={area} className="flex items-center gap-3 text-sm text-gray-300">
                    <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: theme.gold }}></div>
                    {area}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Impact & Advocacy Council */}
        <div id="advocacy-council" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <span className="uppercase tracking-[0.2em] text-xs font-bold block mb-3" style={{ color: theme.gold }}>
                MWREA Sub-Division
              </span>
              <h2 className="text-3xl font-serif font-bold mb-5" style={{ color: theme.navy }}>
                Muslim Women Impact &amp; Advocacy Council (MWIAC)
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                The Muslim Women Impact &amp; Advocacy Council advances housing opportunity, economic empowerment, professional development, and community leadership by educating policymakers, engaging stakeholders, and advocating for policies that strengthen families, expand homeownership, and support sustainable community development.
              </p>
              <p className="text-gray-500 text-sm italic mb-8 border-l-4 pl-4" style={{ borderColor: theme.gold }}>
                Designed for a 501(c)(6) trade association framework, MWIAC programming is policy-education and stakeholder-engagement focused, and does not involve partisan campaign activity.
              </p>
              <div className="flex gap-4">
                <Link href="/membership" className="inline-flex items-center gap-2 px-6 py-3 rounded-sm font-bold text-sm transition hover:opacity-90"
                      style={{ backgroundColor: theme.gold, color: theme.navy }}>
                  Apply for Membership <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-sm font-bold text-sm transition border hover:bg-white/5"
                      style={{ borderColor: theme.navy, color: theme.navy }}>
                  Connect with MWIAC <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="bg-slate-900 rounded-sm p-10 text-white">
              <h4 className="font-bold text-xl mb-6 font-serif" style={{ color: theme.gold }}>Council Pillars</h4>
              <ul className="space-y-4">
                {mwiacPillars.map((pillar) => {
                  const isOpen = openPillar === pillar.title;

                  return (
                    <li key={pillar.title}>
                      <button
                        type="button"
                        onClick={() => setOpenPillar(isOpen ? '' : pillar.title)}
                        className="w-full flex items-center gap-3 text-sm text-gray-300 hover:text-white transition text-left"
                        aria-expanded={isOpen}
                        suppressHydrationWarning
                      >
                        <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: theme.gold }}></div>
                        <span>{pillar.title}</span>
                      </button>
                      {isOpen && (
                        <ul className="mt-2 ml-5 space-y-2">
                          {pillar.items.map((item) => (
                            <li key={item} className="flex items-center gap-3 text-sm text-gray-400">
                              <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: theme.gold }}></div>
                              {item}
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>

        {/* Leadership Spotlight */}
        <div className="py-20" style={{ backgroundColor: theme.navy }}>
          <div className="max-w-3xl mx-auto px-4 text-center">
            <span className="uppercase tracking-[0.2em] text-xs font-bold block mb-3" style={{ color: theme.gold }}>Leadership</span>
            <h2 className="text-3xl font-serif font-bold text-white mb-5">Join a Movement Already in Motion</h2>
            <p className="text-gray-300 mb-8 leading-relaxed">
              MWREA chapters are launching across North America, the Middle East, and Europe. Whether you&apos;re a licensed agent, an investor, a developer, or just beginning your journey — the Alliance is your professional home.
            </p>
            <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-3 rounded-sm font-bold transition hover:opacity-90"
                  style={{ backgroundColor: theme.gold, color: theme.navy }}>
              Connect with Alliance Leadership <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Mailing List */}
        <div className="py-14 bg-white border-t border-gray-100 text-center">
          <div className="max-w-lg mx-auto px-4">
            <h3 className="text-xl font-serif font-bold mb-2" style={{ color: theme.navy }}>Stay Connected with MWREA</h3>
            <p className="text-gray-500 mb-5 text-sm">Join the mailing list for events, mentorship opportunities, and investment education updates.</p>
            <form className="flex flex-col sm:flex-row gap-3" onSubmit={(e) => e.preventDefault()}>
              <input type="email" placeholder="Your email address" className="flex-1 px-4 py-3 border border-gray-300 rounded-sm text-sm focus:outline-none focus:ring-2" suppressHydrationWarning />
              <button type="submit" suppressHydrationWarning className="px-6 py-3 rounded-sm font-bold text-sm whitespace-nowrap"
                      style={{ backgroundColor: theme.navy, color: 'white' }}>
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
