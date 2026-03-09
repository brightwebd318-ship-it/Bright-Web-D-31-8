import React from 'react';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Director',
      company: 'EkathaCabsCohin',
      role: 'Client',
      feedback: 'Perfect service and an amazing website for our cab business. Highly recommended!',
      rating: 5,
      metric: 'Excellent Online Presence',
      link: 'https://brightwebd318-ship-it.github.io/EkthaCabsCochin/'
    }
  ];

  const renderStars = (rating) => {
    return Array.from({ length: 5 }).map((_, i) => (
      <span key={i} className={`star ${i < rating ? 'filled' : ''}`}>★</span>
    ));
  };

  return (
    <div className="page testimonials-page">
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
