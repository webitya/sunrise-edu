import Link from "next/link"
import { collegesData } from "../data/colleges/colleges"

export default function CollegeGrid() {
  return (
    <div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))", gap: "30px" }}>
        {collegesData.map((college) => (
          <div key={college.id} className="card">
            <img
              src={college.image || "/placeholder.svg"}
              alt={college.name}
              style={{
                width: "100%",
                height: "220px",
                objectFit: "cover",
                borderRadius: "8px",
                marginBottom: "20px",
              }}
            />

            <div style={{ marginBottom: "15px" }}>
              <h3 style={{ fontSize: "24px", fontWeight: "600", color: "#1f2937", marginBottom: "8px" }}>
                {college.name}
              </h3>
              <p style={{ color: "#6b7280", fontSize: "16px", marginBottom: "10px" }}>{college.location}</p>
              <p style={{ color: "#6b7280", lineHeight: "1.6", fontSize: "14px" }}>{college.description}</p>
            </div>

            {/* College Details */}
            <div style={{ marginBottom: "20px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px" }}>
                <span style={{ color: "#6b7280", fontWeight: "500" }}>Established:</span>
                <span style={{ fontWeight: "600", color: "#1f2937" }}>{college.established}</span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px" }}>
                <span style={{ color: "#6b7280", fontWeight: "500" }}>Type:</span>
                <span style={{ fontWeight: "600", color: "#1f2937" }}>{college.type}</span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px" }}>
                <span style={{ color: "#6b7280", fontWeight: "500" }}>Accreditation:</span>
                <span style={{ fontWeight: "600", color: "#10b981" }}>{college.accreditation}</span>
              </div>
            </div>

            {/* Courses Offered */}
            <div style={{ marginBottom: "20px" }}>
              <h4 style={{ fontSize: "16px", fontWeight: "600", color: "#1f2937", marginBottom: "10px" }}>
                Courses Offered:
              </h4>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                {college.courses.map((course, index) => (
                  <span
                    key={index}
                    style={{
                      backgroundColor: "#e5f3ff",
                      color: "#3b82f6",
                      padding: "4px 12px",
                      borderRadius: "20px",
                      fontSize: "12px",
                      fontWeight: "500",
                    }}
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div style={{ display: "flex", gap: "10px" }}>
              <Link href={`/colleges/${college.id}`} style={{ flex: 1 }}>
                <button className="btn-secondary" style={{ width: "100%", padding: "12px" }}>
                  View Details
                </button>
              </Link>
              <Link href="/contact" style={{ flex: 1 }}>
                <button className="btn-primary" style={{ width: "100%", padding: "12px" }}>
                  Apply Now
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
