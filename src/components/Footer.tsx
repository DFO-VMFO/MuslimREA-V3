import Link from 'next/link';
import { Building } from 'lucide-react';

const theme = {
  navy: '#0B1A30',
  gold: '#D4AF37',
  charcoal: '#333333',
};

export default function Footer() {
  return (
    <footer className="text-white py-12" style={{ backgroundColor: theme.charcoal }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <div className="flex items-center mb-4">
            <Building className="h-6 w-6 mr-2" style={{ color: theme.gold }} />
            <span className="font-serif text-xl font-bold tracking-wider">MREA</span>
          </div>
          <p className="text-gray-400 text-sm">The global institutional hub for Muslim real estate professionals, investors, and developers.</p>
        </div>
        <div>
          <h4 className="font-bold mb-4 uppercase text-sm tracking-wider" style={{ color: theme.gold }}>Platform</h4>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li><Link href="#" className="hover:text-white transition">Member Directory</Link></li>
            <li><Link href="#" className="hover:text-white transition">Institutional Deal Room</Link></li>
            <li><Link href="#" className="hover:text-white transition">Advocacy & Research</Link></li>
            <li><Link href="#" className="hover:text-white transition">MWIRE Initiative</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-4 uppercase text-sm tracking-wider" style={{ color: theme.gold }}>Global Hubs</h4>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li><Link href="/chapters" className="hover:text-white transition">North America</Link></li>
            <li><Link href="/chapters" className="hover:text-white transition">Middle East (MENA)</Link></li>
            <li><Link href="/chapters" className="hover:text-white transition">Europe</Link></li>
            <li><Link href="/chapters" className="hover:text-white transition">Asia Pacific</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-4 uppercase text-sm tracking-wider" style={{ color: theme.gold }}>Connect</h4>
          <button className="w-full py-2 mb-2 rounded-sm font-semibold text-center transition" style={{ border: `1px solid ${theme.gold}`, color: theme.gold }}>
            Partner Inquiries
          </button>
          <button className="w-full py-2 rounded-sm font-semibold text-center text-white transition hover:opacity-90" style={{ backgroundColor: theme.navy }}>
            Join Newsletter
          </button>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-8 border-t border-gray-700 text-sm text-gray-500 flex flex-col md:flex-row justify-between">
        <p>&copy; 2026 Global Muslim Real Estate Association. All rights reserved.</p>
        <div className="space-x-4 mt-4 md:mt-0">
          <Link href="#" className="hover:text-white">Privacy Policy</Link>
          <Link href="#" className="hover:text-white">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}