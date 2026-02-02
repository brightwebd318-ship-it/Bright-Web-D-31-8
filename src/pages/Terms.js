import React from 'react';
import Ill from '../assets/illustration-2.svg';

export default function Terms(){
  return (
    <div className="page terms-page">
      <div className="support-hero">
        <img src={Ill} alt="terms illustration" className="support-ill" />
        <div>
          <h2>Terms of Service (Summary)</h2>
          <p className="muted">Short summary of terms — please contact us for full legal text.</p>
        </div>
      </div>

      <section className="legal-content">
        <h3>1. Service Agreement</h3>
        <p>These terms apply to all services provided by Bright Web D 31:8. By engaging our services, you agree to these terms.</p>

        <h3>2. Service Scope &amp; Deliverables</h3>
        <ul>
          <li>Services are delivered as outlined in the signed proposal or statement of work.</li>
          <li>Changes outside the original scope may incur additional fees.</li>
          <li>Timeline estimates are approximate and subject to change.</li>
        </ul>

        <h3>3. Payment Terms</h3>
        <ul>
          <li>Invoices are due within 14 days unless otherwise agreed.</li>
          <li>We accept credit cards, bank transfers, and other common methods.</li>
          <li>Late payments may incur interest or service suspension.</li>
        </ul>

        <h3>4. Intellectual Property</h3>
        <p>Upon full payment, we transfer ownership of custom work to you. Pre-existing components remain our property.</p>

        <h3>5. Client Responsibilities</h3>
        <ul>
          <li>You provide accurate information, content, and access rights.</li>
          <li>You approve designs and changes in writing.</li>
          <li>You are responsible for your website's legal compliance.</li>
        </ul>

        <h3>6. Limitation of Liability</h3>
        <p>Our liability is limited to the amount paid for services in the applicable project. We are not liable for indirect, incidental, or consequential damages.</p>

        <h3>7. Termination</h3>
        <p>Either party may terminate with 14 days' written notice. Payment obligations for completed work remain due.</p>

        <h3>8. Warranty Disclaimer</h3>
        <p>Services are provided "as-is." We do not guarantee specific results or uptime, but we strive for high quality.</p>

        <h3>9. Governing Law</h3>
        <p>These terms are governed by applicable local laws where the service provider is located.</p>

        <h3>10. Contact &amp; Disputes</h3>
        <p>For disputes, contact us at <strong>brightwebd318@gmail.com</strong>. We will work to resolve issues in good faith.</p>
      </section>
    </div>
  );
}
