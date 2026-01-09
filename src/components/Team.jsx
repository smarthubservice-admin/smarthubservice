import React from 'react'

export default function Team() {
  return (
    <section id="team" className="team-section">
      <div className="container">
        <div className="row align-items-center mb-5">
          <div className="col-lg-8">
            <h2 className="section-title" data-aos="fade-right">Meet our team of<br />Creative Expert.</h2>
            <p className="section-description" data-aos="fade-right" data-aos-delay="100">AI systems can analyze data, recognize patterns, make decisions, and even adapt and improve over time.</p>
          </div>
          <div className="col-lg-4 text-right" data-aos="fade-left">
            <button className="team-nav-btn"><i className="fa fa-arrow-left"></i></button>
            <button className="team-nav-btn"><i className="fa fa-arrow-right"></i></button>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4" data-aos="fade-up" data-aos-delay="0">
            <div className="team-card">
              <img src="/img/akhilesh.jpg" alt="Akhilesh" />
              <div className="team-info">
                <h4>Akhilesh</h4>
                <p className="team-role">CEO, Smart Hub Service</p>
              </div>
            </div>
          </div>
          <div className="col-md-4" data-aos="fade-up" data-aos-delay="200">
            <div className="team-card">
              <img src="/img/Pooja.png" alt="Pooja" />
              <div className="team-info">
                <h4>Pooja</h4>
                <p className="team-role">Marketing and Social Media Head</p>
              </div>
            </div>
          </div>
          <div className="col-md-4" data-aos="fade-up" data-aos-delay="400">
            <div className="team-card">
              <img src="/img/Akhi.png" alt="Akhi" />
              <div className="team-info">
                <h4>Akhi</h4>
                <p className="team-role">AI/ML Engineer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
