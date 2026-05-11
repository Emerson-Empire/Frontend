import React, { useEffect, useState } from 'react';
import '../../landingpage.css';

interface ValueCard {
  icon: string;
  title: string;
  description: string;
}

interface TeamMember {
  name: string;
  title: string;
  description: string;
}

interface ImpactStat {
  value: string;
  label: string;
}

interface Step {
  icon: string;
  title: string;
  description: string;
}

const LandingPage: React.FC = () => {
  const [currentTeamIndex, setCurrentTeamIndex] = useState(0);

  const navLinks = ['THE EMERSON AGENCY', 'EPDG', 'ABOUT', 'FAQS', 'TESTIMONIALS'];
  const trustedLogos = ['NEXORA', 'VELDT', 'AUREUM', 'STRATUM', 'CRESTIO'];

  const divisions = [
    {
      icon: 'FA',
      title: 'Emerson Agency',
      subtitle: 'DIVISION 01',
      description: 'The Emerson Agency is being developed as a community-centered business and financial services agency supporting individuals, families, and small businesses through practical guidance, financial education, tax preparation support, insurance services, and business development resources.'
    },
    {
      icon: 'FE',
      title: 'Emerson Professional Development',
      subtitle: 'DIVISION 02',
      description: 'Emerson Professional Development Group equips emerging professionals, interns, entrepreneurs, and leaders with training, structure, mentorship, and practical tools for long-term growth.'
    }
  ];

  const values: ValueCard[] = [
    {
      icon: '🛡️',
      title: 'Service',
      description: 'We believe business should serve people, not simply profit from them.'
    },
    {
      icon: '🛡️',
      title: 'Integrity',
      description: 'We value honesty, transparency, and ethical leadership.'
    },
    {
      icon: '📚',
      title: 'Education',
      description: 'Growth begins with learning, guidance, and access to practical knowledge.'
    },
    {
      icon: '⭐',
      title: 'Opportunity',
      description: 'Everyone deserves the chance to build, improve, and move forward.'
    },
    {
      icon: '🌍',
      title: 'Global Community',
      description: 'Our vision extends across borders, backgrounds and professional pathways.'
    },
    {
      icon: '👔',
      title: 'Professionalism',
      description: 'We uphold accountability, communications, and high standards.'
    },
    {
      icon: '👑',
      title: 'Leadership',
      description: 'Strong leadership is built through service, consistency, and responsibility.'
    },
    {
      icon: '📈',
      title: 'Practical Growth',
      description: 'Learning should create real-world results and opportunities.'
    },
    {
      icon: '❤️',
      title: 'Dignity',
      description: 'Every individual deserves respect, fairness, and support.'
    }
  ];

  const teamMembers: TeamMember[] = [
    {
      name: 'Lyric Helena Emerson',
      title: 'FOUNDER & CEO',
      description: 'Lyric Helena Emerson leads The Emerson Empire with a focus on purpose-driven service, business strategy, and community impact across both divisions.'
    },
    {
      name: 'Amara Blake',
      title: 'CHIEF IMPACT OFFICER',
      description: 'Amara oversees program delivery, partnerships, and client experience to ensure every service has measurable value and meaningful support.'
    },
    {
      name: 'Jordan Hayes',
      title: 'DIRECTOR OF OPERATIONS',
      description: 'Jordan guides the operational systems, compliance, and logistics that keep the agency and development programs running with clarity and care.'
    },
    {
      name: 'Sage Bennett',
      title: 'PROGRAM LEAD',
      description: 'Sage manages training, mentorship, and client readiness so participants leave equipped with confidence and practical skills.'
    }
  ];

  const impactStats: ImpactStat[] = [
    { value: '1,200+', label: 'Lives impacted' },
    { value: '98%', label: 'Client satisfaction' },
    { value: '14+', label: 'Years of combined experience' },
    { value: '60+', label: 'Businesses supported' },
    { value: '8,400+', label: 'Training hours delivered' },
    { value: '100%', label: 'Service-centered success' }
  ];

  const steps: Step[] = [
    {
      icon: '01',
      title: 'Submit an Inquiry',
      description: 'Start by submitting an inquiry so we can better understand your needs, goals, and the type of support you are looking for.'
    },
    {
      icon: '02',
      title: 'We Identify the Right Support',
      description: 'Our team helps identify the services, resources, or next steps that may best support your personal, professional, or business goals.'
    },
    {
      icon: '03',
      title: 'We Support the Process',
      description: 'As services become available, our goal is to provide organized, practical support that helps clients move through paperwork, planning, preparation, and follow-up with greater clarity.'
    },
    {
      icon: '04',
      title: 'You Stay Informed and Prepared',
      description: 'Our goal is to help clients stay organized, informed, and prepared through practical education, service support, and clear communication.'
    }
  ];

  const stepsEpdg: Step[] = [
    {
      icon: '01',
      title: 'Apply to the Program',
      description: 'Submit an application outlining your goals, background, and area of interest. The program is designed for students, early-career professionals, career changers, and emerging leaders seeking practical experience.'
    },
    {
      icon: '02',
      title: 'Get Matched & Onboarded',
      description: 'Selected participants are matched with a track or team based on program needs, skills, availability, and professional goals.'
    },
    {
      icon: '03',
      title: 'Learn, Build & Execute',
      description: 'Participants work on guided projects, attend meetings or workshops, and build skills through practical assignments, collaboration, and leadership development.'
    },
    {
      icon: '04',
      title: 'Complete the Program & Build Your Portfolio',
      description: 'Participants who complete the program may leave with portfolio-ready work, stronger professional skills, leadership experience, and documentation of their contributions.'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTeamIndex((prev) => (prev + 1) % teamMembers.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [teamMembers.length]);

  return (
    <div className="landing-page">
      {/* NAVBAR */}
      <nav className="navbar">
        <div className="container navbar-container">
          <div className="navbar-logo">
            <div className="logo-circle">EE</div>
            <div>
              <div className="logo-text">EMERSON </div>
              <div className="logo-subtitle">LEAD · BUILD · EXPAND</div>
            </div>
          </div>
          <div className="nav-links">
            {navLinks.map((link) => (
              <a key={link} href="#" className="nav-link">{link}</a>
            ))}
          </div>
          <button className="btn btn-primary">CONTACT</button>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="hero-section">
        <div className="container hero-grid">
          <div className="hero-content">
            <div className="hero-label">THE EMERSON EMPIRE</div>
            <h1 className="hero-title">
              The Emerson Empire —
              <span className="hero-subtitle">Agency & Professional Development</span>
            </h1>
            <p className="hero-description">
              Building pathways for professional growth, business development, financial education, and global opportunity.
            </p>
            <div className="hero-buttons">
              <button className="btn btn-primary">GET STARTED</button>
              <button className="btn btn-secondary">LEARN MORE</button>
            </div>
            <div className="hero-decorations">
              <span>★</span>
              <span>★</span>
              <span>★</span>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-image-card">
              <div className="hero-card-image hero-card-full-image">
                <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=900&q=80" alt="Lyric Helena Emerson" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* YOU CHOOSE YOUR PATH */}
      <section className="path-section">
        <div className="container">
          <h2 className="path-title">YOU CHOOSE YOUR PATH</h2>
          <div className="divisions-grid">
            {divisions.map((division, index) => (
              <div key={index} className="division-card">
                <div className="division-header">
                  <div className="division-icon">{division.icon}</div>
                </div>
                <h3>{division.title}</h3>
                <div className="division-label">{division.subtitle}</div>
                <p>{division.description}</p>
                <button className={`btn ${index === 0 ? 'btn-primary' : 'btn-secondary'}`}>
                  {index === 0 ? 'EXPLORE AGENCY →' : 'EXPLORE EPDG →'}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VALUES/COMMITMENT SECTION */}
      <section className="values-section">
        <div className="container">
          <div className="values-header">
            <div className="values-logo">
              <div className="logo-shield">EE</div>
            </div>
            <div className="values-copy">
              <div className="values-label">OUR FOUNDATION</div>
              <h2>Built on Purpose. <span className="highlight">Guided by Service.</span></h2>
              <p>
                At The Emerson Empire, our mission is to educate, empower, and create meaningful opportunities for growth. We believe professional development should remain human, practical, and service-centered — grounded in integrity, leadership, and long-term impact.
              </p>
              <p>
                Across every division, we are building systems, services, and learning experiences that help individuals, teams, and small businesses grow with confidence, dignity, and practical support.
              </p>
            </div>
          </div>

          <div className="values-grid">
            {values.map((value, index) => (
              <div key={index} className="value-card">
                <div className="value-icon">{value.icon}</div>
                <h4>{value.title}</h4>
                <p>{value.description}</p>
              </div>
            ))}
          </div>

          <div className="commitment-footer">
            <span>Our <span className="highlight">Commitment</span> and value</span>
          </div>
        </div>
      </section>

      {/* DIVISION DETAIL SECTIONS */}
      <section className="division-detail-section division-01">
        <div className="container">
          <div className="division-detail-header">
            <span className="division-badge">DIVISION 01</span>
            <h2>Emerson Agency</h2>
            <p>Practical insurance, tax, and business support built for stability and growth.</p>
          </div>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">🛡️</div>
              <h4>Personal Insurance</h4>
              <p>Life, health, auto and home coverage guidance designed to help individuals and families protect what matter most.</p>
            </div>
            <div className="service-card">
              <div className="service-icon">🏢</div>
              <h4>Business Insurance</h4>
              <p>Commercial coverage guidance for small business, including liability, property, and workers compensation considerations</p>
            </div>
            <div className="service-card">
              <div className="service-icon">📋</div>
              <h4>Individual Tax Filing</h4>
              <p>Personal tax preparation support focused on accuracy, organization, and Compliance.</p>
            </div>
            <div className="service-card">
              <div className="service-icon">📊</div>
              <h4>Business Tax & Accounting</h4>
              <p>Business tax preparation bookkeeping support, and financial organization designed to help business owners stay focused and prepared.</p>
            </div>
            <div className="service-card">
              <div className="service-icon">📈</div>
              <h4>Tax Planning & Advisory</h4>
              <p>Year-round planning support to help individuals and businesses approach tax season with clarity and preparation</p>
            </div>
            <div className="service-card">
              <div className="service-icon">⚖️</div>
              <h4>Compliance & Regulation</h4>
              <p>Practical guidance to help clients stay informed, organized, and aligned with changing tax and insurance requirements.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="division-detail-section division-02">
        <div className="container">
          <div className="division-detail-header">
            <span className="division-badge">DIVISION 02</span>
            <h2>Emerson Professional Development Group</h2>
            <p>Professional Development, Internship Training, and Career Readiness</p>
          </div>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">👥</div>
              <h4>Internship Program</h4>
              <p>Hands-on learning opportunities where interns contribute to real projects, strengthen professional skills, and build portfolio-ready experience.</p>
            </div>
            <div className="service-card">
              <div className="service-icon">📊</div>
              <h4>Entrepreneurship Training</h4>
              <p>Structured learning focused on business planning, financial literacy, leadership, communication, and practical strategy for aspiring professionals and entrepreneurs.</p>
            </div>
            <div className="service-card">
              <div className="service-icon">🎯</div>
              <h4>Mentorship & Coaching</h4>
              <p>Guidance, feedback, and leadership support designed to help participants develop confidence, communication skills, and professional direction.</p>
            </div>
            <div className="service-card">
              <div className="service-icon">💼</div>
              <h4>Professional Development</h4>
              <p>Career readiness, leadership development, communication practice, resume support, and workplace preparation for emerging professionals.</p>
            </div>
            <div className="service-card">
              <div className="service-icon">📝</div>
              <h4>Career Preparation Support</h4>
              <p>Resume review, interview preparation, LinkedIn support, portfolio development, and guidance for future job or internship opportunities.</p>
            </div>
            <div className="service-card">
              <div className="service-icon">🌐</div>
              <h4>Community & Network</h4>
              <p>A developing professional network built through collaboration, shared learning, team projects, and long-term connection across industries.</p>
            </div>
          </div>
        </div>
      </section>

      {/* TEAM/PEOPLE SECTION */}
      <section className="team-section">
        <div className="container">
          <div className="team-layout">
            <div className="team-copy">
              <div className="team-heading">
                <div className="team-heading-label">OUR PEOPLE & PARTNERS</div>
                <h2 className="team-heading-title">The Empire Team</h2>
              </div>
              <div className="trusted-section">
                <p>TRUSTED BY</p>
                <div className="logo-slider-wrapper">
                  <div className="logo-slider">
                    {[...trustedLogos, ...trustedLogos].map((org, index) => (
                      <div key={`${org}-${index}`} className="logo-chip">{org}</div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="team-showcase">
              <div className="team-image-panel">
                <div className="team-image-frame">
                  <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=900&q=80" alt={teamMembers[currentTeamIndex].name} />
                </div>
                <div className="team-nav">
                  <button className="nav-arrow prev" onClick={() => setCurrentTeamIndex((prev) => (prev - 1 + teamMembers.length) % teamMembers.length)}>←</button>
                  <button className="nav-arrow next" onClick={() => setCurrentTeamIndex((prev) => (prev + 1) % teamMembers.length)}>→</button>
                </div>
              </div>
              <div className="team-info-card">
                <div className="team-info-header">
                  <div className="team-avatar">
                    <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&q=80" alt={teamMembers[currentTeamIndex].name} />
                  </div>
                  <div className="team-info-meta">
                    <div className="team-card-name">Name: {teamMembers[currentTeamIndex].name}</div>
                    <div className="team-card-title">TITLE: {teamMembers[currentTeamIndex].title}</div>
                  </div>
                </div>
                <p className="team-description">{teamMembers[currentTeamIndex].description}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOUNDATION SECTION */}
      <section className="foundation-section">
        <div className="container foundation-grid">
          <div className="foundation-logo">
            <div className="logo-emblem">EE</div>
          </div>
          <div className="foundation-copy">
            <div className="foundation-label">OUR FOUNDATION</div>
            <h2>Built on Purpose. <span className="highlight">Guided by Service.</span></h2>
            <p>
              At The Emerson Empire, our mission is to educate, empower, and create meaningful opportunities for growth. We believe professional development should remain human, practical, and service-centered — grounded in integrity, leadership, and long-term impact.
            </p>
            <p>
              Across every division, we are building systems, services, and learning experiences that help individuals, teams, and small businesses grow with confidence, dignity, and practical support.
            </p>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS - AGENCY */}
      <section className="how-it-works-section">
        <div className="container">
          <h2 className="section-title">THE PROCESS</h2>
          <h3 className="section-subtitle">How It Works</h3>
          <p className="process-intro">Two developing divisions. One connected ecosystem. Here is how The Emerson Empire is building pathways for support, training, and professional growth.</p>

          <div className="process-columns">
            <div className="process-column">
              <div className="column-header">DIVISION 01 — AGENCY</div>
              {steps.map((step, index) => (
                <div key={index} className="process-item">
                  <div className="step-number">{step.icon}</div>
                  <div>
                    <h4>{step.title}</h4>
                    <p>{step.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="process-column">
              <div className="column-header">DIVISION 02 — EPDG</div>
              {stepsEpdg.map((step, index) => (
                <div key={index} className="process-item">
                  <div className="step-number">{step.icon}</div>
                  <div>
                    <h4>{step.title}</h4>
                    <p>{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* EARLY IMPACT SECTION */}
      <section className="impact-section">
        <div className="container">
          <h2 className="section-title">OUR JOURNEY</h2>
          <h3 className="section-subtitle">EARLY IMPACT</h3>

          <div className="impact-grid">
            <div className="impact-stat-group">
              {impactStats.slice(0, 3).map((stat, index) => (
                <div key={index} className="impact-stat">
                  <div className="impact-value">{stat.value}</div>
                  <p>{stat.label}</p>
                </div>
              ))}
            </div>

            <div className="impact-image">
              <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80" alt="Impact" />
            </div>

            <div className="impact-stat-group">
              {impactStats.slice(3, 6).map((stat, index) => (
                <div key={index} className="impact-stat">
                  <div className="impact-value">{stat.value}</div>
                  <p>{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer-section">
        <div className="container">
          <div className="footer-content">
            <div className="footer-main">
              <h3>EMERSON EMPIRE</h3>
              <p>Built on Purpose. Guided by Service. Designed for Growth.</p>
            </div>
            <div className="footer-links">
              <a href="#">The Emerson Agency</a>
              <a href="#">Professional Development</a>
              <a href="#">About</a>
              <a href="#">Contact</a>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2026 The Emerson Empire LLC. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;