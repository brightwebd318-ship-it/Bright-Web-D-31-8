import React, {useState} from 'react';

export default function Contact(){
  const [sent, setSent] = useState(false);
  const [formData, setFormData] = useState({name: '', email: '', message: ''});

  function handleChange(e){
    const {name, value} = e.target;
    setFormData(prev => ({...prev, [name]: value}));
  }

  function handleSubmit(e){
    e.preventDefault();
    // send to backend
    fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    }).then(r => {
      if(r.ok){
        setFormData({name:'', email:'', message:''});
        setSent(true);
        setTimeout(() => setSent(false), 3000);
      }else{
        r.json().then(j => alert(j.error || 'Failed to send'))
      }
    }).catch(() => alert('Network error'));
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
          {sent ? (
            <div className="success-message">
              <div className="success-icon">✓</div>
              <h3>Message Sent!</h3>
              <p>Thanks for reaching out. We'll get back to you soon.</p>
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

              <button className="btn primary submit-btn" type="submit">Send Message</button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
