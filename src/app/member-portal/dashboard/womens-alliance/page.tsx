'use client';

import Link from 'next/link';
import { Heart, TrendingUp, Shield, Calendar, ArrowRight, FileText, Users, Star } from 'lucide-react';

const theme = { navy: '#0B1A30', gold: '#D4AF37' };

const INVESTMENT_CLUB_RESOURCES = [
  { title: 'Investment Club Orientation & Membership Guide', type: 'PDF Guide', date: 'Jan 2026' },
  { title: 'Halal Real Estate Syndication — How It Works', type: 'PDF Brief', date: 'Mar 2026' },
  { title: 'Deal Review Framework for MWREA Investment Club', type: 'PDF Template', date: 'Feb 2026' },
  { title: 'Q1 2026 Club Portfolio Summary', type: 'PDF Report', date: 'Apr 2026' },
];

const MWIAC_RESOURCES = [
  { title: 'MWIAC Founding Charter & Mission Statement', type: 'PDF', date: 'Sep 2024' },
  { title: 'Housing Advocacy Toolkit for Muslim Women', type: 'PDF Guide', date: 'Dec 2025' },
  { title: 'Legislative Briefing: Zoning Reform & Muslim Communities', type: 'PDF Brief', date: 'Feb 2026', new: true },
  { title: 'MWIAC Advocacy Fellows Program — 2026 Application', type: 'PDF', date: 'May 2026', new: true },
];

const ADVOCACY_CALENDAR = [
  { date: 'June 25, 2026', title: 'Housing Policy Roundtable', location: 'Washington, D.C.', type: 'In-Person' },
  { date: 'July 10, 2026', title: 'MWIAC Virtual Town Hall', location: 'Virtual', type: 'Virtual' },
  { date: 'August 5, 2026', title: 'State Housing Policy Briefing', location: 'Austin, TX', type: 'In-Person' },
  { date: 'September 12, 2026', title: 'MWIAC Summit Panel', location: 'Houston, TX', type: 'In-Person' },
];

const MENTORSHIP_COHORT = [
  {
    name: 'Aisha Rahman',
    title: 'Commercial Broker, Senior Member',
    specialty: 'Commercial Brokerage',
    availability: 'Accepting mentees',
  },
  {
    name: 'Fatima Al-Amin',
    title: 'Residential Broker & MWREA Chapter Lead',
    specialty: 'Residential Brokerage',
    availability: 'Waitlist',
  },
  {
    name: 'Nadia Patel',
    title: 'Halal Mortgage Specialist',
    specialty: 'Halal Finance',
    availability: 'Accepting mentees',
  },
];

export default function WomensAlliancePage() {
  return (
    <div className="p-6 lg:p-10 max-w-5xl mx-auto w-full space-y-10">
      {/* Header */}
      <div>
        <div className="flex items-center gap-2 mb-1">
          <Heart className="w-5 h-5" style={{ color: theme.gold }} />
          <span className="text-xs font-bold uppercase tracking-wider" style={{ color: theme.gold }}>
            Women&apos;s Alliance
          </span>
        </div>
        <h1 className="text-2xl font-serif font-bold" style={{ color: theme.navy }}>
          Muslim Women Real Estate Association
        </h1>
        <p className="text-sm text-gray-500 mt-1">
          Your portal hub for MWREA membership, the Investment Club, MWIAC advocacy council, and mentorship programs.
        </p>
      </div>

      {/* Membership status card */}
      <div className="rounded-sm overflow-hidden shadow-sm">
        <div className="px-7 py-7 text-white" style={{ backgroundColor: theme.navy }}>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <p className="text-xs font-bold uppercase tracking-wider mb-1" style={{ color: theme.gold }}>
                Your MWREA Status
              </p>
              <p className="text-xl font-bold font-serif">Active Member — Individual Professional</p>
              <p className="text-sm text-gray-400 mt-1">Houston Chapter &middot; Joined March 2025</p>
            </div>
            <div className="flex flex-col gap-2 text-xs">
              <span className="text-green-400 font-bold bg-green-400/10 px-3 py-1.5 rounded-sm text-center">
                Investment Club: Active
              </span>
              <span className="text-green-400 font-bold bg-green-400/10 px-3 py-1.5 rounded-sm text-center">
                MWIAC Access: Active
              </span>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-3 divide-x divide-gray-100 bg-white border-x border-b border-gray-100">
          {[
            { label: 'Network Size', value: '480+' },
            { label: 'Active Chapters', value: '12' },
            { label: 'Programs', value: '4 Active' },
          ].map((s) => (
            <div key={s.label} className="px-4 py-4 text-center">
              <div className="text-lg font-bold" style={{ color: theme.navy }}>{s.value}</div>
              <div className="text-xs text-gray-500 uppercase tracking-wider mt-0.5">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Two-column content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

        {/* Investment Club */}
        <section className="bg-white border border-gray-100 rounded-sm shadow-sm overflow-hidden">
          <div className="px-6 py-5 border-b border-gray-100">
            <div className="flex items-center gap-2">
              <TrendingUp className="w-4 h-4" style={{ color: theme.gold }} />
              <h2 className="font-bold text-sm uppercase tracking-wider" style={{ color: theme.navy }}>
                MWREA Investment Club
              </h2>
            </div>
            <p className="text-xs text-gray-500 mt-1">
              Halal real estate investment collective for MWREA members. Pooled acquisitions, due diligence, and investor education.
            </p>
          </div>
          <div className="p-6 space-y-5">
            <div>
              <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3 flex items-center gap-1.5">
                <FileText className="w-3.5 h-3.5" /> Club Resources
              </p>
              <ul className="space-y-2.5">
                {INVESTMENT_CLUB_RESOURCES.map((r) => (
                  <li key={r.title} className="flex items-start gap-2 text-xs">
                    <span
                      className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0"
                      style={{ backgroundColor: theme.gold }}
                    />
                    <div>
                      <span className="font-semibold text-gray-700 hover:underline cursor-pointer">
                        {r.title}
                      </span>
                      <span className="text-gray-400 ml-1.5">
                        {r.type} &middot; {r.date}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="pt-4 border-t border-gray-100">
              <p className="text-xs text-gray-500 mb-3">
                <strong className="text-gray-700">Next Club Meeting:</strong> June 18, 2026 &middot; Virtual &middot; 7:00 PM CDT
              </p>
              <button
                className="w-full py-2.5 rounded-sm text-xs font-bold text-white transition hover:opacity-90"
                style={{ backgroundColor: theme.navy }}
              >
                Register for June Meeting
              </button>
            </div>
          </div>
        </section>

        {/* MWIAC */}
        <section className="bg-white border border-gray-100 rounded-sm shadow-sm overflow-hidden">
          <div className="px-6 py-5 border-b border-gray-100">
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4" style={{ color: theme.gold }} />
              <h2 className="font-bold text-sm uppercase tracking-wider" style={{ color: theme.navy }}>
                MWIAC Advocacy Council
              </h2>
            </div>
            <p className="text-xs text-gray-500 mt-1">
              Muslim Women Impact &amp; Advocacy Council — advancing housing equity and women&apos;s economic empowerment through policy.
            </p>
          </div>
          <div className="p-6 space-y-5">
            <div>
              <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3 flex items-center gap-1.5">
                <FileText className="w-3.5 h-3.5" /> Advocacy Resources
              </p>
              <ul className="space-y-2.5">
                {MWIAC_RESOURCES.map((r) => (
                  <li key={r.title} className="flex items-start gap-2 text-xs">
                    <span
                      className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0"
                      style={{ backgroundColor: theme.gold }}
                    />
                    <div className="min-w-0">
                      <span className="font-semibold text-gray-700 hover:underline cursor-pointer">
                        {r.title}
                      </span>
                      {r.new && (
                        <span
                          className="ml-1.5 text-[9px] font-bold px-1 py-0.5 rounded"
                          style={{ backgroundColor: `${theme.gold}20`, color: theme.gold }}
                        >
                          New
                        </span>
                      )}
                      <span className="text-gray-400 block mt-0.5">
                        {r.type} &middot; {r.date}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="pt-4 border-t border-gray-100">
              <Link
                href="/member-portal/dashboard/events"
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-sm text-xs font-bold transition hover:opacity-90"
                style={{ backgroundColor: theme.navy, color: 'white' }}
              >
                View Advocacy Calendar <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </section>
      </div>

      {/* Advocacy calendar */}
      <section>
        <div className="flex items-center gap-2 mb-4">
          <Calendar className="w-4 h-4" style={{ color: theme.gold }} />
          <h2 className="text-sm font-bold uppercase tracking-wider" style={{ color: theme.navy }}>
            Advocacy &amp; Program Calendar
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {ADVOCACY_CALENDAR.map((event) => (
            <div
              key={event.title}
              className="bg-white border border-gray-100 rounded-sm p-4 hover:shadow-sm transition"
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="font-bold text-sm" style={{ color: theme.navy }}>
                    {event.title}
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    {event.date} &middot; {event.location}
                  </p>
                </div>
                <span
                  className={`text-[10px] font-bold px-2 py-0.5 rounded flex-shrink-0 ${
                    event.type === 'Virtual'
                      ? 'bg-blue-50 text-blue-700'
                      : 'bg-gray-100 text-gray-600'
                  }`}
                >
                  {event.type}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Mentorship */}
      <section>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <Star className="w-4 h-4" style={{ color: theme.gold }} />
            <h2 className="text-sm font-bold uppercase tracking-wider" style={{ color: theme.navy }}>
              Mentorship Program
            </h2>
          </div>
          <Link
            href="/member-portal/dashboard/directory"
            className="text-xs font-bold hover:underline"
            style={{ color: theme.gold }}
          >
            Browse all mentors
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {MENTORSHIP_COHORT.map((mentor) => (
            <div
              key={mentor.name}
              className="bg-white border border-gray-100 rounded-sm p-5 hover:shadow-sm transition"
            >
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold mb-3"
                style={{ backgroundColor: `${theme.gold}15`, color: theme.gold }}
              >
                {mentor.name.charAt(0)}
              </div>
              <p className="font-bold text-sm" style={{ color: theme.navy }}>
                {mentor.name}
              </p>
              <p className="text-xs text-gray-500 mb-1">{mentor.title}</p>
              <p className="text-xs font-semibold mb-3" style={{ color: theme.gold }}>
                {mentor.specialty}
              </p>
              <button
                className={`w-full py-2 rounded-sm text-xs font-bold transition ${
                  mentor.availability === 'Accepting mentees'
                    ? 'hover:opacity-90 text-white'
                    : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                }`}
                style={
                  mentor.availability === 'Accepting mentees'
                    ? { backgroundColor: theme.navy }
                    : {}
                }
                disabled={mentor.availability !== 'Accepting mentees'}
              >
                {mentor.availability === 'Accepting mentees' ? 'Request Mentor' : 'Waitlist'}
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Public pages link */}
      <div
        className="rounded-sm p-6 flex flex-col sm:flex-row items-center justify-between gap-4"
        style={{ backgroundColor: `${theme.navy}08`, border: `1px solid ${theme.navy}15` }}
      >
        <div className="flex items-center gap-3">
          <Users className="w-5 h-5" style={{ color: theme.gold }} />
          <div>
            <p className="font-bold text-sm" style={{ color: theme.navy }}>
              Share the Women&apos;s Alliance
            </p>
            <p className="text-xs text-gray-500">
              The MWREA public page has information about joining for prospective members.
            </p>
          </div>
        </div>
        <Link
          href="/womens-alliance"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2.5 rounded-sm text-xs font-bold transition hover:opacity-90 flex-shrink-0"
          style={{ backgroundColor: theme.navy, color: 'white' }}
        >
          View Public Page <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  );
}
