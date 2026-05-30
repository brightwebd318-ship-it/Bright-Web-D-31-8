import React from 'react';
import SEO from '../components/SEO';
import { Link } from 'react-router-dom';
import { Code2, ShoppingCart, Zap, Lock, Database, GitBranch } from 'lucide-react';

export default function DevelopmentServices() {
  const devFeatures = [
    {
      icon: <Code2 size={24} />,
      title: "React & Next.js Platforms",
      desc: "Creating static-rendered, high-performance web pages that load instantly, score 95+ on Lighthouse, and deliver modern animations."
    },
    {
      icon: <ShoppingCart size={24} />,
      title: "Ecommerce Development",
      desc: "Secure online storefronts, dynamic shopping carts, inventory trackers, and Stripe/PayPal payment gateway configurations."
    },
    {
      icon: <Database size={24} />,
      title: "API & CRM Automation",
      desc: "Synchronizing contact forms directly to Hubspot, Salesforce, Google Sheets, or custom Node/Express backend databases."
    },
    {
      icon: <Lock size={24} />,
      title: "Secure Hosting & SSL Setup",
      desc: "Fast server setup, content delivery networks (CDN), automatic daily backups, and robust vulnerability patching."
    }
  ];

  return (
    <div className="page development-services-page" style={{ paddingTop: '100px' }}>
      <SEO 
        title="Website Development Agency & Custom Ecommerce Solutions"
        description="BrightWebD is a premium website development agency building custom web apps, React platforms, Stripe e-commerce, and digital business systems."
        keywords="website development agency, ecommerce development, digital solutions company, react development agency, custom API integration"
        image="https://brightwebd.com/assets/slide_webdev.png"
        schema={{
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Custom Web Development Services",
          "description": "Custom React systems, Stripe ecommerce development, and cloud hosting architecture built by a professional digital solutions company.",
          "provider": {
            "@type": "Organization",
            "name": "BrightWebD"
          }
        }}
      />

      <div className="container">
        {/* Header Hero */}
        <div className="section-header">
          <span className="section-tag">High-Performance Engineering</span>
          <h1 className="section-title">Website Development Agency for <span>Modern Startups</span></h1>
          <p className="section-desc">
            We write clean, lightweight code. No bloated page builders. Just fast, secure, scalable digital products designed to scale your business.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="services-interactive-grid" style={{ marginBottom: '80px' }}>
          {devFeatures.map((f, i) => (
            <div key={i} className="glass-card service-interactive-card">
              <div className="service-card-icon-box">
                {f.icon}
              </div>
              <h3 className="service-card-title">{f.title}</h3>
              <p className="service-card-desc">{f.desc}</p>
              <div className="service-card-cta-link">
                <span>Explore tech</span>
              </div>
            </div>
          ))}
        </div>

        {/* Tech Stack Focus Row */}
        <div className="glass-card" style={{ padding: '48px', marginBottom: '80px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '32px', alignItems: 'center' }}>
            <div>
              <h2 style={{ fontSize: '28px', marginBottom: '16px' }}>Premium Ecommerce Development</h2>
              <p style={{ color: 'var(--text-muted)', lineHeight: '1.7', marginBottom: '24px' }}>
                We build online storefronts that load faster than Amazon. Leveraging headless Shopify APIs, static-site hydration, and secure Stripe checkouts, we ensure your payment pathways are frictionless and fully protected.
              </p>
              <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <span style={{ fontSize: '24px', fontWeight: 'bold', color: 'var(--primary)' }}>&lt; 1.5s</span>
                  <span style={{ fontSize: '12px', color: 'var(--text-muted)' }}>Average Page Load Time</span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <span style={{ fontSize: '24px', fontWeight: 'bold', color: 'var(--primary)' }}>99.9%</span>
                  <span style={{ fontSize: '12px', color: 'var(--text-muted)' }}>Hosting Server Uptime SLA</span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <span style={{ fontSize: '24px', fontWeight: 'bold', color: 'var(--primary)' }}>+35%</span>
                  <span style={{ fontSize: '12px', color: 'var(--text-muted)' }}>Ecommerce Conversion Uplift</span>
                </div>
              </div>
            </div>

            {/* Simulated Server Console Box */}
            <div style={{ background: '#090d16', border: '1px solid var(--border-color)', borderRadius: '12px', padding: '20px', fontFamily: 'monospace', fontSize: '12px', color: '#38bdf8' }}>
              <div style={{ color: 'var(--text-muted)', marginBottom: '8px' }}>{"// Deploying server nodes..."}</div>
              <div>$ npm run build</div>
              <div style={{ color: '#10b981' }}>✔ Creating production static build bundles</div>
              <div style={{ color: '#10b981' }}>✔ Indexing client pages with react-snap sitemaps</div>
              <div style={{ color: '#10b981' }}>✔ core-bundle.js chunk size: 48.2 KB (optimally cached)</div>
              <div style={{ color: 'var(--text-main)', marginTop: '8px' }}>Status: ONLINE | Server listening on port 443</div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div style={{ textAlign: 'center', background: 'var(--bg-section-alt)', borderRadius: '24px', padding: '60px 24px' }}>
          <h2 style={{ fontSize: '32px', marginBottom: '16px' }}>Let's build your next digital solutions asset together.</h2>
          <p style={{ color: 'var(--text-muted)', marginBottom: '32px', maxWidth: '600px', margin: '0 auto 32px' }}>
            Book a call with our lead React software engineers.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center' }}>
            <Link to="/contact" className="btn btn-primary">Launch Project Request</Link>
            <Link to="/portfolio" className="btn btn-secondary">Explore Live Websites</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
