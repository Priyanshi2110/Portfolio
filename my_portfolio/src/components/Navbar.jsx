import React from 'react'

const Navbar = () => {
  return (
    <nav className="navbar" aria-label="Primary">
      <a className="brand" href="#top">
        <span className="brand-mark">P</span>
        <span className="brand-text">
          Priyanshi
          <small>Software Developer</small>
        </span>
      </a>

      <ul className="list">
        <li><a href="#about">About</a></li>
        <li><a href="#education">Education</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#work">Work</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <a className="nav-cta" href="#contact">Get in touch</a>
    </nav>
  )
}

export default Navbar
