import React, { useEffect, useRef, useState } from 'react';
import "../../landingpage.css";

interface Testimonial {
  name: string;
  title: string;
  company: string;
  location: string;
  type: string;
}

interface Step {
  icon: string;
  title: string;
  description: string;
}

interface StoryCard {
  label: string;
  title: string;
  detail: string;
}

const LandingPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const navLinks = ['Our programs', 'Career fields', 'Destinations', 'Alumni stories'];
  const partnerLogos = ['BBC', 'Bloomberg', 'CNN', 'Entrepreneur', 'FT', 'Forbes', 'TIME', 'WSJ'];
  const duplicatedPartnerLogos = [...partnerLogos, ...partnerLogos];

  const steps: Step[] = [
    {
      icon: '📝',
      title: 'Aplica',
      description: 'Aplica y programa tu entrevista.'
    },
    {
      icon: '💬',
      title: 'Entrevista',
      description: 'Si tu entrevista es exitosa, confirma tu inscripción con un depósito de matrícula.'
    },
    {
      icon: '🚀',
      title: 'Desarrolla tu potencial',
      description: 'Colabora en el proceso de selección de pasantía y acelera tu carrera.'
    }
  ];

  const stats = [
    { value: '+2,000', label: 'participantes talentosos desarrollan su potencial a través de nuestros programas cada año' },
    { value: '+120', label: 'universidades asociadas de 6 continentes diferentes' },
    { value: '+150', label: 'nacionalidades representadas por nuestro diverso grupo de participantes' },
    { value: '+3,000', label: 'empresas asociadas en búsqueda de pasantes' }
  ];

  const storyCards: StoryCard[] = [
    {
      label: 'Meet the intern',
      title: 'Karanpreet',
      detail: 'Un vistazo a la experiencia internacional en acción.'
    },
    {
      label: 'Career update',
      title: 'Adeola',
      detail: 'Historias reales de avance profesional desde Londres.'
    },
    {
      label: 'Global team',
      title: 'Agostina',
      detail: 'Conexiones internacionales y oportunidades reales.'
    },
    {
      label: 'Marketing insight',
      title: 'Alayne',
      detail: 'Una pasantía con impacto en la industria creativa.'
    }
  ];

  const testimonials: Testimonial[] = [
    {
      name: 'Adelle Dechen Vincent',
      title: 'Art testimonial',
      company: 'School of Visual Arts',
      location: 'Tokyo',
      type: 'A'
    },
    {
      name: 'Adeola Olatunji',
      title: 'Social work testimonial',
      company: 'University of London',
      location: 'Remote',
      type: 'S'
    },
    {
      name: 'Agostina Laborde',
      title: 'HR testimonial',
      company: 'Universidad de Palermo',
      location: 'New York',
      type: 'H'
    },
    {
      name: 'Alayne Bohlander',
      title: 'Marketing testimonial',
      company: 'Western Washington University',
      location: 'Melbourne',
      type: 'M'
    }
  ];

  const partnerUniversities = [
    'Penn', 'Sydney', 'Northwestern', 'LSE',
    'Sorbonne', 'Erasmus', 'NUS', 'Carleton',
    'Monterrey', 'Cornell', 'Western Sydney', 'University of York'
  ];

  const partnerLogosRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = partnerLogosRef.current;
    if (!container) return;

    let frameId = 0;
    const step = () => {
      if (!container) return;
      container.scrollLeft += 0.6;
      if (container.scrollLeft >= container.scrollWidth / 2) {
        container.scrollLeft -= container.scrollWidth / 2;
      }
      frameId = window.requestAnimationFrame(step);
    };

    frameId = window.requestAnimationFrame(step);
    return () => window.cancelAnimationFrame(frameId);
  }, []);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  return (
    <div className="landing-page">
      <nav className="navbar">
        <div className="container navbar-container">
          <div className="logo">THE EMERSON AGENCY</div>
          <div className="nav-links">
            {navLinks.map((link) => (
              <a key={link} href="#" className="nav-link">{link}</a>
            ))}
          </div>
          <div className="nav-buttons">
            <button className="btn btn-outline">Login</button>
            <button className="btn btn-primary">Aplica ya</button>
          </div>
        </div>
      </nav>

      <section className="hero-section">
        <div className="container hero-grid">
          <div className="hero-copy">
            <h1 className="hero-title">Desarrolla tu potencial con una pasantía en el extranjero</h1>
            <p className="hero-description">
              Trabajo de forma remota o elige entre nuestros emocionantes destinos para hacer una pasantía internacional.
              Podrías trabajar en empresas líderes o startups innovadoras en Londres, Nueva York, Madrid, Tokio y más.
            </p>
            <div className="hero-buttons">
              <button className="btn btn-primary">Apply now</button>
            </div>
          </div>
          <div className="hero-visual">
            <div className="hero-image-card"></div>
          </div>
        </div>
      </section>

      <section className="partner-logos-section">
        <div className="container partner-logos-row" ref={partnerLogosRef}>
          {duplicatedPartnerLogos.map((logo, index) => (
            <div key={`${logo}-${index}`} className="partner-logo-item">{logo}</div>
          ))}
        </div>
      </section>

      <section className="featured-section">
        <div className="container featured-grid">
          <div className="featured-image-card">
            <div className="featured-image-label">Business</div>
          </div>
          <div className="featured-copy">
            <h2>Elige entre más de 20 carreras profesionales</h2>
            <p>
              Destaca tu currículum con uno de nuestros programas de pasantías internacionales en una amplia gama de áreas laborales.
            </p>
            <a href="#" className="text-link">Ver todas las carreras disponibles →</a>
          </div>
        </div>
      </section>

      <section className="destination-highlight-section">
        <div className="container destination-highlight-grid">
          <div className="destination-copy">
            <h2>Acelera tu carrera con experiencia global</h2>
            <p>
              Trabaja de forma remota o elige entre 9 emocionantes destinos distintos para tu pasantía internacional, con hasta 5 días en la oficina.
              ¡Podrías hacer una pasantía en empresas líderes o startups innovadoras en Londres, Nueva York, Madrid, Tokio o en uno de nuestros otros increíbles destinos!
            </p>
            <a href="#" className="text-link">Ver todos los destinos disponibles →</a>
          </div>
          <div className="destination-image-card">
            <div className="destination-image-label">London</div>
          </div>
        </div>
      </section>

      <section className="how-it-works-section">
        <div className="container">
          <div className="how-it-works-content">
            <div className="how-it-works-left">
              <h2>Cómo funciona</h2>
              <p>
                Obtén experiencia profesional invaluable, amplía tu red de contactos y haz que tu currículum brille.
              </p>
              <div className="how-it-works-actions">
                <button className="btn btn-primary">Apply now</button>
                <button className="btn btn-outline">Ver programas</button>
              </div>
            </div>
            <div className="how-it-works-right">
              <div className="process-steps">
                {steps.map((step, index) => (
                  <div key={index} className="process-step">
                    <div className="step-icon">{step.icon}</div>
                    <div>
                      <h4>{step.title}</h4>
                      <p>{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="statistics-section">
        <div className="container">
          <h2>En números</h2>
          <p className="stats-intro">
            En The Intern Group, inspiramos y motivamos a las personas a crecer en sí mismas, descubrir su pasión y desarrollar su potencial.
          </p>
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stat-card">
                <div className="stat-value">{stat.value}</div>
                <p className="stat-label">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="stories-section">
        <div className="container">
          <h2>¿Quieres ver qué están haciendo nuestros pasantes?</h2>
          <div className="story-cards">
            {storyCards.map((story, index) => (
              <div key={index} className={`story-card story-card-${index + 1}`}>
                <div className="story-image"></div>
                <div className="story-copy">
                  <span>{story.label}</span>
                  <h4>{story.title}</h4>
                  <p>{story.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="partners-section">
        <div className="container">
          <h2>Socios de 120+ de las mejores universidades de 6 continentes</h2>
          <div className="partners-grid">
            {partnerUniversities.map((uni) => (
              <div key={uni} className="partner-logo-card">{uni}</div>
            ))}
          </div>
        </div>
      </section>

      <section className="testimonials-section testimonials-gallery-section">
        <div className="container">
          <h2>Únete a nuestra red global de +15,000 ex participantes</h2>
          <div className="testimonials-gallery">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-card gallery-card">
                <div className={`testimonial-image testimonial-image-${index + 1}`} />
                <div className="testimonial-quote">
                  “Esta pasantía me ayudó a consolidar una experiencia profesional única y global.”
                </div>
                <div className="testimonial-meta">
                  <strong>{testimonial.name}</strong>
                  <span>{testimonial.company} · {testimonial.location}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="testimonial-cta-copy">
            <h3>¿Listo para destacar con una pasantía en el extranjero?</h3>
          </div>
          <button className="btn btn-primary">Apply now</button>
        </div>
      </section>

      <section className="newsletter-section newsletter-cta-section">
        <div className="container newsletter-row">
          <div>
            <h3>Subscribe via email</h3>
            <p>Subscribe to get insights sent directly to your inbox.</p>
          </div>
          <form className="newsletter-form" onSubmit={handleSubscribe}>
            <input 
              type="email" 
              placeholder="name@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="newsletter-input"
              required
            />
            <button type="submit" className="btn btn-subscribe">Subscribe</button>
          </form>
          {subscribed && <p className="success-message">✓ Thank you for subscribing!</p>}
        </div>
      </section>

      <footer className="footer-section">
        <div className="container">
          <div className="footer-top">
            <div className="footer-logo">THE EMERSON AGENCY</div>
          </div>
          <div className="footer-grid">
            <div className="footer-col">
              <h4>SERVICES</h4>
              <ul>
                <li><a href="#">Strategic Advisory</a></li>
                <li><a href="#">Brand Communications</a></li>
                <li><a href="#">Regulatory Strategy</a></li>
                <li><a href="#">Growth Enablement</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>INSIGHTS</h4>
              <ul>
                <li><a href="#">Case Studies</a></li>
                <li><a href="#">Thought Leadership</a></li>
                <li><a href="#">Client Stories</a></li>
                <li><a href="#">News</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>CONTACT</h4>
              <ul>
                <li>US: +1 (800) 555-0123</li>
                <li>UK: +44 20 7000 0000</li>
                <li>APAC: +61 2 8000 0000</li>
                <li><a href="mailto:hello@emersonagency.com">hello@emersonagency.com</a></li>
              </ul>
            </div>
          </div>
          <div className="footer-divider"></div>
          <div className="footer-bottom">
            <div className="footer-links">
              <a href="#">Terms & Conditions</a>
              <span>·</span>
              <a href="#">Privacy Policy</a>
              <span>·</span>
              <a href="#">Cookie Policy</a>
            </div>
            <div className="social-links">
              <a href="#" aria-label="LinkedIn">in</a>
              <a href="#" aria-label="X">𝕏</a>
              <a href="#" aria-label="Instagram">ins</a>
            </div>
          </div>
          <div className="footer-copyright">
            <p>©2026 The Emerson Agency LLC. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;

