import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { Briefcase, Globe, Shield } from 'lucide-react';

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
        <div className="relative h-[600px] flex items-center justify-center">
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2070" 
              alt="Global Skyline" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0" style={{ backgroundColor: theme.navy, opacity: 0.85 }}></div>
          </div>

          <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
            <span className="uppercase tracking-[0.2em] font-bold text-sm mb-4 block" style={{ color: theme.gold }}>
              Advancing Global Development
            </span>
            <h1 className="text-5xl md:text-6xl font-serif text-white font-bold leading-tight mb-6 shadow-sm">
              The Institutional Network for Real Estate Leaders
            </h1>
            <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
              Connecting capital, developers, and professionals across 50+ global chapters through exclusive networking, deal flow, and advocacy.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Link href="/membership" className="px-8 py-3 rounded-sm font-bold text-lg transition shadow-xl hover:-translate-y-0.5 inline-block text-center" 
                      style={{ backgroundColor: theme.gold, color: theme.navy }}>
                Apply for Membership
              </Link>
              <Link href="/chapters" className="px-8 py-3 rounded-sm font-bold text-lg text-white border-2 transition hover:bg-white/10"
                      style={{ borderColor: 'rgba(255,255,255,0.3)' }}>
                Find Your Chapter
              </Link>
            </div>
          </div>
        </div>

        {/* Stats / Proof Section */}
        <div style={{ backgroundColor: theme.navy }} className="border-t border-gray-800 py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-gray-800">
              <div>
                <div className="text-4xl font-serif font-bold mb-2" style={{ color: theme.gold }}>$40B+</div>
                <div className="text-gray-400 text-sm uppercase tracking-wide">Assets Represented</div>
              </div>
              <div>
                <div className="text-4xl font-serif font-bold mb-2 text-white">52</div>
                <div className="text-gray-400 text-sm uppercase tracking-wide">Global Chapters</div>
              </div>
              <div>
                <div className="text-4xl font-serif font-bold mb-2 text-white">15k+</div>
                <div className="text-gray-400 text-sm uppercase tracking-wide">Active Members</div>
              </div>
              <div>
                <div className="text-4xl font-serif font-bold mb-2 text-white">MWIRE</div>
                <div className="text-gray-400 text-sm uppercase tracking-wide">Women&apos;s Initiative</div>
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
                { icon: <Briefcase size={32}/>, title: 'The Deal Room', desc: 'A secure, member-only environment connecting family offices, institutional capital, and vetted developers globally.' },
                { icon: <Globe size={32}/>, title: 'Chapter Architecture', desc: 'Localized leadership with a unified national infrastructure. Engage with market-specific events and board members.' },
                { icon: <Shield size={32}/>, title: 'Advocacy & Policy', desc: 'Dedicated research hubs and policy task forces ensuring the advancement of our communities in global markets.' }
              ].map((pillar, i) => (
                <div key={i} className="bg-white p-8 rounded shadow-md border border-gray-100 hover:shadow-xl transition-shadow">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6" style={{ backgroundColor: `${theme.navy}10`, color: theme.navy }}>
                    {pillar.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3" style={{ color: theme.navy }}>{pillar.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{pillar.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}