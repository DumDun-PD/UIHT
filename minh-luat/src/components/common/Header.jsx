

import '../styles/header.css'

function NavigationLinks() {
  return (
    <>
      <a className="nav-link" href="#gioi-thieu">Giới thiệu</a>
      <a className="nav-link" href="#dich-vu-minh-luat">Tư vấn doanh nghiệp</a>
      <details className="services-menu">
        <summary className="nav-link">Dịch vụ khác <span className="menu-chevron" /></summary>
        <div className="services-dropdown">
          <a href="#dich-vu-minh-luat">Tư vấn luật doanh nghiệp</a>
          <a href="#dich-vu-minh-luat">Tư vấn luật thuế</a>
        </div>
      </details>
      <span className="nav-link nav-placeholder" aria-disabled="true">Tin tức</span>
    </>
  )
}

export default function Header() {
  return (
    <header className="site-header">
      <div className="container d-flex align-items-center justify-content-between">
        <a className="brand d-flex align-items-center text-decoration-none" href="#trang-chu" aria-label="Minh Luật - Trang chủ">
          <svg className="brand-mark" viewBox="0 0 48 52" fill="none" aria-hidden="true">
            <g stroke="currentColor" strokeLinejoin="miter">
              <path d="M2 39V14L24 2l22 12v25M7 42V17L24 8l17 9v25M12 19v27l-5-3M36 19v27l5-3M16 19v23l8 5 8-5V19M16 47l8 4 8-4" strokeWidth="2" />
              <path d="M21 10h6M24 8v12M19 14h10M21 14l-3 5h6l-3-5Zm6 0-3 5h6l-3-5ZM21 22h6M24 20v4" strokeWidth="1" />
              <path d="m24 24 8 4v9l-8 5-8-5v-9l8-4Z" strokeWidth="1.4" />
              <path d="m24 28 4 2v5l-4 3-4-3v-5l4-2ZM24 28v10M20 30l4 3 4-3M18 40l-2 3m14-3 2 3M21 44h6" strokeWidth="1" />
            </g>
          </svg>
          <span className="brand-copy">
            <span className="brand-name">MINH LUAT</span>
            <span className="brand-tagline">Hiệu quả lan toả niềm tin</span>
          </span>
        </a>
        <nav className="desktop-navigation align-items-center" aria-label="Điều hướng chính">
          <NavigationLinks />
        </nav>
        <a className="btn consultation-button header-consultation" href="#tu-van">Liên hệ tư vấn</a>
      </div>
    </header>
  )
}
