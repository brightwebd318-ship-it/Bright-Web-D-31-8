import React, { useState } from 'react';
import SEO from '../components/SEO';
import slideMarketing from '../assets/slide_marketing.png';
import uiDesign from '../assets/ui_design_abstract_1773205075484.png';
import workspaceCoding from '../assets/workspace_coding_1773205021067.png';
import collaborationDev from '../assets/collaboration_dev_1773205090628.png';
import slideWebDev from '../assets/slide_webdev.png';
import slideSEO from '../assets/slide_seo.png';

const SAMPLE_PROJECTS = [
  { id: 1, title: 'Astra Commerce', category: 'E-commerce', desc: 'Fast, conversion-focused online store with payment integration.', thumb: slideMarketing },
  { id: 2, title: 'Bright Landing', category: 'Marketing', desc: 'High-converting landing page with A/B testing and analytics.', thumb: uiDesign },
  { id: 3, title: 'Flow CRM', category: 'Web App', desc: 'Custom CRM with workflows, reporting, and integrations.', thumb: workspaceCoding },
  { id: 4, title: 'Nova Blog', category: 'Content', desc: 'SEO-first blog with fast load times and rich media support.', thumb: collaborationDev },
  { id: 5, title: 'ShopLite', category: 'E-commerce', desc: 'Lightweight store for startups with guided onboarding.', thumb: slideWebDev },
  { id: 6, title: 'Pulse Analytics', category: 'Web App', desc: 'Realtime dashboards and performance monitoring.', thumb: slideSEO }
];

export default function Portfolio(){
  const [filter, setFilter] = useState('All');
  const [modal, setModal] = useState(null);

  const categories = ['All', ...Array.from(new Set(SAMPLE_PROJECTS.map(p => p.category)))];
  const visible = filter === 'All' ? SAMPLE_PROJECTS : SAMPLE_PROJECTS.filter(p => p.category === filter);

  return (
    <div className="page portfolio-page">
      <SEO 
        title="Our Portfolio" 
        description="Check out our latest projects at BrightWebD 31:8. We deliver high-quality web solutions for diverse industries in Kochi and beyond."
        keywords="web development portfolio, BrightWebD projects, website design examples Kochi"
      />
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
