// app/api/verify-payment/route.ts
import { NextRequest, NextResponse } from 'next/server'
import crypto from 'crypto'

export async function POST(request: NextRequest) {
  try {
    const {
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature,
    } = await request.json()

    // Create expected signature
    const body = razorpay_order_id + '|' + razorpay_payment_id
    const expectedSignature = crypto
      .createHmac('sha256', process.env.RAZORPAY_KEY_SECRET!)
      .update(body.toString())
      .digest('hex')

    // Verify signature
    const isAuthentic = expectedSignature === razorpay_signature

    if (isAuthentic) {
      return NextResponse.json({ verified: true })
    } else {
      return NextResponse.json(
        { error: 'Invalid signature' },
        { status: 400 }
      )
    }
  } catch (error) {
    console.error('Error verifying payment:', error)
    return NextResponse.json(
      { error: 'Payment verification failed' },
      { status: 500 }
    )
  }
}