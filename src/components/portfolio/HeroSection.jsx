import React from 'react';
import profileHeadshot from '../../assets/profile-headshot.png';

export default function HeroSection() {
  return (
    <section id="hero" className="section-pad container reveal" style={{ minHeight: '85vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div className="hero-split">
        {/* Left Side — Photo + Name */}
        <div className="hero-left">
          <img
            src={profileHeadshot}
            alt="Nathan Macaraeg"
            className="profile-photo"
          />
          <h2 className="hero-name">Nathan Macaraeg</h2>
          <p className="hero-label">
            Business Student • Creative Project Manager • People-First Communicator
          </p>
        </div>

        {/* Right Side — Copy + CTA */}
        <div className="hero-right">
          <h1 style={{ marginBottom: '1.5rem', fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}>
            Good ideas move faster when the right people connect.
          </h1>
          <p className="text-sub" style={{ fontSize: '1.2rem', marginBottom: '1.25rem' }}>
            I'm a business student and creative project manager who likes meeting people, listening to what they need, and turning conversations into clear plans, content, and finished work.
          </p>
          <p className="text-small" style={{ marginBottom: '2.5rem', color: 'var(--ink-light)', fontStyle: 'italic' }}>
            Built around people, stories, ideas, and the small connections that make the cogs spin.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <a href="#work" className="btn btn-primary">View Work</a>
            <a href="#contact" className="btn btn-outline">Contact Me</a>
          </div>
        </div>
      </div>
    </section>
  );
}
