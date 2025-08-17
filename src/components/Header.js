"use client"

import Link from "next/link"
import MobileMenu from "./MobileMenu"
import { FaGraduationCap } from "react-icons/fa"

export default function Header() {
  return (
    <header
      style={{
        position: "sticky",
        top: "0",
        zIndex: "50",
        background: "linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)",
        borderBottom: "1px solid #e1e7ef",
        boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
      }}
    >
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "0 16px",
        }}
      >
        <nav
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "16px 0",
          }}
        >
          <div style={{ flexShrink: "0" }}>
            <Link href="/" style={{ display: "block", textDecoration: "none" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <div
                  style={{
                    background: "linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)",
                    padding: "8px",
                    borderRadius: "12px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <FaGraduationCap style={{ color: "white", fontSize: "24px" }} />
                </div>
                <div>
                  <h1
                    style={{
                      color: "#1e40af",
                      fontSize: "24px",
                      fontWeight: "700",
                      lineHeight: "1.2",
                      margin: "0",
                    }}
                  >
                    The Sunrise Education
                  </h1>
                  <p
                    style={{
                      color: "#64748b",
                      fontSize: "12px",
                      margin: "0",
                    }}
                  >
                    thesunriseedu.in
                  </p>
                </div>
              </div>
            </Link>
          </div>

          <div
            style={{
              display: "none",
              alignItems: "center",
              gap: "32px",
            }}
            className="md:flex"
          >
            <Link
              href="/"
              style={{
                color: "#475569",
                fontWeight: "500",
                textDecoration: "none",
                padding: "8px 16px",
                borderRadius: "8px",
                transition: "all 0.2s ease",
              }}
              onMouseEnter={(e) => {
                e.target.style.color = "#1e40af"
                e.target.style.backgroundColor = "#f1f5f9"
              }}
              onMouseLeave={(e) => {
                e.target.style.color = "#475569"
                e.target.style.backgroundColor = "transparent"
              }}
            >
              Home
            </Link>
            <Link
              href="/about"
              style={{
                color: "#475569",
                fontWeight: "500",
                textDecoration: "none",
                padding: "8px 16px",
                borderRadius: "8px",
                transition: "all 0.2s ease",
              }}
              onMouseEnter={(e) => {
                e.target.style.color = "#1e40af"
                e.target.style.backgroundColor = "#f1f5f9"
              }}
              onMouseLeave={(e) => {
                e.target.style.color = "#475569"
                e.target.style.backgroundColor = "transparent"
              }}
            >
              About Us
            </Link>
            <Link
              href="/courses"
              style={{
                color: "#475569",
                fontWeight: "500",
                textDecoration: "none",
                padding: "8px 16px",
                borderRadius: "8px",
                transition: "all 0.2s ease",
              }}
              onMouseEnter={(e) => {
                e.target.style.color = "#1e40af"
                e.target.style.backgroundColor = "#f1f5f9"
              }}
              onMouseLeave={(e) => {
                e.target.style.color = "#475569"
                e.target.style.backgroundColor = "transparent"
              }}
            >
              Courses
            </Link>
            <Link
              href="/colleges"
              style={{
                color: "#475569",
                fontWeight: "500",
                textDecoration: "none",
                padding: "8px 16px",
                borderRadius: "8px",
                transition: "all 0.2s ease",
              }}
              onMouseEnter={(e) => {
                e.target.style.color = "#1e40af"
                e.target.style.backgroundColor = "#f1f5f9"
              }}
              onMouseLeave={(e) => {
                e.target.style.color = "#475569"
                e.target.style.backgroundColor = "transparent"
              }}
            >
              Colleges
            </Link>
            <Link
              href="/team"
              style={{
                color: "#475569",
                fontWeight: "500",
                textDecoration: "none",
                padding: "8px 16px",
                borderRadius: "8px",
                transition: "all 0.2s ease",
              }}
              onMouseEnter={(e) => {
                e.target.style.color = "#1e40af"
                e.target.style.backgroundColor = "#f1f5f9"
              }}
              onMouseLeave={(e) => {
                e.target.style.color = "#475569"
                e.target.style.backgroundColor = "transparent"
              }}
            >
              Our Team
            </Link>
            <Link
              href="/pay-fee"
              style={{
                color: "#475569",
                fontWeight: "500",
                textDecoration: "none",
                padding: "8px 16px",
                borderRadius: "8px",
                transition: "all 0.2s ease",
              }}
              onMouseEnter={(e) => {
                e.target.style.color = "#1e40af"
                e.target.style.backgroundColor = "#f1f5f9"
              }}
              onMouseLeave={(e) => {
                e.target.style.color = "#475569"
                e.target.style.backgroundColor = "transparent"
              }}
            >
              Pay Fee
            </Link>
            <Link href="/contact" style={{ textDecoration: "none" }}>
              <button
                style={{
                  background: "linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)",
                  color: "white",
                  padding: "12px 24px",
                  borderRadius: "12px",
                  fontWeight: "600",
                  border: "none",
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                  boxShadow: "0 4px 6px -1px rgba(59, 130, 246, 0.3)",
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
                Contact Us
              </button>
            </Link>
          </div>

          <MobileMenu />
        </nav>
      </div>
    </header>
  )
}
