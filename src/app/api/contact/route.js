import nodemailer from "nodemailer"

export async function POST(request) {
  try {
    const { name, email, phone, course, college, message } = await request.json()

    // Validate required fields
    if (!name || !email || !phone) {
      return Response.json({ error: "Missing required fields" }, { status: 400 })
    }

    // Create transporter using Gmail SMTP
    const transporter = nodemailer.createTransporter({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER || "thesunriseedu.in@gmail.com",
        pass: process.env.EMAIL_APP_PASSWORD, // App password from Gmail
      },
    })

    // Email to admin
    const adminMailOptions = {
      from: process.env.EMAIL_USER || "thesunriseedu.in@gmail.com",
      to: "thesunriseedu.in@gmail.com",
      subject: `New Contact Form Submission - ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e5f3ff; border-radius: 10px;">
          <div style="text-align: center; margin-bottom: 30px;">
            <h1 style="color: #3b82f6; margin: 0;">The Sunrise Education</h1>
            <p style="color: #6b7280; margin: 5px 0;">New Contact Form Submission</p>
          </div>
          
          <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
            <h2 style="color: #1f2937; margin-top: 0;">Contact Details</h2>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; color: #6b7280; font-weight: 500;">Name:</td>
                <td style="padding: 8px 0; color: #1f2937; font-weight: 600;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #6b7280; font-weight: 500;">Email:</td>
                <td style="padding: 8px 0; color: #3b82f6; font-weight: 600;">${email}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #6b7280; font-weight: 500;">Phone:</td>
                <td style="padding: 8px 0; color: #1f2937; font-weight: 600;">${phone}</td>
              </tr>
              ${
                course
                  ? `
              <tr>
                <td style="padding: 8px 0; color: #6b7280; font-weight: 500;">Interested Course:</td>
                <td style="padding: 8px 0; color: #1f2937; font-weight: 600;">${course}</td>
              </tr>
              `
                  : ""
              }
              ${
                college
                  ? `
              <tr>
                <td style="padding: 8px 0; color: #6b7280; font-weight: 500;">Preferred College:</td>
                <td style="padding: 8px 0; color: #1f2937; font-weight: 600;">${college}</td>
              </tr>
              `
                  : ""
              }
            </table>
          </div>
          
          ${
            message
              ? `
          <div style="background-color: #e5f3ff; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
            <h3 style="color: #1f2937; margin-top: 0;">Message</h3>
            <p style="color: #1f2937; line-height: 1.6; margin: 0;">${message}</p>
          </div>
          `
              : ""
          }
          
          <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5f3ff;">
            <p style="color: #6b7280; font-size: 14px; margin: 0;">
              This email was sent from the contact form on thesunriseedu.in
            </p>
          </div>
        </div>
      `,
    }

    // Confirmation email to user
    const userMailOptions = {
      from: process.env.EMAIL_USER || "thesunriseedu.in@gmail.com",
      to: email,
      subject: "Thank you for contacting The Sunrise Education",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e5f3ff; border-radius: 10px;">
          <div style="text-align: center; margin-bottom: 30px;">
            <h1 style="color: #3b82f6; margin: 0;">The Sunrise Education</h1>
            <p style="color: #6b7280; margin: 5px 0;">Your Gateway to Quality Education</p>
          </div>
          
          <div style="background-color: #dcfce7; padding: 20px; border-radius: 8px; margin-bottom: 20px; text-align: center;">
            <h2 style="color: #166534; margin: 0 0 10px 0;">Thank You, ${name}!</h2>
            <p style="color: #166534; margin: 0;">We have received your inquiry and will get back to you within 24 hours.</p>
          </div>
          
          <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
            <h3 style="color: #1f2937; margin-top: 0;">What happens next?</h3>
            <ul style="color: #6b7280; line-height: 1.6; padding-left: 20px;">
              <li>Our education counselor will review your inquiry</li>
              <li>We'll prepare personalized course and college recommendations</li>
              <li>You'll receive a detailed response within 24 hours</li>
              <li>We'll schedule a consultation call if needed</li>
            </ul>
          </div>
          
          <div style="background-color: #e5f3ff; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
            <h3 style="color: #1f2937; margin-top: 0;">Need immediate assistance?</h3>
            <p style="color: #6b7280; margin-bottom: 15px;">Contact us directly:</p>
            <p style="color: #3b82f6; font-weight: 600; margin: 5px 0;">📧 thesunriseedu.in@gmail.com</p>
            <p style="color: #3b82f6; font-weight: 600; margin: 5px 0;">📞 +91-9876543220</p>
            <p style="color: #3b82f6; font-weight: 600; margin: 5px 0;">💬 WhatsApp: +91-9876543220</p>
          </div>
          
          <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5f3ff;">
            <p style="color: #6b7280; font-size: 14px; margin: 0;">
              Best regards,<br>
              The Sunrise Education Team<br>
              <a href="https://thesunriseedu.in" style="color: #3b82f6; text-decoration: none;">thesunriseedu.in</a>
            </p>
          </div>
        </div>
      `,
    }

    // Send emails
    await transporter.sendMail(adminMailOptions)
    await transporter.sendMail(userMailOptions)

    return Response.json({ message: "Email sent successfully" }, { status: 200 })
  } catch (error) {
    console.error("Error sending email:", error)
    return Response.json({ error: "Failed to send email" }, { status: 500 })
  }
}
