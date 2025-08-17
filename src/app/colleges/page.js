import Header from "../../components/Header"
import Footer from "../../components/Footer"
import CollegeGrid from "../../components/CollegeGrid"
import { FaUniversity, FaGraduationCap, FaCertificate } from "react-icons/fa"
import { MdSchool } from "react-icons/md"

export const metadata = {
  title: "Partner Colleges - The Sunrise Education | Top Universities in Jharkhand, Bengal, UP",
  description:
    "Explore our partner colleges and universities across Jharkhand, Bengal, and UP. Get detailed information about facilities, courses, and admission processes.",
  keywords: "colleges, universities, Jharkhand, Bengal, UP, admission, partner institutions",
}

export default function CollegesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50 overflow-hidden">
          <div className="absolute inset-0 bg-white/20 backdrop-blur-sm"></div>
          <div className="relative max-w-7xl mx-auto">
            <div className="text-center max-w-4xl mx-auto">
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full shadow-lg">
                  <FaUniversity className="w-8 h-8 text-white" />
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent mb-6 leading-tight">
                Our Partner Colleges
              </h1>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-8">
                We have partnered with top-rated universities and colleges across Jharkhand, Bengal, and UP to provide
                you with the best educational opportunities. Each institution is carefully selected for its academic
                excellence and industry recognition.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center justify-center mb-3">
                    <MdSchool className="w-8 h-8 text-blue-500" />
                  </div>
                  <div className="text-3xl font-bold text-gray-800 mb-2">15+</div>
                  <div className="text-gray-600 font-medium">Partner Universities</div>
                </div>
                <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center justify-center mb-3">
                    <FaGraduationCap className="w-8 h-8 text-indigo-500" />
                  </div>
                  <div className="text-3xl font-bold text-gray-800 mb-2">50+</div>
                  <div className="text-gray-600 font-medium">Course Programs</div>
                </div>
                <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center justify-center mb-3">
                    <FaCertificate className="w-8 h-8 text-purple-500" />
                  </div>
                  <div className="text-3xl font-bold text-gray-800 mb-2">100%</div>
                  <div className="text-gray-600 font-medium">Accredited Institutions</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Colleges Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Explore Our Partner Institutions</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Discover the perfect college for your academic journey from our carefully curated list of partner
                institutions.
              </p>
            </div>
            <CollegeGrid />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
