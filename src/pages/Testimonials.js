import React from 'react';
import SEO from '../components/SEO';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Director',
      company: 'EkathaCabsCohin',
      role: 'Client',
      feedback: 'Perfect service and an amazing website for our cab business. Highly recommended!',
      rating: 5,
      metric: 'Excellent Online Presence',
      link: 'https://www.ekthacabscochin.com/'
    },
    {
      name: 'Client',
      company: 'Home2Home',
      role: 'Client',
      feedback: 'Outstanding service and a brilliant website delivered. Highly recommended!',
      rating: 5,
      metric: 'Excellent Online Presence',
      link: 'https://brightwebd318-ship-it.github.io/HOME2HOME/'
    }
  ];

  const renderStars = (rating) => {
    return Array.from({ length: 5 }).map((_, i) => (
      <span key={i} className={`star ${i < rating ? 'filled' : ''}`}>★</span>
    ));
  };

  return (
    <div className="page testimonials-page">
      <SEO 
        title="Testimonials" 
        description="Read what our clients say about BrightWebD 31:8. Real success stories from startups and businesses in Kochi."
        keywords="BrightWebD testimonials, client reviews, web development success stories Kochi"
      />
      <h2>Client Testimonials & Success Stories</h2>
      <p className="muted">Real feedback from real clients. Here's what they've accomplished with Bright Web D 31:8.</p>

      <div className="testimonials-grid">
        {testimonials.map((t, i) => (
          <div className="testimonial-card" key={i}>
            <div className="stars">
              {renderStars(t.rating)}
            </div>
            <p className="feedback">"{t.feedback}"</p>
            <div className="client-info">
              <div className="name">{t.name}</div>
              <div className="role">
                {t.role} @ {t.link ? (
                  <a href={t.link} target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'underline', cursor: 'pointer', pointerEvents: 'auto', position: 'relative', zIndex: 10 }}>
                    {t.company}
                  </a>
                ) : (
                  t.company
                )}
              </div>
            </div>
            <div className="metric">📈 {t.metric}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
