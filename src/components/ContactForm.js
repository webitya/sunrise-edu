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
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitStatus("success")
        setFormData({ name: "", email: "", phone: "", course: "", college: "", message: "" })
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
    <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-2xl p-8 md:p-10 border border-blue-100 animate-fadeIn">
      <h2 className="text-3xl font-bold text-blue-700 mb-4">Get In Touch</h2>
      <p className="text-gray-600 mb-8 leading-relaxed">
        Fill out the form below and our education counselors will get back to you within 24 hours.
      </p>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
            Full Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-300 outline-none transition"
          />
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-300 outline-none transition"
          />
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
            Phone Number *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-300 outline-none transition"
          />
        </div>

        {/* Course */}
        <div>
          <label htmlFor="course" className="block text-sm font-medium text-gray-700 mb-2">
            Interested Course
          </label>
          <select
            id="course"
            name="course"
            value={formData.course}
            onChange={handleChange}
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-300 outline-none transition"
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

        {/* College */}
        <div>
          <label htmlFor="college" className="block text-sm font-medium text-gray-700 mb-2">
            Preferred College/University
          </label>
          <select
            id="college"
            name="college"
            value={formData.college}
            onChange={handleChange}
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-300 outline-none transition"
          >
            <option value="">Select a college</option>
            <option value="Radha Govind University">Radha Govind University (Ramgarh)</option>
            <option value="Sona Devi University">Sona Devi University (Paschimi Shivam)</option>
            <option value="Durga Soren University">Durga Soren University (Deoghar)</option>
            <option value="YBN University">YBN University (Ranchi)</option>
            <option value="Other">Other</option>
          </select>
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="4"
            placeholder="Tell us about your educational goals and any specific questions you have..."
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-300 outline-none transition resize-y"
          />
        </div>

        {/* Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full py-3 text-lg font-medium rounded-lg text-white shadow-md transform transition ${
            isSubmitting
              ? "bg-blue-400 cursor-not-allowed"
              : "bg-blue-600 hover:bg-blue-700 hover:scale-[1.02]"
          }`}
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </button>

        {/* Status Messages */}
        {submitStatus === "success" && (
          <div className="bg-green-100 text-green-700 py-3 px-4 rounded-lg text-center font-medium animate-fadeIn">
            ✅ Thank you! Your message has been sent successfully.
          </div>
        )}
        {submitStatus === "error" && (
          <div className="bg-red-100 text-red-700 py-3 px-4 rounded-lg text-center font-medium animate-fadeIn">
            ❌ Sorry, there was an error sending your message. Please try again.
          </div>
        )}
      </form>
    </div>
  )
}
