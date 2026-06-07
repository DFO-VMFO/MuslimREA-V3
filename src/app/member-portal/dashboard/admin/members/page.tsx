'use client';

import { useState } from 'react';
import {
  Search, Filter, UserCheck, UserX, ExternalLink,
  MapPin, Award, CheckCircle, RefreshCcw, Mail
} from 'lucide-react';

const theme = { navy: '#0B1A30', gold: '#D4AF37' };

const APPLICATIONS = [
  { id: 101, name: 'Sarah Khan', company: 'Bridge Real Estate', chapter: 'Chicago, IL', tier: 'Individual Professional', email: 'sarah@bridgere.com', applied: '2 hours ago', status: 'Pending Review', bio: 'Residential broker with 8 years experience specializing in Shariah-compliant financing for first-time buyers.' },
  { id: 102, name: 'Zaid Al-Harbi', company: 'Global Assets Group', chapter: 'Houston, TX', tier: 'Senior Membership', email: 'zaid@globalassets.com', applied: '5 hours ago', status: 'Pending Review', bio: 'Managing director of a private equity firm. Interested in the MREA Capital Network and developer initiatives.' },
  { id: 103, name: 'Maryam Yusuf', company: 'Oasis Homes', chapter: 'Los Angeles, CA', tier: 'Associate', email: 'maryam@oasishomes.io', applied: 'Yesterday', status: 'Pending Review', bio: 'Associate at a property management firm in LA. Looking to expand my network and learn about MREA policies.' },
  { id: 104, name: 'Ahmed Hassan', company: 'Hassan Law', chapter: 'New York, NY', tier: 'Individual Professional', email: 'ahmed@hassanlaw.com', applied: '2 days ago', status: 'In Review', bio: 'Real estate attorney focusing on commercial closings and Islamic finance compliance.' },
  { id: 105, name: 'Laila Rahman', company: 'Rahman & Co', chapter: 'Houston, TX', tier: 'Senior Membership', email: 'laila@rahman.com', applied: '3 days ago', status: 'In Review', bio: 'Commercial broker and developer. Founding member of the Houston chapter.' },
];

export default function MemberManagement() {
  const [selectedApp, setSelectedApp] = useState<typeof APPLICATIONS[0] | null>(null);
  const [activeTab, setActiveTab] = useState<'pending' | 'approved' | 'rejected'>('pending');

  return (
    <div className="p-6 lg:p-10 max-w-6xl mx-auto w-full space-y-8">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-serif font-bold" style={{ color: theme.navy }}>Member Management</h1>
          <p className="text-sm text-gray-500 mt-1">Review applications and manage member statuses.</p>
        </div>
        <div className="flex gap-2">
          <button className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-sm text-xs font-bold bg-white text-gray-600 hover:bg-gray-50">
            <RefreshCcw className="w-3.5 h-3.5" /> Sync with Stripe
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-gray-200">
        {(['pending', 'approved', 'rejected'] as const).map((tab) => (
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
            {tab} Applications
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* List */}
        <div className="lg:col-span-2 space-y-4">
          <div className="flex gap-2 mb-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search applications..."
                className="w-full pl-9 pr-4 py-2.5 border border-gray-200 rounded-sm text-sm focus:outline-none focus:ring-1"
              />
            </div>
            <button className="px-4 py-2.5 bg-white border border-gray-200 rounded-sm text-sm flex items-center gap-2 text-gray-500">
              <Filter className="w-4 h-4" /> Filter
            </button>
          </div>

          <div className="bg-white border border-gray-100 rounded-sm shadow-sm">
            <div className="divide-y divide-gray-100">
              {APPLICATIONS.map((app) => (
                <div
                  key={app.id}
                  onClick={() => setSelectedApp(app)}
                  className={`p-5 flex items-center justify-between hover:bg-slate-50 cursor-pointer transition ${
                    selectedApp?.id === app.id ? 'bg-slate-50 border-l-4 border-gold' : ''
                  }`}
                  style={selectedApp?.id === app.id ? { borderLeftColor: theme.gold } : {}}
                >
                  <div className="flex items-center gap-4 min-w-0">
                    <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center font-bold text-slate-500 flex-shrink-0">
                      {app.name.charAt(0)}
                    </div>
                    <div className="min-w-0">
                      <p className="text-sm font-bold truncate" style={{ color: theme.navy }}>{app.name}</p>
                      <p className="text-xs text-gray-500 truncate">{app.company} &middot; {app.tier}</p>
                    </div>
                  </div>
                  <div className="text-right flex-shrink-0 pl-4">
                    <span className="inline-block px-2 py-0.5 rounded text-[10px] font-bold bg-yellow-50 text-yellow-700">
                      {app.status}
                    </span>
                    <p className="text-[10px] text-gray-400 mt-1">{app.applied}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Details Panel */}
        <div className="lg:col-span-1">
          {selectedApp ? (
            <div className="bg-white border border-gray-100 rounded-sm shadow-md sticky top-6 overflow-hidden">
              <div className="p-6 text-center border-b border-gray-100">
                <div className="w-16 h-16 rounded-full bg-slate-100 flex items-center justify-center font-bold text-2xl text-slate-500 mx-auto mb-4">
                  {selectedApp.name.charAt(0)}
                </div>
                <h3 className="font-serif font-bold text-lg" style={{ color: theme.navy }}>{selectedApp.name}</h3>
                <p className="text-xs text-gray-500 mt-1">{selectedApp.company}</p>
                <div className="mt-4 flex flex-wrap justify-center gap-2">
                  <span className="px-2 py-1 rounded text-[10px] font-bold bg-navy text-white" style={{ backgroundColor: theme.navy }}>
                    {selectedApp.tier}
                  </span>
                  <span className="px-2 py-1 rounded text-[10px] font-bold border border-gray-200 text-gray-500">
                    {selectedApp.chapter}
                  </span>
                </div>
              </div>

              <div className="p-6 space-y-5">
                <div>
                  <h4 className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2">Member Bio</h4>
                  <p className="text-sm text-gray-600 leading-relaxed italic">
                    &ldquo;{selectedApp.bio}&rdquo;
                  </p>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-xs text-gray-600">
                    <Mail className="w-4 h-4 text-gray-400" />
                    <span>{selectedApp.email}</span>
                  </div>
                  <div className="flex items-center gap-3 text-xs text-gray-600">
                    <MapPin className="w-4 h-4 text-gray-400" />
                    <span>{selectedApp.chapter}</span>
                  </div>
                  <div className="flex items-center gap-3 text-xs text-gray-600">
                    <Award className="w-4 h-4 text-gray-400" />
                    <span>Stripe Link: </span>
                    <span className="text-blue-600 hover:underline cursor-pointer flex items-center gap-1">
                      cus_12345 <ExternalLink className="w-3 h-3" />
                    </span>
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-100 space-y-3">
                  <button className="w-full flex items-center justify-center gap-2 py-2.5 bg-green-600 text-white rounded-sm text-sm font-bold transition hover:bg-green-700">
                    <UserCheck className="w-4 h-4" /> Approve Member
                  </button>
                  <button className="w-full flex items-center justify-center gap-2 py-2.5 bg-white border border-red-200 text-red-500 rounded-sm text-sm font-bold transition hover:bg-red-50">
                    <UserX className="w-4 h-4" /> Reject Application
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div className="bg-slate-50 border-2 border-dashed border-slate-200 rounded-sm p-12 text-center h-full flex flex-col justify-center">
              <CheckCircle className="w-10 h-10 text-slate-300 mx-auto mb-4" />
              <p className="text-sm font-bold text-slate-400">Select an application to review</p>
              <p className="text-xs text-slate-400 mt-2">Check credentials and bio before approving access to the member portal.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
