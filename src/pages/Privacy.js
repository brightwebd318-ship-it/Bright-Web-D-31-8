import React from 'react';
import Ill from '../assets/illustration-1.svg';

export default function Privacy(){
  return (
    <div className="page privacy-page">
      <div className="support-hero">
        <img src={Ill} alt="privacy illustration" className="support-ill" />
        <div>
          <h2>Privacy Policy (Summary)</h2>
          <p className="muted">We respect your privacy. This summary outlines how we handle data.</p>
        </div>
      </div>

      <section className="legal-content">
        <h3>1. Information We Collect</h3>
        <p>We may collect the following information from you:</p>
        <ul>
          <li>Contact information (name, email, phone) when you contact us.</li>
          <li>Project details and business information provided during proposals.</li>
          <li>Usage data (IP address, browser type) via analytics.</li>
          <li>Payment information (processed securely through third parties).</li>
        </ul>

        <h3>2. How We Use Your Information</h3>
        <ul>
          <li>To respond to inquiries and provide services.</li>
          <li>To send invoices, updates, and support communications.</li>
          <li>To improve our website and services.</li>
          <li>To comply with legal obligations.</li>
        </ul>

        <h3>3. Data Security</h3>
        <p>We use industry-standard encryption and secure practices to protect your data. However, no online system is 100% secure.</p>

        <h3>4. Third Parties</h3>
        <p>We may share information with: hosting providers, payment processors, email services, and analytics platforms. We do not sell your data.</p>

        <h3>5. Your Rights</h3>
        <p>You have the right to access, correct, or delete your personal data. Contact us at brightwebd318@gmail.com to exercise these rights.</p>

        <h3>6. Cookies</h3>
        <p>Our site uses essential cookies for functionality. Third-party cookies may be used for analytics and marketing.</p>

        <h3>7. Changes to This Policy</h3>
        <p>We may update this policy periodically. Changes will be posted on this page with an updated date.</p>

        <h3>8. Contact Us</h3>
        <p>For privacy concerns, contact: <strong>brightwebd318@gmail.com</strong></p>
      </section>
    </div>
  );
}
