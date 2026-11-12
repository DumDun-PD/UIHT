import '../styles/faq.css'

const questions = [
  'Thủ tục để thành lập công ty gồm những giấy tờ gì?',
  'Phí dịch vụ tư vấn tại Minh Luật ra sao?',
  'Liên hệ với Minh luật bằng cách nào?',
  'Luật kế toán mới nhất quy định điều khoản gì?',
  'Dịch vụ tư vấn tại Minh Luật có được bảo mật hay không',
]

export default function FAQSection() {
  return (
    <section className="faq-section" aria-labelledby='faq-title'>
      <div className="container">
        <h2 className='faq-title text-center' id='faq-title'>CÂU HỎI THƯỜNG GẶP</h2>
        <div className='faq-list d-flex flex-column'>

          {questions.map((question, index) => (
            <article className={`faq-item${index === 0 ? ' faq-item-open' : ''}`} key={question}>

              <h3 className='faq-question d-flex align-items-center justify-content-between'>
                <span>{index + 1}. {question}</span>
                <img className="faq-chevron" src={index === 0 ? '/images/chevron-up.svg' : '/images/chevron-down.svg'} alt="" width={16} height={16} />
              </h3>
              {index === 0 && (
                <ul className="faq-answer list-unstyled">
                  <li>- Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commod</li>
                  <li>- Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commod</li>
                  <li>- Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commod</li>
                </ul>

              )}

            </article>
          ))}


        </div>
        <div className="faq-action text-center">
          <button className="btn consultation-button faq-consultation" type="button">Nhận tư vấn ngay</button>
        </div>
      </div>
    </section>
  )
}

