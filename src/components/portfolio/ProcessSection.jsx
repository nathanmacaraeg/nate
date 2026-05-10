import React from 'react';

export default function ProcessSection() {
  const steps = [
    { num: '01', title: 'Research', desc: 'Diving deep into the audience, market trends, and brand goals.' },
    { num: '02', title: 'Plan', desc: 'Structuring timelines, coordinating resources, and setting KPIs.' },
    { num: '03', title: 'Create', desc: 'Executing the creative vision across design, video, and copy.' },
    { num: '04', title: 'Launch', desc: 'Rolling out the campaign with operational precision.' },
    { num: '05', title: 'Measure', desc: 'Analyzing the data, learning, and iterating for the next run.' },
  ];

  return (
    <section id="process" className="section-pad container">
      <div className="reveal" style={{ textAlign: 'center', marginBottom: '5rem' }}>
        <h2>My Working Process</h2>
        <p className="text-sub" style={{ maxWidth: '600px', margin: '0 auto' }}>
          How I turn abstract ideas into measurable results.
        </p>
      </div>

      <div className="process-grid reveal">
        {steps.map((step, idx) => (
          <div key={idx} className="process-step">
            <div className="process-icon">{step.num}</div>
            <h3 style={{ marginBottom: '0.5rem' }}>{step.title}</h3>
            <p className="text-small">{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
