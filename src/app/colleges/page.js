import Header from "../../components/Header"
import Footer from "../../components/Footer"
import CollegeGrid from "../../components/CollegeGrid"

export const metadata = {
  title: "Partner Colleges - The Sunrise Education | Top Universities in Jharkhand, Bengal, UP",
  description:
    "Explore our partner colleges and universities across Jharkhand, Bengal, and UP. Get detailed information about facilities, courses, and admission processes.",
  keywords: "colleges, universities, Jharkhand, Bengal, UP, admission, partner institutions",
}

export default function CollegesPage() {
  return (
    <div>
      <Header />
      <main>
        {/* Hero Section */}
        <section style={{ background: "linear-gradient(135deg, #e5f3ff 0%, #ffffff 100%)", padding: "60px 0" }}>
          <div className="container">
            <div style={{ textAlign: "center", maxWidth: "800px", margin: "0 auto" }}>
              <h1 style={{ fontSize: "42px", fontWeight: "700", color: "#1f2937", marginBottom: "20px" }}>
                Our Partner Colleges
              </h1>
              <p style={{ fontSize: "18px", color: "#6b7280", lineHeight: "1.6" }}>
                We have partnered with top-rated universities and colleges across Jharkhand, Bengal, and UP to provide
                you with the best educational opportunities. Each institution is carefully selected for its academic
                excellence and industry recognition.
              </p>
            </div>
          </div>
        </section>

        {/* Colleges Section */}
        <section style={{ padding: "80px 0", backgroundColor: "#ffffff" }}>
          <div className="container">
            <CollegeGrid />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
