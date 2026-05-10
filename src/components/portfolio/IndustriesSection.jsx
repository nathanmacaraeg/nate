import React from 'react';

export default function IndustriesSection() {
  const industries = [
    { title: 'Brand & Culture Marketing', desc: 'Helping brands connect with people through content, stories, and experiences that feel real.' },
    { title: 'Entertainment & Talent', desc: 'Supporting creative teams, creators, and campaigns by keeping communication clear and the work organized.' },
    { title: 'Social Media & Content', desc: 'Planning and executing digital ideas that build audience engagement and trust.' },
    { title: 'Creative Project Management', desc: 'Bridging the gap between the creative vision and the operational steps needed to launch it.' },
    { title: 'Lifestyle & Community Brands', desc: 'Working with brands that focus on shared interests, community building, and authentic living.' },
    { title: 'Gaming, Toys & Play', desc: 'Interested in brands that bring imagination, creativity, and community into everyday experiences.' },
    { title: 'Events & Experiences', desc: 'Coordinating the moving pieces behind physical or digital events so the final experience feels seamless.' },
    { title: 'Creator Partnerships', desc: 'Connecting talent with brand goals to build campaigns that make sense for both sides.' }
  ];

  return (
    <section 
      id="industries" 
      className="section-pad" 
      style={{ 
        background: 'var(--bg)', 
        position: 'relative', 
        zIndex: 1 
      }}
    >
      <div className="container" style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 clamp(1.5rem, 5vw, 3rem)' }}>
        <div className="reveal" style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2>Where I Fit</h2>
          <p className="text-sub" style={{ maxWidth: '600px', margin: '0 auto' }}>
            Industries and spaces I am actively building my career toward.
          </p>
        </div>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '2.5rem'
        }}>
          {industries.map((ind, idx) => (
            <div key={idx} className="card reveal" style={{ transitionDelay: `${idx * 0.05}s` }}>
              <h3 style={{ marginBottom: '0.75rem', fontSize: '1.25rem', color: 'var(--ink)' }}>{ind.title}</h3>
              <p className="text-small">{ind.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
