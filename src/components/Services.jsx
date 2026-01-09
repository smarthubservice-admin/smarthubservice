import React from 'react'

export default function Services() {
  return (
    <section id="services" className="services-section">
      <div className="container">
        <h2 className="text-center section-title mb-5" data-aos="fade-up">Our Services</h2>
        <div className="row">
          <div className="col-12 col-sm-6 col-md-4" data-aos="fade-up" data-aos-duration="1000">
            <div className="service-card">
              <div className="icon-box"><i className="fa fa-microchip"></i></div>
              <h4>IoT Development</h4>
              <p>Creating software solutions that integrate with IoT devices for data collection, monitoring, and automation.</p>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100">
            <div className="service-card featured">
              <div className="icon-box"><i className="fa fa-code"></i></div>
              <h4>App Development</h4>
              <p>Creating dynamic web solutions and mobile apps. Implementing responsive design for optimal user experiences.</p>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
            <div className="service-card">
              <div className="icon-box"><i className="fa fa-cloud"></i></div>
              <h4>Cloud Computing</h4>
              <p>Infrastructure, Platform, and Software as a Service (IaaS, PaaS, SaaS) based on robust cloud architectures.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
