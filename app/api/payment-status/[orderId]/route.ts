// app/api/payment-status/[orderId]/route.ts

import { NextRequest, NextResponse } from 'next/server';
import { razorpay } from '../../../../lib/razorpay';

export async function GET(
  request: NextRequest,
  { params }: { params: { orderId: string } }
) {
  try {
    const { orderId } = params;
    
    if (!orderId) {
      return NextResponse.json(
        { error: 'Order ID is required' },
        { status: 400 }
      );
    }

    // Fetch order details from Razorpay
    const order = await razorpay.orders.fetch(orderId);
    
    return NextResponse.json({
      orderId: order.id,
      amount: order.amount,
      currency: order.currency,
      status: order.status,
      createdAt: order.created_at,
      receipt: order.receipt,
    });
  } catch (error) {
    console.error('Error fetching order status:', error);
    return NextResponse.json(
      { error: 'Failed to fetch order status' },
      { status: 500 }
    );
  }
}