import Header from "../components/Header"
import Footer from "../components/Footer"
import HeroSection from "../components/HeroSection"
import FeaturedCourses from "../components/FeaturedCourses"
import WhyChooseUs from "../components/WhyChooseUs"
import StatsSection from "../components/StatsSection"

export default function HomePage() {
  return (
    <div>
      <Header />
      <main>
        <HeroSection />
        <FeaturedCourses />
        <WhyChooseUs />
        <StatsSection />
      </main>
      <Footer />
    </div>
  )
}
