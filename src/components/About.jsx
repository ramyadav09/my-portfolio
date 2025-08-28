import profilePic from "../assets/pp.png";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const About = ({ isDark }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const skills = [
    { name: "React", level: 60, color: isDark ? "#3b82f6" : "#1e40af" },
    { name: "JavaScript", level: 70, color: isDark ? "#fbbf24" : "#d97706" },
    { name: "Tailwind CSS", level: 80, color: isDark ? "#06b6d4" : "#0891b2" },
    { name: "Node.js", level: 5, color: isDark ? "#10b981" : "#059669" },
  ];

  return (
    <div
      className={`min-h-screen flex flex-col lg:flex-row items-center justify-center px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 pt-16 sm:pt-20 pb-8 relative overflow-hidden transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{
        background: isDark
          ? "linear-gradient(135deg, #0f0f23, #1e1b4b, #7c3aed)"
          : "linear-gradient(135deg, #ffffff, #f3f4f6, #ddd6fe)",
        color: isDark ? "white" : "#111827",
      }}
    >
      <div className={`lg:w-1/2 text-center lg:text-left space-y-4 sm:space-y-6 lg:space-y-8 order-2 lg:order-1 z-10 max-w-2xl lg:max-w-none transition-all duration-1000 delay-300 ${
        isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
      }`}>
        <div className="space-y-3 sm:space-y-4">
          <h2
            className="text-lg sm:text-xl md:text-2xl font-semibold"
            style={{ color: isDark ? "#06b6d4" : "#3b82f6" }}
          >
            👋 Hello, I'm
          </h2>
          <h1
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-extrabold"
            style={{
              background: "linear-gradient(135deg, #06b6d4, #7c3aed, #ec4899)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Ram Kumar Yadav
          </h1>
          <div className="space-y-3">
            <p
              className="text-sm sm:text-base font-semibold px-4 py-2 rounded-full border inline-block"
              style={{
                background: isDark ? "rgba(6, 182, 212, 0.1)" : "rgba(59, 130, 246, 0.1)",
                borderColor: isDark ? "#06b6d4" : "#3b82f6",
                color: isDark ? "#67e8f9" : "#1e40af"
              }}
            >
              🎓 2nd Year B.Tech CSE • KIIT University
            </p>
            <p
              className="text-base sm:text-lg font-medium"
              style={{ color: isDark ? "#a78bfa" : "#7c3aed" }}
            >
              Full Stack Developer & UI/UX Enthusiast
            </p>
            <div className="flex flex-wrap gap-2 justify-center lg:hidden">
              <span
                className="text-xs sm:text-sm font-medium px-3 py-1 rounded-full border"
                style={{
                  background: isDark ? "rgba(124, 58, 237, 0.1)" : "rgba(124, 58, 237, 0.1)",
                  borderColor: isDark ? "#7c3aed" : "#7c3aed",
                  color: isDark ? "#a78bfa" : "#7c3aed"
                }}
              >
                🚀 5+ Projects
              </span>
              <span
                className="text-xs sm:text-sm font-medium px-3 py-1 rounded-full border"
                style={{
                  background: isDark ? "rgba(236, 72, 153, 0.1)" : "rgba(236, 72, 153, 0.1)",
                  borderColor: isDark ? "#ec4899" : "#ec4899",
                  color: isDark ? "#f9a8d4" : "#ec4899"
                }}
              >
                📅 6+ Months Experience
              </span>
              <span
                className="text-xs sm:text-sm font-medium px-3 py-1 rounded-full border"
                style={{
                  background: isDark ? "rgba(16, 185, 129, 0.1)" : "rgba(16, 185, 129, 0.1)",
                  borderColor: isDark ? "#10b981" : "#10b981",
                  color: isDark ? "#6ee7b7" : "#10b981"
                }}
              >
                📞 24/7 Support
              </span>
            </div>
          </div>
        </div>

        <div
          className="p-4 sm:p-6 rounded-2xl backdrop-blur-sm border shadow-xl"
          style={{
            background: isDark
              ? "rgba(30, 27, 75, 0.5)"
              : "rgba(255, 255, 255, 0.7)",
            borderColor: isDark
              ? "rgba(168, 85, 247, 0.2)"
              : "rgba(59, 130, 246, 0.2)",
          }}
        >
          <p
            className="leading-relaxed text-sm sm:text-base md:text-lg"
            style={{ color: isDark ? "#d1d5db" : "#374151" }}
          >
            I am a passionate Full Stack Developer focused on building engaging,
            user-friendly, and modern web applications. My goal is to create
            digital experiences that blend design, usability, and performance
            seamlessly.
          </p>
        </div>

        <div className="space-y-4">
          <h3
            className="text-lg font-semibold"
            style={{ color: isDark ? "white" : "#111827" }}
          >
            Technical Skills
          </h3>
          {skills.map((skill, index) => (
            <div key={skill.name} className="space-y-2">
              <div className="flex justify-between items-center">
                <span
                  className="text-sm font-medium"
                  style={{ color: isDark ? "#d1d5db" : "#374151" }}
                >
                  {skill.name}
                </span>
                <span
                  className="text-sm"
                  style={{ color: isDark ? "#9ca3af" : "#6b7280" }}
                >
                  {skill.level}%
                </span>
              </div>
              <div
                className="w-full rounded-full h-2"
                style={{
                  background: isDark
                    ? "rgba(75, 85, 99, 0.5)"
                    : "rgba(229, 231, 235, 0.8)",
                }}
              >
                <div
                  className="h-2 rounded-full transition-all duration-1000 ease-out"
                  style={{ width: `${skill.level}%`, background: skill.color }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
          <a
            href="/resume.pdf"
            download
            className="group px-6 sm:px-8 py-3 rounded-xl text-white font-semibold shadow-xl transition-all duration-300 hover:scale-105 text-sm sm:text-base text-center"
            style={{ background: "linear-gradient(135deg, #06b6d4, #7c3aed)" }}
          >
            <span className="flex items-center justify-center gap-2">
              Download CV
              <span className="group-hover:translate-y-[-2px] transition-transform duration-300">
                📄
              </span>
            </span>
          </a>
          <Link
            to="/portfolio"
            className="px-6 sm:px-8 py-3 rounded-xl border-2 font-semibold transition-all duration-300 hover:scale-105 text-sm sm:text-base text-center"
            style={{
              borderColor: isDark ? "#7c3aed" : "#3b82f6",
              color: isDark ? "#a78bfa" : "#3b82f6",
              background: isDark
                ? "rgba(124, 58, 237, 0.1)"
                : "rgba(59, 130, 246, 0.1)",
            }}
          >
            View Projects 🚀
          </Link>
        </div>
      </div>

      <div className={`lg:w-1/2 mt-8 sm:mt-10 lg:mt-0 flex flex-col items-center order-1 lg:order-2 z-10 transition-all duration-1000 delay-500 ${
        isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
      }`}>
        <div className="relative mb-8">
          <div
            className="absolute inset-0 animate-spin"
            style={{ animationDuration: "10s" }}
          >
            <div
              className="w-full h-full rounded-full opacity-30"
              style={{
                background: `conic-gradient(from 0deg, transparent, ${
                  isDark ? "#06b6d4" : "#3b82f6"
                }, transparent)`,
                filter: "blur(20px",
              }}
            ></div>
          </div>

          <div
            className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-full p-1 shadow-2xl transition-all duration-500"
            style={{
              background: `linear-gradient(45deg, ${
                isDark ? "#06b6d4" : "#3b82f6"
              }, ${isDark ? "#7c3aed" : "#7c3aed"}, ${
                isDark ? "#ec4899" : "#ec4899"
              })`,
            }}
          >
            <div
              className="w-full h-full rounded-full overflow-hidden"
              style={{ background: isDark ? "#0f0f23" : "#ffffff" }}
            >
              <img
                src={profilePic}
                alt="Ram Kumar Yadav - Full Stack Developer"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                style={{
                  filter: isDark
                    ? "brightness(1.1) contrast(1.1)"
                    : "brightness(0.95) contrast(1.05)",
                }}
              />
            </div>
          </div>

          <div
            className="absolute -top-4 -right-4 w-14 h-14 rounded-full flex items-center justify-center text-2xl animate-bounce shadow-lg"
            style={{
              background: "linear-gradient(135deg, #10b981, #059669)",
              boxShadow: "0 0 25px rgba(16, 185, 129, 0.6)",
            }}
          >
            🚀
          </div>
          <div
            className="absolute -bottom-6 -left-6 w-12 h-12 rounded-full flex items-center justify-center text-xl animate-pulse shadow-lg"
            style={{
              background: "linear-gradient(135deg, #f59e0b, #f97316)",
              boxShadow: "0 0 20px rgba(245, 158, 11, 0.5)",
            }}
          >
            ✨
          </div>
        </div>

        <div className="hidden lg:grid grid-cols-2 gap-4 w-full max-w-sm">
          {[
            { number: "5+", label: "Projects", icon: "🚀" },
            { number: "6+", label: "Months Exp", icon: "📅" },
            { number: "--", label: "Satisfaction", icon: "⭐" },
            { number: "24/7", label: "Support", icon: "📞" },
          ].map((stat, index) => (
            <div
              key={stat.label}
              className="p-3 rounded-xl backdrop-blur-sm border text-center hover:scale-105 transition-all duration-300"
              style={{
                background: isDark
                  ? "rgba(30, 27, 75, 0.6)"
                  : "rgba(255, 255, 255, 0.8)",
                borderColor: isDark
                  ? "rgba(168, 85, 247, 0.2)"
                  : "rgba(59, 130, 246, 0.2)",
              }}
            >
              <div className="text-lg mb-1">{stat.icon}</div>
              <div
                className="text-lg font-bold"
                style={{ color: isDark ? "#06b6d4" : "#3b82f6" }}
              >
                {stat.number}
              </div>
              <div
                className="text-xs"
                style={{ color: isDark ? "#9ca3af" : "#6b7280" }}
              >
                {stat.label}
              </div>
            </div>
          ))}
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
    </div>
  );
};

export default About;
