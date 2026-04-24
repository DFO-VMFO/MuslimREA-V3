import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronRight, Calendar } from 'lucide-react';

const theme = {
  navy: '#0B1A30',
  gold: '#D4AF37',
  charcoal: '#333333',
  lightGray: '#F5F7FA'
};

// All chapter slugs — kept in sync with chapters/page.tsx
const MOCK_CHAPTERS = {
  houston: { id: 'houston', name: 'Houston, TX', country: 'United States', flag: '🇺🇸', region: 'North America', members: 1240, image: 'https://images.unsplash.com/photo-1531218150217-54595bc8bbf9?auto=format&fit=crop&q=80&w=800' },
  dallas: { id: 'dallas', name: 'Dallas, TX', country: 'United States', flag: '🇺🇸', region: 'North America', members: 870, image: 'https://images.unsplash.com/photo-1572120360610-d971b9d7767c?auto=format&fit=crop&q=80&w=800' },
  toronto: { id: 'toronto', name: 'Toronto, ON', country: 'Canada', flag: '🇨🇦', region: 'North America', members: 760, image: 'https://images.unsplash.com/photo-1517090504586-fde19ea6066f?auto=format&fit=crop&q=80&w=800' },
  london: { id: 'london', name: 'London', country: 'United Kingdom', flag: '🇬🇧', region: 'Europe', members: 2150, image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&q=80&w=800' },
  dubai: { id: 'dubai', name: 'Dubai', country: 'United Arab Emirates', flag: '🇦🇪', region: 'Middle East', members: 3100, image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80&w=800' },
  'abu-dhabi': { id: 'abu-dhabi', name: 'Abu Dhabi', country: 'United Arab Emirates', flag: '🇦🇪', region: 'Middle East', members: 540, image: 'https://images.unsplash.com/photo-1512632578888-169bbbc64f33?auto=format&fit=crop&q=80&w=800' },
  istanbul: { id: 'istanbul', name: 'Istanbul', country: 'Turkey', flag: '🇹🇷', region: 'Europe / Asia', members: 1800, image: 'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&fit=crop&q=80&w=800' },
};

const MOCK_EVENTS = [
  { id: 1, title: 'Commercial Deal Room Mixer', date: 'Dec 01, 2026', location: 'Houston Chapter', type: 'Local', tags: ['Deal Room', 'Networking'], image: 'https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&q=80&w=800' },
  { id: 2, title: 'MWIRE Leadership Panel', date: 'Nov 05, 2026', location: 'London Chapter', type: 'Local', tags: ['Women-Only', 'Leadership'], image: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=800' },
];

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function ChapterDetail({ params }: PageProps) {
  const { id } = await params;
  const chapter = MOCK_CHAPTERS[id as keyof typeof MOCK_CHAPTERS];

  if (!chapter) {
    return (
      <div className="font-sans flex flex-col min-h-screen text-slate-900">
        <Navbar />
        <main className="flex-grow flex flex-col items-center justify-center py-24 px-4" style={{ backgroundColor: '#F5F7FA' }}>
          <h1 className="text-3xl font-serif font-bold mb-3" style={{ color: '#0B1A30' }}>Chapter Not Found</h1>
          <p className="text-gray-500 mb-6">This chapter doesn&apos;t exist or hasn&apos;t launched yet.</p>
          <Link href="/chapters" className="px-6 py-3 rounded-sm font-bold text-sm text-white" style={{ backgroundColor: '#0B1A30' }}>View All Chapters</Link>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="font-sans flex flex-col min-h-screen text-slate-900">
      <Navbar />
      <main className="flex-grow">
        <div className="min-h-screen bg-white">
          {/* Chapter Hero */}
          <div className="relative h-[400px] flex items-center">
            <div className="absolute inset-0 z-0">
              <Image
                src={chapter.image}
                alt={chapter.name}
                fill
                priority
                sizes="100vw"
                className="object-cover"
              />
              <div className="absolute inset-0" style={{ backgroundColor: theme.navy, opacity: 0.9 }}></div>
            </div>
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
              <Link href="/chapters" className="text-gray-300 hover:text-white flex items-center mb-6 text-sm uppercase tracking-wider font-bold">
                <ChevronRight className="w-4 h-4 mr-1 rotate-180" /> Back to Global Map
              </Link>
              <div className="flex flex-col md:flex-row md:items-end justify-between">
                <div>
                  <span className="uppercase tracking-[0.2em] font-bold text-sm mb-2 block" style={{ color: theme.gold }}>
                    {chapter.flag} {chapter.country} — Official Chapter
                  </span>
                  <h1 className="text-5xl font-serif text-white font-bold">MREA {chapter.name}</h1>
                </div>
                <div className="mt-6 md:mt-0 flex space-x-4">
                  <button className="px-6 py-2 rounded-sm font-bold text-white transition border" 
                          style={{ borderColor: theme.gold }}>
                    Contact Board
                  </button>
                  <button className="px-6 py-2 rounded-sm font-bold transition shadow-lg" 
                          style={{ backgroundColor: theme.gold, color: theme.navy }}>
                    Join Chapter
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Chapter Sub-Nav */}
          <div className="border-b border-gray-200 sticky top-20 bg-white z-40">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex space-x-8">
              {['Overview', 'Local Board', 'Events', 'Sponsors'].map((tab, i) => (
                <button key={i} className={`py-4 font-bold text-sm uppercase tracking-wide border-b-2 ${i === 0 ? 'border-blue-900 text-blue-900' : 'border-transparent text-gray-500 hover:text-gray-900'}`}
                        style={i===0 ? { borderColor: theme.navy, color: theme.navy } : {}}>
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {/* Chapter Content Area */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-serif font-bold mb-6" style={{ color: theme.navy }}>Welcome to MREA {chapter.name}</h2>
              <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                As a premier hub within the global network, the {chapter.name} chapter connects top-tier developers, brokers, and institutional investors in the {chapter.region} market. Our focus is on high-capital development, international cross-border investments, and fostering the next generation of real estate leadership.
              </p>

              <h3 className="text-xl font-bold mb-6 mt-12 border-b pb-2" style={{ color: theme.navy, borderColor: theme.gold }}>Upcoming Local Events</h3>
              <div className="space-y-4">
                {MOCK_EVENTS.filter(e => e.location.includes(chapter.name)).map(event => (
                  <div key={event.id} className="flex flex-col sm:flex-row border border-gray-100 rounded-sm overflow-hidden shadow-sm hover:shadow-md transition bg-white">
                    <div className="relative w-full sm:w-48 h-32 sm:h-auto sm:min-h-32">
                      <Image
                        src={event.image}
                        alt={event.title}
                        fill
                        sizes="(min-width: 640px) 12rem, 100vw"
                        className="object-cover"
                      />
                    </div>
                    <div className="p-4 flex-1 flex flex-col justify-center">
                      <div className="flex space-x-2 mb-2">
                        {event.tags.map(tag => (
                          <span key={tag} className="text-xs font-bold px-2 py-1 rounded bg-slate-100 text-slate-600 uppercase tracking-wider">{tag}</span>
                        ))}
                      </div>
                      <h4 className="font-bold text-lg mb-1" style={{ color: theme.navy }}>{event.title}</h4>
                      <div className="flex items-center text-sm text-gray-500">
                        <Calendar className="w-4 h-4 mr-1" /> {event.date}
                      </div>
                    </div>
                    <div className="p-4 sm:border-l border-gray-100 flex items-center justify-center">
                      <button className="text-sm font-bold hover:underline" style={{ color: theme.gold }}>Register</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              <div className="bg-slate-50 p-6 rounded-sm border border-slate-100">
                <h3 className="font-bold uppercase tracking-wider text-sm mb-4" style={{ color: theme.navy }}>Chapter Leadership</h3>
                <div className="space-y-4">
                  {[
                    { role: 'President', name: 'Omar Al-Fayed' },
                    { role: 'VP of Commercial', name: 'Sarah Rahman' },
                    { role: 'MWIRE Chair', name: 'Fatima Zahra' }
                  ].map((member, i) => (
                    <div key={i} className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-gray-300 mr-3 flex items-center justify-center text-gray-500 font-bold">
                        {member.name.charAt(0)}
                      </div>
                      <div>
                        <div className="font-bold text-sm" style={{ color: theme.navy }}>{member.name}</div>
                        <div className="text-xs text-gray-500 uppercase">{member.role}</div>
                      </div>
                    </div>
                  ))}
                </div>
                <button className="w-full mt-6 py-2 text-sm font-bold border rounded hover:bg-white transition" style={{ borderColor: theme.navy, color: theme.navy }}>View Full Board</button>
              </div>

              <div className="bg-slate-900 p-6 rounded-sm text-white">
                <h3 className="font-bold uppercase tracking-wider text-sm mb-4" style={{ color: theme.gold }}>Founding Local Partners</h3>
                <div className="grid grid-cols-2 gap-4 opacity-70">
                  <div className="h-12 bg-white/10 rounded flex items-center justify-center text-xs font-bold">CAPITAL GROUP</div>
                  <div className="h-12 bg-white/10 rounded flex items-center justify-center text-xs font-bold">CRE HOLDINGS</div>
                  <div className="h-12 bg-white/10 rounded flex items-center justify-center text-xs font-bold">FIRST BANK</div>
                  <div className="h-12 bg-white/10 rounded flex items-center justify-center text-xs font-bold">DEVELOPMENT CO</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}