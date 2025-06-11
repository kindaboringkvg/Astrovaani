// const corsHeaders = {
//   "Access-Control-Allow-Origin": "*",
//   "Access-Control-Allow-Methods": "POST, OPTIONS",
//   "Access-Control-Allow-Headers": "Content-Type, Authorization",
// }

// async function sendWhatsAppMessage(phoneNumber: string, orderDetails: any) {
//   const whatsappApiUrl = "https://graph.facebook.com/v17.0/YOUR_PHONE_NUMBER_ID/messages"
//   const accessToken = Deno.env.get("WHATSAPP_ACCESS_TOKEN")

//   const message = {
//     messaging_product: "whatsapp",
//     to: phoneNumber,
//     type: "template",
//     template: {
//       name: "order_confirmation",
//       language: {
//         code: "en"
//       },
//       components: [
//         {
//           type: "body",
//           parameters: [
//             {
//               type: "text",
//               text: orderDetails.orderId
//             },
//             {
//               type: "text",
//               text: "24-48 hours"
//             }
//           ]
//         }
//       ]
//     }
//   }

//   try {
//     const response = await fetch(whatsappApiUrl, {
//       method: "POST",
//       headers: {
//         "Authorization": `Bearer ${accessToken}`,
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(message),
//     })

//     if (!response.ok) {
//       throw new Error(`WhatsApp API error: ${response.statusText}`)
//     }

//     return await response.json()
//   } catch (error) {
//     console.error("Error sending WhatsApp message:", error)
//     throw error
//   }
// }

// Deno.serve(async (req) => {
//   if (req.method === "OPTIONS") {
//     return new Response(null, {
//       status: 204,
//       headers: corsHeaders,
//     })
//   }

//   try {
//     const { phoneNumber, orderDetails } = await req.json()
    
//     if (!phoneNumber || !orderDetails) {
//       throw new Error("Missing required parameters")
//     }

//     const result = await sendWhatsAppMessage(phoneNumber, orderDetails)

//     return new Response(
//       JSON.stringify({ success: true, result }),
//       {
//         headers: {
//           ...corsHeaders,
//           "Content-Type": "application/json",
//         },
//       }
//     )
//   } catch (error) {
//     return new Response(
//       JSON.stringify({ success: false, error: error.message }),
//       {
//         status: 400,
//         headers: {
//           ...corsHeaders,
//           "Content-Type": "application/json",
//         },
//       }
//     )
//   }
// })