"use client"

import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { useState, useEffect } from "react"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-white/90 backdrop-blur-md shadow-lg py-2" : "bg-transparent py-4"
      }`}
    >
      {/* Container with less padding so logo stays left */}
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-2">
        <nav className="flex justify-between items-center">
          {/* Logo + Title shifted left */}
          <div className="flex-shrink-0 flex items-center space-x-2 mr-auto">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="/logo.png"
                alt="The Sunrise Education Logo"
                width={42}
                height={42}
                className="w-10 h-10 object-contain"
                priority
              />
              <h1 className="text-blue-600 text-xl sm:text-2xl lg:text-3xl font-extrabold tracking-tight hover:text-blue-700 transition-colors">
                The Sunrise Education
              </h1>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8 animate-fade-in">
            <Link href="/" className="nav-link">
              Home
            </Link>
            <Link href="/about" className="nav-link">
              About Us
            </Link>
            <Link href="/courses" className="nav-link">
              Courses
            </Link>
            <Link href="/colleges" className="nav-link">
              Colleges
            </Link>
            <Link href="/team" className="nav-link">
              Our Team
            </Link>
            <Link href="/pay-fee" className="nav-link">
              Pay Fee
            </Link>
            <Link href="/contact">
              <button className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-2 rounded-full font-medium shadow hover:shadow-xl transform hover:scale-105 transition-all">
                Contact Us
              </button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center ml-4">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-blue-600 focus:outline-none transition-transform duration-300"
            >
              {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        </nav>

        {/* Mobile Menu Dropdown */}
        {isOpen && (
          <div className="md:hidden mt-4 bg-white rounded-lg shadow-lg p-6 space-y-4 animate-slide-down">
            <Link href="/" className="block nav-link" onClick={() => setIsOpen(false)}>
              Home
            </Link>
            <Link href="/about" className="block nav-link" onClick={() => setIsOpen(false)}>
              About Us
            </Link>
            <Link href="/courses" className="block nav-link" onClick={() => setIsOpen(false)}>
              Courses
            </Link>
            <Link href="/colleges" className="block nav-link" onClick={() => setIsOpen(false)}>
              Colleges
            </Link>
            <Link href="/team" className="block nav-link" onClick={() => setIsOpen(false)}>
              Our Team
            </Link>
            <Link href="/pay-fee" className="block nav-link" onClick={() => setIsOpen(false)}>
              Pay Fee
            </Link>
            <Link href="/contact" onClick={() => setIsOpen(false)}>
              <button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-2 rounded-full font-medium shadow hover:shadow-xl transform hover:scale-105 transition-all">
                Contact Us
              </button>
            </Link>
          </div>
        )}
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        .nav-link {
          @apply text-gray-700 hover:text-blue-600 font-medium transition-colors;
        }
        .animate-fade-in {
          animation: fadeIn 0.6s ease-in-out;
        }
        .animate-slide-down {
          animation: slideDown 0.4s ease forwards;
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </header>
  )
}
