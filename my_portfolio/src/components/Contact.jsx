import React from 'react'

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <div className="section-heading">
        <p className="section-kicker">06 — Contact</p>
        <h2>
          Let’s talk about
          <br />
          the next role.
        </h2>
      </div>

      <div className="contact-content">
        <div className="contact-intro">
          <p>
            I’m looking for product engineering, full-stack, and software development
            roles where I can own features end to end and grow with a strong team.
          </p>

          <a href="mailto:chauhanpriyanshi2004@gmail.com" className="contact-email">
            chauhanpriyanshi2004@gmail.com
          </a>
        </div>

        <div className="contact-links">
          <a
            href="https://www.linkedin.com/in/priyanshi-a2031a340"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn <span>↗</span>
          </a>
          <a href="https://github.com/Priyanshi2110" target="_blank" rel="noreferrer">
            GitHub <span>↗</span>
          </a>
          <a href="/Resume.pdf" download="Priyanshi_Resume.pdf">
            Resume <span>↓</span>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Contact
