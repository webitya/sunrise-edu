"use client"
import { useState } from "react"
import Link from "next/link"
import { coursesData } from "../data/courses/courses"
import { FaSearch, FaFilter, FaTimes } from "react-icons/fa"
import { IoSchoolOutline, IoTrophyOutline, IoStarOutline } from "react-icons/io5"

export default function CourseGrid() {
  const [filteredCourses, setFilteredCourses] = useState(coursesData)
  const [selectedFilter, setSelectedFilter] = useState("all")
  const [searchTerm, setSearchTerm] = useState("")

  const handleFilter = (filterType) => {
    setSelectedFilter(filterType)
    applyFilters(filterType, searchTerm)
  }

  const handleSearch = (term) => {
    setSearchTerm(term)
    applyFilters(selectedFilter, term)
  }

  const applyFilters = (filterType, searchTerm) => {
    let filtered = coursesData

    // Apply search filter
    if (searchTerm) {
      filtered = filtered.filter(
        (course) =>
          course.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          course.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
          course.type?.toLowerCase().includes(searchTerm.toLowerCase()),
      )
    }

    // Apply category filter
    if (filterType === "scholarship") {
      filtered = filtered.filter((course) => course.scholarshipType === "full")
    } else if (filterType === "partial-scholarship") {
      filtered = filtered.filter((course) => course.scholarshipType === "partial")
    } else if (filterType === "undergraduate") {
      filtered = filtered.filter(
        (course) => course.name.includes("BSC") || course.name.includes("BCA") || course.name.includes("BBA"),
      )
    } else if (filterType === "postgraduate") {
      filtered = filtered.filter((course) => course.name.includes("MSC") || course.name.includes("B.ED"))
    }

    setFilteredCourses(filtered)
  }

  return (
    <div>
      <div
        style={{
          background: "linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)",
          padding: "24px",
          borderRadius: "16px",
          marginBottom: "32px",
          border: "1px solid #e2e8f0",
        }}
      >
        {/* Search Bar */}
        <div style={{ marginBottom: "20px" }}>
          <div style={{ position: "relative", maxWidth: "400px", margin: "0 auto" }}>
            <FaSearch
              style={{
                position: "absolute",
                left: "16px",
                top: "50%",
                transform: "translateY(-50%)",
                color: "#64748b",
                fontSize: "16px",
              }}
            />
            <input
              type="text"
              placeholder="Search courses by name, type, or description..."
              value={searchTerm}
              onChange={(e) => handleSearch(e.target.value)}
              style={{
                width: "100%",
                padding: "14px 16px 14px 48px",
                borderRadius: "12px",
                border: "1px solid #cbd5e1",
                background: "white",
                fontSize: "14px",
                outline: "none",
                transition: "all 0.2s ease",
              }}
              onFocus={(e) => {
                e.target.style.borderColor = "#3b82f6"
                e.target.style.boxShadow = "0 0 0 3px rgba(59, 130, 246, 0.1)"
              }}
              onBlur={(e) => {
                e.target.style.borderColor = "#cbd5e1"
                e.target.style.boxShadow = "none"
              }}
            />
            {searchTerm && (
              <button
                onClick={() => handleSearch("")}
                style={{
                  position: "absolute",
                  right: "16px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  color: "#64748b",
                  padding: "4px",
                }}
              >
                <FaTimes />
              </button>
            )}
          </div>
        </div>

        {/* Filter Buttons */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "12px",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              color: "#64748b",
              fontSize: "14px",
              fontWeight: "500",
            }}
          >
            <FaFilter />
            Filter by:
          </div>

          {[
            { key: "all", label: "All Courses", icon: IoSchoolOutline },
            { key: "scholarship", label: "Full Scholarship", icon: IoTrophyOutline },
            { key: "partial-scholarship", label: "Partial Scholarship", icon: IoStarOutline },
            { key: "undergraduate", label: "Undergraduate", icon: IoSchoolOutline },
            { key: "postgraduate", label: "Postgraduate", icon: IoSchoolOutline },
          ].map((filter) => {
            const IconComponent = filter.icon
            return (
              <button
                key={filter.key}
                onClick={() => handleFilter(filter.key)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                  padding: "10px 16px",
                  fontSize: "13px",
                  fontWeight: "600",
                  borderRadius: "10px",
                  border: "1px solid",
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                  background:
                    selectedFilter === filter.key ? "linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)" : "white",
                  color: selectedFilter === filter.key ? "white" : "#475569",
                  borderColor: selectedFilter === filter.key ? "#3b82f6" : "#cbd5e1",
                }}
                onMouseEnter={(e) => {
                  if (selectedFilter !== filter.key) {
                    e.target.style.backgroundColor = "#f1f5f9"
                    e.target.style.borderColor = "#3b82f6"
                    e.target.style.color = "#1e40af"
                  }
                }}
                onMouseLeave={(e) => {
                  if (selectedFilter !== filter.key) {
                    e.target.style.backgroundColor = "white"
                    e.target.style.borderColor = "#cbd5e1"
                    e.target.style.color = "#475569"
                  }
                }}
              >
                <IconComponent style={{ fontSize: "14px" }} />
                {filter.label}
              </button>
            )
          })}
        </div>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
          gap: "24px",
          alignItems: "stretch",
        }}
      >
        {filteredCourses.map((course) => (
          <div
            key={course.id}
            style={{
              background: "linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)",
              borderRadius: "16px",
              border: "1px solid #e2e8f0",
              boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
              transition: "all 0.3s ease",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              position: "relative",
              overflow: "hidden",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-4px)"
              e.currentTarget.style.boxShadow =
                "0 10px 25px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)"
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)"
              e.currentTarget.style.boxShadow = "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)"
            }}
          >
            {/* Course Image */}
            <div style={{ position: "relative", overflow: "hidden" }}>
              <img
                src={course.image || "/placeholder.svg"}
                alt={course.name}
                style={{
                  width: "100%",
                  height: "180px",
                  objectFit: "cover",
                  borderRadius: "16px 16px 0 0",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  top: "0",
                  left: "0",
                  right: "0",
                  bottom: "0",
                  background: "linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(29, 78, 216, 0.1) 100%)",
                }}
              />
            </div>

            {/* Scholarship Badge */}
            <div style={{ position: "absolute", top: "12px", right: "12px" }}>
              <span
                style={{
                  padding: "4px 10px",
                  borderRadius: "16px",
                  fontSize: "10px",
                  fontWeight: "700",
                  textTransform: "uppercase",
                  letterSpacing: "0.5px",
                  background:
                    course.scholarshipType === "full"
                      ? "linear-gradient(135deg, #10b981 0%, #059669 100%)"
                      : course.scholarshipType === "partial"
                        ? "linear-gradient(135deg, #f59e0b 0%, #d97706 100%)"
                        : "linear-gradient(135deg, #ef4444 0%, #dc2626 100%)",
                  color: "white",
                  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                }}
              >
                {course.scholarshipType === "full" ? "FULL" : course.scholarshipType === "partial" ? "PARTIAL" : "NONE"}
              </span>
            </div>

            {/* Course Content */}
            <div style={{ padding: "20px", display: "flex", flexDirection: "column", flex: "1" }}>
              <div style={{ marginBottom: "12px" }}>
                <h3
                  style={{
                    fontSize: "18px",
                    fontWeight: "700",
                    color: "#1e293b",
                    margin: "0 0 6px 0",
                    lineHeight: "1.3",
                  }}
                >
                  {course.name}
                </h3>
                <p
                  style={{
                    color: "#64748b",
                    lineHeight: "1.5",
                    fontSize: "13px",
                    margin: "0",
                    display: "-webkit-box",
                    WebkitLineClamp: "2",
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                  }}
                >
                  {course.description}
                </p>
              </div>

              {/* Course Details - Compact */}
              <div style={{ marginBottom: "16px", flex: "1" }}>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "8px",
                    fontSize: "12px",
                  }}
                >
                  <div
                    style={{
                      padding: "6px 8px",
                      background: "#f8fafc",
                      borderRadius: "6px",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      textAlign: "center",
                    }}
                  >
                    <span style={{ color: "#64748b", fontWeight: "500" }}>Duration</span>
                    <span style={{ color: "#1e293b", fontWeight: "600" }}>{course.duration}</span>
                  </div>
                  <div
                    style={{
                      padding: "6px 8px",
                      background: "#f8fafc",
                      borderRadius: "6px",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      textAlign: "center",
                    }}
                  >
                    <span style={{ color: "#64748b", fontWeight: "500" }}>Eligibility</span>
                    <span style={{ color: "#1e293b", fontWeight: "600" }}>{course.eligibility}</span>
                  </div>
                </div>

                {course.fee && (
                  <div
                    style={{
                      marginTop: "8px",
                      padding: "8px",
                      background: "linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%)",
                      borderRadius: "8px",
                      border: "1px solid #bfdbfe",
                      textAlign: "center",
                    }}
                  >
                    <span style={{ color: "#1e40af", fontSize: "11px", fontWeight: "500" }}>Course Fee</span>
                    <div
                      style={{
                        fontWeight: "700",
                        color: "#1e40af",
                        fontSize: "16px",
                      }}
                    >
                      ₹{course.fee.toLocaleString()}
                    </div>
                  </div>
                )}
              </div>

              {/* Action Buttons */}
              <div style={{ display: "flex", gap: "8px" }}>
                <Link href="/contact" style={{ textDecoration: "none", flex: "1" }}>
                  <button
                    style={{
                      width: "100%",
                      background: "linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)",
                      color: "white",
                      padding: "10px 16px",
                      borderRadius: "8px",
                      fontWeight: "600",
                      border: "none",
                      cursor: "pointer",
                      transition: "all 0.2s ease",
                      fontSize: "13px",
                    }}
                  >
                    Apply Now
                  </button>
                </Link>
                <Link href="/contact" style={{ textDecoration: "none", flex: "1" }}>
                  <button
                    style={{
                      width: "100%",
                      background: "white",
                      color: "#3b82f6",
                      padding: "10px 16px",
                      borderRadius: "8px",
                      fontWeight: "600",
                      border: "1px solid #3b82f6",
                      cursor: "pointer",
                      transition: "all 0.2s ease",
                      fontSize: "13px",
                    }}
                  >
                    Details
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* No Results Message */}
      {filteredCourses.length === 0 && (
        <div
          style={{
            textAlign: "center",
            padding: "60px 20px",
            background: "linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)",
            borderRadius: "16px",
            border: "1px solid #e2e8f0",
          }}
        >
          <div
            style={{
              fontSize: "48px",
              marginBottom: "16px",
              opacity: "0.5",
            }}
          >
            🔍
          </div>
          <h3
            style={{
              fontSize: "20px",
              color: "#64748b",
              marginBottom: "8px",
              fontWeight: "600",
            }}
          >
            No courses found
          </h3>
          <p
            style={{
              color: "#94a3b8",
              fontSize: "14px",
            }}
          >
            Try adjusting your search or filters to discover more courses.
          </p>
        </div>
      )}
    </div>
  )
}
