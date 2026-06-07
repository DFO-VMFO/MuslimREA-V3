'use client';

import { useState } from 'react';
import {
  Calendar, MapPin, Clock, Users, Plus,
  Search, Edit3, Trash2, CheckCircle, ChevronDown
} from 'lucide-react';

const theme = { navy: '#0B1A30', gold: '#D4AF37' };

const EXISTING_EVENTS = [
  { id: 1, title: 'Houston Chapter Networking Mixer', date: 'June 12, 2026', type: 'Chapter', chapter: 'Houston, TX', rsvps: 87, status: 'Published' },
  { id: 2, title: 'MREA Capital Network Deal Forum', date: 'June 18, 2026', type: 'National', chapter: 'Remote', rsvps: 134, status: 'Published' },
  { id: 3, title: 'MWIAC Housing Policy Roundtable', date: 'June 25, 2026', type: "Women's Alliance", chapter: 'Washington, D.C.', rsvps: 28, status: 'Draft' },
  { id: 4, title: 'Commercial Foundations Workshop', date: 'July 9, 2026', type: 'Education', chapter: 'Dallas, TX', rsvps: 45, status: 'Published' },
];

export default function EventManagement() {
  const [showNewForm, setShowNewForm] = useState(false);
  const [saved, setSaved] = useState(false);

  return (
    <div className="p-6 lg:p-10 max-w-6xl mx-auto w-full space-y-8">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-serif font-bold" style={{ color: theme.navy }}>Event Management</h1>
          <p className="text-sm text-gray-500 mt-1">Create and manage MREA national and chapter events.</p>
        </div>
        {!showNewForm && (
          <button
            onClick={() => setShowNewForm(true)}
            className="flex items-center justify-center gap-2 px-6 py-2.5 rounded-sm font-bold text-sm text-white transition hover:opacity-90"
            style={{ backgroundColor: theme.navy }}
          >
            <Plus className="w-4 h-4" /> Create New Event
          </button>
        )}
      </div>

      {showNewForm ? (
        <div className="bg-white border border-gray-100 rounded-sm shadow-md animate-in fade-in slide-in-from-top-4 duration-300">
          <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between">
            <h2 className="font-bold text-sm uppercase tracking-wider text-gray-500">New Event Details</h2>
            <button
              onClick={() => setShowNewForm(false)}
              className="text-xs text-gray-400 hover:text-gray-600 font-bold"
            >
              Cancel
            </button>
          </div>
          <form className="p-6 space-y-6" onSubmit={(e) => {
            e.preventDefault();
            setSaved(true);
            setTimeout(() => { setSaved(false); setShowNewForm(false); }, 1500);
          }}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="md:col-span-2">
                <label className="block text-xs font-semibold text-gray-500 mb-1.5">Event Title</label>
                <input
                  type="text"
                  placeholder="e.g. 2026 Annual Real Estate Gala"
                  className="w-full px-3 py-2.5 border border-gray-200 rounded-sm text-sm focus:outline-none focus:ring-1"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-500 mb-1.5">Event Type</label>
                <div className="relative">
                  <select className="w-full px-3 py-2.5 border border-gray-200 rounded-sm text-sm focus:outline-none focus:ring-1 appearance-none bg-white">
                    <option>Chapter Event</option>
                    <option>National Event</option>
                    <option>Educational Workshop</option>
                    <option>Women's Alliance</option>
                    <option>Council Meeting</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-500 mb-1.5">Chapter</label>
                <div className="relative">
                  <select className="w-full px-3 py-2.5 border border-gray-200 rounded-sm text-sm focus:outline-none focus:ring-1 appearance-none bg-white">
                    <option>All Chapters / National</option>
                    <option>Houston, TX</option>
                    <option>Dallas, TX</option>
                    <option>Chicago, IL</option>
                    <option>New York, NY</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-500 mb-1.5">Date</label>
                <input
                  type="date"
                  className="w-full px-3 py-2.5 border border-gray-200 rounded-sm text-sm focus:outline-none focus:ring-1"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-500 mb-1.5">Time & Timezone</label>
                <input
                  type="text"
                  placeholder="e.g. 6:00 PM CDT"
                  className="w-full px-3 py-2.5 border border-gray-200 rounded-sm text-sm focus:outline-none focus:ring-1"
                  required
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-xs font-semibold text-gray-500 mb-1.5">Venue / URL</label>
                <input
                  type="text"
                  placeholder="e.g. The Post Oak Hotel or Zoom Link"
                  className="w-full px-3 py-2.5 border border-gray-200 rounded-sm text-sm focus:outline-none focus:ring-1"
                  required
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-xs font-semibold text-gray-500 mb-1.5">Event Description</label>
                <textarea
                  rows={4}
                  placeholder="Describe the event, agenda, and speakers..."
                  className="w-full px-3 py-2.5 border border-gray-200 rounded-sm text-sm focus:outline-none focus:ring-1 resize-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-500 mb-1.5">RSVP Capacity</label>
                <input
                  type="number"
                  placeholder="100"
                  className="w-full px-3 py-2.5 border border-gray-200 rounded-sm text-sm focus:outline-none focus:ring-1"
                />
              </div>
            </div>

            <div className="pt-6 border-t border-gray-100 flex items-center justify-between">
              {saved ? (
                <span className="text-sm text-green-600 flex items-center gap-2 font-bold">
                  <CheckCircle className="w-5 h-5" /> Event Created!
                </span>
              ) : <span></span>}
              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() => setShowNewForm(false)}
                  className="px-6 py-2.5 rounded-sm text-sm font-bold border border-gray-200 text-gray-500 hover:bg-gray-50"
                >
                  Save as Draft
                </button>
                <button
                  type="submit"
                  className="px-8 py-2.5 rounded-sm text-sm font-bold text-white transition hover:opacity-90"
                  style={{ backgroundColor: theme.navy }}
                >
                  Publish Event
                </button>
              </div>
            </div>
          </form>
        </div>
      ) : (
        <div className="space-y-4">
          <div className="flex gap-2 mb-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search events..."
                className="w-full pl-9 pr-4 py-2.5 border border-gray-200 rounded-sm text-sm focus:outline-none focus:ring-1 bg-white shadow-sm"
              />
            </div>
          </div>

          <div className="bg-white border border-gray-100 rounded-sm shadow-sm overflow-hidden">
            <table className="w-full text-left">
              <thead className="bg-gray-50 border-b border-gray-100">
                <tr>
                  <th className="px-6 py-3 text-[10px] font-bold uppercase tracking-widest text-gray-400">Event</th>
                  <th className="px-6 py-3 text-[10px] font-bold uppercase tracking-widest text-gray-400">Date / Type</th>
                  <th className="px-6 py-3 text-[10px] font-bold uppercase tracking-widest text-gray-400">Chapter</th>
                  <th className="px-6 py-3 text-[10px] font-bold uppercase tracking-widest text-gray-400">RSVPs</th>
                  <th className="px-6 py-3 text-[10px] font-bold uppercase tracking-widest text-gray-400">Status</th>
                  <th className="px-6 py-3 text-[10px] font-bold uppercase tracking-widest text-gray-400 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {EXISTING_EVENTS.map((event) => (
                  <tr key={event.id} className="hover:bg-gray-50 transition">
                    <td className="px-6 py-4">
                      <p className="text-sm font-bold" style={{ color: theme.navy }}>{event.title}</p>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-1.5 text-xs text-gray-500">
                        <Calendar className="w-3.5 h-3.5" /> {event.date}
                      </div>
                      <p className="text-[10px] font-bold text-gray-400 mt-1">{event.type}</p>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-1.5 text-xs text-gray-600">
                        <MapPin className="w-3.5 h-3.5 text-gray-400" /> {event.chapter}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-1.5 text-xs text-gray-700 font-bold">
                        <Users className="w-3.5 h-3.5 text-gray-400" /> {event.rsvps}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded ${
                        event.status === 'Published' ? 'bg-green-50 text-green-700' : 'bg-gray-100 text-gray-500'
                      }`}>
                        {event.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex justify-end gap-2">
                        <button className="p-1.5 text-gray-400 hover:text-navy hover:bg-white rounded transition shadow-sm border border-transparent hover:border-gray-200">
                          <Edit3 className="w-4 h-4" />
                        </button>
                        <button className="p-1.5 text-gray-400 hover:text-red-500 hover:bg-white rounded transition shadow-sm border border-transparent hover:border-red-100">
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}
