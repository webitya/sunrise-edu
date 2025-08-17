import { notFound } from "next/navigation"
import Header from "../../../components/Header"
import Footer from "../../../components/Footer"
import { collegesData } from "../../../data/colleges/colleges"
import Link from "next/link"

export async function generateStaticParams() {
  return collegesData.map((college) => ({
    id: college.id.toString(),
  }))
}

export async function generateMetadata({ params }) {
  const college = collegesData.find((c) => c.id.toString() === params.id)

  if (!college) {
    return {
      title: "College Not Found - The Sunrise Education",
    }
  }

  return {
    title: `${college.name} - The Sunrise Education | College Details & Admission`,
    description: `Learn about ${college.name} in ${college.location}. ${college.description} Courses: ${college.courses.join(", ")}`,
    keywords: `${college.name}, ${college.location}, college admission, ${college.courses.join(", ")}`,
  }
}

export default function CollegeDetailsPage({ params }) {
  const college = collegesData.find((c) => c.id.toString() === params.id)

  if (!college) {
    notFound()
  }

  return (
    <div>
      <Header />
      <main>
        {/* Hero Section */}
        <section style={{ background: "linear-gradient(135deg, #e5f3ff 0%, #ffffff 100%)", padding: "60px 0" }}>
          <div className="container">
            <div style={{ display: "flex", alignItems: "center", gap: "40px", flexWrap: "wrap" }}>
              <div style={{ flex: "1", minWidth: "300px" }}>
                <h1 style={{ fontSize: "42px", fontWeight: "700", color: "#1f2937", marginBottom: "15px" }}>
                  {college.name}
                </h1>
                <p style={{ fontSize: "18px", color: "#6b7280", marginBottom: "10px" }}>📍 {college.location}</p>
                <p style={{ fontSize: "16px", color: "#6b7280", lineHeight: "1.6" }}>{college.description}</p>
              </div>
              <div style={{ flex: "1", minWidth: "300px" }}>
                <img
                  src={college.image || "/placeholder.svg"}
                  alt={college.name}
                  style={{ width: "100%", height: "300px", objectFit: "cover", borderRadius: "12px" }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* College Information */}
        <section style={{ padding: "80px 0", backgroundColor: "#ffffff" }}>
          <div className="container">
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "40px" }}>
              {/* Basic Information */}
              <div className="card">
                <h2 style={{ fontSize: "24px", fontWeight: "600", color: "#1f2937", marginBottom: "20px" }}>
                  College Information
                </h2>
                <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                  <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <span style={{ color: "#6b7280", fontWeight: "500" }}>Established:</span>
                    <span style={{ fontWeight: "600", color: "#1f2937" }}>{college.established}</span>
                  </div>
                  <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <span style={{ color: "#6b7280", fontWeight: "500" }}>Type:</span>
                    <span style={{ fontWeight: "600", color: "#1f2937" }}>{college.type}</span>
                  </div>
                  <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <span style={{ color: "#6b7280", fontWeight: "500" }}>Accreditation:</span>
                    <span style={{ fontWeight: "600", color: "#10b981" }}>{college.accreditation}</span>
                  </div>
                  <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <span style={{ color: "#6b7280", fontWeight: "500" }}>Location:</span>
                    <span style={{ fontWeight: "600", color: "#1f2937" }}>{college.location}</span>
                  </div>
                </div>
              </div>

              {/* Courses Offered */}
              <div className="card">
                <h2 style={{ fontSize: "24px", fontWeight: "600", color: "#1f2937", marginBottom: "20px" }}>
                  Courses Offered
                </h2>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
                  {college.courses.map((course, index) => (
                    <span
                      key={index}
                      style={{
                        backgroundColor: "#e5f3ff",
                        color: "#3b82f6",
                        padding: "8px 16px",
                        borderRadius: "25px",
                        fontSize: "14px",
                        fontWeight: "500",
                        border: "1px solid #3b82f6",
                      }}
                    >
                      {course}
                    </span>
                  ))}
                </div>
                <div style={{ marginTop: "20px" }}>
                  <Link href="/courses">
                    <button className="btn-secondary" style={{ width: "100%" }}>
                      View Course Details
                    </button>
                  </Link>
                </div>
              </div>

              {/* Facilities */}
              <div className="card">
                <h2 style={{ fontSize: "24px", fontWeight: "600", color: "#1f2937", marginBottom: "20px" }}>
                  Facilities
                </h2>
                <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                  {college.facilities.map((facility, index) => (
                    <li
                      key={index}
                      style={{
                        color: "#6b7280",
                        fontSize: "16px",
                        marginBottom: "10px",
                        paddingLeft: "20px",
                        position: "relative",
                      }}
                    >
                      <span
                        style={{
                          position: "absolute",
                          left: 0,
                          color: "#10b981",
                          fontWeight: "bold",
                        }}
                      >
                        ✓
                      </span>
                      {facility}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact Information */}
              <div className="card">
                <h2 style={{ fontSize: "24px", fontWeight: "600", color: "#1f2937", marginBottom: "20px" }}>
                  Contact Information
                </h2>
                <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                  <div>
                    <span style={{ color: "#6b7280", fontWeight: "500", display: "block" }}>Phone:</span>
                    <a
                      href={`tel:${college.contact.phone}`}
                      style={{ color: "#3b82f6", textDecoration: "none", fontWeight: "600" }}
                    >
                      {college.contact.phone}
                    </a>
                  </div>
                  <div>
                    <span style={{ color: "#6b7280", fontWeight: "500", display: "block" }}>Email:</span>
                    <a
                      href={`mailto:${college.contact.email}`}
                      style={{ color: "#3b82f6", textDecoration: "none", fontWeight: "600" }}
                    >
                      {college.contact.email}
                    </a>
                  </div>
                  <div>
                    <span style={{ color: "#6b7280", fontWeight: "500", display: "block" }}>Website:</span>
                    <a
                      href={`https://${college.contact.website}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: "#3b82f6", textDecoration: "none", fontWeight: "600" }}
                    >
                      {college.contact.website}
                    </a>
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
                Ready to Apply?
              </h2>
              <p style={{ fontSize: "18px", color: "#6b7280", marginBottom: "30px", lineHeight: "1.6" }}>
                Get expert guidance for admission to {college.name}. Our counselors will help you with the entire
                application process.
              </p>
              <div style={{ display: "flex", gap: "20px", justifyContent: "center", flexWrap: "wrap" }}>
                <Link href="/contact">
                  <button className="btn-primary" style={{ fontSize: "18px", padding: "15px 30px" }}>
                    Apply Now
                  </button>
                </Link>
                <Link href="/contact">
                  <button className="btn-secondary" style={{ fontSize: "18px", padding: "15px 30px" }}>
                    Get Consultation
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
