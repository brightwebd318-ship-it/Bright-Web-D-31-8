import React, { useState } from 'react';
import SEO from '../components/SEO';
import { Link } from 'react-router-dom';
import { Search, Calendar, Clock, User, ArrowRight } from 'lucide-react';

export const blogArticles = [
  {
    title: "How to Build a Conversion-Focused Business Website Design",
    slug: "conversion-focused-business-website-design",
    category: "Web Design",
    date: "May 25, 2026",
    readTime: "6 min read",
    author: "Dibin Bright",
    excerpt: "Learn how the top 1% of web design companies construct visual layouts, call-to-actions, and page speeds to convert regular traffic into paying clients.",
    content: "When businesses invest in web design services, they often focus entirely on vanity aesthetics. While looks are important, the primary goal of your website should be client conversion. High-converting business website design is an engineering discipline. It combines visual path routing, color contrasts, page speeds, and trust elements. In this guide, we break down the exact strategies we use at BrightWebD to build conversion engines for our corporate partners.",
    image: "https://images.unsplash.com/photo-1547119944-4725b51a5e70?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Why Technical SEO is Critical for Startup Search Engine Rankings",
    slug: "technical-seo-startup-rankings",
    category: "SEO",
    date: "May 18, 2026",
    readTime: "8 min read",
    author: "Dibin Bright",
    excerpt: "Behind every top-ranking corporate site is a robust technical SEO architecture. Our senior SEO experts detail canonical tags, JSON-LD schemas, and robots.txt setups.",
    content: "Many startups hire a traditional marketing agency hoping to rank for high-value keywords. However, without structural technical SEO foundations, search engines won't index your platform properly. Our SEO experts have audited hundreds of websites. The most common issues are missing JSON-LD schema markups, slow mobile load speeds, duplicate content links, and broken breadcrumb configurations. Solving these technical bugs is the fastest route to Google Page 1.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Headless E-commerce Development: Scaling Online Storefronts",
    slug: "headless-ecommerce-development",
    category: "Development",
    date: "May 10, 2026",
    readTime: "7 min read",
    author: "Dibin Bright",
    excerpt: "Explore how modern e-commerce development frameworks like React and Next.js scale sales pipelines, optimize Stripe gateways, and load instantly.",
    content: "As a professional digital solutions company, we advise growing brands to move away from slow monolithic setups. Modern ecommerce development relies on headless architectures. By separating the client-side presentation layers (React/Next) from the catalog database engines (Shopify/Stripe), you achieve page loads under 1 second. This speed boost directly decreases cart abandonment rates and improves search crawl ratings.",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&q=80"
  }
];

export default function Blog() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Web Design', 'SEO', 'Development', 'Marketing'];

  const filteredArticles = blogArticles.filter(art => {
    const matchesSearch = art.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          art.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === 'All' || art.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="page blog-archive-page" style={{ paddingTop: '100px' }}>
      <SEO 
        title="Web Design & SEO Blog Insights"
        description="Read articles on business website design, search engine algorithms, React development, and conversion audits from our SEO experts."
        keywords="web design company blog, SEO experts advice, ecommerce development, website redesign services insights, digital solutions"
      />

      <div className="container">
        {/* Header Section */}
        <div className="section-header">
          <span className="section-tag">Agency Insights</span>
          <h1 className="section-title">The BrightWebD <span>Resource Hub</span></h1>
          <p className="section-desc">
            Tactical design, engineering, and organic search guides written by industry specialists to accelerate your company growth.
          </p>
        </div>

        {/* Filter Controls Bar */}
        <div style={{ display: 'flex', justifyContent: 'space-between', gap: '20px', flexWrap: 'wrap', marginBottom: '40px', alignItems: 'center' }}>
          {/* Category tabs */}
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            {categories.map(cat => (
              <button 
                key={cat}
                className={`portfolio-tab-btn ${activeCategory === cat ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search bar input */}
          <div style={{ position: 'relative', maxWidth: '320px', width: '100%' }}>
            <input 
              type="text" 
              className="form-input-field" 
              placeholder="Search articles..." 
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
              style={{ paddingLeft: '40px', borderRadius: '99px' }}
            />
            <Search size={16} style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
          </div>
        </div>

        {/* Articles Grid layout */}
        {filteredArticles.length > 0 ? (
          <div className="blog-archive-layout-grid" style={{ marginBottom: '80px' }}>
            {filteredArticles.map((art, idx) => (
              <article key={idx} className="glass-card blog-article-card">
                <div className="blog-featured-img-box">
                  <img src={art.image} alt={art.title} />
                  <span className="blog-category-tag">{art.category}</span>
                </div>
                <div className="blog-card-details">
                  <div className="blog-meta-time-row">
                    <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <Calendar size={12} /> {art.date}
                    </span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <Clock size={12} /> {art.readTime}
                    </span>
                  </div>
                  <Link to={`/blog/${art.slug}`} className="blog-title-link">
                    {art.title}
                  </Link>
                  <p className="blog-excerpt-txt">{art.excerpt}</p>
                  
                  <div className="blog-card-author-row">
                    <div className="blog-author-mini-img" style={{ background: 'var(--primary-glow)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '11px', fontWeight: 'bold' }}>
                      DB
                    </div>
                    <span className="blog-author-name">{art.author}</span>
                    <Link to={`/blog/${art.slug}`} style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: '4px', color: 'var(--primary)', fontSize: '13px', fontWeight: '600' }}>
                      Read <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div style={{ textAlign: 'center', padding: '60px 0', border: '1px dashed var(--border-color)', borderRadius: '16px', marginBottom: '80px' }}>
            <p style={{ color: 'var(--text-muted)' }}>No articles match your search or filter categories.</p>
          </div>
        )}
      </div>
    </div>
  );
}
