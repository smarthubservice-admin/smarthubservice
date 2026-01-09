import React from 'react'

export default function Features() {
  return (
    <section id="features" className="features-section">
      <div className="container">
        <div className="row align-items-center feature-row">
          <div className="col-12 col-md-6" data-aos="fade-right">
            <div className="feature-img-box">
              <img src="/img/productivity_feat.png" alt="Developer Productivity" className="feature-image" />
            </div>
          </div>
          <div className="col-12 col-md-6" data-aos="fade-left">
            <p className="section-tag">Take a look inside</p>
            <h2 className="section-title">Developer Productivity</h2>
            <p className="section-description">The right development platform empowers developers to achieve maximum productivity. Features such as robust integrated development environments (IDEs), debugging tools, and efficient workflows contribute to a developer-friendly environment.</p>
          </div>
        </div>

        <div className="row align-items-center feature-row flex-md-row-reverse">
          <div className="col-12 col-md-6" data-aos="fade-left">
            <div className="feature-img-box">
              <img src="/img/security_feat.png" alt="Safe and Reliable" className="feature-image" />
            </div>
          </div>
          <div className="col-12 col-md-6" data-aos="fade-right">
            <p className="section-tag">Safe and reliable</p>
            <h2 className="section-title">Safe and reliable</h2>
            <p className="section-description">In the era of increasing cyber threats and stringent data protection regulations, security is non-negotiable.</p>
          </div>
        </div>

        <div className="row align-items-center feature-row">
          <div className="col-12 col-md-6" data-aos="fade-right">
            <div className="feature-img-box">
              <img src="/img/ai_building.png" alt="Integration Capabilities" className="feature-image" />
            </div>
          </div>
          <div className="col-12 col-md-6" data-aos="fade-left">
            <p className="section-tag">Take a look inside</p>
            <h2 className="section-title">Integration Capabilities</h2>
            <p className="section-description">A development platform should support easy integration with third-party services, APIs, and other tools.</p>
          </div>
        </div>

        <div className="row align-items-center feature-row flex-md-row-reverse">
          <div className="col-12 col-md-6" data-aos="fade-left">
            <div className="feature-img-box">
              <img src="/img/cost_effective.jpg" alt="Cost Efficiency" className="img-fluid feature-image" />
            </div>
          </div>
          <div className="col-12 col-md-6" data-aos="fade-right">
            <p className="section-tag">Value Driven</p>
            <h2 className="section-title">Cost-Efficiency</h2>
            <p className="section-description">A platform that aligns with the project's budget, offers transparent licensing models, and minimizes hidden costs contributes to a financially sound development process.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
