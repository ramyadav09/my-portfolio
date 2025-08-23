import { useOutletContext } from "react-router-dom";
import { useState, useEffect } from "react";

const Portfolio = () => {
  const { isDark } = useOutletContext();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const skills = [
    { name: "HTML", icon: "🌐", level: 90 },
    { name: "CSS", icon: "🎨", level: 85 },
    { name: "Tailwind", icon: "💨", level: 88 },
    { name: "React JS", icon: "⚛️", level: 82 },
    { name: "GitHub", icon: "🐙", level: 80 },
    { name: "VS Code", icon: "💻", level: 95 }
  ];

  const projects = [
    {
      title: "E-Commerce Website",
      tech: ["React", "Tailwind", "Node.js"],
      description: "Modern e-commerce platform with cart functionality",
      github: "#",
      live: "#"
    },
    {
      title: "Portfolio Website",
      tech: ["React", "CSS", "JavaScript"],
      description: "Responsive portfolio with dark theme",
      github: "#",
      live: "#"
    },
    {
      title: "Task Manager App",
      tech: ["React", "HTML", "CSS"],
      description: "Todo app with local storage",
      github: "#",
      live: "#"
    }
  ];

  return (
    <section 
      className={`min-h-screen pt-20 px-4 sm:px-6 lg:px-8 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{
        background: isDark 
          ? 'linear-gradient(135deg, #0f0f23, #1e1b4b, #7c3aed)' 
          : 'linear-gradient(135deg, #ffffff, #f3f4f6, #ddd6fe)',
        color: isDark ? 'white' : '#111827'
      }}
    >
      <div className="max-w-6xl mx-auto">
        <div className={`text-center mb-16 transition-all duration-1000 delay-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
        }`}>
          <h1 
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4"
            style={{
              background: 'linear-gradient(135deg, #06b6d4, #7c3aed, #ec4899)', 
              WebkitBackgroundClip: 'text', 
              WebkitTextFillColor: 'transparent'
            }}
          >
            My Portfolio
          </h1>
          <p 
            className="text-lg sm:text-xl max-w-2xl mx-auto"
            style={{color: isDark ? '#d1d5db' : '#6b7280'}}
          >
            Showcasing my skills and projects in web development
          </p>
        </div>

        <div className={`mb-20 transition-all duration-1000 delay-500 ${
          isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
        }`}>
          <h2 
            className="text-3xl sm:text-4xl font-bold mb-12 text-center"
            style={{color: isDark ? '#06b6d4' : '#3b82f6'}}
          >
            Skills & Technologies
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <div 
                key={index} 
                className="p-6 rounded-2xl backdrop-blur-sm border hover:scale-105 transition-all duration-300"
                style={{
                  background: isDark 
                    ? 'rgba(30, 27, 75, 0.6)' 
                    : 'rgba(255, 255, 255, 0.8)',
                  borderColor: isDark 
                    ? 'rgba(168, 85, 247, 0.2)' 
                    : 'rgba(59, 130, 246, 0.2)'
                }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-3xl">{skill.icon}</span>
                  <h3 
                    className="text-xl font-semibold"
                    style={{color: isDark ? 'white' : '#111827'}}
                  >
                    {skill.name}
                  </h3>
                </div>
                <div 
                  className="w-full rounded-full h-2"
                  style={{
                    background: isDark 
                      ? 'rgba(75, 85, 99, 0.5)' 
                      : 'rgba(229, 231, 235, 0.8)'
                  }}
                >
                  <div 
                    className="h-2 rounded-full transition-all duration-1000"
                    style={{ 
                      width: `${skill.level}%`, 
                      background: 'linear-gradient(135deg, #06b6d4, #7c3aed)' 
                    }}
                  ></div>
                </div>
                <p 
                  className="text-sm mt-2"
                  style={{color: isDark ? '#d1d5db' : '#6b7280'}}
                >
                  {skill.level}% Proficiency
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className={`mb-20 transition-all duration-1000 delay-700 ${
          isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
        }`}>
          <h2 
            className="text-3xl sm:text-4xl font-bold mb-12 text-center"
            style={{color: isDark ? '#06b6d4' : '#3b82f6'}}
          >
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div 
                key={index} 
                className="rounded-2xl overflow-hidden backdrop-blur-sm border hover:scale-105 transition-all duration-300"
                style={{
                  background: isDark 
                    ? 'rgba(30, 27, 75, 0.6)' 
                    : 'rgba(255, 255, 255, 0.8)',
                  borderColor: isDark 
                    ? 'rgba(168, 85, 247, 0.2)' 
                    : 'rgba(59, 130, 246, 0.2)'
                }}
              >
                <div 
                  className="h-48 flex items-center justify-center"
                  style={{
                    background: isDark 
                      ? 'linear-gradient(135deg, rgba(6, 182, 212, 0.2), rgba(124, 58, 237, 0.2))' 
                      : 'linear-gradient(135deg, rgba(6, 182, 212, 0.1), rgba(124, 58, 237, 0.1))'
                  }}
                >
                  <span className="text-6xl">🚀</span>
                </div>
                <div className="p-6">
                  <h3 
                    className="text-xl font-bold mb-2"
                    style={{color: isDark ? 'white' : '#111827'}}
                  >
                    {project.title}
                  </h3>
                  <p 
                    className="mb-4"
                    style={{color: isDark ? '#d1d5db' : '#6b7280'}}
                  >
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, i) => (
                      <span 
                        key={i} 
                        className="px-3 py-1 rounded-full text-sm"
                        style={{
                          background: isDark 
                            ? 'rgba(6, 182, 212, 0.2)' 
                            : 'rgba(6, 182, 212, 0.1)',
                          border: `1px solid ${isDark ? 'rgba(34, 211, 238, 0.3)' : 'rgba(6, 182, 212, 0.3)'}`,
                          color: isDark ? '#67e8f9' : '#06b6d4'
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <a 
                      href={project.github} 
                      className="px-4 py-2 rounded-lg text-sm font-medium transition-all hover:scale-105"
                      style={{
                        background: isDark 
                          ? 'linear-gradient(135deg, #374151, #4b5563)' 
                          : 'linear-gradient(135deg, #d1d5db, #e5e7eb)',
                        color: isDark ? 'white' : '#111827'
                      }}
                    >
                      GitHub
                    </a>
                    <a 
                      href={project.live} 
                      className="px-4 py-2 rounded-lg text-sm font-medium text-white transition-all hover:scale-105"
                      style={{ background: 'linear-gradient(135deg, #06b6d4, #7c3aed)' }}
                    >
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div 
          className="text-center p-8 rounded-2xl backdrop-blur-sm border"
          style={{
            background: isDark 
              ? 'rgba(30, 27, 75, 0.5)' 
              : 'rgba(255, 255, 255, 0.7)',
            borderColor: isDark 
              ? 'rgba(168, 85, 247, 0.2)' 
              : 'rgba(59, 130, 246, 0.2)'
          }}
        >
          <h2 
            className="text-2xl sm:text-3xl font-bold mb-4"
            style={{color: isDark ? 'white' : '#111827'}}
          >
            Let's Work Together
          </h2>
          <p 
            className="mb-6 max-w-2xl mx-auto"
            style={{color: isDark ? '#d1d5db' : '#6b7280'}}
          >
            Ready to bring your ideas to life? Let's create something amazing together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              className="px-8 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 text-white"
              style={{ background: 'linear-gradient(135deg, #06b6d4, #7c3aed)' }}
            >
              View All Projects
            </button>
            <button 
              className="px-8 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105"
              style={{
                border: `2px solid ${isDark ? '#06b6d4' : '#3b82f6'}`,
                color: isDark ? '#06b6d4' : '#3b82f6',
                background: isDark ? 'rgba(6, 182, 212, 0.1)' : 'rgba(59, 130, 246, 0.1)'
              }}
            >
              Contact Me
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;