import Link from "next/link"

export default function CourseCard({ course }) {
  return (
    <div className="card" style={{ position: "relative", height: "100%" }}>
      <img
        src={course.image || "/placeholder.svg"}
        alt={course.name}
        style={{
          width: "100%",
          height: "200px",
          objectFit: "cover",
          borderRadius: "8px",
          marginBottom: "20px",
        }}
      />

      {/* Scholarship Badge */}
      <div style={{ position: "absolute", top: "15px", right: "15px" }}>
        <span className={`scholarship-${course.scholarshipType}`}>
          {course.scholarshipType === "full"
            ? "Full Scholarship"
            : course.scholarshipType === "partial"
              ? "Partial Scholarship"
              : "No Scholarship"}
        </span>
      </div>

      <div style={{ display: "flex", flexDirection: "column", height: "calc(100% - 220px)" }}>
        <div style={{ marginBottom: "15px" }}>
          <h3 style={{ fontSize: "22px", fontWeight: "600", color: "#1f2937", marginBottom: "8px" }}>{course.name}</h3>
          <p style={{ color: "#6b7280", lineHeight: "1.6", fontSize: "14px" }}>{course.description}</p>
        </div>

        <div style={{ marginBottom: "20px", flex: "1" }}>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "6px" }}>
            <span style={{ color: "#6b7280", fontSize: "14px" }}>Duration:</span>
            <span style={{ fontWeight: "500", color: "#1f2937", fontSize: "14px" }}>{course.duration}</span>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "6px" }}>
            <span style={{ color: "#6b7280", fontSize: "14px" }}>Eligibility:</span>
            <span style={{ fontWeight: "500", color: "#1f2937", fontSize: "14px" }}>{course.eligibility}</span>
          </div>

          {course.fee && (
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "6px" }}>
              <span style={{ color: "#6b7280", fontSize: "14px" }}>Fee:</span>
              <span style={{ fontWeight: "600", color: "#3b82f6", fontSize: "16px" }}>
                ₹{course.fee.toLocaleString()}
              </span>
            </div>
          )}
        </div>

        <Link href="/contact">
          <button className="btn-primary" style={{ width: "100%", marginTop: "auto" }}>
            Apply Now
          </button>
        </Link>
      </div>
    </div>
  )
}
