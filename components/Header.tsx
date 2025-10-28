import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import ThemeSwitcher from './ThemeSwitcher';

const Header: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavClick = (sectionId: string) => {
    // If we are on the homepage, scroll smoothly.
    if (location.pathname === '/') {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    } else {
      // If we are on another page, navigate to the homepage with the hash.
      // The HomePage component will handle the scrolling.
      navigate(`/#${sectionId}`);
    }
  };

  return (
    <header className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm sticky top-0 z-50 shadow-lg shadow-slate-900/10 dark:shadow-slate-900/20 border-b border-gray-200 dark:border-slate-800">
      <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold flex items-center gap-2">
            <img src="./vidyate_hero_logo.png" alt="Vidyate Logo" className="h-11 rounded" />
        </Link>
        <div className="flex items-center space-x-2 md:space-x-6">
          <ThemeSwitcher />
        </div>
      </nav>
    </header>
  );
};

export default Header;
