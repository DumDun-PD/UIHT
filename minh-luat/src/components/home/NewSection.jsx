import '../styles/news.css'

export default function NewSection() {
  return (
    <section className='news-sections'>
      <div className='container'>
        <h2 className='news-title text-center' id='news-title'>TIN TỨC MỚI</h2>
        <div className='news-content'>
          <button className='news-arrow news-arrow-prev' type='button'><img src='images/chevron-right.svg' /></button>
          <div className='news-cards d-flex'>
            <article className='news-card card'>
              <div className='news-image' role='img' />
              <div className='card-body'>
                <p className='news-category'>Tư vấn doanh nghiệp</p>
                <h3 className='news-card-title'>Theo luật mới, doanh nghiệp phải có nghĩa vụ gì từ tháng 7?</h3>
                <p className='news-description'>Hiển thị 3 dòng ... Tôi mới thành lập doanh nghiệp với mô hình công ty trách nhiệm hữu hạn một thành viên mới được ba tháng và còn khá bỡ ngỡ trong việc cập nhật chính sách pháp luật mới về doanh nghiệp.</p>
              </div>
            </article>
          </div>
          <button className='news-arrow news-arrow-next' type='button'><img src='images/chevron-left.svg' /></button>
        </div>
      </div>
    </section>
  );
}