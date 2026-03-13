'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { Users, ArrowRight, Search } from 'lucide-react';

const theme = {
  navy: '#0B1A30',
  gold: '#D4AF37',
  charcoal: '#333333',
  lightGray: '#F5F7FA'
};

// Mock data
const MOCK_CHAPTERS = [
  { id: 'houston', name: 'Houston', region: 'North America', members: 1240, image: 'https://images.unsplash.com/photo-1531218150217-54595bc8bbf9?auto=format&fit=crop&q=80&w=800' },
  { id: 'dubai', name: 'Dubai', region: 'Middle East', members: 3100, image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80&w=800' },
  { id: 'london', name: 'London', region: 'Europe', members: 2150, image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&q=80&w=800' },
  { id: 'istanbul', name: 'Istanbul', region: 'Europe/Asia', members: 1800, image: 'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&fit=crop&q=80&w=800' },
];

export default function Chapters() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredChapters = MOCK_CHAPTERS.filter(chapter =>
    chapter.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    chapter.region.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="font-sans flex flex-col min-h-screen text-slate-900">
      <Navbar />
      <main className="flex-grow">
        <div className="min-h-screen pb-24" style={{ backgroundColor: theme.lightGray }}>
          <div style={{ backgroundColor: theme.navy }} className="py-16 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h1 className="text-4xl font-serif font-bold mb-4">Global Chapter Network</h1>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Connect with local leadership, access market-specific deal flow, and attend exclusive regional events.
              </p>

              <div className="mt-8 max-w-xl mx-auto relative">
                <input 
                  type="text" 
                  placeholder="Search by city, region, or country..." 
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full py-4 pl-12 pr-4 rounded-sm text-gray-900 focus:outline-none focus:ring-2"
                />
                <Search className="absolute left-4 top-4 text-gray-400" />
              </div>
            </div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredChapters.map(chapter => (
                <div 
                  key={chapter.id} 
                  className="bg-white rounded-sm overflow-hidden shadow-md hover:shadow-2xl transition-all cursor-pointer group border border-gray-100"
                >
                  <div className="h-48 overflow-hidden relative">
                    <img src={chapter.image} alt={chapter.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded text-xs font-bold shadow" style={{ color: theme.navy }}>
                      {chapter.region}
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="text-2xl font-serif font-bold" style={{ color: theme.navy }}>MREA {chapter.name}</h3>
                    </div>
                    <div className="flex items-center text-gray-500 text-sm mb-6">
                      <Users className="w-4 h-4 mr-2" />
                      {chapter.members.toLocaleString()} Active Members
                    </div>
                    <Link href={`/chapters/${chapter.id}`} className="flex items-center font-bold" style={{ color: theme.gold }}>
                      Visit Chapter Portal <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
            {filteredChapters.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500">No chapters found matching your search.</p>
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}