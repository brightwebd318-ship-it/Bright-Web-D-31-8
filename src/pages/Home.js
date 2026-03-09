import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  const featuredTestimonials = [
    { name: 'Director', company: 'EkathaCabsCohin', feedback: 'Perfect service and an amazing website for our cab business. Highly recommended!', rating: 5, link: 'https://brightwebd318-ship-it.github.io/EkthaCabsCochin/' }
  ];

  const renderStars = (rating) => {
    return Array.from({ length: 5 }).map((_, i) => (
      <span key={i} className={`star ${i < rating ? 'filled' : ''}`}>★</span>
    ));
  };

  React.useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px"
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        }
      });
    }, observerOptions);

    const hiddenElements = document.querySelectorAll('.reveal');
    hiddenElements.forEach((el) => observer.observe(el));

    return () => {
      hiddenElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div>
      <section className="hero video-hero">
        <div className="video-background">
          <video autoPlay loop muted playsInline>
            <source src="https://videos.pexels.com/video-files/3163534/3163534-uhd_2560_1440_30fps.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="video-overlay"></div>
        </div>
        <div className="hero-content">
          <div className="hero-sub eyebrow">
            <span className="pill">Get a Free Website Consultation</span>
            <span className="pill">Reserve Your Free Website for Startups</span>
          </div>
          <h1><span className="hero-quote">"The best way to predict the future is to create it."</span></h1>
          <p className="lead">Free website development for startups &amp; affordable solutions for small businesses. <span className="highlight">Launch fast — stand out beautifully.</span></p>
          <div className="ctas">
            <Link className="btn primary" to="/contact">Contact Us Now</Link>
            <Link className="btn ghost" to="/contact">Get My Free Website</Link>
          </div>
        </div>
      </section>

      <section className="trust reveal" aria-labelledby="trust-heading">
        <h2 id="trust-heading">Why clients choose Bright Web D 31:8</h2>
        <div className="trust-grid">
          <div className="trust-badges">
            <div className="badge">✅ Free Websites for Startups</div>
            <div className="badge">🚀 Quick Delivery & Reliable Support</div>
            <div className="badge">💼 Business-Focused, Modern Designs</div>
            <div className="badge">🌍 Fully Responsive & Mobile-Friendly</div>
            <div className="badge">⭐ 100% Client Satisfaction</div>
          </div>

          <div className="trust-right">
            <div className="stat-row">
              <div className="stat">
                <div className="num">20+</div>
                <div className="label">Projects Completed</div>
              </div>
              <div className="stat">
                <div className="num">15</div>
                <div className="label">Satisfied Clients</div>
              </div>
            </div>

            <blockquote className="testimonial">“Bright Web D delivered our site ahead of schedule — beautiful design and great support.” — <strong>Happy Client</strong></blockquote>

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

      <section className="featured-testimonials reveal">
        <h2>What Our Clients Say</h2>
        <div className="testimonials-row">
          {featuredTestimonials.map((t, i) => (
            <div className="testi-card" key={i}>
              <div className="stars">{renderStars(t.rating)}</div>
              <p>"{t.feedback}"</p>
              <div className="author">
                {t.name} — {t.link ? (
                  <a href={t.link} target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'underline', cursor: 'pointer', pointerEvents: 'auto', position: 'relative', zIndex: 10 }}>
                    {t.company}
                  </a>
                ) : (
                  t.company
                )}
              </div>
            </div>
          ))}
        </div>
        <p className="testi-link"><Link to="/testimonials">See all client stories →</Link></p>
      </section>

      <section className="cta-invite reveal">
        <h2>Start Your Online Journey with Bright Web D 31:8 Today!</h2>
        <p className="cta-sub">Get a Free Website Consultation — Reserve Your Free Website for Startups</p>
        <div className="ctas">
          <Link className="btn primary" to="/contact">Contact Us Now</Link>
          <Link className="btn ghost" to="/contact">Get My Free Website</Link>
        </div>
        <p className="contact-line">📧 Contact us: brightwebd318@gmail.com</p>
      </section>

      <section className="services reveal" aria-labelledby="services-heading">
        <div className="card">
          <h3>Design & Branding</h3>
          <p>Strategic design that communicates your values.</p>
        </div>
        <div className="card">
          <h3>Web Development</h3>
          <p>Fast, responsive sites using modern frameworks.</p>
        </div>
        <div className="card">
          <h3>SEO & Performance</h3>
          <p>Optimized for discovery and speed.</p>
        </div>
      </section>
    </div>
  );
}
