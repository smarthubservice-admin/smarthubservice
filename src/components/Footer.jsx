import React from 'react'

export default function Footer() {
  return (
    <footer id="footer">
      <div className="container">
        <div className="row justify-content-between align-items-center">
          <div className="col-md-6 text-white text-center text-md-left">
            Copyright © 2024 <a href="#">Smart Hub Service</a> All rights reserved.
          </div>
          <div className="col-md-6 text-center text-md-right" id="social-media">
            <a href="#" className="social-link"><i className="fa fa-facebook"></i></a>
            <a href="#" className="social-link"><i className="fa fa-twitter"></i></a>
            <a href="#" className="social-link"><i className="fa fa-linkedin"></i></a>
            <a href="#" className="social-link"><i className="fa fa-instagram"></i></a>
          </div>
        </div>
      </div>
      <button id="scrollTop" className="scroll-top">
        <i className="fa fa-arrow-up"></i>
      </button>
    </footer>
  )
}
