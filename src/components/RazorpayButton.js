"use client"
import { useState } from "react"
import { useRouter } from "next/navigation"

export default function RazorpayButton({
  amount = 1000,
  currency = "INR",
  name = "The Sunrise Education",
  description = "Payment for educational services",
  buttonText = "Pay Now",
  buttonStyle = {},
  onSuccess = () => {},
  onFailure = () => {},
  disabled = false,
  userDetails = {},
}) {
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const handlePayment = async () => {
    setIsLoading(true)

    try {
      // Create order on server
      const orderResponse = await fetch("/api/razorpay/create-order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          amount: amount * 100, // Convert to paise
          currency,
          receipt: `receipt_${Date.now()}`,
        }),
      })

      const orderData = await orderResponse.json()

      if (!orderResponse.ok) {
        throw new Error(orderData.error || "Failed to create order")
      }

      // Initialize Razorpay
      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
        amount: orderData.amount,
        currency: orderData.currency,
        name: name,
        description: description,
        order_id: orderData.id,
        handler: async (response) => {
          try {
            // Verify payment on server
            const verifyResponse = await fetch("/api/razorpay/verify-payment", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                razorpay_order_id: response.razorpay_order_id,
                razorpay_payment_id: response.razorpay_payment_id,
                razorpay_signature: response.razorpay_signature,
                userDetails: {
                  ...userDetails,
                  amount: amount,
                },
              }),
            })

            const verifyData = await verifyResponse.json()

            if (verifyResponse.ok && verifyData.success) {
              const successUrl = `/payment-success?payment_id=${response.razorpay_payment_id}&order_id=${response.razorpay_order_id}&amount=${amount}`
              router.push(successUrl)

              onSuccess({
                paymentId: response.razorpay_payment_id,
                orderId: response.razorpay_order_id,
                signature: response.razorpay_signature,
              })
            } else {
              throw new Error(verifyData.error || "Payment verification failed")
            }
          } catch (error) {
            console.error("Payment verification error:", error)
            onFailure(error.message)
          } finally {
            setIsLoading(false)
          }
        },
        prefill: {
          name: userDetails.name || "",
          email: userDetails.email || "",
          contact: userDetails.phone || "",
        },
        notes: {
          address: "The Sunrise Education Office",
        },
        theme: {
          color: "#3b82f6",
        },
        modal: {
          ondismiss: () => {
            setIsLoading(false)
            onFailure("Payment cancelled by user")
          },
        },
      }

      // Load Razorpay script if not already loaded
      if (!window.Razorpay) {
        const script = document.createElement("script")
        script.src = "https://checkout.razorpay.com/v1/checkout.js"
        script.onload = () => {
          const rzp = new window.Razorpay(options)
          rzp.open()
        }
        script.onerror = () => {
          setIsLoading(false)
          onFailure("Failed to load Razorpay")
        }
        document.body.appendChild(script)
      } else {
        const rzp = new window.Razorpay(options)
        rzp.open()
      }
    } catch (error) {
      console.error("Payment initiation error:", error)
      setIsLoading(false)
      onFailure(error.message)
    }
  }

  return (
    <button
      onClick={handlePayment}
      disabled={disabled || isLoading}
      className="btn-primary"
      style={{
        opacity: disabled || isLoading ? 0.7 : 1,
        cursor: disabled || isLoading ? "not-allowed" : "pointer",
        ...buttonStyle,
      }}
    >
      {isLoading ? "Processing..." : buttonText}
    </button>
  )
}
