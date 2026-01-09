import React, { useState } from 'react'

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-dark">
      <div className="container-fluid px-3">
        <a className="navbar-brand" href="#home" onClick={() => setIsOpen(false)}>
          <img src="/img/smarthubservice_logo.png" alt="Smart Hub Service Logo" className="logo-img" />
          <span className="brand-text">Smart Hub Service</span>
        </a>
        {/* <button 
          className="navbar-toggler" 
          type="button" 
          onClick={toggleMenu}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button> */}
        <div className={`navbar-collapse ${isOpen ? 'show' : ''}`} id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="#home" onClick={() => setIsOpen(false)}>Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about" onClick={() => setIsOpen(false)}>About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#services" onClick={() => setIsOpen(false)}>Services</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#features" onClick={() => setIsOpen(false)}>Features</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact" onClick={() => setIsOpen(false)}>Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
