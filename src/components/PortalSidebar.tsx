'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import {
  LayoutDashboard, User, Shield, Calendar, BookOpen,
  Users, Heart, Settings, LogOut, Building,
} from 'lucide-react';
import { getSupabaseClient } from '@/lib/supabase';

const theme = { navy: '#0B1A30', gold: '#D4AF37' };

const NAV = [
  { href: '/member-portal/dashboard', label: 'Dashboard', icon: LayoutDashboard, exact: true },
  { href: '/member-portal/dashboard/profile', label: 'My Profile', icon: User },
  { href: '/member-portal/dashboard/councils', label: 'Council Access', icon: Shield },
  { href: '/member-portal/dashboard/events', label: 'Events', icon: Calendar },
  { href: '/member-portal/dashboard/resources', label: 'Resources', icon: BookOpen },
  { href: '/member-portal/dashboard/directory', label: 'Member Directory', icon: Users },
  { href: '/member-portal/dashboard/womens-alliance', label: "Women's Alliance", icon: Heart },
];

const ADMIN_NAV = [
  { href: '/member-portal/dashboard/admin', label: 'Admin Management', icon: Shield, exact: true },
];

export default function PortalSidebar({
  memberName = 'Member',
  memberTier = 'Individual Professional',
  isAdmin = false,
  onClose,
}: {
  memberName?: string;
  memberTier?: string;
  isAdmin?: boolean;
  onClose?: () => void;
}) {
  const pathname = usePathname();
  const router = useRouter();

  const isActive = (href: string, exact?: boolean) =>
    exact ? pathname === href : pathname.startsWith(href);

  const handleSignOut = async () => {
    const supabase = getSupabaseClient();
    if (supabase) await supabase.auth.signOut();
    router.push('/member-portal');
  };

  return (
    <aside className="flex flex-col h-full w-60 flex-shrink-0" style={{ backgroundColor: theme.navy }}>
      {/* Logo */}
      <div className="px-5 py-5 border-b border-white/10">
        <Link href="/member-portal/dashboard" onClick={onClose} className="flex items-center gap-3">
          <Building className="w-7 h-7 flex-shrink-0" style={{ color: theme.gold }} />
          <div>
            <div className="font-serif font-bold text-white text-base leading-none">MREA</div>
            <div className="text-[9px] tracking-[0.2em] uppercase mt-0.5" style={{ color: theme.gold }}>
              Member Portal
            </div>
          </div>
        </Link>
      </div>

      {/* Nav */}
      <nav className="flex-1 overflow-y-auto py-4 px-3">
        <ul className="space-y-0.5">
          {NAV.map(({ href, label, icon: Icon, exact }) => {
            const active = isActive(href, exact);
            return (
              <li key={href}>
                <Link
                  href={href}
                  onClick={onClose}
                  className={`flex items-center gap-3 px-3 py-2.5 rounded-sm text-sm font-medium transition-all ${
                    active ? '' : 'text-gray-400 hover:text-white hover:bg-white/5'
                  }`}
                  style={active ? { backgroundColor: `${theme.gold}18`, color: theme.gold } : {}}
                >
                  <Icon className="w-4 h-4 flex-shrink-0" />
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>

        {isAdmin && (
          <div className="mt-4 pt-4 border-t border-white/10">
            <p className="px-3 mb-2 text-[10px] font-bold uppercase tracking-widest text-gray-500">
              Admin Only
            </p>
            <ul className="space-y-0.5">
              {ADMIN_NAV.map(({ href, label, icon: Icon, exact }) => {
                const active = isActive(href, exact);
                return (
                  <li key={href}>
                    <Link
                      href={href}
                      onClick={onClose}
                      className={`flex items-center gap-3 px-3 py-2.5 rounded-sm text-sm font-medium transition-all ${
                        active ? '' : 'text-gray-400 hover:text-white hover:bg-white/5'
                      }`}
                      style={active ? { backgroundColor: `${theme.gold}18`, color: theme.gold } : {}}
                    >
                      <Icon className="w-4 h-4 flex-shrink-0" />
                      {label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        )}

        <div className="mt-4 pt-4 border-t border-white/10">
          <Link
            href="/member-portal/dashboard/settings"
            onClick={onClose}
            className={`flex items-center gap-3 px-3 py-2.5 rounded-sm text-sm font-medium transition-all ${
              isActive('/member-portal/dashboard/settings')
                ? ''
                : 'text-gray-400 hover:text-white hover:bg-white/5'
            }`}
            style={
              isActive('/member-portal/dashboard/settings')
                ? { backgroundColor: `${theme.gold}18`, color: theme.gold }
                : {}
            }
          >
            <Settings className="w-4 h-4 flex-shrink-0" />
            Settings
          </Link>
          <button
            onClick={handleSignOut}
            className="w-full flex items-center gap-3 px-3 py-2.5 rounded-sm text-sm font-medium text-gray-400 hover:text-red-400 hover:bg-red-400/5 transition-all"
          >
            <LogOut className="w-4 h-4 flex-shrink-0" />
            Sign Out
          </button>
        </div>
      </nav>

      {/* Member info */}
      <div className="px-4 py-4 border-t border-white/10">
        <div className="flex items-center gap-3">
          <div
            className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0"
            style={{ backgroundColor: `${theme.gold}25`, color: theme.gold }}
          >
            {memberName.charAt(0).toUpperCase()}
          </div>
          <div className="min-w-0">
            <p className="text-sm font-semibold text-white truncate">{memberName}</p>
            <p className="text-xs text-gray-400 truncate">{memberTier}</p>
          </div>
        </div>
      </div>
    </aside>
  );
}
