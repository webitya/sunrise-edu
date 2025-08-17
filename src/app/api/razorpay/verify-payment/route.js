import crypto from "crypto"
import nodemailer from "nodemailer"

export async function POST(request) {
  try {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature, userDetails } = await request.json()

    // Validate required fields
    if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature) {
      return Response.json({ error: "Missing required fields" }, { status: 400 })
    }

    // Create signature for verification
    const body = razorpay_order_id + "|" + razorpay_payment_id
    const expectedSignature = crypto
      .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
      .update(body.toString())
      .digest("hex")

    // Verify signature
    const isAuthentic = expectedSignature === razorpay_signature

    if (isAuthentic) {
      // Payment is verified
      // Here you can save payment details to database, send confirmation emails, etc.

      try {
        const transporter = nodemailer.createTransport({
          service: "gmail",
          auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_APP_PASSWORD,
          },
        })

        const paymentDate = new Date().toLocaleDateString("en-IN")
        const paymentTime = new Date().toLocaleTimeString("en-IN")

        // Send email to user
        await transporter.sendMail({
          from: process.env.EMAIL_USER,
          to: userDetails?.email || "customer@example.com",
          subject: "Payment Successful - The Sunrise Education",
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
              <h2 style="color: #3b82f6;">Payment Successful!</h2>
              <p>Dear ${userDetails?.name || "Student"},</p>
              <p>Your payment has been successfully processed. Here are the details:</p>
              
              <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
                <h3 style="margin-top: 0;">Payment Details</h3>
                <p><strong>Payment ID:</strong> ${razorpay_payment_id}</p>
                <p><strong>Order ID:</strong> ${razorpay_order_id}</p>
                <p><strong>Amount:</strong> ₹${userDetails?.amount || "N/A"}</p>
                <p><strong>Date:</strong> ${paymentDate}</p>
                <p><strong>Time:</strong> ${paymentTime}</p>
              </div>
              
              <p>Thank you for choosing The Sunrise Education. Your payment receipt is available in your transaction success page.</p>
              
              <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e2e8f0;">
                <p style="color: #64748b; font-size: 14px;">
                  Best regards,<br>
                  The Sunrise Education Team<br>
                  Email: thesunriseedu.in@gmail.com<br>
                  Website: thesunriseedu.in
                </p>
              </div>
            </div>
          `,
        })
      } catch (emailError) {
        console.error("Error sending email:", emailError)
        // Don't fail the payment verification if email fails
      }

      return Response.json(
        {
          success: true,
          message: "Payment verified successfully",
          paymentId: razorpay_payment_id,
          orderId: razorpay_order_id,
        },
        { status: 200 },
      )
    } else {
      return Response.json({ error: "Invalid payment signature" }, { status: 400 })
    }
  } catch (error) {
    console.error("Error verifying payment:", error)
    return Response.json({ error: "Payment verification failed" }, { status: 500 })
  }
}
