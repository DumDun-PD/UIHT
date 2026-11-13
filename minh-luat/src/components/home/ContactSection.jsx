import '../styles/contact.css'

export default function ContactSection() {
  return (
    <section className='contact-section' aria-labelledby='contact-title'>
      <div className='container'>
        <h2 className='contact-title text-center' id='contact-title'>LIÊN HỆ VỚI CHÚNG TÔI</h2>

        <div className='contact-content d-flex align-items-start'>


          <div className='contact-map' aria-label='Bản đồ'>
            <img src='images/map.png' height={437} />
          </div>

          <div className='contact-information'>
            <p className='contact-introduction '>Quý khách có thắc mắc hay cần tư vấn về dịch vụ, vui lòng liên hệ qua Hotline/Zalo: 09xxx.xxxxxx hoặc để lại thông tin, Minh Luật sẽ liên hệ tư vấn ban đầu miễn phí. </p>

            <div className='contact-fields' role='group' aria-label='Thông tin liên hệ tư vấn'>
              <input className='form-control contact-input' type='text' placeholder='Họ và Tên' aria-label='Họ và Tên' readOnly />
              <input className='form-control contact-input' type='email' placeholder='Email' aria-label='Email' readOnly />
              <input className='form-control contact-input' type='tel' placeholder='Số điện thoại' aria-label='Số điện thoại' readOnly />
              <div className='form-select contact-service d-flex align-items-center'>Loại dịch vụ cần tư vấn</div>
              <textarea className='form-control contact-message' placeholder='Để lại lời nhắn của bạn' aria-label='Để lại lời nhắn của bạn' readOnly />
            </div>
            <button className='btn consultation-button contact-send d-flex d-inline-flex align-items-center justify-content-center' type='button'>
              Gửi ngay<img src='images/chevron-right.svg' width={20} height={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}