import Header from "../../components/Header"
import Footer from "../../components/Footer"
import CourseGrid from "../../components/CourseGrid"
import CourseFilters from "../../components/CourseFilters"

export const metadata = {
  title: "Courses - The Sunrise Education | BSC, MSC, BCA, BBA, Nursing, B.ED",
  description:
    "Explore our comprehensive range of courses including BSC, MSC, BCA, BBA, Nursing ANM, B.ED, D.El.Ed with scholarship opportunities across Jharkhand, Bengal, and UP.",
  keywords: "courses, BSC, MSC, BCA, BBA, Nursing, B.ED, D.El.Ed, college admission, scholarship",
}

export default function CoursesPage() {
  return (
    <div>
      <Header />
      <main>
        {/* Hero Section */}
        <section style={{ background: "linear-gradient(135deg, #e5f3ff 0%, #ffffff 100%)", padding: "60px 0" }}>
          <div className="container">
            <div style={{ textAlign: "center", maxWidth: "800px", margin: "0 auto" }}>
              <h1 style={{ fontSize: "42px", fontWeight: "700", color: "#1f2937", marginBottom: "20px" }}>
                Our Courses
              </h1>
              <p style={{ fontSize: "18px", color: "#6b7280", lineHeight: "1.6" }}>
                Discover comprehensive educational programs designed to shape your future. From undergraduate to
                postgraduate courses, we offer quality education with excellent placement opportunities and scholarship
                support.
              </p>
            </div>
          </div>
        </section>

        {/* Courses Section */}
        <section style={{ padding: "80px 0", backgroundColor: "#ffffff" }}>
          <div className="container">
            <CourseFilters />
            <CourseGrid />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
