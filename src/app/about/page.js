import Header from "../../components/Header"
import Footer from "../../components/Footer"

export const metadata = {
  title: "About Us - The Sunrise Education | Leading Education Consultancy",
  description:
    "Learn about The Sunrise Education, founded by Ashish, Surendra Kumar, and Aditya Kumar. We provide comprehensive educational guidance and admission support across India.",
  keywords: "about sunrise education, education consultancy, founders, mission, vision, educational guidance",
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="pt-01">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About The Sunrise Education</h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Empowering students to achieve their educational dreams through personalized guidance and comprehensive
              support
            </p>
          </div>
        </section>

        {/* Mission & Vision */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
  <div className="max-w-6xl mx-auto px-6">
    <div className="grid md:grid-cols-2 gap-12">
      
      {/* Mission Card */}
      <div className="bg-white rounded-2xl shadow-md p-10 text-center hover:shadow-xl hover:-translate-y-2 transition duration-500">
        <div className="bg-gradient-to-r from-blue-500 to-blue-700 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 transform transition duration-500 hover:scale-110">
          <svg
            className="w-10 h-10 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        </div>
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Mission</h2>
        <p className="text-gray-600 text-lg leading-relaxed">
          To provide accessible, affordable, and quality education opportunities to students across India.
          We bridge the gap between students and their dream institutions through personalized counseling
          and comprehensive admission support.
        </p>
      </div>

      {/* Vision Card */}
      <div className="bg-white rounded-2xl shadow-md p-10 text-center hover:shadow-xl hover:-translate-y-2 transition duration-500">
        <div className="bg-gradient-to-r from-indigo-500 to-purple-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 transform transition duration-500 hover:scale-110">
          <svg
            className="w-10 h-10 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
            />
          </svg>
        </div>
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Vision</h2>
        <p className="text-gray-600 text-lg leading-relaxed">
          To become India’s most trusted education consultancy, known for transparency, integrity, and
          student success. We envision a future where every student has access to quality education
          regardless of their background or financial constraints.
        </p>
      </div>

    </div>
  </div>
</section>


        {/* Our Story */}
     <section className="py-16 bg-gray-50">
  <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
    {/* Left Content */}
    <div>
      <div className="text-left mb-8 md:text-left text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Our Story</h2>
        <div className="w-24 h-1 bg-blue-600 mb-8 mx-auto md:mx-0"></div>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
        <p className="text-gray-700 text-lg leading-relaxed mb-6">
          The Sunrise Education was founded with a simple yet powerful vision: to make quality education
          accessible to every student in India. Our journey began when our founders recognized the challenges
          students face in navigating the complex landscape of higher education admissions.
        </p>

        <p className="text-gray-700 text-lg leading-relaxed mb-6">
          With years of combined experience in education and student counseling, we have successfully guided
          thousands of students toward their academic goals. Our comprehensive approach includes personalized
          counseling, scholarship assistance, and ongoing support throughout the admission process.
        </p>

        <p className="text-gray-700 text-lg leading-relaxed">
          Today, we partner with leading universities across Jharkhand, Bengal, UP, and other states, offering a
          wide range of courses from undergraduate to postgraduate programs. Our commitment to transparency and
          student success has made us a trusted name in educational consultancy.
        </p>
      </div>
    </div>

    {/* Right Image */}
    <div className="relative group">
      <img
        src="/aboutus.png"
        alt="Our Story"
        className="rounded-2xl shadow-lg transform transition duration-500 group-hover:scale-105 group-hover:shadow-2xl"
      />
      <div className="absolute inset-0 bg-blue-600 opacity-0 group-hover:opacity-20 rounded-2xl transition duration-500"></div>
    </div>
  </div>
</section>


        {/* Leadership Team */}
<section className="py-16 bg-gray-50">
  <div className="max-w-6xl mx-auto px-4">
    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Our Leadership Team</h2>
      <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
      <p className="text-gray-600 text-lg max-w-2xl mx-auto">
        Meet the dedicated professionals who lead The Sunrise Education with passion and expertise
      </p>
    </div>

    <div className="grid md:grid-cols-3 gap-8">
      {/* Founder 1 */}
      <div className="text-center bg-white rounded-lg p-8 shadow hover:shadow-xl transition duration-500">
        <div className="w-32 h-32 bg-blue-200 rounded-full mx-auto mb-6 flex items-center justify-center">
          <span className="text-3xl font-bold text-blue-600">A</span>
        </div>
        <h3 className="text-2xl font-bold text-gray-800 mb-2">Ashish</h3>
        <p className="text-blue-600 font-semibold mb-4">Co-Founder & Partner</p>
        <p className="text-gray-600 leading-relaxed">
          Visionary leader with extensive experience in educational planning and student mentorship. Passionate
          about creating opportunities for students from all backgrounds.
        </p>
      </div>

      {/* Manager */}
      <div className="text-center bg-white rounded-lg p-8 shadow hover:shadow-xl transition duration-500">
        <div className="w-32 h-32 bg-green-200 rounded-full mx-auto mb-6 flex items-center justify-center">
          <span className="text-3xl font-bold text-green-600">S</span>
        </div>
        <h3 className="text-2xl font-bold text-gray-800 mb-2">Surendra Kumar</h3>
        <p className="text-green-600 font-semibold mb-4">Operations Manager</p>
        <p className="text-gray-600 leading-relaxed">
          Expert in operations management and student services. Ensures smooth processes and maintains high
          standards of service delivery across all programs.
        </p>
      </div>

      {/* Academic Director */}
      <div className="text-center bg-white rounded-lg p-8 shadow hover:shadow-xl transition duration-500">
        <div className="w-32 h-32 bg-purple-200 rounded-full mx-auto mb-6 flex items-center justify-center">
          <span className="text-3xl font-bold text-purple-600">A</span>
        </div>
        <h3 className="text-2xl font-bold text-gray-800 mb-2">Aditya Kumar</h3>
        <p className="text-purple-600 font-semibold mb-4">Academic Director</p>
        <p className="text-gray-600 leading-relaxed">
          Dedicated academic professional focused on curriculum development and educational excellence.
          Specializes in matching students with the right academic programs.
        </p>
      </div>
    </div>
  </div>
</section>

        {/* Why Choose Us */}
        <section className="py-16 bg-blue-50">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Why Choose The Sunrise Education?</h2>
              <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">100% Transparency</h3>
                <p className="text-gray-600">
                  Clear communication and honest guidance throughout your educational journey
                </p>
              </div>

              <div className="text-center">
                <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Scholarship Support</h3>
                <p className="text-gray-600">Maximum scholarship opportunities to make education affordable for all</p>
              </div>

              <div className="text-center">
                <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Expert Counseling</h3>
                <p className="text-gray-600">Personalized guidance from experienced education professionals</p>
              </div>

              <div className="text-center">
                <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">University Partners</h3>
                <p className="text-gray-600">Direct partnerships with top universities across multiple states</p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Educational Journey?</h2>
            <p className="text-xl mb-8 opacity-90">
              Join thousands of successful students who have achieved their dreams with The Sunrise Education
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Get Free Consultation
              </a>
              <a
                href="/courses"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                Explore Courses
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
