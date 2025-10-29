import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Footer: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavClick = (sectionId: string) => {
    if (location.pathname === '/') {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate(`/#${sectionId}`);
    }
  };

  return (
    <footer id="contact" className="bg-gray-50 dark:bg-slate-950 border-t border-gray-200 dark:border-slate-800">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Vidyate</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Your one-stop solution for academic excellence in pharmacy studies. Simplifying education for a brighter future.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Contact Details</h3>
            <ul className="text-gray-600 dark:text-gray-400 space-y-2">
              <li className="flex items-center">
                <span className="material-symbols-outlined mr-2 text-orange-400">mail</span>
                <span>contact@Vidyate.com</span>
              </li>
              <li className="flex items-center">
                <span className="material-symbols-outlined mr-2 text-orange-400">call</span>
                <span>+91 12345 67890</span>
              </li>
              <li className="flex items-center">
                <span className="material-symbols-outlined mr-2 text-orange-400">location_on</span>
                <span>123 Knowledge Park, Education City, India</span>
              </li>
            </ul>
          </div>

          <div className="flex flex-col items-start md:items-center">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Follow Us</h3>
            <div className="flex space-x-4 mb-6">
              <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-orange-400 transition-colors duration-300 text-2xl">
                <img src="https://img.icons8.com/ios-filled/50/000000/instagram-new--v1.png" alt="instagram" className="w-6 h-6 dark:invert"/>
              </a>
              <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-orange-400 transition-colors duration-300 text-2xl">
                <img src="https://img.icons8.com/ios-filled/50/000000/facebook-new.png" alt="facebook" className="w-6 h-6 dark:invert"/>
              </a>
              <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-orange-400 transition-colors duration-300 text-2xl">
                <img src="https://img.icons8.com/ios-filled/50/000000/twitterx--v1.png" alt="twitter" className="w-6 h-6 dark:invert"/>
              </a>
              <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-orange-400 transition-colors duration-300 text-2xl">
                <img src="https://img.icons8.com/ios-filled/50/000000/linkedin.png" alt="linkedin" className="w-6 h-6 dark:invert"/>
              </a>
            </div>

            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              <button onClick={() => handleNavClick('features')} className="text-gray-600 dark:text-gray-300 hover:text-orange-400 transition-colors duration-300">
                Features
              </button>
              <button onClick={() => handleNavClick('contact')} className="text-gray-600 dark:text-gray-300 hover:text-orange-400 transition-colors duration-300">
                Contact
              </button>
              <button onClick={() => handleNavClick('feedback')} className="text-gray-600 dark:text-gray-300 hover:text-orange-400 transition-colors duration-300">
                Career
              </button>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-200 dark:border-slate-800 pt-6 text-center text-gray-500 dark:text-gray-500">
          <p>&copy; {new Date().getFullYear()} Vidyate. All rights reserved. Designed for students, by educators.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
