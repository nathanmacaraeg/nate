import React from 'react';

export default function CogsSection() {
  const steps = [
    { title: 'Meet People', desc: 'Start with conversation. Learn what people care about, what they need, and where the energy is.' },
    { title: 'Connect the Dots', desc: 'Find the link between people, ideas, timing, and opportunity.' },
    { title: 'Move It Forward', desc: 'Turn the conversation into next steps, content, plans, or finished work.' }
  ];

  return (
    <section id="cogs" className="section-pad container">
      <div className="reveal" style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <h2>What Makes the Cogs Spin</h2>
        <p className="text-sub" style={{ maxWidth: '600px', margin: '0 auto' }}>
          My people-first approach to turning ideas into action.
        </p>
      </div>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '2rem'
      }}>
        {steps.map((step, idx) => (
          <div key={idx} className="card reveal" style={{ transitionDelay: `${idx * 0.1}s`, textAlign: 'center' }}>
            <div style={{ fontSize: '2rem', fontWeight: 700, color: 'var(--accent)', marginBottom: '1rem' }}>
              0{idx + 1}
            </div>
            <h3 style={{ marginBottom: '0.5rem', fontSize: '1.25rem' }}>{step.title}</h3>
            <p className="text-small">{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
