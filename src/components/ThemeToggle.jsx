import { useState, useEffect } from 'react';

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    // Apply theme immediately on mount
    applyTheme(isDark);
  }, []);

  const applyTheme = (dark) => {
    const root = document.documentElement;
    if (dark) {
      root.style.setProperty('--bg-primary', '#0f0f23');
      root.style.setProperty('--bg-secondary', '#1e1b4b');
      root.style.setProperty('--text-primary', '#ffffff');
      root.style.setProperty('--text-secondary', '#d1d5db');
    } else {
      root.style.setProperty('--bg-primary', '#ffffff');
      root.style.setProperty('--bg-secondary', '#f3f4f6');
      root.style.setProperty('--text-primary', '#111827');
      root.style.setProperty('--text-secondary', '#6b7280');
    }
  };

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    applyTheme(newTheme);
    localStorage.setItem('theme', newTheme ? 'dark' : 'light');
  };

  return (
    <button
      onClick={toggleTheme}
      className="fixed top-20 right-4 z-50 w-16 h-8 rounded-full transition-all duration-300 shadow-lg"
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
  );
};

export default ThemeToggle;