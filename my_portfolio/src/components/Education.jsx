import React from 'react'

const Education = () => {
  return (
    <section className="education" id="education">
      <div className="section-heading">
        <p className="section-kicker">02 — Education</p>
        <h2>
          Formal training,
          <br />
          continuous craft.
        </h2>
      </div>

      <div className="education-grid">
        <article className="edu-card">
          <span className="edu-label">Degree</span>
          <h3>B.Tech in Computer Science Engineering (Artificial Intelligence)</h3>
          <p>IIMT College of Engineering · 2022–2026</p>
        </article>

        <article className="edu-card">
          <span className="edu-label">Currently studying</span>
          <h3>Data structures, system design, and software fundamentals</h3>
          <p>
            Strengthening core concepts, architecture decisions, and problem-solving
            patterns used in production engineering.
          </p>
        </article>

        <article className="edu-card highlight">
          <span className="edu-label">Now building</span>
          <h3>A CMS product</h3>
          <p>
            Shipping practical features and learning how ideas become software that
            users can actually rely on.
          </p>
        </article>
      </div>
    </section>
  )
}

export default Education
