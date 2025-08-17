import Link from "next/link"

export default function HeroSection() {
  return (
    <section style={{ background: "linear-gradient(135deg, #e5f3ff 0%, #ffffff 100%)", padding: "80px 0" }}>
      <div className="container">
        <div style={{ display: "flex", alignItems: "center", gap: "60px", flexWrap: "wrap" }}>
          <div style={{ flex: "1", minWidth: "300px" }}>
            <h1
              style={{
                fontSize: "48px",
                fontWeight: "700",
                color: "#1f2937",
                marginBottom: "20px",
                lineHeight: "1.2",
              }}
            >
              Your Gateway to <span style={{ color: "#3b82f6" }}>Quality Education</span>
            </h1>
            <p
              style={{
                fontSize: "20px",
                color: "#6b7280",
                marginBottom: "30px",
                lineHeight: "1.6",
              }}
            >
              Leading education consultancy for college admissions across Jharkhand, Bengal, and UP. Get expert guidance
              for BSC, MSC, BCA, BBA, Nursing, B.ED, and D.El.Ed courses.
            </p>
            <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
              <Link href="/courses">
                <button className="btn-primary" style={{ fontSize: "18px", padding: "15px 30px" }}>
                  Explore Courses
                </button>
              </Link>
              <Link href="/contact">
                <button className="btn-secondary" style={{ fontSize: "18px", padding: "15px 30px" }}>
                  Get Consultation
                </button>
              </Link>
            </div>
            <div style={{ marginTop: "40px", display: "flex", gap: "30px", flexWrap: "wrap" }}>
              <div>
                <h3 style={{ fontSize: "24px", fontWeight: "600", color: "#3b82f6", margin: 0 }}>500+</h3>
                <p style={{ color: "#6b7280", margin: 0 }}>Students Placed</p>
              </div>
              <div>
                <h3 style={{ fontSize: "24px", fontWeight: "600", color: "#3b82f6", margin: 0 }}>50+</h3>
                <p style={{ color: "#6b7280", margin: 0 }}>Partner Colleges</p>
              </div>
              <div>
                <h3 style={{ fontSize: "24px", fontWeight: "600", color: "#3b82f6", margin: 0 }}>95%</h3>
                <p style={{ color: "#6b7280", margin: 0 }}>Success Rate</p>
              </div>
            </div>
          </div>
          <div style={{ flex: "1", minWidth: "300px", textAlign: "center" }}>
            <img
              src="/placeholder.svg?height=400&width=500&text=Students+Learning"
              alt="Students in classroom"
              style={{ maxWidth: "100%", height: "auto", borderRadius: "12px" }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
