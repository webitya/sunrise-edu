import Razorpay from "razorpay"

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
})

export async function POST(request) {
  try {
    const { amount, currency, receipt } = await request.json()

    // Validate required fields
    if (!amount || !currency) {
      return Response.json({ error: "Missing required fields" }, { status: 400 })
    }

    // Create order
    const order = await razorpay.orders.create({
      amount: Number.parseInt(amount),
      currency: currency,
      receipt: receipt || `receipt_${Date.now()}`,
      payment_capture: 1,
    })

    return Response.json(order, { status: 200 })
  } catch (error) {
    console.error("Error creating Razorpay order:", error)
    return Response.json({ error: "Failed to create order" }, { status: 500 })
  }
}
