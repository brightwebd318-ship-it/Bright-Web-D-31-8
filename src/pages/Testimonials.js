import React from 'react';

export default function Testimonials(){
  const testimonials = [
    {
      name: 'Sarah Chen',
      company: 'Tech Startup Co.',
      role: 'Co-founder',
      feedback: 'Bright Web D delivered our site in 10 days. The design is modern, fast, and our conversion rate jumped 35% in the first month.',
      rating: 5,
      metric: '35% conversion increase'
    },
    {
      name: 'Mike Thompson',
      company: 'Local Shop Goods',
      role: 'Owner',
      feedback: 'As a small business owner, I needed affordable, quality work. They gave me exactly that. Highly recommend!',
      rating: 5,
      metric: '50+ online orders/month'
    },
    {
      name: 'Alex Rodriguez',
      company: 'Design Studio XYZ',
      role: 'Creative Director',
      feedback: 'Professional team, responsive communication, and beautiful end product. Worth every penny.',
      rating: 5,
      metric: '2 years of support'
    },
    {
      name: 'Jessica Park',
      company: 'Wellness Brand',
      role: 'Founder',
      feedback: 'They redesigned our old site and it feels like a completely new business. Amazing work!',
      rating: 5,
      metric: '300% traffic growth'
    },
    {
      name: 'David Walsh',
      company: 'Consulting Firm',
      role: 'VP Operations',
      feedback: 'Their SEO work helped us rank for our top keywords. Results exceeded expectations.',
      rating: 4,
      metric: 'Top 3 for 5 keywords'
    },
    {
      name: 'Emma Liu',
      company: 'E-shop Premium',
      role: 'Founder',
      feedback: 'Great e-commerce setup with Stripe integration. Customers love the checkout flow.',
      rating: 5,
      metric: '$50k+ in first 6 months'
    }
  ];

  const renderStars = (rating) => {
    return Array.from({length: 5}).map((_, i) => (
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
              <div className="role">{t.role} @ {t.company}</div>
            </div>
            <div className="metric">📈 {t.metric}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
