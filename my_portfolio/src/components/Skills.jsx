import React, { useState } from 'react'

const skillCategories = [
  {
    number: '01',
    title: 'Programming',
    skills: ['JavaScript', 'Python', 'Perl', 'C++', 'SQL']
  },
  {
    number: '02',
    title: 'Frontend',
    skills: ['React.js', 'JavaScript', 'HTML5', 'CSS3']
  },
  {
    number: '03',
    title: 'Backend',
    skills: ['Node.js', 'Express.js', 'Django', 'REST APIs', 'Backend Services']
  },
  {
    number: '04',
    title: 'Databases',
    skills: [
      'PostgreSQL',
      'MongoDB',
      'Database Design',
      'Complex Queries',
      'Joins',
      'Query Optimization'
    ]
  },
  {
    number: '05',
    title: 'Engineering',
    skills: [
      'Full Stack Development',
      'Authentication',
      'Authorization',
      'JWT',
      'Caching',
      'Debugging',
      'Legacy Modernization',
      'Database Integration'
    ]
  },
  {
    number: '06',
    title: 'AI & automation',
    skills: [
      'Generative AI',
      'LLM API Integration',
      'Prompt Engineering',
      'AI-powered Applications',
      'Workflow Automation'
    ]
  }
]

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState(0)

  return (
    <section className="skills" id="skills">
      <div className="section-heading">
        <p className="section-kicker">03 — Skills</p>
        <h2>
          Tools I use
          <br />
          to ship software.
        </h2>
      </div>

      <div className="skills-list">
        {skillCategories.map((category, index) => (
          <div
            className={`skill-category ${activeCategory === index ? 'active' : ''}`}
            key={category.number}
          >
            <button
              type="button"
              className="skill-category-header"
              onClick={() => setActiveCategory(activeCategory === index ? null : index)}
              aria-expanded={activeCategory === index}
            >
              <span className="skill-number">{category.number}</span>
              <h3>{category.title}</h3>
              <span className="skill-arrow" aria-hidden="true">
                {activeCategory === index ? '−' : '+'}
              </span>
            </button>

            <div className="skill-items">
              {category.skills.map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills
