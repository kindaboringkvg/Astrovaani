// const corsHeaders = {
//   "Access-Control-Allow-Origin": "*",
//   "Access-Control-Allow-Methods": "POST, OPTIONS",
//   "Access-Control-Allow-Headers": "Content-Type, Authorization",
// }

// async function submitToGoogleSheets(orderData: any) {
//   const GOOGLE_SHEETS_URL = Deno.env.get("GOOGLE_SHEETS_WEBHOOK_URL")
  
//   if (!GOOGLE_SHEETS_URL) {
//     throw new Error("Google Sheets webhook URL not configured")
//   }

//   // Format data for Google Sheets
//   const formattedData = {
//     timestamp: orderData.timestamp,
//     orderId: orderData.orderId,
//     paymentId: orderData.paymentId || '',
//     paymentStatus: orderData.paymentStatus || 'pending',
    
//     // Customer Information
//     firstName: orderData.customer.firstName,
//     lastName: orderData.customer.lastName,
//     email: orderData.customer.email,
//     phone: orderData.customer.phone,
//     address: orderData.customer.address,
//     city: orderData.customer.city,
//     state: orderData.customer.state,
//     pincode: orderData.customer.pincode,
//     country: orderData.customer.country,
    
//     // Order Details
//     items: JSON.stringify(orderData.items),
//     itemCount: orderData.items.length,
//     subtotal: orderData.pricing.subtotal,
//     discount: orderData.pricing.discount,
//     finalTotal: orderData.pricing.finalTotal,
    
//     // Order Type
//     hasPhysicalItems: orderData.orderType.hasPhysicalItems,
//     hasServices: orderData.orderType.hasServices,
    
//     // Additional Info
//     crystalCount: orderData.items.filter((item: any) => item.type === 'crystal').length,
//     serviceCount: orderData.items.filter((item: any) => item.type === 'service').length,
//   }

//   try {
//     const response = await fetch(GOOGLE_SHEETS_URL, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(formattedData),
//     })

//     if (!response.ok) {
//       throw new Error(`Google Sheets API error: ${response.statusText}`)
//     }

//     return await response.json()
//   } catch (error) {
//     console.error("Error submitting to Google Sheets:", error)
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
//     const orderData = await req.json()
    
//     if (!orderData) {
//       throw new Error("Missing order data")
//     }

//     // Submit to Google Sheets
//     const result = await submitToGoogleSheets(orderData)

//     return new Response(
//       JSON.stringify({ 
//         success: true, 
//         message: "Order submitted successfully",
//         result 
//       }),
//       {
//         headers: {
//           ...corsHeaders,
//           "Content-Type": "application/json",
//         },
//       }
//     )
//   } catch (error) {
//     console.error("Submit order error:", error)
//     return new Response(
//       JSON.stringify({ 
//         success: false, 
//         error: error.message 
//       }),
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