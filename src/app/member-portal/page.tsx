'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { Lock, AlertCircle, Building, ArrowRight, Eye, EyeOff } from 'lucide-react';
import { getSupabaseClient } from '@/lib/supabase';

const theme = {
  navy: '#0B1A30',
  gold: '#D4AF37',
  lightGray: '#F5F7FA',
};

export default function MemberPortal() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    const supabase = getSupabaseClient();
    if (!supabase) {
      // Demo mode — no Supabase env vars configured
      setTimeout(() => router.push('/member-portal/dashboard'), 800);
      return;
    }

    const { error: authError } = await supabase.auth.signInWithPassword({ email, password });
    setIsLoading(false);

    if (authError) {
      setError(
        authError.message === 'Invalid login credentials'
          ? 'Incorrect email or password. Please try again or contact admin@muslimrea.org.'
          : authError.message,
      );
    } else {
      router.push('/member-portal/dashboard');
    }
  };

  return (
    <div className="font-sans flex flex-col min-h-screen text-slate-900" style={{ backgroundColor: theme.lightGray }}>
      <Navbar />
      <main className="flex-grow flex items-center justify-center py-20 px-4">
        <div className="w-full max-w-md">
          <div className="bg-white rounded-sm shadow-2xl border border-gray-100 overflow-hidden">
            {/* Header */}
            <div className="py-8 px-8 text-center text-white" style={{ backgroundColor: theme.navy }}>
              <div className="flex justify-center mb-3">
                <Building className="h-10 w-10" style={{ color: theme.gold }} />
              </div>
              <h1 className="text-2xl font-serif font-bold tracking-tight">MREA Member Portal</h1>
              <p className="text-xs uppercase tracking-widest mt-2" style={{ color: theme.gold }}>
                Secured Member Access
              </p>
            </div>

            <div className="p-8">
              {error && (
                <div className="mb-5 p-4 rounded-sm bg-red-50 border-l-4 border-red-500 flex gap-3 items-start">
                  <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-red-700 leading-relaxed">{error}</p>
                </div>
              )}

              <form onSubmit={handleLogin} className="space-y-5">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">
                    Member Email
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 rounded-sm border border-gray-300 outline-none focus:ring-1 transition text-sm"
                    placeholder="you@example.com"
                    suppressHydrationWarning
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">
                    Password
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? 'text' : 'password'}
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full px-4 py-3 pr-12 rounded-sm border border-gray-300 outline-none focus:ring-1 transition text-sm"
                      suppressHydrationWarning
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    >
                      {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                </div>

                <div className="flex items-center justify-between text-xs">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" className="rounded-sm border-gray-300" suppressHydrationWarning />
                    <span className="text-gray-600">Remember me</span>
                  </label>
                  <button type="button" className="font-bold hover:underline" style={{ color: theme.gold }}>
                    Forgot Password?
                  </button>
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full py-3.5 rounded-sm font-bold text-white transition flex items-center justify-center gap-2 disabled:opacity-70"
                  style={{ backgroundColor: theme.navy }}
                >
                  {isLoading ? (
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <><Lock className="w-4 h-4" /> Sign In to Portal</>
                  )}
                </button>
              </form>

              <div className="mt-6 pt-6 border-t border-gray-100 text-center space-y-3">
                <p className="text-sm text-gray-500">Not a registered member yet?</p>
                <Link
                  href="/membership"
                  className="inline-flex items-center gap-2 text-sm font-bold hover:underline"
                  style={{ color: theme.gold }}
                >
                  Apply for MREA Membership <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>

          <p className="mt-4 text-center text-xs text-gray-500">
            Questions? Email{' '}
            <a href="mailto:admin@muslimrea.org" className="underline">
              admin@muslimrea.org
            </a>
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
