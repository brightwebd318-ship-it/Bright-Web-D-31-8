import React from 'react';
import SEO from '../components/SEO';
import { Link } from 'react-router-dom';
import { TrendingUp, Search, Code, FileText, CheckCircle, BarChart2 } from 'lucide-react';

export default function SEOServices() {
  const seoFeatures = [
    {
      icon: <Search size={24} />,
      title: "Technical SEO & Core Audits",
      desc: "Resolving site crawling issues, structural duplicate content, canonical linking bugs, and loading bottle-necks."
    },
    {
      icon: <Code size={24} />,
      title: "JSON-LD & Schema Markup",
      desc: "Deploying FAQ schemas, product reviews, LocalBusiness maps metadata, and detailed breadcrumbs for premium Google rich snippets."
    },
    {
      icon: <FileText size={24} />,
      title: "On-Page Keyword Strategy",
      desc: "Optimizing header tags, meta descriptions, image alt tags, and copywriting content around high-intent commercial keywords."
    },
    {
      icon: <TrendingUp size={24} />,
      title: "Local Search Optimization",
      desc: "Direct integration of Google Business Profiles, citations management, and location-targeted service pages for local Kochi and Kerala businesses."
    }
  ];

  return (
    <div className="page seo-services-page" style={{ paddingTop: '100px' }}>
      <SEO 
        title="SEO Agency & Professional SEO Experts Kochi"
        description="BrightWebD is a results-driven SEO agency. Our SEO experts build high-performance search marketing systems and metadata architectures."
        keywords="SEO agency, SEO experts, web design services, digital solutions company, technical search marketing"
        image="https://brightwebd.com/assets/slide_seo.png"
        schema={{
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Search Engine Optimization Services",
          "description": "Professional technical SEO audits, schema markup implementation, and on-page keyword targeting by SEO experts.",
          "provider": {
            "@type": "Organization",
            "name": "BrightWebD"
          }
        }}
      />

      <div className="container">
        {/* Header Hero */}
        <div className="section-header">
          <span className="section-tag">Rank #1 on Google</span>
          <h1 className="section-title">SEO Experts Driving <span>Real Business Growth</span></h1>
          <p className="section-desc">
            We don't just optimize for search algorithms. We structure your code, pages, and metadata to capture high-intent leads and build brand authority.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="services-interactive-grid" style={{ marginBottom: '80px' }}>
          {seoFeatures.map((f, i) => (
            <div key={i} className="glass-card service-interactive-card">
              <div className="service-card-icon-box">
                {f.icon}
              </div>
              <h3 className="service-card-title">{f.title}</h3>
              <p className="service-card-desc">{f.desc}</p>
              <div className="service-card-cta-link">
                <span>View strategy</span>
              </div>
            </div>
          ))}
        </div>

        {/* Performance Visualization Dashboard */}
        <div className="glass-card" style={{ padding: '48px', marginBottom: '80px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: '40px', alignItems: 'center' }}>
            {/* Left: Chart Graph Mockup */}
            <div style={{ background: 'rgba(0,0,0,0.2)', border: '1px solid var(--border-color)', borderRadius: '16px', padding: '24px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '16px' }}>
                <span style={{ fontSize: '12px', fontWeight: 'bold' }}>ORGANIC CLICKS REPORT</span>
                <span style={{ color: '#10b981', fontSize: '12px', fontWeight: 'bold' }}>↑ 340% GROWTH</span>
              </div>
              <div style={{ height: '140px', display: 'flex', alignItems: 'flex-end', gap: '8px', borderBottom: '1px solid var(--border-color)', paddingBottom: '8px' }}>
                <div style={{ height: '20%', flex: 1, background: 'rgba(255,255,255,0.05)', borderRadius: '2px' }} />
                <div style={{ height: '35%', flex: 1, background: 'rgba(255,255,255,0.05)', borderRadius: '2px' }} />
                <div style={{ height: '42%', flex: 1, background: 'var(--primary-glow)', borderRadius: '2px' }} />
                <div style={{ height: '68%', flex: 1, background: 'var(--primary)', borderRadius: '2px' }} />
                <div style={{ height: '95%', flex: 1, background: 'var(--accent-gradient)', borderRadius: '2px' }} />
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '8px', fontSize: '10px', color: 'var(--text-muted)' }}>
                <span>Month 1</span>
                <span>Month 2</span>
                <span>Month 3</span>
                <span>Month 4</span>
                <span>Month 5</span>
              </div>
            </div>

            {/* Right Content */}
            <div>
              <h2 style={{ fontSize: '28px', marginBottom: '16px' }}>Why We are the SEO Agency that Delivers</h2>
              <p style={{ color: 'var(--text-muted)', lineHeight: '1.7', marginBottom: '24px' }}>
                Traditional marketing agencies guess at content calendars. As a professional digital solutions company, we take a engineering approach to search marketing. We code structured JSON-LD schemas, optimize server load speeds, write custom FAQ architectures, and build mobile-friendly hubs.
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '24px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px' }}>
                  <CheckCircle size={16} style={{ color: '#10b981' }} />
                  <span>Sitemap XML generation</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px' }}>
                  <CheckCircle size={16} style={{ color: '#10b981' }} />
                  <span>FAQ Accordion schema</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px' }}>
                  <CheckCircle size={16} style={{ color: '#10b981' }} />
                  <span>Image alt tagging fixes</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px' }}>
                  <CheckCircle size={16} style={{ color: '#10b981' }} />
                  <span>Speed caching tools</span>
                </div>
              </div>
              <Link to="/contact" className="btn btn-primary">Claim Free Keyword Analysis</Link>
            </div>
          </div>
        </div>

        {/* Action Panel */}
        <div style={{ textAlign: 'center', background: 'var(--bg-section-alt)', borderRadius: '24px', padding: '60px 24px' }}>
          <h2 style={{ fontSize: '32px', marginBottom: '16px' }}>Stop letting competitors claim your organic sales leads.</h2>
          <p style={{ color: 'var(--text-muted)', marginBottom: '32px', maxWidth: '600px', margin: '0 auto 32px' }}>
            Contact our senior SEO experts to schedule a full ranking strategy audit.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center' }}>
            <Link to="/contact" className="btn btn-primary">Start Your Campaign</Link>
            <Link to="/about" className="btn btn-secondary">Learn About Our Team</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
