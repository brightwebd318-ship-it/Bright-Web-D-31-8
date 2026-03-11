import React, { useState } from 'react';

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [submittedData, setSubmittedData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);

    // Simulate a short send delay for a realistic feel
    setTimeout(() => {
      setSubmittedData({ ...formData });
      setFormData({ name: '', email: '', message: '' });
      setLoading(false);
      setSent(true);
    }, 1200);
  }

  function handleSendAnother() {
    setSent(false);
    setSubmittedData(null);
  }

  return (
    <div className="page contact-page">
      <div className="contact-header">
        <h2>Let's Work Together</h2>
        <p className="lead">Get in touch with us. We respond within 24 hours.</p>
      </div>

      <div className="contact-grid">
        <div className="contact-info">
          <div className="info-card">
            <div className="icon-box">📧</div>
            <h3>Email</h3>
            <p><a href="mailto:brightwebd318@gmail.com">brightwebd318@gmail.com</a></p>
          </div>

          <div className="info-card">
            <div className="icon-box">📞</div>
            <h3>Quick Response</h3>
            <p>We reply within 24 hours on business days.</p>
          </div>

          <div className="info-card">
            <div className="icon-box">💬</div>
            <h3>Chat</h3>
            <p>Use the form to send a detailed message.</p>
          </div>
        </div>

        <div className="contact-form-wrap">
          {sent && submittedData ? (
            <div className="success-panel">
              {/* Animated checkmark */}
              <div className="success-check-wrap">
                <svg className="success-checkmark" viewBox="0 0 52 52">
                  <circle className="success-circle" cx="26" cy="26" r="25" fill="none" />
                  <path className="success-tick" fill="none" d="M14 27l8 8 16-16" />
                </svg>
              </div>

              <h3 className="success-title">Message Sent Successfully! 🎉</h3>
              <p className="success-subtitle">
                Thanks for reaching out! We'll get back to you within <strong>24 hours</strong>.
              </p>

              {/* Details summary card */}
              <div className="success-details">
                <h4>Your Submitted Details</h4>
                <div className="detail-row">
                  <span className="detail-label">👤 Name</span>
                  <span className="detail-value">{submittedData.name}</span>
                </div>
                <div className="detail-row">
                  <span className="detail-label">📧 Email</span>
                  <span className="detail-value">{submittedData.email}</span>
                </div>
                <div className="detail-row detail-message-row">
                  <span className="detail-label">💬 Message</span>
                  <span className="detail-value detail-message">{submittedData.message}</span>
                </div>
              </div>

              <button className="btn primary" onClick={handleSendAnother} style={{ marginTop: '24px' }}>
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Project Details</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project, goals, and timeline..."
                  required
                />
              </div>

              <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap', marginTop: '20px' }}>
                <button
                  className="btn primary submit-btn"
                  type="submit"
                  disabled={loading}
                  style={{ flex: '1 1 200px', margin: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}
                >
                  {loading ? (
                    <>
                      <span className="btn-spinner" />
                      Sending…
                    </>
                  ) : (
                    '✉️ Send Message'
                  )}
                </button>
                <a
                  href="https://wa.me/919074487245"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn submit-btn"
                  style={{
                    flex: '1 1 200px',
                    margin: 0,
                    backgroundColor: '#25D366',
                    borderColor: '#25D366',
                    color: 'white',
                    textDecoration: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px'
                  }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
                  </svg>
                  WhatsApp Us
                </a>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
