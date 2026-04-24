import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { Lock, Users, Briefcase, ArrowRight } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Member Portal',
  description: 'MREA Member Portal — secure access for dues-paying members.',
};

const theme = {
  navy: '#0B1A30',
  gold: '#D4AF37',
  lightGray: '#F5F7FA',
};

export default function MemberPortal() {
  return (
    <div className="font-sans flex flex-col min-h-screen text-slate-900">
      <Navbar />
      <main className="flex-grow">
        <div className="min-h-screen flex flex-col items-center justify-center py-24 px-4" style={{ backgroundColor: theme.lightGray }}>
          <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6" style={{ backgroundColor: theme.navy }}>
            <Lock className="w-8 h-8" style={{ color: theme.gold }} />
          </div>
          <span className="uppercase tracking-[0.2em] text-xs font-bold mb-3" style={{ color: theme.gold }}>Members Only</span>
          <h1 className="text-4xl font-serif font-bold mb-4 text-center" style={{ color: theme.navy }}>Member Portal</h1>
          <p className="text-gray-500 text-center max-w-md mb-3 leading-relaxed">
            The MREA Member Portal is currently in development. It will provide members with access to exclusive deal flow, chapter resources, council communications, and event registration.
          </p>
          <p className="text-gray-400 text-sm text-center mb-10">
            For immediate membership inquiries, please contact <a href="mailto:membership@muslimrea.org" className="underline hover:text-gray-600">membership@muslimrea.org</a>
          </p>
          <div className="flex flex-wrap gap-3 justify-center mb-16">
            <Link href="/membership" className="inline-flex items-center gap-2 px-6 py-3 rounded-sm font-bold text-sm transition hover:opacity-90"
              style={{ backgroundColor: theme.navy, color: 'white' }}>
              <Users className="w-4 h-4" /> View Membership Plans
            </Link>
            <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-sm font-bold text-sm border transition hover:bg-gray-100"
              style={{ borderColor: theme.navy, color: theme.navy }}>
              <Briefcase className="w-4 h-4" /> Contact Our Team
            </Link>
          </div>

          <div className="w-full max-w-2xl grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
            {[
              { label: 'Deal Flow Access', desc: 'Exclusive co-investment opportunities across all chapters' },
              { label: 'Council Forums', desc: 'Private discussion boards for each strategic council' },
              { label: 'Chapter Events', desc: 'Early registration and member-only event access' },
            ].map((f, i) => (
              <div key={i} className="bg-white p-5 rounded shadow-sm border border-gray-100">
                <div className="font-bold text-sm mb-1" style={{ color: theme.navy }}>{f.label}</div>
                <div className="text-gray-500 text-xs leading-relaxed">{f.desc}</div>
              </div>
            ))}
          </div>

          <Link href="/" className="mt-12 flex items-center gap-1 text-sm font-bold" style={{ color: theme.gold }}>
            <ArrowRight className="w-4 h-4 rotate-180" /> Back to Home
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
