import React from 'react';
import SEO from '../components/SEO';
import { Link } from 'react-router-dom';
import { Target, Shield, Heart, Users, Award, Briefcase } from 'lucide-react';

export default function About() {
  const companyValues = [
    {
      icon: <Target size={24} />,
      title: "Results-Driven Design",
      desc: "We don't create artistic layout templates that fail to convert. Every line of code, button glow, and pixel width is placed to turn users into clients."
    },
    {
      icon: <Shield size={24} />,
      title: "Technical Excellence",
      desc: "Our websites load instantly, score 95+ on Google Lighthouse parameters, and feature fully structured schemas for immediate index rankings."
    },
    {
      icon: <Heart size={24} />,
      title: "Long-Term Partnerships",
      desc: "We support startups, local realtors, cab fleets, hotels, and brands with technical support and content updates long after deployment."
    }
  ];

  return (
    <div className="page about-page-wrapper" style={{ paddingTop: '100px', paddingBottom: '80px' }}>
      <SEO 
        title="About Our Web Design Company & Development Agency"
        description="BrightWebD is a premium web design company and website development agency in Kochi. Learn about our client values, milestones and SEO team."
        keywords="about web design company, website development agency history, digital solutions company team Kochi, website redesign experts"
        schema={{
          "@context": "https://schema.org",
          "@type": "AboutPage",
          "name": "About BrightWebD",
          "description": "Learn about the core values, technical standards, and achievements of BrightWebD, a leading digital solutions company.",
          "publisher": {
            "@type": "Organization",
            "name": "BrightWebD"
          }
        }}
      />

      <div className="container">
        {/* Header Hero */}
        <div className="section-header">
          <span className="section-tag">Our Identity</span>
          <h1 className="section-title">The Engineering Team Behind <span>BrightWebD</span></h1>
          <p className="section-desc">
            We are a digital solutions company bridging elite technology stacks and user psychology to build websites that grow corporate revenue.
          </p>
        </div>

        {/* Story Section */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: '48px', alignItems: 'center', marginBottom: '80px' }}>
          {/* Illustration Mockup */}
          <div style={{ background: 'rgba(0,0,0,0.2)', border: '1px solid var(--border-color)', borderRadius: '24px', padding: '40px', textAlign: 'center' }}>
            <Award size={48} style={{ color: 'var(--primary)', marginBottom: '16px' }} />
            <h3 style={{ fontSize: '20px', marginBottom: '8px' }}>Award-Winning Standards</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '14px' }}>Lighthouse 99 score • Core Web Vitals passed • Structured FAQ schemas integrated</p>
          </div>

          <div>
            <h2 style={{ fontSize: '28px', marginBottom: '16px' }}>Our Mission: Eliminate Bloat, Maximize Conversion</h2>
            <p style={{ color: 'var(--text-muted)', lineHeight: '1.7', marginBottom: '20px' }}>
              For years, traditional agencies have charged local businesses and startups thousands of dollars for slow WordPress templates that carry hundreds of lines of useless script bloat. These pages drive clients away due to lagging loading speeds.
            </p>
            <p style={{ color: 'var(--text-muted)', lineHeight: '1.7', marginBottom: '24px' }}>
              At BrightWebD, we build custom React, Next, and static site solutions. We are a results-driven website development agency in Kochi, Ernakulam, designing frameworks that secure Google Page 1 rankings and turn traffic into cash flow.
            </p>
            <Link to="/contact" className="btn btn-primary">Work With Our Team</Link>
          </div>
        </div>

        {/* Values Row */}
        <div style={{ marginBottom: '80px' }}>
          <h2 style={{ fontSize: '24px', textAlign: 'center', marginBottom: '40px' }}>Core Principles We Code By</h2>
          <div className="services-interactive-grid">
            {companyValues.map((val, i) => (
              <div key={i} className="glass-card service-interactive-card">
                <div className="service-card-icon-box" style={{ background: 'var(--primary-glow)', color: 'var(--primary)' }}>
                  {val.icon}
                </div>
                <h3 className="service-card-title">{val.title}</h3>
                <p className="service-card-desc">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Milestone Timeline */}
        <div style={{ background: 'var(--bg-section-alt)', borderRadius: '24px', padding: '60px 48px' }}>
          <h2 style={{ fontSize: '24px', textAlign: 'center', marginBottom: '40px' }}>Our Agency Journey</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '24px' }}>
            <div className="glass-card" style={{ padding: '24px' }}>
              <div style={{ fontSize: '20px', fontWeight: 'bold', color: 'var(--primary)', marginBottom: '8px' }}>Phase 1</div>
              <h4 style={{ fontSize: '15px', fontWeight: 'bold', marginBottom: '8px' }}>Founding Idea</h4>
              <p style={{ fontSize: '13px', color: 'var(--text-muted)' }}>Created the agency to deliver custom clean React pages to local businesses.</p>
            </div>
            <div className="glass-card" style={{ padding: '24px' }}>
              <div style={{ fontSize: '20px', fontWeight: 'bold', color: 'var(--primary)', marginBottom: '8px' }}>Phase 2</div>
              <h4 style={{ fontSize: '15px', fontWeight: 'bold', marginBottom: '8px' }}>SEO Integrations</h4>
              <p style={{ fontSize: '13px', color: 'var(--text-muted)' }}>Added full technical schema markup processes to secure organic ranking visibility.</p>
            </div>
            <div className="glass-card" style={{ padding: '24px' }}>
              <div style={{ fontSize: '20px', fontWeight: 'bold', color: 'var(--primary)', marginBottom: '8px' }}>Phase 3</div>
              <h4 style={{ fontSize: '15px', fontWeight: 'bold', marginBottom: '8px' }}>Automation &amp; Retainers</h4>
              <p style={{ fontSize: '13px', color: 'var(--text-muted)' }}>Deployed analytics dashboards and Stripe e-commerce checkouts for global partners.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
