import { NextResponse } from 'next/server';

// In-memory storage for demo (resets on each deployment)
// For production, use a real database or email service
const subscribers: string[] = [];

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    if (!email || !email.includes('@')) {
      return NextResponse.json({ error: 'Valid email required' }, { status: 400 });
    }

    if (subscribers.includes(email)) {
      return NextResponse.json({ message: 'Already subscribed!' });
    }

    subscribers.push(email);
    console.log('New subscriber:', email);

    return NextResponse.json({ message: 'Successfully subscribed!' });
  } catch (error) {
    console.error('Error subscribing:', error);
    return NextResponse.json({ error: 'Failed to subscribe' }, { status: 500 });
  }
}
