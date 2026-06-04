import profilePhoto from '../assets/profile.jpg'
import { MapPin, GraduationCap, MessageCircle, Briefcase } from 'lucide-react'

function About() {
  return (
    <section className="about" id="about">
      <div className="about-inner">
          <div className="about-left">
            <h2 className="section-title">About Me</h2>
            
              <p>
                I'm a Computer Information Systems graduate from the University of the
                Free State, currently working as a Frontend Developer at Eragateway
                through the YES Programme. In one year I've gone from studying systems
                in a classroom to shipping real code in React, TypeScript, and Kotlin.
              </p>
              <p>
                My goal is to grow into a full-stack developer with strong data analytics
                skills — someone who can build the system and understand what the data
                inside it is saying. I would also like to pursue BCom Honours in Information
                Systems at UFS to deepen that foundation.
              </p>
              <p>
                <br/>I come from a background where opportunity wasn't guaranteed — 
                I was the first in my family to navigate university, supported by a 
                StudyTrust bursary that changed everything. That experience drives 
                how I work: with purpose, with gratitude, and with the people behind 
                me in mind. When I'm not coding, you'll find me mentoring students, 
                writing poetry, or helping matrics in my community apply for bursaries 
                and universities.
              </p>
          </div> 
          <div className="about-right">
            <div className="mini-resume">
              <h3 className="mini-resume-title">Quick Facts</h3>
              
              <ul className="mini-resume-list">
                <li><MapPin size={20} /> Gauteng, South Africa</li>
                <li><GraduationCap size={20} /> BCom CIS — UFS, 2025</li>
                <li><Briefcase size={20} /> Frontend Dev @ Eragateway</li>
                <li><MessageCircle size={20} /> Xhosa · English · Zulu · Sotho</li>
              </ul>

              <h3 className="mini-resume-title">Beyond the Code</h3>
              
              <ul className="mini-resume-list">
                <li><span className="mr-icon">✦</span> Vice President, UFS Promaths Alumni</li>
                <li><span className="mr-icon">✦</span> StudyTrust Mentor</li>
                <li><span className="mr-icon">✦</span> Drama & poetry</li>
                <li><span className="mr-icon">✦</span> Volleyball player</li>
                <li><span className="mr-icon">✦</span> Bursary applications volunteer</li>
              </ul>
            </div>
          </div>  
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
    </section>
  )
}

export default About