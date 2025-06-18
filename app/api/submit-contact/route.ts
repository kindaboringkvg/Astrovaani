import { google } from "googleapis"

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { name, email, subject, message } = body

    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
      },
      scopes: [
        "https://www.googleapis.com/auth/spreadsheets",
        "https://www.googleapis.com/auth/drive",
        "https://www.googleapis.com/auth/drive.file"
      
      ],
    })

    const sheets = google.sheets({ version: "v4", auth })
    const sheetId = process.env.GOOGLE_SHEET_ID

    if (!sheetId) {
      return new Response("Sheet ID is not defined", { status: 500 })
    }

    const result = await sheets.spreadsheets.values.append({
      spreadsheetId: sheetId,
      range: "ContactUs!A2", // make sure Sheet1 exists
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [[new Date().toISOString(), name, email, subject, message]],
      },
    })

    console.log("✅ Sheet Append Result:", result.status)

    return new Response(JSON.stringify({ success: true }), { status: 200 })
  } catch (error: any) {
    console.error("❌ Error in /api/submit-contact:", error.message)
    return new Response(
      JSON.stringify({ success: false, error: error.message }),
      { status: 500 }
    )
  }
}
