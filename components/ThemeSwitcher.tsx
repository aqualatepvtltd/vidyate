import React, { useState, useEffect, useRef } from 'react';

const ThemeSwitcher: React.FC = () => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'system');
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = window.document.documentElement;
    const isDark =
      theme === 'dark' ||
      (theme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches);

    root.classList.toggle('dark', isDark);
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = () => {
      if (theme === 'system') {
        const root = window.document.documentElement;
        root.classList.toggle('dark', mediaQuery.matches);
      }
    };
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [theme]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const getIcon = () => {
    switch (theme) {
      case 'light':
        return 'light_mode';
      case 'dark':
        return 'dark_mode';
      default:
        return 'desktop_windows';
    }
  };

  const selectTheme = (newTheme: string) => {
    setTheme(newTheme);
    setIsOpen(false);
  };

  return (
    <div className="relative " ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 rounded-full text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-slate-700 transition-colors flex justify-center items-center"
        aria-label="Toggle theme"
      >
        <span className="material-symbols-outlined">{getIcon()}</span>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-36 bg-white dark:bg-slate-800 rounded-lg shadow-lg border border-gray-200 dark:border-slate-700 py-1 z-10">
          <button
            onClick={() => selectTheme('light')}
            className={`w-full flex items-center px-4 py-2 text-sm text-left ${theme === 'light' ? 'text-orange-500' : 'text-gray-700 dark:text-gray-300'} hover:bg-gray-100 dark:hover:bg-slate-700`}
          >
            <span className="material-symbols-outlined mr-2">light_mode</span>
            Light
          </button>
          <button
            onClick={() => selectTheme('dark')}
            className={`w-full flex items-center px-4 py-2 text-sm text-left ${theme === 'dark' ? 'text-orange-500' : 'text-gray-700 dark:text-gray-300'} hover:bg-gray-100 dark:hover:bg-slate-700`}
          >
            <span className="material-symbols-outlined mr-2">dark_mode</span>
            Dark
          </button>
          <button
            onClick={() => selectTheme('system')}
            className={`w-full flex items-center px-4 py-2 text-sm text-left ${theme === 'system' ? 'text-orange-500' : 'text-gray-700 dark:text-gray-300'} hover:bg-gray-100 dark:hover:bg-slate-700`}
          >
            <span className="material-symbols-outlined mr-2">desktop_windows</span>
            System
          </button>
        </div>
      )}
    </div>
  );
};

export default ThemeSwitcher;