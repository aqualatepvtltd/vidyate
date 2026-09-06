import React, { useEffect } from 'react';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
}

const SEO: React.FC<SEOProps> = ({ title, description, keywords }) => {
  useEffect(() => {
    // 1. Update Document Title
    const baseTitle = "Vidyate | Pharmacy Academic Hub";
    const fullTitle = title ? `${title} | Vidyate` : baseTitle;
    document.title = fullTitle;

    // 2. Helper to Update Meta Tags
    const updateMeta = (name: string, content: string) => {
      let meta = document.querySelector(`meta[name="${name}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute('name', name);
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };

    // 3. Update Description
    const defaultDesc = "A high-performance academic hub for Pharmacy students featuring curated resources for B.Pharm and Pharm.D.";
    updateMeta('description', description || defaultDesc);

    // 4. Update Keywords
    const defaultKeywords = "Pharmacy, B.Pharm, Pharm.D, Study Materials, GPAT, NIPER, Pharmacy Notes, Medical Education";
    updateMeta('keywords', keywords || defaultKeywords);

  }, [title, description, keywords]);

  return null;
};

export default SEO;