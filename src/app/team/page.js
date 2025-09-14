import Header from "../../components/Header"
import Footer from "../../components/Footer"
import TeamGrid from "../../components/TeamGrid"

export const metadata = {
  title: "Our Team - The Sunrise Education | Meet Our Expert Education Counselors",
  description:
    "Meet the experienced team behind The Sunrise Education. Our founders Ashish, Surendra Kumar, and Academic Director Aditya Kumar bring years of expertise in education consulting.",
  keywords: "team, founders, education counselors, Ashish, Surendra Kumar, Aditya Kumar, education experts",
}
export const teamData = [
  {
    id: 1,
    name: "Ashish",
    position: "Partner Founder",
    image: "/placeholder.svg?height=200&width=200",
    bio: "Visionary leader with over 10 years of experience in education sector. Passionate about making quality education accessible to all.",
    specialization: "Strategic Planning & Business Development",
  },
  {
    id: 2,
    name: "Surendra Kumar",
    position: "Manager",
    image: "/placeholder.svg?height=200&width=200",
    bio: "Experienced education consultant with expertise in admission processes and student counseling. Dedicated to student success.",
    specialization: "Admission Counseling & Student Relations",
  },
  {
    id: 3,
    name: "Aditya Kumar",
    position: "Academic Director",
    image: "/placeholder.svg?height=200&width=200",
    bio: "Academic excellence advocate with deep knowledge of curriculum development and educational standards. Ensures quality education delivery.",
    specialization: "Academic Planning & Quality Assurance",
  },
]


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
<section className="py-16 px-6 lg:px-20 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 text-white relative overflow-hidden">
  {/* Animated background shapes */}
  <div className="absolute inset-0">
    <div className="absolute top-10 left-10 w-40 h-40 bg-blue-400 rounded-full opacity-20 animate-pulse"></div>
    <div className="absolute bottom-10 right-10 w-52 h-52 bg-indigo-400 rounded-full opacity-20 animate-bounce"></div>
  </div>

  {/* Header */}


  {/* Team Grid */}
  <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
    {teamData.map((member, index) => (
      <div
        key={member.id}
        className="bg-white text-gray-900 p-6 rounded-2xl shadow-lg transform hover:scale-105 hover:shadow-2xl hover:border-2 hover:border-blue-400 transition duration-500 ease-in-out animate-fade-up"
        style={{ animationDelay: `${index * 0.2}s` }}
      >
        <img
          src={member.image}
          alt={member.name}
          className="w-32 h-32 rounded-full mx-auto mb-6 shadow-md border-4 border-blue-100 hover:border-blue-400 transition"
        />
        <h2 className="text-xl font-bold">{member.name}</h2>
        <p className="text-blue-600 font-medium">{member.position}</p>
        <p className="mt-2 text-sm text-gray-500 italic">{member.specialization}</p>
        <p className="mt-4 text-gray-700">{member.bio}</p>
      </div>
    ))}
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
                  Honest, transparent guidance with students best interests always at heart.
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
                  Understanding each student s unique journey and providing empathetic support.
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
