import { Resend } from 'resend';
import { getSupabaseClient } from '@/lib/supabase';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { name, email, subject, message, debug } = await request.json();

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
    let messageId: string | null = null;
    try {
      const recipients = debug ? ['admin@muslimrea.org', email] : ['admin@muslimrea.org'];
      const resp = await resend.emails.send({
        from: 'MREA Contact Form <onboarding@resend.dev>', // Update after domain verification
        to: recipients,
        subject: `New MREA Inquiry: ${subject}`,
        text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      });
      messageId = (resp as any)?.id || null;
      console.info('Contact email sent', { id: messageId, recipients });
    } catch (err: any) {
      console.error('Resend send error:', err);
      return NextResponse.json(
        { error: 'Failed to send email', details: String(err?.message || err) },
        { status: 500 },
      );
    }

    // If the sender requested debug info, return the Resend message id
    if (debug) {
      return NextResponse.json({ success: true, messageId });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Contact API Error:', error);
    return NextResponse.json({ error: 'Failed to process submission' }, { status: 500 });
  }
}
