import React, { useState } from 'react'

const projects = [
  {
    number: '01',
    title: 'Catalog management',
    type: 'Full-stack system',
    description:
      'A product catalog system with APIs, metadata, category management, custom fields, caching, and database-driven workflows.',
    technologies: ['Node.js', 'Express.js', 'PostgreSQL', 'REST APIs', 'Caching'],
    visual: 'catalog'
  },
  {
    number: '02',
    title: 'Legacy dashboard migration',
    type: 'System modernization',
    description:
      'Migrated legacy Perl-based dashboard workflows into a Django and Python application while preserving existing business logic.',
    technologies: ['Perl', 'Django', 'Python', 'PostgreSQL', 'JavaScript'],
    visual: 'migration'
  },
  {
    number: '03',
    title: 'AI-powered product features',
    type: 'AI / automation',
    description:
      'LLM-backed features for generating and managing product content and business/search keywords.',
    technologies: [
      'Generative AI',
      'LLM APIs',
      'Prompt Engineering',
      'Python',
      'APIs'
    ],
    visual: 'ai'
  },
  {
    number: '04',
    title: 'Shopping cart POC',
    type: 'Product feature',
    description:
      'Proof of concept for cart flows including product selection, pricing, and minimum order quantity handling.',
    technologies: ['Node.js', 'REST APIs', 'PostgreSQL', 'JavaScript'],
    visual: 'cart'
  }
]

const Projects = () => {
  const [activeProject, setActiveProject] = useState(0)
  const project = projects[activeProject]

  return (
    <section className="projects" id="work">
      <div className="section-heading">
        <p className="section-kicker">05 — Selected work</p>
        <h2>
          Systems I’ve
          <br />
          designed and shipped.
        </h2>
      </div>

      <div className="projects-layout">
        <div className="project-list">
          {projects.map((item, index) => (
            <button
              type="button"
              key={item.number}
              className={`project-item ${activeProject === index ? 'active' : ''}`}
              onClick={() => setActiveProject(index)}
            >
              <span className="project-number">{item.number}</span>
              <span className="project-title">{item.title}</span>
              <span className="project-arrow" aria-hidden="true">↗</span>
            </button>
          ))}
        </div>

        <div className="project-preview">
          <div className="project-preview-top">
            <span>{project.number}</span>
            <span>{project.type}</span>
          </div>

          <h3>{project.title}</h3>
          <p>{project.description}</p>

          <div className="project-technologies">
            {project.technologies.map((technology) => (
              <span key={technology}>{technology}</span>
            ))}
          </div>

          <div className={`project-visual project-visual--${project.visual}`}>
            <div className="visual-window">
              <div className="window-bar">
                <span></span>
                <span></span>
                <span></span>
              </div>
              <div className="window-content">
                <div className="window-sidebar">
                  <div className="mini-block short"></div>
                  <div className="mini-block"></div>
                  <div className="mini-block"></div>
                </div>
                <div className="window-main">
                  <div className="dashboard-top">
                    <div className="metric-pill"></div>
                    <div className="metric-pill small"></div>
                  </div>
                  <div className="stats-grid">
                    <div className="stat-box large"></div>
                    <div className="stat-box"></div>
                    <div className="stat-box"></div>
                    <div className="stat-box wide"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="visual-label">System {project.number}</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects
