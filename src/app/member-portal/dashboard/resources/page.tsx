'use client';

import { useState } from 'react';
import { FileText, Download, Search, BookOpen, Scale, Briefcase, BarChart2, ClipboardList } from 'lucide-react';

const theme = { navy: '#0B1A30', gold: '#D4AF37' };

interface Resource {
  id: number;
  title: string;
  description: string;
  type: string;
  date: string;
  size: string;
  new?: boolean;
}

interface Category {
  id: string;
  label: string;
  icon: React.ElementType;
  resources: Resource[];
}

const CATEGORIES: Category[] = [
  {
    id: 'research',
    label: 'Research & Market Reports',
    icon: BarChart2,
    resources: [
      {
        id: 1,
        title: 'MREA Muslim American Real Estate Landscape 2025',
        description: 'Comprehensive annual report on Muslim American real estate ownership, investment trends, and market participation across top 20 metros.',
        type: 'PDF Report',
        date: 'March 2025',
        size: '4.2 MB',
        new: true,
      },
      {
        id: 2,
        title: 'Halal Finance Market Analysis Q1 2026',
        description: 'Quarterly analysis of Islamic finance products available in the U.S. market, including Murabaha, Ijara, and Diminishing Musharakah instruments.',
        type: 'PDF Report',
        date: 'April 2026',
        size: '2.8 MB',
        new: true,
      },
      {
        id: 3,
        title: 'Houston Metro Multifamily Investment Brief 2025',
        description: "Chapter-specific market analysis for Houston's multifamily sector including cap rates, vacancy rates, and emerging submarkets.",
        type: 'PDF Brief',
        date: 'January 2025',
        size: '1.6 MB',
      },
    ],
  },
  {
    id: 'policy',
    label: 'Policy Briefs & Advocacy',
    icon: Scale,
    resources: [
      {
        id: 4,
        title: 'Zoning Reform & Muslim Community Housing: A Policy Analysis',
        description: 'PPGA policy brief examining the impact of exclusionary zoning on Muslim communities and actionable reform recommendations.',
        type: 'PDF Brief',
        date: 'February 2026',
        size: '1.1 MB',
        new: true,
      },
      {
        id: 5,
        title: 'Legislative Watch: Texas Housing Bills 2025 Session',
        description: 'Detailed tracker of Texas state legislation affecting real estate, property rights, and housing development with MREA position statements.',
        type: 'PDF Report',
        date: 'October 2025',
        size: '2.4 MB',
      },
      {
        id: 6,
        title: 'Fair Housing for Muslim Homebuyers: Know Your Rights',
        description: 'Plain-language guide to fair housing protections for Muslim Americans including religious accommodation in lending and HOA contexts.',
        type: 'PDF Guide',
        date: 'June 2025',
        size: '0.9 MB',
      },
    ],
  },
  {
    id: 'education',
    label: 'Education & Professional Development',
    icon: BookOpen,
    resources: [
      {
        id: 7,
        title: 'Introduction to Commercial Real Estate for Residential Agents',
        description: '40-page guide introducing residential brokers to commercial asset classes, underwriting basics, and transitioning to commercial deals.',
        type: 'PDF Guide',
        date: 'September 2025',
        size: '3.1 MB',
      },
      {
        id: 8,
        title: 'Islamic Finance for Real Estate Investors: A Practical Guide',
        description: 'Deep-dive into Shariah-compliant financing structures for real estate, covering product types, scholars, and how to evaluate providers.',
        type: 'PDF Guide',
        date: 'August 2025',
        size: '2.7 MB',
      },
      {
        id: 9,
        title: 'Ground-Up Development 101: Permits, Entitlement & Construction',
        description: "Structured primer for investors moving into development. Covers site selection, entitlement process, GC selection, and pro forma modeling.",
        type: 'PDF Course',
        date: 'May 2025',
        size: '5.0 MB',
      },
    ],
  },
  {
    id: 'ethics',
    label: 'Ethics & Governance',
    icon: ClipboardList,
    resources: [
      {
        id: 10,
        title: 'MREA Code of Ethics & Professional Standards',
        description: 'The complete MREA code of conduct governing all member interactions, business practices, and professional responsibilities.',
        type: 'PDF Document',
        date: 'January 2025',
        size: '0.6 MB',
      },
      {
        id: 11,
        title: 'Shariah Compliance in Real Estate Transactions: Guidelines',
        description: 'Guidelines for evaluating the Shariah compliance of real estate transactions, financing structures, and investment vehicles.',
        type: 'PDF Guide',
        date: 'March 2025',
        size: '1.3 MB',
      },
    ],
  },
  {
    id: 'templates',
    label: 'Templates & Tools',
    icon: Briefcase,
    resources: [
      {
        id: 12,
        title: 'Multifamily Acquisition Underwriting Model (Excel)',
        description: 'Pre-built Excel underwriting model for multifamily acquisitions. Includes cash-on-cash, IRR, DSCR, and sensitivity analysis tabs.',
        type: 'Excel Template',
        date: 'April 2026',
        size: '1.8 MB',
        new: true,
      },
      {
        id: 13,
        title: 'Joint Venture Operating Agreement Template',
        description: 'Editable JV operating agreement template reviewed by MREA legal advisors. Includes equity waterfall, management fee, and exit provisions.',
        type: 'Word Document',
        date: 'November 2025',
        size: '0.4 MB',
      },
      {
        id: 14,
        title: 'Investor Pitch Deck Template — MREA Branded',
        description: 'Professional PowerPoint template for presenting real estate investment opportunities to MREA network investors.',
        type: 'PowerPoint',
        date: 'January 2026',
        size: '3.5 MB',
      },
    ],
  },
];

export default function ResourcesPage() {
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const filteredCategories = CATEGORIES.map((cat) => ({
    ...cat,
    resources: cat.resources.filter(
      (r) =>
        (activeCategory === 'all' || cat.id === activeCategory) &&
        (search === '' ||
          r.title.toLowerCase().includes(search.toLowerCase()) ||
          r.description.toLowerCase().includes(search.toLowerCase())),
    ),
  })).filter((cat) => cat.resources.length > 0);

  const totalCount = CATEGORIES.reduce((sum, c) => sum + c.resources.length, 0);

  return (
    <div className="p-6 lg:p-10 max-w-5xl mx-auto w-full space-y-8">
      <div>
        <h1 className="text-2xl font-serif font-bold" style={{ color: theme.navy }}>
          Member Resources
        </h1>
        <p className="text-sm text-gray-500 mt-1">
          {totalCount} resources — research reports, policy briefs, guides, templates, and tools.
        </p>
      </div>

      {/* Search + filter */}
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search resources..."
            className="w-full pl-9 pr-4 py-2.5 border border-gray-200 rounded-sm text-sm focus:outline-none focus:ring-1 bg-white"
          />
        </div>
        <div className="flex gap-2 flex-wrap">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-3 py-2 rounded-sm text-xs font-bold transition ${
              activeCategory === 'all' ? 'text-white' : 'bg-white border border-gray-200 text-gray-500 hover:border-gray-300'
            }`}
            style={activeCategory === 'all' ? { backgroundColor: theme.navy } : {}}
          >
            All
          </button>
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(activeCategory === cat.id ? 'all' : cat.id)}
              className={`px-3 py-2 rounded-sm text-xs font-bold transition ${
                activeCategory === cat.id
                  ? 'text-white'
                  : 'bg-white border border-gray-200 text-gray-500 hover:border-gray-300'
              }`}
              style={activeCategory === cat.id ? { backgroundColor: theme.navy } : {}}
            >
              {cat.label.split('&')[0].trim()}
            </button>
          ))}
        </div>
      </div>

      {/* Resource categories */}
      <div className="space-y-8">
        {filteredCategories.length === 0 ? (
          <p className="text-sm text-gray-400 text-center py-12">
            No resources match your search.
          </p>
        ) : (
          filteredCategories.map((category) => {
            const Icon = category.icon;
            return (
              <section key={category.id}>
                <div className="flex items-center gap-2.5 mb-4">
                  <Icon className="w-4 h-4" style={{ color: theme.gold }} />
                  <h2 className="text-sm font-bold uppercase tracking-wider" style={{ color: theme.navy }}>
                    {category.label}
                  </h2>
                </div>
                <div className="space-y-3">
                  {category.resources.map((resource) => (
                    <div
                      key={resource.id}
                      className="bg-white border border-gray-100 rounded-sm p-5 hover:shadow-sm transition group"
                    >
                      <div className="flex items-start gap-4">
                        <div
                          className="w-9 h-9 rounded-sm flex items-center justify-center flex-shrink-0 mt-0.5"
                          style={{ backgroundColor: `${theme.navy}08`, color: theme.navy }}
                        >
                          <FileText className="w-4 h-4" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex flex-wrap items-start gap-2 mb-1">
                            <h3
                              className="font-bold text-sm group-hover:underline cursor-pointer"
                              style={{ color: theme.navy }}
                            >
                              {resource.title}
                            </h3>
                            {resource.new && (
                              <span
                                className="text-[10px] font-bold px-1.5 py-0.5 rounded flex-shrink-0"
                                style={{ backgroundColor: `${theme.gold}20`, color: theme.gold }}
                              >
                                New
                              </span>
                            )}
                          </div>
                          <p className="text-xs text-gray-500 mb-3 leading-relaxed">
                            {resource.description}
                          </p>
                          <div className="flex items-center justify-between">
                            <div className="flex gap-3 text-xs text-gray-400">
                              <span>{resource.type}</span>
                              <span>&middot;</span>
                              <span>{resource.date}</span>
                              <span>&middot;</span>
                              <span>{resource.size}</span>
                            </div>
                            <button
                              className="flex items-center gap-1.5 text-xs font-bold transition hover:opacity-80"
                              style={{ color: theme.gold }}
                            >
                              <Download className="w-3.5 h-3.5" /> Download
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            );
          })
        )}
      </div>
    </div>
  );
}
