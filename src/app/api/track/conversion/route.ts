import { NextRequest, NextResponse } from 'next/server';

// Simple in-memory storage for conversions
const conversionStorage: any[] = [];

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const conversionEvent = {
      ...body,
      conversionDate: new Date().toISOString(),
      id: `conv_${Date.now()}`,
    };

    // Store the conversion
    conversionStorage.push(conversionEvent);

    // In production:
    // 1. Store in database
    // 2. Send confirmation email
    // 3. Update dashboard in real-time
    // 4. Trigger celebration animation on frontend

    console.log('Conversion Tracked:', {
      tool: conversionEvent.toolName,
      commission: conversionEvent.commission,
      estimatedValue: conversionEvent.estimatedValue,
    });

    return NextResponse.json({
      success: true,
      message: 'Conversion tracked successfully',
      conversionId: conversionEvent.id,
    });
  } catch (error) {
    console.error('Error tracking conversion:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to track conversion' },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  // Return conversion statistics
  const { searchParams } = new URL(request.url);
  const toolId = searchParams.get('toolId');

  let conversions = conversionStorage;

  if (toolId) {
    conversions = conversions.filter(c => c.toolId === toolId);
  }

  // Calculate revenue
  const totalRevenue = conversions.reduce((sum, c) => sum + (c.estimatedValue || 0), 0);

  const stats = {
    total: conversions.length,
    totalRevenue,
    byTool: conversions.reduce((acc: any, conv: any) => {
      if (!acc[conv.toolId]) {
        acc[conv.toolId] = { count: 0, revenue: 0 };
      }
      acc[conv.toolId].count++;
      acc[conv.toolId].revenue += conv.estimatedValue || 0;
      return acc;
    }, {}),
    recentConversions: conversions.slice(-10).reverse(),
  };

  return NextResponse.json(stats);
}
