
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('vidyate-theme');
    // Default to false (Light) if savedTheme is not 'dark'
    return savedTheme === 'dark';
  });

  useEffect(() => {
    const handleThemeChange = () => {
      const savedTheme = localStorage.getItem('vidyate-theme');
      setIsDarkMode(savedTheme === 'dark');
    };
    window.addEventListener('theme-change', handleThemeChange);
    return () => window.removeEventListener('theme-change', handleThemeChange);
  }, []);

  const logoSrc = "https://vidyate-student-hub.vercel.app/vidyate-logo-main.webp";

  return (
    <footer 
      className="glass border-t py-12 mt-16 transition-colors duration-400"
      style={{ borderColor: 'var(--glass-border)' }}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
        <div className="col-span-1 md:col-span-2">
          <Link to="/" className="flex items-center gap-3 mb-5 group">
            <img 
              src={logoSrc} 
              alt="Vidyate Logo" 
              className="w-12 h-12 object-cover rounded-full group-hover:scale-105 transition-transform duration-300 shadow-md" 
            />
            <span className="text-2xl font-black tracking-tighter" style={{ color: 'var(--text-main)' }}>
              VIDYATE<span className="text-[#405cff]">.</span>
            </span>
          </Link>
          <p className="text-sm max-w-sm leading-relaxed opacity-60 font-medium" style={{ color: 'var(--text-main)' }}>
            Empowering the next generation of pharmacists with curated high-quality resources, verified academic materials, and specialized career guidance.
          </p>
          <div className="flex items-center gap-4 mt-4">

            <a href="https://www.linkedin.com/in/vidyatestudenthub/" target="_blank" rel="noopener noreferrer" aria-label="Vidyate on LinkedIn" title="LinkedIn" className="opacity-60 hover:opacity-100 transition-all inline-flex items-center" style={{ color: 'var(--text-main)' }}>
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4v12h-4zM8 8h3.8v1.7h.1c.5-.9 1.7-1.8 3.5-1.8 3.8 0 4.5 2.5 4.5 5.8V20h-4v-5.2c0-1.2 0-2.8-1.7-2.8-1.7 0-2 1.4-2 2.7V20H8z" />
              </svg>
              <span className="sr-only">LinkedIn</span>
            </a>

            <a href="https://www.instagram.com/vidyatestudenthub/" target="_blank" rel="noopener noreferrer" aria-label="Vidyate on Instagram" title="Instagram" className="opacity-60 hover:opacity-100 transition-all inline-flex items-center" style={{ color: 'var(--text-main)' }}>
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.5" y2="6.5" />
              </svg>
              <span className="sr-only">Instagram</span>
            </a>

            <a href="https://vidyate-student-hub.vercel.app/" target="_blank" rel="noopener noreferrer" aria-label="Vidyate website" title="Website" className="opacity-60 hover:opacity-100 transition-all inline-flex items-center" style={{ color: 'var(--text-main)' }}>
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <circle cx="12" cy="12" r="10" />
                <path d="M2 12h20" />
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
              </svg>
              <span className="sr-only">Website</span>
            </a>
          </div>
        </div>
        
        <div>
          <h4 className="font-black mb-5 uppercase tracking-[0.15em] text-xs opacity-40" style={{ color: 'var(--text-main)' }}>Navigation</h4>
          <ul className="space-y-3.5 text-sm font-bold">
            {/* <li>
              <Link to="/" className="opacity-60 hover:opacity-100 transition-all hover:translate-x-1 inline-block" style={{ color: 'var(--text-main)' }}>Home</Link>
            </li>
            <li>
              <Link to="/about" className="opacity-60 hover:opacity-100 transition-all hover:translate-x-1 inline-block" style={{ color: 'var(--text-main)' }}>About Us</Link>
            </li> */}
            <li>
              <Link to="/admission-enquiry" className="opacity-60 hover:opacity-100 transition-all hover:translate-x-1 inline-block" style={{ color: 'var(--text-main)' }}>Admission Enquiry</Link>
            </li>
            <li>
              <Link to="/contact" className="opacity-60 hover:opacity-100 transition-all hover:translate-x-1 inline-block" style={{ color: 'var(--text-main)' }}>Contact Us</Link>
            </li>
            <li>
              <Link to="/books" className="opacity-60 hover:opacity-100 transition-all hover:translate-x-1 inline-block" style={{ color: 'var(--text-main)' }}>Store</Link>
            </li>
            <li>
              <Link to="/feedback" className="opacity-60 hover:opacity-100 transition-all flex items-center gap-2">
                Feedback
                
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-black mb-5 uppercase tracking-[0.15em] text-xs opacity-40" style={{ color: 'var(--text-main)' }}>Academic Tracks</h4>
          <ul className="space-y-3.5 text-sm font-bold">
            <li>
              <Link to="/b-pharm" className="opacity-60 hover:opacity-100 transition-all hover:translate-x-1 inline-block" style={{ color: 'var(--text-main)' }}>B.Pharmacy</Link>
            </li>
            <li>
              <Link to="/d-pharm" className="opacity-60 hover:opacity-100 transition-all hover:translate-x-1 inline-block" style={{ color: 'var(--text-main)' }}>D.Pharmacy</Link>
            </li>
            <li>
              <span className="opacity-20 flex items-center gap-2 cursor-not-allowed" style={{ color: 'var(--text-main)' }}>
                Pharm.D
                <span className="text-[9px] bg-white/5 px-2 py-0.5 rounded border border-white/5">SOON</span>
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div 
        className="max-w-7xl mx-auto px-4 md:px-6 mt-12 pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-black uppercase tracking-[0.2em]"
        style={{ borderColor: 'var(--glass-border)', color: 'var(--text-main)' }}
      >
        <p className="opacity-30">&copy; 2025 Vidyate. Built for the Community.</p>
        <div className="flex gap-8 opacity-30">
          <Link to="/privacy" className="hover:opacity-100 transition-opacity">Privacy</Link>
          <Link to="/terms" className="hover:opacity-100 transition-opacity">Terms</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
