'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';

const theme = {
  navy: '#0B1A30',
  gold: '#D4AF37',
  charcoal: '#333333',
  lightGray: '#F5F7FA',
};

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // In production: wire to an API route or form service
    setSubmitted(true);
  }

  return (
    <div className="font-sans flex flex-col min-h-screen text-slate-900">
      <Navbar />
      <main className="flex-grow">

        {/* Header */}
        <div className="py-20 text-white" style={{ backgroundColor: theme.navy }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="uppercase tracking-[0.25em] text-xs font-bold block mb-4" style={{ color: theme.gold }}>
              Get in Touch
            </span>
            <h1 className="text-5xl font-serif font-bold mb-5">Contact Us</h1>
            <p className="text-xl text-gray-300 max-w-xl mx-auto">
              Questions about membership, chapters, councils, or the Women&apos;s Alliance? Our team is here to help.
            </p>
          </div>
        </div>

        {/* Contact Layout */}
        <div className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-3 gap-12">

            {/* Sidebar */}
            <div className="space-y-8">
              <div>
                <h3 className="font-bold text-lg mb-5" style={{ color: theme.navy }}>Office Information</h3>
                <div className="space-y-5">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: `${theme.navy}10`, color: theme.navy }}>
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-semibold text-sm mb-1" style={{ color: theme.navy }}>National Headquarters</div>
                      <div className="text-sm text-gray-500">United States<br />Chapter locations across 50+ cities</div>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: `${theme.navy}10`, color: theme.navy }}>
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-semibold text-sm mb-1" style={{ color: theme.navy }}>Email</div>
                      <a href="mailto:info@muslimrea.org" className="text-sm text-gray-500 hover:underline">info@muslimrea.org</a>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: `${theme.navy}10`, color: theme.navy }}>
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-semibold text-sm mb-1" style={{ color: theme.navy }}>Phone</div>
                      <div className="text-sm text-gray-500">Available to members via Member Portal</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-slate-900 rounded-sm p-6 text-white">
                <h4 className="font-bold text-sm uppercase tracking-wider mb-4" style={{ color: theme.gold }}>Quick Contacts</h4>
                <ul className="space-y-3 text-sm text-gray-300">
                  <li><span className="font-semibold text-white">Membership:</span><br />membership@muslimrea.org</li>
                  <li><span className="font-semibold text-white">Press & Media:</span><br />press@muslimrea.org</li>
                  <li><span className="font-semibold text-white">Women&apos;s Alliance:</span><br />mwrea@muslimrea.org</li>
                  <li><span className="font-semibold text-white">Chapter Inquiries:</span><br />chapters@muslimrea.org</li>
                </ul>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              {submitted ? (
                <div className="flex flex-col items-center justify-center h-full py-20 text-center">
                  <CheckCircle className="w-16 h-16 mb-4" style={{ color: theme.gold }} />
                  <h3 className="text-2xl font-serif font-bold mb-3" style={{ color: theme.navy }}>Message Received</h3>
                  <p className="text-gray-500 max-w-sm">Thank you for reaching out. A member of the MREA team will respond to your inquiry within 2 business days.</p>
                  <button onClick={() => { setSubmitted(false); setForm({ name: '', email: '', subject: '', message: '' }); }}
                          className="mt-6 text-sm font-bold hover:underline" style={{ color: theme.gold }}>
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold mb-2" style={{ color: theme.navy }}>Full Name <span className="text-red-500">*</span></label>
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={e => setForm({ ...form, name: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-sm text-sm focus:outline-none focus:ring-2 focus:ring-offset-1"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold mb-2" style={{ color: theme.navy }}>Email Address <span className="text-red-500">*</span></label>
                      <input
                        type="email"
                        required
                        value={form.email}
                        onChange={e => setForm({ ...form, email: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-sm text-sm focus:outline-none focus:ring-2 focus:ring-offset-1"
                        placeholder="you@example.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2" style={{ color: theme.navy }}>Subject <span className="text-red-500">*</span></label>
                    <select
                      required
                      value={form.subject}
                      onChange={e => setForm({ ...form, subject: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-sm text-sm focus:outline-none focus:ring-2 focus:ring-offset-1 bg-white"
                    >
                      <option value="">Select a topic...</option>
                      <option>Membership Inquiry</option>
                      <option>Chapter Information</option>
                      <option>Women&apos;s Alliance (MWREA)</option>
                      <option>Council Access</option>
                      <option>Event Registration</option>
                      <option>Media & Press</option>
                      <option>Partnership Inquiry</option>
                      <option>General Question</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2" style={{ color: theme.navy }}>Message <span className="text-red-500">*</span></label>
                    <textarea
                      required
                      rows={6}
                      value={form.message}
                      onChange={e => setForm({ ...form, message: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-sm text-sm focus:outline-none focus:ring-2 focus:ring-offset-1 resize-none"
                      placeholder="Tell us how we can help..."
                    />
                  </div>
                  <button type="submit"
                          className="flex items-center gap-2 px-8 py-3 rounded-sm font-bold text-sm transition hover:opacity-90"
                          style={{ backgroundColor: theme.navy, color: 'white' }}>
                    <Send className="w-4 h-4" /> Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
