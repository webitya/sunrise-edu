export default function ContactInfo() {
  const contactMethods = [
    {
      icon: "📧",
      title: "Email Us",
      info: "thesunriseedu.in@gmail.com",
      description: "Send us an email anytime",
      action: "mailto:thesunriseedu.in@gmail.com",
    },
    {
      icon: "📞",
      title: "Call Us",
      info: "+91-9876543220",
      description: "Mon-Sat, 9:00 AM - 6:00 PM",
      action: "tel:+919876543220",
    },
    {
      icon: "💬",
      title: "WhatsApp",
      info: "+91-9876543220",
      description: "Quick responses via WhatsApp",
      action: "https://wa.me/919876543220",
    },
    {
      icon: "🌐",
      title: "Website",
      info: "thesunriseedu.in",
      description: "Visit our official website",
      action: "https://thesunriseedu.in",
    },
  ]

  return (
    <div>
      <h2 style={{ fontSize: "28px", fontWeight: "600", color: "#1f2937", marginBottom: "20px" }}>
        Contact Information
      </h2>
      <p style={{ color: "#6b7280", marginBottom: "30px", lineHeight: "1.6" }}>
        Reach out to us through any of the following methods. Our team is here to help you achieve your educational
        goals.
      </p>

      <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        {contactMethods.map((method, index) => (
          <a
            key={index}
            href={method.action}
            target={method.action.startsWith("http") ? "_blank" : "_self"}
            rel={method.action.startsWith("http") ? "noopener noreferrer" : ""}
            style={{ textDecoration: "none" }}
          >
            <div
              className="card"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "20px",
                padding: "20px",
                cursor: "pointer",
                transition: "all 0.3s ease",
              }}
            >
              <div style={{ fontSize: "32px" }}>{method.icon}</div>
              <div>
                <h3 style={{ fontSize: "18px", fontWeight: "600", color: "#1f2937", marginBottom: "5px" }}>
                  {method.title}
                </h3>
                <p style={{ fontSize: "16px", fontWeight: "500", color: "#3b82f6", marginBottom: "3px" }}>
                  {method.info}
                </p>
                <p style={{ fontSize: "14px", color: "#6b7280", margin: 0 }}>{method.description}</p>
              </div>
            </div>
          </a>
        ))}
      </div>

      {/* Office Hours */}
      <div className="card" style={{ marginTop: "30px" }}>
        <h3 style={{ fontSize: "20px", fontWeight: "600", color: "#1f2937", marginBottom: "15px" }}>Office Hours</h3>
        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <span style={{ color: "#6b7280" }}>Monday - Friday:</span>
            <span style={{ fontWeight: "500", color: "#1f2937" }}>9:00 AM - 6:00 PM</span>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <span style={{ color: "#6b7280" }}>Saturday:</span>
            <span style={{ fontWeight: "500", color: "#1f2937" }}>9:00 AM - 4:00 PM</span>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <span style={{ color: "#6b7280" }}>Sunday:</span>
            <span style={{ fontWeight: "500", color: "#1f2937" }}>Closed</span>
          </div>
        </div>
      </div>

      {/* Emergency Contact */}
      <div className="card" style={{ marginTop: "20px", backgroundColor: "#fef3c7", border: "1px solid #f59e0b" }}>
        <h3 style={{ fontSize: "18px", fontWeight: "600", color: "#92400e", marginBottom: "10px" }}>
          Emergency Contact
        </h3>
        <p style={{ color: "#92400e", fontSize: "14px", marginBottom: "8px" }}>
          For urgent admission deadlines or time-sensitive queries:
        </p>
        <p style={{ fontWeight: "600", color: "#92400e" }}>+91-9876543221 (24/7)</p>
      </div>
    </div>
  )
}
