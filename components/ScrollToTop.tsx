// ...existing code...
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  // Prevent browser restoring previous scroll position
  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      const prev = window.history.scrollRestoration;
      window.history.scrollRestoration = 'manual';
      return () => {
        window.history.scrollRestoration = prev;
      };
    }
  }, []);

  useEffect(() => {
    // If we're on the home page and there's a hash, try to scroll to it
    if (pathname === '/') {
      if (hash) {
        const id = hash.replace('#', '');
        setTimeout(() => {
          const el = document.getElementById(id);
          if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
            return;
          }
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }, 60);
        return;
      }
      // no hash on home => scroll top
      window.scrollTo({ top: 0, behavior: 'auto' });
      return;
    }

    // For any non-home route: remove any hash and always scroll to top
    if (hash) {
      // remove hash without adding a history entry
      window.history.replaceState(null, '', pathname);
    }
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [pathname, hash]);

  return null;
};

export default ScrollToTop;
// ...existing code...