import React, { useState } from 'react'

export default function Contact() {
  const [status, setStatus] = useState({ show: false, msg: '', type: '' })

  const handleSubmit = async (e) => {
    e.preventDefault()
    const form = e.target
    const name = form.contactName.value.trim()
    const email = form.contactEmail.value.trim()
    const message = form.contactMessage.value.trim()
    if (!name || !email || !message) { setStatus({ show: true, msg: 'Please fill in all fields.', type: 'error' }); return }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) { setStatus({ show: true, msg: 'Please enter a valid email address.', type: 'error' }); return }

    const sendBtn = form.querySelector('#sendBtn')
    const originalText = sendBtn ? sendBtn.textContent : 'Send Message'
    if (sendBtn) { sendBtn.disabled = true; sendBtn.textContent = 'Sending...' }
    try {
      const ready = await (async () => {
        if (window.emailjs) return true
        return new Promise((resolve) => {
          let attempts = 0
          const iv = setInterval(() => {
            if (window.emailjs) { clearInterval(iv); resolve(true) }
            attempts++
            if (attempts > 50) { clearInterval(iv); resolve(false) }
          }, 100)
        })
      })()
      if (!ready || !window.emailjs) throw new Error('EmailJS not available')
      const res = await window.emailjs.send('service_y5t2nyb','template_8iasyyh',{ from_name: name, from_email: email, message, to_email: 'smarthubserviceinfo@gmail.com' })
      if (res && res.status === 200) { setStatus({ show: true, msg: '✓ Mail sent successfully! We will reach out to you soon.', type: 'success' }); setTimeout(() => { form.reset(); setTimeout(() => setStatus({ show: false, msg: '', type: '' }), 5000) }, 1000) }
      else setStatus({ show: true, msg: '✗ Failed to send message. Please try again.', type: 'error' })
    } catch (err) {
      console.error('EmailJS Error:', err)
      setStatus({ show: true, msg: '✗ Error: ' + (err && (err.text || err.message) ? (err.text || err.message) : 'Failed to send message.'), type: 'error' })
    } finally {
      if (sendBtn) { sendBtn.disabled = false; sendBtn.textContent = originalText }
    }
  }

  return (
    <section id="contact" className="contact-section">
      <div className="circles">
        <ul className="circles">{Array.from({ length: 10 }).map((_, i) => <li key={i}></li>)}</ul>
      </div>
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-lg-5" data-aos="fade-right" data-aos-duration="1000">
            <h2 className="section-title">Contact Us</h2>
            <p className="section-description">Where Inquiries Meet Solutions, Every Time.</p>
            <ul className="contact-info">
              <li><i className="fa fa-envelope"></i> smarthubserviceinfo@gmail.com</li>
              <li><i className="fa fa-phone"></i> +91 6377678913</li>
              <li><i className="fa fa-map-marker"></i> Ghazipur, Utter Pradesh, India</li>
            </ul>
          </div>
          <div className="col-md-6" data-aos="fade-left">
            <form className="contact-form" id="contactForm" onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-md-6">
                  <input name="contactName" type="text" className="form-control" placeholder="Your Name" required />
                </div>
                <div className="col-md-6">
                  <input name="contactEmail" type="email" className="form-control" placeholder="Your Email" required />
                </div>
              </div>
              <textarea name="contactMessage" className="form-control" rows="5" placeholder="Your Message" required></textarea>
              <button type="submit" className="btn atlas-cta atlas-cta-wide" id="sendBtn">Send Message</button>
              {status.show && <div className="mt-3 text-center" style={{ fontWeight: 600, color: status.type === 'success' ? '#10B981' : '#EF4444' }}>{status.msg}</div>}
              <div className="mt-4 text-center" style={{ fontSize: '0.9rem', color: '#888' }}>
                By submitting this form, you agree to our <a href="/privacy-policy" style={{ color: '#00d4ff', textDecoration: 'none' }}>Privacy Policy</a> and <a href="/terms-of-service" style={{ color: '#00d4ff', textDecoration: 'none' }}>Terms of Service</a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
