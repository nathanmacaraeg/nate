import React from 'react';

export default function WorkLedger() {
  const projects = [
    {
      title: 'Ethics, Diversity & Inclusion Research Project',
      date: 'Sep – Oct 2025',
      highlights: [
        'Synthesized 4 academic papers to identify 3 key areas for HR improvement in ethics, diversity, and inclusion',
        'Presented findings to an audience of 200+ students at the University of Guelph'
      ],
      tags: ['Research', 'Public Speaking', 'HR & EDI']
    },
    {
      title: 'Vacuum Filter Blowback System',
      date: 'Jan – Apr 2020',
      highlights: [
        'Led a 4-person engineering team, managing schedules, meetings, and milestones to deliver on time',
        'Produced 20+ high-fidelity CAD designs in SolidWorks and AutoCAD for 2 external partner firms'
      ],
      tags: ['Mechanical Engineering', 'SolidWorks', 'Team Lead', 'AutoCAD']
    },
    {
      title: 'Enterprise Data Privacy Initiatives — TELUS Health',
      date: 'Sep 2022 – May 2025',
      highlights: [
        'Scrum Master for 5+ data privacy initiatives across 15 cross-functional stakeholders',
        'Coordinated 40+ UAT and production changes, reducing follow-up cycles by 95%',
        'Rolled out a Change Management workflow adopted by 5 managers, cutting process delays by 50%'
      ],
      tags: ['Scrum Master', 'Agile', 'JIRA', 'Change Management']
    }
  ];

  return (
    <section id="work" className="section-pad container">
      <div className="reveal" style={{ marginBottom: '4rem', textAlign: 'center' }}>
        <h2>Projects</h2>
        <div style={{ height: '1px', background: 'var(--border)', margin: '1rem auto', maxWidth: '200px' }}></div>
      </div>

      {/* Spotlight */}
      <div className="card reveal" style={{ marginBottom: '3rem', padding: '3rem', display: 'flex', gap: '2rem', alignItems: 'center', background: 'var(--bg-glass)', border: '2px solid rgba(0,102,204,0.15)' }}>
        <div style={{ fontSize: '3rem', flexShrink: 0 }}>🛸</div>
        <div>
          <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Gryphon Aerospace Club — Clarion Drone Licensing Initiative</h3>
          <p className="text-sub" style={{ fontSize: '1.05rem', marginBottom: '1.5rem' }}>
            Active member of the Gryphon Aerospace Club at the University of Guelph. The club partnered with Clarion Drone Academy to bring Transport Canada–recognized drone licensing to campus, offering professional and recreational certification to all students.
          </p>
          <div className="tag-list">
            <span className="tag" style={{ color: 'var(--accent)', borderColor: 'rgba(0,102,204,0.3)', background: 'rgba(0,102,204,0.05)' }}>Transport Canada Certified</span>
            <span className="tag" style={{ color: 'var(--accent)', borderColor: 'rgba(0,102,204,0.3)', background: 'rgba(0,102,204,0.05)' }}>UAV / Drones</span>
            <span className="tag" style={{ color: 'var(--accent)', borderColor: 'rgba(0,102,204,0.3)', background: 'rgba(0,102,204,0.05)' }}>University of Guelph</span>
          </div>
        </div>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
        gap: '2rem'
      }}>
        {projects.map((proj, idx) => (
          <div key={idx} className="card reveal" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', cursor: 'default' }}>
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '1rem' }}>
                <h3 style={{ fontSize: '1.25rem', lineHeight: '1.3' }}>{proj.title}</h3>
                <span className="text-small" style={{ whiteSpace: 'nowrap', paddingTop: '0.2rem' }}>{proj.date}</span>
              </div>
            </div>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {proj.highlights.map((hl, i) => (
                <div key={i} style={{ display: 'flex', gap: '0.5rem', alignItems: 'flex-start' }}>
                  <span style={{ color: 'var(--accent)' }}>→</span>
                  <span className="text-sub" style={{ fontSize: '0.95rem' }}>{hl}</span>
                </div>
              ))}
            </div>

            <div className="tag-list" style={{ marginTop: 'auto', paddingTop: '1rem' }}>
              {proj.tags.map((tag, sIdx) => (
                <span key={sIdx} className="tag" style={{ fontSize: '0.8rem', padding: '0.25rem 0.75rem' }}>
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
