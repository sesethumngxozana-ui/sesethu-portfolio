import { useState } from 'react'
import boulderLogo from '../assets/boulder logo.png'
import bakoneLogo from '../assets/Bakone logo.png'
import afrinovaLogo from '../assets/AfriNova logo.png'

const projects = [
  {
    id: 1,
    name: 'Boulder Inc Website',
    logo: boulderLogo,
    short: 'A responsive bouldering gym website with dark mode, animations, gear shop, and custom forms.',
    description: 'Built from scratch for a bouldering gym, this project features a fully responsive layout, dark/light mode toggle, AOS scroll animations, a gear shop section, and custom-styled contact and booking forms. Focused on clean UI and smooth user experience throughout.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/sesethumngxozana-ui/boulder-inc-website',
    live: null,
  },
  {
    id: 2,
    name: 'Bakone Trades',
    logo: bakoneLogo,
    short: 'Frontend development for a live forex trading platform with automated bots and Expert Advisors.',
    description: 'Contributed frontend development to a live, production forex trading platform. The site offers automated trading bots and Expert Advisors for MetaTrader users. Worked with HTML, CSS, JavaScript and Git in a collaborative team environment, shipping real features to real users.',
    tags: ['HTML', 'CSS', 'JavaScript', 'Git'],
    github: null,
    live: 'https://bakonetrades.com',
  },
  {
    id: 3,
    name: 'UFS Recruitment System',
    logo: afrinovaLogo,
    short: 'A fully documented digital recruitment platform — 16 use cases, UML diagrams, AI CV builder concept. Achieved 82%.',
    description: 'Designed and documented a comprehensive digital recruitment platform for UFS as an academic systems analysis project. Produced a full System Specification Document with 16 detailed use cases covering authentication, job matching, CV builder, interview scheduling, and an analytics dashboard. Created UML diagrams (Use Case, Class, Sequence, State Charts) and designed features like an AI-assisted CV Builder, Skill Gap Analysis Tool, and Intelligent Job Matching System. Achieved 82%.',
    tags: ['Systems Analysis', 'UML', 'Requirements Engineering'],
    github: 'https://github.com/sesethumngxozana-ui/ufs-recruitment-system',
    live: null,
  },
]

function ProjectModal({ project, onClose }) {
  if (!project) return null
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-card" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>✕</button>
        <div className="modal-header">
          <img src={project.logo} alt={project.name} className="modal-logo" />
          <div>
            <h3 className="modal-title">{project.name}</h3>
            <div className="project-tags" style={{marginTop: '0.5rem'}}>
              {project.tags.map(t => <span key={t} className="tag">{t}</span>)}
            </div>
          </div>
        </div>
        <p className="modal-description">{project.description}</p>
        <div className="modal-links">
          {project.github && (
            <a href={project.github} target="_blank" rel="noreferrer" className="btn btn-secondary">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>
              GitHub
            </a>
          )}
          {project.live && (
            <a href={project.live} target="_blank" rel="noreferrer" className="btn btn-primary">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
              Live Site
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

function Projects() {
  const [selected, setSelected] = useState(null)

  return (
    <section className="projects" id="projects">
      <h2 className="section-title">Projects</h2>
      <div className="projects-grid">
        {projects.map(project => (
          <div
            key={project.id}
            className="project-card"
            onClick={() => setSelected(project)}
            role="button"
            tabIndex={0}
            onKeyDown={e => e.key === 'Enter' && setSelected(project)}
          >
            <div className="project-card-header">
              <img src={project.logo} alt={project.name} className="project-logo" />
              <h3>{project.name}</h3>
            </div>
            <p>{project.short}</p>
            <div className="project-tags">
              {project.tags.map(t => <span key={t} className="tag">{t}</span>)}
            </div>
            <div className="project-links" onClick={e => e.stopPropagation()}>
              {project.github && (
                <a href={project.github} target="_blank" rel="noreferrer">GitHub</a>
              )}
              {project.live && (
                <a href={project.live} target="_blank" rel="noreferrer">Live Site</a>
              )}
            </div>
            <span className="project-card-hint">Click for details →</span>
          </div>
        ))}
      </div>

      {selected && (
        <ProjectModal project={selected} onClose={() => setSelected(null)} />
      )}
    </section>
  )
}

export default Projects
