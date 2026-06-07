import { Resend } from 'resend';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    if (!email) {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 });
    }

    const resendApiKey = process.env.RESEND_API_KEY;
    if (!resendApiKey) {
      return NextResponse.json(
        { error: 'Email service is not configured' },
        { status: 503 },
      );
    }

    const resend = new Resend(resendApiKey);

    // Send notification to admin
    await resend.emails.send({
      from: 'MREA Newsletter <onboarding@resend.dev>',
      to: ['admin@muslimrea.org'],
      subject: `New Newsletter Subscription: ${email}`,
      text: `A new user has subscribed to the MREA newsletter.\n\nEmail: ${email}`,
    });

    // Optionally send a welcome email to the user here

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Newsletter API Error:', error);
    return NextResponse.json({ error: 'Failed to process subscription' }, { status: 500 });
  }
}
