import '../styles/news.css'

export default function NewSection() {
  return (
    <section>
      <div>
        <h2>TIN TỨC MỚI</h2>
        <div>
          <button><img src='images/chevron-right.svg' /></button>
          <div>
            <article>
              <div>
                {/* <img></img> */}
                <div>
                  <p>Tư vấn doanh nghiệp</p>
                  <h3>Theo luật mới, doanh nghiệp phải có nghĩa vụ gì từ tháng 7?</h3>
                  <p>Hiển thị 3 dòng ... Tôi mới thành lập doanh nghiệp với mô hình công ty trách nhiệm hữu hạn một thành viên mới được ba tháng và còn khá bỡ ngỡ trong việc cập nhật chính sách pháp luật mới về doanh nghiệp.</p>
                </div>
              </div>
            </article>
          </div>
          <button><img src='images/chevron-left.svg' /></button>
        </div>
      </div>
    </section>
  );
}