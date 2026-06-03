import { useState } from 'react'

const allSkills = {
  frontend: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Kotlin', 'Java'],
  data: ['Power BI', 'SQL', 'Excel', 'Git', 'GitHub', 'Figma ✦ learning'],
  systems: ['Systems Analysis', 'UML', 'Database Design', 'HCI', 'Requirements Engineering'],
}

const tabs = [
  { key: 'all', label: 'All Skills' },
  { key: 'frontend', label: 'Frontend' },
  { key: 'data', label: 'Data & Tools' },
  { key: 'systems', label: 'Systems' },
]

function Skills() {
  const [active, setActive] = useState('all')

  const getVisible = () => {
    if (active === 'all') return allSkills
    return { [active]: allSkills[active] }
  }

  const groupLabels = { frontend: 'Frontend', data: 'Data & Tools', systems: 'Systems' }

  return (
    <section className="skills" id="skills">
      <h2 className="section-title">Skills</h2>

      <div className="skill-tabs">
        {tabs.map(tab => (
          <button
            key={tab.key}
            className={`skill-tab${active === tab.key ? ' active' : ''}`}
            onClick={() => setActive(tab.key)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="skills-grid">
        {Object.entries(getVisible()).map(([key, skills]) => (
          <div className="skill-group" key={key}>
            <h3>{groupLabels[key]}</h3>
            <div className="skill-tags">
              {skills.map(skill => (
                <span
                  key={skill}
                  className={`tag${skill.includes('learning') ? ' learning' : ''}`}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills
