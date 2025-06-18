import { google } from "googleapis"

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const auth = new google.auth.JWT({
      email: process.env.GOOGLE_CLIENT_EMAIL,
      key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    })

    const sheets = google.sheets({ version: "v4", auth })

    const sheetId = process.env.GOOGLE_SHEET_ID!
    const timestamp = new Date().toISOString()

    const {
      orderId,
      paymentId,
      paymentSignature,
      paymentStatus,
      completedAt,
      customer,
      items,
      pricing,
      orderType,
    } = body

    const itemSummary = items
      .map((item: any) => `${item.name} (₹${item.price}${item.questions ? `, Q: ${item.questions}` : ""})`)
      .join("; ")

    const row = [
      timestamp,
      orderId,
      paymentId,
      `${customer.firstName} ${customer.lastName}`,
      customer.email,
      customer.phone,
      customer.address,
      customer.city,
      customer.state,
      customer.pincode,
      customer.country,
      itemSummary,
      pricing.subtotal,
      pricing.discount,
      pricing.finalTotal,
      orderType.hasPhysicalItems ? "Yes" : "No",
      orderType.hasServices ? "Yes" : "No",
      paymentStatus,
      paymentSignature,
      completedAt,
    ]

    const result = await sheets.spreadsheets.values.append({
      spreadsheetId: sheetId,
      range: "PaidClients!A1",
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [row],
      },
    })

    console.log("✅ Order saved to Google Sheets:", result.status)
    return new Response(JSON.stringify({ success: true }), { status: 200 })
  } catch (error: any) {
    console.error("❌ Google Sheets Error:", error.message)
    return new Response(JSON.stringify({ success: false, error: error.message }), {
      status: 500,
    })
  }
}
