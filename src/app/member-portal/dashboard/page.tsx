'use client';

import Link from 'next/link';
import {
  Shield, Calendar, BookOpen, Users, Heart, ArrowRight,
  Bell, Award, MapPin, Clock, TrendingUp,
} from 'lucide-react';

const theme = { navy: '#0B1A30', gold: '#D4AF37' };

const ANNOUNCEMENTS = [
  {
    id: 1,
    tag: 'Association Update',
    title: 'MREA National Summit 2026 — Save the Date',
    date: 'May 28, 2026',
    body: 'The MREA National Summit will be held in Houston, TX on September 12–14, 2026. Early registration opens June 1. All members receive priority access and discounted rates.',
    isNew: true,
  },
  {
    id: 2,
    tag: 'Council Notice',
    title: 'Public Policy Council: New Legislative Brief Available',
    date: 'May 22, 2026',
    body: 'The Public Policy & Government Affairs Council has published a new analysis of pending zoning reform legislation. Download it from the Resources section.',
    isNew: false,
  },
  {
    id: 3,
    tag: "Women's Alliance",
    title: 'MWIAC Advocacy Fellows Program — Applications Open',
    date: 'May 15, 2026',
    body: 'The Muslim Women Impact & Advocacy Council is accepting applications for its inaugural Advocacy Fellows cohort. Deadline: July 15, 2026.',
    isNew: false,
  },
];

const UPCOMING_EVENTS = [
  {
    id: 1,
    title: 'Houston Chapter Networking Mixer',
    date: 'June 12, 2026',
    time: '6:00 PM CDT',
    location: 'Houston, TX',
    type: 'Chapter',
    registered: true,
  },
  {
    id: 2,
    title: 'MREA Capital Network Deal Forum',
    date: 'June 18, 2026',
    time: '2:00 PM CDT',
    location: 'Virtual',
    type: 'National',
    registered: false,
  },
  {
    id: 3,
    title: 'MWIAC Housing Policy Roundtable',
    date: 'June 25, 2026',
    time: '11:00 AM EDT',
    location: 'Washington, D.C.',
    type: "Women's Alliance",
    registered: false,
  },
];

const QUICK_LINKS = [
  { href: '/member-portal/dashboard/councils', label: 'Council Access', icon: Shield, desc: 'Manage your council memberships' },
  { href: '/member-portal/dashboard/events', label: 'Events', icon: Calendar, desc: 'Register for upcoming events' },
  { href: '/member-portal/dashboard/resources', label: 'Resources', icon: BookOpen, desc: 'Download reports & guides' },
  { href: '/member-portal/dashboard/directory', label: 'Member Directory', icon: Users, desc: 'Connect with members' },
  { href: '/member-portal/dashboard/womens-alliance', label: "Women's Alliance", icon: Heart, desc: 'MWREA & MWIAC programs' },
  { href: '/member-portal/dashboard/profile', label: 'My Profile', icon: TrendingUp, desc: 'Update your profile & bio' },
];

export default function DashboardHome() {
  return (
    <div className="p-6 lg:p-10 max-w-6xl mx-auto w-full space-y-10">
      {/* Welcome card */}
      <div className="rounded-sm overflow-hidden shadow-sm">
        <div className="px-7 py-8 text-white" style={{ backgroundColor: theme.navy }}>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span
                className="text-xs font-bold uppercase tracking-widest block mb-1.5"
                style={{ color: theme.gold }}
              >
                Welcome Back
              </span>
              <h1 className="text-2xl font-serif font-bold">Good to have you here, Member.</h1>
              <p className="text-gray-400 text-sm mt-1">
                MREA Member Portal &mdash; May 2026
              </p>
            </div>
            <div className="sm:text-right">
              <div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-sm text-sm font-bold"
                style={{ backgroundColor: `${theme.gold}20`, color: theme.gold }}
              >
                <Award className="w-4 h-4" />
                Individual Professional
              </div>
              <p className="text-xs text-gray-400 mt-2">Houston Chapter &middot; Renews March 2027</p>
            </div>
          </div>
        </div>

        {/* Stat strip */}
        <div className="grid grid-cols-3 divide-x divide-gray-100 bg-white border-x border-b border-gray-100">
          {[
            { label: 'Council Access', value: '3 Active' },
            { label: 'Events Registered', value: '1 Upcoming' },
            { label: 'Member Since', value: 'March 2025' },
          ].map((stat) => (
            <div key={stat.label} className="px-6 py-4 text-center">
              <div className="text-lg font-bold" style={{ color: theme.navy }}>
                {stat.value}
              </div>
              <div className="text-xs text-gray-500 uppercase tracking-wider mt-0.5">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Quick links */}
      <section>
        <h2 className="text-lg font-bold mb-4" style={{ color: theme.navy }}>
          Quick Access
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {QUICK_LINKS.map(({ href, label, icon: Icon, desc }) => (
            <Link
              key={href}
              href={href}
              className="bg-white rounded-sm border border-gray-100 p-5 hover:shadow-md hover:border-gray-200 transition group"
            >
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center mb-3"
                style={{ backgroundColor: `${theme.navy}08`, color: theme.navy }}
              >
                <Icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </div>
              <p className="font-bold text-sm" style={{ color: theme.navy }}>
                {label}
              </p>
              <p className="text-xs text-gray-500 mt-0.5">{desc}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Announcements + Events */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
        {/* Announcements */}
        <section className="lg:col-span-3">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-bold" style={{ color: theme.navy }}>
              Announcements
            </h2>
            <Bell className="w-4 h-4 text-gray-400" />
          </div>
          <div className="space-y-4">
            {ANNOUNCEMENTS.map((item) => (
              <div
                key={item.id}
                className="bg-white border border-gray-100 rounded-sm p-5 hover:shadow-sm transition"
              >
                <div className="flex items-start justify-between gap-3 mb-2">
                  <span
                    className="text-xs font-bold uppercase tracking-wider px-2 py-0.5 rounded"
                    style={{ backgroundColor: `${theme.gold}15`, color: theme.gold }}
                  >
                    {item.tag}
                  </span>
                  {item.isNew && (
                    <span className="text-xs font-bold text-red-600 bg-red-50 px-2 py-0.5 rounded">
                      New
                    </span>
                  )}
                </div>
                <h3 className="font-bold text-sm mb-1" style={{ color: theme.navy }}>
                  {item.title}
                </h3>
                <p className="text-xs text-gray-400 mb-2">{item.date}</p>
                <p className="text-sm text-gray-600 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Upcoming events */}
        <section className="lg:col-span-2">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-bold" style={{ color: theme.navy }}>
              Upcoming Events
            </h2>
            <Link
              href="/member-portal/dashboard/events"
              className="text-xs font-bold hover:underline"
              style={{ color: theme.gold }}
            >
              View all
            </Link>
          </div>
          <div className="space-y-3">
            {UPCOMING_EVENTS.map((event) => (
              <div
                key={event.id}
                className="bg-white border border-gray-100 rounded-sm p-4 hover:shadow-sm transition"
              >
                <div className="flex items-start justify-between gap-2 mb-2">
                  <span
                    className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded"
                    style={{ backgroundColor: `${theme.navy}08`, color: theme.navy }}
                  >
                    {event.type}
                  </span>
                  {event.registered && (
                    <span className="text-[10px] font-bold text-green-700 bg-green-50 px-2 py-0.5 rounded">
                      Registered
                    </span>
                  )}
                </div>
                <p className="font-bold text-sm mb-2" style={{ color: theme.navy }}>
                  {event.title}
                </p>
                <div className="space-y-1 text-xs text-gray-500">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-3 h-3" />
                    {event.date}
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-3 h-3" />
                    {event.time}
                  </div>
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-3 h-3" />
                    {event.location}
                  </div>
                </div>
                {!event.registered && (
                  <Link
                    href="/member-portal/dashboard/events"
                    className="mt-3 text-xs font-bold inline-flex items-center gap-1 hover:underline"
                    style={{ color: theme.gold }}
                  >
                    Register <ArrowRight className="w-3 h-3" />
                  </Link>
                )}
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
