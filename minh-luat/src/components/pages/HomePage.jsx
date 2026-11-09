import Header from '../common/Header.jsx'
import AboutSection from '../home/AboutSection.jsx'
import HeroSection from '../home/HeroSection.jsx'
import PartnerSection from '../home/PartnerSection.jsx'
import ServiceSection from '../home/ServiceSection.jsx'

export default function HomePage() {
  return (
    <>
      <div className="home-page" id="trang-chu">
        <Header />
        <HeroSection />
      </div>
      <ServiceSection />
      <AboutSection />
      <PartnerSection />
    </>
  )
}
