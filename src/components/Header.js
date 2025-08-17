"use client"

import Link from "next/link"
import MobileMenu from "./MobileMenu"

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-blue-50 to-white border-b border-blue-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex justify-between items-center py-4">
          <div className="flex-shrink-0">
            <Link href="/" className="block">
              <h1 className="text-blue-600 text-xl sm:text-2xl lg:text-3xl font-bold leading-tight">
                The Sunrise Education
              </h1>
              <p className="text-gray-500 text-xs sm:text-sm">thesunriseedu.in</p>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Home
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              About Us
            </Link>
            <Link href="/courses" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Courses
            </Link>
            <Link href="/colleges" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Colleges
            </Link>
            <Link href="/team" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Our Team
            </Link>
            <Link href="/pay-fee" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Pay Fee
            </Link>
            <Link href="/contact">
              <button className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors">
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
