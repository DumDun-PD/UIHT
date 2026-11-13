import '../styles/contact.css'

export default function ContactSection() {
  return (
    <section>
      <div>
        <h2>LIÊN HỆ VỚI CHÚNG TÔI</h2>
        <div>
          <div>

          </div>
          <div>
            <p>Quý khách có thắc mắc hay cần tư vấn về dịch vụ, vui lòng liên hệ qua Hotline/Zalo: 09xxx.xxxxxx hoặc để lại thông tin, Minh Luật sẽ liên hệ tư vấn ban đầu miễn phí. </p>
            <div>
              <input type='text' placeholder='Họ và Tên' aria-label='Họ và Tên' readOnly />
              <input type='email' placeholder='Email' aria-label='Email' readOnly />
              <input type='tel' placeholder='Số điện thoại' aria-label='Số điện thoại' readOnly />
              <div>Loại dịch vụ cần tư vấn<img src='images/chevron-down.svg' /></div>
              <textarea type='text' placeholder='Để lại lời nhắn của bạn' aria-label='Họ và Tên' readOnly />
            </div>
            <button>Gửi ngay<img src='images/chevron-right.svg' /></button>
          </div>
        </div>
      </div>
    </section>
  )
}