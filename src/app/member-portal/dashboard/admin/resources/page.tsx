'use client';

import { useState } from 'react';
import {
  FileText, Plus, Search, Trash2, Edit3,
  Globe, Lock, Layout, ExternalLink, Filter,
  CheckCircle, FileDown, Eye
} from 'lucide-react';

const theme = { navy: '#0B1A30', gold: '#D4AF37' };

const EXISTING_RESOURCES = [
  { id: 1, title: 'Shariah-Compliant Financing Guide 2026', category: 'Standards', format: 'PDF', size: '2.4 MB', access: 'All Members', status: 'Published' },
  { id: 2, title: 'Commercial Lease Template (Texas)', category: 'Legal', format: 'DOCX', size: '450 KB', access: 'Senior Members', status: 'Published' },
  { id: 3, title: 'MREA Q1 2026 Market Report', category: 'Analysis', format: 'PDF', size: '5.1 MB', access: 'All Members', status: 'Draft' },
  { id: 4, title: 'Halal Investment Webinar Recording', category: 'Education', format: 'Video', size: 'Video Link', access: 'All Members', status: 'Published' },
];

export default function ResourceManagement() {
  const [showUpload, setShowUpload] = useState(false);
  const [saved, setSaved] = useState(false);

  return (
    <div className="p-6 lg:p-10 max-w-6xl mx-auto w-full space-y-8">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-serif font-bold" style={{ color: theme.navy }}>Resource Management</h1>
          <p className="text-sm text-gray-500 mt-1">Upload documents, whitepapers, and legal templates.</p>
        </div>
        {!showUpload && (
          <button
            onClick={() => setShowUpload(true)}
            className="flex items-center justify-center gap-2 px-6 py-2.5 rounded-sm font-bold text-sm text-white transition hover:opacity-90"
            style={{ backgroundColor: theme.navy }}
          >
            <Plus className="w-4 h-4" /> Add New Resource
          </button>
        )}
      </div>

      {showUpload ? (
        <div className="bg-white border border-gray-100 rounded-sm shadow-md animate-in fade-in slide-in-from-top-4 duration-300">
          <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between">
            <h2 className="font-bold text-sm uppercase tracking-wider text-gray-500">Resource Upload</h2>
            <button
              onClick={() => setShowUpload(false)}
              className="text-xs text-gray-400 hover:text-gray-600 font-bold"
            >
              Cancel
            </button>
          </div>
          <form className="p-6 space-y-6" onSubmit={(e) => {
            e.preventDefault();
            setSaved(true);
            setTimeout(() => { setSaved(false); setShowUpload(false); }, 1500);
          }}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="md:col-span-2">
                <label className="block text-xs font-semibold text-gray-500 mb-1.5">Resource Title</label>
                <input
                  type="text"
                  placeholder="e.g. 2026 Housing Market Trends"
                  className="w-full px-3 py-2.5 border border-gray-200 rounded-sm text-sm focus:outline-none focus:ring-1"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-500 mb-1.5">Category</label>
                <select className="w-full px-3 py-2.5 border border-gray-200 rounded-sm text-sm focus:outline-none focus:ring-1 bg-white">
                  <option>Legal Templates</option>
                  <option>Market Analysis</option>
                  <option>Standards & Policy</option>
                  <option>Educational Video</option>
                  <option>Council Archives</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-500 mb-1.5">Access Level</label>
                <select className="w-full px-3 py-2.5 border border-gray-200 rounded-sm text-sm focus:outline-none focus:ring-1 bg-white">
                  <option>All Members</option>
                  <option>Senior Membership Only</option>
                  <option>Council Members Only</option>
                  <option>Public / Open Access</option>
                </select>
              </div>

              <div className="md:col-span-2">
                <label className="block text-xs font-semibold text-gray-500 mb-1.5">File Source</label>
                <div className="border-2 border-dashed border-slate-200 rounded-sm p-8 text-center bg-slate-50 hover:bg-slate-100 transition cursor-pointer">
                  <FileDown className="w-8 h-8 text-slate-300 mx-auto mb-2" />
                  <p className="text-sm font-bold text-gray-500">Click to upload file or drag and drop</p>
                  <p className="text-[10px] text-gray-400 mt-1 uppercase">PDF, DOCX, XLSX (Max 50MB)</p>
                </div>
              </div>

              <div className="md:col-span-2 flex items-center gap-2">
                <span className="text-xs text-gray-400">OR</span>
                <div className="flex-1">
                  <label className="block text-xs font-semibold text-gray-500 mb-1.5">External URL (e.g. Video Link)</label>
                  <input
                    type="url"
                    placeholder="https://vimeo.com/..."
                    className="w-full px-3 py-2.5 border border-gray-200 rounded-sm text-sm focus:outline-none focus:ring-1"
                  />
                </div>
              </div>

              <div className="md:col-span-2">
                <label className="block text-xs font-semibold text-gray-500 mb-1.5">Short Description</label>
                <textarea
                  rows={3}
                  placeholder="Summary of what this resource provides..."
                  className="w-full px-3 py-2.5 border border-gray-200 rounded-sm text-sm focus:outline-none focus:ring-1 resize-none"
                />
              </div>
            </div>

            <div className="pt-6 border-t border-gray-100 flex items-center justify-between">
              {saved ? (
                <span className="text-sm text-green-600 flex items-center gap-2 font-bold">
                  <CheckCircle className="w-5 h-5" /> Resource Added!
                </span>
              ) : <span></span>}
              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() => setShowUpload(false)}
                  className="px-6 py-2.5 rounded-sm text-sm font-bold border border-gray-200 text-gray-500 hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-8 py-2.5 rounded-sm text-sm font-bold text-white transition hover:opacity-90"
                  style={{ backgroundColor: theme.navy }}
                >
                  Save & Publish
                </button>
              </div>
            </div>
          </form>
        </div>
      ) : (
        <div className="space-y-4">
          <div className="flex flex-col md:flex-row gap-4 mb-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search resources..."
                className="w-full pl-9 pr-4 py-2.5 border border-gray-200 rounded-sm text-sm focus:outline-none focus:ring-1 bg-white shadow-sm"
              />
            </div>
            <div className="flex gap-2">
              <button className="px-4 py-2 bg-white border border-gray-200 rounded-sm text-xs font-bold flex items-center gap-2 text-gray-500 hover:bg-gray-50">
                <Filter className="w-3.5 h-3.5" /> All Categories
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
            {EXISTING_RESOURCES.map((res) => (
              <div key={res.id} className="bg-white border border-gray-100 rounded-sm p-5 hover:shadow-md transition group">
                <div className="flex justify-between items-start mb-4">
                  <div className="p-2 bg-slate-50 rounded-sm group-hover:bg-navy group-hover:text-white transition duration-300">
                    <FileText className="w-6 h-6" />
                  </div>
                  <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition">
                    <button className="p-1.5 text-gray-400 hover:text-navy rounded border border-gray-100 bg-white shadow-sm">
                      <Edit3 className="w-3.5 h-3.5" />
                    </button>
                    <button className="p-1.5 text-gray-400 hover:text-red-500 rounded border border-gray-100 bg-white shadow-sm">
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
                <div>
                  <h3 className="text-sm font-bold mb-1" style={{ color: theme.navy }}>{res.title}</h3>
                  <div className="flex items-center gap-3 text-[10px] text-gray-400 uppercase font-bold tracking-wider">
                    <span>{res.category}</span>
                    <span>&bull;</span>
                    <span>{res.format}</span>
                    <span>&bull;</span>
                    <span>{res.size}</span>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-gray-50 flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    {res.access === 'All Members' ? (
                      <Globe className="w-3 h-3 text-green-500" />
                    ) : (
                      <Lock className="w-3 h-3 text-gold" style={{ color: theme.gold }} />
                    )}
                    <span className="text-[10px] font-bold text-gray-500">{res.access}</span>
                  </div>
                  <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${
                    res.status === 'Published' ? 'bg-green-50 text-green-600' : 'bg-gray-100 text-gray-400'
                  }`}>
                    {res.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
