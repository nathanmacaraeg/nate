import React from 'react';

export default function CertificationsSection() {
  const certifications = [
    {
      title: 'Scrum Fundamentals Certified (SFC™)',
      issuer: 'SCRUMstudy',
      badge: 'SFC',
      badgeColor: '#009cde',
      date: 'Issued Jun 2026 · Credential ID 963855',
      tags: ['Scrum', 'Agile', 'Project Management']
    },
    {
      title: 'Scrum: The Basics',
      issuer: 'LinkedIn Learning',
      badge: 'in',
      badgeColor: '#0077b5',
      date: 'Completed Mar 1, 2023 · 1 hour',
      tags: ['Scrum', 'Agile']
    },
    {
      title: 'UX for AI: Design Practices for AI Developers',
      issuer: 'LinkedIn Learning',
      badge: 'in',
      badgeColor: '#0077b5',
      date: 'Completed Aug 16, 2023 · 59 minutes',
      tags: ['AI for Design', 'UX', 'Artificial Intelligence']
    },
    {
      title: 'Prompt Engineering: How to Talk to the AIs',
      issuer: 'LinkedIn Learning',
      badge: 'in',
      badgeColor: '#0077b5',
      date: 'Completed Sep 15, 2025 · 29 minutes',
      tags: ['Prompt Engineering', 'LLMs', 'Generative AI']
    }
  ];

  return (
    <section id="certifications" className="section-pad container" style={{ paddingTop: '2rem', paddingBottom: '2rem' }}>
      <div className="reveal" style={{ marginBottom: '4rem', textAlign: 'center' }}>
        <h2>Awards & Certifications</h2>
        <div style={{ height: '1px', background: 'var(--border)', margin: '1rem auto', maxWidth: '200px' }}></div>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '2rem'
      }}>
        {certifications.map((cert, index) => (
          <div key={index} className="card reveal" style={{ display: 'flex', flexDirection: 'column', gap: '1rem', cursor: 'default' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <div style={{ 
                width: '32px', height: '32px', borderRadius: '8px', 
                background: cert.badgeColor, color: '#fff', 
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '0.8rem', fontWeight: 700, flexShrink: 0
              }}>
                {cert.badge}
              </div>
              <span className="text-sub" style={{ fontSize: '0.9rem', fontWeight: 500 }}>{cert.issuer}</span>
            </div>
            
            <div>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 600, lineHeight: '1.4', marginBottom: '0.5rem' }}>{cert.title}</h3>
              <div className="text-small">{cert.date}</div>
            </div>

            <div className="tag-list" style={{ marginTop: 'auto', paddingTop: '0.5rem' }}>
              {cert.tags.map((tag, tIdx) => (
                <span key={tIdx} className="tag" style={{ fontSize: '0.75rem', padding: '0.25rem 0.75rem' }}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
