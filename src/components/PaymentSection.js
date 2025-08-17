"use client"
import { useState } from "react"
import RazorpayButton from "./RazorpayButton"

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
    <section className="py-12 sm:py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Pay Course Fee</h2>
          <p className="text-base sm:text-lg text-gray-600 mb-8 sm:mb-12 leading-relaxed">
            Pay your course fees securely online. Select your fee amount or enter a custom amount for admission charges,
            semester fees, or other educational expenses.
          </p>

          <div className="bg-white rounded-xl shadow-lg border border-blue-50 p-6 sm:p-8 max-w-lg mx-auto">
            <div className="mb-8">
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-6">Student Details</h3>
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block mb-2 font-medium text-gray-900 text-left">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={userDetails.name}
                    onChange={handleUserDetailsChange}
                    placeholder="Enter your full name"
                    required
                    className="w-full px-4 py-3 border-2 border-blue-100 rounded-lg text-base outline-none transition-colors focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block mb-2 font-medium text-gray-900 text-left">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={userDetails.email}
                    onChange={handleUserDetailsChange}
                    placeholder="Enter your email address"
                    required
                    className="w-full px-4 py-3 border-2 border-blue-100 rounded-lg text-base outline-none transition-colors focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block mb-2 font-medium text-gray-900 text-left">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={userDetails.phone}
                    onChange={handleUserDetailsChange}
                    placeholder="Enter your phone number"
                    required
                    className="w-full px-4 py-3 border-2 border-blue-100 rounded-lg text-base outline-none transition-colors focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                  />
                </div>

                <div>
                  <label htmlFor="course" className="block mb-2 font-medium text-gray-900 text-left">
                    Course (Optional)
                  </label>
                  <input
                    type="text"
                    id="course"
                    name="course"
                    value={userDetails.course}
                    onChange={handleUserDetailsChange}
                    placeholder="Enter course name"
                    className="w-full px-4 py-3 border-2 border-blue-100 rounded-lg text-base outline-none transition-colors focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                  />
                </div>
              </div>
            </div>

            {/* Amount Selection */}
            <div className="mb-8">
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-6">Select Fee Amount</h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
                {predefinedAmounts.map((amount) => (
                  <button
                    key={amount}
                    onClick={() => handleAmountSelect(amount)}
                    className={`py-3 px-4 text-sm font-medium rounded-lg transition-colors ${
                      selectedAmount === amount && !customAmount
                        ? "bg-blue-600 text-white"
                        : "bg-blue-50 text-blue-600 border border-blue-200 hover:bg-blue-100"
                    }`}
                  >
                    ₹{amount.toLocaleString()}
                  </button>
                ))}
              </div>

              <div>
                <label htmlFor="customAmount" className="block mb-2 font-medium text-gray-900 text-left">
                  Custom Amount
                </label>
                <input
                  type="number"
                  id="customAmount"
                  value={customAmount}
                  onChange={handleCustomAmountChange}
                  placeholder="Enter fee amount"
                  min="1"
                  className="w-full px-4 py-3 border-2 border-blue-100 rounded-lg text-base outline-none transition-colors focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                />
              </div>
            </div>

            {/* Payment Button */}
            <div className="mb-6">
              <RazorpayButton
                amount={selectedAmount}
                name="The Sunrise Education"
                description="Course fee payment"
                buttonText={`Pay Fee ₹${selectedAmount.toLocaleString()}`}
                buttonStyle={{
                  width: "100%",
                  fontSize: "16px",
                  padding: "16px",
                  backgroundColor: isFormValid ? "#2563eb" : "#9ca3af",
                  color: "white",
                  border: "none",
                  borderRadius: "8px",
                  fontWeight: "600",
                  cursor: isFormValid ? "pointer" : "not-allowed",
                  transition: "background-color 0.2s",
                }}
                onSuccess={handlePaymentSuccess}
                onFailure={handlePaymentFailure}
                disabled={!isFormValid}
                userDetails={userDetails}
              />
              {!isFormValid && (
                <p className="text-red-600 text-sm mt-2 text-center">
                  Please fill in all required fields to proceed with payment
                </p>
              )}
            </div>

            {/* Payment Status */}
            {paymentStatus && (
              <div
                className={`p-4 rounded-lg text-center font-medium mb-6 ${
                  paymentStatus.type === "success" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                }`}
              >
                {paymentStatus.message}
              </div>
            )}

            {/* Trust Indicators */}
            <div className="text-center">
              <p className="text-gray-600 text-sm mb-2">🔒 Secure payment powered by Razorpay</p>
              <p className="text-gray-500 text-xs">
                Your fee payment is processed securely. Keep your payment receipt for future reference.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
