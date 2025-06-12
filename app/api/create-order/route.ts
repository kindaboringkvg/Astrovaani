// app/api/create-order/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { razorpay } from '../../../lib/razorpay';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { amount, currency = 'INR', receipt, userDetails } = body;

    // Validate required fields
    if (!amount || amount <= 0) {
      return NextResponse.json(
        { error: 'Invalid amount' },
        { status: 400 }
      );
    }

    const options = {
      amount: Math.round(amount * 100), // Convert to paise and ensure integer
      currency,
      receipt: receipt || `receipt_${Date.now()}`,
      payment_capture: 1,
      notes: {
        user_name: userDetails?.name || '',
        user_email: userDetails?.email || '',
        user_phone: userDetails?.phone || '',
      },
    };

    const order = await razorpay.orders.create(options);
    
    return NextResponse.json({
      orderId: order.id,
      amount: order.amount,
      currency: order.currency,
      receipt: order.receipt,
      status: 'created',
    });
  } catch (error) {
    console.error('Error creating Razorpay order:', error);
    return NextResponse.json(
      { error: 'Failed to create order', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}