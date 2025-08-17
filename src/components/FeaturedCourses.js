import Link from "next/link"
import { coursesData } from "../data/courses/courses"

export default function FeaturedCourses() {
  const featuredCourses = coursesData.slice(0, 3)

  return (
    <section style={{ padding: "80px 0", backgroundColor: "#ffffff" }}>
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: "60px" }}>
          <h2 style={{ fontSize: "36px", fontWeight: "700", color: "#1f2937", marginBottom: "15px" }}>
            Popular Courses
          </h2>
          <p style={{ fontSize: "18px", color: "#6b7280", maxWidth: "600px", margin: "0 auto" }}>
            Discover our most sought-after courses with excellent placement records and scholarship opportunities.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))", gap: "30px" }}>
          {featuredCourses.map((course) => (
            <div key={course.id} className="card">
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
              <div
                style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "15px" }}
              >
                <h3 style={{ fontSize: "24px", fontWeight: "600", color: "#1f2937", margin: 0 }}>{course.name}</h3>
                <span className={`scholarship-${course.scholarshipType}`}>
                  {course.scholarshipType === "full"
                    ? "Full Scholarship"
                    : course.scholarshipType === "partial"
                      ? "Partial Scholarship"
                      : "No Scholarship"}
                </span>
              </div>
              <p style={{ color: "#6b7280", marginBottom: "20px", lineHeight: "1.6" }}>{course.description}</p>
              <div style={{ marginBottom: "20px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px" }}>
                  <span style={{ color: "#6b7280" }}>Duration:</span>
                  <span style={{ fontWeight: "500", color: "#1f2937" }}>{course.duration}</span>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px" }}>
                  <span style={{ color: "#6b7280" }}>Eligibility:</span>
                  <span style={{ fontWeight: "500", color: "#1f2937" }}>{course.eligibility}</span>
                </div>
                {course.fee && (
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px" }}>
                    <span style={{ color: "#6b7280" }}>Fee:</span>
                    <span style={{ fontWeight: "600", color: "#3b82f6" }}>₹{course.fee.toLocaleString()}</span>
                  </div>
                )}
              </div>
              <Link href="/contact">
                <button className="btn-primary" style={{ width: "100%" }}>
                  Apply Now
                </button>
              </Link>
            </div>
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: "50px" }}>
          <Link href="/courses">
            <button className="btn-secondary" style={{ fontSize: "18px", padding: "15px 40px" }}>
              View All Courses
            </button>
          </Link>
        </div>
      </div>
    </section>
  )
}
