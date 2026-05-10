import React from 'react';

export default function WorkLedger() {
  // To add a real download link later, simply replace the '#' in the downloadUrl 
  // with the actual path to your file (e.g., '/downloads/Telus-Case-Study.pdf').
  // If downloadUrl is '#' or empty, the button will display "Download Coming Soon".
  const projects = [
    {
      title: 'TELUS Health Project Coordination',
      desc: 'Coordinating people, timelines, approvals, and communication across different teams to keep important privacy initiatives moving forward smoothly.',
      type: 'Case Study PDF',
      skills: ['Project Coordination', 'Stakeholder Communication', 'Organization', 'Execution'],
      downloadUrl: '#' // <-- ADD YOUR DOWNLOAD LINK HERE
    },
    {
      title: 'Lululemon Operations & Team Execution',
      desc: 'Worked in a fast-paced brand environment where teamwork, energy, and communication mattered every day to keep operations and the floor running.',
      type: 'Case Study PDF',
      skills: ['Operations', 'Teamwork', 'Process Improvement', 'Brand Environment'],
      downloadUrl: '#' // <-- ADD YOUR DOWNLOAD LINK HERE
    },
    {
      title: 'University Social Media Campaign Concepts',
      desc: 'Built campaign concepts focused on student experience and campus culture, creating content that helps people feel connected.',
      type: 'Campaign Deck',
      skills: ['Social Media Strategy', 'Content Planning', 'Student Engagement', 'Brand Voice'],
      downloadUrl: '#' // <-- ADD YOUR DOWNLOAD LINK HERE
    },
    {
      title: 'Cooking TikTok / Short-Form Content',
      desc: 'A personal content project using food, personality, and casual videos to connect with people online and build a relatable presence.',
      type: 'Content Portfolio',
      skills: ['Content Creation', 'Editing', 'Personality', 'Audience Connection'],
      downloadUrl: '#' // <-- ADD YOUR DOWNLOAD LINK HERE
    },
    {
      title: 'Marketing Coursework Projects',
      desc: 'Focused on understanding audiences, telling clear stories, and shaping raw ideas into organized presentations and campaigns.',
      type: 'Project PDF',
      skills: ['Marketing Research', 'Campaign Planning', 'Presentation', 'Strategy'],
      downloadUrl: '#' // <-- ADD YOUR DOWNLOAD LINK HERE
    },
    {
      title: 'Creative Brand Prospecting',
      desc: 'Studying brands, meeting people, networking, and learning where I could fit inside creative industries to shape my career direction.',
      type: 'Project PDF',
      skills: ['Career Direction', 'Brand Awareness', 'Research', 'Creative Industry Interest'],
      downloadUrl: '#' // <-- ADD YOUR DOWNLOAD LINK HERE
    }
  ];

  return (
    <section id="work" className="section-pad container">
      <div className="reveal" style={{ marginBottom: '4rem', textAlign: 'center' }}>
        <h2>Project Portfolio</h2>
        <p className="text-sub" style={{ maxWidth: '600px', margin: '0 auto' }}>
          Explore case studies, campaigns, and content showcasing my working process.
        </p>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
        gap: '2rem'
      }}>
        {projects.map((proj, idx) => {
          const isPlaceholder = !proj.downloadUrl || proj.downloadUrl === '#';

          return (
            <a 
              key={idx} 
              href={proj.downloadUrl}
              target={isPlaceholder ? '_self' : '_blank'}
              rel="noopener noreferrer"
              className="card reveal" 
              style={{ 
                display: 'flex', 
                flexDirection: 'column', 
                gap: '1.5rem',
                textDecoration: 'none',
                color: 'inherit',
                cursor: isPlaceholder ? 'default' : 'pointer'
              }}
              onClick={(e) => {
                if (isPlaceholder) {
                  e.preventDefault(); // Prevent page jump if it's just '#'
                }
              }}
            >
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <span style={{ 
                  fontSize: '0.75rem', 
                  fontWeight: 600, 
                  textTransform: 'uppercase', 
                  letterSpacing: '0.05em', 
                  color: 'var(--accent)' 
                }}>
                  {proj.type}
                </span>
                <h3 style={{ fontSize: '1.25rem', lineHeight: '1.3' }}>{proj.title}</h3>
                <p className="text-sub" style={{ fontSize: '0.95rem' }}>{proj.desc}</p>
              </div>
              
              <div className="tag-list" style={{ marginTop: 'auto' }}>
                {proj.skills.map((skill, sIdx) => (
                  <span key={sIdx} className="tag" style={{ fontSize: '0.75rem', padding: '0.25rem 0.75rem' }}>
                    {skill}
                  </span>
                ))}
              </div>

              <div style={{ paddingTop: '1rem', borderTop: '1px solid var(--border)' }}>
                <div 
                  className={isPlaceholder ? "btn btn-outline" : "btn btn-primary"} 
                  style={{ width: '100%', padding: '0.6rem 1rem', fontSize: '0.875rem' }}
                >
                  {isPlaceholder ? "Download Coming Soon" : "Download Project"}
                </div>
              </div>
            </a>
          );
        })}
      </div>
    </section>
  );
}
