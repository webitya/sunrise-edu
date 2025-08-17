"use client"

import { useState } from "react"
import Link from "next/link"
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from "./ui/sheet"

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)

  const menuItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/courses", label: "Courses" },
    { href: "/colleges", label: "Colleges" },
    { href: "/team", label: "Our Team" },
    { href: "/pay-fee", label: "Pay Fee" },
    { href: "/contact", label: "Contact Us" },
  ]

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <button
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1"
          aria-label="Open menu"
        >
          <span className="w-6 h-0.5 bg-gray-700 transition-all"></span>
          <span className="w-6 h-0.5 bg-gray-700 transition-all"></span>
          <span className="w-6 h-0.5 bg-gray-700 transition-all"></span>
        </button>
      </SheetTrigger>

      <SheetContent side="right" className="w-80 bg-white">
        <SheetHeader>
          <SheetTitle className="text-left">
            <div className="text-blue-600 text-xl font-bold">The Sunrise Education</div>
            <div className="text-gray-500 text-sm">thesunriseedu.in</div>
          </SheetTitle>
        </SheetHeader>

        <nav className="flex flex-col space-y-4 mt-8">
          {menuItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="text-gray-700 hover:text-blue-600 font-medium py-3 px-4 rounded-lg hover:bg-blue-50 transition-all"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="mt-8 pt-8 border-t border-gray-200">
          <Link href="/contact" onClick={() => setIsOpen(false)}>
            <button className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-blue-700 transition-colors">
              Get Started
            </button>
          </Link>
        </div>
      </SheetContent>
    </Sheet>
  )
}
