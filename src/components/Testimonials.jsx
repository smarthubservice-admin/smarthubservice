import React from 'react'

export default function Testimonials() {
  return (
    <section id="testimonials" className="testimonials-section">
      <div className="container">
        <h2 className="text-center section-title mb-5" data-aos="fade-up">What Our Clients Say</h2>
        <div className="row">
          <div className="col-12 col-sm-6 col-md-4" data-aos="fade-up" data-aos-delay="0">
            <div className="testimonial-card">
              <div className="testimonial-content">
                <i className="fa fa-quote-left"></i>
                <p>Smart Hub Service has completely transformed how we approach AI art. The results are consistently stunning and professional.</p>
              </div>
              <div className="testimonial-author">
                <img src="/img/avatar/avatar-9.webp" alt="Sunil" />
                <div className="author-info">
                  <h5>Sunil</h5>
                  <p>Autopart Enterprise Pvt Ltd</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4" data-aos="fade-up" data-aos-delay="200">
            <div className="testimonial-card">
              <div className="testimonial-content">
                <i className="fa fa-quote-left"></i>
                <p>The speed and quality of generation are unmatched. It's become an essential tool in our creative workflow.</p>
              </div>
              <div className="testimonial-author">
                <img src="/img/avatar/avatar-25.webp" alt="Sudarshan" />
                <div className="author-info">
                  <h5>Sudarshan</h5>
                  <p>eLibrary Director</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4" data-aos="fade-up" data-aos-delay="400">
            <div className="testimonial-card">
              <div className="testimonial-content">
                <i className="fa fa-quote-left"></i>
                <p>Outstanding customer support and a very intuitive interface. Highly recommended for any serious studio.</p>
              </div>
              <div className="testimonial-author">
                <img src="/img/avatar/avatar-24.webp" alt="Jintender" />
                <div className="author-info">
                  <h5>Jintender</h5>
                  <p>Sales Expert</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
