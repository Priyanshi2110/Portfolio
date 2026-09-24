import React, { useState } from 'react'

const experiences = [
  {
    number: '01',
    period: '2025 — Present',
    role: 'Software Developer',
    company: 'Product & feature development',
    description:
      'Building full-stack features, frontend interfaces, and backend workflows — turning requirements into reliable, production-ready solutions.',
    technologies: ['React.js', 'Node.js', 'Django', 'Python', 'PostgreSQL']
  },
  {
    number: '02',
    period: 'Current focus',
    role: 'DSA & system design',
    company: 'Learning phase',
    description:
      'Strengthening problem-solving fundamentals, scalability concepts, and system design thinking for better architecture and more efficient code.',
    technologies: [
      'Data Structures',
      'Algorithms',
      'System Design',
      'Scalability',
      'Problem Solving'
    ]
  },
  {
    number: '03',
    period: 'Project work',
    role: 'CMS development',
    company: 'Practical product work',
    description:
      'Applying full-stack concepts in a real product workflow and improving how user-driven software is designed and delivered.',
    technologies: ['CMS', 'CRUD Workflows', 'APIs', 'Database Design', 'Frontend UI']
  },
  {
    number: '04',
    period: 'AI & learning',
    role: 'Modern tooling',
    company: 'Continuous growth',
    description:
      'Exploring AI-assisted workflows and LLM integrations to understand where they belong in real product development.',
    technologies: ['Generative AI', 'LLM APIs', 'Prompt Engineering', 'Automation']
  }
]

const Experience = () => {
  const [activeExperience, setActiveExperience] = useState(0)
  const active = experiences[activeExperience]

  return (
    <section className="experience" id="experience">
      <div className="section-heading">
        <p className="section-kicker">04 — Experience</p>
        <h2>
          Learning by
          <br />
          building in public.
        </h2>
      </div>

      <div className="experience-layout">
        <div className="experience-list">
          {experiences.map((item, index) => (
            <button
              type="button"
              className={`experience-item ${activeExperience === index ? 'active' : ''}`}
              key={item.number}
              onClick={() => setActiveExperience(index)}
            >
              <span className="experience-number">{item.number}</span>
              <span className="experience-role">{item.role}</span>
              <span className="experience-period">{item.period}</span>
            </button>
          ))}
        </div>

        <div className="experience-details">
          <p className="experience-label">{active.period}</p>
          <h3>{active.role}</h3>
          <p className="experience-company">{active.company}</p>
          <p className="experience-description">{active.description}</p>
          <div className="experience-technologies">
            {active.technologies.map((technology) => (
              <span key={technology}>{technology}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
