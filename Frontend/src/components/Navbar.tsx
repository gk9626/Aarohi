import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showLanguageMenu, setShowLanguageMenu] = useState(false);
  const location = useLocation();
  const { language, setLanguage, t } = useLanguage();

  const navItems = [
    { path: '/', key: 'nav.home' },
    { path: '/health', key: 'nav.health' },
    { path: '/education', key: 'nav.education' },
    { path: '/help', key: 'nav.help' },
    { path: '/legal', key: 'nav.legal' },
    { path: '/stories', key: 'nav.stories' },
  ];

  const languages = [
    { code: 'en', name: 'English' },
    { code: 'hi', name: 'हिंदी' },
    { code: 'mr', name: 'मराठी' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 glass-effect border-b border-purple-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">आ</span>
            </div>
            <span className="text-xl font-bold gradient-text">Aarohi</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`font-medium transition-colors duration-200 ${
                  location.pathname === item.path
                    ? 'text-purple-600 border-b-2 border-purple-600'
                    : 'text-gray-700 hover:text-purple-600'
                }`}
              >
                {t(item.key)}
              </Link>
            ))}
            
            {/* Language Switcher */}
            <div className="relative">
              <button
                onClick={() => setShowLanguageMenu(!showLanguageMenu)}
                className="flex items-center space-x-1 px-3 py-2 rounded-lg bg-purple-100 text-purple-700 hover:bg-purple-200 transition-colors"
              >
                <span className="text-sm font-medium">
                  {languages.find(lang => lang.code === language)?.name}
                </span>
                <ChevronDown className="w-4 h-4" />
              </button>
              
              {showLanguageMenu && (
                <div className="absolute right-0 mt-2 w-32 bg-white rounded-lg shadow-lg border border-purple-100">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        setLanguage(lang.code as 'en' | 'hi' | 'mr');
                        setShowLanguageMenu(false);
                      }}
                      className={`w-full text-left px-4 py-2 text-sm hover:bg-purple-50 first:rounded-t-lg last:rounded-b-lg ${
                        language === lang.code ? 'text-purple-600 bg-purple-50' : 'text-gray-700'
                      }`}
                    >
                      {lang.name}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg text-gray-700 hover:text-purple-600 hover:bg-purple-50"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-purple-100">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`font-medium transition-colors duration-200 ${
                    location.pathname === item.path
                      ? 'text-purple-600'
                      : 'text-gray-700 hover:text-purple-600'
                  }`}
                >
                  {t(item.key)}
                </Link>
              ))}
              
              {/* Mobile Language Switcher */}
              <div className="pt-2 border-t border-purple-100">
                <p className="text-sm font-medium text-gray-500 mb-2">Language</p>
                <div className="flex space-x-2">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        setLanguage(lang.code as 'en' | 'hi' | 'mr');
                        setIsOpen(false);
                      }}
                      className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                        language === lang.code
                          ? 'bg-purple-600 text-white'
                          : 'bg-purple-100 text-purple-700 hover:bg-purple-200'
                      }`}
                    >
                      {lang.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;