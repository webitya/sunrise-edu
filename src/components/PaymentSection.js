"use client"
import { useState } from "react"
import RazorpayButton from "./RazorpayButton"
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaGraduationCap,
  FaRupeeSign,
  FaLock,
  FaShieldAlt,
  FaCreditCard,
} from "react-icons/fa"
import { MdSecurity, MdVerifiedUser, MdPayment, MdAccountBalance } from "react-icons/md"
import { IoCheckmarkCircle, IoCard } from "react-icons/io5"

export default function PaymentSection() {
  const [selectedAmount, setSelectedAmount] = useState(3000)
  const [customAmount, setCustomAmount] = useState("")
  const [paymentStatus, setPaymentStatus] = useState(null)
  const [userDetails, setUserDetails] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
  })

  const predefinedAmounts = [3000, 6000, 9000, 12000]

  const handleAmountSelect = (amount) => {
    setSelectedAmount(amount)
    setCustomAmount("")
  }

  const handleCustomAmountChange = (e) => {
    const value = e.target.value
    setCustomAmount(value)
    if (value) {
      setSelectedAmount(Number.parseInt(value))
    }
  }

  const handleUserDetailsChange = (e) => {
    const { name, value } = e.target
    setUserDetails((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handlePaymentSuccess = (paymentData) => {
    setPaymentStatus({
      type: "success",
      message: `Payment successful! Payment ID: ${paymentData.paymentId}`,
    })
    console.log("Payment successful:", paymentData)
  }

  const handlePaymentFailure = (error) => {
    setPaymentStatus({
      type: "error",
      message: `Payment failed: ${error}`,
    })
    console.error("Payment failed:", error)
  }

  const isFormValid = userDetails.name && userDetails.email && userDetails.phone && selectedAmount > 0

  return (
    <section className="py-16 sm:py-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full mb-6">
            <FaCreditCard className="text-2xl text-white" />
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent mb-6">
            Pay Course Fee
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
            Secure online fee payment for your educational journey. Complete your admission with our trusted payment
            gateway.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/20 p-8 sm:p-10">
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center">
                  <FaUser className="text-white text-sm" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Student Information</h2>
              </div>
              <div className="grid gap-6">
                <div className="relative">
                  <label htmlFor="name" className="flex items-center gap-2 mb-3 font-semibold text-gray-800">
                    <FaUser className="text-blue-500" />
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={userDetails.name}
                    onChange={handleUserDetailsChange}
                    placeholder="Enter your complete name"
                    required
                    className="w-full px-5 py-4 bg-gray-50/50 border-2 border-gray-200 rounded-xl text-base outline-none transition-all duration-300 focus:border-blue-500 focus:bg-white focus:shadow-lg hover:border-gray-300"
                  />
                </div>
                <div className="relative">
                  <label htmlFor="email" className="flex items-center gap-2 mb-3 font-semibold text-gray-800">
                    <FaEnvelope className="text-blue-500" />
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={userDetails.email}
                    onChange={handleUserDetailsChange}
                    placeholder="your.email@example.com"
                    required
                    className="w-full px-5 py-4 bg-gray-50/50 border-2 border-gray-200 rounded-xl text-base outline-none transition-all duration-300 focus:border-blue-500 focus:bg-white focus:shadow-lg hover:border-gray-300"
                  />
                </div>
                <div className="relative">
                  <label htmlFor="phone" className="flex items-center gap-2 mb-3 font-semibold text-gray-800">
                    <FaPhone className="text-blue-500" />
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={userDetails.phone}
                    onChange={handleUserDetailsChange}
                    placeholder="+91 XXXXX XXXXX"
                    required
                    className="w-full px-5 py-4 bg-gray-50/50 border-2 border-gray-200 rounded-xl text-base outline-none transition-all duration-300 focus:border-blue-500 focus:bg-white focus:shadow-lg hover:border-gray-300"
                  />
                </div>
                <div className="relative">
                  <label htmlFor="course" className="flex items-center gap-2 mb-3 font-semibold text-gray-800">
                    <FaGraduationCap className="text-blue-500" />
                    Course Name
                  </label>
                  <input
                    type="text"
                    id="course"
                    name="course"
                    value={userDetails.course}
                    onChange={handleUserDetailsChange}
                    placeholder="e.g., BCA, MBA, B.Ed"
                    className="w-full px-5 py-4 bg-gray-50/50 border-2 border-gray-200 rounded-xl text-base outline-none transition-all duration-300 focus:border-blue-500 focus:bg-white focus:shadow-lg hover:border-gray-300"
                  />
                </div>
              </div>
            </div>
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center">
                  <FaRupeeSign className="text-white text-sm" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Fee Amount</h2>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
                {predefinedAmounts.map((amount) => (
                  <button
                    key={amount}
                    onClick={() => handleAmountSelect(amount)}
                    className={`relative py-4 px-3 text-center rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 ${
                      selectedAmount === amount && !customAmount
                        ? "bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-lg"
                        : "bg-gradient-to-r from-gray-50 to-gray-100 text-gray-700 border-2 border-gray-200 hover:border-blue-300 hover:shadow-md"
                    }`}
                  >
                    <FaRupeeSign className="inline mr-1 text-sm" />
                    {amount.toLocaleString()}
                    {selectedAmount === amount && !customAmount && (
                      <IoCheckmarkCircle className="absolute -top-2 -right-2 text-green-400 text-xl bg-white rounded-full" />
                    )}
                  </button>
                ))}
              </div>
              <div className="relative">
                <label htmlFor="customAmount" className="flex items-center gap-2 mb-3 font-semibold text-gray-800">
                  <MdPayment className="text-blue-500" />
                  Custom Amount
                </label>
                <div className="relative">
                  <FaRupeeSign className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="number"
                    id="customAmount"
                    value={customAmount}
                    onChange={handleCustomAmountChange}
                    placeholder="Enter custom amount"
                    min="1"
                    className="w-full pl-12 pr-5 py-4 bg-gray-50/50 border-2 border-gray-200 rounded-xl text-base outline-none transition-all duration-300 focus:border-blue-500 focus:bg-white focus:shadow-lg hover:border-gray-300"
                  />
                </div>
              </div>
            </div>
            <div className="mb-8">
              <RazorpayButton
                amount={selectedAmount}
                name="The Sunrise Education"
                description="Course fee payment"
                buttonText={
                  <div className="flex items-center justify-center gap-3">
                    <IoCard className="text-xl" />
                    <span>Pay Fee ₹{selectedAmount.toLocaleString()}</span>
                  </div>
                }
                buttonStyle={{
                  width: "100%",
                  fontSize: "18px",
                  padding: "18px 24px",
                  background: isFormValid ? "linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)" : "#9ca3af",
                  color: "white",
                  border: "none",
                  borderRadius: "16px",
                  fontWeight: "700",
                  cursor: isFormValid ? "pointer" : "not-allowed",
                  transition: "all 0.3s ease",
                  boxShadow: isFormValid ? "0 10px 25px rgba(59, 130, 246, 0.3)" : "none",
                  transform: isFormValid ? "translateY(0)" : "none",
                }}
                onSuccess={handlePaymentSuccess}
                onFailure={handlePaymentFailure}
                disabled={!isFormValid}
                userDetails={userDetails}
              />
              {!isFormValid && (
                <div className="flex items-center justify-center gap-2 mt-4 p-3 bg-red-50 border border-red-200 rounded-lg">
                  <MdSecurity className="text-red-500" />
                  <p className="text-red-600 text-sm font-medium">Please complete all required fields to proceed</p>
                </div>
              )}
            </div>
            {paymentStatus && (
              <div
                className={`flex items-center gap-3 p-5 rounded-xl font-semibold mb-8 ${
                  paymentStatus.type === "success"
                    ? "bg-gradient-to-r from-green-50 to-emerald-50 text-green-800 border border-green-200"
                    : "bg-gradient-to-r from-red-50 to-pink-50 text-red-800 border border-red-200"
                }`}
              >
                {paymentStatus.type === "success" ? (
                  <IoCheckmarkCircle className="text-2xl text-green-600" />
                ) : (
                  <MdSecurity className="text-2xl text-red-600" />
                )}
                <span>{paymentStatus.message}</span>
              </div>
            )}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-100">
              <div className="flex items-center justify-center gap-2 mb-4">
                <FaShieldAlt className="text-blue-600 text-xl" />
                <h3 className="text-lg font-bold text-blue-900">Secure Payment</h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
                <div className="flex flex-col items-center gap-2">
                  <MdVerifiedUser className="text-2xl text-green-600" />
                  <p className="text-sm font-medium text-gray-700">SSL Encrypted</p>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <MdAccountBalance className="text-2xl text-blue-600" />
                  <p className="text-sm font-medium text-gray-700">Bank Grade Security</p>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <FaLock className="text-2xl text-purple-600" />
                  <p className="text-sm font-medium text-gray-700">PCI Compliant</p>
                </div>
              </div>
              <p className="text-center text-gray-600 text-sm mt-4 leading-relaxed">
                Powered by Razorpay • Your payment information is encrypted and secure
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
