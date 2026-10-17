import { useEffect } from 'react';
import { siteConfig } from '../config/siteConfig';

/**
 * SEO Component for Dynamic Per-Route Metadata & Structured Data
 */
export default function SEO({
  title,
  description,
  keywords,
  canonicalPath = '',
  faqItems = null
}) {
  const fullTitle = title 
    ? `${title} | ${siteConfig.name}` 
    : siteConfig.seo.defaultTitle;
  
  const metaDescription = description || siteConfig.seo.defaultDescription;
  const metaKeywords = keywords || siteConfig.seo.defaultKeywords;
  const canonicalUrl = `${siteConfig.seo.siteUrl}${canonicalPath}`;

  useEffect(() => {
    // 1. Update Title
    document.title = fullTitle;

    // Helper to update or create meta tags
    const setMetaTag = (attribute, name, content) => {
      let element = document.querySelector(`meta[${attribute}="${name}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, name);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // 2. Standard Meta Tags
    setMetaTag('name', 'description', metaDescription);
    setMetaTag('name', 'keywords', metaKeywords);

    // 3. Open Graph Tags
    setMetaTag('property', 'og:title', fullTitle);
    setMetaTag('property', 'og:description', metaDescription);
    setMetaTag('property', 'og:url', canonicalUrl);

    // 4. Twitter Card Tags
    setMetaTag('name', 'twitter:title', fullTitle);
    setMetaTag('name', 'twitter:description', metaDescription);

    // 5. Canonical Link
    let linkCanonical = document.querySelector('link[rel="canonical"]');
    if (!linkCanonical) {
      linkCanonical = document.createElement('link');
      linkCanonical.setAttribute('rel', 'canonical');
      document.head.appendChild(linkCanonical);
    }
    linkCanonical.setAttribute('href', canonicalUrl);

    // 6. Optional FAQPage JSON-LD Schema
    let faqScript = document.getElementById('faq-schema-jsonld');
    if (faqItems && faqItems.length > 0) {
      const faqSchemaData = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        'mainEntity': faqItems.map((item) => ({
          '@type': 'Question',
          'name': item.question,
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': item.answer
          }
        }))
      };

      if (!faqScript) {
        faqScript = document.createElement('script');
        faqScript.id = 'faq-schema-jsonld';
        faqScript.type = 'application/ld+json';
        document.head.appendChild(faqScript);
      }
      faqScript.textContent = JSON.stringify(faqSchemaData);
    } else if (faqScript) {
      faqScript.remove();
    }

    return () => {
      // Cleanup custom FAQ script when navigating away
      const existingFaq = document.getElementById('faq-schema-jsonld');
      if (existingFaq) existingFaq.remove();
    };
  }, [fullTitle, metaDescription, metaKeywords, canonicalUrl, faqItems]);

  return null;
}
