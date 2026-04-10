'use client';

import type { CSSProperties } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Image from 'next/image';
import Link from 'next/link';
import { Briefcase, Globe, Shield, ArrowRight, Users } from 'lucide-react';

const theme = {
  navy: '#0B1A30',
  gold: '#D4AF37',
  charcoal: '#333333',
  lightGray: '#F5F7FA'
};

export default function Home() {
  return (
    <div className="font-sans flex flex-col min-h-screen text-slate-900">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="relative h-[640px] flex items-center justify-center">
          <div className="absolute inset-0 z-0">
            <Image
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2070"
              alt="Global Skyline"
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0" style={{ backgroundColor: theme.navy, opacity: 0.87 }}></div>
          </div>

          <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
            <span className="uppercase tracking-[0.25em] font-bold text-xs mb-4 block" style={{ color: theme.gold }}>
              501(c)(6) Global Trade Association
            </span>
            <h1 className="text-5xl md:text-6xl font-serif text-white font-bold leading-tight mb-6">
              Empowering Muslim Real Estate Professionals Worldwide
            </h1>
            <p className="text-xl text-gray-300 mb-4 max-w-3xl mx-auto">
              To empower real estate professionals to elevate client services, advance careers, build wealth ethically, and strengthen communities through a global, faith-aligned professional trade association.
            </p>
            <p className="text-sm text-gray-400 mb-10 max-w-2xl mx-auto">
              Connecting capital, developers, and professionals across 50+ global chapters through professional development, ethical leadership, and advocacy.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/membership"
                className="px-8 py-3 rounded-sm font-bold text-lg transition shadow-xl hover:-translate-y-0.5 inline-block text-center"
                style={{ backgroundColor: theme.gold, color: theme.navy }}>
                Apply for Membership
              </Link>
              <Link href="/chapters"
                className="px-8 py-3 rounded-sm font-bold text-lg text-white border-2 transition hover:bg-white/10"
                style={{ borderColor: 'rgba(255,255,255,0.3)' }}>
                Find Your Chapter
              </Link>
            </div>
          </div>
        </div>

        {/* Mission Banner */}
        <div style={{ backgroundColor: theme.gold }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 text-center">
            <p className="font-bold text-sm uppercase tracking-[0.2em]" style={{ color: theme.navy }}>
              A non-profit professional trade association committed to ethical leadership, advocacy & community wealth-building
            </p>
          </div>
        </div>

        {/* Reach Stats */}
        <div style={{ backgroundColor: theme.navy }} className="border-t border-gray-800 py-14">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-serif font-bold mb-2" style={{ color: theme.gold }}>50+</div>
                <div className="text-gray-400 text-sm uppercase tracking-wide">Global Chapters</div>
              </div>
              <div>
                <div className="text-4xl font-serif font-bold mb-2 text-white">4</div>
                <div className="text-gray-400 text-sm uppercase tracking-wide">Strategic Councils</div>
              </div>
              <div>
                <div className="text-4xl font-serif font-bold mb-2 text-white">MWREA</div>
                <div className="text-gray-400 text-sm uppercase tracking-wide">Women&apos;s Alliance</div>
              </div>
              <div>
                <div className="text-4xl font-serif font-bold mb-2 text-white">$20M+</div>
                <div className="text-gray-400 text-sm uppercase tracking-wide">Community Capital Protected</div>
              </div>
            </div>
          </div>
        </div>

        {/* Pillars Section */}
        <div className="py-24" style={{ backgroundColor: theme.lightGray }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-serif font-bold" style={{ color: theme.navy }}>Core Institutional Pillars</h2>
              <div className="w-24 h-1 mx-auto mt-4" style={{ backgroundColor: theme.gold }}></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {[
                { icon: <Briefcase size={32}/>, title: 'Strategic Councils', desc: 'Four specialized councils — Capital Network, Developer Council, Family Office Circle, and an Investment Review Committee — connecting professionals with aligned goals.', href: '/councils' },
                { icon: <Globe size={32}/>, title: 'Chapter Architecture', desc: 'Localized leadership with a unified national infrastructure. Engage with market-specific events and board members in over 50 chapters worldwide.', href: '/chapters' },
                { icon: <Shield size={32}/>, title: 'Advocacy & Policy', desc: 'Dedicated research hubs and policy task forces ensuring the advancement of Muslim-led communities in global real estate markets.', href: '/resources' }
              ].map((pillar, i) => (
                <Link key={i} href={pillar.href} className="bg-white p-8 rounded shadow-md border border-gray-100 hover:shadow-xl transition-shadow group block">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6" style={{ backgroundColor: `${theme.navy}10`, color: theme.navy }}>
                    {pillar.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3" style={{ color: theme.navy }}>{pillar.title}</h3>
                  <p className="text-gray-600 leading-relaxed mb-4">{pillar.desc}</p>
                  <span className="flex items-center gap-1 text-sm font-bold group-hover:gap-2 transition-all" style={{ color: theme.gold }}>
                    Learn More <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Women's Alliance CTA */}
        <div className="py-20" style={{ backgroundColor: theme.navy }}>
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="uppercase tracking-[0.2em] text-xs font-bold block mb-3" style={{ color: theme.gold }}>Official Division</span>
            <h2 className="text-4xl font-serif font-bold text-white mb-4">Muslim Women Real Estate Alliance</h2>
            <p className="text-gray-300 text-lg mb-2 max-w-3xl mx-auto">
              MWREA is the official women's division of MREA — a professional network dedicated to elevating Muslim women across residential, commercial, and investment real estate.
            </p>
            <p className="text-gray-400 text-sm mb-8">Including the Muslim Women Real Estate Investment Club — focused on education, relationship building, and community wealth creation.</p>
            <Link href="/womens-alliance" className="inline-flex items-center gap-2 px-8 py-3 font-bold rounded-sm transition hover:opacity-90"
              style={{ backgroundColor: theme.gold, color: theme.navy }}>
              <Users className="w-5 h-5" /> Explore the Alliance
            </Link>
          </div>
        </div>

        {/* Join Mailing List */}
        <div className="py-16 bg-white border-t border-gray-100">
          <div className="max-w-xl mx-auto px-4 text-center">
            <h3 className="text-2xl font-serif font-bold mb-2" style={{ color: theme.navy }}>Stay Informed</h3>
            <p className="text-gray-500 mb-6 text-sm">Get chapter updates, event invitations, and industry research delivered to your inbox.</p>
            <form className="flex flex-col sm:flex-row gap-3" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-offset-1 text-sm"
                style={{ '--tw-ring-color': theme.gold } as CSSProperties}
              />
              <button type="submit" className="px-6 py-3 rounded-sm font-bold text-sm transition hover:opacity-90 whitespace-nowrap"
                      style={{ backgroundColor: theme.navy, color: 'white' }}>
                Join Mailing List
              </button>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}