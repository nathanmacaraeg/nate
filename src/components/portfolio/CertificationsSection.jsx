import React from 'react';

export default function CertificationsSection() {
  const certifications = [
    {
      title: 'Prompt Engineering: How to Talk to the AIs',
      issuer: 'LinkedIn',
      date: 'Sep 2025',
      fileName: 'prompt-engineering.jpg'
    },
    {
      title: 'UX for AI: Design Practices for AI Developers',
      issuer: 'LinkedIn',
      date: 'Aug 2023',
      fileName: 'ux-for-ai.jpg'
    },
    {
      title: 'Scrum: The Basics',
      issuer: 'LinkedIn',
      date: 'Mar 2023',
      fileName: 'scrum-basics.jpg'
    },
    {
      title: 'Scrum Fundamentals Certified (SFC)',
      issuer: 'Vabro.ai and VMEdu.com',
      date: 'Feb 2023',
      fileName: 'scrum-fundamentals.jpg'
    }
  ];

  return (
    <section id="certifications" className="section container">
      <h2 className="heading-2">Certifications</h2>
      <div className="ledger">
        {certifications.map((cert, index) => (
          <div key={index} className="item-card">
            <div>
              <h3 className="heading-3">
                <a href={`/certifications/${cert.fileName}`} download style={{ border: 'none' }} title={`Download ${cert.title} Certificate`}>
                  {cert.title}
                  <span style={{ fontSize: '0.8rem', marginLeft: '0.5rem', opacity: 0.7 }}>↓ PDF/JPG</span>
                </a>
              </h3>
              <p className="text-muted">{cert.issuer}</p>
            </div>
            <div className="text-muted" style={{ fontVariantNumeric: 'tabular-nums' }}>{cert.date}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
