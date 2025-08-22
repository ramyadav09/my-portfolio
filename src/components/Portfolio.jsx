import { Link, useOutletContext } from "react-router-dom";
import { useState } from "react";

const Portfolio = () => {
  const { isDark } = useOutletContext();
  const [activeFilter, setActiveFilter] = useState('all');
  
  const skills = [
    { name: "React", icon: "⚛️", level: 90, color: isDark ? "#3b82f6" : "#1e40af" },
    { name: "JavaScript", icon: "🟨", level: 85, color: isDark ? "#fbbf24" : "#d97706" },
    { name: "Tailwind", icon: "💨", level: 88, color: isDark ? "#06b6d4" : "#0891b2" },
    { name: "Node.js", icon: "🟢", level: 82, color: isDark ? "#10b981" : "#059669" },
    { name: "MongoDB", icon: "🍃", level: 80, color: isDark ? "#10b981" : "#059669" },
    { name: "Express", icon: "⚡", level: 85, color: isDark ? "#9ca3af" : "#6b7280" },
  ];

  const projects = [
    {
      title: "E-Commerce Platform",
      category: "fullstack",
      tech: ["React", "Node.js", "MongoDB"],
      description: "Full-featured e-commerce platform with payment integration",
      image: "🛒",
      github: "#",
      live: "#",
    },
    {
      title: "Portfolio Website",
      category: "frontend",
      tech: ["React", "Tailwind", "Framer Motion"],
      description: "Responsive portfolio with smooth animations",
      image: "💼",
      github: "#",
      live: "#",
    },
    {
      title: "Task Management App",
      category: "frontend",
      tech: ["React", "Redux", "CSS3"],
      description: "Collaborative task manager with real-time updates",
      image: "✅",
      github: "#",
      live: "#",
    },
    {
      title: "Weather Dashboard",
      category: "frontend",
      tech: ["JavaScript", "API", "Chart.js"],
      description: "Interactive weather dashboard with data visualization",
      image: "🌦️",
      github: "#",
      live: "#",
    },
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section 
      className="min-h-screen pt-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden transition-all duration-300"
      style={{
        background: isDark ? 'linear-gradient(135deg, #0f0f23, #1e1b4b, #7c3aed)' : 'linear-gradient(135deg, #ffffff, #f3f4f6, #ddd6fe)',
        color: isDark ? 'white' : '#111827'
      }}
    >
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h1 
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4"
            style={{background: 'linear-gradient(135deg, #06b6d4, #7c3aed, #ec4899)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}
          >
            My Portfolio
          </h1>
          <p className="text-base sm:text-lg max-w-2xl mx-auto" style={{color: isDark ? '#d1d5db' : '#6b7280'}}>
            Showcasing my journey in web development through innovative projects
          </p>
        </div>

        <div className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center" style={{color: isDark ? '#06b6d4' : '#3b82f6'}}>
            Technical Skills
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="p-4 rounded-xl backdrop-blur-sm border hover:scale-105 transition-all duration-300"
                style={{
                  background: isDark ? 'rgba(30, 27, 75, 0.6)' : 'rgba(255, 255, 255, 0.8)',
                  borderColor: isDark ? 'rgba(168, 85, 247, 0.2)' : 'rgba(59, 130, 246, 0.2)'
                }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">{skill.icon}</span>
                  <h3 className="text-lg font-semibold" style={{color: isDark ? 'white' : '#111827'}}>{skill.name}</h3>
                </div>
                <div className="w-full rounded-full h-2 mb-2" style={{background: isDark ? 'rgba(75, 85, 99, 0.5)' : 'rgba(229, 231, 235, 0.8)'}}>
                  <div
                    className="h-2 rounded-full transition-all duration-1000"
                    style={{ width: `${skill.level}%`, background: skill.color }}
                  ></div>
                </div>
                <p className="text-sm" style={{color: isDark ? '#9ca3af' : '#6b7280'}}>{skill.level}% Proficiency</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center" style={{color: isDark ? '#06b6d4' : '#3b82f6'}}>
            Featured Projects
          </h2>
          
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {['all', 'frontend', 'fullstack'].map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className="px-4 py-2 rounded-full text-sm font-medium transition-all duration-300"
                style={{
                  background: activeFilter === filter 
                    ? 'linear-gradient(135deg, #06b6d4, #7c3aed)' 
                    : isDark ? 'rgba(30, 27, 75, 0.5)' : 'rgba(255, 255, 255, 0.5)',
                  color: activeFilter === filter ? 'white' : (isDark ? '#d1d5db' : '#374151')
                }}
              >
                {filter.charAt(0).toUpperCase() + filter.slice(1)}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredProjects.map((project, index) => (
              <div
                key={index}
                className="rounded-xl overflow-hidden backdrop-blur-sm border hover:scale-105 transition-all duration-300 group"
                style={{
                  background: isDark ? 'rgba(30, 27, 75, 0.6)' : 'rgba(255, 255, 255, 0.8)',
                  borderColor: isDark ? 'rgba(168, 85, 247, 0.2)' : 'rgba(59, 130, 246, 0.2)'
                }}
              >
                <div 
                  className="h-32 flex items-center justify-center"
                  style={{background: isDark ? 'rgba(124, 58, 237, 0.2)' : 'rgba(59, 130, 246, 0.1)'}}
                >
                  <span className="text-4xl group-hover:scale-110 transition-transform duration-300">{project.image}</span>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-bold mb-2" style={{color: isDark ? 'white' : '#111827'}}>{project.title}</h3>
                  <p className="text-sm mb-3" style={{color: isDark ? '#d1d5db' : '#6b7280'}}>{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 border rounded-full text-xs"
                        style={{
                          background: isDark ? 'rgba(124, 58, 237, 0.2)' : 'rgba(59, 130, 246, 0.1)',
                          borderColor: isDark ? '#7c3aed' : '#3b82f6',
                          color: isDark ? '#a78bfa' : '#3b82f6'
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <a
                      href={project.github}
                      className="flex-1 px-3 py-2 rounded-lg transition-all text-xs font-medium text-center text-white"
                      style={{background: 'linear-gradient(135deg, #374151, #6b7280)'}}
                    >
                      GitHub
                    </a>
                    <a
                      href={project.live}
                      className="flex-1 px-3 py-2 rounded-lg transition-all text-xs font-medium text-center text-white"
                      style={{background: 'linear-gradient(135deg, #06b6d4, #7c3aed)'}}
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
          className="text-center p-6 rounded-2xl backdrop-blur-sm border"
          style={{
            background: isDark ? 'rgba(30, 27, 75, 0.5)' : 'rgba(255, 255, 255, 0.7)',
            borderColor: isDark ? 'rgba(168, 85, 247, 0.2)' : 'rgba(59, 130, 246, 0.2)'
          }}
        >
          <h2 className="text-xl sm:text-2xl font-bold mb-3" style={{color: isDark ? 'white' : '#111827'}}>
            Let's Build Something Amazing Together
          </h2>
          <p className="mb-6 text-sm sm:text-base" style={{color: isDark ? '#d1d5db' : '#6b7280'}}>
            Ready to bring your ideas to life? Let's collaborate!
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              to="/contact"
              className="px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 text-sm text-white"
              style={{background: 'linear-gradient(135deg, #06b6d4, #7c3aed)'}}
            >
              Get In Touch
            </Link>
            <button 
              className="px-6 py-3 border-2 rounded-xl font-semibold transition-all duration-300 hover:scale-105 text-sm"
              style={{
                borderColor: isDark ? '#7c3aed' : '#3b82f6',
                color: isDark ? '#a78bfa' : '#3b82f6',
                background: isDark ? 'rgba(124, 58, 237, 0.1)' : 'rgba(59, 130, 246, 0.1)'
              }}
            >
              View All Projects
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;