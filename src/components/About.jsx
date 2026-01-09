import React from 'react'

export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6" data-aos="fade-right" data-aos-duration="1000">
            <img src="/img/elibrary_building.png" alt="eLibrary Business" className="about-image" />
          </div>
          <div className="col-lg-6" data-aos="fade-left" data-aos-duration="1000">
            <p className="section-tag">What Smart Hub Service Do</p>
            <h2 className="section-title">Introducing our<br />eLibrary Solution.</h2>
            <p className="section-description">
              Revolutionize library operations with our sophisticated platform. We seamlessly blend technology with the timeless essence of literature to meet modern digital needs.
            </p>
            <ul className="feature-list">
              <li><i className="fa fa-check-circle"></i> Accounts(Hubs)</li>
              <li><i className="fa fa-check-circle"></i> Members</li>
              <li><i className="fa fa-check-circle"></i> Plan managements</li>
              <li><i className="fa fa-check-circle"></i> Seat Managements</li>
            </ul>
            <a href="#services" className="btn atlas-cta mt-4">Learn More</a>
          </div>
        </div>
      </div>
    </section>
  )
}
