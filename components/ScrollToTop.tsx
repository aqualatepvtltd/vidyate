import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import React from 'react';

const ScrollToTop: React.FC = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // If there's a hash, try to scroll to the element with that id
    if (hash) {
      const id = hash.replace('#', '');
      // small delay to ensure the element is mounted
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        } else {
          // fallback: scroll to top if id not found
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }, 50);
    } else {
      // No hash: always scroll to top on path change
      window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
    }
  }, [pathname, hash]);

  return null;
};

export default ScrollToTop;