import Link from "next/link"
import { coursesData } from "../data/courses/courses"
import { FaClock, FaGraduationCap, FaRupeeSign, FaArrowRight } from "react-icons/fa"
import { MdVerified, MdSchool } from "react-icons/md"

export default function FeaturedCourses() {
  const featuredCourses = coursesData.slice(0, 3)

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <MdSchool className="text-3xl text-blue-600 mr-3" />
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900">Popular Courses</h2>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover our most sought-after courses with excellent placement records and scholarship opportunities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredCourses.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 overflow-hidden h-full flex flex-col"
            >
              <div className="relative">
                <img src={course.image || "/bscmsc.png"} alt={course.name} className="w-full h-48 object-cover" />
                <div className="absolute top-4 right-4">
                  {course.scholarshipType === "full" && (
                    <span className="flex items-center gap-1 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
                      <MdVerified className="text-sm" />
                      Full Scholarship
                    </span>
                  )}
                  {course.scholarshipType === "partial" && (
                    <span className="flex items-center gap-1 bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
                      <MdVerified className="text-sm" />
                      Partial Scholarship
                    </span>
                  )}
                  {course.scholarshipType === "none" && (
                    <span className="bg-gray-500 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
                      No Scholarship
                    </span>
                  )}
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{course.name}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed flex-1">{course.description}</p>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-gray-600">
                      <FaClock className="text-blue-600" />
                      <span>Duration:</span>
                    </div>
                    <span className="font-semibold text-gray-900">{course.duration}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-gray-600">
                      <FaGraduationCap className="text-purple-600" />
                      <span>Eligibility:</span>
                    </div>
                    <span className="font-semibold text-gray-900">{course.eligibility}</span>
                  </div>
                  {course.fee && (
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-gray-600">
                        <FaRupeeSign className="text-green-600" />
                        <span>Fee:</span>
                      </div>
                      <span className="font-bold text-green-600 text-lg">₹{course.fee.toLocaleString()}</span>
                    </div>
                  )}
                </div>

                <Link href="/contact">
                  <button className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white py-3 px-6 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg">
                    Apply Now
                    <FaArrowRight className="text-sm" />
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/courses">
            <button className="inline-flex items-center gap-3 bg-white hover:bg-gray-50 text-blue-600 border-2 border-blue-200 hover:border-blue-300 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
              <MdSchool className="text-xl" />
              View All Courses
              <FaArrowRight className="text-sm" />
            </button>
          </Link>
        </div>
      </div>
    </section>
  )
}
