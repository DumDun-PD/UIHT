export default function StatsSection() {
  return (
    <section className="hero-statistics row mx-0" aria-label="Minh Luật qua những con số">
      <div className="col-3 px-0 d-flex justify-content-start">
        <div className="stat-item">
          <strong className="stat-value">5<span>+</span></strong>
          <span className="stat-label">NĂM KINH NGHIỆM</span>
        </div>
      </div>
      <div className="col-3 px-0 d-flex justify-content-center">
        <div className="stat-item">
          <strong className="stat-value">60<span>+</span></strong>
          <span className="stat-label">NHÂN SỰ</span>
        </div>
      </div>
      <div className="col-3 px-0 d-flex justify-content-center">
        <div className="stat-item">
          <strong className="stat-value">500<span>+</span></strong>
          <span className="stat-label">ĐỐI TÁC</span>
        </div>
      </div>
      <div className="col-3 px-0 d-flex justify-content-end">
        <div className="stat-item">
          <strong className="stat-value">95<span>%</span></strong>
          <span className="stat-label">TIN CẬY HÀI LÒNG</span>
        </div>
      </div>
    </section>
  )
}
