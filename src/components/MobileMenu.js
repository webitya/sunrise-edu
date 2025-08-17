"use client"

import { useState } from "react"
import Link from "next/link"
import { FaTimes, FaBars, FaGraduationCap } from "react-icons/fa"
import {
  IoHomeOutline,
  IoInformationCircleOutline,
  IoSchoolOutline,
  IoBuildingOutline,
  IoPeopleOutline,
  IoCardOutline,
  IoMailOutline,
} from "react-icons/io5"

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)

  const menuItems = [
    { href: "/", label: "Home", icon: IoHomeOutline },
    { href: "/about", label: "About Us", icon: IoInformationCircleOutline },
    { href: "/courses", label: "Courses", icon: IoSchoolOutline },
    { href: "/colleges", label: "Colleges", icon: IoBuildingOutline },
    { href: "/team", label: "Our Team", icon: IoPeopleOutline },
    { href: "/pay-fee", label: "Pay Fee", icon: IoCardOutline },
    { href: "/contact", label: "Contact Us", icon: IoMailOutline },
  ]

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "40px",
          height: "40px",
          background: "linear-gradient(135deg, #f1f5f9 0%, #e2e8f0 100%)",
          border: "1px solid #cbd5e1",
          borderRadius: "10px",
          cursor: "pointer",
          transition: "all 0.2s ease",
        }}
        className="md:hidden"
        onMouseEnter={(e) => {
          e.target.style.backgroundColor = "#e2e8f0"
        }}
        onMouseLeave={(e) => {
          e.target.style.background = "linear-gradient(135deg, #f1f5f9 0%, #e2e8f0 100%)"
        }}
      >
        <FaBars style={{ color: "#475569", fontSize: "18px" }} />
      </button>

      {isOpen && (
        <div
          style={{
            position: "fixed",
            top: "0",
            left: "0",
            right: "0",
            bottom: "0",
            zIndex: "100",
            background: "rgba(0, 0, 0, 0.5)",
            backdropFilter: "blur(4px)",
          }}
          onClick={() => setIsOpen(false)}
        >
          <div
            style={{
              position: "fixed",
              top: "0",
              right: "0",
              height: "100vh",
              width: "320px",
              background: "linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)",
              boxShadow: "-4px 0 15px -3px rgba(0, 0, 0, 0.1)",
              transform: isOpen ? "translateX(0)" : "translateX(100%)",
              transition: "transform 0.3s ease",
              overflowY: "auto",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "20px",
                borderBottom: "1px solid #e2e8f0",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <div
                  style={{
                    background: "linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)",
                    padding: "8px",
                    borderRadius: "10px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <FaGraduationCap style={{ color: "white", fontSize: "20px" }} />
                </div>
                <div>
                  <div
                    style={{
                      color: "#1e40af",
                      fontSize: "18px",
                      fontWeight: "700",
                    }}
                  >
                    The Sunrise Education
                  </div>
                  <div
                    style={{
                      color: "#64748b",
                      fontSize: "12px",
                    }}
                  >
                    thesunriseedu.in
                  </div>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "36px",
                  height: "36px",
                  background: "#f1f5f9",
                  border: "1px solid #e2e8f0",
                  borderRadius: "8px",
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = "#e2e8f0"
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = "#f1f5f9"
                }}
              >
                <FaTimes style={{ color: "#64748b", fontSize: "16px" }} />
              </button>
            </div>

            {/* Navigation */}
            <nav style={{ padding: "20px 0" }}>
              {menuItems.map((item) => {
                const IconComponent = item.icon
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "16px",
                      color: "#475569",
                      fontWeight: "500",
                      padding: "16px 20px",
                      textDecoration: "none",
                      transition: "all 0.2s ease",
                      borderRadius: "0",
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.backgroundColor = "#f1f5f9"
                      e.target.style.color = "#1e40af"
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.backgroundColor = "transparent"
                      e.target.style.color = "#475569"
                    }}
                  >
                    <IconComponent style={{ fontSize: "20px" }} />
                    {item.label}
                  </Link>
                )
              })}
            </nav>

            {/* CTA Button */}
            <div
              style={{
                padding: "20px",
                borderTop: "1px solid #e2e8f0",
                marginTop: "auto",
              }}
            >
              <Link href="/contact" onClick={() => setIsOpen(false)} style={{ textDecoration: "none" }}>
                <button
                  style={{
                    width: "100%",
                    background: "linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)",
                    color: "white",
                    padding: "16px",
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
                  Get Started Today
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
