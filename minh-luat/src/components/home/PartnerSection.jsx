import '../styles/partners.css'


export default function PartnerSection() {
  return (
    <section className='partners-section'>
      <div className='container'>
        <h2 className='partners-title text-center' id='partners-title'>ĐỐI TÁC & KHÁCH HÀNG</h2>
        <p className='partners-introduction text-center'>Với hơn ... năm kinh nghiệm, chúng tôi là đơn vị hàng đầu về luật doanh nghiệp và các luật kế toán. Đội ngũ hơn 50 nhân sự chuyên nghiệp, và hơn 5,000 khách hàng là niềm tự hào của chúng tôi. Cam kết mang lại giải pháp tối ưu, chúng tôi không chỉ là đối tác đáng tin cậy mà còn đồng hành trên con đường phát triển của khách hành</p>

        <div className='partners-logo d-flex align-items-center justify-content-between' aria-label='Các đối tác'>
          <img className='partner-logo logo-true' src="/images/true.svg" alt="True" />
          <img className='partner-logo logo-phunu' src="/images/phunu.svg" alt="Phụ nữ Thủ đô" />
          <img className='partner-logo logo-vtc' src="/images/vtc.svg" alt="VTC News" />
          <img className='partner-logo logo-thanhnien' src="/images/thanhnien.svg" alt="Thanh Niên" />
          <img className='partner-logo logo-dantri' src="/images/dantri.svg" alt="Dân trí" />
          <img className='partner-logo logo-vnexpress' src="/images/vnexpress.svg" alt="VnExpress" />
        </div>
      </div>

      <div className='testimonials-frame'>
        <button className='testimonials-arrow testimonial-arrow-prew' type='button' aria-label='Đánh giá trước'>
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0" />
          </svg>
        </button>
        <div className='testimonials-viewport'>
          <div className='testimonials-list d-flex'>
            <figure className='testimonial-card card'>
              <blockquote className='testimonial-text'>Từ những ngày đầu khởi nghiệp, tôi đã rất lo lắng về các thủ tục pháp lý và hệ thống sổ sách thuế. Thật may mắn khi hợp tác cùng Minh Luật. Đội ngũ ở đây đã hỗ trợ công ty tôi từ A-Z, từ việc đăng ký giấy phép kinh doanh cho đến thiết lập hệ thống kế toán ban đầu một cách bài bản. Giải pháp '2 trong 1' cả pháp lý và kế toán của Minh Luật giúp tôi tiết kiệm được rất nhiều thời gian, có thể hoàn toàn an tâm tập trung vào việc phát triển sản phẩm</blockquote>
              <figcaption className='testimonial-author d-flex align-items-center'>
                <img src='/images/ct.png' alt="Chị Thái" width={48} height={48} />
                <p><strong>Chị Thái</strong> - Giám đốc Startup Công nghệ</p>
              </figcaption>
            </figure>
            <figure className='testimonial-card card'>
              <blockquote className='testimonial-text'>Điều tôi ấn tượng nhất ở Minh Luật là sự cẩn trọng và tính cập nhật liên tục. Các chuyên viên không chỉ làm sổ sách mà còn chủ động tư vấn những thay đổi mới nhất của luật thuế.</blockquote>
              <figcaption className='testimonial-author d-flex align-items-center'>
                <img className='testimonial-avatar-hai' src='/images/ah.png' alt="Anh Hải" width={48} height={48} />
                <p><strong>Anh Hải</strong> - Giám đốc Tài Chính Công ty Sản Xuất</p>
              </figcaption>
            </figure>
            <figure className='testimonial-card card'>
              <blockquote className='testimonial-text'>Trong quá trình đàm phán các hợp đồng thương mại và nhượng quyền lớn, sự đồng hành của đội ngũ luật sư Minh Luật đã giúp chúng tôi tránh được rất nhiều rủi ro tiềm ẩn. </blockquote>
              <figcaption className='testimonial-author d-flex align-items-center'>
                <img className='testimonial-avatar-huong' src='/images/ch.png' alt="Chị Hương" width={48} height={48} />
                <p><strong>Chị Hương</strong> - Chủ xưởng may gia công tại Bắc Ninh</p>
              </figcaption>
            </figure>
            <figure className='testimonial-card card'>
              <blockquote className='testimonial-text'>Hợp tác với Minh Luật đã hơn 3 năm, tôi luôn đánh giá cao phong cách làm việc chuyên nghiệp của họ. Bất cứ khi nào công ty có biến động về nhân sự cần tư vấn luật lao động, hay có thắc mắc về dòng tiền, xuất hóa đơn, đội ngũ Minh Luật đều phản hồi cực kỳ nhanh chóng và cặn kẽ.  </blockquote>
              <figcaption className='testimonial-author d-flex align-items-center'>
                <img src='/images/al.png' alt="Anh Long" width={48} height={48} />
                <p><strong>Anh Long</strong> - Giám đốc điều hành chuỗi bán lẻ tại Cần Thơ</p>
              </figcaption>
            </figure>
          </div>
        </div>
        <button className='testimonials-arrow testimonial-arrow-next' type='button' aria-label='Đánh giá tiếp theo'>
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708" />
          </svg>
        </button>
      </div>
    </section>
  )
}
