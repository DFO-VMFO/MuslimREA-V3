'use client';

import { useState } from 'react';
import { Award, CheckCircle, Linkedin } from 'lucide-react';

const theme = { navy: '#0B1A30', gold: '#D4AF37' };

const SPECIALTY_OPTIONS = [
  'Residential Brokerage',
  'Commercial Brokerage',
  'Multifamily Investment',
  'Ground-Up Development',
  'Property Management',
  'Mortgage & Lending',
  'Real Estate Law',
  'Halal Finance',
  'REITs & Institutional',
  'Land & Entitlement',
];

export default function ProfilePage() {
  const [saved, setSaved] = useState(false);
  const [form, setForm] = useState({
    firstName: 'Member',
    lastName: '',
    title: 'Real Estate Professional',
    company: '',
    email: '',
    phone: '',
    city: '',
    state: '',
    bio: '',
    specialties: [] as string[],
    linkedin: '',
    website: '',
  });

  const toggleSpecialty = (s: string) => {
    setForm((prev) => ({
      ...prev,
      specialties: prev.specialties.includes(s)
        ? prev.specialties.filter((x) => x !== s)
        : [...prev.specialties, s],
    }));
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <div className="p-6 lg:p-10 max-w-5xl mx-auto w-full space-y-8">
      <div>
        <h1 className="text-2xl font-serif font-bold" style={{ color: theme.navy }}>
          My Profile
        </h1>
        <p className="text-sm text-gray-500 mt-1">
          Manage your professional profile visible to other MREA members.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left: avatar + membership card */}
        <div className="space-y-5">
          <div className="bg-white border border-gray-100 rounded-sm p-6 text-center shadow-sm">
            <div
              className="w-20 h-20 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-3"
              style={{ backgroundColor: `${theme.navy}12`, color: theme.navy }}
            >
              {form.firstName.charAt(0)}
            </div>
            <p className="font-bold text-sm" style={{ color: theme.navy }}>
              {form.firstName} {form.lastName}
            </p>
            <p className="text-xs text-gray-500 mt-0.5">{form.title || 'MREA Member'}</p>
            <button
              type="button"
              className="mt-4 text-xs font-bold hover:underline"
              style={{ color: theme.gold }}
            >
              Upload Photo
            </button>
          </div>

          {/* Membership card */}
          <div className="rounded-sm p-6 text-white shadow-sm" style={{ backgroundColor: theme.navy }}>
            <div className="flex items-center gap-2 mb-4">
              <Award className="w-4 h-4 flex-shrink-0" style={{ color: theme.gold }} />
              <span
                className="text-xs font-bold uppercase tracking-wider"
                style={{ color: theme.gold }}
              >
                Membership
              </span>
            </div>
            <p className="font-bold text-base mb-0.5">Individual Professional</p>
            <p className="text-xs text-gray-400 mb-5">Houston Chapter</p>
            <div className="space-y-2.5 text-xs">
              {[
                { label: 'Member Since', value: 'March 2025' },
                { label: 'Renewal Date', value: 'March 2027' },
                { label: 'Status', value: 'Active', highlight: true },
              ].map((row) => (
                <div key={row.label} className="flex justify-between">
                  <span className="text-gray-400">{row.label}</span>
                  <span className={row.highlight ? 'text-green-400 font-bold' : 'text-white'}>
                    {row.value}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Profile completeness */}
          <div className="bg-white border border-gray-100 rounded-sm p-5 shadow-sm">
            <p className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-3">
              Profile Completeness
            </p>
            <div className="flex items-center gap-3 mb-2">
              <div className="flex-1 h-2 bg-gray-100 rounded-full">
                <div
                  className="h-full rounded-full"
                  style={{ width: '45%', backgroundColor: theme.gold }}
                />
              </div>
              <span className="text-xs font-bold text-gray-500">45%</span>
            </div>
            <p className="text-xs text-gray-500">
              Add your bio, specialties, and LinkedIn to increase visibility in the directory.
            </p>
          </div>
        </div>

        {/* Right: form */}
        <div className="lg:col-span-2 space-y-5">
          <form onSubmit={handleSave}>
            {/* Personal Info */}
            <div className="bg-white border border-gray-100 rounded-sm shadow-sm mb-5">
              <div className="px-6 py-4 border-b border-gray-100">
                <h2 className="text-xs font-bold uppercase tracking-wider text-gray-500">
                  Personal Information
                </h2>
              </div>
              <div className="p-6 space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-500 mb-1.5">
                      First Name
                    </label>
                    <input
                      type="text"
                      value={form.firstName}
                      onChange={(e) => setForm({ ...form, firstName: e.target.value })}
                      className="w-full px-3 py-2.5 border border-gray-200 rounded-sm text-sm focus:outline-none focus:ring-1"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-500 mb-1.5">
                      Last Name
                    </label>
                    <input
                      type="text"
                      value={form.lastName}
                      onChange={(e) => setForm({ ...form, lastName: e.target.value })}
                      className="w-full px-3 py-2.5 border border-gray-200 rounded-sm text-sm focus:outline-none focus:ring-1"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-500 mb-1.5">
                    Professional Title
                  </label>
                  <input
                    type="text"
                    value={form.title}
                    onChange={(e) => setForm({ ...form, title: e.target.value })}
                    placeholder="e.g. Senior Real Estate Broker"
                    className="w-full px-3 py-2.5 border border-gray-200 rounded-sm text-sm focus:outline-none focus:ring-1"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-500 mb-1.5">
                    Company / Brokerage
                  </label>
                  <input
                    type="text"
                    value={form.company}
                    onChange={(e) => setForm({ ...form, company: e.target.value })}
                    className="w-full px-3 py-2.5 border border-gray-200 rounded-sm text-sm focus:outline-none focus:ring-1"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-500 mb-1.5">Email</label>
                    <input
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full px-3 py-2.5 border border-gray-200 rounded-sm text-sm focus:outline-none focus:ring-1"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-500 mb-1.5">Phone</label>
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full px-3 py-2.5 border border-gray-200 rounded-sm text-sm focus:outline-none focus:ring-1"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-500 mb-1.5">City</label>
                    <input
                      type="text"
                      value={form.city}
                      onChange={(e) => setForm({ ...form, city: e.target.value })}
                      className="w-full px-3 py-2.5 border border-gray-200 rounded-sm text-sm focus:outline-none focus:ring-1"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-500 mb-1.5">State</label>
                    <input
                      type="text"
                      value={form.state}
                      onChange={(e) => setForm({ ...form, state: e.target.value })}
                      placeholder="TX"
                      className="w-full px-3 py-2.5 border border-gray-200 rounded-sm text-sm focus:outline-none focus:ring-1"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Professional profile */}
            <div className="bg-white border border-gray-100 rounded-sm shadow-sm mb-5">
              <div className="px-6 py-4 border-b border-gray-100">
                <h2 className="text-xs font-bold uppercase tracking-wider text-gray-500">
                  Professional Profile
                </h2>
              </div>
              <div className="p-6 space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-500 mb-1.5">Bio</label>
                  <textarea
                    rows={4}
                    value={form.bio}
                    onChange={(e) => setForm({ ...form, bio: e.target.value })}
                    placeholder="Briefly describe your background, expertise, and what you bring to the MREA community..."
                    className="w-full px-3 py-2.5 border border-gray-200 rounded-sm text-sm focus:outline-none focus:ring-1 resize-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-500 mb-2">
                    Specialties
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {SPECIALTY_OPTIONS.map((s) => {
                      const selected = form.specialties.includes(s);
                      return (
                        <button
                          key={s}
                          type="button"
                          onClick={() => toggleSpecialty(s)}
                          className="px-3 py-1.5 rounded-sm text-xs font-semibold border transition"
                          style={
                            selected
                              ? { backgroundColor: `${theme.navy}`, color: 'white', borderColor: theme.navy }
                              : { backgroundColor: 'white', color: '#666', borderColor: '#e5e7eb' }
                          }
                        >
                          {s}
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-500 mb-1.5 flex items-center gap-1.5">
                    <Linkedin className="w-3.5 h-3.5" /> LinkedIn URL
                  </label>
                  <input
                    type="url"
                    value={form.linkedin}
                    onChange={(e) => setForm({ ...form, linkedin: e.target.value })}
                    placeholder="https://linkedin.com/in/..."
                    className="w-full px-3 py-2.5 border border-gray-200 rounded-sm text-sm focus:outline-none focus:ring-1"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-500 mb-1.5">
                    Website / Brokerage URL
                  </label>
                  <input
                    type="url"
                    value={form.website}
                    onChange={(e) => setForm({ ...form, website: e.target.value })}
                    placeholder="https://..."
                    className="w-full px-3 py-2.5 border border-gray-200 rounded-sm text-sm focus:outline-none focus:ring-1"
                  />
                </div>
              </div>
            </div>

            {/* Save row */}
            <div className="flex items-center justify-between">
              {saved && (
                <span className="text-sm text-green-600 flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4" /> Profile saved successfully
                </span>
              )}
              <button
                type="submit"
                className="ml-auto px-6 py-2.5 rounded-sm font-bold text-sm text-white transition hover:opacity-90"
                style={{ backgroundColor: theme.navy }}
              >
                Save Changes
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
