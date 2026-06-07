'use client';

import { useState } from 'react';
import { CheckCircle, Eye, EyeOff, Bell, Shield, Trash2 } from 'lucide-react';

const theme = { navy: '#0B1A30', gold: '#D4AF37' };

export default function SettingsPage() {
  const [passwordSaved, setPasswordSaved] = useState(false);
  const [notifSaved, setNotifSaved] = useState(false);
  const [showCurrent, setShowCurrent] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [passwordForm, setPasswordForm] = useState({
    current: '',
    newPass: '',
    confirm: '',
  });
  const [passwordError, setPasswordError] = useState('');

  const [notifications, setNotifications] = useState({
    announcements: true,
    events: true,
    councilUpdates: true,
    resourcesAdded: false,
    directoryMessages: true,
    womensAlliance: true,
    newsletter: true,
    sms: false,
  });

  const handlePasswordSave = (e: React.FormEvent) => {
    e.preventDefault();
    setPasswordError('');
    if (passwordForm.newPass !== passwordForm.confirm) {
      setPasswordError('New passwords do not match.');
      return;
    }
    if (passwordForm.newPass.length < 8) {
      setPasswordError('Password must be at least 8 characters.');
      return;
    }
    setPasswordSaved(true);
    setPasswordForm({ current: '', newPass: '', confirm: '' });
    setTimeout(() => setPasswordSaved(false), 3000);
  };

  const handleNotifSave = (e: React.FormEvent) => {
    e.preventDefault();
    setNotifSaved(true);
    setTimeout(() => setNotifSaved(false), 3000);
  };

  const toggleNotif = (key: keyof typeof notifications) => {
    setNotifications((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const NOTIF_GROUPS = [
    {
      label: 'Portal & Membership',
      items: [
        { key: 'announcements' as const, label: 'Association announcements', desc: 'News, policy changes, and board updates' },
        { key: 'events' as const, label: 'Event reminders & confirmations', desc: 'Upcoming event alerts and registration receipts' },
        { key: 'councilUpdates' as const, label: 'Council activity', desc: 'Meeting notices, resource drops, and council news' },
        { key: 'resourcesAdded' as const, label: 'New resources added', desc: 'Alerts when new reports or templates are published' },
      ],
    },
    {
      label: 'Community',
      items: [
        { key: 'directoryMessages' as const, label: 'Member connection requests', desc: 'When another member reaches out through the directory' },
        { key: 'womensAlliance' as const, label: "Women's Alliance updates", desc: 'MWREA and MWIAC program announcements' },
        { key: 'newsletter' as const, label: 'MREA monthly newsletter', desc: 'Curated digest of news, events, and insights' },
      ],
    },
    {
      label: 'Mobile',
      items: [
        { key: 'sms' as const, label: 'SMS text alerts', desc: 'Time-sensitive event and emergency communications' },
      ],
    },
  ];

  return (
    <div className="p-6 lg:p-10 max-w-3xl mx-auto w-full space-y-10">
      <div>
        <h1 className="text-2xl font-serif font-bold" style={{ color: theme.navy }}>
          Settings
        </h1>
        <p className="text-sm text-gray-500 mt-1">
          Manage your password, notifications, and account preferences.
        </p>
      </div>

      {/* Password */}
      <section>
        <div className="flex items-center gap-2 mb-4">
          <Shield className="w-4 h-4" style={{ color: theme.gold }} />
          <h2 className="text-sm font-bold uppercase tracking-wider" style={{ color: theme.navy }}>
            Password &amp; Security
          </h2>
        </div>
        <div className="bg-white border border-gray-100 rounded-sm shadow-sm">
          <form onSubmit={handlePasswordSave}>
            <div className="p-6 space-y-4">
              {passwordError && (
                <div className="p-3 bg-red-50 border-l-4 border-red-400 rounded-sm text-sm text-red-700">
                  {passwordError}
                </div>
              )}
              {passwordSaved && (
                <div className="p-3 bg-green-50 border-l-4 border-green-400 rounded-sm text-sm text-green-700 flex items-center gap-2">
                  <CheckCircle className="w-4 h-4" /> Password updated successfully.
                </div>
              )}

              {[
                { key: 'current' as const, label: 'Current Password', show: showCurrent, toggle: () => setShowCurrent(!showCurrent) },
                { key: 'newPass' as const, label: 'New Password', show: showNew, toggle: () => setShowNew(!showNew) },
                { key: 'confirm' as const, label: 'Confirm New Password', show: showConfirm, toggle: () => setShowConfirm(!showConfirm) },
              ].map(({ key, label, show, toggle }) => (
                <div key={key}>
                  <label className="block text-xs font-semibold text-gray-500 mb-1.5">{label}</label>
                  <div className="relative">
                    <input
                      type={show ? 'text' : 'password'}
                      value={passwordForm[key]}
                      onChange={(e) => setPasswordForm({ ...passwordForm, [key]: e.target.value })}
                      className="w-full px-3 py-2.5 pr-10 border border-gray-200 rounded-sm text-sm focus:outline-none focus:ring-1"
                    />
                    <button
                      type="button"
                      onClick={toggle}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    >
                      {show ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                </div>
              ))}

              <p className="text-xs text-gray-400">
                Password must be at least 8 characters. Use a strong, unique password.
              </p>
            </div>
            <div className="px-6 py-4 border-t border-gray-100 flex justify-end">
              <button
                type="submit"
                className="px-5 py-2.5 rounded-sm text-sm font-bold text-white transition hover:opacity-90"
                style={{ backgroundColor: theme.navy }}
              >
                Update Password
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Notifications */}
      <section>
        <div className="flex items-center gap-2 mb-4">
          <Bell className="w-4 h-4" style={{ color: theme.gold }} />
          <h2 className="text-sm font-bold uppercase tracking-wider" style={{ color: theme.navy }}>
            Notification Preferences
          </h2>
        </div>
        <div className="bg-white border border-gray-100 rounded-sm shadow-sm">
          <form onSubmit={handleNotifSave}>
            <div className="divide-y divide-gray-100">
              {NOTIF_GROUPS.map((group) => (
                <div key={group.label} className="p-6">
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4">
                    {group.label}
                  </p>
                  <div className="space-y-4">
                    {group.items.map(({ key, label, desc }) => (
                      <div key={key} className="flex items-start justify-between gap-4">
                        <div>
                          <p className="text-sm font-semibold text-gray-700">{label}</p>
                          <p className="text-xs text-gray-400 mt-0.5">{desc}</p>
                        </div>
                        <button
                          type="button"
                          onClick={() => toggleNotif(key)}
                          className={`relative flex-shrink-0 w-11 h-6 rounded-full transition-all ${
                            notifications[key] ? '' : 'bg-gray-200'
                          }`}
                          style={notifications[key] ? { backgroundColor: theme.gold } : {}}
                          role="switch"
                          aria-checked={notifications[key]}
                        >
                          <span
                            className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow transition-transform ${
                              notifications[key] ? 'translate-x-5' : ''
                            }`}
                          />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <div className="px-6 py-4 border-t border-gray-100 flex items-center justify-between">
              {notifSaved && (
                <span className="text-sm text-green-600 flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4" /> Preferences saved
                </span>
              )}
              <button
                type="submit"
                className="ml-auto px-5 py-2.5 rounded-sm text-sm font-bold text-white transition hover:opacity-90"
                style={{ backgroundColor: theme.navy }}
              >
                Save Preferences
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Account management */}
      <section>
        <div className="flex items-center gap-2 mb-4">
          <Trash2 className="w-4 h-4 text-red-400" />
          <h2 className="text-sm font-bold uppercase tracking-wider text-red-500">
            Account Management
          </h2>
        </div>
        <div className="bg-white border border-red-100 rounded-sm shadow-sm p-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <p className="font-bold text-sm text-gray-700">Request Account Deletion</p>
              <p className="text-xs text-gray-500 mt-0.5">
                To delete your MREA account, contact admin@muslimrea.org. Your membership data will be retained for one billing cycle.
              </p>
            </div>
            <a
              href="mailto:admin@muslimrea.org?subject=Account%20Deletion%20Request"
              className="flex-shrink-0 px-4 py-2.5 rounded-sm text-sm font-bold border border-red-200 text-red-500 hover:bg-red-50 transition"
            >
              Contact Admin
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
