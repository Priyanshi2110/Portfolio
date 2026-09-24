import React from 'react'

const About = () => {
  return (
    <section className="about" id="about">
      <div className="section-heading">
        <p className="section-kicker">01 — About</p>
        <h2>
          Strong fundamentals,
          <br />
          practical problem-solving.
        </h2>
      </div>

      <div className="about-content">
        <div className="about-text">
          <p>
            I build web applications, APIs, and product features with a bias toward
            clear architecture and code that other engineers can maintain.
          </p>

          <p>
            My work spans frontend development, backend logic, database integration,
            and feature delivery — always with an eye on user value, not just
            implementation novelty.
          </p>

          <p>
            I’m deepening data structures, system design, and scalable patterns
            through projects that mirror production constraints: data models,
            caching, auth, and legacy modernization.
          </p>
        </div>

        <div className="about-stats">
          <div className="stat">
            <strong>Full stack</strong>
            <span>Product features from UI through API and data</span>
          </div>
          <div className="stat">
            <strong>Backend</strong>
            <span>APIs, integrations, and business workflows</span>
          </div>
          <div className="stat">
            <strong>Data</strong>
            <span>Schema design, queries, and reliable persistence</span>
          </div>
          <div className="stat">
            <strong>Growth</strong>
            <span>DSA, system design, and applied AI concepts</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
