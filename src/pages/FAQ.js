import React from 'react';
import Ill from '../assets/illustration-2.svg';

export default function FAQ(){
  const faqs = [
    {q: 'Do you offer free websites for startups?', a: 'Yes — we reserve limited free website slots for qualifying startups. Contact us to check availability.'},
    {q: 'What is the typical delivery time?', a: 'Small brochure sites can launch within 1-2 weeks; timelines vary by scope.'},
    {q: 'Do you provide ongoing support?', a: 'Yes — we offer maintenance plans with backups, updates, and priority support.'}
  ];

  return (
    <div className="page support-page">
      <div className="support-hero">
        <img src={Ill} alt="support illustration" className="support-ill" />
        <div>
          <h2>Frequently Asked Questions</h2>
          <p className="muted">Answers to common questions about our services and processes.</p>
        </div>
      </div>

      <div className="faq-list">
        {faqs.map((f, i) => (
          <div className="faq-item" key={i}>
            <h4>{f.q}</h4>
            <p>{f.a}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
