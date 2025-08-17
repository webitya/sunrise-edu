export default function StatsSection() {
  const stats = [
    { number: "500+", label: "Students Successfully Placed", color: "#3b82f6" },
    { number: "50+", label: "Partner Universities", color: "#10b981" },
    { number: "95%", label: "Success Rate", color: "#f59e0b" },
    { number: "10+", label: "Years of Experience", color: "#8b5cf6" },
  ]

  return (
    <section style={{ padding: "80px 0", background: "linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)" }}>
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: "60px" }}>
          <h2 style={{ fontSize: "36px", fontWeight: "700", color: "white", marginBottom: "15px" }}>
            Our Achievements
          </h2>
          <p style={{ fontSize: "18px", color: "#e5f3ff", maxWidth: "600px", margin: "0 auto" }}>
            Numbers that speak for our commitment to excellence in education consulting.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "40px" }}>
          {stats.map((stat, index) => (
            <div key={index} style={{ textAlign: "center" }}>
              <h3
                style={{
                  fontSize: "48px",
                  fontWeight: "700",
                  color: "white",
                  marginBottom: "10px",
                  textShadow: "0 2px 4px rgba(0,0,0,0.1)",
                }}
              >
                {stat.number}
              </h3>
              <p style={{ fontSize: "16px", color: "#e5f3ff", fontWeight: "500" }}>{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
