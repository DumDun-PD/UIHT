import '../styles/services.css'

function ServicesCard({ title, image, featured }) {
  return (
    <article className={`service-card card border-0${featured ? ' service-card-featured' : ''}`}>
      <div className='card-body'>
        <span className='service-category rounded-pill'>Doanh nghiệp</span>
        <h3 className='service-card-title'>{title}</h3>
        <img className='service-card-image' src={image} width="368px" height="245.33px" />
        <p className='service-card-description'>Miêu tả ngắn gọn khoảng 4 dòng Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <button className='btn service-detail-button d-inline-flex align-items-center' type='button'>Xem chi tiết<span className="service-chevron" aria-hidden="true" /> </button>
      </div>
    </article>
  )
}

export default function ServiceSection() {
  return (
    <section className="services-section" id="dich-vu-minh-luat">
      <div className="container">
        <h2 className="services-title text-center">DỊCH VỤ TẠI MINH LUẬT</h2>
        <p className='services-introduction'> Minh Luật - Một vài câu giới thiệu công ty, tối đa 3 dòng. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
          fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia...
        </p>
      </div>
      <div className="services-cards d-flex align-items-center justify-content-center flex-wrap">

        <ServicesCard title={<>TƯ VẤN<br />LUẬT KẾ TOÁN</>} image="/images/a1.png" />
        <ServicesCard title={<>TƯ VẤN<br />LUẬT DOANH NGHIỆP</>} image="/images/a2.png" featured />
        <ServicesCard title={<>TƯ VẤN THÀNH LẬP<br />CÔNG TY</>} image="/images/a3.png" />
      </div>
      <div className="services-controls d-flex align-items-center justify-content-center">
        <button className='service-arrow' type='button' aria-label="Dịch vụ trước"><span className="service-chevron service-chevron-left" aria-hidden="true" /></button>
        <button className='btn consultation-button services-consultation' type='button'>Nhận  tư vấn ngay</button>
        <button className='service-arrow' type='button' aria-label="Dịch vụ tiếp theo"><span className="service-chevron service-chevron-right" aria-hidden="true" /></button>
      </div>
    </section>
  )
}
