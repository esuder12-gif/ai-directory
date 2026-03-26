import { NextRequest, NextResponse } from 'next/server';

// Simple in-memory storage for clicks (in production, use a database)
// This is just for demonstration - use a real database in production
const clickStorage: any[] = [];

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const clickEvent = {
      ...body,
      timestamp: new Date().toISOString(),
      ip: request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'unknown',
      userAgent: request.headers.get('user-agent') || 'unknown',
      referer: request.headers.get('referer') || 'direct',
    };

    // Store the click event
    clickStorage.push(clickEvent);

    // In production, you would:
    // 1. Store in a database (PostgreSQL, MongoDB, etc.)
    // 2. Send to analytics service
    // 3. Trigger webhooks for real-time notifications

    // For now, just log it
    console.log('Affiliate Click Tracked:', {
      tool: clickEvent.toolName,
      category: clickEvent.category,
      type: clickEvent.clickType,
      timestamp: clickEvent.timestamp,
    });

    return NextResponse.json({
      success: true,
      message: 'Click tracked successfully',
      clickId: `click_${Date.now()}`,
    });
  } catch (error) {
    console.error('Error tracking click:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to track click' },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  // Return click statistics (for dashboard)
  const { searchParams } = new URL(request.url);
  const toolId = searchParams.get('toolId');

  let clicks = clickStorage;

  if (toolId) {
    clicks = clicks.filter(c => c.toolId === toolId);
  }

  // Calculate stats
  const stats = {
    total: clicks.length,
    byTool: clicks.reduce((acc: any, click: any) => {
      acc[click.toolId] = (acc[click.toolId] || 0) + 1;
      return acc;
    }, {}),
    byCategory: clicks.reduce((acc: any, click: any) => {
      acc[click.category] = (acc[click.category] || 0) + 1;
      return acc;
    }, {}),
    recentClicks: clicks.slice(-10).reverse(),
  };

  return NextResponse.json(stats);
}
