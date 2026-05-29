function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-badge">
        <span className="badge-dot"></span>
        Available for opportunities
      </div>
      <p className="hero-greeting">Hi, I'm</p>
      <h1>Sesethu<br/>Mngxozana</h1>
      <p className="hero-sub">
        Frontend Developer · CIS Graduate<br/>
        Aspiring Full-Stack Developer & Data Analyst
      </p>
      <p className="hero-tagline">
        I build interfaces, learn by doing, and give back while growing.
      </p>
      <div className="hero-buttons">
        <a href="#projects" className="btn btn-primary">View my work</a>
        <a href="#contact" className="btn btn-secondary">Get in touch</a>
      </div>
    </section>
  )
}

export default Hero