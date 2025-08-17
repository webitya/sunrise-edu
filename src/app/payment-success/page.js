"use client"

import { useEffect, useState } from "react"
import { useSearchParams } from "next/navigation"
import Link from "next/link"

export default function PaymentSuccessPage() {
  const searchParams = useSearchParams()
  const [paymentDetails, setPaymentDetails] = useState(null)

  useEffect(() => {
    const paymentId = searchParams.get("payment_id")
    const orderId = searchParams.get("order_id")
    const amount = searchParams.get("amount")

    if (paymentId && orderId) {
      setPaymentDetails({
        paymentId,
        orderId,
        amount: amount || "N/A",
        date: new Date().toLocaleDateString("en-IN"),
        time: new Date().toLocaleTimeString("en-IN"),
      })
    }
  }, [searchParams])

  const downloadReceipt = () => {
    if (!paymentDetails) return

    // Create receipt content
    const receiptContent = `
      THE SUNRISE EDUCATION
      Payment Receipt
      
      ================================
      
      Payment ID: ${paymentDetails.paymentId}
      Order ID: ${paymentDetails.orderId}
      Amount: ₹${paymentDetails.amount}
      Date: ${paymentDetails.date}
      Time: ${paymentDetails.time}
      Status: SUCCESS
      
      ================================
      
      Thank you for your payment!
      
      Contact: thesunriseedu.in@gmail.com
      Website: thesunriseedu.in
    `

    // Create and download PDF-like text file
    const element = document.createElement("a")
    const file = new Blob([receiptContent], { type: "text/plain" })
    element.href = URL.createObjectURL(file)
    element.download = `receipt-${paymentDetails.paymentId}.txt`
    document.body.appendChild(element)
    element.click()
    document.body.removeChild(element)
  }

  if (!paymentDetails) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading payment details...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Success Header */}
        <div className="bg-green-500 px-6 py-4 text-center">
          <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-2">
            <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
          </div>
          <h1 className="text-xl font-bold text-white">Payment Successful!</h1>
          <p className="text-green-100 text-sm mt-1">Your transaction has been completed</p>
        </div>

        {/* Payment Details */}
        <div className="px-6 py-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Transaction Details</h2>

          <div className="space-y-3">
            <div className="flex justify-between py-2 border-b border-gray-100">
              <span className="text-gray-600">Payment ID</span>
              <span className="font-mono text-sm text-gray-900">{paymentDetails.paymentId}</span>
            </div>

            <div className="flex justify-between py-2 border-b border-gray-100">
              <span className="text-gray-600">Order ID</span>
              <span className="font-mono text-sm text-gray-900">{paymentDetails.orderId}</span>
            </div>

            <div className="flex justify-between py-2 border-b border-gray-100">
              <span className="text-gray-600">Amount</span>
              <span className="font-semibold text-lg text-green-600">₹{paymentDetails.amount}</span>
            </div>

            <div className="flex justify-between py-2 border-b border-gray-100">
              <span className="text-gray-600">Date</span>
              <span className="text-gray-900">{paymentDetails.date}</span>
            </div>

            <div className="flex justify-between py-2 border-b border-gray-100">
              <span className="text-gray-600">Time</span>
              <span className="text-gray-900">{paymentDetails.time}</span>
            </div>

            <div className="flex justify-between py-2">
              <span className="text-gray-600">Status</span>
              <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">SUCCESS</span>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="px-6 py-4 bg-gray-50 space-y-3">
          <button
            onClick={downloadReceipt}
            className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              ></path>
            </svg>
            Download Receipt
          </button>

          <Link
            href="/"
            className="w-full bg-gray-200 text-gray-800 py-3 px-4 rounded-lg font-medium hover:bg-gray-300 transition-colors text-center block"
          >
            Back to Home
          </Link>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 bg-blue-50 text-center">
          <p className="text-sm text-blue-800">Thank you for choosing The Sunrise Education!</p>
          <p className="text-xs text-blue-600 mt-1">For any queries, contact: thesunriseedu.in@gmail.com</p>
        </div>
      </div>
    </div>
  )
}
