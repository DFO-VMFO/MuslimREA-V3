import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const theme = {
  navy: '#0B1A30',
  gold: '#D4AF37',
  charcoal: '#333333',
  lightGray: '#F5F7FA',
};

const boardMembers = [
  { name: 'Zulikha Hussain', title: 'Chairman & Founder', region: 'National' },
  { name: 'Board Member', title: 'Vice Chairman', region: 'North America' },
  { name: 'Board Member', title: 'Secretary', region: 'National' },
  { name: 'Board Member', title: 'Treasurer', region: 'National' },
  { name: 'Board Member', title: 'Director – Middle East', region: 'MENA' },
  { name: 'Board Member', title: 'Director – Europe', region: 'Europe' },
];

export default function AboutPage() {
  return (
    <div className="font-sans flex flex-col min-h-screen text-slate-900">
      <Navbar />
      <main className="flex-grow">

        {/* Header */}
        <div className="py-20 text-white" style={{ backgroundColor: theme.navy }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex gap-2 text-sm text-gray-400 mb-4 uppercase tracking-widest text-xs font-bold">
              <Link href="/" className="hover:text-white">Home</Link>
              <span>/</span>
              <span style={{ color: theme.gold }}>About Us</span>
            </div>
            <h1 className="text-5xl font-serif font-bold mb-5">About MREA</h1>
            <p className="text-xl text-gray-300 max-w-2xl">
              A global 501(c)(6) professional trade association advancing Muslim real estate professionals through ethical leadership, professional development, and community advocacy.
            </p>
          </div>
        </div>

        {/* Overview */}
        <div className="py-20 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-serif font-bold mb-6" style={{ color: theme.navy }}>Our History & Mission</h2>
              <p className="text-gray-600 leading-relaxed mb-5">
                The Muslim Real Estate Association (MREA) was founded on the conviction that Muslim professionals deserve a national, faith-aligned institutional home in the real estate industry — one that mirrors the professionalism and advocacy power of organizations like NAHREP, AREAA, and NAR.
              </p>
              <p className="text-gray-600 leading-relaxed mb-5">
                MREA is organized as a 501(c)(6) non-profit trade association, meaning our mission is exclusively focused on advancing the professional interests of our members and the broader Muslim real estate community — not personal profit.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                From advocacy on Capitol Hill to local chapter deal rooms, from the Muslim Developer Council to the Muslim Women Real Estate Alliance, MREA provides the infrastructure, relationships, and resources that allow our members to compete, grow, and lead at the highest levels.
              </p>

              <div className="bg-slate-50 border-l-4 p-6 rounded-r-sm" style={{ borderColor: theme.gold }}>
                <h4 className="font-bold text-sm uppercase tracking-wider mb-2" style={{ color: theme.navy }}>Our Mission</h4>
                <p className="text-gray-700 italic leading-relaxed">
                  "To empower real estate professionals to elevate client services, advance careers, build wealth ethically, and strengthen communities through a global, faith-aligned professional trade association."
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-slate-900 p-6 rounded-sm text-white">
                <h4 className="font-bold uppercase tracking-wider text-xs mb-4" style={{ color: theme.gold }}>Association Facts</h4>
                <ul className="space-y-3 text-sm text-gray-300">
                  <li className="flex justify-between"><span>Status</span><span className="font-bold text-white">501(c)(6)</span></li>
                  <li className="flex justify-between"><span>Founded</span><span className="font-bold text-white">2023</span></li>
                  <li className="flex justify-between"><span>Chapters</span><span className="font-bold text-white">50+</span></li>
                  <li className="flex justify-between"><span>Councils</span><span className="font-bold text-white">4</span></li>
                  <li className="flex justify-between"><span>Women&apos;s Division</span><span className="font-bold text-white">MWREA</span></li>
                </ul>
              </div>
              <div className="bg-white border border-gray-100 shadow p-6 rounded-sm">
                <h4 className="font-bold uppercase tracking-wider text-xs mb-4" style={{ color: theme.navy }}>Quick Links</h4>
                <ul className="space-y-2 text-sm">
                  {[
                    { label: 'Join MREA', href: '/membership' },
                    { label: 'Find a Chapter', href: '/chapters' },
                    { label: 'Explore Councils', href: '/councils' },
                    { label: 'Women\'s Alliance', href: '/womens-alliance' },
                    { label: 'Contact Us', href: '/contact' },
                  ].map(link => (
                    <li key={link.href}>
                      <Link href={link.href} className="flex items-center gap-2 hover:underline" style={{ color: theme.gold }}>
                        <ArrowRight className="w-3 h-3" /> {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Chairman's Message */}
        <div id="chairman" className="py-20" style={{ backgroundColor: theme.lightGray }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="uppercase tracking-[0.2em] text-xs font-bold block mb-3" style={{ color: theme.gold }}>Leadership</span>
              <h2 className="text-3xl font-serif font-bold" style={{ color: theme.navy }}>Chairman&apos;s Message</h2>
              <div className="w-24 h-1 mx-auto mt-4" style={{ backgroundColor: theme.gold }}></div>
            </div>

            <div className="bg-white shadow-md rounded-sm p-10 relative">
              <div className="text-7xl font-serif absolute top-6 left-8 opacity-10" style={{ color: theme.navy }}>"</div>
              <div className="relative z-10">
                <p className="text-gray-700 leading-loose mb-6 text-lg italic">
                  We are building more than an association. We are building a legacy — a professional infrastructure that protects our community&apos;s capital, amplifies our voices in policy spaces, and creates generational opportunity for Muslim families across every zip code.
                </p>
                <p className="text-gray-600 leading-loose mb-6">
                  The Muslim real estate professional community has long been underrepresented in the national conversation. MREA exists to change that — permanently. Through our chapters, councils, and the Muslim Women Real Estate Alliance, we are claiming the institutional space that belongs to us and building the systems that will serve our children&apos;s children.
                </p>
                <p className="text-gray-600 leading-loose mb-8">
                  I invite every Muslim professional — regardless of where you are in your career — to join this movement, serve your local chapter, and help us shape the future of our community&apos;s financial legacy.
                </p>
                <div className="flex items-center gap-4 pt-6 border-t border-gray-100">
                  <div className="w-14 h-14 rounded-full bg-slate-200 flex items-center justify-center text-xl font-bold" style={{ color: theme.navy }}>ZH</div>
                  <div>
                    <div className="font-bold text-lg" style={{ color: theme.navy }}>Zulikha Hussain</div>
                    <div className="text-sm text-gray-500 uppercase tracking-wide">Chairman & Founder, MREA</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Leadership */}
        <div id="leadership" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <h2 className="text-3xl font-serif font-bold" style={{ color: theme.navy }}>Board of Directors</h2>
              <div className="w-24 h-1 mx-auto mt-4" style={{ backgroundColor: theme.gold }}></div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {boardMembers.map((member, i) => (
                <div key={i} className="bg-slate-50 border border-gray-100 rounded-sm p-6 flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full flex-shrink-0 flex items-center justify-center font-bold text-lg"
                       style={{ backgroundColor: `${theme.navy}15`, color: theme.navy }}>
                    {member.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-bold" style={{ color: theme.navy }}>{member.name}</div>
                    <div className="text-sm text-gray-600">{member.title}</div>
                    <div className="text-xs text-gray-400 uppercase tracking-wide mt-1">{member.region}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-10 text-center">
              <p className="text-gray-500 text-sm mb-4">Interested in serving on the MREA Board?</p>
              <Link href="/contact" className="inline-block px-6 py-2 rounded-sm font-bold text-sm border transition hover:bg-slate-900 hover:text-white"
                    style={{ borderColor: theme.navy, color: theme.navy }}>
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
