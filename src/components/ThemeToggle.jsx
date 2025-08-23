const ThemeToggle = ({ isDark, toggleTheme }) => {

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