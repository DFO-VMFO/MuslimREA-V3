'use client';

import { useState } from 'react';
import { CheckCircle, AlertCircle } from 'lucide-react';

const theme = {
  navy: '#0B1A30',
  gold: '#D4AF37',
};

export default function NewsletterForm({ variant = 'stacked' }: { variant?: 'stacked' | 'row' }) {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;

    setStatus('submitting');
    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (!res.ok) throw new Error('Failed to subscribe');
      setStatus('success');
      setEmail('');
    } catch (err) {
      console.error('Newsletter error:', err);
      setStatus('error');
    }
  }

  if (status === 'success') {
    return (
      <div className="flex items-center gap-2 text-green-500 font-bold text-sm py-2">
        <CheckCircle className="w-4 h-4" />
        <span>Subscription successful!</span>
      </div>
    );
  }

  const isRow = variant === 'row';

  return (
    <form onSubmit={handleSubmit} className={isRow ? "flex flex-col sm:flex-row gap-3" : "space-y-2"}>
      <div className="relative flex-1">
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className={`w-full px-4 py-2.5 rounded-sm text-sm text-gray-900 focus:outline-none focus:ring-2 border ${
            status === 'error' ? 'border-red-500' : 'border-transparent'
          }`}
          style={{ outlineColor: theme.gold }}
          suppressHydrationWarning
        />
        {status === 'error' && (
          <div className="absolute -bottom-5 left-0 flex items-center gap-1 text-[10px] text-red-500 font-bold">
            <AlertCircle className="w-3 h-3" />
            <span>Try again later</span>
          </div>
        )}
      </div>
      <button
        type="submit"
        disabled={status === 'submitting'}
        className={`${isRow ? 'px-8' : 'w-full'} py-2.5 rounded-sm text-sm font-bold transition hover:opacity-90 disabled:opacity-50`}
        style={{ backgroundColor: isRow ? theme.navy : theme.gold, color: isRow ? 'white' : theme.navy }}
        suppressHydrationWarning
      >
        {status === 'submitting' ? 'Joining...' : 'Join Mailing List'}
      </button>
    </form>
  );
}
