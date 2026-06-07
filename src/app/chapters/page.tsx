'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Image from 'next/image';
import Link from 'next/link';
import { Users, ArrowRight, Search, Globe } from 'lucide-react';

const theme = {
  navy: '#0B1A30',
  gold: '#D4AF37',
  charcoal: '#333333',
  lightGray: '#F5F7FA'
};

type SubChapter = {
  id: string;
  name: string;
  image: string;
  status: 'Active' | 'Launching Soon';
};

type NationalChapter = {
  country: string;
  flag: string;
  region: string;
  nationalId: string;
  subChapters: SubChapter[];
};

const NATIONAL_CHAPTERS: NationalChapter[] = [
  {
    country: 'United States',
    flag: '🇺🇸',
    region: 'North America',
    nationalId: 'usa',
    subChapters: [
      { id: 'houston', name: 'Houston, TX', image: 'https://images.unsplash.com/photo-1531218150217-54595bc8bbf9?auto=format&fit=crop&q=80&w=800', status: 'Active' },
      { id: 'dallas', name: 'Dallas, TX', image: 'https://images.unsplash.com/photo-1572120360610-d971b9d7767c?auto=format&fit=crop&q=80&w=800', status: 'Active' },
    ]
  },
  {
    country: 'Canada',
    flag: '🇨🇦',
    region: 'North America',
    nationalId: 'canada',
    subChapters: [
      { id: 'toronto', name: 'Toronto, ON', image: 'https://images.unsplash.com/photo-1517090504586-fde19ea6066f?auto=format&fit=crop&q=80&w=800', status: 'Active' },
    ]
  },
  {
    country: 'United Kingdom',
    flag: '🇬🇧',
    region: 'Europe',
    nationalId: 'uk',
    subChapters: [
      { id: 'london', name: 'London', image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&q=80&w=800', status: 'Active' },
    ]
  },
  {
    country: 'United Arab Emirates',
    flag: '🇦🇪',
    region: 'Middle East',
    nationalId: 'uae',
    subChapters: [
      { id: 'dubai', name: 'Dubai', image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80&w=800', status: 'Active' },
      { id: 'abu-dhabi', name: 'Abu Dhabi', image: 'https://images.unsplash.com/photo-1512632578888-169bbbc64f33?auto=format&fit=crop&q=80&w=800', status: 'Launching Soon' },
    ]
  },
];

const ADDITIONAL_CHAPTERS: (SubChapter & { country: string; flag: string; region: string })[] = [
  { id: 'istanbul', name: 'Istanbul', country: 'Turkey', flag: '🇹🇷', region: 'Europe / Asia', image: 'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&fit=crop&q=80&w=800', status: 'Active' },
];

export default function Chapters() {
  const [searchTerm, setSearchTerm] = useState('');

  const query = searchTerm.toLowerCase();
  const filteredNational = NATIONAL_CHAPTERS.map(nc => ({
    ...nc,
    subChapters: nc.subChapters.filter(sc =>
      !query ||
      sc.name.toLowerCase().includes(query) ||
      nc.country.toLowerCase().includes(query) ||
      nc.region.toLowerCase().includes(query)
    )
  })).filter(nc => nc.subChapters.length > 0 || nc.country.toLowerCase().includes(query));

  const filteredAdditional = ADDITIONAL_CHAPTERS.filter(c =>
    !query ||
    c.name.toLowerCase().includes(query) ||
    c.country.toLowerCase().includes(query) ||
    c.region.toLowerCase().includes(query)
  );

  const totalChapters = NATIONAL_CHAPTERS.reduce((sum, nc) => sum + nc.subChapters.length, 0) + ADDITIONAL_CHAPTERS.length;

  return (
    <div className="font-sans flex flex-col min-h-screen text-slate-900">
      <Navbar />
      <main className="flex-grow">
        <div className="min-h-screen pb-24" style={{ backgroundColor: theme.lightGray }}>

          {/* Hero */}
          <div style={{ backgroundColor: theme.navy }} className="py-16 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <span className="text-xs uppercase tracking-[0.2em] font-bold block mb-3" style={{ color: theme.gold }}>Global Federation</span>
              <h1 className="text-4xl font-serif font-bold mb-2">MREA International</h1>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-2">Global Chapter Network</p>
              <p className="text-gray-400 text-sm mb-8 max-w-xl mx-auto">
                {totalChapters} active chapters across 5 countries — connecting Muslim real estate professionals worldwide.
              </p>
              <div className="flex flex-wrap justify-center gap-3 mb-8 text-sm">
                {NATIONAL_CHAPTERS.map(nc => (
                  <a key={nc.nationalId} href={`#${nc.nationalId}`} className="flex items-center gap-1 px-4 py-2 rounded-sm bg-white/10 hover:bg-white/20 transition-colors">
                    <span>{nc.flag}</span><span>{nc.country}</span>
                  </a>
                ))}
              </div>
              <div className="max-w-xl mx-auto relative">
                <input
                  type="text"
                  placeholder="Search by city, country, or region..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full py-4 pl-12 pr-4 rounded-sm text-gray-900 focus:outline-none focus:ring-2"
                />
                <Search className="absolute left-4 top-4 text-gray-400" />
              </div>
            </div>
          </div>

          {/* National Chapter Hierarchy */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-14 space-y-16">

            {filteredNational.map(nc => (
              <section key={nc.nationalId} id={nc.nationalId}>
                {/* National Header */}
                <div className="flex items-center gap-4 mb-6 pb-4 border-b-2" style={{ borderColor: theme.gold }}>
                  <span className="text-4xl">{nc.flag}</span>
                  <div>
                    <h2 className="text-2xl font-serif font-bold" style={{ color: theme.navy }}>
                      MREA {nc.country} — National Chapter
                    </h2>
                    <div className="flex items-center gap-4 mt-1 text-sm text-gray-500">
                      <span className="flex items-center gap-1"><Globe size={13}/> {nc.region}</span>
                      <span>{nc.subChapters.length} chapter{nc.subChapters.length !== 1 ? 's' : ''}</span>
                    </div>
                  </div>
                  <div className="ml-auto">
                    <Link href="/womens-alliance" className="text-xs font-bold px-3 py-1 rounded border transition-colors hover:bg-opacity-10" style={{ color: theme.gold, borderColor: theme.gold }}>
                      Women&apos;s Alliance →
                    </Link>
                  </div>
                </div>

                {/* Sub-chapters */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {nc.subChapters.map(sc => (
                    <div key={sc.id} className="bg-white rounded-sm overflow-hidden shadow-md hover:shadow-xl transition-all group border border-gray-100">
                      <div className="h-40 overflow-hidden relative">
                        <Image
                          src={sc.image}
                          alt={sc.name}
                          fill
                          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute top-3 right-3 px-2 py-0.5 rounded text-xs font-bold shadow"
                          style={{ backgroundColor: sc.status === 'Active' ? theme.gold : '#94a3b8', color: sc.status === 'Active' ? theme.navy : 'white' }}>
                          {sc.status}
                        </div>
                        <div className="absolute top-3 left-3 bg-white/90 backdrop-blur px-2 py-0.5 rounded text-xs font-bold shadow" style={{ color: theme.navy }}>
                          {nc.flag} {nc.country}
                        </div>
                      </div>
                      <div className="p-5">
                        <h3 className="text-lg font-serif font-bold mb-1" style={{ color: theme.navy }}>MREA {sc.name}</h3>
                        <div className="mb-4">
                          {/* Members removed as requested */}
                        </div>
                        <Link href={`/chapters/${sc.id}`} className="flex items-center font-bold text-sm group-hover:gap-2 gap-1 transition-all" style={{ color: theme.gold }}>
                          Visit Chapter Portal <ArrowRight className="w-4 h-4" />
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            ))}

            {/* Additional / Global Chapters */}
            {filteredAdditional.length > 0 && (
              <section>
                <div className="flex items-center gap-4 mb-6 pb-4 border-b-2" style={{ borderColor: `${theme.navy}30` }}>
                  <span className="text-4xl">🌍</span>
                  <div>
                    <h2 className="text-2xl font-serif font-bold" style={{ color: theme.navy }}>Expanding Global Presence</h2>
                    <p className="text-sm text-gray-500 mt-1">Additional international chapters as MREA grows its global footprint.</p>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredAdditional.map(c => (
                    <div key={c.id} className="bg-white rounded-sm overflow-hidden shadow-md hover:shadow-xl transition-all group border border-gray-100">
                      <div className="h-40 overflow-hidden relative">
                        <Image
                          src={c.image}
                          alt={c.name}
                          fill
                          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute top-3 left-3 bg-white/90 backdrop-blur px-2 py-0.5 rounded text-xs font-bold shadow" style={{ color: theme.navy }}>
                          {c.flag} {c.country}
                        </div>
                        <div className="absolute top-3 right-3 px-2 py-0.5 rounded text-xs font-bold shadow" style={{ backgroundColor: theme.gold, color: theme.navy }}>
                          {c.status}
                        </div>
                      </div>
                      <div className="p-5">
                        <h3 className="text-lg font-serif font-bold mb-1" style={{ color: theme.navy }}>MREA {c.name}</h3>
                        <div className="flex items-center gap-3 text-gray-500 text-sm mb-4">
                          <span className="flex items-center gap-1"><Globe size={13}/>{c.region}</span>
                        </div>
                        <Link href={`/chapters/${c.id}`} className="flex items-center font-bold text-sm gap-1 group-hover:gap-2 transition-all" style={{ color: theme.gold }}>
                          Visit Chapter Portal <ArrowRight className="w-4 h-4" />
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {filteredNational.length === 0 && filteredAdditional.length === 0 && (
              <div className="text-center py-16">
                <p className="text-gray-500">No chapters found matching &quot;{searchTerm}&quot;.</p>
                <button onClick={() => setSearchTerm('')} className="mt-3 text-sm underline" style={{ color: theme.gold }}>Clear search</button>
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}