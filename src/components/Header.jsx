import { Link } from "react-router-dom";
import { useState } from "react";

const Header = ({ isDark, toggleTheme }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header 
      className="fixed top-0 left-0 w-full z-50 backdrop-blur-lg border-b shadow-lg transition-all duration-300"
      style={{
        background: isDark ? 'rgba(15, 15, 35, 0.95)' : 'rgba(255, 255, 255, 0.95)',
        borderColor: isDark ? 'rgba(168, 85, 247, 0.2)' : 'rgba(59, 130, 246, 0.2)'
      }}
    >
      <nav className="flex items-center justify-between px-4 sm:px-6 md:px-16 py-4">
        <div className="flex items-center space-x-2">
          <div 
            className="w-10 h-10 rounded-full flex items-center justify-center shadow-lg"
            style={{background: 'linear-gradient(135deg, #06b6d4, #7c3aed)'}}
          >
            <span className="text-white font-bold text-lg">R</span>
          </div>
          <h1 
            className="text-2xl md:text-3xl font-bold"
            style={{background: 'linear-gradient(135deg, #06b6d4, #7c3aed, #ec4899)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}
          >
            Portfolio
          </h1>
        </div>
        
        <ul className="hidden md:flex gap-6 text-base md:text-lg font-medium items-center">
          {[{to: "/", label: "Home"}, {to: "/about", label: "About"}, {to: "/services", label: "Services"}, {to: "/experience", label: "Experience"}, {to: "/portfolio", label: "Portfolio"}, {to: "/contact", label: "Contact"}].map((item) => (
            <li key={item.to} className="relative group">
              <Link 
                to={item.to} 
                className="transition-all duration-300 relative hover:scale-105"
                style={{color: isDark ? '#d1d5db' : '#374151'}}
              >
                {item.label}
                <span 
                  className="absolute -bottom-1 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300"
                  style={{background: 'linear-gradient(90deg, #06b6d4, #7c3aed)'}}
                ></span>
              </Link>
            </li>
          ))}
          <li>
            <button
              onClick={toggleTheme}
              className="relative w-14 h-7 rounded-full transition-all duration-300 focus:outline-none ml-4"
              style={{background: isDark ? 'linear-gradient(90deg, #7c3aed, #ec4899)' : 'linear-gradient(90deg, #fbbf24, #f97316)'}}
            >
              <div
                className="absolute top-1 w-5 h-5 bg-white rounded-full shadow-md transition-all duration-300 flex items-center justify-center"
                style={{left: isDark ? '32px' : '4px'}}
              >
                <span className="text-xs">{isDark ? '🌙' : '☀️'}</span>
              </div>
            </button>
          </li>
        </ul>

        <div className="md:hidden flex items-center gap-3">
          <button
            onClick={toggleTheme}
            className="relative w-16 h-8 rounded-full transition-all duration-300 focus:outline-none shadow-lg hover:scale-105 border-2"
            style={{
              background: isDark ? 'linear-gradient(135deg, #7c3aed, #ec4899)' : 'linear-gradient(135deg, #fbbf24, #f97316)',
              borderColor: isDark ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.1)'
            }}
          >
            <div
              className="absolute w-6 h-6 bg-white rounded-full shadow-lg transition-all duration-300 flex items-center justify-center"
              style={{
                left: isDark ? '36px' : '2px',
                top: '50%',
                transform: 'translateY(-50%)'
              }}
            >
              <span className="text-sm">{isDark ? '🌙' : '☀️'}</span>
            </div>
          </button>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="flex flex-col justify-center items-center w-8 h-8 space-y-1"
          >
            <span className={`w-6 h-0.5 transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`} style={{background: isDark ? '#d1d5db' : '#374151'}}></span>
            <span className={`w-6 h-0.5 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`} style={{background: isDark ? '#d1d5db' : '#374151'}}></span>
            <span className={`w-6 h-0.5 transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} style={{background: isDark ? '#d1d5db' : '#374151'}}></span>
          </button>
        </div>
      </nav>

      {isMenuOpen && (
        <div 
          className="md:hidden backdrop-blur-lg border-b"
          style={{
            background: isDark ? 'rgba(15, 15, 35, 0.98)' : 'rgba(255, 255, 255, 0.98)',
            borderColor: isDark ? 'rgba(168, 85, 247, 0.2)' : 'rgba(59, 130, 246, 0.2)'
          }}
        >
          <ul className="flex flex-col py-4">
            {[{to: "/", label: "Home"}, {to: "/about", label: "About"}, {to: "/services", label: "Services"}, {to: "/experience", label: "Experience"}, {to: "/portfolio", label: "Portfolio"}, {to: "/contact", label: "Contact"}].map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  onClick={() => setIsMenuOpen(false)}
                  className="block px-6 py-3 transition-all duration-300"
                  style={{color: isDark ? '#d1d5db' : '#374151'}}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="flex justify-center py-3">
              <button
                onClick={toggleTheme}
                className="relative w-14 h-7 rounded-full transition-all duration-300 focus:outline-none"
                style={{background: isDark ? 'linear-gradient(90deg, #7c3aed, #ec4899)' : 'linear-gradient(90deg, #fbbf24, #f97316)'}}
              >
                <div
                  className="absolute top-1 w-5 h-5 bg-white rounded-full shadow-md transition-all duration-300 flex items-center justify-center"
                  style={{left: isDark ? '32px' : '4px'}}
                >
                  <span className="text-xs">{isDark ? '🌙' : '☀️'}</span>
                </div>
              </button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;