'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { Building, Menu, X, ChevronDown, Lock } from 'lucide-react';

const theme = {
  navy: '#0B1A30',
  gold: '#D4AF37',
  charcoal: '#333333',
};

function DropdownMenu({ label, items }: { label: string; items: { href: string; title: string; desc?: string }[] }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1 text-gray-300 hover:text-white transition font-medium"
        suppressHydrationWarning
      >
        {label} <ChevronDown className={`w-4 h-4 transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && (
        <div className="absolute top-full left-0 mt-2 w-64 rounded-sm shadow-2xl border border-gray-700 z-50 py-2"
             style={{ backgroundColor: theme.navy }}>
          {items.map(item => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block px-4 py-3 hover:bg-white/10 transition group"
            >
              <div className="text-sm font-semibold text-white group-hover:text-white">{item.title}</div>
              {item.desc && <div className="text-xs text-gray-400 mt-0.5">{item.desc}</div>}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);
  const [mobileResourcesOpen, setMobileResourcesOpen] = useState(false);

  const aboutItems = [
    { href: '/about', title: 'Overview', desc: 'Our history, mission & 501(c)(6) purpose' },
    { href: '/about#leadership', title: 'Leadership', desc: 'Board of Directors & operational team' },
    { href: '/about#chairman', title: "Chairman's Message", desc: 'A message from Zulikha Hussain' },
  ];

  const resourceItems = [
    { href: '/resources#media', title: 'Media & Press Releases' },
    { href: '/resources#research', title: 'Industry Research' },
    { href: '/resources#education', title: 'Educational Materials' },
  ];

  return (
    <nav className="sticky top-0 z-50 shadow-md" style={{ backgroundColor: theme.navy }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Building className="h-8 w-8 mr-2" style={{ color: theme.gold }} />
              <div className="flex flex-col leading-none">
                <span className="font-serif text-xl font-bold text-white tracking-widest">MREA</span>
                <span className="text-[9px] tracking-[0.2em] uppercase" style={{ color: theme.gold }}>Global Network</span>
              </div>
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-6">
            <Link href="/chapters" className="text-gray-300 hover:text-white transition font-medium">Chapters</Link>
            <Link href="/councils" className="text-gray-300 hover:text-white transition font-medium">Councils</Link>
            <Link href="/womens-alliance" className="text-gray-300 hover:text-white transition font-medium" style={{ color: theme.gold }}>Women&apos;s Alliance</Link>
            <Link href="/events" className="text-gray-300 hover:text-white transition font-medium">Events</Link>
            <Link href="/membership" className="text-gray-300 hover:text-white transition font-medium">Membership</Link>
            <DropdownMenu label="Resources" items={resourceItems} />
            <DropdownMenu label="About Us" items={aboutItems} />
            <Link href="/contact" className="text-gray-300 hover:text-white transition font-medium">Contact</Link>
            <div className="h-6 w-px bg-gray-600"></div>
            <Link href="/member-portal" className="flex items-center gap-1 px-5 py-2 rounded-sm font-bold transition-all shadow-lg hover:shadow-xl"
                    style={{ backgroundColor: theme.gold, color: theme.navy }}>
              <Lock className="w-4 h-4" /> Member Portal
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-gray-300">
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <div className="lg:hidden" style={{ backgroundColor: theme.charcoal }}>
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link href="/chapters" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-2 text-white">Chapters</Link>
            <Link href="/councils" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-2 text-white">Councils</Link>
            <Link href="/womens-alliance" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-2 font-semibold" style={{ color: theme.gold }}>Women&apos;s Alliance</Link>
            <Link href="/events" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-2 text-white">Events</Link>
            <Link href="/membership" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-2 text-white">Membership</Link>

            {/* Resources accordion */}
            <button onClick={() => setMobileResourcesOpen(!mobileResourcesOpen)} className="flex items-center justify-between w-full px-3 py-2 text-white">
              Resources <ChevronDown className={`w-4 h-4 transition-transform ${mobileResourcesOpen ? 'rotate-180' : ''}`} />
            </button>
            {mobileResourcesOpen && resourceItems.map(item => (
              <Link key={item.href} href={item.href} onClick={() => setMobileMenuOpen(false)} className="block pl-6 pr-3 py-2 text-gray-300 text-sm">{item.title}</Link>
            ))}

            {/* About accordion */}
            <button onClick={() => setMobileAboutOpen(!mobileAboutOpen)} className="flex items-center justify-between w-full px-3 py-2 text-white">
              About Us <ChevronDown className={`w-4 h-4 transition-transform ${mobileAboutOpen ? 'rotate-180' : ''}`} />
            </button>
            {mobileAboutOpen && aboutItems.map(item => (
              <Link key={item.href} href={item.href} onClick={() => setMobileMenuOpen(false)} className="block pl-6 pr-3 py-2 text-gray-300 text-sm">{item.title}</Link>
            ))}

            <Link href="/contact" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-2 text-white">Contact</Link>
            <div className="px-3 py-2">
              <Link href="/member-portal" onClick={() => setMobileMenuOpen(false)} className="flex items-center justify-center gap-2 w-full py-2 rounded-sm font-bold"
                      style={{ backgroundColor: theme.gold, color: theme.navy }}>
                <Lock className="w-4 h-4" /> Member Portal
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}