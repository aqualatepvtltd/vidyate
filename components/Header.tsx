
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMaterialOpen, setIsMaterialOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const savedTheme = localStorage.getItem('vidyate-theme');
    // Default to light mode if no theme is saved or if explicitly set to light
    if (savedTheme === 'dark') {
      setIsDarkMode(true);
      document.documentElement.classList.remove('light-mode');
    } else {
      setIsDarkMode(false);
      document.documentElement.classList.add('light-mode');
      // Set default explicitly if first time
      if (!savedTheme) localStorage.setItem('vidyate-theme', 'light');
    }

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    if (newMode) {
      document.documentElement.classList.remove('light-mode');
      localStorage.setItem('vidyate-theme', 'dark');
    } else {
      document.documentElement.classList.add('light-mode');
      localStorage.setItem('vidyate-theme', 'light');
    }
    window.dispatchEvent(new Event('theme-change'));
  };

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  const navLinks = [
    { name: 'Home', path: '/', icon: 'home' },
    { name: 'Material', path: '/b-pharm', icon: 'auto_stories' },
    { name: 'Book Store', path: '/books', icon: 'shopping_cart' },
    { name: 'Get Certified', path: '/get-certified', icon: 'verified' },
    { name: 'Admission', path: '/admission-enquiry', icon: 'school' },
    { name: 'About', path: '/about', icon: 'info' },
    { name: 'Contact', path: '/contact', icon: 'alternate_email' },
    { name: 'Feedback', path: '/feedback', icon: 'rate_review' },
  ];

  const logoSrc = "https://vidyate-student-hub.vercel.app/vidyate-logo-main.webp";

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-[60] transition-all duration-500 ${isScrolled
          ? 'py-4 backdrop-blur-xl border-b'
          : 'py-7 bg-transparent border-b border-transparent'
          }`}
        style={{
          backgroundColor: isScrolled ? 'var(--glass-bg)' : 'transparent',
          borderColor: isScrolled ? 'var(--glass-border)' : 'transparent'
        }}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 group relative z-[70]">
            <img
              src={logoSrc}
              alt="Vidyate Logo"
              className="w-12 h-12 object-cover rounded-full group-hover:scale-110 transition-transform duration-300 shadow-lg"
            />
            <span className="text-xl font-black tracking-tighter" style={{ color: 'var(--text-main)' }}>
              VIDYATE<span className="text-[#405cff]">.</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-5">
            <div className="flex items-center gap-5">
              {navLinks.map((link) => (
                link.name === 'Material' ? (
                  <div
                    key={link.path}
                    className="relative"
                    onMouseEnter={() => setIsMaterialOpen(true)}
                    onMouseLeave={() => setIsMaterialOpen(false)}
                  >
                    <button
                      className={`text-[10px] font-black uppercase tracking-[0.2em] transition-all relative py-2 group flex items-center gap-2`}
                      style={{ color: location.pathname === link.path ? '#405cff' : 'var(--text-main)' }}
                      onClick={() => setIsMaterialOpen((s) => !s)}
                    >
                      <span className={location.pathname === link.path ? 'opacity-100' : 'opacity-60 group-hover:opacity-100'}>{link.name}</span>
                      <span className="px-0 material-symbols-rounded text-m text-[#405cff]">
                        arrow_drop_down
                      </span>
                    </button>

                    <div className={`absolute right-0 left-0 mt-0 w-36 rounded-xl shadow-lg glass border p-2 ${isMaterialOpen ? 'block' : 'hidden'}`} style={{ borderColor: 'var(--glass-border)', backgroundColor: 'var(--bg-color)' }}>
                      <Link to="/b-pharm" className="block px-3 py-2 rounded-md font-semibold hover:bg-white/5">B.Pharm</Link>
                      <Link to="/d-pharm" className="block px-3 py-2 rounded-md font-semibold hover:bg-white/5">D.Pharm</Link>
                    </div>
                  </div>
                ) : (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`text-[10px] font-black uppercase tracking-[0.2em] transition-all relative py-2 group`}
                    style={{ color: location.pathname === link.path ? '#405cff' : 'var(--text-main)' }}
                  >
                    <span className={location.pathname === link.path ? 'opacity-100' : 'opacity-60 group-hover:opacity-100'}>
                      {link.name}
                    </span>
                    {location.pathname === link.path && (
                      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#405cff] rounded-full"></span>
                    )}
                  </Link>
                )
              ))}
            </div>

            <div className="flex items-center gap-4 border-l pl-6" style={{ borderColor: 'var(--glass-border)' }}>
              <button
                onClick={toggleTheme}
                className="w-10 h-10 rounded-xl glass flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-90 group overflow-hidden"
              >
                <span className="material-symbols-rounded text-xl" style={{ color: isDarkMode ? '#8B5CF6' : '#EAB308' }}>
                  {isDarkMode ? 'dark_mode' : 'light_mode'}
                </span>
              </button>
            </div>
          </div>

          {/* Mobile Toggle Icons */}
          <div className="flex items-center gap-2 md:hidden relative z-[70]">
            <button
              onClick={toggleTheme}
              className="w-10 h-10 rounded-xl glass flex items-center justify-center transition-transform active:scale-90"
              aria-label="Toggle Theme"
            >
              <span className="material-symbols-rounded text-lg" style={{ color: isDarkMode ? '#8B5CF6' : '#EAB308' }}>
                {isDarkMode ? 'dark_mode' : 'light_mode'}
              </span>
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="w-10 h-10 rounded-xl glass flex items-center justify-center transition-all active:scale-90 relative overflow-hidden"
              style={{ color: 'var(--text-main)' }}
            >
              <span className={`material-symbols-rounded text-2xl transition-all duration-300 ${isMenuOpen ? 'rotate-90 scale-0' : 'rotate-0 scale-100'}`}>
                menu
              </span>
              <span className={`material-symbols-rounded text-2xl absolute transition-all duration-300 ${isMenuOpen ? 'rotate-0 scale-100' : '-rotate-90 scale-0'}`}>
                close
              </span>
            </button>
          </div>
        </div>
      </nav>

      {/* Modern Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-[55] md:hidden transition-all duration-500 ease-in-out ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}
      >
        {/* Backdrop Blur */}
        <div
          className="absolute inset-0 backdrop-blur-3xl bg-black/40 dark:bg-black/60"
          onClick={() => setIsMenuOpen(false)}
        ></div>

        {/* Menu Content Drawer */}
        <div
          className={`absolute top-0 right-0 h-full w-[80%] max-w-xs shadow-2xl glass border-l transition-transform duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'
            }`}
          style={{ borderColor: 'var(--glass-border)', backgroundColor: 'var(--bg-color)' }}
        >
          <div className="flex flex-col h-full pt-24 px-6 pb-10">
            <div className="space-y-1 mb-10">
              <span className="text-[9px] font-black uppercase tracking-[0.3em] opacity-30 ml-2 mb-4 block" style={{ color: 'var(--text-main)' }}>Navigation</span>
              {navLinks.map((link, idx) => (
                link.name === 'Material' ? (
                  <div
                    key={link.path}
                    className={`px-4 py-3.5 rounded-xl transition-all duration-300 ${location.pathname === link.path ? 'bg-[#405cff]/10 text-[#405cff]' : 'hover:bg-white/5 opacity-60 hover:opacity-100'}`}
                    style={{ transitionDelay: `${idx * 40}ms`, color: location.pathname === link.path ? '#405cff' : 'var(--text-main)' }}
                  >
                    <div className="flex items-center justify-between" onClick={() => setIsMaterialOpen((s) => !s)}>
                      <div className="flex items-center gap-4">
                        <span className={`material-symbols-rounded text-xl ${location.pathname === link.path ? 'text-[#405cff]' : 'opacity-40'}`}>{link.icon}</span>
                        <span className="text-sm font-black tracking-tight">{link.name}</span>
                      </div>
                      <span className="material-symbols-rounded">{isMaterialOpen ? 'expand_less' : 'expand_more'}</span>
                    </div>

                    {isMaterialOpen && (
                      <div className="mt-2 pl-10 space-y-1">
                        <Link to="/b-pharm" className="block px-3 py-2 rounded-lg font-semibold hover:bg-white/5">B.Pharm</Link>
                        <Link to="/d-pharm" className="block px-3 py-2 rounded-lg font-semibold hover:bg-white/5">D.Pharm</Link>
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`flex items-center gap-4 px-4 py-3.5 rounded-xl transition-all duration-300 group ${location.pathname === link.path
                      ? 'bg-[#405cff]/10 text-[#405cff]'
                      : 'hover:bg-white/5 opacity-60 hover:opacity-100'
                      }`}
                    style={{
                      transitionDelay: `${idx * 40}ms`,
                      color: location.pathname === link.path ? '#405cff' : 'var(--text-main)'
                    }}
                  >
                    <span className={`material-symbols-rounded text-xl ${location.pathname === link.path ? 'text-[#405cff]' : 'opacity-40'}`}>
                      {link.icon}
                    </span>
                    <span className="text-sm font-black tracking-tight">{link.name}</span>
                    {location.pathname === link.path && (
                      <div className="ml-auto w-1 h-4 bg-[#405cff] rounded-full"></div>
                    )}
                  </Link>
                )
              ))}
            </div>
            <div className="mt-auto">
              <p className="text-[8px] text-center font-black uppercase tracking-[0.3em] opacity-20" style={{ color: 'var(--text-main)' }}>
                Vidyate &copy; 2025
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
