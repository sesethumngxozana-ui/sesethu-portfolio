function Projects() {
  return (
    <section className="projects" id="projects">
      <h2 className="section-title">Projects</h2>
      <div className="projects-grid">

        <div className="project-card">
          <h3>Boulder Inc Website</h3>
          <p>A responsive bouldering gym website built from scratch with dark mode, AOS animations, a gear shop section, and custom-styled forms.</p>
          <div className="project-tags">
            <span className="tag">HTML</span>
            <span className="tag">CSS</span>
            <span className="tag">JavaScript</span>
          </div>
          <div className="project-links">
            <a href="https://github.com/sesethumngxozana-ui/boulder-inc-website" target="_blank">GitHub</a>
          </div>
        </div>

        <div className="project-card">
          <h3>Bakone Trades</h3>
          <p>Contributed frontend development to a live forex trading platform offering automated trading bots and Expert Advisors for MetaTrader.</p>
          <div className="project-tags">
            <span className="tag">HTML</span>
            <span className="tag">CSS</span>
            <span className="tag">JavaScript</span>
            <span className="tag">Git</span>
          </div>
          <div className="project-links">
            <a href="https://bakonetrades.com" target="_blank">Live site</a>
          </div>
        </div>

         <div className="project-card">
            <h3>UFS Recruitment System</h3>
            <p>Designed and documented a full digital recruitment platform — 16 use cases, UML diagrams, AI-assisted CV builder concept, and skill gap analysis tool. Achieved 82%.</p>
            <div className="project-tags">
                <span className="tag">Systems Analysis</span>
                <span className="tag">UML</span>
                <span className="tag">Requirements Engineering</span>
            </div>
            <div className="project-links">
                <a href="https://github.com/sesethumngxozana-ui/ufs-recruitment-system" target="_blank">GitHub</a>
            </div>
        </div>

        <div className="project-card coming-soon">
          <h3>Eragateway Project</h3>
          <p>Projects built during my YES Programme placement at Eragateway — coming soon.</p>
          <div className="project-tags">
            <span className="tag">React</span>
            <span className="tag">TypeScript</span>
            <span className="tag">Kotlin</span>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Projects