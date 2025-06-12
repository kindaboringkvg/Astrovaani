// app/api/google-sheets/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { appendToSheet } from '../../../lib/googleSheets';

interface GoogleSheetsRequest {
  userDetails: {
    name: string;
    email: string;
    phone: string;
    address?: string;
  };
  cartItems: Array<{
    id: string;
    name: string;
    price: number;
    quantity: number;
    type?: string;
    category?: string;
    description?: string;
  }>;
  totalAmount: number;
  paymentInfo?: {
    orderId: string;
    paymentId: string;
    status: string;
    verifiedAt: string;
  };
  orderType?: string;
  timestamp: string;
  source?: string; // To track where the data is coming from
}

export async function POST(request: NextRequest) {
  try {
    const body: GoogleSheetsRequest = await request.json();
    
    // Validate required fields
    if (!body.userDetails || !body.cartItems || !body.totalAmount) {
      return NextResponse.json(
        { 
          error: 'Missing required fields',
          required: ['userDetails', 'cartItems', 'totalAmount']
        },
        { status: 400 }
      );
    }

    // Validate user details
    if (!body.userDetails.name || !body.userDetails.email) {
      return NextResponse.json(
        { 
          error: 'Missing required user details',
          required: ['userDetails.name', 'userDetails.email']
        },
        { status: 400 }
      );
    }

    // Validate cart items
    if (!Array.isArray(body.cartItems) || body.cartItems.length === 0) {
      return NextResponse.json(
        { error: 'Cart items must be a non-empty array' },
        { status: 400 }
      );
    }

    // Validate each cart item
    for (const item of body.cartItems) {
      if (!item.name || typeof item.price !== 'number' || typeof item.quantity !== 'number') {
        return NextResponse.json(
          { 
            error: 'Invalid cart item structure',
            required: 'Each item must have name (string), price (number), and quantity (number)'
          },
          { status: 400 }
        );
      }
    }

    // Determine order type if not provided
    const orderType = body.orderType || determineOrderType(body.cartItems);

    // Prepare data for Google Sheets
    const sheetData = {
      userDetails: body.userDetails,
      cartItems: body.cartItems,
      totalAmount: body.totalAmount,
      paymentInfo: body.paymentInfo || {
        orderId: 'manual_entry',
        paymentId: 'manual_entry',
        status: 'pending',
        verifiedAt: new Date().toISOString(),
      },
      orderType,
      timestamp: body.timestamp || new Date().toISOString(),
      source: body.source || 'api',
    };

    // Save to Google Sheets
    await appendToSheet(sheetData);

    return NextResponse.json({
      message: 'Data saved to Google Sheets successfully',
      success: true,
      orderType,
      timestamp: sheetData.timestamp,
      itemCount: body.cartItems.length,
    });

  } catch (error) {
    console.error('Error saving to Google Sheets:', error);
    
    // Provide more specific error messages
    if (error instanceof Error) {
      if (error.message.includes('authentication')) {
        return NextResponse.json(
          { 
            error: 'Google Sheets authentication failed',
            details: 'Please check your Google Sheets credentials'
          },
          { status: 401 }
        );
      } else if (error.message.includes('not found')) {
        return NextResponse.json(
          { 
            error: 'Google Sheet not found',
            details: 'Please check your sheet ID and permissions'
          },
          { status: 404 }
        );
      } else if (error.message.includes('quota')) {
        return NextResponse.json(
          { 
            error: 'Google Sheets API quota exceeded',
            details: 'Please try again later'
          },
          { status: 429 }
        );
      }
    }

    return NextResponse.json(
      { 
        error: 'Failed to save data to Google Sheets',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}

// GET endpoint to test the Google Sheets connection
export async function GET(request: NextRequest) {
  try {
    // You can add a simple test to verify Google Sheets connection
    return NextResponse.json({
      message: 'Google Sheets API endpoint is active',
      status: 'healthy',
      timestamp: new Date().toISOString(),
      endpoints: {
        POST: 'Save data to Google Sheets',
        GET: 'Health check'
      }
    });
  } catch (error) {
    return NextResponse.json(
      { 
        error: 'Google Sheets API endpoint error',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}

// Helper function to determine order type (same as in verify-payment)
function determineOrderType(cartItems: any[]): string {
  if (!cartItems || cartItems.length === 0) return 'unknown';
  
  const hasServices = cartItems.some(item => 
    item.type === 'service' || 
    item.category === 'service' ||
    item.name?.toLowerCase().includes('consultation') ||
    item.name?.toLowerCase().includes('reading')
  );
  
  const hasCrystals = cartItems.some(item => 
    item.type === 'crystal' || 
    item.category === 'crystal' ||
    item.name?.toLowerCase().includes('crystal') ||
    item.name?.toLowerCase().includes('stone')
  );
  
  if (hasServices && hasCrystals) return 'mixed';
  if (hasServices) return 'service';
  if (hasCrystals) return 'crystal';
  return 'product';
}