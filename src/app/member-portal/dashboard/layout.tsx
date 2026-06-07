'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Menu } from 'lucide-react';
import PortalSidebar from '@/components/PortalSidebar';
import { getSupabaseClient } from '@/lib/supabase';

interface MemberState {
  name: string;
  tier: string;
  isAdmin: boolean;
}

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [member, setMember] = useState<MemberState>({
    name: 'Member',
    tier: 'Individual Professional',
    isAdmin: false,
  });
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    const supabase = getSupabaseClient();
    if (!supabase) {
      // No Supabase configured — allow demo access with Admin rights for testing
      setMember({
        name: 'Demo Admin',
        tier: 'Founding Member',
        isAdmin: true,
      });
      setChecking(false);
      return;
    }

    supabase.auth.getSession().then(({ data: { session } }) => {
      if (!session) {
        router.replace('/member-portal');
      } else {
        const isAdmin = session.user.user_metadata?.role === 'admin' || session.user.email?.endsWith('@muslimrea.org');
        setMember({
          name:
            session.user.user_metadata?.full_name ||
            session.user.email?.split('@')[0] ||
            'Member',
          tier: session.user.user_metadata?.tier || 'Individual Professional',
          isAdmin,
        });
        setChecking(false);
      }
    });
  }, [router]);

  if (checking) {
    return (
      <div
        className="min-h-screen flex items-center justify-center"
        style={{ backgroundColor: '#0B1A30' }}
      >
        <div className="w-8 h-8 border-2 border-white/20 border-t-yellow-400 rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="flex h-screen overflow-hidden bg-slate-50">
      {/* Desktop sidebar */}
      <div className="hidden lg:block flex-shrink-0">
        <PortalSidebar memberName={member.name} memberTier={member.tier} isAdmin={member.isAdmin} />
      </div>

      {/* Mobile sidebar overlay */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 z-50 flex">
          <div
            className="absolute inset-0 bg-black/60"
            onClick={() => setMobileOpen(false)}
          />
          <div className="relative z-10 h-full">
            <PortalSidebar
              memberName={member.name}
              memberTier={member.tier}
              isAdmin={member.isAdmin}
              onClose={() => setMobileOpen(false)}
            />
          </div>
        </div>
      )}

      {/* Main content */}
      <div className="flex-1 flex flex-col min-h-0 overflow-hidden">
        {/* Mobile top bar */}
        <header className="lg:hidden flex items-center h-14 px-4 border-b border-gray-200 bg-white flex-shrink-0">
          <button
            onClick={() => setMobileOpen(true)}
            className="mr-3 text-gray-500"
            aria-label="Open menu"
          >
            <Menu className="w-5 h-5" />
          </button>
          <span
            className="font-serif font-bold text-sm"
            style={{ color: '#0B1A30' }}
          >
            MREA Member Portal
          </span>
        </header>

        <main className="flex-1 overflow-y-auto">{children}</main>
      </div>
    </div>
  );
}
