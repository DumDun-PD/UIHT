
import '../styles/about.css';

export default function AboutSection() {
  return (
    <section className="about-section">
      <div className="container">
        <h2 className="about-title text-center" id="about-title">VỀ CHÚNG TÔI</h2>
        <div className="about-tabs d-flex align-items-center" aria-label="Các mục giới thiệu">
          <button className="about-tab about-tab-active">Về Minh Luật</button>
          <button className="about-tab">Đôi ngũ nhân sự </button>
          <button className="about-tab">Giấy phép hoạt động</button>
        </div>

        <div className="about-content d-flex align-items-start">
          <div className="about-copy">
            <h3 className="about-company">CÔNG TY THHH MINH LUẬT</h3>
            <p className="about-tagline">HIỆU QUẢ LAN TỎA LIỀM TIN</p>
            <p className="about-description">Giới thiệu công ty Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <button className="btn consultation-button about-consultation" type="button">Tư vấn miễn phí</button>
          </div>

          <div className="about-video-preview">
            <img src="/images/ab3.png" alt="Ảnh minh họa " width="611px" height="344px" />
            <button className=" about-play-button d-flex align-items-center justify-content-center" type="button" aria-label="Phát video giới thiệu">
              <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" fill="currentColor" class="bi bi-play-circle-fill" viewBox="0 0 16 16">
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814z" />
              </svg>
            </button>
          </div>
        </div>
      </div>

    </section>
  )
}