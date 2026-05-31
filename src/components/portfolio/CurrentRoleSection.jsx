import React from 'react';

export default function CurrentRoleSection() {
  return (
    <section className="container reveal" style={{ paddingBottom: '6rem', marginTop: '-2rem' }}>
      <div className="card" style={{ padding: '2rem 2.5rem', display: 'flex', alignItems: 'center', gap: '2rem', flexWrap: 'wrap', border: '2px solid rgba(0, 102, 204, 0.15)' }}>
        <div style={{ flex: '1 1 250px' }}>
          <div style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Current Role</div>
          <h3 style={{ fontSize: '1.5rem', fontWeight: 600, marginTop: '0.5rem', marginBottom: '0.25rem' }}>Social Media Coordinator</h3>
          <div style={{ color: 'var(--ink)', fontWeight: 500 }}>University of Guelph &bull; BComm Management Co-op</div>
        </div>
        <div style={{ flex: '2 1 400px' }}>
          <p className="text-sub" style={{ margin: 0, fontSize: '1.1rem', lineHeight: '1.6' }}>
            Currently working on content, copywriting, and collaborating with the Communications and Marketing team.
          </p>
        </div>
      </div>
    </section>
  );
}
