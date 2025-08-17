import Link from "next/link"

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div
          style={{
            padding: "40px 0",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "30px",
          }}
        >
          <div>
            <h3 style={{ color: "#3b82f6", fontSize: "24px", fontWeight: "600", marginBottom: "15px" }}>
              The Sunrise Education
            </h3>
            <p style={{ color: "#6b7280", marginBottom: "15px" }}>
              Leading education consultancy for college admissions and courses across India.
            </p>
            <div style={{ color: "#6b7280" }}>
              <p>Email: thesunriseedu.in@gmail.com</p>
              <p>Domain: thesunriseedu.in</p>
            </div>
          </div>

          <div>
            <h4 style={{ color: "#1f2937", fontSize: "18px", fontWeight: "600", marginBottom: "15px" }}>Quick Links</h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <Link href="/courses" style={{ color: "#6b7280", textDecoration: "none" }}>
                Courses
              </Link>
              <Link href="/colleges" style={{ color: "#6b7280", textDecoration: "none" }}>
                Colleges
              </Link>
              <Link href="/team" style={{ color: "#6b7280", textDecoration: "none" }}>
                Our Team
              </Link>
              <Link href="/contact" style={{ color: "#6b7280", textDecoration: "none" }}>
                Contact Us
              </Link>
            </div>
          </div>

          <div>
            <h4 style={{ color: "#1f2937", fontSize: "18px", fontWeight: "600", marginBottom: "15px" }}>
              Popular Courses
            </h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <span style={{ color: "#6b7280" }}>BSC & MSC</span>
              <span style={{ color: "#6b7280" }}>BCA & BBA</span>
              <span style={{ color: "#6b7280" }}>Nursing ANM</span>
              <span style={{ color: "#6b7280" }}>B.ED & D.El.Ed</span>
            </div>
          </div>
        </div>

        <div style={{ borderTop: "1px solid #e5f3ff", paddingTop: "20px", textAlign: "center" }}>
          <p style={{ color: "#6b7280" }}>© 2024 The Sunrise Education. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
