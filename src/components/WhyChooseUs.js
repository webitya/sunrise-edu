import {
  FaGraduationCap,
  FaHandHoldingUsd,
  FaUniversity,
  FaClipboardList,
  FaBullseye,
  FaHandshake,
} from "react-icons/fa"
import { MdVerified } from "react-icons/md"

export default function WhyChooseUs() {
  const features = [
    {
      icon: <FaGraduationCap className="text-4xl text-blue-600" />,
      title: "Expert Guidance",
      description:
        "Get personalized counseling from our experienced education consultants with 10+ years in the field.",
    },
    {
      icon: <FaHandHoldingUsd className="text-4xl text-green-600" />,
      title: "Scholarship Assistance",
      description: "We help you secure scholarships and financial aid to make quality education affordable.",
    },
    {
      icon: <FaUniversity className="text-4xl text-purple-600" />,
      title: "Top Universities",
      description: "Access to 50+ partner universities across Jharkhand, Bengal, and UP with excellent track records.",
    },
    {
      icon: <FaClipboardList className="text-4xl text-orange-600" />,
      title: "Easy Admission Process",
      description: "Streamlined admission process with complete documentation and application support.",
    },
    {
      icon: <FaBullseye className="text-4xl text-red-600" />,
      title: "Career Focused",
      description: "Courses designed with industry requirements in mind for better placement opportunities.",
    },
    {
      icon: <FaHandshake className="text-4xl text-indigo-600" />,
      title: "Ongoing Support",
      description: "Continuous support throughout your academic journey from admission to graduation.",
    },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <MdVerified className="text-3xl text-blue-600 mr-3" />
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900">Why Choose The Sunrise Education?</h2>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We are committed to providing the best educational opportunities and guidance for your bright future.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 h-full"
            >
              <div className="flex justify-center mb-6">
                <div className="bg-gray-50 rounded-full p-4 shadow-md">{feature.icon}</div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
