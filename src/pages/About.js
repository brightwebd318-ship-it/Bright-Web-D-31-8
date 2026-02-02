import React from 'react';

export default function About(){
  return (
    <div className="page about">
      <h2>About Bright Web D 31:8</h2>
      <p className="intro">At Bright Web D 31:8, we specialize in web development and design that helps startups, small shops, and growing businesses succeed online.</p>
      <p className="mission">Our mission is simple: turn your ideas into high-quality, responsive websites that attract customers and build trust.</p>
      <p>We focus on clean design, reliable performance, and accessibility so your site looks great and performs well for everyone.</p>

      <section className="cred-section">
        <h3>Our Mission &amp; Vision</h3>
        <p>Mission: Build beautiful, performant websites that help small businesses grow.
        Vision: Make quality web presence accessible to every startup and shop.</p>

        <h3>Who We Help</h3>
        <p>We partner with startups, small shops, local brands, and growing businesses that need a reliable, modern website without breaking the bank.</p>

        <h3>Our Approach / Process</h3>
        <ol>
          <li>Discovery — Understand goals and audience.</li>
          <li>Design — Clear, on-brand UI/UX prototypes.</li>
          <li>Build — Fast, accessible, and responsive implementation.</li>
          <li>Launch &amp; Support — Deploy and provide ongoing maintenance.</li>
        </ol>

        <h3>Why Choose Bright Web D 31:8</h3>
        <ul>
          <li>Startup-first offers including free website slots.</li>
          <li>Fast delivery and ongoing support.</li>
          <li>Business-focused design that converts visitors into customers.</li>
          <li>Transparent pricing and clear timelines.</li>
        </ul>

        <h3>Team</h3>
        <div className="team-grid">
          <div className="member">
            <div className="avatar">JS</div>
            <div className="meta">
              <div className="name">Jordan Smith</div>
              <div className="role">Founder / Lead Developer</div>
            </div>
          </div>
          <div className="member">
            <div className="avatar">AM</div>
            <div className="meta">
              <div className="name">Ava Martinez</div>
              <div className="role">Designer</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
