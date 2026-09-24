import React from 'react'

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <p className="hero-tag">Open to full-time software engineering roles</p>

        <h1>
          Building reliable software
          <em> with clarity and care.</em>
        </h1>

        <p className="hero-description">
          I’m Priyanshi, a software developer focused on full-stack product work —
          frontend interfaces, backend systems, and database workflows that stay
          maintainable after they ship.
        </p>

        <div className="hero-buttons">
          <a href="#work" className="primary-btn">View selected work</a>
          <a
            href="/Resume.pdf"
            className="secondary-btn"
            download="Priyanshi_Resume.pdf"
            aria-label="Download resume"
          >
            Download resume
          </a>
        </div>

        <div className="hero-tech" aria-label="Core technologies">
          <span>React.js</span>
          <span>Node.js</span>
          <span>Django</span>
          <span>PostgreSQL</span>
          <span>System Design</span>
          <span>DSA</span>
        </div>
      </div>

      <aside className="hero-visuals" aria-label="Focus areas">
        <div className="visual-card">
          <div className="card-header">
            <span>Practice areas</span>
            <span className="live">Available</span>
          </div>

          <div className="hero-metrics">
            <div className="metric">
              <strong>1+</strong>
              <span>Year of product engineering</span>
            </div>
            <div className="metric">
              <strong>5+</strong>
              <span>Shipped systems &amp; features</span>
            </div>
            <div className="metric">
              <strong>B.Tech</strong>
              <span>CSE — Artificial Intelligence</span>
            </div>
          </div>

          <div className="system">
            <div className="system-box">
              <small>01</small>
              <strong>Frontend</strong>
              <span>React interfaces with clean, usable structure</span>
            </div>
            <div className="system-box">
              <small>02</small>
              <strong>Backend</strong>
              <span>Node.js and Django APIs, auth, and workflows</span>
            </div>
            <div className="system-row">
              <div className="system-box">
                <small>03</small>
                <strong>Data</strong>
                <span>PostgreSQL design &amp; queries</span>
              </div>
              <div className="system-box">
                <small>04</small>
                <strong>AI</strong>
                <span>LLM APIs in product features</span>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </section>
  )
}

export default Hero
