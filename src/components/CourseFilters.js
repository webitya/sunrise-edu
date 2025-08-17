"use client"
import { useState } from "react"

export default function CourseFilters() {
  const [searchTerm, setSearchTerm] = useState("")

  return (
    <div className="mb-8 sm:mb-10">
      <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center justify-center">
        <div className="flex-1 max-w-md sm:max-w-lg">
          <input
            type="text"
            placeholder="Search courses (BSC, BCA, Nursing, etc.)"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-3 border-2 border-blue-100 rounded-lg text-base outline-none transition-colors focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
          />
        </div>
        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors text-base">
          Search
        </button>
      </div>
    </div>
  )
}
