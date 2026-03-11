import React from 'react';
import Ill from '../assets/illustration-1.svg';
import SEO from '../components/SEO';

const Pricing = () => {
  const plans = [
    {name: 'Startup (Free)', price: 'Free', bullets: ['Limited slots', 'Basic brochure site', 'Email support']},
    {name: 'Starter', price: '$499', bullets: ['Custom design', 'Responsive', '1 month support']},
    {name: 'Business', price: '$1299', bullets: ['E-commerce ready', 'SEO basics', '3 months support']}
  ];

  return (
    <div className="page pricing-page">
      <SEO 
        title="Pricing Plans" 
        description="Affordable web development and digital marketing packages by BrightWebD 31:8 in Kochi. Transparent pricing for startups and small businesses."
        keywords="web development cost kochi, digital marketing packages Kerala, affordable website pricing"
      />
      <div className="pricing-hero">
        <div>
          <h2>Pricing & Packages</h2>
          <p className="muted">Clear, upfront packages to fit early-stage budgets.</p>
        </div>
        <img src={Ill} alt="pricing illustration" className="pricing-ill" />
      </div>

      <div className="pricing-grid">
        {plans.map(p => (
          <div className="plan" key={p.name}>
            <h3>{p.name}</h3>
            <div className="price">{p.price}</div>
            <ul>
              {p.bullets.map((b,i)=> <li key={i}>{b}</li>)}
            </ul>
            <a className="btn primary" href="/contact">Choose</a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Pricing;
