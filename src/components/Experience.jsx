import { useOutletContext } from "react-router-dom";
import { useState, useEffect } from "react";

const Experience = () => {
  const { isDark } = useOutletContext();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const experiences = [
    {
      year: "2024 - Present",
      title: "Learning Frontend Development",
      company: "Self-Study",
      description: "Currently learning React.js, JavaScript, and modern web development technologies through online courses and practice projects",
      skills: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS"]
    },
    {
      year: "2023 - 2024", 
      title: "Web Development Basics",
      company: "Online Courses",
      description: "Started my journey in web development by learning HTML, CSS, and basic JavaScript fundamentals",
      skills: ["HTML", "CSS", "JavaScript", "Git"]
    }
  ];

  const learningGoals = [
    { icon: "📚", title: "Currently Learning", desc: "React.js & Modern JavaScript" },
    { icon: "🎯", title: "Next Goal", desc: "Build 5+ Portfolio Projects" },
    { icon: "💼", title: "Career Target", desc: "Frontend Developer Role" },
    { icon: "🚀", title: "Future Plan", desc: "Full-Stack Development" }
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
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4"
            style={{
              background: 'linear-gradient(135deg, #06b6d4, #7c3aed, #ec4899)', 
              WebkitBackgroundClip: 'text', 
              WebkitTextFillColor: 'transparent'
            }}
          >
            My Learning Journey
          </h1>
          <p 
            className="text-base sm:text-lg max-w-2xl mx-auto"
            style={{color: isDark ? '#d1d5db' : '#6b7280'}}
          >
            As a beginner in frontend development, here's my learning path and goals
          </p>
        </div>

        <div className={`mb-16 transition-all duration-1000 delay-500 ${
          isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
        }`}>
          <h2 
            className="text-2xl font-bold mb-8 text-center"
            style={{color: isDark ? '#06b6d4' : '#3b82f6'}}
          >
            Learning Experience
          </h2>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
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
                <div className="flex flex-col md:flex-row md:items-center gap-4">
                  <div className="md:w-1/4">
                    <span 
                      className="px-3 py-1 rounded-full text-sm font-medium"
                      style={{
                        background: isDark 
                          ? 'rgba(124, 58, 237, 0.2)' 
                          : 'rgba(59, 130, 246, 0.1)',
                        color: isDark ? '#a78bfa' : '#3b82f6'
                      }}
                    >
                      {exp.year}
                    </span>
                  </div>
                  <div className="md:w-3/4">
                    <h3 
                      className="text-xl font-bold mb-1"
                      style={{color: isDark ? 'white' : '#111827'}}
                    >
                      {exp.title}
                    </h3>
                    <p 
                      className="font-medium mb-2"
                      style={{color: isDark ? '#a78bfa' : '#7c3aed'}}
                    >
                      {exp.company}
                    </p>
                    <p 
                      className="mb-3 text-sm"
                      style={{color: isDark ? '#d1d5db' : '#6b7280'}}
                    >
                      {exp.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill, i) => (
                        <span
                          key={i}
                          className="px-2 py-1 rounded-md text-xs"
                          style={{
                            background: isDark 
                              ? 'rgba(168, 85, 247, 0.2)' 
                              : 'rgba(124, 58, 237, 0.1)',
                            color: isDark ? '#c4b5fd' : '#7c3aed'
                          }}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={`transition-all duration-1000 delay-700 ${
          isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
        }`}>
          <h2 
            className="text-2xl font-bold mb-8 text-center"
            style={{color: isDark ? '#06b6d4' : '#3b82f6'}}
          >
            Learning Goals & Aspirations
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {learningGoals.map((goal, index) => (
              <div
                key={index}
                className="p-4 rounded-xl backdrop-blur-sm border text-center hover:scale-105 transition-all duration-300"
                style={{
                  background: isDark 
                    ? 'rgba(30, 27, 75, 0.6)' 
                    : 'rgba(255, 255, 255, 0.8)',
                  borderColor: isDark 
                    ? 'rgba(168, 85, 247, 0.2)' 
                    : 'rgba(59, 130, 246, 0.2)'
                }}
              >
                <div className="text-3xl mb-3">{goal.icon}</div>
                <h3 
                  className="text-lg font-bold mb-2"
                  style={{color: isDark ? 'white' : '#111827'}}
                >
                  {goal.title}
                </h3>
                <p 
                  className="text-sm"
                  style={{color: isDark ? '#d1d5db' : '#6b7280'}}
                >
                  {goal.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;