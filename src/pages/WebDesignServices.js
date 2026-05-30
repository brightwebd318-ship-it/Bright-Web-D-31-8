import React from 'react';
import SEO from '../components/SEO';
import { Link } from 'react-router-dom';
import { Palette, Layers, Monitor, Heart, Shield, RefreshCw } from 'lucide-react';

export default function WebDesignServices() {
  const designFeatures = [
    {
      icon: <Palette size={24} />,
      title: "UI/UX & Interactive Prototypes",
      desc: "Pixel-perfect interfaces designed in Figma, structured to build high-end client trust and maximize visitor engagement."
    },
    {
      icon: <Monitor size={24} />,
      title: "100% Responsive Grid Systems",
      desc: "Flawless rendering on ultra-wide screens, laptops, iPad viewports, and modern mobile smartphones."
    },
    {
      icon: <RefreshCw size={24} />,
      title: "Website Redesign Services",
      desc: "Complete visual modernization and code refactoring for legacy corporate websites that load slow or fail to convert."
    },
    {
      icon: <Layers size={24} />,
      title: "Premium Component Systems",
      desc: "Creating tailored brand styles, color palettes, sleek button interactions, and custom graphical icons."
    }
  ];

  return (
    <div className="page web-design-services-page" style={{ paddingTop: '100px' }}>
      <SEO 
        title="Web Design Services & Custom Business Website Design"
        description="BrightWebD is a premier web design company creating conversion-focused web design services, corporate website redesigns, and premium branding."
        keywords="web design services, business website design, web design company, website redesign services, luxury UI UX design Kochi"
        image="https://brightwebd.com/assets/slide_marketing.png"
        schema={{
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Custom Web Design Services",
          "description": "Premium corporate website redesign services and interactive UI/UX prototypes tailored for startups and businesses.",
          "provider": {
            "@type": "Organization",
            "name": "BrightWebD",
            "logo": "https://brightwebd.com/logo512.png"
          }
        }}
      />

      <div className="container">
        {/* Header Hero Banner */}
        <div className="section-header">
          <span className="section-tag">Aesthetics x Conversion</span>
          <h1 className="section-title">Web Design Services for <span>Serious Businesses</span></h1>
          <p className="section-desc">
            We build luxury digital interfaces combining interactive smooth elements and custom layouts to turn casual traffic into loyal high-value clients.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="services-interactive-grid" style={{ marginBottom: '80px' }}>
          {designFeatures.map((f, i) => (
            <div key={i} className="glass-card service-interactive-card">
              <div className="service-card-icon-box">
                {f.icon}
              </div>
              <h3 className="service-card-title">{f.title}</h3>
              <p className="service-card-desc">{f.desc}</p>
              <div className="service-card-cta-link">
                <span>Learn more</span>
              </div>
            </div>
          ))}
        </div>

        {/* Redesign Focus Section */}
        <div className="glass-card" style={{ padding: '48px', marginBottom: '80px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '32px', alignItems: 'center' }}>
            <div>
              <h2 style={{ fontSize: '28px', marginBottom: '16px' }}>Need a Website Redesign?</h2>
              <p style={{ color: 'var(--text-muted)', lineHeight: '1.7', marginBottom: '24px' }}>
                If your current platform is slow, hard to manage, or looks like it was built in 2018, you are losing valuable clients to modern competitors. Our website redesign services upgrade your entire interface with lightweight code and premium branding.
              </p>
              <ul className="service-card-benefit-list" style={{ marginBottom: '24px' }}>
                <li><Shield size={16} /> 95+ Page Speed & Core Web Vitals</li>
                <li><Shield size={16} /> High conversion visual path structure</li>
                <li><Shield size={16} /> Seamless mobile responsive layout adjustments</li>
              </ul>
              <Link to="/contact" className="btn btn-primary">Request Free Redesign Audit</Link>
            </div>
            
            {/* Visual Preview */}
            <div style={{ background: 'rgba(0,0,0,0.2)', border: '1px solid var(--border-color)', borderRadius: '16px', padding: '24px' }}>
              <div style={{ borderBottom: '1px solid var(--border-color)', paddingBottom: '12px', marginBottom: '12px', display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ fontSize: '11px', color: 'var(--text-muted)' }}>PERFORMANCE IMPROVEMENT</span>
                <span style={{ fontSize: '11px', color: '#10b981', fontWeight: 'bold' }}>+120% SPEED</span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <div style={{ height: '8px', background: 'var(--primary)', borderRadius: '4px', width: '98%' }} />
                <span style={{ fontSize: '12px', color: 'var(--text-muted)' }}>BrightWebD Redesign (99 Lighthouse Score)</span>
                <div style={{ height: '8px', background: 'var(--text-muted)', borderRadius: '4px', width: '42%' }} />
                <span style={{ fontSize: '12px', color: 'var(--text-muted)' }}>Traditional Templates (38 Lighthouse Score)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Pricing / Packages CTA */}
        <div style={{ textAlign: 'center', background: 'var(--bg-section-alt)', borderRadius: '24px', padding: '60px 24px' }}>
          <h2 style={{ fontSize: '32px', marginBottom: '16px' }}>Ready to elevate your online business authority?</h2>
          <p style={{ color: 'var(--text-muted)', marginBottom: '32px', maxWidth: '600px', margin: '0 auto 32px' }}>
            Book a strategy call to coordinate your custom business website design layout. No obligations.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center' }}>
            <Link to="/contact" className="btn btn-primary">Start Your Project</Link>
            <Link to="/portfolio" className="btn btn-secondary">View Portfolio Showcase</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
