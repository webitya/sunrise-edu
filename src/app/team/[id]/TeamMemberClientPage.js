"use client"

import { notFound } from "next/navigation"
import Header from "../../../components/Header"
import Footer from "../../../components/Footer"
import SocialLinks from "../../../components/SocialLinks"
import { teamData } from "../../../data/team/team"
import Link from "next/link"

export default function TeamMemberClientPage({ params }) {
  const member = teamData.find((m) => m.id.toString() === params.id)

  if (!member) {
    notFound()
  }

  return (
    <div>
      <Header />
      <main>
        {/* Hero Section */}
        <section style={{ background: "linear-gradient(135deg, #e5f3ff 0%, #ffffff 100%)", padding: "80px 0" }}>
          <div className="container">
            <div style={{ display: "flex", alignItems: "center", gap: "60px", flexWrap: "wrap" }}>
              <div style={{ flex: "1", minWidth: "300px", textAlign: "center" }}>
                <img
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  style={{
                    width: "250px",
                    height: "250px",
                    borderRadius: "50%",
                    objectFit: "cover",
                    border: "6px solid #ffffff",
                    boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                  }}
                />
              </div>
              <div style={{ flex: "1", minWidth: "300px" }}>
                <h1 style={{ fontSize: "42px", fontWeight: "700", color: "#1f2937", marginBottom: "10px" }}>
                  {member.name}
                </h1>
                <p style={{ fontSize: "20px", fontWeight: "500", color: "#3b82f6", marginBottom: "15px" }}>
                  {member.position}
                </p>
                <p style={{ fontSize: "18px", color: "#6b7280", marginBottom: "20px", lineHeight: "1.6" }}>
                  {member.specialization}
                </p>
                <p style={{ fontSize: "16px", color: "#6b7280", lineHeight: "1.6", marginBottom: "30px" }}>
                  {member.bio}
                </p>
                <SocialLinks social={member.social} />
              </div>
            </div>
          </div>
        </section>

        {/* Detailed Information */}
        <section style={{ padding: "80px 0", backgroundColor: "#ffffff" }}>
          <div className="container">
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "40px" }}>
              {/* Professional Background */}
              <div className="card">
                <h2 style={{ fontSize: "24px", fontWeight: "600", color: "#1f2937", marginBottom: "20px" }}>
                  Professional Background
                </h2>
                <p style={{ color: "#6b7280", lineHeight: "1.6", marginBottom: "20px" }}>
                  {member.name} brings extensive experience in the education sector, specializing in{" "}
                  {member.specialization.toLowerCase()}. With a deep understanding of the academic landscape across
                  Jharkhand, Bengal, and UP, {member.name.split(" ")[0]} has helped hundreds of students achieve their
                  educational goals.
                </p>
                <div
                  style={{
                    backgroundColor: "#f8fafc",
                    padding: "20px",
                    borderRadius: "8px",
                    border: "1px solid #e5f3ff",
                  }}
                >
                  <h3 style={{ fontSize: "18px", fontWeight: "600", color: "#1f2937", marginBottom: "10px" }}>
                    Key Expertise
                  </h3>
                  <ul style={{ color: "#6b7280", lineHeight: "1.6", paddingLeft: "20px" }}>
                    <li>College admission guidance and counseling</li>
                    <li>Course selection and career planning</li>
                    <li>Scholarship application assistance</li>
                    <li>University partnership development</li>
                    <li>Student success tracking and support</li>
                  </ul>
                </div>
              </div>

              {/* Contact Information */}
              <div className="card">
                <h2 style={{ fontSize: "24px", fontWeight: "600", color: "#1f2937", marginBottom: "20px" }}>
                  Get In Touch
                </h2>
                <p style={{ color: "#6b7280", lineHeight: "1.6", marginBottom: "25px" }}>
                  Connect with {member.name} directly for personalized guidance and consultation.
                </p>

                <div style={{ display: "flex", flexDirection: "column", gap: "15px", marginBottom: "25px" }}>
                  <a
                    href={`tel:${member.social.phone}`}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "15px",
                      padding: "15px",
                      backgroundColor: "#f8fafc",
                      borderRadius: "8px",
                      textDecoration: "none",
                      border: "1px solid #e5f3ff",
                      transition: "all 0.3s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.backgroundColor = "#e5f3ff"
                      e.target.style.borderColor = "#3b82f6"
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.backgroundColor = "#f8fafc"
                      e.target.style.borderColor = "#e5f3ff"
                    }}
                  >
                    <span style={{ fontSize: "20px" }}>📞</span>
                    <div>
                      <p style={{ fontWeight: "500", color: "#1f2937", margin: 0 }}>Phone</p>
                      <p style={{ color: "#3b82f6", margin: 0 }}>{member.social.phone}</p>
                    </div>
                  </a>

                  <a
                    href={`https://wa.me/${member.social.whatsapp.replace(/[^0-9]/g, "")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "15px",
                      padding: "15px",
                      backgroundColor: "#f8fafc",
                      borderRadius: "8px",
                      textDecoration: "none",
                      border: "1px solid #e5f3ff",
                      transition: "all 0.3s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.backgroundColor = "#e5f3ff"
                      e.target.style.borderColor = "#3b82f6"
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.backgroundColor = "#f8fafc"
                      e.target.style.borderColor = "#e5f3ff"
                    }}
                  >
                    <span style={{ fontSize: "20px" }}>💬</span>
                    <div>
                      <p style={{ fontWeight: "500", color: "#1f2937", margin: 0 }}>WhatsApp</p>
                      <p style={{ color: "#3b82f6", margin: 0 }}>Quick Response</p>
                    </div>
                  </a>
                </div>

                <div style={{ textAlign: "center" }}>
                  <SocialLinks social={member.social} />
                </div>
              </div>

              {/* Achievements */}
              <div className="card">
                <h2 style={{ fontSize: "24px", fontWeight: "600", color: "#1f2937", marginBottom: "20px" }}>
                  Achievements & Impact
                </h2>
                <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
                    <div
                      style={{
                        width: "50px",
                        height: "50px",
                        borderRadius: "50%",
                        backgroundColor: "#dcfce7",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "20px",
                      }}
                    >
                      🎓
                    </div>
                    <div>
                      <h3 style={{ fontSize: "18px", fontWeight: "600", color: "#1f2937", margin: 0 }}>
                        150+ Students Guided
                      </h3>
                      <p style={{ color: "#6b7280", margin: 0 }}>Successfully placed in top universities</p>
                    </div>
                  </div>

                  <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
                    <div
                      style={{
                        width: "50px",
                        height: "50px",
                        borderRadius: "50%",
                        backgroundColor: "#fef3c7",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "20px",
                      }}
                    >
                      💰
                    </div>
                    <div>
                      <h3 style={{ fontSize: "18px", fontWeight: "600", color: "#1f2937", margin: 0 }}>
                        ₹50L+ Scholarships
                      </h3>
                      <p style={{ color: "#6b7280", margin: 0 }}>Secured for students</p>
                    </div>
                  </div>

                  <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
                    <div
                      style={{
                        width: "50px",
                        height: "50px",
                        borderRadius: "50%",
                        backgroundColor: "#e5f3ff",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "20px",
                      }}
                    >
                      🏆
                    </div>
                    <div>
                      <h3 style={{ fontSize: "18px", fontWeight: "600", color: "#1f2937", margin: 0 }}>
                        98% Success Rate
                      </h3>
                      <p style={{ color: "#6b7280", margin: 0 }}>In college admissions</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section style={{ padding: "60px 0", backgroundColor: "#f8fafc" }}>
          <div className="container">
            <div style={{ textAlign: "center", maxWidth: "600px", margin: "0 auto" }}>
              <h2 style={{ fontSize: "32px", fontWeight: "700", color: "#1f2937", marginBottom: "15px" }}>
                Ready to Start Your Journey?
              </h2>
              <p style={{ fontSize: "18px", color: "#6b7280", marginBottom: "30px", lineHeight: "1.6" }}>
                Get personalized guidance from {member.name} and take the first step towards your educational goals.
              </p>
              <div style={{ display: "flex", gap: "20px", justifyContent: "center", flexWrap: "wrap" }}>
                <a
                  href={`https://wa.me/${member.social.whatsapp.replace(/[^0-9]/g, "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="btn-primary" style={{ fontSize: "18px", padding: "15px 30px" }}>
                    WhatsApp Now
                  </button>
                </a>
                <Link href="/contact">
                  <button className="btn-secondary" style={{ fontSize: "18px", padding: "15px 30px" }}>
                    Schedule Consultation
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
