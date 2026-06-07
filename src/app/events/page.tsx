'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Image from 'next/image';
import { Calendar, MapPin } from 'lucide-react';

const theme = {
  navy: '#0B1A30',
  gold: '#D4AF37',
  charcoal: '#333333',
  lightGray: '#F5F7FA'
};

const MOCK_EVENTS = [
  { id: 1, title: 'Global Real Estate Summit 2026', date: 'Oct 12-14, 2026', location: 'Dubai, UAE', type: 'Global', tags: ['Institutional', 'Networking'], image: 'https://images.unsplash.com/photo-1551818255-e6e10975bc17?auto=format&fit=crop&q=80&w=800' },
  { id: 2, title: 'MWREIC Leadership Panel', date: 'Nov 2026', location: 'London Chapter', type: 'Local', tags: ['Women-Only', 'Leadership'], image: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=800' },
  { id: 3, title: 'Master Mind coming up, in Irving Texas', date: 'May 2026', location: 'Dallas Chapter', type: 'Local', tags: ['Deal Room', 'Networking'], image: 'https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&q=80&w=800' },
];

export default function Events() {
  const [filter, setFilter] = useState('All');

  return (
    <div className="font-sans flex flex-col min-h-screen text-slate-900">
      <Navbar />
      <main className="flex-grow">
        <div className="min-h-screen bg-white pb-24">
          <div style={{ backgroundColor: theme.navy }} className="py-16 text-white text-center">
            <div className="max-w-3xl mx-auto px-4">
              <h1 className="text-4xl font-serif font-bold mb-4">Event & Education Portal</h1>
              <p className="text-xl text-gray-300">
                Register for national conventions, local chapter meetups, and exclusive MWREIC panels.
              </p>
            </div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
            {/* Controls */}
            <div className="flex flex-col md:flex-row justify-between items-center mb-10 border-b pb-4">
              <div className="flex space-x-2 mb-4 md:mb-0 bg-slate-100 p-1 rounded-sm">
                {['All', 'Global', 'Local', 'MWREIC'].map(f => (
                  <button 
                    key={f}
                    onClick={() => setFilter(f)}
                    className={`px-6 py-2 rounded-sm text-sm font-bold transition ${filter === f ? 'bg-white shadow text-slate-900' : 'text-slate-500 hover:text-slate-900'}`}
                  >
                    {f}
                  </button>
                ))}
              </div>
              <button className="flex items-center text-sm font-bold" style={{ color: theme.navy }}>
                <Calendar className="w-4 h-4 mr-2" /> View Calendar Grid
              </button>
            </div>

            {/* Event List */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {MOCK_EVENTS.filter(e => filter === 'All' || e.type === filter || e.tags.includes(filter)).map(event => (
                <div key={event.id} className="bg-white rounded-sm overflow-hidden shadow border border-gray-100 flex flex-col">
                  <div className="h-48 relative">
                    <Image
                      src={event.image}
                      alt={event.title}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                      className="object-cover"
                    />
                    <div className="absolute top-4 left-4 flex space-x-2">
                      <span className="bg-white/90 backdrop-blur px-2 py-1 rounded text-xs font-bold" style={{ color: theme.navy }}>{event.type}</span>
                      {event.tags.includes('Women-Only') && (
                        <span className="bg-pink-100/90 backdrop-blur px-2 py-1 rounded text-xs font-bold text-pink-800">MWREIC</span>
                      )}
                    </div>
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="text-sm font-bold mb-2 flex items-center" style={{ color: theme.gold }}>
                      <Calendar className="w-4 h-4 mr-1" /> {event.date}
                    </div>
                    <h3 className="text-xl font-bold mb-2 flex-1" style={{ color: theme.navy }}>{event.title}</h3>
                    <div className="flex items-center text-gray-500 text-sm mb-6">
                      <MapPin className="w-4 h-4 mr-1" /> {event.location}
                    </div>
                    <button className="w-full py-3 rounded-sm font-bold text-white transition hover:opacity-90" style={{ backgroundColor: theme.navy }}>
                      Get Tickets
                    </button>
                  </div>
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