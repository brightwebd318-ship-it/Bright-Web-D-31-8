import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation
} from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { 
  Sun, Moon, Menu, X, ChevronDown, Send, MessageSquare, 
  ArrowRight, Phone, Mail, Globe, Shield, Sparkles 
} from 'lucide-react';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import FAQ from './pages/FAQ';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import Testimonials from './pages/Testimonials';
import Refund from './pages/Refund';
import Admin from './pages/Admin';

// New Pages (We will create these next)
import WebDesignServices from './pages/WebDesignServices';
import SEOServices from './pages/SEOServices';
import DevelopmentServices from './pages/DevelopmentServices';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';

// Scroll to Top component on Navigation
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function AppContent() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'dark';
  });
  
  // Custom Floating widgets
  const [chatOpen, setChatOpen] = useState(false);
  const [calendlyOpen, setCalendlyOpen] = useState(false);
  const [showExitIntent, setShowExitIntent] = useState(false);
  const [subscribedEmail, setSubscribedEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  
  // Custom Cursor (Desktop only)
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [cursorHovering, setCursorHovering] = useState(false);
  const [desktopDevice, setDesktopDevice] = useState(true);

  // Chat conversation
  const [messages, setMessages] = useState([
    { text: "Hi there! 👋 Welcome to BrightWebD. How can we help grow your business today?", sender: 'ai' }
  ]);
  const [chatInput, setChatInput] = useState('');

  // Track scroll position for header visual styles
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Theme effect
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Cursor track & exit intent detection
  useEffect(() => {
    const isMobile = window.matchMedia("(max-width: 768px)").matches;
    setDesktopDevice(!isMobile);

    if (isMobile) return;

    const handleMouseMove = (e) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };

    const handleMouseLeaveWindow = (e) => {
      // Trigger exit intent when mouse exits top of window
      if (e.clientY < 20) {
        const alreadyDismissed = sessionStorage.getItem('exit_intent_dismissed');
        if (!alreadyDismissed) {
          setShowExitIntent(true);
        }
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeaveWindow);

    // Hover detection for buttons and links
    const handleHoverStart = () => setCursorHovering(true);
    const handleHoverEnd = () => setCursorHovering(false);

    const updateHoverListeners = () => {
      const elements = document.querySelectorAll('a, button, input, textarea, select, .portfolio-tab-btn');
      elements.forEach(el => {
        el.addEventListener('mouseenter', handleHoverStart);
        el.addEventListener('mouseleave', handleHoverEnd);
      });
    };

    // Run once and on route transitions
    updateHoverListeners();
    const timer = setTimeout(updateHoverListeners, 1000);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeaveWindow);
      clearTimeout(timer);
    };
  }, []);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  const handleSendMessage = (textToSend) => {
    const text = textToSend || chatInput;
    if (!text.trim()) return;

    setMessages(prev => [...prev, { text, sender: 'user' }]);
    setChatInput('');

    // Simulate AI response logic
    setTimeout(() => {
      let replyText = "Thank you for asking! A representative will connect with you shortly. You can also book a free 30-minute consultation slot by clicking the 'Book Consultation' button at the top.";
      const query = text.toLowerCase();
      
      if (query.includes('price') || query.includes('cost')) {
        replyText = "We offer tailored web development pricing: Starter packages at $1,499 (ideal for local businesses), Professional packages at $2,999 (recommended for growing startups), and custom Enterprise systems. Which one matches your business goals?";
      } else if (query.includes('seo') || query.includes('rank')) {
        replyText = "Our SEO systems are built to convert! We perform full structural indexing, FAQ/Schema setups, keyword target copywriting, and local SEO integrations. Would you like a free SEO audit on your current site?";
      } else if (query.includes('contact') || query.includes('hire') || query.includes('portfolio')) {
        replyText = "Awesome! We have delivered over 100+ websites. You can explore our Portfolio in the navigation or directly drop a project request using our Budget Inquiry Form in the Contact page!";
      }

      setMessages(prev => [...prev, { text: replyText, sender: 'ai' }]);
    }, 1000);
  };

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (!subscribedEmail.trim()) return;
    setIsSubscribed(true);
    setTimeout(() => {
      setSubscribedEmail('');
      setIsSubscribed(false);
      setShowExitIntent(false);
      sessionStorage.setItem('exit_intent_dismissed', 'true');
      alert('Subscription Successful! Your free website audit template has been sent.');
    }, 1200);
  };

  return (
    <div className="app-container">
      {/* Custom Cursor Follower */}
      {desktopDevice && (
        <div 
          className={`custom-interactive-cursor ${cursorHovering ? 'hovering-element' : ''}`}
          style={{ left: `${cursorPos.x}px`, top: `${cursorPos.y}px` }}
        />
      )}

      {/* --- PRESETS ANIMATED BACKGROUND --- */}
      <div className="animated-bg" aria-hidden="true">
        <div className="blob b1" style={{ opacity: theme === 'dark' ? 0.35 : 0.08 }} />
        <div className="blob b2" style={{ opacity: theme === 'dark' ? 0.18 : 0.05 }} />
        <div className="blob b3" style={{ opacity: theme === 'dark' ? 0.28 : 0.06 }} />
      </div>

      <header className={`nav-header ${scrolled ? 'scrolled' : ''}`}>
        <div className="nav-container">
          <Link to="/" className="nav-brand" onClick={() => setMenuOpen(false)}>
            <Sparkles className="logo-icon text-primary" style={{ color: 'var(--primary)' }} />
            <span>BrightWebD <span className="verse">31:8</span></span>
          </Link>

          <nav className={`nav-menu ${menuOpen ? 'open' : ''}`}>
            <Link to="/" className="nav-item" onClick={() => setMenuOpen(false)}>Home</Link>
            
            {/* Services Dropdown */}
            <div className="nav-item nav-dropdown">
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', cursor: 'pointer' }}>
                Services <ChevronDown size={14} />
              </span>
              <div className="nav-dropdown-menu">
                <Link to="/services/web-design" className="nav-dropdown-item" onClick={() => setMenuOpen(false)}>
                  <span className="nav-dropdown-title">Web Design</span>
                  <span className="nav-dropdown-desc">Premium conversion-ready designs</span>
                </Link>
                <Link to="/services/development" className="nav-dropdown-item" onClick={() => setMenuOpen(false)}>
                  <span className="nav-dropdown-title">Web Development</span>
                  <span className="nav-dropdown-desc">Sleek React, Next & automation systems</span>
                </Link>
                <Link to="/services/seo" className="nav-dropdown-item" onClick={() => setMenuOpen(false)}>
                  <span className="nav-dropdown-title">SEO & Rank Growth</span>
                  <span className="nav-dropdown-desc">Structured metadata & high Google rankings</span>
                </Link>
                <Link to="/services" className="nav-dropdown-item" style={{ borderTop: '1px solid var(--border-color)', marginTop: '4px' }} onClick={() => setMenuOpen(false)}>
                  <span className="nav-dropdown-title" style={{ color: 'var(--primary)' }}>View All Services →</span>
                </Link>
              </div>
            </div>

            <Link to="/portfolio" className="nav-item" onClick={() => setMenuOpen(false)}>Portfolio</Link>
            <Link to="/about" className="nav-item" onClick={() => setMenuOpen(false)}>About</Link>
            <Link to="/blog" className="nav-item" onClick={() => setMenuOpen(false)}>Blog</Link>
            <Link to="/contact" className="nav-item" onClick={() => setMenuOpen(false)}>Contact</Link>
            
            {/* Mobile menu only CTAs */}
            <button 
              className="btn btn-primary" 
              style={{ marginTop: '20px', width: '100%' }}
              onClick={() => { setMenuOpen(false); setCalendlyOpen(true); }}
            >
              Book Consultation
            </button>
          </nav>

          <div className="nav-actions">
            <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button className="btn btn-secondary" onClick={() => setCalendlyOpen(true)}>
              Book Consultation
            </button>
          </div>

          <button className={`hamburger ${menuOpen ? 'open' : ''}`} onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </header>

      <ScrollToTop />
      <main style={{ minHeight: '80vh', padding: 0, maxWidth: '100%' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/web-design" element={<WebDesignServices />} />
          <Route path="/services/seo" element={<SEOServices />} />
          <Route path="/services/development" element={<DevelopmentServices />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/refund" element={<Refund />} />
        </Routes>
      </main>

      {/* --- PREMIUM MEGA FOOTER --- */}
      <footer className="mega-footer-block">
        <div className="container">
          <div className="footer-top-columns-grid">
            <div className="footer-column-info">
              <Link to="/" className="nav-brand">
                <Sparkles className="text-primary" style={{ color: 'var(--primary)' }} />
                <span>BrightWebD</span>
              </Link>
              <p className="footer-info-desc">
                Building premium digital solutions, Webflow/Framer web designs, optimized SEO frameworks, and business automation platforms designed to convert visitors into active revenue.
              </p>
              <div className="footer-social-links-row">
                <a href="#" className="footer-social-icon-btn" aria-label="LinkedIn">LN</a>
                <a href="#" className="footer-social-icon-btn" aria-label="Twitter">TW</a>
                <a href="#" className="footer-social-icon-btn" aria-label="Instagram">IG</a>
                <a href="#" className="footer-social-icon-btn" aria-label="Github">GH</a>
              </div>
            </div>

            <div>
              <h4 className="footer-col-title">Services</h4>
              <ul className="footer-links-list">
                <li><Link to="/services/web-design">Website Design</Link></li>
                <li><Link to="/services/development">Web Development</Link></li>
                <li><Link to="/services/seo">SEO Optimization</Link></li>
                <li><Link to="/services">All Services</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="footer-col-title">Company</h4>
              <ul className="footer-links-list">
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/testimonials">Client Reviews</Link></li>
                <li><Link to="/contact">Work With Us</Link></li>
                <li><Link to="/admin">Partner Dashboard</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="footer-col-title">Resources</h4>
              <ul className="footer-links-list">
                <li><Link to="/blog">Blog Insights</Link></li>
                <li><Link to="/faq">Frequently Asked</Link></li>
                <li><Link to="/terms">Terms of Service</Link></li>
                <li><Link to="/privacy">Privacy Policy</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="footer-col-title">Newsletter</h4>
              <div className="footer-newsletter-wrap">
                <p className="footer-newsletter-desc">Subscribe to receive tech & growth templates.</p>
                <form onSubmit={handleNewsletterSubmit} className="footer-newsletter-form">
                  <input 
                    type="email" 
                    placeholder="Enter email address" 
                    value={subscribedEmail} 
                    onChange={e => setSubscribedEmail(e.target.value)} 
                    required 
                  />
                  <button className="btn btn-primary" style={{ padding: '8px 16px' }} type="submit">
                    <ArrowRight size={16} />
                  </button>
                </form>
              </div>
            </div>
          </div>

          <div className="footer-bottom-copyright-bar">
            <p className="footer-copyright-text">
              © {new Date().getFullYear()} BrightWebD. All rights reserved. Brand identity inspired by premium web aesthetics.
            </p>
            <div className="footer-legal-links-row">
              <Link to="/privacy">Privacy</Link>
              <Link to="/terms">Terms</Link>
              <Link to="/refund">Refund Policy</Link>
            </div>
          </div>
        </div>
      </footer>

      {/* --- FLOATING WIDGETS --- */}
      <div className="floating-widgets-wrapper">
        {/* WhatsApp Button */}
        <a 
          href="https://wa.me/919074487245" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="floating-action-circle floating-whatsapp-btn"
          aria-label="Chat on WhatsApp"
        >
          <Phone size={24} />
        </a>

        {/* Chatbot Trigger */}
        <button 
          onClick={() => setChatOpen(!chatOpen)} 
          className="floating-action-circle floating-chat-trigger-btn"
          aria-label="Open Chat Help"
        >
          {chatOpen ? <X size={24} /> : <MessageSquare size={24} />}
        </button>
      </div>

      {/* --- AI CHAT PANEL DRAWER --- */}
      {chatOpen && (
        <div className="glass-card chat-widget-drawer-card">
          <div className="chat-drawer-header">
            <h3>AI Chat Partner</h3>
            <button onClick={() => setChatOpen(false)} style={{ background: 'none', border: 'none', color: '#fff', cursor: 'pointer' }}>
              <X size={18} />
            </button>
          </div>

          <div className="chat-drawer-body">
            {messages.map((m, i) => (
              <div key={i} className={`chat-bubble-msg ${m.sender === 'ai' ? 'ai-response' : 'user-query'}`}>
                {m.text}
              </div>
            ))}
          </div>

          <div className="chat-quick-suggestions-row">
            <button className="quick-reply-pill-btn" onClick={() => handleSendMessage("What is your web design process?")}>Process?</button>
            <button className="quick-reply-pill-btn" onClick={() => handleSendMessage("How much does a website cost?")}>Pricing?</button>
            <button className="quick-reply-pill-btn" onClick={() => handleSendMessage("Do you support SEO optimizations?")}>SEO systems?</button>
          </div>

          <form 
            onSubmit={(e) => { e.preventDefault(); handleSendMessage(); }} 
            className="chat-drawer-input-row"
          >
            <input 
              type="text" 
              placeholder="Ask a question..." 
              value={chatInput} 
              onChange={e => setChatInput(e.target.value)} 
            />
            <button type="submit" className="btn btn-primary" style={{ padding: '8px' }}>
              <Send size={16} />
            </button>
          </form>
        </div>
      )}

      {/* --- CALENDLY SLOT BOOKING MODAL --- */}
      {calendlyOpen && (
        <div className="modal-overlay-bg" onClick={() => setCalendlyOpen(false)}>
          <div className="glass-card modal-content-card-box" onClick={e => e.stopPropagation()} style={{ maxWidth: '640px' }}>
            <button className="modal-close-x-btn" onClick={() => setCalendlyOpen(false)} aria-label="Close modal">
              <X size={24} />
            </button>
            <div style={{ textAlign: 'center', marginBottom: '20px' }}>
              <h2 style={{ fontSize: '24px', marginBottom: '8px' }}>Schedule Growth Meeting</h2>
              <p style={{ color: 'var(--text-muted)' }}>Choose a slot directly to map out your digital project metrics.</p>
            </div>
            
            {/* Embedded Mock Schedule Widget */}
            <div style={{ height: '360px', background: 'rgba(0,0,0,0.1)', border: '1px solid var(--border-color)', borderRadius: '8px', overflow: 'hidden', padding: '24px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <h4 style={{ color: 'var(--primary)' }}>📅 30-Min Discovery Session</h4>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px' }}>
                {['10:00 AM', '11:30 AM', '02:00 PM', '03:30 PM', '05:00 PM'].map((time) => (
                  <button 
                    key={time} 
                    className="btn btn-secondary" 
                    style={{ fontSize: '13px', padding: '10px' }}
                    onClick={() => {
                      alert(`Meeting scheduled for tomorrow at ${time}! We will email you the video link.`);
                      setCalendlyOpen(false);
                    }}
                  >
                    {time}
                  </button>
                ))}
              </div>
              <p style={{ fontSize: '12px', color: 'var(--text-muted)', marginTop: 'auto', textAlign: 'center' }}>
                Free of cost • Video call link generated instantly • Powered by BrightWebD automated CRM
              </p>
            </div>
          </div>
        </div>
      )}

      {/* --- EXIT INTENT LEAD POPUP MODAL --- */}
      {showExitIntent && (
        <div className="modal-overlay-bg" onClick={() => { setShowExitIntent(false); sessionStorage.setItem('exit_intent_dismissed', 'true'); }}>
          <div className="glass-card modal-content-card-box" onClick={e => e.stopPropagation()}>
            <button className="modal-close-x-btn" onClick={() => { setShowExitIntent(false); sessionStorage.setItem('exit_intent_dismissed', 'true'); }} aria-label="Close modal">
              <X size={24} />
            </button>
            <div className="exit-intent-header">
              <Sparkles size={32} style={{ color: 'var(--primary)', marginBottom: '16px' }} />
              <h2>Wait! Get a Free SEO &amp; UX Audit</h2>
              <p>Before you go, enter your email below to receive a custom structural audit template and pricing checklist worth $299 for free.</p>
            </div>

            <form onSubmit={handleNewsletterSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div className="form-group-block">
                <input 
                  type="email" 
                  className="form-input-field" 
                  placeholder="name@company.com" 
                  value={subscribedEmail} 
                  onChange={e => setSubscribedEmail(e.target.value)} 
                  required 
                />
              </div>
              <button className="btn btn-primary btn-glow" type="submit" style={{ width: '100%' }}>
                Get My Audit Template
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default function App() {
  return (
    <HelmetProvider>
      <Router>
        <AppContent />
      </Router>
    </HelmetProvider>
  );
}
