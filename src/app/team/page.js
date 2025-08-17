import Header from "../../components/Header"
import Footer from "../../components/Footer"
import TeamGrid from "../../components/TeamGrid"

export const metadata = {
  title: "Our Team - The Sunrise Education | Meet Our Expert Education Counselors",
  description:
    "Meet the experienced team behind The Sunrise Education. Our founders Ashish, Surendra Kumar, and Academic Director Aditya Kumar bring years of expertise in education consulting.",
  keywords: "team, founders, education counselors, Ashish, Surendra Kumar, Aditya Kumar, education experts",
}

export default function TeamPage() {
  return (
    <div>
      <Header />
      <main>
        {/* Hero Section */}
        <section style={{ background: "linear-gradient(135deg, #e5f3ff 0%, #ffffff 100%)", padding: "60px 0" }}>
          <div className="container">
            <div style={{ textAlign: "center", maxWidth: "800px", margin: "0 auto" }}>
              <h1 style={{ fontSize: "42px", fontWeight: "700", color: "#1f2937", marginBottom: "20px" }}>
                Meet Our Team
              </h1>
              <p style={{ fontSize: "18px", color: "#6b7280", lineHeight: "1.6" }}>
                Our experienced team of education consultants is dedicated to helping students achieve their academic
                goals. With years of expertise in college admissions and career guidance, we provide personalized
                support for your educational journey.
              </p>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section style={{ padding: "80px 0", backgroundColor: "#ffffff" }}>
          <div className="container">
            <TeamGrid />
          </div>
        </section>

        {/* Values Section */}
        <section style={{ padding: "60px 0", backgroundColor: "#f8fafc" }}>
          <div className="container">
            <div style={{ textAlign: "center", marginBottom: "50px" }}>
              <h2 style={{ fontSize: "32px", fontWeight: "700", color: "#1f2937", marginBottom: "15px" }}>
                Our Values
              </h2>
              <p style={{ fontSize: "16px", color: "#6b7280", maxWidth: "600px", margin: "0 auto" }}>
                The principles that guide our work and commitment to student success
              </p>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "30px" }}>
              <div className="card" style={{ textAlign: "center" }}>
                <div style={{ fontSize: "40px", marginBottom: "15px" }}>🎯</div>
                <h3 style={{ fontSize: "20px", fontWeight: "600", color: "#1f2937", marginBottom: "10px" }}>
                  Excellence
                </h3>
                <p style={{ color: "#6b7280", lineHeight: "1.6" }}>
                  We strive for excellence in every aspect of our service delivery and student guidance.
                </p>
              </div>

              <div className="card" style={{ textAlign: "center" }}>
                <div style={{ fontSize: "40px", marginBottom: "15px" }}>🤝</div>
                <h3 style={{ fontSize: "20px", fontWeight: "600", color: "#1f2937", marginBottom: "10px" }}>
                  Integrity
                </h3>
                <p style={{ color: "#6b7280", lineHeight: "1.6" }}>
                  Honest, transparent guidance with students' best interests always at heart.
                </p>
              </div>

              <div className="card" style={{ textAlign: "center" }}>
                <div style={{ fontSize: "40px", marginBottom: "15px" }}>💡</div>
                <h3 style={{ fontSize: "20px", fontWeight: "600", color: "#1f2937", marginBottom: "10px" }}>
                  Innovation
                </h3>
                <p style={{ color: "#6b7280", lineHeight: "1.6" }}>
                  Continuously improving our methods to provide the best educational opportunities.
                </p>
              </div>

              <div className="card" style={{ textAlign: "center" }}>
                <div style={{ fontSize: "40px", marginBottom: "15px" }}>❤️</div>
                <h3 style={{ fontSize: "20px", fontWeight: "600", color: "#1f2937", marginBottom: "10px" }}>
                  Compassion
                </h3>
                <p style={{ color: "#6b7280", lineHeight: "1.6" }}>
                  Understanding each student's unique journey and providing empathetic support.
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
