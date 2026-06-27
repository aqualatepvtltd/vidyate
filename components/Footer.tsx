
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const logoSrc = "https://vidyate-student-hub.vercel.app/vidyate-logo-main.webp";

  const socialLinks = [
    { name: 'LinkedIn', href: 'https://www.linkedin.com/company/vidyate-student-hub/', icon: <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4v12h-4zM8 8h3.8v1.7h.1c.5-.9 1.7-1.8 3.5-1.8 3.8 0 4.5 2.5 4.5 5.8V20h-4v-5.2c0-1.2 0-2.8-1.7-2.8-1.7 0-2 1.4-2 2.7V20H8z" /></svg> },
    { name: 'Instagram', href: 'https://www.instagram.com/vidyatestudenthub/', icon: <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.5" y2="6.5" /></svg> },
    { name: 'Website', href: 'https://vidyate-student-hub.vercel.app/', icon: <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M2 12h20" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg> }
  ];

  const navSections = [
    {
      title: 'Navigation',
      links: [
        { name: 'Home', path: '/' },
        { name: 'About Us', path: '/about' },
        { name: 'Get Certified', path: '/get-certified' },
        { name: 'Contact Us', path: '/contact' },
        { name: 'Blogs', path: 'https://vidyatestudenthub.blogspot.com/', external: true },
      ]
    },
    {
      title: 'Academic Tracks',
      links: [
        { name: 'B.Pharmacy', path: '/b-pharm' },
        { name: 'D.Pharmacy', path: '/d-pharm' },
      ]
    }
  ];

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
            Vidyate is a high-performance academic ecosystem designed to accelerate the learning curve for Pharmacy students globally. We provide verified, high-yield resources to help you master your curriculum efficiently.
          </p>
          <div className="flex items-center gap-5 mt-6">
            {socialLinks.map(link => (
              <a key={link.name} href={link.href} target="_blank" rel="noopener noreferrer" aria-label={`Vidyate on ${link.name}`} title={link.name} className="opacity-60 hover:opacity-100 transition-all" style={{ color: 'var(--text-main)' }}>
                {link.icon}
                <span className="sr-only">{link.name}</span>
              </a>
            ))}
          </div>
        </div>
        
        {navSections.map(section => (
          <div key={section.title}>
            <h4 className="font-black mb-5 uppercase tracking-[0.15em] text-xs opacity-40" style={{ color: 'var(--text-main)' }}>{section.title}</h4>
            <ul className="space-y-3.5 text-sm font-bold">
              {section.links.map(link => (
                <li key={link.name}>
                  {link.disabled ? (
                    <span className="opacity-20 flex items-center gap-2 cursor-not-allowed" style={{ color: 'var(--text-main)' }}>
                      {link.name}
                      <span className="text-[9px] bg-white/5 px-2 py-0.5 rounded border border-white/5">SOON</span>
                    </span>
                  ) : link.external ? (
                    <a href={link.path} target="_blank" rel="noopener noreferrer" className="opacity-60 hover:opacity-100 transition-all hover:translate-x-1 inline-block" style={{ color: 'var(--text-main)' }}>{link.name}</a>
                  ) : (
                    <Link to={link.path} className="opacity-60 hover:opacity-100 transition-all hover:translate-x-1 inline-block" style={{ color: 'var(--text-main)' }}>{link.name}</Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div 
        className="max-w-7xl mx-auto px-4 md:px-6 mt-12 pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-black uppercase tracking-[0.2em]"
        style={{ borderColor: 'var(--glass-border)', color: 'var(--text-main)' }}
      >
        <p className="opacity-30">&copy; {new Date().getFullYear()} Vidyate Student Hub</p>
        <div className="flex gap-8 opacity-30">
          <Link to="/privacy" className="hover:opacity-100 transition-opacity">Privacy</Link>
          <Link to="/terms" className="hover:opacity-100 transition-opacity">Terms</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
