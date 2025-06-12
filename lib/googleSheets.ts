// lib/googleSheets.ts
import { google } from 'googleapis';

interface OrderData {
  userDetails: {
    name?: string;
    email?: string;
    phone?: string;
    address?: string;
    birthDate?: string;
    birthTime?: string;
    birthPlace?: string;
  };
  cartItems: any[];
  totalAmount: number;
  paymentInfo: {
    orderId: string;
    paymentId: string;
    status: string;
    verifiedAt: string;
  };
  orderType: string;
  timestamp: string;
}

const auth = new google.auth.GoogleAuth({
  credentials: {
    client_email: process.env.GOOGLE_CLIENT_EMAIL,
    private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
  },
  scopes: ['https://www.googleapis.com/auth/spreadsheets'],
});

const sheets = google.sheets({ version: 'v4', auth });

export async function appendToSheet(data: OrderData) {
  try {
    const spreadsheetId = process.env.GOOGLE_SHEETS_ID;
    
    if (!spreadsheetId) {
      throw new Error('Google Sheets ID not configured');
    }

    const range = 'Orders!A:P'; // Extended range for more columns

    // Format cart items for display
    const cartItemsFormatted = data.cartItems.map(item => ({
      name: item.name || 'Unknown Item',
      quantity: item.quantity || 1,
      price: item.price || 0,
      type: item.type || item.category || 'unknown'
    }));

    // Prepare row data
    const rowData = [
      data.timestamp || new Date().toISOString(),
      data.userDetails.name || 'N/A',
      data.userDetails.email || 'N/A',
      data.userDetails.phone || 'N/A',
      data.userDetails.address || 'N/A',
      data.userDetails.birthDate || 'N/A',
      data.userDetails.birthTime || 'N/A',
      data.userDetails.birthPlace || 'N/A',
      JSON.stringify(cartItemsFormatted), // Store formatted cart items
      data.totalAmount,
      data.paymentInfo.orderId,
      data.paymentInfo.paymentId,
      data.paymentInfo.status,
      data.paymentInfo.verifiedAt,
      data.orderType,
      cartItemsFormatted.length, // Number of items
    ];

    const request = {
      spreadsheetId,
      range,
      valueInputOption: 'RAW',
      resource: {
        values: [rowData],
      },
    };

    const response = await sheets.spreadsheets.values.append(request);
    console.log('Data appended to Google Sheets successfully');
    return response.data;
  } catch (error) {
    console.error('Error appending to Google Sheets:', error);
    throw error;
  }
}

export async function createSheetHeaders() {
  try {
    const spreadsheetId = process.env.GOOGLE_SHEETS_ID;
    
    if (!spreadsheetId) {
      throw new Error('Google Sheets ID not configured');
    }

    const range = 'Orders!A1:P1';

    const headers = [
      'Timestamp',
      'Customer Name',
      'Email',
      'Phone',
      'Address',
      'Birth Date',
      'Birth Time',
      'Birth Place',
      'Cart Items (JSON)',
      'Total Amount (₹)',
      'Razorpay Order ID',
      'Razorpay Payment ID',
      'Payment Status',
      'Verified At',
      'Order Type',
      'Item Count',
    ];

    const request = {
      spreadsheetId,
      range,
      valueInputOption: 'RAW',
      resource: {
        values: [headers],
      },
    };

    await sheets.spreadsheets.values.update(request);
    console.log('Headers created in Google Sheets');
    return true;
  } catch (error) {
    console.error('Error creating headers:', error);
    throw error;
  }
}

export async function getOrderHistory(limit: number = 50) {
  try {
    const spreadsheetId = process.env.GOOGLE_SHEETS_ID;
    
    if (!spreadsheetId) {
      throw new Error('Google Sheets ID not configured');
    }

    const range = `Orders!A2:P${limit + 1}`; // Skip header row

    const response = await sheets.spreadsheets.values.get({
      spreadsheetId,
      range,
    });

    const rows = response.data.values || [];
    
    return rows.map((row, index) => ({
      id: index + 1,
      timestamp: row[0] || '',
      customerName: row[1] || '',
      email: row[2] || '',
      phone: row[3] || '',
      address: row[4] || '',
      birthDate: row[5] || '',
      birthTime: row[6] || '',
      birthPlace: row[7] || '',
      cartItems: row[8] ? JSON.parse(row[8]) : [],
      totalAmount: parseFloat(row[9]) || 0,
      orderId: row[10] || '',
      paymentId: row[11] || '',
      paymentStatus: row[12] || '',
      verifiedAt: row[13] || '',
      orderType: row[14] || '',
      itemCount: parseInt(row[15]) || 0,
    }));
  } catch (error) {
    console.error('Error fetching order history:', error);
    throw error;
  }
}

// app/api/google-sheets/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { appendToSheet, createSheetHeaders, getOrderHistory } from '../../../lib/googleSheets';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { action, data } = body;

    switch (action) {
      case 'append':
        await appendToSheet(data);
        return NextResponse.json({ message: 'Data saved to Google Sheets successfully' });
      
      case 'createHeaders':
        await createSheetHeaders();
        return NextResponse.json({ message: 'Headers created successfully' });
      
      default:
        return NextResponse.json({ error: 'Invalid action' }, { status: 400 });
    }
  } catch (error) {
    console.error('Google Sheets API error:', error);
    return NextResponse.json(
      { error: 'Failed to process request', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const limit = parseInt(searchParams.get('limit') || '50');
    
    const orders = await getOrderHistory(limit);
    
    return NextResponse.json({
      orders,
      count: orders.length,
    });
  } catch (error) {
    console.error('Error fetching orders:', error);
    return NextResponse.json(
      { error: 'Failed to fetch orders' },
      { status: 500 }
    );
  }
}