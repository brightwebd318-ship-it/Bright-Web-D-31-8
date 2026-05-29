import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import SEO from '../components/SEO';
import { blogArticles } from './Blog';
import { ArrowLeft, Clock, Calendar, Share2, Bookmark } from 'lucide-react';

export default function BlogPost() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [scrollProgress, setScrollProgress] = useState(0);

  const article = blogArticles.find(art => art.slug === slug);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress((window.scrollY / totalHeight) * 100);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!article) {
    return (
      <div className="page" style={{ paddingTop: '140px', textAlign: 'center' }}>
        <SEO title="Article Not Found" noindex={true} />
        <h2>Article Not Found</h2>
        <p style={{ color: 'var(--text-muted)', marginBottom: '24px' }}>The blog post you are looking for does not exist or has been moved.</p>
        <Link to="/blog" className="btn btn-primary">Back to Blog Hub</Link>
      </div>
    );
  }

  // Get 2 related posts
  const relatedArticles = blogArticles.filter(art => art.slug !== slug).slice(0, 2);

  const shareArticle = (platform) => {
    const url = window.location.href;
    const text = `Read "${article.title}" by BrightWebD`;
    let shareUrl = '';
    
    if (platform === 'twitter') {
      shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`;
    } else if (platform === 'facebook') {
      shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
    } else if (platform === 'linkedin') {
      shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
    }
    
    if (shareUrl) {
      window.open(shareUrl, '_blank', 'width=600,height=400');
    }
  };

  return (
    <div className="blog-post-template-wrap" style={{ paddingTop: '100px', paddingBottom: '80px' }}>
      <SEO 
        title={article.title}
        description={article.excerpt}
        image={article.image}
        url={window.location.href}
        schema={{
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "headline": article.title,
          "description": article.excerpt,
          "image": article.image,
          "author": {
            "@type": "Person",
            "name": article.author
          },
          "datePublished": article.date,
          "publisher": {
            "@type": "Organization",
            "name": "BrightWebD"
          }
        }}
      />

      {/* Reading Progress Bar */}
      <div 
        style={{ 
          position: 'fixed', 
          top: '70px',
          left: 0, 
          height: '3px', 
          background: 'var(--primary)', 
          width: `${scrollProgress}%`, 
          zIndex: 9999, 
          transition: 'width 0.1s' 
        }} 
      />

      <div className="container">
        {/* Back Link */}
        <Link to="/blog" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: 'var(--text-muted)', marginBottom: '24px', fontSize: '14px' }}>
          <ArrowLeft size={16} /> Back to Blog Insights
        </Link>

        {/* Article Meta Header */}
        <div style={{ marginBottom: '32px' }}>
          <span className="section-tag" style={{ marginBottom: '16px' }}>{article.category}</span>
          <h1 className="blog-post-title-header">{article.title}</h1>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap', borderBottom: '1px solid var(--border-color)', paddingBottom: '24px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: 'var(--primary-glow)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px', fontWeight: 'bold' }}>
                DB
              </div>
              <div>
                <div style={{ fontSize: '14px', fontWeight: '700', color: 'var(--text-main)' }}>{article.author}</div>
                <div style={{ fontSize: '11px', color: 'var(--text-muted)' }}>Lead Solutions Architect</div>
              </div>
            </div>
            
            <div style={{ display: 'flex', gap: '16px', marginLeft: 'auto', fontSize: '13px', color: 'var(--text-muted)', alignItems: 'center' }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}><Calendar size={14} /> {article.date}</span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}><Clock size={14} /> {article.readTime}</span>
            </div>
          </div>
        </div>

        {/* Main Banner Image */}
        <div className="blog-post-hero-banner">
          <img src={article.image} alt={article.title} />
        </div>

        {/* Layout Grid (Content + Sidebar) */}
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '48px', alignItems: 'start' }} className="blog-post-content-grid">
          {/* Main content body */}
          <article className="blog-post-content-body">
            <p className="lead" style={{ fontSize: '20px', lineHeight: '1.7', color: 'var(--text-main)', marginBottom: '32px', borderLeft: '4px solid var(--primary)', paddingLeft: '16px' }}>
              {article.excerpt}
            </p>
            
            <p>{article.content}</p>
            
            <h2>Building Premium Digital Authority</h2>
            <p>
              In modern enterprise web ecosystems, page speed load metrics correlate directly to client conversion parameters. When a corporate client lands on your platform, they formulate a subconscious decision within 2 seconds. A professional web design company ensures that all scripts hydrate seamlessly without layout shifting.
            </p>

            <blockquote>
              <p style={{ fontStyle: 'italic', padding: '16px 24px', background: 'var(--bg-section-alt)', borderRadius: '8px', borderLeft: '3px solid var(--primary)', margin: '24px 0' }}>
                "Speed, semantics, and high-fidelity typography aren't styling preferences. They are the foundations of client trust."
              </p>
            </blockquote>

            <h2>Why Traditional WordPress Templates Fall Short</h2>
            <p>
              Many local businesses hire traditional agencies using pre-packaged page templates. While fast to deploy, these structures carry hundreds of bloated script dependencies, lowering Lighthouse Performance Scores below 40. Slow loading times damage your google SEO crawl indexing and drive potential project leads straight to competitors.
            </p>

            {/* Share toolbar */}
            <div className="blog-post-share-row">
              <span style={{ fontSize: '14px', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '8px' }}><Share2 size={16} /> Share Article:</span>
              <button onClick={() => shareArticle('twitter')} className="theme-toggle" style={{ width: '36px', height: '36px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }} aria-label="Share on Twitter">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
              </button>
              <button onClick={() => shareArticle('facebook')} className="theme-toggle" style={{ width: '36px', height: '36px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }} aria-label="Share on Facebook">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </button>
              <button onClick={() => shareArticle('linkedin')} className="theme-toggle" style={{ width: '36px', height: '36px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }} aria-label="Share on LinkedIn">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
              </button>
            </div>
          </article>

          {/* Sidebar */}
          <aside style={{ display: 'flex', flexDirection: 'column', gap: '32px' }} className="blog-post-sidebar">
            {/* Table of Contents */}
            <div className="glass-card" style={{ padding: '24px' }}>
              <h4 style={{ fontSize: '15px', fontWeight: 'bold', marginBottom: '16px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Table of Contents</h4>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '14px', color: 'var(--text-muted)' }}>
                <li><a href="#" style={{ color: 'var(--text-main)' }}>1. Executive Summary</a></li>
                <li><a href="#" style={{ transition: 'color 0.2s' }}>2. Digital Authority Foundations</a></li>
                <li><a href="#" style={{ transition: 'color 0.2s' }}>3. The Speed &amp; Conversion Correlation</a></li>
                <li><a href="#" style={{ transition: 'color 0.2s' }}>4. Auditing Your Current Stack</a></li>
              </ul>
            </div>

            {/* Related posts */}
            <div className="glass-card" style={{ padding: '24px' }}>
              <h4 style={{ fontSize: '15px', fontWeight: 'bold', marginBottom: '16px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Related Insights</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {relatedArticles.map((art, i) => (
                  <div key={i} style={{ borderBottom: i < relatedArticles.length - 1 ? '1px solid var(--border-color)' : 'none', paddingBottom: i < relatedArticles.length - 1 ? '16px' : '0' }}>
                    <span style={{ fontSize: '10px', color: 'var(--primary)', fontWeight: 'bold', textTransform: 'uppercase' }}>{art.category}</span>
                    <Link to={`/blog/${art.slug}`} style={{ display: 'block', fontSize: '14px', fontWeight: 'bold', marginTop: '4px', lineHeight: '1.4' }}>
                      {art.title}
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
