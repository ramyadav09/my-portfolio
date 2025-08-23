import { useState, useEffect } from "react";

const Intro = ({ onExplore, isDark, toggleTheme }) => {
  const [currentText, setCurrentText] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const texts = ["Creative", "Modern", "Responsive", "Interactive"];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % texts.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div 
      className="relative flex flex-col items-center justify-center min-h-screen px-4 text-center overflow-hidden"
      style={{
        background: isDark ? 'linear-gradient(135deg, #0f0f23, #1e1b4b, #7c3aed)' : 'linear-gradient(135deg, #ffffff, #f3f4f6, #ddd6fe)',
        color: isDark ? 'white' : '#111827',
        transition: 'all 0.3s'
      }}
    >


      <div className={`relative z-10 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <h1 
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4"
          style={{background: 'linear-gradient(135deg, #ec4899, #7c3aed, #3b82f6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}
        >
          Welcome To My
        </h1>
        
        <h2 
          className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-6"
          style={{color: isDark ? 'rgba(255,255,255,0.9)' : '#1f2937'}}
        >
          <span style={{background: 'linear-gradient(135deg, #06b6d4, #7c3aed)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>
            {texts[currentText]}
          </span>{" "}
          Portfolio
        </h2>

        <p 
          className="text-sm sm:text-base md:text-lg max-w-md sm:max-w-lg md:max-w-xl mx-auto mb-8 leading-relaxed"
          style={{color: isDark ? '#d1d5db' : '#6b7280'}}
        >
          Crafting digital experiences with passion, precision, and cutting-edge technology.
        </p>

        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {["React", "JavaScript", "UI/UX", "Responsive"].map((tag, index) => (
            <span
              key={tag}
              className="px-4 py-2 text-sm rounded-full border hover:scale-110 transition-all duration-300 animate-bounce"
              style={{
                background: isDark ? 'rgba(124, 58, 237, 0.2)' : 'rgba(59, 130, 246, 0.1)',
                borderColor: isDark ? '#7c3aed' : '#3b82f6',
                color: isDark ? '#a78bfa' : '#3b82f6',
                animationDelay: `${index * 200}ms`
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <button
            onClick={onExplore}
            className="group px-8 py-4 rounded-2xl text-white font-semibold shadow-xl transition-all duration-300 hover:scale-105"
            style={{background: 'linear-gradient(135deg, #7c3aed, #ec4899)'}}
          >
            <span className="flex items-center justify-center gap-2">
              Explore Portfolio
              <span className="group-hover:translate-x-1 transition-transform duration-300">🚀</span>
            </span>
          </button>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div 
            className="w-6 h-10 border-2 rounded-full flex justify-center"
            style={{borderColor: isDark ? 'rgba(124, 58, 237, 0.5)' : 'rgba(59, 130, 246, 0.5)'}}
          >
            <div 
              className="w-1 h-3 rounded-full mt-2 animate-pulse"
              style={{background: isDark ? '#7c3aed' : '#3b82f6'}}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;