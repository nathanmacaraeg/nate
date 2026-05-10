import React from 'react';

export default function SkillSchematic() {
  const focusAreas = [
    { title: 'Networking & Relationship Building', icon: '🤝', desc: 'Meeting people, finding common ground, and building real connections that can turn into ideas, projects, or opportunities.' },
    { title: 'Inclusive Communication', icon: '💬', desc: 'Listening first, making people feel heard, and keeping the conversation clear so everyone knows what matters.' },
    { title: 'Project Coordination', icon: '⚡', desc: 'Keeping timelines, tasks, people, and moving pieces organized without making the process more complicated than it needs to be.' },
    { title: 'Content Planning', icon: '📝', desc: 'Turning rough ideas and conversations into simple content plans that people can actually act on.' },
    { title: 'Team Alignment', icon: '🎯', desc: 'Connecting people, priorities, and next steps so the group knows where the work is going.' },
    { title: 'Creative Direction', icon: '🎬', desc: 'Helping ideas feel consistent across visuals, messaging, tone, and overall vibe.' },
    { title: 'Servant Leadership', icon: '🧭', desc: 'Supporting the people around me by removing confusion, helping where needed, and keeping things moving.' },
    { title: 'Culture & Community', icon: '🌍', desc: 'Understanding what people connect with and using that to shape better content, events, and brand experiences.' }
  ];

  return (
    <section id="skills" className="section-pad container">
      <div className="reveal" style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <h2>Skills &amp; Focus Areas</h2>
        <p className="text-sub" style={{ maxWidth: '600px', margin: '0 auto' }}>
          What I bring to the table when working with a team.
        </p>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '2rem'
      }}>
        {focusAreas.map((area, idx) => (
          <div key={idx} className="card reveal" style={{ transitionDelay: `${idx * 0.05}s` }}>
            <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{area.icon}</div>
            <h3 style={{ marginBottom: '0.5rem', fontSize: '1.25rem' }}>{area.title}</h3>
            <p className="text-small">{area.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
