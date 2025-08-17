import Header from "../../components/Header"
import Footer from "../../components/Footer"
import PaymentSection from "../../components/PaymentSection"
import { FaGraduationCap, FaBookOpen, FaShieldAlt, FaCreditCard, FaLock, FaCheckCircle } from "react-icons/fa"
import { MdSecurity, MdPayment, MdSchool, MdVerifiedUser } from "react-icons/md"

export const metadata = {
  title: "Pay Fee - Student Fee Payment | The Sunrise Education",
  description:
    "Pay your course fees securely online through The Sunrise Education. Quick and easy fee payment for all courses and programs.",
  keywords: "pay fee, course fee payment, student fee, online payment, education fee",
}

export default function PayFeePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <Header />
      <main>
        <section className="relative py-20 px-4 bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50 overflow-hidden">
          <div className="absolute inset-0 bg-white/20 backdrop-blur-sm"></div>
          <div className="relative max-w-6xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full mb-8 shadow-lg">
              <MdPayment className="text-3xl text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-indigo-800 bg-clip-text text-transparent mb-6 leading-tight">
              Pay Your Course Fee
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
              Secure and convenient online fee payment for all courses. Pay your semester fees, admission charges, and
              other educational expenses quickly and safely with our trusted payment gateway.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <FaLock className="text-green-500" />
                <span>256-bit SSL Encryption</span>
              </div>
              <div className="flex items-center gap-2">
                <MdSecurity className="text-blue-500" />
                <span>PCI DSS Compliant</span>
              </div>
              <div className="flex items-center gap-2">
                <MdVerifiedUser className="text-purple-500" />
                <span>Instant Receipt</span>
              </div>
            </div>
          </div>
        </section>

        {/* Payment Section */}
        <PaymentSection />

        <section className="py-20 px-4 bg-gradient-to-b from-white to-blue-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full mb-6 shadow-lg">
                <MdSchool className="text-2xl text-white" />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 to-indigo-800 bg-clip-text text-transparent mb-4">
                Fee Structure
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
                Transparent and competitive fee structure for all our courses and services with flexible payment options
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-blue-200 hover:-translate-y-2">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  <FaGraduationCap className="text-2xl text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Admission Fee</h3>
                <p className="text-gray-600 leading-relaxed">
                  One-time admission charges for course enrollment, documentation, and initial setup
                </p>
                <div className="mt-4 flex items-center text-sm text-blue-600 font-medium">
                  <FaCheckCircle className="mr-2" />
                  One-time payment
                </div>
              </div>

              <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-indigo-200 hover:-translate-y-2">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  <FaBookOpen className="text-2xl text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Semester Fee</h3>
                <p className="text-gray-600 leading-relaxed">
                  Regular semester fees for ongoing course studies, examinations, and academic support
                </p>
                <div className="mt-4 flex items-center text-sm text-indigo-600 font-medium">
                  <FaCheckCircle className="mr-2" />
                  Per semester
                </div>
              </div>

              <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-green-200 hover:-translate-y-2">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  <FaShieldAlt className="text-2xl text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Scholarship</h3>
                <p className="text-gray-600 leading-relaxed">
                  Available scholarships can reduce your overall fee burden significantly based on merit
                </p>
                <div className="mt-4 flex items-center text-sm text-green-600 font-medium">
                  <FaCheckCircle className="mr-2" />
                  Merit-based
                </div>
              </div>

              <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-purple-200 hover:-translate-y-2">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  <FaCreditCard className="text-2xl text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Degree Fee</h3>
                <p className="text-gray-600 leading-relaxed">
                  Final degree processing, certificate issuance, and convocation charges
                </p>
                <div className="mt-4 flex items-center text-sm text-purple-600 font-medium">
                  <FaCheckCircle className="mr-2" />
                  Final payment
                </div>
              </div>
            </div>

            <div className="mt-20 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-3xl p-8 md:p-12 text-white">
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold mb-4">Secure Payment Gateway</h3>
                <p className="text-blue-100 text-lg">
                  Your payments are protected with industry-leading security measures
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="flex items-center justify-center w-12 h-12 bg-white/20 rounded-full mb-4 mx-auto">
                    <FaLock className="text-xl" />
                  </div>
                  <h4 className="font-semibold mb-2">SSL Encrypted</h4>
                  <p className="text-blue-100 text-sm">All transactions are secured with 256-bit SSL encryption</p>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center w-12 h-12 bg-white/20 rounded-full mb-4 mx-auto">
                    <MdSecurity className="text-xl" />
                  </div>
                  <h4 className="font-semibold mb-2">PCI Compliant</h4>
                  <p className="text-blue-100 text-sm">Payment Card Industry Data Security Standard compliant</p>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center w-12 h-12 bg-white/20 rounded-full mb-4 mx-auto">
                    <FaCheckCircle className="text-xl" />
                  </div>
                  <h4 className="font-semibold mb-2">Instant Receipt</h4>
                  <p className="text-blue-100 text-sm">Get instant payment confirmation and downloadable receipt</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
