// // app/api/verify-payment/route.ts
// import { NextRequest, NextResponse } from 'next/server';
// import crypto from 'crypto';
// import { appendToSheet } from '../../../lib/googleSheets';

// interface PaymentVerificationRequest {
//   razorpay_order_id: string;
//   razorpay_payment_id: string;
//   razorpay_signature: string;
//   orderData: {
//     cartItems: any[];
//     userDetails: any;
//     totalAmount: number;
//     timestamp: string;
//   };
// }

// export async function POST(request: NextRequest) {
//   try {
//     const body: PaymentVerificationRequest = await request.json();
//     const { 
//       razorpay_order_id, 
//       razorpay_payment_id, 
//       razorpay_signature,
//       orderData 
//     } = body;

//     // Validate required fields
//     if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature) {
//       return NextResponse.json(
//         { error: 'Missing required payment parameters' },
//         { status: 400 }
//       );
//     }

//     // Verify payment signature
//     const body_string = razorpay_order_id + "|" + razorpay_payment_id;
//     const expectedSignature = crypto
//       .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET!)
//       .update(body_string)
//       .digest("hex");

//     if (expectedSignature === razorpay_signature) {
//       // Payment verified successfully
//       try {
//         // Save to Google Sheets
//         await appendToSheet({
//           userDetails: orderData.userDetails,
//           cartItems: orderData.cartItems,
//           totalAmount: orderData.totalAmount,
//           paymentInfo: {
//             orderId: razorpay_order_id,
//             paymentId: razorpay_payment_id,
//             status: 'completed',
//             verifiedAt: new Date().toISOString(),
//           },
//           orderType: determineOrderType(orderData.cartItems),
//           timestamp: orderData.timestamp,
//         });

//         return NextResponse.json({ 
//           message: 'Payment verified successfully',
//           verified: true,
//           orderId: razorpay_order_id,
//           paymentId: razorpay_payment_id,
//         });
//       } catch (sheetsError) {
//         console.error('Error saving to Google Sheets:', sheetsError);
//         // Payment is verified but sheets save failed
//         return NextResponse.json({ 
//           message: 'Payment verified but data save failed',
//           verified: true,
//           warning: 'Please contact support with your payment ID',
//           orderId: razorpay_order_id,
//           paymentId: razorpay_payment_id,
//         });
//       }
//     } else {
//       console.error('Payment signature mismatch:', {
//         expected: expectedSignature,
//         received: razorpay_signature,
//       });
      
//       return NextResponse.json({ 
//         error: 'Payment verification failed',
//         verified: false 
//       }, { status: 400 });
//     }
//   } catch (error) {
//     console.error('Payment verification error:', error);
//     return NextResponse.json(
//       { error: 'Payment verification failed', details: error instanceof Error ? error.message : 'Unknown error' },
//       { status: 500 }
//     );
//   }
// }

// function determineOrderType(cartItems: any[]): string {
//   if (!cartItems || cartItems.length === 0) return 'unknown';
  
//   const hasServices = cartItems.some(item => 
//     item.type === 'service' || 
//     item.category === 'service' ||
//     item.name?.toLowerCase().includes('consultation') ||
//     item.name?.toLowerCase().includes('reading')
//   );
  
//   const hasCrystals = cartItems.some(item => 
//     item.type === 'crystal' || 
//     item.category === 'crystal' ||
//     item.name?.toLowerCase().includes('crystal') ||
//     item.name?.toLowerCase().includes('stone')
//   );
  
//   if (hasServices && hasCrystals) return 'mixed';
//   if (hasServices) return 'service';
//   if (hasCrystals) return 'crystal';
//   return 'product';
// }