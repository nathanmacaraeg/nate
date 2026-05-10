import React from 'react';

export default function AboutSection() {
  return (
    <section id="about" className="section-pad container">
      {/* General About */}
      <div className="grid-2 align-center reveal" style={{ marginBottom: '8rem' }}>
        <div>
          <h2 className="accent-text" style={{ fontSize: '1.25rem', marginBottom: '0.5rem', letterSpacing: '0.05em' }}>About Me</h2>
          <h3 style={{ fontSize: 'clamp(2rem, 4vw, 2.5rem)', marginBottom: '1.5rem', fontWeight: 600, lineHeight: '1.1' }}>
            Connecting people, plans, and ideas.
          </h3>
        </div>
        <div>
          <p className="text-sub" style={{ marginBottom: '1.5rem' }}>
            I’ve always been the kind of person who enjoys meeting new people and learning what makes them tick. Whether it’s a team project, a brand idea, a social campaign, or a random conversation that turns into something bigger, I like finding the connection point and helping things move from there.
          </p>
          <p className="text-sub">
            My background is in project coordination, operations, and content. That taught me how to manage timelines, details, and different goals at the same time. But the part I care about most is the people side: listening well, keeping communication clear, and making the process feel less heavy.
          </p>
        </div>
      </div>

      {/* Professional Biography Snapshot */}
      <div className="card-large reveal">
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <h2 className="accent-text" style={{ fontSize: '1.25rem', marginBottom: '0.5rem', letterSpacing: '0.05em' }}>Built Through Teams & Connections</h2>
          <h3 style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 600 }}>
            Team leadership shaped through communication, trust, and shared progress.
          </h3>
        </div>
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <p className="text-sub">
            My experience across the GTA, Caledon, and Erin has shaped the way I lead, communicate, and build relationships. Through school projects, operations teams, construction environments, locksmith work, and corporate project teams at TELUS Health, I’ve learned how to work with different personalities, communication styles, and goals. These experiences helped me become someone who listens first, brings people together, and turns conversations into clear next steps. Whether I’m supporting a team, sharing ideas, or helping move a project forward, I focus on building trust, keeping people aligned, and helping the work reach its full potential.
          </p>
        </div>
      </div>
    </section>
  );
}
