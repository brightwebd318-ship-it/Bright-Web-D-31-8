import React from 'react';
import Ill from '../assets/illustration-2.svg';

export default function Refund(){
  return (
    <div className="page refund-page">
      <div className="support-hero">
        <img src={Ill} alt="refund illustration" className="support-ill" />
        <div>
          <h2>Refund &amp; Cancellation Policy</h2>
          <p className="muted">Clear terms for refunds and cancellations on web development projects.</p>
        </div>
      </div>

      <section className="legal-content">
        <h3>1. Refund Eligibility</h3>
        <p>Refunds are available under the following conditions:</p>
        <ul>
          <li><strong>Pre-work refunds:</strong> Full refund if requested before work begins.</li>
          <li><strong>Partial refunds:</strong> If you cancel mid-project, refund is calculated as: paid amount minus cost of completed work.</li>
          <li><strong>Non-refundable:</strong> Custom design work, coding, and domain/hosting registration are non-refundable once started.</li>
        </ul>

        <h3>2. Cancellation Process</h3>
        <p>To cancel a project, email <strong>brightwebd318@gmail.com</strong> with:</p>
        <ul>
          <li>Cancellation reason</li>
          <li>Project ID</li>
          <li>Your contact details</li>
        </ul>
        <p>We will respond within 5 business days with a final invoice or refund amount.</p>

        <h3>3. Payment Plan Refunds</h3>
        <p>For projects paid in installments, cancellation stops future charges. Completed work is non-refundable. Remaining balance may be invoiced.</p>

        <h3>4. Free Website Program</h3>
        <p>Free websites offered under our startup program are subject to completion. If cancelled after work begins, payment may be requested for completed services.</p>

        <h3>5. Hosting &amp; Domain Refunds</h3>
        <p>Domain registrations and annual hosting are non-refundable but transferable. We can assist with transfers upon request.</p>

        <h3>6. Support &amp; Maintenance Plans</h3>
        <p>Monthly maintenance plans can be cancelled anytime with 30 days' notice. Refunds are not issued for unused portions.</p>

        <h3>7. Dispute Resolution</h3>
        <p>Disputes over refunds will be reviewed by our team. Contact <strong>brightwebd318@gmail.com</strong> within 14 days of the transaction.</p>

        <h3>8. Service Failures</h3>
        <p>If we fail to deliver agreed services, we will make good-faith efforts to fix issues. In cases of significant failure, a refund or credit may be offered.</p>
      </section>
    </div>
  );
}
