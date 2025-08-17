"use client"

import Link from "next/link"
import { FaClock, FaUserGraduate, FaRupeeSign, FaGraduationCap } from "react-icons/fa"
import { IoSchoolOutline } from "react-icons/io5"

export default function CourseCard({ course }) {
  return (
    <div
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
        e.currentTarget.style.boxShadow = "0 10px 25px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)"
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)"
        e.currentTarget.style.boxShadow = "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)"
      }}
    >
      <div style={{ position: "relative", overflow: "hidden" }}>
        <img
          src={course.image || "/placeholder.svg"}
          alt={course.name}
          style={{
            width: "100%",
            height: "200px",
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

      <div style={{ position: "absolute", top: "12px", right: "12px" }}>
        <span
          style={{
            padding: "6px 12px",
            borderRadius: "20px",
            fontSize: "11px",
            fontWeight: "600",
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
          {course.scholarshipType === "full"
            ? "Full Scholarship"
            : course.scholarshipType === "partial"
              ? "Partial Scholarship"
              : "No Scholarship"}
        </span>
      </div>

      <div style={{ padding: "20px", display: "flex", flexDirection: "column", flex: "1" }}>
        <div style={{ marginBottom: "16px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "8px" }}>
            <IoSchoolOutline style={{ color: "#3b82f6", fontSize: "20px" }} />
            <h3
              style={{
                fontSize: "20px",
                fontWeight: "700",
                color: "#1e293b",
                margin: "0",
                lineHeight: "1.3",
              }}
            >
              {course.name}
            </h3>
          </div>
          <p
            style={{
              color: "#64748b",
              lineHeight: "1.6",
              fontSize: "14px",
              margin: "0",
            }}
          >
            {course.description}
          </p>
        </div>

        <div style={{ marginBottom: "20px", flex: "1" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: "8px",
              padding: "8px 12px",
              background: "#f8fafc",
              borderRadius: "8px",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <FaClock style={{ color: "#6366f1", fontSize: "14px" }} />
              <span style={{ color: "#64748b", fontSize: "13px", fontWeight: "500" }}>Duration:</span>
            </div>
            <span style={{ fontWeight: "600", color: "#1e293b", fontSize: "13px" }}>{course.duration}</span>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: "8px",
              padding: "8px 12px",
              background: "#f8fafc",
              borderRadius: "8px",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <FaUserGraduate style={{ color: "#8b5cf6", fontSize: "14px" }} />
              <span style={{ color: "#64748b", fontSize: "13px", fontWeight: "500" }}>Eligibility:</span>
            </div>
            <span style={{ fontWeight: "600", color: "#1e293b", fontSize: "13px" }}>{course.eligibility}</span>
          </div>

          {course.fee && (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "8px 12px",
                background: "linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%)",
                borderRadius: "8px",
                border: "1px solid #bfdbfe",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <FaRupeeSign style={{ color: "#3b82f6", fontSize: "14px" }} />
                <span style={{ color: "#1e40af", fontSize: "13px", fontWeight: "500" }}>Fee:</span>
              </div>
              <span
                style={{
                  fontWeight: "700",
                  color: "#1e40af",
                  fontSize: "16px",
                }}
              >
                ₹{course.fee.toLocaleString()}
              </span>
            </div>
          )}
        </div>

        <Link href="/contact" style={{ textDecoration: "none" }}>
          <button
            style={{
              width: "100%",
              background: "linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)",
              color: "white",
              padding: "14px 20px",
              borderRadius: "12px",
              fontWeight: "600",
              border: "none",
              cursor: "pointer",
              transition: "all 0.2s ease",
              boxShadow: "0 4px 6px -1px rgba(59, 130, 246, 0.3)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "8px",
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = "translateY(-1px)"
              e.target.style.boxShadow = "0 6px 8px -1px rgba(59, 130, 246, 0.4)"
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = "translateY(0)"
              e.target.style.boxShadow = "0 4px 6px -1px rgba(59, 130, 246, 0.3)"
            }}
          >
            <FaGraduationCap style={{ fontSize: "16px" }} />
            Apply Now
          </button>
        </Link>
      </div>
    </div>
  )
}
