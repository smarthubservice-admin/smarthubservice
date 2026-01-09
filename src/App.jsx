import React, { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Features from './components/Features'
import Team from './components/Team'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Privacy from './components/Privacy'
import Terms from './components/Terms'

export default function App() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (window.emailjs) {
        try { window.emailjs.init('zQckhKyZAVpbKB37d') } catch (e) {}
      }
      if (window.AOS && typeof window.AOS.init === 'function') {
        window.AOS.init({ duration: 1000, once: true })
      }
    }
  }, [])

  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<main><Hero /><About /><Services /><Features /><Team /><Testimonials /><Contact /></main>} />
        <Route path="/privacy-policy" element={<Privacy />} />
        <Route path="/terms-of-service" element={<Terms />} />
      </Routes>
      <Footer />
    </>
  )
}
