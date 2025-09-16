"use client"
import { Mail, Phone, MessageCircle, Globe } from "lucide-react"

export default function ContactInfo() {
  const contactMethods = [
    {
      icon: <Mail className="w-8 h-8 text-blue-600" />,
      title: "Email Us",
      info: "thesunriseedu.in@gmail.com",
      description: "Send us an email anytime",
      action: "mailto:thesunriseedu.in@gmail.com",
    },
    {
      icon: <Phone className="w-8 h-8 text-blue-600" />,
      title: "Call Us",
      info: "+91-7004403549",
      description: "Mon-Sat, 9:00 AM - 6:00 PM",
      action: "tel:+917004403549",
    },
    {
      icon: <MessageCircle className="w-8 h-8 text-blue-600" />,
      title: "WhatsApp",
      info: "+91-7004403549",
      description: "Quick responses via WhatsApp",
      action: "https://wa.me/917004403549",
    },
    {
      icon: <Globe className="w-8 h-8 text-blue-600" />,
      title: "Website",
      info: "thesunriseedu.in",
      description: "Visit our official website",
      action: "https://thesunriseedu.in",
    },
  ]

  return (
    <section className="bg-gradient-to-br from-blue-50 to-blue-100 py-16 px-6 pr-8 rounded-2xl shadow-lg">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <h2 className="text-3xl font-bold text-blue-800 text-center mb-4">Contact Information</h2>
        <p className="text-gray-600 text-center mb-10 max-w-2xl mx-auto">
          Reach out to us through any of the following methods. Our team is here to help you achieve your
          educational goals.
        </p>

        {/* Contact Methods */}
        <div className="grid gap-6 md:grid-cols-2">
          {contactMethods.map((method, index) => (
            <a
              key={index}
              href={method.action}
              target={method.action.startsWith("http") ? "_blank" : "_self"}
              rel={method.action.startsWith("http") ? "noopener noreferrer" : ""}
              className="bg-white p-6 rounded-xl flex items-center gap-4 shadow-md hover:shadow-xl 
                         hover:-translate-y-1 transform transition-all duration-300 border border-gray-100"
            >
              <div className="p-4 bg-blue-100 rounded-full">{method.icon}</div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800">{method.title}</h3>
                <p className="text-blue-600 font-medium">{method.info}</p>
                <p className="text-gray-500 text-sm">{method.description}</p>
              </div>
            </a>
          ))}
        </div>

        {/* Office Hours */}
        <div className="bg-white p-6 rounded-xl shadow-md mt-10 border border-gray-100">
          <h3 className="text-xl font-semibold text-blue-800 mb-4">Office Hours</h3>
          <div className="space-y-2">
            <div className="flex justify-between text-gray-700">
              <span>Monday - Friday:</span>
              <span className="font-medium">9:00 AM - 6:00 PM</span>
            </div>
            <div className="flex justify-between text-gray-700">
              <span>Saturday:</span>
              <span className="font-medium">9:00 AM - 4:00 PM</span>
            </div>
            <div className="flex justify-between text-gray-700">
              <span>Sunday:</span>
              <span className="font-medium">Closed</span>
            </div>
          </div>
        </div>

        {/* Emergency Contact */}
        <div className="bg-yellow-50 p-6 rounded-xl shadow-md mt-6 border border-yellow-300">
          <h3 className="text-lg font-semibold text-yellow-800 mb-2">Emergency Contact</h3>
          <p className="text-yellow-700 text-sm mb-2">
            For urgent admission deadlines or time-sensitive queries:
          </p>
          <p className="font-bold text-yellow-900">+91-9876543221 (24/7)</p>
        </div>
      </div>
    </section>
  )
}
