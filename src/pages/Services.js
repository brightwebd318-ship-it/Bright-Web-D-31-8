import React from 'react';
import SEO from '../components/SEO';
import { Link } from 'react-router-dom';
import { Palette, Monitor, Search, Code, Lock, Terminal, FileText, Database } from 'lucide-react';

export default function Services({ isSection = false }) {
  const serviceItems = [
    {
      title: 'Website Design (UI/UX)',
      icon: <Palette size={24} />,
      desc: 'High-end layout wireframes, typography details, and responsive styling built in Figma.',
      link: '/services/web-design',
      benefits: ['Custom Figma branding guidelines', 'High conversion visual layouts', 'Fully interactive desktop & mobile prototypes']
    },
    {
      title: 'Web Development',
      icon: <Code size={24} />,
      desc: 'Zero-bloat React, Next, and static page coding optimized for Core Web Vitals performance parameters.',
      link: '/services/development',
      benefits: ['Production React frameworks', 'Instant load times & caching', 'Secure domain and server CDNs']
    },
    {
      title: 'SEO Optimization',
      icon: <Search size={24} />,
      desc: 'Deploying JSON-LD meta schemas, canonical routing maps, FAQ rich snippets, and keyword indexing scripts.',
      link: '/services/seo',
      benefits: ['FAQ / LocalBusiness metadata schemas', 'On-page keyword density checks', 'Console crawl crawling diagnostic checks']
    },
    {
      title: 'Ecommerce Solutions',
      icon: <Database size={24} />,
      desc: 'Secure storefront layouts, Stripe payment flows, responsive cart views, and headless shop database connections.',
      link: '/services/development',
      benefits: ['Stripe payment checkout flows', 'Headless Shopify database integrations', 'High performance catalog search features']
    }
  ];

  const content = (
    <div className="container">
      {/* Header */}
      <div className="section-header">
        <span className="section-tag">Capabilities Blueprint</span>
        <h2 className="section-title">Our Suite of <span>Digital Solutions</span></h2>
        <p className="section-desc">Designed to support local construction businesses, hotels, tech startups, healthcare portals, and ecommerce brands.</p>
      </div>

      {/* Grid */}
      <div className="services-interactive-grid" style={{ marginBottom: '60px' }}>
        {serviceItems.map((s, idx) => (
          <div className="glass-card service-interactive-card" key={idx}>
            <div className="service-card-icon-box">
              {s.icon}
            </div>
            <h3 className="service-card-title">{s.title}</h3>
            <p className="service-card-desc">{s.desc}</p>
            <ul className="service-card-benefit-list">
              {s.benefits.map((b, i) => (
                <li key={i}>
                  <Terminal size={12} style={{ color: 'var(--primary)', marginRight: '4px' }} />
                  {b}
                </li>
              ))}
            </ul>
            <Link to={s.link} className="service-card-cta-link" style={{ marginTop: 'auto' }}>
              <span>View details</span>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );

  if (isSection) {
    return (
      <section className="services-section-wrapper section-alt" id="services">
        {content}
      </section>
    );
  }

  return (
    <div className="page services-page-wrapper" style={{ paddingTop: '100px', paddingBottom: '80px' }}>
      <SEO 
        title="Custom Web Design Services & React Development Options"
        description="Browse our range of digital solutions: custom business website design, technical search optimizations, React codebases, and Stripe checkouts."
        keywords="web design services, custom web development, ecommerce solutions Kochi, website redesign parameters"
      />
      {content}
    </div>
  );
}
