import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description, keywords, image, url, schema }) => {
  const siteTitle = 'BrightWebD 31:8';
  const fullTitle = title ? `${title} | ${siteTitle}` : siteTitle;
  const siteDescription = description || 'Affordable web development and digital marketing for startups and small businesses in Kochi.';
  const siteKeywords = keywords || 'web development kochi, digital marketing agency kochi, website design kerala, affordable web developers, startup website design, small business web solutions';
  const siteImage = image || 'https://brightwebd.com/logo512.png';
  const siteUrl = url || 'https://brightwebd.com/';

  // Default Organization/LocalBusiness Schema
  const defaultSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "BrightWebD 31:8",
    "url": "https://brightwebd.com/",
    "logo": "https://brightwebd.com/logo512.png",
    "sameAs": [
      // Add social links here if available
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+919074487245",
      "contactType": "customer service"
    }
  };

  return (
    <Helmet>
      {/* Standard metadata tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={siteDescription} />
      <meta name="keywords" content={siteKeywords} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={siteUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={siteDescription} />
      <meta property="og:image" content={siteImage} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={siteUrl} />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={siteDescription} />
      <meta property="twitter:image" content={siteImage} />

      {/* Canonical Link */}
      <link rel="canonical" href={siteUrl} />

      {/* Structured Data (JSON-LD) */}
      <script type="application/ld+json">
        {JSON.stringify(schema || defaultSchema)}
      </script>
    </Helmet>
  );
};

export default SEO;
