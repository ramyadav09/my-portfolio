import { Link, useOutletContext } from "react-router-dom";
import { useState, useEffect } from "react";
import Ppp from "../assets/ppp.jpg";
const Body = () => {
  const { isDark } = useOutletContext();
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const roles = [
    "Frontend Developer",
    "UI/UX Designer",
    "React Specialist",
    "Web Developer",
  ];

  useEffect(() => {
    let timeout;
    const currentRoleText = roles[currentRole];

    if (isTyping) {
      if (displayText.length < currentRoleText.length) {
        timeout = setTimeout(() => {
          setDisplayText(currentRoleText.slice(0, displayText.length + 1));
        }, 100);
      } else {
        timeout = setTimeout(() => setIsTyping(false), 2000);
      }
    } else {
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1));
        }, 50);
      } else {
        setCurrentRole((prev) => (prev + 1) % roles.length);
        setIsTyping(true);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayText, isTyping, currentRole, roles]);

  return (
    <section
      className="relative min-h-screen px-4 sm:px-6 lg:px-8 pt-16 pb-8 overflow-hidden"
      style={{
        background: isDark
          ? "linear-gradient(135deg, #0f0f23, #1e1b4b, #7c3aed)"
          : "linear-gradient(135deg, #ffffff, #f3f4f6, #ddd6fe)",
        color: isDark ? "white" : "#111827",
        transition: "all 0.3s",
      }}
    >
      <div className="max-w-6xl mx-auto flex flex-col items-center justify-center min-h-screen">
        {/* Profile Image Section */}
        <div className="mb-6 sm:mb-8 md:mb-10 flex justify-center relative z-10">
          <div className="relative">
            {/* Floating Elements */}
            <div
              className="absolute -top-4 -left-4 sm:-top-6 sm:-left-6 w-8 h-8 sm:w-12 sm:h-12 rounded-full animate-bounce opacity-70"
              style={{
                background: "linear-gradient(135deg, #06b6d4, #3b82f6)",
              }}
            ></div>
            <div
              className="absolute -bottom-6 -right-6 sm:-bottom-8 sm:-right-8 w-12 h-12 sm:w-16 sm:h-16 rounded-full animate-pulse opacity-50"
              style={{
                background: "linear-gradient(135deg, #ec4899, #7c3aed)",
              }}
            ></div>
            <div
              className="absolute top-1/2 -left-8 sm:-left-12 w-4 h-4 sm:w-6 sm:h-6 rounded-full animate-ping opacity-40"
              style={{
                background: "linear-gradient(135deg, #fbbf24, #f97316)",
              }}
            ></div>
            <div
              className="absolute top-1/4 -right-6 sm:-right-10 w-6 h-6 sm:w-8 sm:h-8 rounded-full animate-bounce opacity-60"
              style={{
                background: "linear-gradient(135deg, #10b981, #059669)",
              }}
            ></div>

            {/* Main Profile Container */}
            <div className="relative">
              {/* Outer Glow Ring */}
              <div
                className="absolute inset-0 rounded-full animate-spin-slow"
                style={{
                  background: `conic-gradient(from 0deg, ${
                    isDark ? "#06b6d4" : "#3b82f6"
                  }, ${isDark ? "#7c3aed" : "#7c3aed"}, ${
                    isDark ? "#ec4899" : "#ec4899"
                  }, ${isDark ? "#06b6d4" : "#3b82f6"})`,
                  padding: "4px",
                  filter: "blur(8px)",
                  opacity: 0.7,
                }}
              ></div>

              {/* Profile Image Container */}
              <div
                className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 rounded-full p-2 backdrop-blur-sm"
                style={{
                  background: `conic-gradient(from 0deg, ${
                    isDark ? "#06b6d4" : "#3b82f6"
                  }, ${isDark ? "#7c3aed" : "#7c3aed"}, ${
                    isDark ? "#ec4899" : "#ec4899"
                  }, ${isDark ? "#06b6d4" : "#3b82f6"})`,
                }}
              >
                <div
                  className="w-full h-full rounded-full overflow-hidden"
                  style={{ background: isDark ? "#0f0f23" : "#ffffff" }}
                >
                  <img
                    src={Ppp}
                    alt="Ram Kumar Yadav - Developer"
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                    style={{
                      filter: isDark
                        ? "brightness(1.1) contrast(1.1)"
                        : "brightness(0.95) contrast(1.05)",
                    }}
                  />
                </div>
              </div>

              {/* Status Indicator */}
              <div
                className="absolute bottom-8 right-8 w-12 h-12 rounded-full flex items-center justify-center text-2xl animate-pulse"
                style={{
                  background: "linear-gradient(135deg, #10b981, #059669)",
                  boxShadow: "0 0 20px rgba(16, 185, 129, 0.5)",
                }}
              >
                ✨
              </div>
            </div>
          </div>
        </div>

        {/* Text Content Section */}
        <div className="text-center space-y-4 sm:space-y-5 md:space-y-6 z-10 max-w-4xl px-2">
          <h2
            className="text-base sm:text-lg md:text-xl font-semibold animate-bounce"
            style={{ color: isDark ? "#a78bfa" : "#7c3aed" }}
          >
            👋 Hi, I'm Ready to Innovate
          </h2>

          <div className="space-y-2">
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-extrabold leading-tight">
              <span
                style={{
                  background:
                    "linear-gradient(135deg, #ec4899, #7c3aed, #3b82f6)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {displayText}
                <span className="animate-pulse">|</span>
              </span>
            </h1>
          </div>

          <p
            className="text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed px-4"
            style={{ color: isDark ? "#d1d5db" : "#6b7280" }}
          >
            I build modern, functional, and user-friendly digital experiences
            with clean and efficient code that brings ideas to life.
          </p>

          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mt-4 sm:mt-6 px-2">
            {[
              {
                name: "React",
                icon: "⚛️",
                color: isDark ? "#3b82f6" : "#1e40af",
              },
              {
                name: "JavaScript",
                icon: "🟨",
                color: isDark ? "#fbbf24" : "#d97706",
              },
              {
                name: "Node.js",
                icon: "🟢",
                color: isDark ? "#10b981" : "#059669",
              },
              {
                name: "Tailwind",
                icon: "💨",
                color: isDark ? "#06b6d4" : "#0891b2",
              },
            ].map((tech, index) => (
              <span
                key={tech.name}
                className="px-3 py-2 sm:px-4 sm:py-2 text-xs sm:text-sm rounded-lg border hover:scale-110 hover:shadow-lg transition-all duration-300 cursor-pointer flex items-center gap-1 sm:gap-2"
                style={{
                  background: isDark
                    ? "rgba(255,255,255,0.1)"
                    : "rgba(0,0,0,0.05)",
                  borderColor: tech.color,
                  color: tech.color,
                }}
              >
                <span className="text-xs sm:text-sm">{tech.icon}</span>
                <span className="hidden xs:inline sm:inline">{tech.name}</span>
              </span>
            ))}
          </div>

          <div
            className={`flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 mt-6 sm:mt-8 w-full max-w-md mx-auto ${
              isDark ? "sm:justify-end" : "justify-center"
            }`}
          >
            <Link
              to="/services"
              className="group px-4 py-3 sm:px-6 sm:py-3 rounded-xl text-white font-semibold shadow-xl transition-all duration-300 hover:scale-105 text-center flex-1 sm:flex-none"
              style={{
                background: "linear-gradient(135deg, #7c3aed, #ec4899)",
              }}
            >
              <span className="flex items-center justify-center gap-2 text-sm sm:text-base">
                <span className="hidden sm:inline">View </span>Services
                <span className="group-hover:translate-x-1 transition-transform duration-300">
                  ⚡
                </span>
              </span>
            </Link>
            <Link
              to="/portfolio"
              className="px-4 py-3 sm:px-6 sm:py-3 rounded-xl border-2 font-semibold shadow-md transition-all duration-300 hover:scale-105 text-center flex-1 sm:flex-none"
              style={{
                borderColor: isDark ? "#7c3aed" : "#3b82f6",
                color: isDark ? "#a78bfa" : "#3b82f6",
                background: isDark
                  ? "rgba(124, 58, 237, 0.1)"
                  : "rgba(59, 130, 246, 0.1)",
              }}
            >
              <span className="text-sm sm:text-base">
                <span className="hidden sm:inline">View </span>Projects 🚀
              </span>
            </Link>
          </div>

          <div className="flex justify-center gap-4 sm:gap-6 md:gap-8 pt-4 sm:pt-6 w-full">
            <div className="text-center">
              <div
                className="text-lg sm:text-xl md:text-2xl font-bold"
                style={{ color: isDark ? "#06b6d4" : "#0891b2" }}
              >
                2+
              </div>
              <div
                className="text-xs sm:text-sm"
                style={{ color: isDark ? "#9ca3af" : "#6b7280" }}
              >
                Years Exp
              </div>
            </div>
            <div className="text-center">
              <div
                className="text-lg sm:text-xl md:text-2xl font-bold"
                style={{ color: isDark ? "#a78bfa" : "#7c3aed" }}
              >
                15+
              </div>
              <div
                className="text-xs sm:text-sm"
                style={{ color: isDark ? "#9ca3af" : "#6b7280" }}
              >
                Projects
              </div>
            </div>
            <div className="text-center">
              <div
                className="text-lg sm:text-xl md:text-2xl font-bold"
                style={{ color: isDark ? "#f472b6" : "#ec4899" }}
              >
                100%
              </div>
              <div
                className="text-xs sm:text-sm"
                style={{ color: isDark ? "#9ca3af" : "#6b7280" }}
              >
                Satisfaction
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Body;
