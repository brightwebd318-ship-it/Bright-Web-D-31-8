import React, { useState } from 'react';
import SEO from '../components/SEO';
import { Mail, MessageSquare, Phone, Upload, CheckCircle, Clock } from 'lucide-react';

export default function Contact({ isSection = false, openCalendly }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    budget: '3000',
    company: ''
  });
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [submittedData, setSubmittedData] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    if (e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setSubmittedData({ 
        ...formData, 
        fileName: file ? file.name : 'No file uploaded' 
      });
      setSent(true);
      setLoading(false);
      
      const text = `Hi BrightWebD! I would like to submit a project request:\n\n*Name:* ${formData.name}\n*Company:* ${formData.company || 'N/A'}\n*Email:* ${formData.email}\n*Budget Threshold:* ${formatBudget(formData.budget)}\n*Brief:* ${formData.message}\n*Design Asset:* ${file ? file.name : 'No file uploaded'}`;
      const whatsappUrl = `https://wa.me/919074487245?text=${encodeURIComponent(text)}`;
      window.open(whatsappUrl, '_blank');
      
      // Push event to console for mock CRM integration
      console.log('CRM INTEGRATION LOG - NEW INQUIRY RECEIVED:', {
        ...formData,
        uploadedFile: file ? { name: file.name, size: file.size } : null,
        timestamp: new Date().toISOString()
      });
    }, 1500);
  };

  const resetForm = () => {
    setFormData({ name: '', email: '', message: '', budget: '3000', company: '' });
    setFile(null);
    setSent(false);
  };

  const formatBudget = (val) => {
    if (parseInt(val) >= 10000) return '$10,000+ (Enterprise System)';
    return `$${parseInt(val).toLocaleString()} USD`;
  };

  return (
    <div id={isSection ? "contact" : undefined} className={isSection ? "page contact-section reveal" : "page contact-page"} style={{ paddingTop: isSection ? '0px' : '100px', paddingBottom: '80px' }}>
      {!isSection && (
        <SEO 
          title="Contact Us & Request Custom Website Consultation"
          description="Submit a project request to BrightWebD web design company. Set your budget slider, upload design sheets, or book a consultation call."
          keywords="contact BrightWebD, hire web developers Kochi, budget website design inquiry, digital marketing consultation"
        />
      )}

      <div className="container">
        {/* Header */}
        {!isSection && (
          <div className="section-header">
            <span className="section-tag">Let's Connect</span>
            <h1 className="section-title">Schedule a <span>Strategy Session</span></h1>
            <p className="section-desc">Submit your project targets below. Our engineering leads respond within 24 business hours.</p>
          </div>
        )}

        <div className="contact-grid-wrapper">
          {/* Sidebar */}
          <div className="contact-card-sidebar">
            <div className="glass-card" style={{ padding: '32px', display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <h3 style={{ fontSize: '20px', fontWeight: 'bold', color: 'var(--text-main)' }}>Direct Pathways</h3>
              
              <div className="contact-info-block">
                <div className="info-icon-wrapper">
                  <Mail size={20} />
                </div>
                <div className="info-block-content">
                  <h4>Email Communication</h4>
                  <p><a href="mailto:brightwebd318@gmail.com" style={{ color: 'var(--primary)' }}>brightwebd318@gmail.com</a></p>
                </div>
              </div>

              <div className="contact-info-block">
                <div className="info-icon-wrapper">
                  <Phone size={20} />
                </div>
                <div className="info-block-content">
                  <h4>WhatsApp Quick Connect</h4>
                  <p style={{ marginBottom: '8px' }}>
                    <span style={{ fontSize: '11px', color: 'var(--text-muted)', display: 'block' }}>India Support:</span>
                    <a href="https://wa.me/919074487245" target="_blank" rel="noopener noreferrer" style={{ color: '#25D366', fontWeight: 'bold' }}>+91 90744 87245</a>
                  </p>
                  <p>
                    <span style={{ fontSize: '11px', color: 'var(--text-muted)', display: 'block' }}>Germany Support:</span>
                    <a href="https://wa.me/4917632789783" target="_blank" rel="noopener noreferrer" style={{ color: '#25D366', fontWeight: 'bold' }}>+49 176 32789783</a>
                  </p>
                </div>
              </div>

              <div className="contact-info-block">
                <div className="info-icon-wrapper">
                  <Clock size={20} />
                </div>
                <div className="info-block-content">
                  <h4>Operation Hours</h4>
                  <p>Mon - Fri, 09:00 AM - 06:00 PM IST</p>
                </div>
              </div>
            </div>

            <div className="glass-card" style={{ padding: '24px', background: 'var(--bg-section-alt)', textAlign: 'center' }}>
              <MessageSquare size={32} style={{ color: 'var(--primary)', marginBottom: '12px', margin: '0 auto 12px' }} />
              <h4 style={{ fontSize: '15px', fontWeight: 'bold', marginBottom: '8px' }}>Free 30-Min Consultation</h4>
              <p style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '16px' }}>Prefer booking an instant video slot with our software architects?</p>
              <button onClick={openCalendly} className="btn btn-secondary" style={{ width: '100%', padding: '10px' }}>
                Open Scheduling Calendar
              </button>
            </div>
          </div>

          {/* Form Area */}
          <div className="contact-form-container">
            {sent && submittedData ? (
              <div className="glass-card success-checkmark-card">
                <div className="checkmark-circle-icon">
                  <CheckCircle size={32} />
                </div>
                <h3 style={{ fontSize: '22px', color: 'var(--text-main)', marginBottom: '12px' }}>Inquiry Sent Successfully!</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '14px', marginBottom: '24px', lineHeight: '1.6' }}>
                  Thank you for submitting your project parameters. A senior developer will evaluate your design assets and reach out shortly.
                </p>
                
                <div style={{ background: 'rgba(0,0,0,0.1)', border: '1px solid var(--border-color)', borderRadius: '12px', padding: '20px', textAlign: 'left', marginBottom: '24px', fontSize: '13px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <h4 style={{ color: 'var(--primary)', marginBottom: '8px' }}>Your Submission Log:</h4>
                  <div><strong>Name:</strong> {submittedData.name}</div>
                  <div><strong>Email:</strong> {submittedData.email}</div>
                  <div><strong>Project Budget:</strong> {formatBudget(submittedData.budget)}</div>
                  <div><strong>Asset File:</strong> {submittedData.fileName}</div>
                </div>

                <button className="btn btn-secondary" onClick={resetForm}>
                  Send Another Request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="glass-card" style={{ padding: '32px' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                  <div className="form-group-block">
                    <label htmlFor="name">Full Name *</label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name" 
                      className="form-input-field" 
                      placeholder="Jane Doe" 
                      value={formData.name} 
                      onChange={handleInputChange} 
                      required 
                    />
                  </div>
                  <div className="form-group-block">
                    <label htmlFor="company">Company Name</label>
                    <input 
                      type="text" 
                      id="company" 
                      name="company" 
                      className="form-input-field" 
                      placeholder="Acme Corp" 
                      value={formData.company} 
                      onChange={handleInputChange} 
                    />
                  </div>
                </div>

                <div className="form-group-block">
                  <label htmlFor="email">Work Email *</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    className="form-input-field" 
                    placeholder="jane@company.com" 
                    value={formData.email} 
                    onChange={handleInputChange} 
                    required 
                  />
                </div>

                {/* Project Budget Slider */}
                <div className="form-group-block budget-selector-wrapper">
                  <label>Project Budget Threshold *</label>
                  <div className="budget-val-indicator">
                    {formatBudget(formData.budget)}
                  </div>
                  <input 
                    type="range" 
                    name="budget" 
                    min="1000" 
                    max="10000" 
                    step="500" 
                    className="range-slider-input" 
                    value={formData.budget} 
                    onChange={handleInputChange} 
                  />
                </div>

                <div className="form-group-block">
                  <label htmlFor="message">Project Requirements Brief *</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    rows="4" 
                    className="form-textarea-field" 
                    placeholder="Briefly describe your pages targets, custom integrations and timeline goals..." 
                    value={formData.message} 
                    onChange={handleInputChange} 
                    required 
                  />
                </div>

                {/* File Upload Box */}
                <div className="form-group-block">
                  <label>Design Sheets or Requirements Briefs (PDF/TXT/Images)</label>
                  <div className="file-upload-input-wrap" onClick={() => document.getElementById('file-upload').click()}>
                    <Upload size={24} style={{ margin: '0 auto 8px', color: 'var(--text-muted)' }} />
                    <p style={{ fontWeight: '500' }}>
                      {file ? `Selected file: ${file.name}` : 'Click to select or drag and drop files'}
                    </p>
                    <span style={{ fontSize: '11px', color: 'var(--text-muted)' }}>Max file size: 10MB</span>
                    <input 
                      type="file" 
                      id="file-upload" 
                      style={{ display: 'none' }} 
                      onChange={handleFileChange} 
                      accept=".pdf,.txt,.doc,.docx,.png,.jpg,.jpeg" 
                    />
                  </div>
                </div>

                <button 
                  type="submit" 
                  className="btn btn-primary btn-glow" 
                  style={{ width: '100%', marginTop: '24px', height: '48px' }}
                  disabled={loading}
                >
                  {loading ? 'Sending Parameters...' : '✉ Submit Project Request'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
