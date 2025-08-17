import { FaUsers, FaUniversity, FaTrophy, FaClock } from "react-icons/fa"

export default function StatsSection() {
  const stats = [
    {
      number: "500+",
      label: "Students Successfully Placed",
      icon: <FaUsers className="text-3xl text-white mb-2" />,
      color: "from-blue-500 to-blue-600",
    },
    {
      number: "50+",
      label: "Partner Universities",
      icon: <FaUniversity className="text-3xl text-white mb-2" />,
      color: "from-green-500 to-green-600",
    },
    {
      number: "95%",
      label: "Success Rate",
      icon: <FaTrophy className="text-3xl text-white mb-2" />,
      color: "from-yellow-500 to-yellow-600",
    },
    {
      number: "10+",
      label: "Years of Experience",
      icon: <FaClock className="text-3xl text-white mb-2" />,
      color: "from-purple-500 to-purple-600",
    },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 relative overflow-hidden">
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">Our Achievements</h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Numbers that speak for our commitment to excellence in education consulting.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div
                className={`bg-gradient-to-br ${stat.color} rounded-2xl p-8 shadow-2xl transform hover:scale-105 transition-all duration-300 border border-white/20`}
              >
                <div className="flex justify-center">{stat.icon}</div>
                <h3 className="text-4xl sm:text-5xl font-bold text-white mb-2 drop-shadow-lg">{stat.number}</h3>
                <p className="text-white/90 font-medium text-lg">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
