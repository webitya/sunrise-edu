import Link from "next/link"
import { Mail, Globe, BookOpen, Facebook, Instagram, Linkedin, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-r from-blue-700 to-blue-900 text-white mt-0 overflow-hidden">
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10 pointer-events-none"></div>
      <div className="relative max-w-7xl mx-auto px-6 py-16">
        
        {/* Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 animate-fadeInUp">
          
          {/* Brand Info */}
          <div className="transition transform hover:scale-105 duration-300">
            <h3 className="text-2xl font-bold text-yellow-300 mb-4">
              The Sunrise Education
            </h3>
            <p className="text-blue-100 mb-4 leading-relaxed">
              Leading education consultancy for college admissions and courses across India.
            </p>
            <div className="space-y-2 text-blue-100 text-sm">
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-yellow-300" /> ashishkumarraut@gmail.com
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-yellow-300" /> 7004403549
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="transition transform hover:scale-105 duration-300">
            <h4 className="text-lg font-semibold text-yellow-300 mb-4">Quick Links</h4>
            <nav className="flex flex-col space-y-3">
              <Link href="/courses" className="hover:text-yellow-300 transition-colors">Courses</Link>
              <Link href="/colleges" className="hover:text-yellow-300 transition-colors">Colleges</Link>
              <Link href="/team" className="hover:text-yellow-300 transition-colors">Our Team</Link>
              <Link href="/contact" className="hover:text-yellow-300 transition-colors">Contact Us</Link>
            </nav>
          </div>

          {/* Popular Courses */}
          <div className="transition transform hover:scale-105 duration-300">
            <h4 className="text-lg font-semibold text-yellow-300 mb-4">Popular Courses</h4>
            <div className="flex flex-col space-y-3 text-blue-100">
              <p className="flex items-center gap-2"><BookOpen className="w-4 h-4 text-yellow-300" /> BSC & MSC</p>
              <p className="flex items-center gap-2"><BookOpen className="w-4 h-4 text-yellow-300" /> BCA & BBA</p>
              <p className="flex items-center gap-2"><BookOpen className="w-4 h-4 text-yellow-300" /> Nursing ANM</p>
              <p className="flex items-center gap-2"><BookOpen className="w-4 h-4 text-yellow-300" /> B.ED & D.El.Ed</p>
            </div>
          </div>

          {/* Social Media + Contact Info */}
          <div className="transition transform hover:scale-105 duration-300">
            <h4 className="text-lg font-semibold text-yellow-300 mb-4">Follow Us</h4>
            <div className="flex space-x-4 mb-6">
              <Link href="https://www.instagram.com/kumarrautashish" target="_blank" 
                className="p-2 rounded-full bg-white/10 hover:bg-yellow-300 hover:text-blue-900 transition transform hover:scale-125 hover:shadow-xl">
                <Facebook className="w-5 h-5" />
              </Link>
              <Link href="https://www.instagram.com/kumarrautashish" target="_blank" 
                className="p-2 rounded-full bg-white/10 hover:bg-pink-500 hover:text-white transition transform hover:scale-125 hover:shadow-xl">
                <Instagram className="w-5 h-5" />
              </Link>
              <Link href="https://www.instagram.com/kumarrautashish" target="_blank" 
                className="p-2 rounded-full bg-white/10 hover:bg-blue-500 hover:text-white transition transform hover:scale-125 hover:shadow-xl">
                <Linkedin className="w-5 h-5" />
              </Link>
            </div>

            {/* Contact + Address */}
            <div className="space-y-2 text-blue-100 text-sm">
              <p className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-yellow-300" /> Commerce World, Opposite patrol pump, Matwari, Hazaribagh
              </p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-blue-600 mt-12 pt-6 text-center">
          <p className="text-blue-200 text-sm">
            © 2024 The Sunrise Education. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
