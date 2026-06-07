'use client';

import { useState } from 'react';
import { Calendar, MapPin, Clock, Users, CheckCircle, ArrowRight } from 'lucide-react';

const theme = { navy: '#0B1A30', gold: '#D4AF37' };

const EVENTS = [
  {
    id: 1,
    title: 'Houston Chapter Networking Mixer',
    date: 'June 12, 2026',
    time: '6:00 PM CDT',
    location: 'Houston, TX',
    venue: 'The Post Oak Hotel',
    type: 'Chapter',
    capacity: 120,
    registered: 87,
    memberRegistered: true,
    description:
      "The Houston chapter's monthly networking mixer. Connect with fellow members, local developers, and industry professionals over dinner. Halal food provided.",
    tags: ['Networking', 'In-Person'],
  },
  {
    id: 2,
    title: 'MREA Capital Network Deal Forum',
    date: 'June 18, 2026',
    time: '2:00 PM CDT',
    location: 'Virtual',
    venue: 'Zoom Webinar',
    type: 'National',
    capacity: 200,
    registered: 134,
    memberRegistered: false,
    description:
      'Quarterly deal forum for Capital Network members. Featured deals, LP introductions, and market intelligence from across the MREA network.',
    tags: ['Capital Network', 'Virtual'],
  },
  {
    id: 3,
    title: 'MWIAC Housing Policy Roundtable',
    date: 'June 25, 2026',
    time: '11:00 AM EDT',
    location: 'Washington, D.C.',
    venue: 'Capitol Hill Club',
    type: "Women's Alliance",
    capacity: 40,
    registered: 28,
    memberRegistered: false,
    description:
      "MWIAC's policy roundtable with invited legislators and housing advocates. Focus: zoning reform and homeownership access programs for underserved communities.",
    tags: ['Advocacy', 'Policy'],
  },
  {
    id: 4,
    title: 'Commercial Real Estate Fundamentals Workshop',
    date: 'July 9, 2026',
    time: '9:00 AM CDT',
    location: 'Dallas, TX',
    venue: 'Omni Dallas Hotel',
    type: 'Education',
    capacity: 80,
    registered: 45,
    memberRegistered: false,
    description:
      'Full-day workshop on commercial real estate fundamentals. CE credit eligible. Topics: underwriting, asset types, cap rates, deal structuring, and debt markets.',
    tags: ['CE Credit', 'Commercial'],
  },
  {
    id: 5,
    title: 'MREA National Summit 2026',
    date: 'September 12–14, 2026',
    time: 'All Day',
    location: 'Houston, TX',
    venue: 'Marriott Marquis Houston',
    type: 'National',
    capacity: 800,
    registered: 312,
    memberRegistered: false,
    description:
      'The premier annual gathering of the MREA community. Three days of keynotes, panels, council sessions, networking events, and the annual awards gala.',
    tags: ['Summit', 'Flagship'],
  },
];

const PAST_EVENTS = [
  { id: 101, title: 'Spring Chapter Mixer — Houston', date: 'April 14, 2026', type: 'Chapter', attended: true },
  { id: 102, title: 'Ethics & Compliance Training', date: 'March 5, 2026', type: 'Education', attended: true },
  { id: 103, title: 'Muslim Developer Council Q1 Forum', date: 'February 20, 2026', type: 'Council', attended: false },
  { id: 104, title: 'Halal Finance Basics Webinar', date: 'January 15, 2026', type: 'Education', attended: true },
];

const TYPE_COLORS: Record<string, { bg: string; text: string }> = {
  Chapter: { bg: '#e0e7ff', text: '#3730a3' },
  National: { bg: `#fef9c3`, text: '#854d0e' },
  "Women's Alliance": { bg: '#fce7f3', text: '#9d174d' },
  Education: { bg: '#d1fae5', text: '#065f46' },
  Council: { bg: '#ede9fe', text: '#5b21b6' },
};

export default function EventsPage() {
  const [activeTab, setActiveTab] = useState<'upcoming' | 'past'>('upcoming');

  return (
    <div className="p-6 lg:p-10 max-w-5xl mx-auto w-full space-y-8">
      <div>
        <h1 className="text-2xl font-serif font-bold" style={{ color: theme.navy }}>
          Events
        </h1>
        <p className="text-sm text-gray-500 mt-1">
          Chapter and national events — register, track attendance, and connect.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-gray-200">
        {(['upcoming', 'past'] as const).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-5 py-3 text-sm font-bold capitalize border-b-2 transition ${
              activeTab === tab
                ? 'border-current'
                : 'border-transparent text-gray-400 hover:text-gray-600'
            }`}
            style={activeTab === tab ? { borderColor: theme.navy, color: theme.navy } : {}}
          >
            {tab === 'upcoming' ? 'Upcoming Events' : 'My Past Events'}
          </button>
        ))}
      </div>

      {activeTab === 'upcoming' && (
        <div className="space-y-4">
          {EVENTS.map((event) => {
            const colors = TYPE_COLORS[event.type] || { bg: '#f3f4f6', text: '#374151' };
            const fillPct = Math.round((event.registered / event.capacity) * 100);
            return (
              <div
                key={event.id}
                className="bg-white border border-gray-100 rounded-sm shadow-sm hover:shadow-md transition overflow-hidden"
              >
                <div className="p-6">
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap gap-2 mb-2">
                        <span
                          className="text-xs font-bold px-2 py-0.5 rounded"
                          style={{ backgroundColor: colors.bg, color: colors.text }}
                        >
                          {event.type}
                        </span>
                        {event.memberRegistered && (
                          <span className="text-xs font-bold text-green-700 bg-green-50 px-2 py-0.5 rounded flex items-center gap-1">
                            <CheckCircle className="w-3 h-3" /> Registered
                          </span>
                        )}
                        {event.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-xs text-gray-500 bg-gray-100 px-2 py-0.5 rounded"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <h3 className="font-bold text-base mb-2" style={{ color: theme.navy }}>
                        {event.title}
                      </h3>
                      <p className="text-sm text-gray-600 leading-relaxed mb-4">
                        {event.description}
                      </p>
                      <div className="flex flex-wrap gap-4 text-xs text-gray-500">
                        <span className="flex items-center gap-1.5">
                          <Calendar className="w-3.5 h-3.5" />
                          {event.date}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <Clock className="w-3.5 h-3.5" />
                          {event.time}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <MapPin className="w-3.5 h-3.5" />
                          {event.location} &middot; {event.venue}
                        </span>
                      </div>
                    </div>

                    {/* Capacity + register */}
                    <div className="sm:text-right sm:flex-shrink-0 space-y-3 min-w-[130px]">
                      <div className="text-xs text-gray-500 flex items-center sm:justify-end gap-1">
                        <Users className="w-3.5 h-3.5" />
                        {event.registered}/{event.capacity}
                      </div>
                      <div className="h-1.5 bg-gray-100 rounded-full w-full sm:w-32 sm:ml-auto">
                        <div
                          className="h-full rounded-full transition-all"
                          style={{
                            width: `${fillPct}%`,
                            backgroundColor: fillPct > 85 ? '#ef4444' : theme.gold,
                          }}
                        />
                      </div>
                      {fillPct > 85 && (
                        <p className="text-xs text-red-500 font-semibold">Almost full</p>
                      )}
                      {!event.memberRegistered ? (
                        <button
                          className="w-full sm:w-auto px-4 py-2 rounded-sm text-xs font-bold transition hover:opacity-90 flex items-center justify-center gap-1"
                          style={{ backgroundColor: theme.gold, color: theme.navy }}
                        >
                          Register <ArrowRight className="w-3 h-3" />
                        </button>
                      ) : (
                        <button className="w-full sm:w-auto px-4 py-2 rounded-sm text-xs font-bold border border-gray-200 text-gray-500 hover:bg-gray-50 transition">
                          View Details
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {activeTab === 'past' && (
        <div className="space-y-3">
          {PAST_EVENTS.map((event) => (
            <div
              key={event.id}
              className={`bg-white border border-gray-100 rounded-sm p-5 flex items-center justify-between ${
                !event.attended ? 'opacity-60' : ''
              }`}
            >
              <div>
                <p className="font-bold text-sm" style={{ color: theme.navy }}>
                  {event.title}
                </p>
                <p className="text-xs text-gray-500 mt-0.5">
                  {event.date} &middot; {event.type}
                </p>
              </div>
              {event.attended ? (
                <span className="text-xs text-green-700 bg-green-50 font-bold px-2.5 py-1 rounded flex items-center gap-1">
                  <CheckCircle className="w-3 h-3" /> Attended
                </span>
              ) : (
                <span className="text-xs text-gray-400 bg-gray-50 font-bold px-2.5 py-1 rounded">
                  Not Attended
                </span>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
