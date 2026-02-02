import React, { useState } from 'react';

const SAMPLE_PROJECTS = [
  { id: 1, title: 'Astra Commerce', category: 'E-commerce', desc: 'Fast, conversion-focused online store with payment integration.', thumb: '/assets/portfolio-1.svg' },
  { id: 2, title: 'Bright Landing', category: 'Marketing', desc: 'High-converting landing page with A/B testing and analytics.', thumb: '/assets/portfolio-2.svg' },
  { id: 3, title: 'Flow CRM', category: 'Web App', desc: 'Custom CRM with workflows, reporting, and integrations.', thumb: '/assets/portfolio-3.svg' },
  { id: 4, title: 'Nova Blog', category: 'Content', desc: 'SEO-first blog with fast load times and rich media support.', thumb: '/assets/portfolio-1.svg' },
  { id: 5, title: 'ShopLite', category: 'E-commerce', desc: 'Lightweight store for startups with guided onboarding.', thumb: '/assets/portfolio-2.svg' },
  { id: 6, title: 'Pulse Analytics', category: 'Web App', desc: 'Realtime dashboards and performance monitoring.', thumb: '/assets/portfolio-3.svg' }
];

export default function Portfolio(){
  const [filter, setFilter] = useState('All');
  const [modal, setModal] = useState(null);

  const categories = ['All', ...Array.from(new Set(SAMPLE_PROJECTS.map(p => p.category)))];
  const visible = filter === 'All' ? SAMPLE_PROJECTS : SAMPLE_PROJECTS.filter(p => p.category === filter);

  return (
    <div className="page">
      <div className="portfolio-header">
        <div>
          <h2>Portfolio</h2>
          <p className="lead">Selected projects showcasing design, performance and conversions.</p>
        </div>
        <div className="portfolio-filters">
          {categories.map(cat => (
            <button
              key={cat}
              className={"btn " + (filter === cat ? 'primary' : 'ghost')}
              onClick={() => setFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="portfolio-grid">
        {visible.map(p => (
          <article key={p.id} className="project-card" onClick={() => setModal(p)}>
            <div className="project-thumb" style={{backgroundImage:`url(${p.thumb})`}} aria-hidden />
            <div className="project-info">
              <h3>{p.title}</h3>
              <div className="cat">{p.category}</div>
              <p className="summary">{p.desc}</p>
            </div>
          </article>
        ))}
      </div>

      {modal && (
        <div className="modal-overlay" onClick={() => setModal(null)}>
          <div className="modal" onClick={e => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setModal(null)}>✕</button>
            <div className="modal-thumb" style={{backgroundImage:`url(${modal.thumb})`}} />
            <h3>{modal.title}</h3>
            <div className="cat" style={{marginBottom:12}}>{modal.category}</div>
            <p style={{lineHeight:1.6}}>{modal.desc}</p>
          </div>
        </div>
      )}
    </div>
  );
}
