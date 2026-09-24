import React from 'react'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-brand">
          <span className="footer-kicker">Available for work</span>
          <h3>Priyanshi</h3>
        </div>

        <div className="footer-cta">
          <p>Direct contact</p>
          <a href="tel:+919654103397">+91 96541 03397</a>
          <a href="mailto:chauhanpriyanshi2004@gmail.com" className="footer-email">
            chauhanpriyanshi2004@gmail.com
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Priyanshi</span>
        <span>Software Developer</span>
        <a href="#top">Back to top</a>
      </div>
    </footer>
  )
}

export default Footer
