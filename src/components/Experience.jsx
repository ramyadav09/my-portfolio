import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Experience = ({ isDark }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const experiences = [
    {
      year: "2024 - Present",
      title: "Full Stack Developer",
      company: "Freelance / Projects",
      description: "Building scalable web, mobile, and AI-powered applications using MERN Stack, FastAPI, PostgreSQL, and React Native. Specialized in RESTful APIs, authentication systems, real-time applications, and Generative AI integrations.",
      skills: ["React", "Node.js", "MongoDB", "PostgreSQL", "FastAPI", "React Native", "Tailwind CSS", "Docker"]
    },
    {
      year: "2023 - 2024",
      title: "MERN Stack Development",
      company: "Self-Directed Learning",
      description: "Mastered full-stack development with MongoDB, Express, React, and Node.js. Built multiple production-ready applications with JWT authentication, real-time features, and responsive UIs.",
      skills: ["React", "Express", "MongoDB", "JWT", "WebSockets", "Tailwind CSS", "Git"]
    },
    {
      year: "2022 - 2023",
      title: "Frontend Foundations",
      company: "Online Courses",
      description: "Built strong foundations in HTML, CSS, JavaScript, and React. Learned modern CSS with Tailwind, component-based architecture, and state management.",
      skills: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS", "Git"]
    }
  ];

  const learningGoals = [
    { icon: "🤖", title: "Currently Learning", desc: "Generative AI & LLM Integration" },
    { icon: "🚀", title: "Next Goal", desc: "Deploy AI-Powered SaaS Products" },
    { icon: "🏗️", title: "Career Target", desc: "Senior Full Stack / AI Engineer" },
    { icon: "📚", title: "Future Plan", desc: "MLOps & Scalable AI Systems" }
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
            Professional Experience
          </h1>
          <p 
            className="text-base sm:text-lg max-w-2xl mx-auto"
            style={{color: isDark ? '#d1d5db' : '#6b7280'}}
          >
            Building scalable web, mobile, and AI-powered applications with modern technologies
          </p>
        </div>

        <div className={`mb-16 transition-all duration-1000 delay-500 ${
          isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
        }`}>
          <h2 
            className="text-2xl font-bold mb-8 text-center"
            style={{color: isDark ? '#06b6d4' : '#3b82f6'}}
          >
            Work Experience
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
            Focus Areas & Goals
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

      {/* Back to Home Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Link
          to="/"
          className="flex items-center gap-2 px-4 py-2 rounded-full text-white font-medium shadow-lg transition-all duration-300 hover:scale-105"
          style={{ background: "linear-gradient(135deg, #06b6d4, #7c3aed)" }}
        >
          ⬅ Home
        </Link>
      </div>
    </section>
  );
};

export default Experience;