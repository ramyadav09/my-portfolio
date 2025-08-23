import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

const Header = ({ isDark, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-slate-900/95 via-purple-900/95 to-indigo-900/95 backdrop-blur-lg border-b border-purple-500/20 shadow-lg">
      <nav className="flex items-center justify-between px-4 sm:px-6 md:px-16 py-3 sm:py-4">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-cyan-400 to-purple-600 flex items-center justify-center shadow-lg">
            <span className="text-white font-bold text-sm sm:text-lg">R</span>
          </div>
          <h1 className="text-lg sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Portfolio
          </h1>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex gap-6 text-sm md:text-base font-medium items-center">
          <li className="relative group">
            <Link 
              to="/" 
              className={`transition-all duration-300 relative ${
                isActive('/') 
                  ? 'text-cyan-400' 
                  : 'text-gray-300 hover:text-cyan-400'
              }`}
            >
              Home
              <span className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 transition-all duration-300 ${
                isActive('/') ? 'w-full' : 'w-0 group-hover:w-full'
              }`}></span>
            </Link>
          </li>
          <li className="relative group">
            <Link 
              to="/about" 
              className={`transition-all duration-300 relative ${
                isActive('/about') 
                  ? 'text-cyan-400' 
                  : 'text-gray-300 hover:text-cyan-400'
              }`}
            >
              About
              <span className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 transition-all duration-300 ${
                isActive('/about') ? 'w-full' : 'w-0 group-hover:w-full'
              }`}></span>
            </Link>
          </li>
          <li className="relative group">
            <Link 
              to="/experience" 
              className={`transition-all duration-300 relative ${
                isActive('/experience') 
                  ? 'text-cyan-400' 
                  : 'text-gray-300 hover:text-cyan-400'
              }`}
            >
              Experience
              <span className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 transition-all duration-300 ${
                isActive('/experience') ? 'w-full' : 'w-0 group-hover:w-full'
              }`}></span>
            </Link>
          </li>
          <li className="relative group">
            <Link 
              to="/services" 
              className={`transition-all duration-300 relative ${
                isActive('/services') 
                  ? 'text-cyan-400' 
                  : 'text-gray-300 hover:text-cyan-400'
              }`}
            >
              Services
              <span className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 transition-all duration-300 ${
                isActive('/services') ? 'w-full' : 'w-0 group-hover:w-full'
              }`}></span>
            </Link>
          </li>
          <li className="relative group">
            <Link 
              to="/portfolio" 
              className={`transition-all duration-300 relative ${
                isActive('/portfolio') 
                  ? 'text-cyan-400' 
                  : 'text-gray-300 hover:text-cyan-400'
              }`}
            >
              Portfolio
              <span className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 transition-all duration-300 ${
                isActive('/portfolio') ? 'w-full' : 'w-0 group-hover:w-full'
              }`}></span>
            </Link>
          </li>
          <li className="relative group">
            <Link 
              to="/contact" 
              className={`transition-all duration-300 relative ${
                isActive('/contact') 
                  ? 'text-cyan-400' 
                  : 'text-gray-300 hover:text-cyan-400'
              }`}
            >
              Contact
              <span className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 transition-all duration-300 ${
                isActive('/contact') ? 'w-full' : 'w-0 group-hover:w-full'
              }`}></span>
            </Link>
          </li>
          <li>
            <button
              onClick={toggleTheme}
              className="w-16 h-8 rounded-full transition-all duration-300 shadow-lg relative"
              style={{
                background: isDark 
                  ? 'linear-gradient(to right, #7c3aed, #ec4899)' 
                  : 'linear-gradient(to right, #fbbf24, #f97316)'
              }}
            >
              <div
                className="absolute top-1 w-6 h-6 bg-white rounded-full shadow-md transition-all duration-300 flex items-center justify-center text-sm"
                style={{
                  left: isDark ? '4px' : '36px'
                }}
              >
                {isDark ? '🌙' : '☀️'}
              </div>
            </button>
          </li>
        </ul>

        {/* Mobile Controls */}
        <div className="lg:hidden flex items-center gap-3">
          <button
            onClick={toggleTheme}
            className="w-14 h-7 rounded-full transition-all duration-300 shadow-lg relative"
            style={{
              background: isDark 
                ? 'linear-gradient(to right, #7c3aed, #ec4899)' 
                : 'linear-gradient(to right, #fbbf24, #f97316)'
            }}
          >
            <div
              className="absolute top-0.5 w-5 h-5 bg-white rounded-full shadow-md transition-all duration-300 flex items-center justify-center text-xs"
              style={{
                left: isDark ? '3px' : '32px'
              }}
            >
              {isDark ? '🌙' : '☀️'}
            </div>
          </button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex flex-col justify-center items-center w-8 h-8 space-y-1"
          >
            <span className={`w-6 h-0.5 bg-cyan-400 transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-cyan-400 transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-cyan-400 transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`lg:hidden bg-slate-900/95 backdrop-blur-lg border-t border-purple-500/20 transition-all duration-300 ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
        <ul className="flex flex-col space-y-4 p-6">
          <li>
            <Link
              to="/"
              onClick={() => setIsOpen(false)}
              className={`block transition-colors duration-300 ${
                isActive('/') ? 'text-cyan-400' : 'text-gray-300 hover:text-cyan-400'
              }`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              onClick={() => setIsOpen(false)}
              className={`block transition-colors duration-300 ${
                isActive('/about') ? 'text-cyan-400' : 'text-gray-300 hover:text-cyan-400'
              }`}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/experience"
              onClick={() => setIsOpen(false)}
              className={`block transition-colors duration-300 ${
                isActive('/experience') ? 'text-cyan-400' : 'text-gray-300 hover:text-cyan-400'
              }`}
            >
              Experience
            </Link>
          </li>
          <li>
            <Link
              to="/services"
              onClick={() => setIsOpen(false)}
              className={`block transition-colors duration-300 ${
                isActive('/services') ? 'text-cyan-400' : 'text-gray-300 hover:text-cyan-400'
              }`}
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              to="/portfolio"
              onClick={() => setIsOpen(false)}
              className={`block transition-colors duration-300 ${
                isActive('/portfolio') ? 'text-cyan-400' : 'text-gray-300 hover:text-cyan-400'
              }`}
            >
              Portfolio
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className={`block transition-colors duration-300 ${
                isActive('/contact') ? 'text-cyan-400' : 'text-gray-300 hover:text-cyan-400'
              }`}
            >
              Contact
            </Link>
          </li>

        </ul>
      </div>
    </header>
  );
};

export default Header;