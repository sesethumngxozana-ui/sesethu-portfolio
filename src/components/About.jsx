function About() {
  return (
    <section className="about" id="about">
      <h2 className="section-title">About Me</h2>
      <div className="about-content">
        <div className="about-text">
          <p>
            I'm a Computer Information Systems graduate from the University of the
            Free State, currently working as a Frontend Developer at Eragateway
            through the YES Programme. In one year I've gone from studying systems
            in a classroom to shipping real code in React, TypeScript, and Kotlin.
          </p>
          <p>
            My goal is to grow into a full-stack developer with strong data analytics
            skills — someone who can build the system and understand what the data
            inside it is saying. I'm also pursuing BCom Honours in Information
            Systems at UFS to deepen that foundation.

            
          </p>
        </div>
        <div className="about-stats">
          <div className="stat-card">
            <span className="stat-number">92%</span>
            <span className="stat-label">Programming (UFS)</span>
          </div>
          <div className="stat-card">
            <span className="stat-number">3</span>
            <span className="stat-label">Students mentored</span>
          </div>
          <div className="stat-card">
            <span className="stat-number">2</span>
            <span className="stat-label">Live projects</span>
          </div>
          <div className="stat-card">
            <span className="stat-number">YES</span>
            <span className="stat-label">Programme developer</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About