'use client';

import Link from 'next/link';
import { Shield, Lock, ArrowRight, FileText, Users, Calendar } from 'lucide-react';

const theme = { navy: '#0B1A30', gold: '#D4AF37' };

interface Council {
  name: string;
  abbr: string;
  description: string;
  access: true;
  resources: string[];
  nextMeeting: string;
  members: string;
}

interface LockedCouncil {
  name: string;
  abbr: string;
  description: string;
  access: false;
  requiredTier: string;
}

type AnyCouncil = Council | LockedCouncil;

const COUNCILS: AnyCouncil[] = [
  {
    name: 'Muslim Women Real Estate Association',
    abbr: 'MWREA',
    description:
      "The official women's division of MREA. Access to mentorship programming, women's leadership forums, and both the Investment Club and the Advocacy Council.",
    access: true,
    resources: [
      '2025 MWREA Annual Leadership Report',
      'MWIAC Policy Brief: Zoning Reform & Homeownership',
      'Investment Club Orientation Guide',
      'Women in Real Estate Career Toolkit',
    ],
    nextMeeting: 'June 15, 2026 — Virtual',
    members: '480+ active members nationwide',
  },
  {
    name: 'Muslim Developer Council',
    abbr: 'MDC',
    description:
      'Peer council for ground-up developers, mixed-use builders, and commercial operators. Advocacy, deal intelligence, entitlement support, and halal finance coordination.',
    access: true,
    resources: [
      'Entitlement Navigator Guide 2026',
      'MDC Joint Venture Term Sheet Template',
      'Zoning Reform Tracker — Q1 2026',
      'Halal Construction Finance Overview',
    ],
    nextMeeting: 'June 20, 2026 — Houston Chapter',
    members: '200+ credentialed developers',
  },
  {
    name: 'Public Policy & Government Affairs Council',
    abbr: 'PPGA',
    description:
      'Advances housing affordability, zoning reform, property rights, and the legislative priorities that affect real estate professionals and Muslim communities.',
    access: true,
    resources: [
      'Legislative Watch: May 2026 Edition',
      'Housing Affordability Policy Memo',
      'Candidate Forum Planning Guide',
      'Fair Housing Compliance Primer',
    ],
    nextMeeting: 'July 8, 2026 — Washington, D.C.',
    members: '150+ policy advocates',
  },
  {
    name: 'MREA Capital Network',
    abbr: 'MCN',
    description:
      'Institutional and private investor network. Access to vetted deal flow, LP introductions, capital forums, and syndication resources for accredited investors.',
    access: false,
    requiredTier: 'Senior Membership',
  },
  {
    name: 'Muslim Family Office Circle',
    abbr: 'MFOC',
    description:
      'Invite-only council for principals managing multi-generational family wealth. Confidential peer exchange on portfolio strategy, succession planning, and estate structuring.',
    access: false,
    requiredTier: 'Invitation Only — Senior Membership',
  },
  {
    name: 'Investment Review Committee',
    abbr: 'IRC',
    description:
      'Peer review body evaluating investment opportunities for transparency, financial soundness, Shariah alignment, and compliance with MREA ethical standards.',
    access: false,
    requiredTier: 'Credentialed Analysts & Senior Members',
  },
];

export default function CouncilsPage() {
  const accessible = COUNCILS.filter((c): c is Council => c.access);
  const locked = COUNCILS.filter((c): c is LockedCouncil => !c.access);

  return (
    <div className="p-6 lg:p-10 max-w-5xl mx-auto w-full space-y-10">
      <div>
        <h1 className="text-2xl font-serif font-bold" style={{ color: theme.navy }}>
          Council Access
        </h1>
        <p className="text-sm text-gray-500 mt-1">
          Your active council memberships, resources, and meeting schedules.
        </p>
      </div>

      {/* Active councils */}
      <section>
        <h2 className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-4">
          Your Active Councils
        </h2>
        <div className="space-y-4">
          {accessible.map((council) => (
            <div
              key={council.abbr}
              className="bg-white border border-gray-100 rounded-sm shadow-sm overflow-hidden"
            >
              <div className="p-6">
                <div className="flex items-start gap-4">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{ backgroundColor: `${theme.gold}15`, color: theme.gold }}
                  >
                    <Shield className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <h3 className="font-bold" style={{ color: theme.navy }}>
                        {council.name}
                      </h3>
                      <span
                        className="text-xs font-bold px-2 py-0.5 rounded"
                        style={{ backgroundColor: `${theme.gold}15`, color: theme.gold }}
                      >
                        {council.abbr}
                      </span>
                      <span className="text-xs font-bold text-green-700 bg-green-50 px-2 py-0.5 rounded">
                        Active Access
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 mb-5 leading-relaxed">
                      {council.description}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-xs">
                      <div>
                        <p className="font-bold text-gray-500 uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
                          <FileText className="w-3.5 h-3.5" /> Council Resources
                        </p>
                        <ul className="space-y-2">
                          {council.resources.map((r) => (
                            <li
                              key={r}
                              className="flex items-start gap-2 text-gray-600 hover:text-navy cursor-pointer group"
                            >
                              <span
                                className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0"
                                style={{ backgroundColor: theme.gold }}
                              />
                              <span className="group-hover:underline">{r}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="space-y-4">
                        <div>
                          <p className="font-bold text-gray-500 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                            <Calendar className="w-3.5 h-3.5" /> Next Meeting
                          </p>
                          <p className="text-gray-600">{council.nextMeeting}</p>
                        </div>
                        <div>
                          <p className="font-bold text-gray-500 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                            <Users className="w-3.5 h-3.5" /> Network
                          </p>
                          <p className="text-gray-600">{council.members}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Locked councils */}
      <section>
        <h2 className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-4">
          Upgrade to Access
        </h2>
        <div className="space-y-3">
          {locked.map((council) => (
            <div
              key={council.abbr}
              className="bg-white border border-gray-100 rounded-sm p-5 opacity-80"
            >
              <div className="flex items-start gap-3">
                <Lock className="w-4 h-4 text-gray-400 flex-shrink-0 mt-0.5" />
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <h3 className="font-bold text-sm text-gray-700">{council.name}</h3>
                    <span className="text-xs font-bold text-gray-500 bg-gray-100 px-2 py-0.5 rounded">
                      {council.abbr}
                    </span>
                  </div>
                  <p className="text-xs text-gray-500 leading-relaxed">{council.description}</p>
                </div>
                <div className="text-right flex-shrink-0 pl-4">
                  <p className="text-xs text-gray-400 mb-1.5">{council.requiredTier}</p>
                  <Link
                    href="/membership"
                    className="text-xs font-bold inline-flex items-center gap-1 hover:underline"
                    style={{ color: theme.gold }}
                  >
                    Upgrade <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
