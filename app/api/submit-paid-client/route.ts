import { google } from "googleapis"

export async function POST(req: Request) {
  try {
    const {
      firstName,
      lastName,
      address,
      city,
      state,
      pinCode,
      country,
      email,
      phone,
    } = await req.json()

    const auth = new google.auth.JWT({
        email: process.env.GOOGLE_CLIENT_EMAIL,
        key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
      scopes: [
        "https://www.googleapis.com/auth/spreadsheets",
        "https://www.googleapis.com/auth/drive",
        "https://www.googleapis.com/auth/drive.file"
      
      ],
    })

    const sheets = google.sheets({ version: "v4", auth })

    const timestamp = new Date().toISOString()

    const values = [
      [
        timestamp,
        firstName || "",
        lastName || "",
        address || "",
        city || "",
        state || "",
        pinCode || "",
        country || "",
        email || "",
        phone || "",
      ],
    ]

    const result = await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEETS_ID!,
      range: "PaidClients!A1",
      valueInputOption: "USER_ENTERED",
      requestBody: { values },
    })

    console.log("✅ Appended to PaidClients:", result.data)

    return new Response(JSON.stringify({ success: true }), { status: 200 })
  } catch (error: any) {
    console.error("❌ Error in /api/submit-paid-client:", error.message)
    return new Response(
      JSON.stringify({ success: false, error: error.message }),
      { status: 500 }
    )
  }
}
