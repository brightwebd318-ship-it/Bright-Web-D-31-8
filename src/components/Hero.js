import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';

/* ── Animated Counter ───────────────────────────────────────────── */
function useCounter(target, duration, start) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let t0 = null;
    const step = (ts) => {
      if (!t0) t0 = ts;
      const p = Math.min((ts - t0) / duration, 1);
      setCount(Math.floor(p * target));
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [start, target, duration]);
  return count;
}

function StatCard({ value, suffix, label, icon, start }) {
  const n = useCounter(value, 1800, start);
  return (
    <div className="hero-stat-card">
      <span className="hero-stat-icon">{icon}</span>
      <div className="hero-stat-body">
        <span className="hero-stat-num">{n}{suffix}</span>
        <span className="hero-stat-label">{label}</span>
      </div>
    </div>
  );
}

/* ── Dashboard Illustration (pure CSS + SVG, no external image) ── */
function DashIllus() {
  const bars = [55, 80, 45, 95, 70, 88, 60, 100, 75, 90, 65, 85];
  return (
    <div className="hero-illus-wrap" aria-hidden="true">
      <div className="illus-orb illus-orb1" />
      <div className="illus-orb illus-orb2" />

      {/* Main card */}
      <div className="illus-card illus-main">
        <div className="illus-card-header">
          <span className="illus-dot illus-dot-red" />
          <span className="illus-dot illus-dot-yellow" />
          <span className="illus-dot illus-dot-green" />
          <span className="illus-window-title">Analytics Dashboard</span>
        </div>

        {/* KPIs */}
        <div className="illus-kpi-row">
          {[
            { v: '↑ 214%', l: 'Organic Traffic', c: '#06b6d4' },
            { v: '↑ 89%',  l: 'Conversions',     c: '#a78bfa' },
            { v: '↑ 3.2x', l: 'ROI',             c: '#34d399' },
          ].map(k => (
            <div className="illus-kpi" key={k.l}>
              <span className="illus-kpi-value" style={{ color: k.c }}>{k.v}</span>
              <span className="illus-kpi-label">{k.l}</span>
            </div>
          ))}
        </div>

        {/* Bar chart */}
        <div className="illus-chart">
          {bars.map((h, i) => (
            <div key={i} className="illus-bar" style={{
              height: `${h}%`,
              animationDelay: `${i * 0.08}s`,
              background: i === 7
                ? 'linear-gradient(180deg,#06b6d4,#0891b2)'
                : i % 3 === 0
                ? 'linear-gradient(180deg,#a78bfa,#7c3aed)'
                : 'linear-gradient(180deg,rgba(6,182,212,.5),rgba(6,182,212,.15))',
            }} />
          ))}
        </div>

        {/* SVG line chart */}
        <svg className="illus-line-chart" viewBox="0 0 280 60" preserveAspectRatio="none">
          <defs>
            <linearGradient id="lg1" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#06b6d4" stopOpacity=".4" />
              <stop offset="100%" stopColor="#06b6d4" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path d="M0,55 C30,50 60,40 90,35 C120,30 150,20 180,15 C210,10 240,8 280,5"
            stroke="#06b6d4" strokeWidth="2" fill="none" className="illus-line" />
          <path d="M0,55 C30,50 60,40 90,35 C120,30 150,20 180,15 C210,10 240,8 280,5 L280,60 L0,60 Z"
            fill="url(#lg1)" />
          <circle cx="280" cy="5" r="4" fill="#06b6d4" className="illus-pulse-dot" />
        </svg>
      </div>

      {/* Floating mini cards */}
      {[
        { cls: 'illus-float1', icon: '🔍', title: 'SEO Score',    val: '98 / 100' },
        { cls: 'illus-float2', icon: '📱', title: 'Social Reach', val: '+12.4K' },
        { cls: 'illus-float3', icon: '⚡', title: 'Page Speed',   val: '99 ms' },
        { cls: 'illus-float4', icon: '📊', title: 'Ads ROAS',     val: '4.7x' },
      ].map(f => (
        <div className={`illus-card illus-float ${f.cls}`} key={f.cls}>
          <span className="illus-float-icon">{f.icon}</span>
          <div>
            <div className="illus-float-title">{f.title}</div>
            <div className="illus-float-val">{f.val}</div>
          </div>
        </div>
      ))}

      {/* Code snippet */}
      <div className="illus-card illus-code">
        <span className="illus-code-line">
          <span style={{ color: '#a78bfa' }}>const </span>
          <span style={{ color: '#67e8f9' }}>growth</span>
          {' = '}
          <span style={{ color: '#34d399' }}>🚀 Unlimited</span>;
        </span>
        <span className="illus-code-line">
          <span style={{ color: '#a78bfa' }}>return </span>
          <span style={{ color: '#fbbf24' }}>success</span>();
        </span>
      </div>
    </div>
  );
}

/* ── Main Hero Export ───────────────────────────────────────────── */
export default function Hero() {
  const ref = useRef(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setStarted(true); obs.disconnect(); } },
      { threshold: 0.15 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const services = ['Web Development', 'Digital Marketing', 'SEO Services', 'Website Design', 'Social Media', 'Google Ads'];

  return (
    <section
      className="hero-v2"
      ref={ref}
      aria-label="Hero — Web Development &amp; Digital Marketing"
    >
      {/* BG */}
      <div className="hero-v2-bg">
        <div className="hv2-orb hv2-orb1" />
        <div className="hv2-orb hv2-orb2" />
        <div className="hv2-orb hv2-orb3" />
        <div className="hv2-grid" />
      </div>

      {/* Particles */}
      <div className="hv2-particles" aria-hidden="true">
        {[...Array(18)].map((_, i) => (
          <span key={i} className="hv2-particle" style={{ '--pi': i }} />
        ))}
      </div>

      <div className="hero-v2-inner">
        {/* ── LEFT: Copy ── */}
        <div className="hero-v2-copy">
          <div className="hv2-badge">
            <span className="hv2-badge-dot" />
            Web Development &amp; Digital Marketing Agency
          </div>

          {/* H1 with SEO keywords */}
          <h1 className="hv2-headline">
            Build Powerful{' '}
            <span className="hv2-grad">Websites</span>{' '}
            That Grow{' '}
            <span className="hv2-gold">Your Business</span>
          </h1>

          <p className="hv2-sub">
            We create high-performance websites and digital marketing strategies —&nbsp;
            <strong>SEO Services</strong>, <strong>Website Design</strong>, and full-funnel
            campaigns — that drive <strong>real, measurable results</strong>.
          </p>

          {/* CTAs */}
          <div className="hv2-ctas">
            <Link to="/contact" className="hv2-btn hv2-btn-primary" id="hero-cta-primary">
              <span>Get Started</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2.5"
                strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
            <Link to="/portfolio" className="hv2-btn hv2-btn-ghost" id="hero-cta-secondary">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2.5"
                strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z" />
                <circle cx="12" cy="12" r="3" />
              </svg>
              <span>View Our Work</span>
            </Link>
          </div>

          {/* Trust stats */}
          <div className="hv2-stats">
            <StatCard value={100} suffix="+"   label="Projects Delivered" icon="🚀" start={started} />
            <StatCard value={50}  suffix="+"   label="Happy Clients"      icon="⭐" start={started} />
            <StatCard value={3}   suffix=" yrs" label="Experience"         icon="🏆" start={started} />
          </div>

          {/* SEO keyword pills */}
          <div className="hv2-pills" aria-label="Core services">
            {services.map(s => <span key={s} className="hv2-pill">{s}</span>)}
          </div>
        </div>

        {/* ── RIGHT: Illustration ── */}
        <div className="hero-v2-visual">
          <DashIllus />
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="hv2-scroll" aria-label="Scroll down">
        <span className="hv2-scroll-text">Scroll</span>
        <div className="hv2-scroll-mouse">
          <div className="hv2-scroll-wheel" />
        </div>
      </div>
    </section>
  );
}
