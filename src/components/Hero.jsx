import React from 'react'

export default function Hero() {
  return (
    <section id="home" className="hero-section">
      <div className="circles">
        <ul className="circles">
          {Array.from({ length: 10 }).map((_, i) => <li key={i}></li>)}
        </ul>
      </div>
      <div className="container">
        <div className="row justify-content-center text-center">
          <div className="col-12 col-sm-12 col-md-10 col-lg-10">
            <p className="hero-tag" data-aos="fade-down" data-aos-duration="800">Smart Hub Service Solution Generator</p>
            <h1 data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100">
              Crafting Solutions<br className="d-none d-md-block" />
              <span className="gradient-text">Redefining Success</span>
            </h1>
            <p className="hero-subtitle" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
              In an era marked by dynamic challenges and evolving landscapes, we provide a strategic blend of cutting-edge technology and agile methodologies.
            </p>
            <div className="hero-cta" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
              <a href="#services" className="btn atlas-cta">Get Started</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
