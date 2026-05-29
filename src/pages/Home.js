import React, { useState, useEffect, useRef } from 'react';
import SEO from '../components/SEO';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, ShieldCheck, Zap, Laptop, BarChart2, Star, CheckCircle, 
  HelpCircle, ChevronRight, Compass, Target, Code, Play, RefreshCw, Sparkles 
} from 'lucide-react';
import Contact from './Contact';

// Count-up hook
function useCountUp(target, duration = 1500, active = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!active) return;
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [target, duration, active]);
  return count;
}

export default function Home() {
  const [activeTab, setActiveTab] = useState('All');
  const [billingPeriod, setBillingPeriod] = useState('monthly'); // 'monthly' or 'one-time'
  const [statsActive, setStatsActive] = useState(false);
  const statsSectionRef = useRef(null);
  const canvasRef = useRef(null);

  // Before/after slider coordinates
  const [sliderPosition, setSliderPosition] = useState(50);
  const sliderRef = useRef(null);
  const [isSliding, setIsSliding] = useState(false);

  // Stats Counters
  const projectsCount = useCountUp(120, 2000, statsActive);
  const clientsCount = useCountUp(85, 2000, statsActive);
  const countriesCount = useCountUp(8, 1500, statsActive);
  const experienceCount = useCountUp(6, 1000, statsActive);

  // Track dragging testimonials
  const [testimonialIndex, setTestimonialIndex] = useState(0);

  // Intersection observer for counters and scroll animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            if (e.target.classList.contains('trust-stats-section')) {
              setStatsActive(true);
            }
            e.target.classList.add('show');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elementsToReveal = document.querySelectorAll('.reveal, .trust-stats-section');
    elementsToReveal.forEach(el => observer.observe(el));

    return () => elementsToReveal.forEach(el => observer.unobserve(el));
  }, []);

  // Canvas floating particles particle logic
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const resizeCanvas = () => {
      canvas.width = canvas.parentElement.offsetWidth;
      canvas.height = canvas.parentElement.offsetHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Create particles
    const particles = [];
    const particleCount = 45;
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 1.5 + 0.5,
        speedX: (Math.random() - 0.5) * 0.4,
        speedY: (Math.random() - 0.5) * 0.4,
        alpha: Math.random() * 0.5 + 0.2
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = document.documentElement.getAttribute('data-theme') === 'light' 
        ? 'rgba(0, 102, 255, 0.15)' 
        : 'rgba(255, 255, 255, 0.25)';

      particles.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();

        // Move
        p.x += p.speedX;
        p.y += p.speedY;

        // Boundaries
        if (p.x < 0 || p.x > canvas.width) p.speedX *= -1;
        if (p.y < 0 || p.y > canvas.height) p.speedY *= -1;
      });

      // Connect lines
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dist = Math.hypot(particles[i].x - particles[j].x, particles[i].y - particles[j].y);
          if (dist < 100) {
            ctx.strokeStyle = document.documentElement.getAttribute('data-theme') === 'light'
              ? `rgba(0, 102, 255, ${0.05 * (1 - dist / 100)})`
              : `rgba(255, 255, 255, ${0.08 * (1 - dist / 100)})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const handleSliderMove = (e) => {
    if (!isSliding) return;
    const rect = sliderRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  };

  // Testimonials slide data
  const testimonials = [
    {
      name: "Harish Kumar",
      role: "Director",
      company: "EkathaCabs Cochin",
      rating: 5,
      feedback: "BrightWebD completely redesigned our local cab booking platform. We saw our online reservation rate surge by 140% in Kochi within the first two months. High trust and elite support!",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
      link: "https://ekthacabscochin.com"
    },
    {
      name: "Sneha Nair",
      role: "Operations Head",
      company: "Home2Home Real Estate",
      rating: 5,
      feedback: "From start to finish, the communication was stellar. Our website scores a 98 on Lighthouse and load speeds are under 1.5 seconds. Their technical SEO schema is top-tier.",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80",
      link: "https://brightwebd318-ship-it.github.io/HOME2HOME/"
    },
    {
      name: "Thomas Abraham",
      role: "Founder",
      company: "Zest Retail Systems",
      rating: 5,
      feedback: "Their headless e-commerce development using Stripe is amazing. Fast loadings, automated email invoices, and custom user portals. Absolutely world-class experience.",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80"
    }
  ];

  // Portfolio items data
  const portfolioItems = [
    {
      title: "EkathaCabs Cochin",
      category: "Development",
      desc: "Custom React booking dashboard for cab fleets in Kochi. Real-time scheduling modules, mobile layout adjustments.",
      metric: "140% Booking Growth",
      metrics: { clicks: "+82%", conversion: "14.2%", speed: "1.2s" },
      image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "Home2Home Real Estate",
      category: "Web Design",
      desc: "Premium real estate showcase displaying immersive catalog cards, advanced filters, and Lead capture inquiries.",
      metric: "+120% Leads Generated",
      metrics: { clicks: "+110%", conversion: "8.6%", speed: "1.4s" },
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "Zest Headless E-store",
      category: "Development",
      desc: "Fast Shopify/Stripe integrated catalog page with responsive cart systems, custom search filters, and instant checkout.",
      metric: "+45% Cart Conversion",
      metrics: { clicks: "+65%", conversion: "6.2%", speed: "0.9s" },
      image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "Zenith Care Platform",
      category: "SEO",
      desc: "Local healthcare portal indexed with clinical FAQ schemas, practitioner directories, and booking integrations.",
      metric: "#1 Rankings in Local Areas",
      metrics: { clicks: "+340%", conversion: "11.5%", speed: "1.1s" },
      image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=600&q=80"
    }
  ];

  const filteredPortfolio = portfolioItems.filter(item => activeTab === 'All' || item.category === activeTab);

  return (
    <div className="homepage-wrapper">
      <SEO 
        title="Premium Web Design Company & SEO Agency"
        description="BrightWebD is a world-class digital solutions company. We construct custom business website designs, SEO optimizations, and React web development systems."
        keywords="web design company, website development agency, SEO agency, web design services, digital solutions company, business website design, SEO experts, website redesign services"
        schema={{
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          "name": "BrightWebD",
          "url": "https://brightwebd.com/",
          "logo": "https://brightwebd.com/logo512.png",
          "image": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
          "priceRange": "$$",
          "telephone": "+919074487245",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Kochi",
            "addressRegion": "Kerala",
            "postalCode": "682021",
            "addressCountry": "IN"
          }
        }}
      />

      {/* --- HERO SECTION --- */}
      <section className="hero-wrapper">
        <div className="hero-glow" aria-hidden="true" />
        <canvas ref={canvasRef} className="hero-particles-canvas" aria-hidden="true" />
        
        <div className="container">
          <div className="hero-grid-layout">
            
            {/* Left: Copy content */}
            <div className="hero-text-content reveal">
              <div className="hero-badge-glow">
                <span className="pulse-circle" />
                <span>Active 2026 Strategy Intake Open</span>
              </div>
              
              <h1 className="hero-main-title">
                Building Websites That Turn <span className="gradient-txt">Visitors Into Customers</span>
              </h1>
              
              <p className="hero-sub-text">
                BrightWebD designs high-performance responsive web products, Google search optimization structures, and advanced database workflows engineered to scale corporate brand authority.
              </p>
              
              <div className="hero-actions">
                <Link to="/contact" className="btn btn-primary btn-glow">
                  Start Your Project <ArrowRight size={16} />
                </Link>
                <Link to="/portfolio" className="btn btn-secondary">
                  View Case Studies
                </Link>
              </div>

              <div className="hero-trust-bar">
                <span className="hero-trust-text">CLIENT TRUST BENCHMARKS</span>
                <div className="hero-trust-logos">
                  <span className="hero-trust-logo">TechFlow</span>
                  <span className="hero-trust-logo">LuxeRetail</span>
                  <span className="hero-trust-logo">ZenBeauty</span>
                  <span className="hero-trust-logo">SparkDev</span>
                </div>
              </div>
            </div>

            {/* Right: Floating Visual Graphics */}
            <div className="hero-visual-graphics reveal">
              <div className="glow-under-illustration" aria-hidden="true" />
              
              <div className="main-dashboard-box">
                <div className="db-header">
                  <span className="db-dot red" />
                  <span className="db-dot yellow" />
                  <span className="db-dot green" />
                  <span className="db-title">Analytics Tracker v2.6</span>
                </div>
                <div className="db-content">
                  <div className="db-kpis">
                    <div className="db-kpi-card">
                      <span className="kpi-title">CTR Conversion</span>
                      <span className="kpi-value" style={{ color: 'var(--primary)' }}>18.4%</span>
                      <span className="kpi-growth up">↑ +4.2%</span>
                    </div>
                    <div className="db-kpi-card">
                      <span className="kpi-title">Load Time</span>
                      <span className="kpi-value">0.8s</span>
                      <span className="kpi-growth" style={{ color: '#10b981' }}>Optimal</span>
                    </div>
                    <div className="db-kpi-card">
                      <span className="kpi-title">Core SEO Vitals</span>
                      <span className="kpi-value" style={{ color: 'var(--accent-purple)' }}>98/100</span>
                      <span className="kpi-growth up">↑ +15</span>
                    </div>
                  </div>

                  <div className="db-graph-container" style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', padding: '10px 0' }}>
                    {[65, 80, 52, 90, 110, 85, 125].map((val, idx) => (
                      <div 
                        key={idx} 
                        style={{ 
                          height: `${val}%`, 
                          width: '12px', 
                          background: idx === 6 ? 'var(--accent-gradient)' : 'var(--primary-glow)',
                          borderRadius: '4px',
                          border: idx === 6 ? 'none' : '1px solid var(--primary)'
                        }} 
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <div className="floating-kpi-tag tag-top-left">
                <div className="tag-icon-circle" style={{ background: '#e0f2fe', color: '#0369a1' }}>🔍</div>
                <div>
                  <div style={{ fontSize: '9px', color: 'var(--text-muted)' }}>GOOGLE SEO</div>
                  <div style={{ fontSize: '13px', fontWeight: 'bold' }}>Rank #1</div>
                </div>
              </div>

              <div className="floating-kpi-tag tag-bottom-right">
                <div className="tag-icon-circle" style={{ background: '#fef3c7', color: '#b45309' }}>⚡</div>
                <div>
                  <div style={{ fontSize: '9px', color: 'var(--text-muted)' }}>SPEED PERFORMANCE</div>
                  <div style={{ fontSize: '13px', fontWeight: 'bold' }}>99 score</div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* --- SERVICES TICKER BAND --- */}
      <div className="ticker-wrap" aria-hidden="true">
        <div className="ticker-track">
          {['Web Design Services', 'Search Engine Optimization', 'React JS Applications', 'SaaS Business Solutions', 'Brand Identity Systems', 'Stripe E-commerce Stores', 'Business Workflow Automation'].map((srv, i) => (
            <span key={i} className="ticker-item">
              <span className="ticker-dot">◆</span> {srv}
            </span>
          ))}
          {/* Double array for infinite seamless looping */}
          {['Web Design Services', 'Search Engine Optimization', 'React JS Applications', 'SaaS Business Solutions', 'Brand Identity Systems', 'Stripe E-commerce Stores', 'Business Workflow Automation'].map((srv, i) => (
            <span key={`dup-${i}`} className="ticker-item">
              <span className="ticker-dot">◆</span> {srv}
            </span>
          ))}
        </div>
      </div>

      {/* --- TRUST STATS SECTION --- */}
      <section className="trust-stats-section section-alt" ref={statsSectionRef}>
        <div className="container">
          <div className="trust-stats-grid">
            <div className="stat-counter-card glass-card">
              <div className="counter-num">{projectsCount}+</div>
              <div className="counter-label">Web Projects Completed</div>
            </div>
            <div className="stat-counter-card glass-card">
              <div className="counter-num">{clientsCount}+</div>
              <div className="counter-label">Satisfied Partners</div>
            </div>
            <div className="stat-counter-card glass-card">
              <div className="counter-num">{countriesCount}</div>
              <div className="counter-label">Countries Represented</div>
            </div>
            <div className="stat-counter-card glass-card">
              <div className="counter-num">{experienceCount}+ Yrs</div>
              <div className="counter-label">Professional Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* --- WHY CHOOSE US (VS GRID) --- */}
      <section className="reveal">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Value Proposition</span>
            <h2 className="section-title">The BrightWebD <span>Advantage</span></h2>
            <p className="section-desc">We combine senior programming frameworks with award-winning designs to build actual conversion channels.</p>
          </div>

          <div className="comparison-table-wrap">
            <table className="comparison-table">
              <thead>
                <tr>
                  <th>Performance Parameters</th>
                  <th>Traditional Templates</th>
                  <th style={{ color: 'var(--primary)' }}>BrightWebD Standard</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="comparison-feature-name">Lighthouse Performance Speed</td>
                  <td className="comparison-status-traditional">Poor (30 - 55 score)</td>
                  <td className="comparison-status-brightwebd">Excellent (95+ score)</td>
                </tr>
                <tr>
                  <td className="comparison-feature-name">Mobile Grid Adaptations</td>
                  <td className="comparison-status-traditional">Ad-hoc wrapped blocks</td>
                  <td className="comparison-status-brightwebd">Pixel-perfect custom responsive</td>
                </tr>
                <tr>
                  <td className="comparison-feature-name">Metadata &amp; rich Schema Setup</td>
                  <td className="comparison-status-traditional">Auto-generated basic tags</td>
                  <td className="comparison-status-brightwebd">JSON-LD FAQ, Local &amp; Product custom schemas</td>
                </tr>
                <tr>
                  <td className="comparison-feature-name">Code Bloat &amp; Page builders</td>
                  <td className="comparison-status-traditional">High (Elementor, Divi plugins)</td>
                  <td className="comparison-status-brightwebd">None (Lightweight React, Next components)</td>
                </tr>
                <tr>
                  <td className="comparison-feature-name">Business Conversion Focus</td>
                  <td className="comparison-status-traditional">Boring template grid structures</td>
                  <td className="comparison-status-brightwebd">A/B tested copywriting path funnels</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* --- SERVICES LIST SECTION --- */}
      <section className="section-alt reveal">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Core Offerings</span>
            <h2 className="section-title">Engineered <span>Digital Services</span></h2>
            <p className="section-desc">Designed for modern brands demanding technical superiority and premium positioning.</p>
          </div>

          <div className="services-interactive-grid">
            {[
              { title: "Website Design", desc: "Interactive Figma wireframes, luxury typography, and clean color schemes configured to represent your brand authority.", link: "/services/web-design" },
              { title: "Web Development", desc: "Static hydrated custom React databases, lightning-fast loading APIs, and zero bloat components.", link: "/services/development" },
              { title: "SEO Optimization", desc: "JSON-LD schema structuring, canonical link mapping, FAQ snippets, and location target crawling.", link: "/services/seo" },
              { title: "Ecommerce Solutions", desc: "Stripe and PayPal gateway systems, responsive cart states, catalog grids, and headless database syncs.", link: "/services/development" }
            ].map((srv, idx) => (
              <div key={idx} className="glass-card service-interactive-card">
                <div className="service-card-icon-box">
                  {idx === 0 ? <Compass size={24} /> : idx === 1 ? <Code size={24} /> : idx === 2 ? <Target size={24} /> : <Laptop size={24} />}
                </div>
                <h3 className="service-card-title">{srv.title}</h3>
                <p className="service-card-desc">{srv.desc}</p>
                <Link to={srv.link} className="service-card-cta-link">
                  <span>Explore service</span> <ChevronRight size={14} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- BEFORE / AFTER SPLIT SLIDER SECTION --- */}
      <section className="reveal">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Quality Check</span>
            <h2 className="section-title">Elite Redesign <span>Visual Proof</span></h2>
            <p className="section-desc">Drag the interactive slider below to compare standard template layout styling with our premium redesign standards.</p>
          </div>

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
            style={{ cursor: 'ew-resize' }}
          >
            {/* After State */}
            <div className="before-after-image image-after">
              <div style={{ padding: '60px 40px', color: '#fff', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <span style={{ color: 'var(--primary)', fontWeight: 'bold' }}>BRIGHTWEBD REDESIGN</span>
                <h3 style={{ fontSize: '32px', margin: '12px 0 8px' }}>World-Class Digital Authority</h3>
                <p style={{ maxWidth: '400px', color: 'rgba(255,255,255,0.7)', fontSize: '14px' }}>Custom component grids, fluid typography weights, and animated visual dashboards built to convey trust immediately.</p>
              </div>
            </div>

            {/* Before State */}
            <div 
              className="before-after-image image-before"
              style={{ width: `${sliderPosition}%`, borderRight: '2px solid #fff' }}
            >
              <div style={{ padding: '60px 40px', color: 'rgba(255,255,255,0.6)', height: '100%', width: '800px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <span>GENERIC WORDPRESS TEMPLATE</span>
                <h3 style={{ fontSize: '32px', margin: '12px 0 8px' }}>Generic Layout Template</h3>
                <p style={{ maxWidth: '400px', color: 'rgba(255,255,255,0.4)', fontSize: '14px' }}>Boring visual cards, slow loading plugin dependencies, and poor readability choices that drive users away.</p>
              </div>
            </div>

            {/* Slider Labels */}
            <span className="before-after-label lbl-before">Before Template</span>
            <span className="before-after-label lbl-after">After Redesign</span>

            {/* Drag Handle button */}
            <div 
              className="slider-dragger-line" 
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="slider-dragger-button">↔</div>
            </div>
          </div>
        </div>
      </section>

      {/* --- PORTFOLIO CASE STUDY Grid --- */}
      <section className="section-alt reveal">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Case Studies</span>
            <h2 className="section-title">Selected <span>Client Successes</span></h2>
            <p className="section-desc">Each website represents a customized business development asset focused on SEO and click metrics.</p>
          </div>

          <div className="portfolio-tabs-nav">
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

          <div className="portfolio-showcase-grid">
            {filteredPortfolio.map((item, idx) => (
              <div key={idx} className="glass-card portfolio-case-study-card">
                <div className="portfolio-visual-mockup">
                  <span className="portfolio-metric-overlay">{item.metric}</span>
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                  />
                </div>
                <div className="portfolio-body-details">
                  <span className="portfolio-client-category">{item.category}</span>
                  <h3 className="portfolio-project-title">{item.title}</h3>
                  <p className="portfolio-project-description">{item.desc}</p>
                  
                  <div className="portfolio-metrics-row">
                    <div className="portfolio-metric-box">
                      <span className="portfolio-metric-val" style={{ color: '#10b981' }}>{item.metrics.clicks}</span>
                      <span className="portfolio-metric-lbl">Clicks Growth</span>
                    </div>
                    <div className="portfolio-metric-box">
                      <span className="portfolio-metric-val">{item.metrics.conversion}</span>
                      <span className="portfolio-metric-lbl">Conversion Rate</span>
                    </div>
                    <div className="portfolio-metric-box">
                      <span className="portfolio-metric-val" style={{ color: 'var(--primary)' }}>{item.metrics.speed}</span>
                      <span className="portfolio-metric-lbl">Load Speed</span>
                    </div>
                  </div>

                  <div className="portfolio-cta-row">
                    <Link to="/contact" className="btn btn-secondary" style={{ padding: '8px 16px', fontSize: '13px' }}>
                      Inquire Details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CLIENT REVIEWS SLIDER --- */}
      <section className="reveal">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Client Reviews</span>
            <h2 className="section-title">Endorsed by <span>Industry Leaders</span></h2>
            <p className="section-desc">Our corporate partners report measurable growth improvements in organic search leads and engagement rates.</p>
          </div>

          <div className="testimonials-carousel-container">
            <div className="testimonials-track" style={{ transform: `translateX(-${testimonialIndex * 33.3}%)` }}>
              {testimonials.map((t, idx) => (
                <div key={idx} className="glass-card testimonial-slide-card">
                  <div className="testimonial-header-stars">
                    {[...Array(t.rating)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                  </div>
                  <p className="testimonial-body-text">"{t.feedback}"</p>
                  
                  <div className="testimonial-client-row">
                    <img src={t.avatar} alt={t.name} className="testimonial-avatar" />
                    <div className="testimonial-client-meta">
                      <h4>{t.name}</h4>
                      <p>{t.role}, {t.company}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Testimonials controls */}
            <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', marginTop: '32px' }}>
              {testimonials.map((_, i) => (
                <button 
                  key={i} 
                  className={`dot ${testimonialIndex === i ? 'active' : ''}`}
                  onClick={() => setTestimonialIndex(i)}
                  style={{ 
                    width: '10px', 
                    height: '10px', 
                    borderRadius: '50%', 
                    background: testimonialIndex === i ? 'var(--primary)' : 'var(--border-color)',
                    border: 'none',
                    cursor: 'pointer'
                  }}
                  aria-label={`Testimonial slide ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- PROCESS WORKFLOW TIMELINE --- */}
      <section className="section-alt reveal">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Workflow Blueprint</span>
            <h2 className="section-title">Our Seven-Step <span>Success Pipeline</span></h2>
            <p className="section-desc">We maintain transparent development iterations to ensure launch parameters align with business objectives.</p>
          </div>

          <div className="timeline-track-vertical">
            {[
              { num: "01", name: "Discovery & Market Research", desc: "Analyzing target keywords, competitor search gaps, user demographics, and establishing conversion goals." },
              { num: "02", name: "Strategic Wireframing", desc: "Structuring UI map paths, CTAs, and information blocks before diving into full graphical mocks." },
              { num: "03", name: "Figma UI/UX Prototypes", desc: "Designing high-fidelity components, colors, and layouts to establish a luxurious brand presence." },
              { num: "04", name: "Production React Programming", desc: "Writing clean, optimized markup and state functions to support lightning-fast client experiences." },
              { num: "05", name: "Technical SEO Audits & Schemas", desc: "Injecting LD+JSON metadata arrays, configuring robots protocols, and auditing Web Vitals parameters." },
              { num: "06", name: "Flawless Launch Operations", desc: "Setting up server domains, global CDN caches, SSL endpoints, and running site crawl tests." },
              { num: "07", name: "Growth Support & Audits", desc: "Analyzing analytics tracker entries, monitoring keyword rank positions, and updating content pipelines." }
            ].map((step, idx) => (
              <div key={idx} className="timeline-step-row">
                <div className="timeline-indicator-node">{step.num}</div>
                <div className="timeline-step-content-box">
                  <h3 className="timeline-step-title">{step.name}</h3>
                  <p className="timeline-step-desc">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- PRICING SECTION --- */}
      <section className="reveal">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Structured Investments</span>
            <h2 className="section-title">Transparent <span>Pricing Model</span></h2>
            <p className="section-desc">Select the billing period that fits your budget. Special startup consultation offers available.</p>
          </div>

          {/* Billing Switch Toggle */}
          <div className="pricing-billing-switch-row">
            <span 
              className={`billing-switch-label ${billingPeriod === 'monthly' ? 'active' : ''}`}
              onClick={() => setBillingPeriod('monthly')}
            >
              Monthly Retainer
            </span>
            
            <div 
              className={`switch-bg-pill ${billingPeriod === 'monthly' ? 'monthly-billing' : 'annual-billing'}`}
              onClick={() => setBillingPeriod(prev => prev === 'monthly' ? 'one-time' : 'monthly')}
            >
              <div className="switch-handle-circle" />
            </div>

            <span 
              className={`billing-switch-label ${billingPeriod === 'one-time' ? 'active' : ''}`}
              onClick={() => setBillingPeriod('one-time')}
            >
              One-Time Project
            </span>
          </div>

          <div className="pricing-cards-layout">
            {/* Starter Plan */}
            <div className="glass-card pricing-plan-card">
              <span className="pricing-plan-name">Starter Hub</span>
              <div className="pricing-plan-cost">
                {billingPeriod === 'monthly' ? "$499" : "$1,499"}
                <span>/{billingPeriod === 'monthly' ? "mo" : "project"}</span>
              </div>
              <p className="pricing-plan-desc">Perfect for local shops, small startups, and landing promotion campaigns.</p>
              <ul className="pricing-plan-features-list">
                <li><CheckCircle size={14} /> 5 Custom React pages</li>
                <li><CheckCircle size={14} /> Basic SEO meta titles setup</li>
                <li><CheckCircle size={14} /> 100% Mobile responsive layout</li>
                <li><CheckCircle size={14} /> Standard contact form widget</li>
              </ul>
              <Link to="/contact" className="btn btn-secondary" style={{ width: '100%' }}>Choose Starter</Link>
            </div>

            {/* Professional Plan (Popular) */}
            <div className="glass-card pricing-plan-card popular-plan">
              <span className="popular-badge-pill">MOST POPULAR</span>
              <span className="pricing-plan-name" style={{ color: 'var(--primary)' }}>Growth Partner</span>
              <div className="pricing-plan-cost">
                {billingPeriod === 'monthly' ? "$899" : "$2,999"}
                <span>/{billingPeriod === 'monthly' ? "mo" : "project"}</span>
              </div>
              <p className="pricing-plan-desc">Recommended for established businesses needing high rankings and custom UI/UX.</p>
              <ul className="pricing-plan-features-list">
                <li><CheckCircle size={14} /> 15 Custom components &amp; pages</li>
                <li><CheckCircle size={14} /> Advanced JSON-LD rich FAQ schemas</li>
                <li><CheckCircle size={14} /> Custom Figma mockup design systems</li>
                <li><CheckCircle size={14} /> WhatsApp float &amp; newsletter capture</li>
                <li><CheckCircle size={14} /> Standard blog system with 3 posts</li>
              </ul>
              <Link to="/contact" className="btn btn-primary" style={{ width: '100%' }}>Get Growth Package</Link>
            </div>

            {/* Enterprise Plan */}
            <div className="glass-card pricing-plan-card">
              <span className="pricing-plan-name">Enterprise System</span>
              <div className="pricing-plan-cost">
                Custom
              </div>
              <p className="pricing-plan-desc">For large platforms requiring custom API syncs, database panels, and full marketing hubs.</p>
              <ul className="pricing-plan-features-list">
                <li><CheckCircle size={14} /> Unlimited code files &amp; routes</li>
                <li><CheckCircle size={14} /> Headless Shopify Stripe checkouts</li>
                <li><CheckCircle size={14} /> Dedicated support SLA agreements</li>
                <li><CheckCircle size={14} /> Analytics CRM integration structure</li>
              </ul>
              <Link to="/contact" className="btn btn-secondary" style={{ width: '100%' }}>Book Discovery Call</Link>
            </div>
          </div>
        </div>
      </section>

      {/* --- LOCAL SEO & GOOGLE MAPS BLOCK --- */}
      <section className="section-alt reveal">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: '48px', alignItems: 'center' }} className="local-seo-grid-layout">
            <div>
              <span className="section-tag">Local Authority</span>
              <h2>Professional Digital Solutions for <span>Local Businesses</span></h2>
              <p style={{ color: 'var(--text-muted)', lineHeight: '1.7', margin: '16px 0 24px' }}>
                BrightWebD is based in Kochi, Kerala, offering premium web design company expertise and web development agency resources to clients worldwide. We support hotels, healthcare clinics, local construction teams, ecommerce portals, and entrepreneurs. Our local business schema and geographical maps help regional customers search and locate your services instantly.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <div style={{ display: 'flex', gap: '8px', fontSize: '14px', fontWeight: 'bold' }}>
                  📍 Service Areas:
                </div>
                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                  {['Kochi', 'Ernakulam', 'Trivandrum', 'Calicut', 'Bangalore', 'Mumbai', 'Worldwide'].map(loc => (
                    <span key={loc} style={{ background: 'var(--bg-card)', border: '1px solid var(--border-color)', padding: '4px 12px', borderRadius: '4px', fontSize: '12px' }}>
                      {loc}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Google Map Iframe Widget */}
            <div style={{ borderRadius: '16px', overflow: 'hidden', height: '320px', border: '1px solid var(--border-color)', boxShadow: 'var(--shadow-md)' }}>
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3928.847529452079!2d76.2974868!3d9.9723223!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080d514abec6ab%3A0x703b6ad277b0f4a2!2sKochi%2C%20Kerala!5e0!3m2!1sen!2sin!4v1716982468792!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0, filter: 'contrast(1.1)' }} 
                allowFullScreen="" 
                loading="lazy" 
                title="BrightWebD Head Office - Kochi Map Locator"
                aria-label="Google Maps view of Kochi, Kerala"
              />
            </div>
          </div>
        </div>
      </section>

      {/* --- FINAL CALL TO ACTION --- */}
      <section className="reveal" style={{ background: 'var(--accent-gradient)', color: '#fff', textAlign: 'center', padding: '120px 24px' }}>
        <div className="container">
          <Sparkles size={48} style={{ color: '#ffbd2e', marginBottom: '24px', animation: 'float 4s infinite' }} />
          <h2 style={{ fontSize: 'clamp(28px, 6vw, 48px)', fontWeight: '800', lineHeight: '1.2', marginBottom: '24px' }}>
            Build a Website That Turns Visitors Into Cash Flow
          </h2>
          <p style={{ maxWidth: '600px', margin: '0 auto 40px', fontSize: '18px', color: 'rgba(255,255,255,0.8)' }}>
            Schedule a session to explore design wireframes, target keyword rankings, and custom automation APIs.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/contact" className="btn btn-secondary" style={{ background: '#fff', color: '#000', fontWeight: 'bold' }}>
              Request Project Proposal
            </Link>
            <button className="btn" style={{ border: '1px solid rgba(255,255,255,0.4)', color: '#fff' }} onClick={() => window.scrollTo(0, document.body.scrollHeight)}>
              Talk to Our Engineers
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
