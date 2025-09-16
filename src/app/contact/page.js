import Header from "../../components/Header"
import Footer from "../../components/Footer"
import ContactForm from "../../components/ContactForm"
import ContactInfo from "../../components/ContactInfo"

export const metadata = {
  title: "Contact Us - The Sunrise Education | Get Expert Admission Guidance",
  description:
    "Contact The Sunrise Education for expert guidance on college admissions, course selection, and scholarship opportunities. Email: thesunriseedu.in@gmail.com",
  keywords: "contact, admission guidance, education consultant, college admission help, scholarship assistance",
}

export default function ContactPage() {
  return (
    <div>
      <Header />
      <main>
        {/* Hero Section */}
        <section style={{ background: "linear-gradient(135deg, #e5f3ff 0%, #ffffff 100%)", padding: "60px 0" }}>
          <div className="container">
            <div style={{ textAlign: "center", maxWidth: "800px", margin: "0 auto" }}>
              <h1 style={{ fontSize: "42px", fontWeight: "700", color: "#1f2937", marginBottom: "20px" }}>
                Contact Us
              </h1>
              <p style={{ fontSize: "18px", color: "#6b7280", lineHeight: "1.6" }}>
                Ready to start your educational journey? Get in touch with our expert counselors for personalized
                guidance on course selection, college admissions, and scholarship opportunities.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section style={{ padding: "80px 0", backgroundColor: "#ffffff" }}>
          <div className="container">
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))", gap: "60px" }}>
              <ContactForm />
              <ContactInfo />
            </div>
          </div>
        </section>

        {/* Map Section */}
        {/* <section style={{ padding: "60px 0", backgroundColor: "#f8fafc" }}>
          <div className="container">
            <div style={{ textAlign: "center", marginBottom: "40px" }}>
              <h2 style={{ fontSize: "32px", fontWeight: "700", color: "#1f2937", marginBottom: "15px" }}>
                Visit Our Office
              </h2>
              <p style={{ fontSize: "16px", color: "#6b7280" }}>Schedule an appointment for in-person consultation</p>
            </div>
            <div
              style={{
                backgroundColor: "#e5f3ff",
                height: "300px",
                borderRadius: "12px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                border: "2px solid #3b82f6",
              }}
            >
              <p style={{ color: "#3b82f6", fontSize: "18px", fontWeight: "500" }}>Interactive Map Coming Soon</p>
            </div>
          </div>
        </section> */}
      </main>
      <Footer />
    </div>
  )
}
