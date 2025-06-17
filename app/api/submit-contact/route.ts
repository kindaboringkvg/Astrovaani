export async function POST(req: Request) {
  try {
    const body = await req.json()
    const scriptUrl = process.env.GOOGLE_SCRIPT_URL // 🔒 SAFE: not exposed to browser

    if (!scriptUrl) {
      console.error("❌ Google Script URL not defined")
      return new Response("Script URL not defined", { status: 500 })
    }

    const response = await fetch(scriptUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ type: "contact", ...body }),
    })

    const text = await response.text()
    console.log("✅ Google Script Response:", text)

    return new Response(JSON.stringify({ success: true }), { status: 200 })
  } catch (error: any) {
    console.error("❌ Error in /api/submit-contact:", error.message)
    return new Response(
      JSON.stringify({ success: false, error: error.message }),
      { status: 500 }
    )
  }
}
