import React, { useState } from 'react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <header id="nav">
        <a href="#" className="nav-logo">Nathan Macaraeg</a>
        
        {/* Desktop Nav */}
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#cogs">Approach</a>
          <a href="#industries">Fit</a>
          <a href="#skills">Skills</a>
          <a href="#work">Work</a>
          <a href="#contact" className="btn btn-primary" style={{ padding: '0.5rem 1.25rem', fontSize: '0.875rem' }}>Contact</a>
        </div>

        {/* Mobile Toggle */}
        <button className="mobile-menu-btn" onClick={() => setIsOpen(true)}>Menu</button>
      </header>

      {/* Mobile Overlay */}
      <div className={`mobile-overlay ${isOpen ? 'open' : ''}`}>
        <button className="close-btn" onClick={closeMenu}>✕</button>
        <a href="#about" onClick={closeMenu}>About</a>
        <a href="#cogs" onClick={closeMenu}>Approach</a>
        <a href="#industries" onClick={closeMenu}>Fit</a>
        <a href="#skills" onClick={closeMenu}>Skills</a>
        <a href="#work" onClick={closeMenu}>Work</a>
        <a href="#contact" onClick={closeMenu}>Contact</a>
      </div>
    </>
  );
}
