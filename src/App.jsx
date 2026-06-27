import React, { useEffect } from 'react';
import Navigation from './components/portfolio/Navigation';
import HeroSection from './components/portfolio/HeroSection';
import CurrentRoleSection from './components/portfolio/CurrentRoleSection';
import AboutSection from './components/portfolio/AboutSection';
import CogsSection from './components/portfolio/CogsSection';
import IndustriesSection from './components/portfolio/IndustriesSection';
import SkillSchematic from './components/portfolio/SkillSchematic';
import CertificationsSection from './components/portfolio/CertificationsSection';
import WorkLedger from './components/portfolio/WorkLedger';
import ContactFooter from './components/portfolio/ContactFooter';
import InteractiveBackground from './components/portfolio/InteractiveBackground';

export default function App() {
  useEffect(() => {
    // Intersection Observer for scroll reveals
    const revealEls = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('visible');
            observer.unobserve(e.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    revealEls.forEach((el) => observer.observe(el));

    // Smooth Scroll for Hash Links
    const handleHashClick = (e) => {
      if (e.target.tagName === 'A' && e.target.getAttribute('href')?.startsWith('#')) {
        const targetId = e.target.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          e.preventDefault();
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };
    document.addEventListener('click', handleHashClick);

    return () => {
      revealEls.forEach((el) => observer.unobserve(el));
      observer.disconnect();
      document.removeEventListener('click', handleHashClick);
    };
  });

  return (
    <>
      <InteractiveBackground />
      <Navigation />
      <main style={{ paddingTop: '80px' }}>
        <HeroSection />
        <CurrentRoleSection />
        <AboutSection />
        <CogsSection />
        <IndustriesSection />
        <SkillSchematic />
        <CertificationsSection />
        <WorkLedger />
        <ContactFooter />
      </main>
    </>
  );
}
