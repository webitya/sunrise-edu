import Link from "next/link"
import { FaGraduationCap, FaUsers, FaAward, FaArrowRight } from "react-icons/fa"
import { MdSchool, MdTrendingUp } from "react-icons/md"

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Your Gateway to{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Quality Education
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed max-w-2xl">
              Leading education consultancy for college admissions across Jharkhand, Bengal, and UP. Get expert guidance
              for BSC, MSC, BCA, BBA, Nursing, B.ED, and D.El.Ed courses with scholarship opportunities.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link href="/courses">
                <button className="flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                  <MdSchool className="text-xl" />
                  Explore Courses
                  <FaArrowRight className="text-sm" />
                </button>
              </Link>
              <Link href="/contact">
                <button className="flex items-center justify-center gap-2 bg-white hover:bg-gray-50 text-blue-600 border-2 border-blue-200 hover:border-blue-300 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-md hover:shadow-lg">
                  <FaUsers className="text-xl" />
                  Get Consultation
                </button>
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-100">
                <div className="flex items-center justify-center mb-2">
                  <FaUsers className="text-2xl text-blue-600 mr-2" />
                  <h3 className="text-3xl font-bold text-blue-600">500+</h3>
                </div>
                <p className="text-gray-600 font-medium">Students Placed</p>
              </div>
              <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 border border-purple-100">
                <div className="flex items-center justify-center mb-2">
                  <MdSchool className="text-2xl text-purple-600 mr-2" />
                  <h3 className="text-3xl font-bold text-purple-600">50+</h3>
                </div>
                <p className="text-gray-600 font-medium">Partner Colleges</p>
              </div>
              <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 border border-green-100">
                <div className="flex items-center justify-center mb-2">
                  <MdTrendingUp className="text-2xl text-green-600 mr-2" />
                  <h3 className="text-3xl font-bold text-green-600">95%</h3>
                </div>
                <p className="text-gray-600 font-medium">Success Rate</p>
              </div>
            </div>
          </div>

          <div className="flex-1 relative">
            <div className="relative bg-gradient-to-br from-blue-100 to-purple-100 rounded-3xl p-8 shadow-2xl">
              <img
                src="/placeholder.svg?height=400&width=500&text=Students+Learning"
                alt="Students in classroom"
                className="w-full h-auto rounded-2xl shadow-lg"
              />
              <div className="absolute -top-4 -right-4 bg-white rounded-full p-4 shadow-lg">
                <FaGraduationCap className="text-2xl text-blue-600" />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white rounded-full p-4 shadow-lg">
                <FaAward className="text-2xl text-purple-600" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
