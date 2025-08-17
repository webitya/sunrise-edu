"use client"
import { useState } from "react"

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
    college: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitStatus("success")
        setFormData({
          name: "",
          email: "",
          phone: "",
          course: "",
          college: "",
          message: "",
        })
      } else {
        setSubmitStatus("error")
      }
    } catch (error) {
      console.error("Error submitting form:", error)
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="card">
      <h2 style={{ fontSize: "28px", fontWeight: "600", color: "#1f2937", marginBottom: "20px" }}>Get In Touch</h2>
      <p style={{ color: "#6b7280", marginBottom: "30px", lineHeight: "1.6" }}>
        Fill out the form below and our education counselors will get back to you within 24 hours.
      </p>

      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        <div>
          <label htmlFor="name" style={{ display: "block", marginBottom: "8px", fontWeight: "500", color: "#1f2937" }}>
            Full Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            style={{
              width: "100%",
              padding: "12px 16px",
              border: "2px solid #e5f3ff",
              borderRadius: "8px",
              fontSize: "16px",
              outline: "none",
              transition: "border-color 0.3s ease",
            }}
            onFocus={(e) => (e.target.style.borderColor = "#3b82f6")}
            onBlur={(e) => (e.target.style.borderColor = "#e5f3ff")}
          />
        </div>

        <div>
          <label htmlFor="email" style={{ display: "block", marginBottom: "8px", fontWeight: "500", color: "#1f2937" }}>
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            style={{
              width: "100%",
              padding: "12px 16px",
              border: "2px solid #e5f3ff",
              borderRadius: "8px",
              fontSize: "16px",
              outline: "none",
              transition: "border-color 0.3s ease",
            }}
            onFocus={(e) => (e.target.style.borderColor = "#3b82f6")}
            onBlur={(e) => (e.target.style.borderColor = "#e5f3ff")}
          />
        </div>

        <div>
          <label htmlFor="phone" style={{ display: "block", marginBottom: "8px", fontWeight: "500", color: "#1f2937" }}>
            Phone Number *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            style={{
              width: "100%",
              padding: "12px 16px",
              border: "2px solid #e5f3ff",
              borderRadius: "8px",
              fontSize: "16px",
              outline: "none",
              transition: "border-color 0.3s ease",
            }}
            onFocus={(e) => (e.target.style.borderColor = "#3b82f6")}
            onBlur={(e) => (e.target.style.borderColor = "#e5f3ff")}
          />
        </div>

        <div>
          <label
            htmlFor="course"
            style={{ display: "block", marginBottom: "8px", fontWeight: "500", color: "#1f2937" }}
          >
            Interested Course
          </label>
          <select
            id="course"
            name="course"
            value={formData.course}
            onChange={handleChange}
            style={{
              width: "100%",
              padding: "12px 16px",
              border: "2px solid #e5f3ff",
              borderRadius: "8px",
              fontSize: "16px",
              outline: "none",
              transition: "border-color 0.3s ease",
              backgroundColor: "white",
            }}
            onFocus={(e) => (e.target.style.borderColor = "#3b82f6")}
            onBlur={(e) => (e.target.style.borderColor = "#e5f3ff")}
          >
            <option value="">Select a course</option>
            <option value="BSC & MSC">BSC & MSC</option>
            <option value="BCA">BCA</option>
            <option value="BBA">BBA</option>
            <option value="Nursing ANM">Nursing ANM</option>
            <option value="D.El.Ed">D.El.Ed</option>
            <option value="B.ED">B.ED</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div>
          <label
            htmlFor="college"
            style={{ display: "block", marginBottom: "8px", fontWeight: "500", color: "#1f2937" }}
          >
            Preferred College/University
          </label>
          <select
            id="college"
            name="college"
            value={formData.college}
            onChange={handleChange}
            style={{
              width: "100%",
              padding: "12px 16px",
              border: "2px solid #e5f3ff",
              borderRadius: "8px",
              fontSize: "16px",
              outline: "none",
              transition: "border-color 0.3s ease",
              backgroundColor: "white",
            }}
            onFocus={(e) => (e.target.style.borderColor = "#3b82f6")}
            onBlur={(e) => (e.target.style.borderColor = "#e5f3ff")}
          >
            <option value="">Select a college</option>
            <option value="Radha Govind University">Radha Govind University (Ramgarh)</option>
            <option value="Sona Devi University">Sona Devi University (Paschimi Shivam)</option>
            <option value="Durga Soren University">Durga Soren University (Deoghar)</option>
            <option value="YBN University">YBN University (Ranchi)</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div>
          <label
            htmlFor="message"
            style={{ display: "block", marginBottom: "8px", fontWeight: "500", color: "#1f2937" }}
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="4"
            style={{
              width: "100%",
              padding: "12px 16px",
              border: "2px solid #e5f3ff",
              borderRadius: "8px",
              fontSize: "16px",
              outline: "none",
              transition: "border-color 0.3s ease",
              resize: "vertical",
            }}
            onFocus={(e) => (e.target.style.borderColor = "#3b82f6")}
            onBlur={(e) => (e.target.style.borderColor = "#e5f3ff")}
            placeholder="Tell us about your educational goals and any specific questions you have..."
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="btn-primary"
          style={{
            fontSize: "18px",
            padding: "15px 30px",
            opacity: isSubmitting ? 0.7 : 1,
            cursor: isSubmitting ? "not-allowed" : "pointer",
          }}
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </button>

        {submitStatus === "success" && (
          <div
            style={{
              backgroundColor: "#dcfce7",
              color: "#166534",
              padding: "12px 16px",
              borderRadius: "8px",
              textAlign: "center",
              fontWeight: "500",
            }}
          >
            Thank you! Your message has been sent successfully. We'll get back to you within 24 hours.
          </div>
        )}

        {submitStatus === "error" && (
          <div
            style={{
              backgroundColor: "#fee2e2",
              color: "#991b1b",
              padding: "12px 16px",
              borderRadius: "8px",
              textAlign: "center",
              fontWeight: "500",
            }}
          >
            Sorry, there was an error sending your message. Please try again or contact us directly.
          </div>
        )}
      </form>
    </div>
  )
}
