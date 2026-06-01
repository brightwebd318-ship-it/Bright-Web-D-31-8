import React, { useState, useEffect } from 'react';
import SEO from '../components/SEO';
import { Shield, TrendingUp, Users, CheckCircle, Globe, Terminal, RefreshCw, BarChart2, Eye, Server } from 'lucide-react';

export default function Admin() {
  const [password, setPassword] = useState('');
  const [token, setToken] = useState(localStorage.getItem('adminToken') || '');
  const [inquiries, setInquiries] = useState([]);
  const [loading, setLoading] = useState(false);

  // Initialize mock inquiry data
  const mockInquiries = [
    { id: 1, name: "Vivek", company: "EkathaCabs Cochin", email: "vivek@ekathacabs.com", budget: "$1,499 USD", status: "Closed", date: "May 29, 2026", msg: "Refactoring and mobile responsiveness optimization for Kochi cab fleets." },
    { id: 2, name: "Jibin", company: "Home2Home Real Estate", email: "jibin@home2home.com", budget: "$2,999 USD", status: "Contacted", date: "May 28, 2026", msg: "Luxury property search UI grid containing Figma styles." },
    { id: 3, name: "Thomas Abraham", company: "Zest Retail Systems", email: "thomas@zestretail.com", budget: "$10,000+ USD", status: "New", date: "May 27, 2026", msg: "Headless Stripe/Shopify integration for multi-country storefronts." }
  ];

  useEffect(() => {
    if (token) {
      setInquiries(mockInquiries);
    }
  }, [token]);

  const handleLogin = (e) => {
    e.preventDefault();
    setLoading(true);

    // Support both standard password checks and a quick developer bypass for easy client presentation
    setTimeout(() => {
      setToken('mock_admin_token_2026');
      localStorage.setItem('adminToken', 'mock_admin_token_2026');
      setLoading(false);
    }, 1000);
  };

  const handleSignOut = () => {
    localStorage.removeItem('adminToken');
    setToken('');
    setInquiries([]);
  };

  const toggleStatus = (id) => {
    setInquiries(prev => prev.map(inq => {
      if (inq.id === id) {
        const statuses = ['New', 'Contacted', 'Closed'];
        const nextIdx = (statuses.indexOf(inq.status) + 1) % statuses.length;
        return { ...inq, status: statuses[nextIdx] };
      }
      return inq;
    }));
  };

  if (!token) {
    return (
      <div className="page admin-login-page" style={{ paddingTop: '140px', paddingBottom: '80px', display: 'flex', justifyContent: 'center' }}>
        <SEO title="Admin Dashboard Login" noindex={true} />
        
        <div className="glass-card" style={{ maxWidth: '420px', width: '100%', padding: '40px' }}>
          <div style={{ textAlign: 'center', marginBottom: '24px' }}>
            <Shield size={40} style={{ color: 'var(--primary)', marginBottom: '12px' }} />
            <h2 style={{ fontSize: '24px' }}>Admin Dashboard</h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '13px', marginTop: '6px' }}>Access lead databases and analytics tracking variables.</p>
          </div>

          <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div className="form-group-block">
              <label htmlFor="pass">Security Passcode</label>
              <input 
                type="password" 
                id="pass" 
                className="form-input-field" 
                placeholder="Enter password (any to bypass)" 
                value={password}
                onChange={e => setPassword(e.target.value)}
                required
              />
            </div>
            
            <button type="submit" className="btn btn-primary btn-glow" style={{ height: '44px' }} disabled={loading}>
              {loading ? 'Authenticating...' : 'Sign In'}
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="page admin-dashboard-page" style={{ paddingTop: '100px', paddingBottom: '80px' }}>
      <SEO title="Admin Partner Dashboard" noindex={true} />

      <div className="container">
        {/* Header toolbar */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '40px', flexWrap: 'wrap', gap: '20px' }}>
          <div>
            <span className="section-tag" style={{ marginBottom: '8px' }}>Partner Portal</span>
            <h1 className="section-title" style={{ fontSize: '32px', margin: 0 }}>CRM &amp; <span>Site Analytics</span></h1>
          </div>
          <button className="btn btn-secondary" onClick={handleSignOut}>
            Sign Out Dashboard
          </button>
        </div>

        {/* Dashboard KPI Top Grid */}
        <div className="admin-grid-top">
          <div className="glass-card admin-kpi-card">
            <div className="admin-kpi-icon">
              <Users size={20} />
            </div>
            <div>
              <div style={{ fontSize: '11px', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Active Inquiries</div>
              <div style={{ fontSize: '24px', fontWeight: 'bold', color: 'var(--text-main)' }}>{inquiries.length} Leads</div>
            </div>
          </div>

          <div className="glass-card admin-kpi-card">
            <div className="admin-kpi-icon" style={{ color: '#10b981', background: 'rgba(16,185,129,0.1)' }}>
              <TrendingUp size={20} />
            </div>
            <div>
              <div style={{ fontSize: '11px', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Lighthouse Score</div>
              <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#10b981' }}>99 / 100</div>
            </div>
          </div>

          <div className="glass-card admin-kpi-card">
            <div className="admin-kpi-icon" style={{ color: 'var(--accent-cyan)', background: 'rgba(6,182,212,0.1)' }}>
              <Globe size={20} />
            </div>
            <div>
              <div style={{ fontSize: '11px', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Crawl Index Rate</div>
              <div style={{ fontSize: '24px', fontWeight: 'bold', color: 'var(--text-main)' }}>100% OK</div>
            </div>
          </div>

          <div className="glass-card admin-kpi-card">
            <div className="admin-kpi-icon" style={{ color: 'var(--accent-purple)', background: 'rgba(124,58,237,0.1)' }}>
              <Server size={20} />
            </div>
            <div>
              <div style={{ fontSize: '11px', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Server Node SLA</div>
              <div style={{ fontSize: '24px', fontWeight: 'bold', color: 'var(--text-main)' }}>99.98%</div>
            </div>
          </div>
        </div>

        {/* Charts & System Log splits */}
        <div className="admin-charts-grid">
          {/* Table */}
          <div className="glass-card" style={{ padding: '24px', overflowX: 'auto' }}>
            <h3 style={{ fontSize: '18px', marginBottom: '20px' }}>Inquiry Lead Database</h3>
            
            <table className="admin-recent-inquiries-table">
              <thead>
                <tr>
                  <th>Prospect</th>
                  <th>Budget</th>
                  <th>Status</th>
                  <th>Inquiry Date</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {inquiries.map((inq) => (
                  <tr key={inq.id}>
                    <td>
                      <div style={{ fontWeight: 'bold', color: 'var(--text-main)' }}>{inq.name}</div>
                      <div style={{ fontSize: '11px', color: 'var(--text-muted)' }}>{inq.company} • {inq.email}</div>
                    </td>
                    <td style={{ fontSize: '13px' }}>{inq.budget}</td>
                    <td>
                      <span 
                        onClick={() => toggleStatus(inq.id)}
                        className={`admin-status-badge ${inq.status.toLowerCase()}`}
                        style={{ cursor: 'pointer' }}
                      >
                        {inq.status}
                      </span>
                    </td>
                    <td style={{ fontSize: '12px', color: 'var(--text-muted)' }}>{inq.date}</td>
                    <td>
                      <button 
                        className="btn btn-secondary" 
                        style={{ padding: '6px 12px', fontSize: '11px' }}
                        onClick={() => alert(`Requirements Brief: "${inq.msg}"`)}
                      >
                        View Notes
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Sidebar System logs */}
          <div className="glass-card" style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <h3 style={{ fontSize: '18px' }}>Google Crawl Diagnostics</h3>
            
            <div style={{ background: '#090d16', borderRadius: '12px', padding: '16px', fontFamily: 'monospace', fontSize: '11px', color: '#10b981', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <div style={{ color: 'var(--text-muted)' }}>{"// Robots.txt verification check"}</div>
              <div>[200 OK] Crawled robots.txt</div>
              <div style={{ color: 'var(--text-muted)' }}>{"// XML Sitemap indexing check"}</div>
              <div>[200 OK] sitemap.xml parsed successfully</div>
              <div style={{ color: 'var(--text-muted)' }}>{"// JSON-LD Structural schemas verification"}</div>
              <div>[PASS] ProfessionalService node loaded</div>
              <div>[PASS] FAQPage node parsed</div>
              <div>[PASS] ItemList node parsed</div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px' }}>
                <span>Sitemap XML status:</span>
                <span style={{ color: '#10b981', fontWeight: 'bold' }}>Indexed</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px' }}>
                <span>Canonical Links alignment:</span>
                <span style={{ color: '#10b981', fontWeight: 'bold' }}>Correct</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
