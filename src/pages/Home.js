import React, { useState, useEffect, useCallback } from 'react';
import SEO from '../components/SEO';
import { Link } from 'react-router-dom';
import slideWebDev from '../assets/slide_webdev.png';
import slideSEO from '../assets/slide_seo.png';
import slideSocial from '../assets/slide_social.png';
import slideMarketing from '../assets/slide_marketing.png';

/* ─── Slider Data ─────────────────────────────────────────────────── */
const slides = [
  {
    img: slideWebDev,
    tag: '⚡ Web Development',
    heading: 'Web Development in Kochi',
    sub: 'Lightning-fast, pixel-perfect React & modern framework websites built to convert visitors into customers.',
    cta: '/services',
    ctaLabel: 'Explore Services',
    accent: '#06b6d4',
  },
  {
    img: slideSEO,
    tag: '📈 SEO & Performance',
    heading: 'Rank Higher. Grow Faster.',
    sub: 'Data-driven SEO strategies that push your business to the top of Google and keep you there.',
    cta: '/services',
    ctaLabel: 'Boost My Rankings',
    accent: '#f59e0b',
  },
  {
    img: slideSocial,
    tag: '📱 Social Media Management',
    heading: 'Own Every Feed.',
    sub: 'Creative content strategies and community management that build loyal audiences and drive real engagement.',
    cta: '/services',
    ctaLabel: 'Grow My Audience',
    accent: '#a78bfa',
  },
  {
    img: slideMarketing,
    tag: '🚀 Digital Marketing',
    heading: 'Market Smarter. Win Bigger.',
    sub: 'Full-funnel digital campaigns — ads, email, content — engineered for maximum ROI and brand growth.',
    cta: '/contact',
    ctaLabel: 'Start a Campaign',
    accent: '#34d399',
  },
];

/* ─── Animated Quotes ─────────────────────────────────────────────── */
const quotes = [
  { text: '"The best way to predict the future is to create it."', by: '— Peter Drucker' },
  { text: '"Your brand is what people say about you when you\'re not in the room."', by: '— Jeff Bezos' },
  { text: '"Design is not just what it looks like — design is how it works."', by: '— Steve Jobs' },
  { text: '"Marketing is no longer about the stuff you make, but the stories you tell."', by: '— Seth Godin' },
];

/* ─── Hero Slider Component ───────────────────────────────────────── */
function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);

  const goTo = useCallback((idx) => {
    if (animating) return;
    setAnimating(true);
    setTimeout(() => {
      setCurrent(idx);
      setAnimating(false);
    }, 400);
  }, [animating]);

  useEffect(() => {
    const id = setInterval(() => {
      goTo((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(id);
  }, [goTo]);

  const slide = slides[current];

  return (
    <section className="hero-slider">
      {/* Background image with parallax fade */}
      <div className={`slider-bg ${animating ? 'fade-out' : 'fade-in'}`}>
        <img src={slide.img} alt={slide.tag} />
        <div className="slider-overlay" style={{ '--accent': slide.accent }} />
      </div>

      {/* Content */}
      <div className={`slider-content ${animating ? 'content-out' : 'content-in'}`}>
        <span className="slider-tag" style={{ borderColor: slide.accent, color: slide.accent }}>
          {slide.tag}
        </span>
        <h1 className="slider-heading">{slide.heading}</h1>
        <p className="slider-sub">{slide.sub}</p>
        <div className="slider-ctas">
          <Link className="btn primary" to={slide.cta}>{slide.ctaLabel}</Link>
          <Link className="btn ghost" to="/contact">Get Free Consultation</Link>
        </div>
      </div>

      {/* Dot Navigation */}
      <div className="slider-dots">
        {slides.map((s, i) => (
          <button
            key={i}
            className={`dot ${i === current ? 'active' : ''}`}
            style={i === current ? { background: s.accent, boxShadow: `0 0 12px ${s.accent}` } : {}}
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>

      {/* Arrows */}
      <button className="slider-arrow left" onClick={() => goTo((current - 1 + slides.length) % slides.length)} aria-label="Previous">&#8249;</button>
      <button className="slider-arrow right" onClick={() => goTo((current + 1) % slides.length)} aria-label="Next">&#8250;</button>

      {/* Progress bar */}
      <div className="slider-progress" key={current}>
        <div className="slider-progress-bar" style={{ '--accent': slide.accent }} />
      </div>
    </section>
  );
}

/* ─── Animated Quote Banner ───────────────────────────────────────── */
function QuoteBanner() {
  const [qi, setQi] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const id = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setQi(q => (q + 1) % quotes.length);
        setVisible(true);
      }, 600);
    }, 6000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="quote-banner">
      <div className={`quote-inner ${visible ? 'q-in' : 'q-out'}`}>
        <span className="quote-icon">"</span>
        <p className="quote-text">{quotes[qi].text}</p>
        <span className="quote-by">{quotes[qi].by}</span>
      </div>
    </div>
  );
}

/* ─── Services Ticker ─────────────────────────────────────────────── */
const serviceItems = ['Web Development', 'SEO Optimization', 'Social Media Management', 'Digital Marketing', 'UI/UX Design', 'Brand Identity', 'E-Commerce Solutions', 'Content Strategy'];

function ServiceTicker() {
  const doubled = [...serviceItems, ...serviceItems];
  return (
    <div className="ticker-wrap">
      <div className="ticker-track">
        {doubled.map((s, i) => (
          <span key={i} className="ticker-item">
            <span className="ticker-dot">◆</span> {s}
          </span>
        ))}
      </div>
    </div>
  );
}

/* ─── Main Home ───────────────────────────────────────────────────── */
export default function Home() {
  const featuredTestimonials = [
    { name: 'Director', company: 'EkathaCabsCohin', feedback: 'Perfect service and an amazing website for our cab business. Highly recommended!', rating: 5, link: 'https://brightwebd318-ship-it.github.io/EkthaCabsCochin/' },
    { name: 'Client', company: 'Home2Home', feedback: 'Outstanding service and a brilliant website delivered. Highly recommended!', rating: 5, link: 'https://brightwebd318-ship-it.github.io/HOME2HOME/' }
  ];

  const renderStars = (rating) =>
    Array.from({ length: 5 }).map((_, i) => (
      <span key={i} className={`star ${i < rating ? 'filled' : ''}`}>★</span>
    ));

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => e.isIntersecting && e.target.classList.add('show')),
      { threshold: 0.12 }
    );
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    return () => document.querySelectorAll('.reveal').forEach(el => observer.unobserve(el));
  }, []);

  return (
    <div>
      <SEO 
        title="Home" 
        description="BrightWebD 31:8 — Professional web development in Kochi. We build affordable, high-performance websites for startups and small businesses."
        keywords="webdevelopment in kochi, web development kochi, SEO services, startup web design, BrightWebD Kochi"
      />
      {/* ── Hero Slider ── */}
      <HeroSlider />

      {/* ── Scrolling Service Ticker ── */}
      <ServiceTicker />

      {/* ── Animated Quote Banner ── */}
      <QuoteBanner />

      {/* ── Why Choose Us ── */}
      <section className="trust reveal" aria-labelledby="trust-heading">
        <h2 id="trust-heading">Why Clients Choose <span style={{ color: '#06b6d4' }}>Bright Web D 31:8</span></h2>
        <div className="trust-grid">
          <div className="trust-badges">
            <div className="badge">✅ Free Websites for Startups</div>
            <div className="badge">🚀 Quick Delivery &amp; Reliable Support</div>
            <div className="badge">💼 Business-Focused, Modern Designs</div>
            <div className="badge">🌍 Fully Responsive &amp; Mobile-Friendly</div>
            <div className="badge">⭐ 100% Client Satisfaction</div>
          </div>
          <div className="trust-right">
            <div className="stat-row">
              <div className="stat"><div className="num">20+</div><div className="label">Projects Completed</div></div>
              <div className="stat"><div className="num">15</div><div className="label">Satisfied Clients</div></div>
            </div>
            <blockquote className="testimonial">"Bright Web D delivered our site ahead of schedule — beautiful design and great support." — <strong>Happy Client</strong></blockquote>
            <div className="client-logos" aria-hidden="true">
              <div className="logo">TechFlow</div>
              <div className="logo">LuxeRetail</div>
              <div className="logo">ZenBeauty</div>
              <div className="logo">SparkDev</div>
              <div className="logo">UrbanEats</div>
              <div className="logo">GreenOrbit</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── What Clients Say ── */}
      <section className="featured-testimonials reveal">
        <h2>What Our Clients Say</h2>
        <div className="testimonials-row">
          {featuredTestimonials.map((t, i) => (
            <div className="testi-card" key={i}>
              <div className="stars">{renderStars(t.rating)}</div>
              <p>"{t.feedback}"</p>
              <div className="author">
                {t.name} — {t.link ? (
                  <a href={t.link} target="_blank" rel="noopener noreferrer" style={{ color: '#06b6d4', textDecoration: 'underline' }}>
                    {t.company}
                  </a>
                ) : t.company}
              </div>
            </div>
          ))}
        </div>
        <p className="testi-link"><Link to="/testimonials">See all client stories →</Link></p>
      </section>

      {/* ── CTA Invite ── */}
      <section className="cta-invite reveal">
        <h2>Start Your Online Journey with <span style={{ color: '#06b6d4' }}>Bright Web D 31:8</span> Today!</h2>
        <p className="cta-sub">Get a Free Website Consultation — Reserve Your Free Website for Startups</p>
        <div className="ctas">
          <Link className="btn primary" to="/contact">Contact Us Now</Link>
          <Link className="btn ghost" to="/contact">Get My Free Website</Link>
        </div>
        <p className="contact-line">📧 Contact us: brightwebd318@gmail.com</p>
      </section>
    </div>
  );
}
