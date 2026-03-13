'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Building, Menu, X, Lock } from 'lucide-react';

const theme = {
  navy: '#0B1A30',
  gold: '#D4AF37',
  charcoal: '#333333',
};

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 shadow-md" style={{ backgroundColor: theme.navy }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center cursor-pointer">
            <Link href="/" className="flex items-center">
              <Building className="h-8 w-8 mr-2" style={{ color: theme.gold }} />
              <span className="font-serif text-2xl font-bold text-white tracking-wider">MREA<span style={{ color: theme.gold }}>.</span></span>
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-300 hover:text-white transition font-medium">National</Link>
            <Link href="/chapters" className="text-gray-300 hover:text-white transition font-medium">Chapters</Link>
            <Link href="/events" className="text-gray-300 hover:text-white transition font-medium">Events</Link>
            <Link href="/membership" className="text-gray-300 hover:text-white transition font-medium">Membership</Link>
            <button className="text-gray-300 hover:text-white transition font-medium flex items-center">
              <Lock className="w-4 h-4 mr-1" /> Deal Room
            </button>
            <div className="h-6 w-px bg-gray-600"></div>
            <button className="px-5 py-2 rounded-sm font-bold text-white transition-all shadow-lg hover:shadow-xl" 
                    style={{ backgroundColor: theme.gold, color: theme.navy }}>
              Member Portal
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-gray-300">
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <div className="md:hidden" style={{ backgroundColor: theme.charcoal }}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-2 text-white w-full text-left">National</Link>
            <Link href="/chapters" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-2 text-white w-full text-left">Chapters</Link>
            <Link href="/events" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-2 text-white w-full text-left">Events</Link>
            <Link href="/membership" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-2 text-white w-full text-left">Membership</Link>
            <button className="block px-3 py-2 text-white w-full text-left" style={{ color: theme.gold }}>Member Login</button>
          </div>
        </div>
      )}
    </nav>
  );
}