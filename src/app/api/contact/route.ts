import { Resend } from 'resend';
import { getSupabaseClient } from '@/lib/supabase';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { name, email, subject, message } = await request.json();

    const supabase = getSupabaseClient();
    if (supabase) {
      // 1. Save to Supabase (Database) - Optional fallback
      await supabase
        .from('contact_submissions')
        .insert([{ name, email, subject, message }]);
    }

    const resendApiKey = process.env.RESEND_API_KEY;
    if (!resendApiKey) {
      return NextResponse.json(
        { error: 'Email delivery is not configured yet' },
        { status: 503 },
      );
    }

    const resend = new Resend(resendApiKey);

    // 2. Send Email Notification via Resend (Direct to your inbox)
    await resend.emails.send({
      from: 'MREA Contact Form <onboarding@resend.dev>', // You can update this after domain verification
      to: ['admin@muslimrea.org'],
      subject: `New MREA Inquiry: ${subject}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Contact API Error:', error);
    return NextResponse.json({ error: 'Failed to process submission' }, { status: 500 });
  }
}
