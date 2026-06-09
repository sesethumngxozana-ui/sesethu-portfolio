import { useState } from 'react'
import { ExternalLink } from 'lucide-react'
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
    live: 'https://sesethumngxozana-ui.github.io/boulder-inc-website',
  },
  {
    id: 2,
    name: 'Bakone Trades',
    logo: bakoneLogo,
    short: 'Frontend development for a live forex trading platform with automated bots and Expert Advisors.',
    description: 'Contributed frontend development to a live, production forex trading platform. The site offers automated trading bots and Expert Advisors for MetaTrader users. Worked with HTML, CSS, JavaScript and Git in a collaborative team environment, shipping real features to real users.',
    tags: ['HTML', 'CSS', 'JavaScript', 'Git'],
    github: 'https://github.com/ST10107850/bakone-trades-backend.git',
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
            <div className="project-tags" style={{ marginTop: '0.5rem' }}>
              {project.tags.map(t => <span key={t} className="tag">{t}</span>)}
            </div>
          </div>
        </div>
        <p className="modal-description">{project.description}</p>
        <div className="modal-links">
          {project.github && (
            <a href={project.github} target="_blank" rel="noreferrer" className="btn btn-secondary">
              <span className="contact-icon">💻</span> GitHub
            </a>
          )}
          {project.live && (
            <a href={project.live} target="_blank" rel="noreferrer" className="btn btn-primary">
              <ExternalLink size={16} /> Live Site
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
        {projects.map((project, i) => (
          <div
            key={project.id}
            className="project-card"
            onClick={() => setSelected(project)}
            role="button"
            tabIndex={0}
            onKeyDown={e => e.key === 'Enter' && setSelected(project)}
            data-aos="fade-up"
            data-aos-delay={i * 100}
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
                <a href={project.github} target="_blank" rel="noreferrer">
                  <span className="contact-icon">💻</span> GitHub
                </a>
              )}
              {project.live && (
                <a href={project.live} target="_blank" rel="noreferrer">
                  <ExternalLink size={14} /> Live Site
                </a>
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
