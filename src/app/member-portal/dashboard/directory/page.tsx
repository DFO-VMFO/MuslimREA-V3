'use client';

import { useState } from 'react';
import { Search, MapPin, Briefcase, Linkedin, Mail } from 'lucide-react';

const theme = { navy: '#0B1A30', gold: '#D4AF37' };

const CHAPTERS = ['All Chapters', 'Houston, TX', 'Dallas, TX', 'New York, NY', 'Chicago, IL', 'Los Angeles, CA', 'Washington, D.C.'];
const SPECIALTIES = ['All Specialties', 'Residential Brokerage', 'Commercial Brokerage', 'Multifamily Investment', 'Ground-Up Development', 'Mortgage & Lending', 'Property Management', 'Real Estate Law'];
const TIERS = ['All Tiers', 'Founding Member', 'Senior Membership', 'Individual Professional', 'Associate'];

const MEMBERS = [
  {
    id: 1,
    name: 'Aisha Rahman',
    title: 'Commercial Real Estate Broker',
    company: 'Rahman Commercial Group',
    chapter: 'Houston, TX',
    tier: 'Senior Membership',
    specialties: ['Commercial Brokerage', 'Multifamily Investment'],
    bio: 'Specializing in retail and office leasing in Houston Metro. 15 years of experience in tenant representation and investment sales.',
    linkedin: true,
  },
  {
    id: 2,
    name: 'Omar Siddiqui',
    title: 'Managing Principal',
    company: 'Crescent Capital Development',
    chapter: 'Dallas, TX',
    tier: 'Founding Member',
    specialties: ['Ground-Up Development', 'Multifamily Investment'],
    bio: 'Ground-up developer focused on mixed-use and multifamily in DFW. Committed to halal finance and community-centered development.',
    linkedin: true,
  },
  {
    id: 3,
    name: 'Fatima Al-Amin',
    title: 'Residential Broker & MWREA Chapter Lead',
    company: 'Al-Amin Real Estate Group',
    chapter: 'Chicago, IL',
    tier: 'Individual Professional',
    specialties: ['Residential Brokerage'],
    bio: 'Chicagoland residential specialist and MWREA chapter lead. Passionate about homeownership access for Muslim families.',
    linkedin: true,
  },
  {
    id: 4,
    name: 'Ibrahim Kassem',
    title: 'Real Estate Attorney',
    company: 'Kassem & Partners LLP',
    chapter: 'New York, NY',
    tier: 'Senior Membership',
    specialties: ['Real Estate Law'],
    bio: 'Real estate transactional attorney based in Manhattan. Advises on commercial acquisitions, halal financing structures, and JV agreements.',
    linkedin: false,
  },
  {
    id: 5,
    name: 'Nadia Patel',
    title: 'Mortgage Broker — Halal Specialist',
    company: 'Amanah Home Finance',
    chapter: 'Los Angeles, CA',
    tier: 'Individual Professional',
    specialties: ['Mortgage & Lending'],
    bio: 'Specializing in Shariah-compliant home financing. Helping Muslim families navigate the homeownership process with integrity.',
    linkedin: true,
  },
  {
    id: 6,
    name: 'Yusuf Haddad',
    title: 'Senior Investment Analyst',
    company: 'Madinah Capital Partners',
    chapter: 'Washington, D.C.',
    tier: 'Senior Membership',
    specialties: ['Multifamily Investment', 'Ground-Up Development'],
    bio: 'Investment analyst specializing in value-add multifamily and affordable housing. Prior experience at HUD and NMHC.',
    linkedin: true,
  },
  {
    id: 7,
    name: 'Mariam Osei',
    title: 'Property Manager',
    company: 'Osei Property Solutions',
    chapter: 'Houston, TX',
    tier: 'Associate',
    specialties: ['Property Management'],
    bio: 'Experienced property manager overseeing a portfolio of 300+ residential units across Houston. Focused on tenant experience and ethical management.',
    linkedin: false,
  },
  {
    id: 8,
    name: 'Khalid Nassar',
    title: 'Residential Broker',
    company: 'Nassar Realty Partners',
    chapter: 'Houston, TX',
    tier: 'Individual Professional',
    specialties: ['Residential Brokerage'],
    bio: 'Houston-based residential broker focused on luxury and first-time homebuyer segments. Fluent in Arabic and English.',
    linkedin: true,
  },
];

const TIER_COLORS: Record<string, { bg: string; text: string }> = {
  'Founding Member': { bg: `#fef9c3`, text: '#854d0e' },
  'Senior Membership': { bg: '#e0e7ff', text: '#3730a3' },
  'Individual Professional': { bg: '#d1fae5', text: '#065f46' },
  Associate: { bg: '#f3f4f6', text: '#374151' },
};

export default function DirectoryPage() {
  const [search, setSearch] = useState('');
  const [chapter, setChapter] = useState('All Chapters');
  const [specialty, setSpecialty] = useState('All Specialties');
  const [tier, setTier] = useState('All Tiers');

  const filtered = MEMBERS.filter((m) => {
    const matchSearch =
      search === '' ||
      m.name.toLowerCase().includes(search.toLowerCase()) ||
      m.company.toLowerCase().includes(search.toLowerCase()) ||
      m.title.toLowerCase().includes(search.toLowerCase());
    const matchChapter = chapter === 'All Chapters' || m.chapter === chapter;
    const matchSpecialty =
      specialty === 'All Specialties' || m.specialties.includes(specialty);
    const matchTier = tier === 'All Tiers' || m.tier === tier;
    return matchSearch && matchChapter && matchSpecialty && matchTier;
  });

  return (
    <div className="p-6 lg:p-10 max-w-5xl mx-auto w-full space-y-8">
      <div>
        <h1 className="text-2xl font-serif font-bold" style={{ color: theme.navy }}>
          Member Directory
        </h1>
        <p className="text-sm text-gray-500 mt-1">
          Connect with MREA members across chapters, specialties, and tiers.
        </p>
      </div>

      {/* Search & filters */}
      <div className="bg-white border border-gray-100 rounded-sm shadow-sm p-5 space-y-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search by name, company, or title..."
            className="w-full pl-9 pr-4 py-2.5 border border-gray-200 rounded-sm text-sm focus:outline-none focus:ring-1"
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {[
            { label: 'Chapter', value: chapter, options: CHAPTERS, onChange: setChapter },
            { label: 'Specialty', value: specialty, options: SPECIALTIES, onChange: setSpecialty },
            { label: 'Tier', value: tier, options: TIERS, onChange: setTier },
          ].map(({ label, value, options, onChange }) => (
            <div key={label}>
              <label className="block text-xs font-semibold text-gray-500 mb-1">{label}</label>
              <select
                value={value}
                onChange={(e) => onChange(e.target.value)}
                className="w-full px-3 py-2 border border-gray-200 rounded-sm text-sm focus:outline-none focus:ring-1 bg-white"
              >
                {options.map((o) => (
                  <option key={o}>{o}</option>
                ))}
              </select>
            </div>
          ))}
        </div>
        <p className="text-xs text-gray-400">
          Showing {filtered.length} of {MEMBERS.length} members
        </p>
      </div>

      {/* Member grid */}
      {filtered.length === 0 ? (
        <p className="text-sm text-gray-400 text-center py-16">
          No members match your search criteria.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {filtered.map((member) => {
            const tierColor = TIER_COLORS[member.tier] || { bg: '#f3f4f6', text: '#374151' };
            return (
              <div
                key={member.id}
                className="bg-white border border-gray-100 rounded-sm shadow-sm p-5 hover:shadow-md transition"
              >
                <div className="flex items-start gap-3 mb-3">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0"
                    style={{ backgroundColor: `${theme.navy}10`, color: theme.navy }}
                  >
                    {member.name.charAt(0)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-bold text-sm truncate" style={{ color: theme.navy }}>
                      {member.name}
                    </p>
                    <p className="text-xs text-gray-500 truncate">{member.title}</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1.5 mb-3">
                  <span
                    className="text-[10px] font-bold px-2 py-0.5 rounded"
                    style={{ backgroundColor: tierColor.bg, color: tierColor.text }}
                  >
                    {member.tier}
                  </span>
                  {member.specialties.map((s) => (
                    <span
                      key={s}
                      className="text-[10px] text-gray-500 bg-gray-100 px-2 py-0.5 rounded"
                    >
                      {s}
                    </span>
                  ))}
                </div>

                <p className="text-xs text-gray-600 leading-relaxed mb-3">{member.bio}</p>

                <div className="flex items-center justify-between text-xs text-gray-400">
                  <div className="flex items-center gap-3">
                    <span className="flex items-center gap-1">
                      <Briefcase className="w-3 h-3" /> {member.company}
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-3 h-3" />
                    {member.chapter}
                  </div>
                </div>

                <div className="mt-3 pt-3 border-t border-gray-100 flex gap-3">
                  <button
                    className="flex items-center gap-1.5 text-xs font-bold transition hover:opacity-80"
                    style={{ color: theme.gold }}
                  >
                    <Mail className="w-3.5 h-3.5" /> Connect
                  </button>
                  {member.linkedin && (
                    <button
                      className="flex items-center gap-1.5 text-xs font-bold text-gray-500 hover:text-gray-700 transition"
                    >
                      <Linkedin className="w-3.5 h-3.5" /> LinkedIn
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
