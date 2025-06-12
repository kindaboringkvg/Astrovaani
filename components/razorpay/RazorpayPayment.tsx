// components/RazorpayPayment.tsx
'use client';

import { useState } from 'react';
import Script from 'next/script';

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  type?: string;
  category?: string;
}

interface UserDetails {
  name: string;
  email: string;
  phone: string;
  address?: string;
  birthDate?: string;
  birthTime?: string;
  birthPlace?: string;
}

interface RazorpayPaymentProps {
  cartData: CartItem[];
  totalAmount: number;
  userDetails: UserDetails;
  onSuccess: (response: any) => void;
  onFailure: (error: string) => void;
}

declare global {
  interface Window {
    Razorpay: any;
  }
}

const RazorpayPayment: React.FC<RazorpayPaymentProps> = ({ 
  cartData, 
  totalAmount, 
  userDetails, 
  onSuccess, 
  onFailure 
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [scriptLoaded, setScriptLoaded] = useState(false);

  const handlePayment = async () => {
    if (!scriptLoaded) {
      onFailure('Payment system is still loading. Please try again.');
      return;
    }

    setIsLoading(true);

    try {
      // Create order on backend
      const orderResponse = await fetch('/api/create-order', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          amount: totalAmount,
          currency: 'INR',
          receipt: `receipt_${Date.now()}`,
          userDetails: userDetails,
        }),
      });

      const orderData = await orderResponse.json();

      if (!orderResponse.ok) {
        throw new Error(orderData.error || 'Failed to create order');
      }

      // Initialize Razorpay
      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
        amount: orderData.amount,
        currency: orderData.currency,
        name: 'Astrovaani',
        description: 'Astrology Services & Crystals',
        image: '/logo.png', // Add your logo path
        order_id: orderData.orderId,
        handler: async function (response: any) {
          try {
            setIsLoading(true);
            
            // Verify payment on backend
            const verifyResponse = await fetch('/api/verify-payment', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                razorpay_order_id: response.razorpay_order_id,
                razorpay_payment_id: response.razorpay_payment_id,
                razorpay_signature: response.razorpay_signature,
                orderData: {
                  cartItems: cartData,
                  userDetails: userDetails,
                  totalAmount: totalAmount,
                  timestamp: new Date().toISOString(),
                },
              }),
            });

            const verifyData = await verifyResponse.json();

            if (verifyData.verified) {
              onSuccess({
                ...response,
                ...verifyData,
              });
            } else {
              onFailure(verifyData.error || 'Payment verification failed');
            }
          } catch (error) {
            console.error('Payment verification error:', error);
            onFailure('Payment verification failed. Please contact support.');
          } finally {
            setIsLoading(false);
          }
        },
        prefill: {
          name: userDetails.name || '',
          email: userDetails.email || '',
          contact: userDetails.phone || '',
        },
        notes: {
          order_type: cartData.some(item => item.type === 'service') ? 'service' : 'crystal',
          item_count: cartData.length.toString(),
        },
        theme: {
          color: '#F37254',
        },
        modal: {
          ondismiss: function() {
            setIsLoading(false);
            console.log('Payment modal closed by user');
          }
        }
      };

      const razorpay = new window.Razorpay(options);
      razorpay.open();
    } catch (error) {
      console.error('Payment initiation error:', error);
      onFailure(error instanceof Error ? error.message : 'Failed to initiate payment');
      setIsLoading(false);
    }
  };

  return (
    <>
      <Script 
        src="https://checkout.razorpay.com/v1/checkout.js"
        strategy="lazyOnload"
        onLoad={() => setScriptLoaded(true)}
        onError={() => onFailure('Failed to load payment system')}
      />
      <button
        onClick={handlePayment}
        disabled={isLoading || !scriptLoaded}
        className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors ${
          isLoading || !scriptLoaded
            ? 'bg-gray-400 cursor-not-allowed text-gray-200'
            : 'bg-orange-500 hover:bg-orange-600 text-white'
        }`}
      >
        {isLoading ? (
          <div className="flex items-center justify-center">
            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
            Processing...
          </div>
        ) : !scriptLoaded ? (
          'Loading Payment System...'
        ) : (
          `Pay ₹${totalAmount}`
        )}
      </button>
    </>
  );
};

export default RazorpayPayment;

// components/ServiceCart.tsx
