import { useState } from "react";
import "../../landingpage.css";
export default function LandingPage() {
  const [email, setEmail] = useState("");
  const [subscribeMessage, setSubscribeMessage] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribeMessage("✓ Thank you for subscribing!");
      setEmail("");
      setTimeout(() => setSubscribeMessage(""), 3000);
    }
  };

  return (
    <div style={{ backgroundColor: "#0a0e27", minHeight: "100vh" }}>
      {/* Navigation */}
      <nav className="navbar">
        <div className="container">
          <div className="nav-content">
            <div className="nav-logo">
               The Emerson
            </div>
            <ul className="nav-menu">
              <li><a href="#home">Home</a></li>
              <li><a href="#features">Features</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1>One Empire. Three Powerhouses.</h1>
            <p>
              The Emerson Empire LLC is the unified command center connecting The Emerson 
              Agency LLC and the Emerson Professional Development Group — built for sustainable 
              growth, accountability, and community impact.
            </p>
            <div className="hero-buttons">
              <button className="btn btn-primary">
                ⚡ Agency Ops →
              </button>
              <button className="btn btn-secondary">
                📚 Dev Group →
              </button>
              <button className="btn btn-outline">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section style={{ backgroundColor: "#0f1629", borderTop: "1px solid #1e293b" }}>
        <div className="container">
          <h2 className="text-center" style={{ marginBottom: "3rem" }}>Command Center Metrics</h2>
          <div className="grid grid-3">
            <div className="stat-card">
              <div className="stat-icon">👥</div>
              <div className="stat-number">0</div>
              <div className="stat-label">Total Members</div>
              <p style={{ fontSize: "0.875rem", marginTop: "0.5rem" }}>↑ 12 this week</p>
            </div>
            <div className="stat-card">
              <div className="stat-icon">✅</div>
              <div className="stat-number">0</div>
              <div className="stat-label">Active Tasks</div>
              <p style={{ fontSize: "0.875rem", marginTop: "0.5rem" }}>8 in progress</p>
            </div>
            <div className="stat-card">
              <div className="stat-icon">📚</div>
              <div className="stat-number">0</div>
              <div className="stat-label">Courses Live</div>
              <p style={{ fontSize: "0.875rem", marginTop: "0.5rem" }}>100% published</p>
            </div>
            <div className="stat-card">
              <div className="stat-icon">💰</div>
              <div className="stat-number">$0</div>
              <div className="stat-label">Revenue MTD</div>
              <p style={{ fontSize: "0.875rem", marginTop: "0.5rem" }}>↑ 28% vs last month</p>
            </div>
          </div>
        </div>
      </section>

      {/* Modules Section */}
      <section style={{ backgroundColor: "#0a0e27" }}>
        <div className="container">
          <h2 className="text-center">Our Modules</h2>
          <div className="grid grid-2">
            <div className="card">
              <div style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>EA</div>
              <h3>The Emerson Agency LLC</h3>
              <p>Kanban task boards, project management, team assignments, and real-time status updates for field agents.</p>
              <div style={{ marginTop: "1.5rem", display: "flex", gap: "1rem", fontSize: "0.875rem" }}>
                <div>
                  <div style={{ color: "#d4af37", fontWeight: "700" }}>84</div>
                  <div style={{ color: "#a8b5d4" }}>Tasks</div>
                </div>
                <div>
                  <div style={{ color: "#d4af37", fontWeight: "700" }}>12</div>
                  <div style={{ color: "#a8b5d4" }}>Projects</div>
                </div>
                <div>
                  <div style={{ color: "#d4af37", fontWeight: "700" }}>3</div>
                  <div style={{ color: "#a8b5d4" }}>Members</div>
                </div>
              </div>
              <button className="btn btn-primary" style={{ marginTop: "1.5rem", width: "100%" }}>
                Enter Module →
              </button>
            </div>

            <div className="card">
              <div style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>EDG</div>
              <h3>Emerson Professional Development Group</h3>
              <p>Courses, assignments, scoring system with quality & collaboration metrics, and a live global leaderboard.</p>
              <div style={{ marginTop: "1.5rem", display: "flex", gap: "1rem", fontSize: "0.875rem" }}>
                <div>
                  <div style={{ color: "#d4af37", fontWeight: "700" }}>6</div>
                  <div style={{ color: "#a8b5d4" }}>Courses</div>
                </div>
                <div>
                  <div style={{ color: "#d4af37", fontWeight: "700" }}>2</div>
                  <div style={{ color: "#a8b5d4" }}>Learners</div>
                </div>
                <div>
                  <div style={{ color: "#d4af37", fontWeight: "700" }}>86%</div>
                  <div style={{ color: "#a8b5d4" }}>Avg Score</div>
                </div>
              </div>
              <button className="btn btn-primary" style={{ marginTop: "1.5rem", width: "100%" }}>
                Enter Module →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{ 
        backgroundColor: "#0f1629", 
        borderTop: "1px solid #1e293b",
        padding: "4rem 1rem",
        textAlign: "center"
      }}>
        <div className="container">
          <h2>Ready to Transform Your Empire?</h2>
          <p style={{ fontSize: "1.125rem", marginBottom: "2rem" }}>
            Join thousands of leaders building sustainable growth and community impact.
          </p>
          <button className="btn btn-primary" style={{ fontSize: "1.125rem", padding: "1rem 2rem" }}>
            Get Started Today
          </button>
        </div>
      </section>

      {/* Newsletter Section */}
      <section style={{ backgroundColor: "#4db8a8", padding: "3rem 1rem" }}>
        <div className="container" style={{ maxWidth: "600px" }}>
          <h2 style={{ color: "white", textAlign: "center", marginBottom: "1rem" }}>
            Stay Updated
          </h2>
          <p style={{ color: "white", textAlign: "center", marginBottom: "2rem" }}>
            Get the latest insights and updates delivered to your inbox.
          </p>
          <form 
            onSubmit={handleSubscribe}
            style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}
          >
            <input
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-input"
              required
              style={{ flex: 1, minWidth: "200px" }}
            />
            <button
              type="submit"
              className="btn btn-primary"
            >
              Subscribe
            </button>
          </form>
          {subscribeMessage && (
            <p style={{ color: "white", textAlign: "center", marginTop: "1rem", fontWeight: "600" }}>
              {subscribeMessage}
            </p>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-section">
              <h4>👑 The Emerson</h4>
              <p style={{ fontSize: "0.875rem", color: "#a8b5d4" }}>
                Building sustainable growth and community impact through unified leadership.
              </p>
            </div>

            <div className="footer-section">
              <h4>Products</h4>
              <ul>
                <li><a href="#">Empire Hub</a></li>
                <li><a href="#">Agency Ops</a></li>
                <li><a href="#">Dev Group</a></li>
                <li><a href="#">Leaderboard</a></li>
              </ul>
            </div>

            <div className="footer-section">
              <h4>Company</h4>
              <ul>
                <li><a href="#">About</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Careers</a></li>
                <li><a href="#">Contact</a></li>
              </ul>
            </div>

            <div className="footer-section">
              <h4>Legal</h4>
              <ul>
                <li><a href="#">Privacy</a></li>
                <li><a href="#">Terms</a></li>
                <li><a href="#">Security</a></li>
                <li><a href="#">Cookies</a></li>
              </ul>
            </div>
          </div>

          <div className="footer-bottom">
            <p>© 2026 The Emerson Empire LLC. All Rights Reserved.</p>
            <div className="social-links">
              <a href="#" className="social-icon" title="Facebook">f</a>
              <a href="#" className="social-icon" title="Twitter">𝕏</a>
              <a href="#" className="social-icon" title="LinkedIn">in</a>
              <a href="#" className="social-icon" title="Instagram">Ins</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
