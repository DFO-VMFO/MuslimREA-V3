'use client';

import Link from 'next/link';
import { Building } from 'lucide-react';

const theme = {
  navy: '#0B1A30',
  gold: '#D4AF37',
  charcoal: '#333333',
};

export default function Footer() {
  return (
    <footer className="text-white py-14" style={{ backgroundColor: theme.charcoal }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-5 gap-8">
        {/* Brand */}
        <div className="md:col-span-2">
          <div className="flex items-center mb-4">
            <Building className="h-6 w-6 mr-2" style={{ color: theme.gold }} />
            <div>
              <div className="font-serif text-xl font-bold tracking-widest">MREA</div>
              <div className="text-[9px] tracking-[0.2em] uppercase" style={{ color: theme.gold }}>Global Network</div>
            </div>
          </div>
          <p className="text-gray-400 text-sm mb-4 leading-relaxed max-w-xs">A 501(c)(6) trade association dedicated to empowering Muslim real estate professionals worldwide through ethical leadership, advocacy, and community.</p>
          <p className="text-xs text-gray-600 mb-1">&copy; {new Date().getFullYear()} Muslim Real Estate Association, a Texas Nonprofit Corporation.</p>
          <p className="text-xs text-gray-700 leading-relaxed">501(c)(6) trade organization. Not a securities dealer or investment advisor. Fiscal year ends December 31.</p>
        </div>

        {/* Platform */}
        <div>
          <h4 className="font-bold mb-4 uppercase text-xs tracking-widest" style={{ color: theme.gold }}>Platform</h4>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li><Link href="/councils" className="hover:text-white transition">Councils</Link></li>
            <li><Link href="/womens-alliance" className="hover:text-white transition">Women&apos;s Alliance</Link></li>
            <li><Link href="/chapters" className="hover:text-white transition">Global Chapters</Link></li>
            <li><Link href="/events" className="hover:text-white transition">Events</Link></li>
            <li><Link href="/membership" className="hover:text-white transition">Membership</Link></li>
            <li><Link href="/member-portal" className="hover:text-white transition">Member Portal</Link></li>
          </ul>
        </div>

        {/* Organization */}
        <div>
          <h4 className="font-bold mb-4 uppercase text-xs tracking-widest" style={{ color: theme.gold }}>Organization</h4>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li><Link href="/about" className="hover:text-white transition">About MREA</Link></li>
            <li><Link href="/about#leadership" className="hover:text-white transition">Leadership</Link></li>
            <li><Link href="/about#chairman" className="hover:text-white transition">Chairman&apos;s Message</Link></li>
            <li><Link href="/resources" className="hover:text-white transition">Resources</Link></li>
            <li><Link href="/resources#media" className="hover:text-white transition">Press Releases</Link></li>
            <li><Link href="/contact" className="hover:text-white transition">Contact Us</Link></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="font-bold mb-4 uppercase text-xs tracking-widest" style={{ color: theme.gold }}>Stay Connected</h4>
          <p className="text-gray-400 text-xs mb-4 leading-relaxed">Get chapter updates, event invitations, and research delivered to your inbox.</p>
          <form className="space-y-2" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="Your email"
              className="w-full px-3 py-2 rounded-sm text-sm text-gray-900 focus:outline-none"
            />
            <button type="submit" className="w-full py-2 rounded-sm text-sm font-bold transition hover:opacity-90"
                    style={{ backgroundColor: theme.gold, color: theme.navy }}>
              Join Mailing List
            </button>
          </form>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 pt-6 border-t border-gray-700 text-xs text-gray-600 flex flex-col md:flex-row justify-between gap-3">
        <p>Muslim Real Estate Association, a Texas Nonprofit Corporation. 501(c)(6) Trade Association. All rights reserved.</p>
        <div className="flex gap-4">
          <Link href="#" className="hover:text-white transition">Privacy Policy</Link>
          <Link href="#" className="hover:text-white transition">Terms of Service</Link>
          <Link href="#" className="hover:text-white transition">Bylaws</Link>
        </div>
      </div>
    </footer>
  );
}