'use client';

import Link from 'next/link';
import {
  Users, Calendar, FileText, CheckCircle, Clock,
  ArrowRight, UserCheck, AlertCircle, BarChart3, Settings
} from 'lucide-react';

const theme = { navy: '#0B1A30', gold: '#D4AF37' };

const ADMIN_STATS = [
  { label: 'Pending Approvals', value: '12', icon: UserCheck, color: '#f59e0b' },
  { label: 'New Members (30d)', value: '28', icon: Users, color: '#10b981' },
  { label: 'Upcoming Events', value: '4', icon: Calendar, color: '#3b82f6' },
  { label: 'Support Tickets', value: '3', icon: AlertCircle, color: '#ef4444' },
];

const RECENT_APPLICATIONS = [
  { name: 'Sarah Khan', company: 'Bridge RE', tier: 'Individual Professional', date: '2 hours ago', status: 'Pending' },
  { name: 'Zaid Al-Harbi', company: 'Global Assets', tier: 'Senior Membership', date: '5 hours ago', status: 'Pending' },
  { name: 'Maryam Yusuf', company: 'Oasis Homes', tier: 'Associate', date: 'Yesterday', status: 'Pending' },
];

const QUICK_ACTIONS = [
  { label: 'Create New Event', icon: Calendar, href: '/member-portal/dashboard/admin/events/new' },
  { label: 'Upload Resource', icon: FileText, href: '/member-portal/dashboard/admin/resources/new' },
  { label: 'Manage Chapters', icon: Settings, href: '/member-portal/dashboard/admin/chapters' },
  { label: 'Board Reports', icon: BarChart3, href: '/member-portal/dashboard/admin/reports' },
];

export default function AdminDashboard() {
  return (
    <div className="p-6 lg:p-10 max-w-6xl mx-auto w-full space-y-10">
      <div>
        <h1 className="text-2xl font-serif font-bold" style={{ color: theme.navy }}>
          Admin Management
        </h1>
        <p className="text-sm text-gray-500 mt-1">
          Internal tools for MREA staff and board members to manage the association.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {ADMIN_STATS.map((stat) => (
          <div key={stat.label} className="bg-white border border-gray-100 rounded-sm p-6 shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <stat.icon className="w-5 h-5" style={{ color: stat.color }} />
              <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Live</span>
            </div>
            <p className="text-2xl font-bold" style={{ color: theme.navy }}>{stat.value}</p>
            <p className="text-xs text-gray-500 font-medium">{stat.label}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Pending Approvals Section */}
        <div className="lg:col-span-2 space-y-4">
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-lg font-bold" style={{ color: theme.navy }}>Pending Member Approvals</h2>
            <Link href="/member-portal/dashboard/admin/members" className="text-xs font-bold text-gold hover:underline" style={{ color: theme.gold }}>
              View all applications
            </Link>
          </div>

          <div className="bg-white border border-gray-100 rounded-sm shadow-sm overflow-hidden">
            <div className="divide-y divide-gray-100">
              {RECENT_APPLICATIONS.map((app) => (
                <div key={app.name} className="p-5 flex items-center justify-between hover:bg-gray-50 transition">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center font-bold text-slate-500">
                      {app.name.charAt(0)}
                    </div>
                    <div>
                      <p className="text-sm font-bold" style={{ color: theme.navy }}>{app.name}</p>
                      <p className="text-xs text-gray-500">{app.company} &middot; {app.tier}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-6">
                    <div className="text-right hidden sm:block">
                      <p className="text-[10px] text-gray-400 uppercase font-bold tracking-tight flex items-center gap-1">
                        <Clock className="w-3 h-3" /> {app.date}
                      </p>
                    </div>
                    <button className="px-4 py-1.5 rounded-sm text-xs font-bold bg-navy text-white hover:opacity-90 transition" style={{ backgroundColor: theme.navy }}>
                      Review
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div className="p-4 bg-gray-50 text-center">
              <Link href="/member-portal/dashboard/admin/members" className="text-xs font-bold text-gray-500 hover:underline">
                See 9 more pending applications
              </Link>
            </div>
          </div>
        </div>

        {/* Quick Actions Sidebar */}
        <div className="space-y-4">
          <h2 className="text-lg font-bold" style={{ color: theme.navy }}>Quick Actions</h2>
          <div className="grid grid-cols-1 gap-3">
            {QUICK_ACTIONS.map((action) => (
              <Link
                key={action.label}
                href={action.href}
                className="flex items-center gap-3 p-4 bg-white border border-gray-100 rounded-sm shadow-sm hover:shadow-md hover:border-gray-200 transition group"
              >
                <div className="w-9 h-9 rounded-sm flex items-center justify-center group-hover:scale-110 transition-transform" style={{ backgroundColor: `${theme.gold}15`, color: theme.gold }}>
                  <action.icon className="w-4 h-4" />
                </div>
                <span className="text-sm font-bold" style={{ color: theme.navy }}>{action.label}</span>
                <ArrowRight className="w-3.5 h-3.5 ml-auto text-gray-300" />
              </Link>
            ))}
          </div>

          <div className="mt-8 p-6 rounded-sm bg-navy text-white" style={{ backgroundColor: theme.navy }}>
            <h3 className="text-sm font-bold mb-2 flex items-center gap-2">
              <CheckCircle className="w-4 h-4" style={{ color: theme.gold }} />
              System Status
            </h3>
            <p className="text-xs text-gray-400 mb-4 leading-relaxed">
              All MREA systems are operational. Scheduled maintenance on June 2, 2026.
            </p>
            <div className="flex items-center justify-between text-[10px] font-bold uppercase tracking-widest text-gray-500">
              <span>Database</span>
              <span className="text-green-400">Stable</span>
            </div>
            <div className="flex items-center justify-between text-[10px] font-bold uppercase tracking-widest text-gray-500 mt-2">
              <span>Auth Service</span>
              <span className="text-green-400">Stable</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
