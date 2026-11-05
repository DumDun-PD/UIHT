import Header from '../common/Header.jsx'
import HeroSection from '../home/HeroSection.jsx'
import ServiceSection from '../home/ServiceSection.jsx'

export default function HomePage() {
  return (
    <>
      <div className="home-page" id="trang-chu">
        <Header />
        <HeroSection />
      </div>
      <ServiceSection />
    </>
  )
}
