import React from 'react';

export default function ContactFooter() {
  return (
    <footer id="contact" style={{ paddingBottom: '0' }}>
      <div className="footer-wrap reveal">
        <div className="container" style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 4rem' }}>
          <h2 style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)', marginBottom: '1.5rem' }}>
            Have a brand, campaign, or content idea? <span className="accent-text">Let’s build it.</span>
          </h2>
          <p className="text-sub" style={{ marginBottom: '3rem' }}>
            I am always looking for new challenges, creative collaborations, and opportunities to blend project management with brand storytelling.
          </p>
          <a href="mailto:nmacarae@uoguelph.ca" className="btn btn-primary" style={{ padding: '1rem 2rem', fontSize: '1.125rem' }}>
            Say Hello
          </a>
        </div>

        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '2rem', borderTop: '1px solid var(--border)', paddingTop: '2rem' }}>
          <div className="social-links" style={{ marginTop: '0' }}>
            <a href="#">LinkedIn</a>
            <a href="#">TikTok</a>
            <a href="#">Resume</a>
            <a href="#">Instagram</a>
          </div>
          <p className="text-small" style={{ color: 'var(--ink-light)' }}>
            © {new Date().getFullYear()} Nathan Macaraeg. Built through conversation.
          </p>
        </div>
      </div>
    </footer>
  );
}
