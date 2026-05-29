function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-text">
        <p className="hero-greeting">Hi, I'm</p>
        <h1>Sesethu Mngxozana</h1>
        <h2>Frontend Developer · CIS Graduate · Aspiring Full-Stack & Data Analyst</h2>
        <p className="hero-tagline">
          I build interfaces, learn by doing, and give back while growing.
        </p>
        <div className="hero-buttons">
          <a href="#projects" className="btn btn-primary">View my work</a>
          <a href="/cv.pdf" className="btn btn-secondary" download>Download CV</a>
        </div>
      </div>
    </section>
  )
}

export default Hero