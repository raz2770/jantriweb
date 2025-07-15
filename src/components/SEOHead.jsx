import React from 'react';
import { Helmet } from 'react-helmet';

const SEOHead = ({ 
  title = "Jantri MS Sheet - Sattaking Matka Results & Charts App",
  description = "Professional Jantri MS Sheet app for Sattaking and Matka results. Get live charts, historical data, kalyan results, and comprehensive matka analysis tools.",
  keywords = "jantri, ms sheet, sattaking, matka, kalyan matka, dpboss, satta king, matka results, jantri chart, satta matka, gambling app, lottery results, matka tips",
  canonicalUrl = "https://jantri-web.vercel.app/",
  ogImage = "/logo512.png"
}) => {
  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={canonicalUrl} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={ogImage} />
      
      {/* Additional SEO Tags */}
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow" />
      <meta name="bingbot" content="index, follow" />
      <meta name="revisit-after" content="1 days" />
      <meta name="rating" content="general" />
      <meta name="distribution" content="global" />
      
      {/* Schema.org structured data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "MobileApplication",
          "name": "Jantri MS Sheet",
          "description": description,
          "url": canonicalUrl,
          "applicationCategory": "UtilityApplication",
          "operatingSystem": "Android, iOS, Web",
          "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "INR"
          },
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.7",
            "ratingCount": "2547"
          },
          "author": {
            "@type": "Organization",
            "name": "Jantri MS Sheet",
            "url": canonicalUrl
          }
        })}
      </script>
    </Helmet>
  );
};

export default SEOHead;
