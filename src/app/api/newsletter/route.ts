import { NextRequest, NextResponse } from 'next/server';

// In-memory storage for demo (replace with real database in production)
// For production, use: Prisma, Supabase, MongoDB, etc.
const subscribers: { email: string; date: string; ip: string }[] = [];

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email } = body;

    // Validate email
    if (!email || typeof email !== 'string') {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      );
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Check for duplicate
    const exists = subscribers.find(s => s.email.toLowerCase() === email.toLowerCase());
    if (exists) {
      return NextResponse.json(
        { error: 'Email already subscribed' },
        { status: 400 }
      );
    }

    // Get IP address
    const ip = request.headers.get('x-forwarded-for') || 
               request.headers.get('x-real-ip') || 
               'unknown';

    // Save subscriber
    const subscriber = {
      email: email.toLowerCase().trim(),
      date: new Date().toISOString(),
      ip: Array.isArray(ip) ? ip[0] : ip.split(',')[0],
    };

    subscribers.push(subscriber);

    // In production, you would:
    // 1. Save to database
    // 2. Send welcome email via Resend/SendGrid/Mailchimp
    // 3. Add to email marketing platform

    console.log('New subscriber:', subscriber.email);
    console.log('Total subscribers:', subscribers.length);

    return NextResponse.json({
      success: true,
      message: 'Successfully subscribed!',
      totalSubscribers: subscribers.length,
    });

  } catch (error) {
    console.error('Newsletter subscription error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({
    count: subscribers.length,
    // Don't expose emails in production!
  });
}
