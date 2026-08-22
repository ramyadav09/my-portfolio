import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Services = ({ isDark }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const services = [
    {
      icon: "🌐",
      title: "Full Stack Web Development",
      description: "Building scalable web applications using MERN Stack, FastAPI, PostgreSQL, and modern architectures",
      features: ["MERN Stack", "FastAPI Backend", "PostgreSQL/MongoDB", "RESTful APIs", "Docker Deployment"]
    },
    {
      icon: "📱",
      title: "Cross-Platform Mobile Apps",
      description: "Developing native-like mobile applications with React Native for iOS and Android",
      features: ["React Native", "Expo / CLI", "Native Modules", "App Store Deployment", "Push Notifications"]
    },
    {
      icon: "🤖",
      title: "AI Integration & Automation",
      description: "Integrating Generative AI, LLMs, and building intelligent automation workflows",
      features: ["LLM Integration (OpenAI, etc.)", "RAG Systems", "AI Agents", "Prompt Engineering", "Vector Databases"]
    },
    {
      icon: "⚡",
      title: "Real-time & Backend Systems",
      description: "Designing high-performance backend services with real-time capabilities",
      features: ["WebSockets", "Socket.io", "Redis", "Microservices", "Authentication (JWT/OAuth)"]
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
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4"
            style={{
              background: 'linear-gradient(135deg, #06b6d4, #7c3aed, #ec4899)', 
              WebkitBackgroundClip: 'text', 
              WebkitTextFillColor: 'transparent'
            }}
          >
            My Expertise
          </h1>
          <p 
            className="text-base sm:text-lg max-w-2xl mx-auto"
            style={{color: isDark ? '#d1d5db' : '#6b7280'}}
          >
            Full Stack Developer specializing in MERN, FastAPI, React Native, and Generative AI
          </p>
        </div>

        <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 transition-all duration-1000 delay-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          {services.map((service, index) => (
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
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 
                className="text-xl font-bold mb-3"
                style={{color: isDark ? 'white' : '#111827'}}
              >
                {service.title}
              </h3>
              <p 
                className="mb-4"
                style={{color: isDark ? '#d1d5db' : '#6b7280'}}
              >
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm">
                    <span 
                      className="w-2 h-2 rounded-full"
                      style={{background: isDark ? '#06b6d4' : '#3b82f6'}}
                    ></span>
                    <span style={{color: isDark ? '#d1d5db' : '#6b7280'}}>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div 
          className={`text-center p-8 rounded-2xl backdrop-blur-sm border transition-all duration-1000 delay-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
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
            className="text-2xl font-bold mb-4"
            style={{color: isDark ? 'white' : '#111827'}}
          >
            Let's Build Something Great
          </h2>
          <p 
            className="mb-6 max-w-2xl mx-auto"
            style={{color: isDark ? '#d1d5db' : '#6b7280'}}
          >
            From scalable web apps to AI-powered solutions — ready to bring your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact"
              className="px-8 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 text-white text-center"
              style={{background: 'linear-gradient(135deg, #06b6d4, #7c3aed)'}}
            >
              Get In Touch
            </Link>
            <Link 
              to="/portfolio"
              className="px-8 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 text-center"
              style={{
                border: `2px solid ${isDark ? '#06b6d4' : '#3b82f6'}`,
                color: isDark ? '#06b6d4' : '#3b82f6',
                background: isDark ? 'rgba(6, 182, 212, 0.1)' : 'rgba(59, 130, 246, 0.1)'
              }}
            >
              View Projects
            </Link>
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

export default Services;