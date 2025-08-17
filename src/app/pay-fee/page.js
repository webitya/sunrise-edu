import Header from "../../components/Header"
import Footer from "../../components/Footer"
import PaymentSection from "../../components/PaymentSection"

export const metadata = {
  title: "Pay Fee - Student Fee Payment | The Sunrise Education",
  description:
    "Pay your course fees securely online through The Sunrise Education. Quick and easy fee payment for all courses and programs.",
  keywords: "pay fee, course fee payment, student fee, online payment, education fee",
}

export default function PayFeePage() {
  return (
    <div>
      <Header />
      <main>
        {/* Hero Section */}
        <section style={{ background: "linear-gradient(135deg, #e5f3ff 0%, #ffffff 100%)", padding: "60px 0" }}>
          <div className="container">
            <div style={{ textAlign: "center", maxWidth: "800px", margin: "0 auto" }}>
              <h1 style={{ fontSize: "42px", fontWeight: "700", color: "#1f2937", marginBottom: "20px" }}>
                Pay Your Course Fee
              </h1>
              <p style={{ fontSize: "18px", color: "#6b7280", lineHeight: "1.6" }}>
                Secure and convenient online fee payment for all courses. Pay your semester fees, admission charges, and
                other educational expenses quickly and safely.
              </p>
            </div>
          </div>
        </section>

        {/* Payment Section */}
        <PaymentSection />

        {/* Fee Information Section */}
        <section style={{ padding: "80px 0", backgroundColor: "#ffffff" }}>
          <div className="container">
            <div style={{ textAlign: "center", marginBottom: "60px" }}>
              <h2 style={{ fontSize: "32px", fontWeight: "700", color: "#1f2937", marginBottom: "15px" }}>
                Fee Structure
              </h2>
              <p style={{ fontSize: "16px", color: "#6b7280", maxWidth: "600px", margin: "0 auto" }}>
                Transparent fee structure for all our courses and services
              </p>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "30px" }}>
              <div className="card" style={{ textAlign: "center" }}>
                <div style={{ fontSize: "40px", marginBottom: "15px" }}>🎓</div>
                <h3 style={{ fontSize: "20px", fontWeight: "600", color: "#1f2937", marginBottom: "10px" }}>
                  Admission Fee
                </h3>
                <p style={{ color: "#6b7280", lineHeight: "1.6" }}>
                  One-time admission charges for course enrollment and documentation
                </p>
              </div>

              <div className="card" style={{ textAlign: "center" }}>
                <div style={{ fontSize: "40px", marginBottom: "15px" }}>📚</div>
                <h3 style={{ fontSize: "20px", fontWeight: "600", color: "#1f2937", marginBottom: "10px" }}>
                  Semester Fee
                </h3>
                <p style={{ color: "#6b7280", lineHeight: "1.6" }}>
                  Regular semester fees for ongoing course studies and examinations
                </p>
              </div>

              <div className="card" style={{ textAlign: "center" }}>
                <div style={{ fontSize: "40px", marginBottom: "15px" }}>💰</div>
                <h3 style={{ fontSize: "20px", fontWeight: "600", color: "#1f2937", marginBottom: "10px" }}>
                  Scholarship
                </h3>
                <p style={{ color: "#6b7280", lineHeight: "1.6" }}>
                  Available scholarships can reduce your overall fee burden significantly
                </p>
              </div>

              <div className="card" style={{ textAlign: "center" }}>
                <div style={{ fontSize: "40px", marginBottom: "15px" }}>🏆</div>
                <h3 style={{ fontSize: "20px", fontWeight: "600", color: "#1f2937", marginBottom: "10px" }}>
                  Degree Fee
                </h3>
                <p style={{ color: "#6b7280", lineHeight: "1.6" }}>
                  Final degree processing and certificate issuance charges
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
