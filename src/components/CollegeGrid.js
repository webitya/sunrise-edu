import Link from "next/link"
import { collegesData } from "../data/colleges/colleges"
import { FaUniversity, FaCertificate, FaEye, FaPaperPlane } from "react-icons/fa"
import { MdLocationOn, MdSchool, MdVerified } from "react-icons/md"
import { IoMdTime } from "react-icons/io"

export default function CollegeGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {collegesData.map((college) => (
        <div
          key={college.id}
          className="group bg-white/80 backdrop-blur-sm rounded-3xl shadow-lg border border-white/20 overflow-hidden hover:shadow-2xl hover:scale-105 transition-all duration-500 h-full flex flex-col"
        >
          {/* Image Container */}
          <div className="relative overflow-hidden">
            <img
              src={college.image || "/placeholder.svg"}
              alt={college.name}
              className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2 shadow-lg">
              <FaUniversity className="w-4 h-4 text-blue-500" />
            </div>
          </div>

          {/* Content Container */}
          <div className="p-6 flex-1 flex flex-col">
            {/* Header */}
            <div className="mb-4">
              <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                {college.name}
              </h3>
              <div className="flex items-center text-gray-600 mb-2">
                <MdLocationOn className="w-4 h-4 mr-2 text-red-500" />
                <span className="text-sm font-medium">{college.location}</span>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed line-clamp-2">{college.description}</p>
            </div>

            {/* College Details */}
            <div className="space-y-3 mb-4">
              <div className="flex items-center justify-between py-2 px-3 bg-gray-50/80 rounded-xl">
                <div className="flex items-center">
                  <IoMdTime className="w-4 h-4 text-blue-500 mr-2" />
                  <span className="text-sm text-gray-600 font-medium">Established</span>
                </div>
                <span className="text-sm font-bold text-gray-800">{college.established}</span>
              </div>

              <div className="flex items-center justify-between py-2 px-3 bg-gray-50/80 rounded-xl">
                <div className="flex items-center">
                  <MdSchool className="w-4 h-4 text-indigo-500 mr-2" />
                  <span className="text-sm text-gray-600 font-medium">Type</span>
                </div>
                <span className="text-sm font-bold text-gray-800">{college.type}</span>
              </div>

              <div className="flex items-center justify-between py-2 px-3 bg-green-50/80 rounded-xl">
                <div className="flex items-center">
                  <MdVerified className="w-4 h-4 text-green-500 mr-2" />
                  <span className="text-sm text-gray-600 font-medium">Accreditation</span>
                </div>
                <span className="text-sm font-bold text-green-600">{college.accreditation}</span>
              </div>
            </div>

            {/* Courses Offered */}
            <div className="mb-6 flex-1">
              <h4 className="text-sm font-bold text-gray-800 mb-3 flex items-center">
                <FaCertificate className="w-4 h-4 mr-2 text-purple-500" />
                Courses Offered
              </h4>
              <div className="flex flex-wrap gap-2">
                {college.courses.slice(0, 4).map((course, index) => (
                  <span
                    key={index}
                    className="bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-700 px-3 py-1 rounded-full text-xs font-semibold border border-blue-200/50 hover:shadow-md transition-shadow duration-200"
                  >
                    {course}
                  </span>
                ))}
                {college.courses.length > 4 && (
                  <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-xs font-semibold">
                    +{college.courses.length - 4} more
                  </span>
                )}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3 mt-auto">
              <Link href={`/colleges/${college.id}`} className="flex-1">
                <button className="w-full bg-gradient-to-r from-gray-100 to-gray-200 hover:from-gray-200 hover:to-gray-300 text-gray-700 font-semibold py-3 px-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 hover:shadow-lg group/btn">
                  <FaEye className="w-4 h-4 group-hover/btn:scale-110 transition-transform duration-200" />
                  <span className="text-sm">View Details</span>
                </button>
              </Link>
              <Link href="/contact" className="flex-1">
                <button className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-semibold py-3 px-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 hover:shadow-lg hover:scale-105 group/btn">
                  <FaPaperPlane className="w-4 h-4 group-hover/btn:scale-110 transition-transform duration-200" />
                  <span className="text-sm">Apply Now</span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
