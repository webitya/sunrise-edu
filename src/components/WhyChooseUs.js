export default function WhyChooseUs() {
  const features = [
    {
      icon: "🎓",
      title: "Expert Guidance",
      description:
        "Get personalized counseling from our experienced education consultants with 10+ years in the field.",
    },
    {
      icon: "💰",
      title: "Scholarship Assistance",
      description: "We help you secure scholarships and financial aid to make quality education affordable.",
    },
    {
      icon: "🏛️",
      title: "Top Universities",
      description: "Access to 50+ partner universities across Jharkhand, Bengal, and UP with excellent track records.",
    },
    {
      icon: "📋",
      title: "Easy Admission Process",
      description: "Streamlined admission process with complete documentation and application support.",
    },
    {
      icon: "🎯",
      title: "Career Focused",
      description: "Courses designed with industry requirements in mind for better placement opportunities.",
    },
    {
      icon: "🤝",
      title: "Ongoing Support",
      description: "Continuous support throughout your academic journey from admission to graduation.",
    },
  ]

  return (
    <section style={{ padding: "80px 0", backgroundColor: "#f8fafc" }}>
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: "60px" }}>
          <h2 style={{ fontSize: "36px", fontWeight: "700", color: "#1f2937", marginBottom: "15px" }}>
            Why Choose The Sunrise Education?
          </h2>
          <p style={{ fontSize: "18px", color: "#6b7280", maxWidth: "600px", margin: "0 auto" }}>
            We are committed to providing the best educational opportunities and guidance for your bright future.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "30px" }}>
          {features.map((feature, index) => (
            <div key={index} className="card" style={{ textAlign: "center" }}>
              <div style={{ fontSize: "48px", marginBottom: "20px" }}>{feature.icon}</div>
              <h3 style={{ fontSize: "20px", fontWeight: "600", color: "#1f2937", marginBottom: "15px" }}>
                {feature.title}
              </h3>
              <p style={{ color: "#6b7280", lineHeight: "1.6" }}>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
