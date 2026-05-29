function Contact() {
  return (
    <section className="contact" id="contact">
      <h2 className="section-title">Get In Touch</h2>
      <p className="contact-intro">
        I'm always open to connecting — whether you're a recruiter, a developer,
        or someone who believes in investing in young South African tech talent.
      </p>
      <div className="contact-links">
        <a href="mailto:sesethumngxozana@gmail.com" className="contact-item">
          <span className="contact-icon">✉</span>
          <span>sesethumngxozana@gmail.com</span>
        </a>
        <a href="https://www.linkedin.com/in/sesethu-mngxozana-88b97528b" target="_blank" className="contact-item">
          <span className="contact-icon">💼</span>
          <span>linkedin.com/in/sesethu-mngxozana</span>
        </a>
        <a href="https://github.com/sesethumngxozana-ui" target="_blank" className="contact-item">
          <span className="contact-icon">💻</span>
          <span>github.com/sesethumngxozana-ui</span>
        </a>
      </div>
    </section>
  )
}

export default Contact