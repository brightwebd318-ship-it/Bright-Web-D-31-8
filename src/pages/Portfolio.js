import React, { useState, useRef } from 'react';
import SEO from '../components/SEO';
import { Link } from 'react-router-dom';
import { ExternalLink, BarChart2, TrendingUp, Zap, HelpCircle } from 'lucide-react';

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState('All');
  const [sliderPosition, setSliderPosition] = useState(50);
  const sliderRef = useRef(null);
  const [isSliding, setIsSliding] = useState(false);

  const handleSliderMove = (e) => {
    if (!isSliding) return;
    const rect = sliderRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  };

  const caseStudies = [
    {
      title: "EkathaCabs Cochin Platform",
      category: "Development",
      desc: "We refactored their outdated booking platform into a highly responsive React application with custom booking trackers and dashboard calendars.",
      metric: "140% Booking Increase",
      metrics: { traffic: "+84%", conversion: "12.4%", loadSpeed: "1.2s" },
      image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=600&q=80",
      liveLink: "https://ekthacabscochin.com"
    },
    {
      title: "Home2Home Real Estate Portal",
      category: "Web Design",
      desc: "Designed and engineered an elite visual portfolio showcasing high-definition properties with clean search query filters and Hubspot lead integrations.",
      metric: "+120% Leads Generated",
      metrics: { traffic: "+110%", conversion: "8.6%", loadSpeed: "1.4s" },
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=600&q=80",
      liveLink: "https://brightwebd318-ship-it.github.io/HOME2HOME/"
    },
    {
      title: "Zest Headless E-commerce Store",
      category: "Development",
      desc: "Headless Shopify custom theme built using React chunks and Stripe API gateways. Zero layouts shift, fully optimized search indexing.",
      metric: "+35% Cart Checkout Uplift",
      metrics: { traffic: "+55%", conversion: "6.2%", loadSpeed: "0.9s" },
      image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "Zenith Care Medical Directory",
      category: "SEO",
      desc: "Local search strategy that fixed missing schema structures, deployed clinical FAQ lists, and localized search landing tags.",
      metric: "#1 Search Ranking in Kochi",
      metrics: { traffic: "+280%", conversion: "9.2%", loadSpeed: "1.1s" },
      image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=600&q=80"
    }
  ];

  const filteredItems = caseStudies.filter(item => activeTab === 'All' || item.category === activeTab);

  return (
    <div className="page portfolio-page-wrapper" style={{ paddingTop: '100px', paddingBottom: '80px' }}>
      <SEO 
        title="Web Design Portfolio & Corporate Case Studies"
        description="Explore our portfolio of premium web designs, React projects, search ranking successes, and Stripe ecommerce stores delivered in Kochi and globally."
        keywords="web design company portfolio, react web development case studies, SEO agency ranking proof, website redesign examples"
      />

      <div className="container">
        {/* Header */}
        <div className="section-header">
          <span className="section-tag">Our Projects</span>
          <h1 className="section-title">Client Case <span>Study Showcase</span></h1>
          <p className="section-desc">
            We don't build generic page layouts. We code premium, responsive speed channels focused on brand authority and commercial leads.
          </p>
        </div>

        {/* Before/After Drag Module */}
        <div style={{ marginBottom: '60px' }}>
          <h3 style={{ fontSize: '20px', textAlign: 'center', marginBottom: '20px' }}>Framer-Inspired Before/After Comparison Slider</h3>
          <div 
            ref={sliderRef}
            className="before-after-module"
            onMouseMove={handleSliderMove}
            onTouchMove={(e) => {
              if (e.touches[0]) {
                const rect = sliderRef.current.getBoundingClientRect();
                const x = e.touches[0].clientX - rect.left;
                setSliderPosition(Math.max(0, Math.min(100, (x / rect.width) * 100)));
              }
            }}
            onMouseDown={() => setIsSliding(true)}
            onMouseUp={() => setIsSliding(false)}
            onMouseLeave={() => setIsSliding(false)}
            style={{ cursor: 'ew-resize', height: '320px' }}
          >
            {/* After Redesign */}
            <div className="before-after-image image-after">
              <div style={{ padding: '40px', color: '#fff', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <span style={{ color: 'var(--primary)', fontWeight: 'bold' }}>BRIGHTWEBD STANDARD</span>
                <h4 style={{ fontSize: '24px', margin: '8px 0' }}>Clean Grid Aesthetics</h4>
                <p style={{ maxWidth: '350px', color: 'rgba(255,255,255,0.7)', fontSize: '13px' }}>Lightning fast hydration, customized schema listings, and zero bloated framework libraries.</p>
              </div>
            </div>

            {/* Before Template */}
            <div 
              className="before-after-image image-before"
              style={{ width: `${sliderPosition}%`, borderRight: '2px solid #fff' }}
            >
              <div style={{ padding: '40px', color: 'rgba(255,255,255,0.6)', height: '100%', width: '800px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <span>TRADITIONAL TEMPLATE</span>
                <h4 style={{ fontSize: '24px', margin: '8px 0' }}>Bloated WordPress Frameworks</h4>
                <p style={{ maxWidth: '350px', color: 'rgba(255,255,255,0.4)', fontSize: '13px' }}>Confusing navigation choices, heavy loading script libraries, and template structures that drive clients away.</p>
              </div>
            </div>

            <span className="before-after-label lbl-before">Before (Bloat)</span>
            <span className="before-after-label lbl-after">After (Speed)</span>

            <div className="slider-dragger-line" style={{ left: `${sliderPosition}%` }}>
              <div className="slider-dragger-button">↔</div>
            </div>
          </div>
        </div>

        {/* Filter controls */}
        <div className="portfolio-tabs-nav" style={{ marginBottom: '40px' }}>
          {['All', 'Web Design', 'SEO', 'Development'].map(tab => (
            <button 
              key={tab}
              className={`portfolio-tab-btn ${activeTab === tab ? 'active' : ''}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Case Studies Grid */}
        <div className="portfolio-showcase-grid" style={{ marginBottom: '60px' }}>
          {filteredItems.map((study, idx) => (
            <div key={idx} className="glass-card portfolio-case-study-card">
              <div className="portfolio-visual-mockup" style={{ height: '240px' }}>
                <span className="portfolio-metric-overlay">{study.metric}</span>
                <img src={study.image} alt={study.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              
              <div className="portfolio-body-details">
                <span className="portfolio-client-category">{study.category}</span>
                <h3 className="portfolio-project-title" style={{ fontSize: '20px' }}>{study.title}</h3>
                <p className="portfolio-project-description" style={{ fontSize: '14px' }}>{study.desc}</p>
                
                <div className="portfolio-metrics-row" style={{ padding: '12px 0', margin: '12px 0 16px' }}>
                  <div className="portfolio-metric-box">
                    <span className="portfolio-metric-val" style={{ color: '#10b981', fontSize: '14px' }}>{study.metrics.traffic}</span>
                    <span className="portfolio-metric-lbl" style={{ fontSize: '9px' }}>Organic Clicks</span>
                  </div>
                  <div className="portfolio-metric-box">
                    <span className="portfolio-metric-val" style={{ fontSize: '14px' }}>{study.metrics.conversion}</span>
                    <span className="portfolio-metric-lbl" style={{ fontSize: '9px' }}>Goal Conversions</span>
                  </div>
                  <div className="portfolio-metric-box">
                    <span className="portfolio-metric-val" style={{ color: 'var(--primary)', fontSize: '14px' }}>{study.metrics.loadSpeed}</span>
                    <span className="portfolio-metric-lbl" style={{ fontSize: '9px' }}>Load Speeds</span>
                  </div>
                </div>

                <div className="portfolio-cta-row" style={{ marginTop: 'auto' }}>
                  {study.liveLink ? (
                    <a 
                      href={study.liveLink} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="btn btn-secondary" 
                      style={{ padding: '8px 16px', fontSize: '13px', display: 'inline-flex', alignItems: 'center', gap: '6px' }}
                    >
                      Live Preview <ExternalLink size={14} />
                    </a>
                  ) : (
                    <span style={{ fontSize: '12px', color: 'var(--text-muted)' }}>Enterprise Internal Platform</span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
