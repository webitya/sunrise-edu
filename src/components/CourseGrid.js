"use client"
import { useState } from "react"
import Link from "next/link"
import { coursesData } from "../data/courses/courses"

export default function CourseGrid() {
  const [filteredCourses, setFilteredCourses] = useState(coursesData)
  const [selectedFilter, setSelectedFilter] = useState("all")

  const handleFilter = (filterType) => {
    setSelectedFilter(filterType)
    if (filterType === "all") {
      setFilteredCourses(coursesData)
    } else if (filterType === "scholarship") {
      setFilteredCourses(coursesData.filter((course) => course.scholarshipType === "full"))
    } else if (filterType === "partial-scholarship") {
      setFilteredCourses(coursesData.filter((course) => course.scholarshipType === "partial"))
    } else if (filterType === "undergraduate") {
      setFilteredCourses(
        coursesData.filter(
          (course) => course.name.includes("BSC") || course.name.includes("BCA") || course.name.includes("BBA"),
        ),
      )
    } else if (filterType === "postgraduate") {
      setFilteredCourses(coursesData.filter((course) => course.name.includes("MSC") || course.name.includes("B.ED")))
    }
  }

  return (
    <div>
      {/* Filter Buttons */}
      <div className="flex flex-wrap gap-2 sm:gap-3 mb-8 sm:mb-10 justify-center">
        <button
          onClick={() => handleFilter("all")}
          className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
            selectedFilter === "all"
              ? "bg-blue-600 text-white"
              : "bg-blue-50 text-blue-600 border border-blue-200 hover:bg-blue-100"
          }`}
        >
          All Courses
        </button>
        <button
          onClick={() => handleFilter("scholarship")}
          className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
            selectedFilter === "scholarship"
              ? "bg-blue-600 text-white"
              : "bg-blue-50 text-blue-600 border border-blue-200 hover:bg-blue-100"
          }`}
        >
          Full Scholarship
        </button>
        <button
          onClick={() => handleFilter("partial-scholarship")}
          className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
            selectedFilter === "partial-scholarship"
              ? "bg-blue-600 text-white"
              : "bg-blue-50 text-blue-600 border border-blue-200 hover:bg-blue-100"
          }`}
        >
          Partial Scholarship
        </button>
        <button
          onClick={() => handleFilter("undergraduate")}
          className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
            selectedFilter === "undergraduate"
              ? "bg-blue-600 text-white"
              : "bg-blue-50 text-blue-600 border border-blue-200 hover:bg-blue-100"
          }`}
        >
          Undergraduate
        </button>
        <button
          onClick={() => handleFilter("postgraduate")}
          className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
            selectedFilter === "postgraduate"
              ? "bg-blue-600 text-white"
              : "bg-blue-50 text-blue-600 border border-blue-200 hover:bg-blue-100"
          }`}
        >
          Postgraduate
        </button>
      </div>

      {/* Course Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
        {filteredCourses.map((course) => (
          <div
            key={course.id}
            className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow border border-blue-50 relative"
          >
            <img
              src={course.image || "/placeholder.svg"}
              alt={course.name}
              className="w-full h-48 sm:h-56 object-cover rounded-t-xl"
            />

            {/* Scholarship Badge */}
            <div className="absolute top-3 right-3">
              <span
                className={`px-3 py-1 rounded-full text-xs font-medium ${
                  course.scholarshipType === "full"
                    ? "bg-green-100 text-green-800"
                    : course.scholarshipType === "partial"
                      ? "bg-yellow-100 text-yellow-800"
                      : "bg-red-100 text-red-800"
                }`}
              >
                {course.scholarshipType === "full"
                  ? "Full Scholarship"
                  : course.scholarshipType === "partial"
                    ? "Partial Scholarship"
                    : "No Scholarship"}
              </span>
            </div>

            <div className="p-4 sm:p-6">
              <div className="mb-4">
                <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-2">{course.name}</h3>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">{course.description}</p>
              </div>

              {/* Course Details */}
              <div className="space-y-2 mb-6">
                <div className="flex justify-between items-center">
                  <span className="text-gray-500 font-medium text-sm">Duration:</span>
                  <span className="font-semibold text-gray-900 text-sm">{course.duration}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-500 font-medium text-sm">Eligibility:</span>
                  <span className="font-semibold text-gray-900 text-sm">{course.eligibility}</span>
                </div>

                {/* Fee Information */}
                {course.fee && (
                  <div className="flex justify-between items-center">
                    <span className="text-gray-500 font-medium text-sm">Fee:</span>
                    <span className="font-bold text-blue-600 text-base sm:text-lg">
                      ₹{course.fee.toLocaleString()} {course.feeType || ""}
                    </span>
                  </div>
                )}

                {course.bscFee && course.mscFee && (
                  <div className="space-y-1">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-500 font-medium text-sm">BSC Fee:</span>
                      <span className="font-semibold text-blue-600 text-sm">₹{course.bscFee.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-500 font-medium text-sm">MSC Fee:</span>
                      <span className="font-semibold text-blue-600 text-sm">₹{course.mscFee.toLocaleString()}</span>
                    </div>
                  </div>
                )}

                {course.totalFee && (
                  <div className="flex justify-between items-center">
                    <span className="text-gray-500 font-medium text-sm">Total Fee:</span>
                    <span className="font-bold text-blue-600 text-base sm:text-lg">
                      ₹{course.totalFee.toLocaleString()}
                    </span>
                  </div>
                )}

                {/* Scholarship Information */}
                {course.scholarshipAmount && (
                  <div className="flex justify-between items-center">
                    <span className="text-gray-500 font-medium text-sm">Scholarship:</span>
                    <span className="font-semibold text-green-600 text-sm">
                      ₹{course.scholarshipAmount.toLocaleString()}
                    </span>
                  </div>
                )}

                {/* Admission Charge */}
                {course.admissionCharge && (
                  <div className="flex justify-between items-center">
                    <span className="text-gray-500 font-medium text-sm">Admission Charge:</span>
                    <span className="font-semibold text-gray-900 text-sm">
                      ₹{course.admissionCharge.toLocaleString()}
                    </span>
                  </div>
                )}
              </div>

              {/* Universities List */}
              {course.universities && (
                <div className="mb-6">
                  <h4 className="text-base font-semibold text-gray-900 mb-3">Partner Universities:</h4>
                  <ul className="space-y-1">
                    {course.universities.slice(0, 3).map((university, index) => (
                      <li key={index} className="text-gray-600 text-sm flex items-start">
                        <span className="text-blue-600 mr-2 mt-1">•</span>
                        {university}
                      </li>
                    ))}
                    {course.universities.length > 3 && (
                      <li className="text-blue-600 text-sm font-medium">
                        +{course.universities.length - 3} more universities
                      </li>
                    )}
                  </ul>
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3">
                <Link href="/contact" className="flex-1">
                  <button className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-blue-700 transition-colors">
                    Apply Now
                  </button>
                </Link>
                <Link href="/contact" className="flex-1">
                  <button className="w-full bg-blue-50 text-blue-600 py-3 px-4 rounded-lg font-medium border border-blue-200 hover:bg-blue-100 transition-colors">
                    Get Details
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* No Results Message */}
      {filteredCourses.length === 0 && (
        <div className="text-center py-12 sm:py-16">
          <h3 className="text-xl sm:text-2xl text-gray-500 mb-3">No courses found</h3>
          <p className="text-gray-400">Try adjusting your filters to see more courses.</p>
        </div>
      )}
    </div>
  )
}
