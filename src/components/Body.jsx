import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import profilePic from "../assets/ppp.jpg";

const Body = ({ isDark }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section 
      className={`flex flex-col-reverse lg:flex-row items-center justify-center min-h-screen px-4 sm:px-6 md:px-8 lg:px-12 pt-20 pb-8 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{
        background: isDark
          ? "linear-gradient(135deg, #0f0f23, #1e1b4b, #7c3aed)"
          : "linear-gradient(135deg, #ffffff, #f3f4f6, #ddd6fe)",
        color: isDark ? "white" : "#111827",
      }}
    >
      <div className={`flex-1 text-center lg:text-left space-y-4 sm:space-y-5 lg:space-y-7 max-w-2xl lg:max-w-none transition-all duration-1000 delay-300 ${
        isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
      }`}>
        <h2 
          className="text-lg sm:text-xl font-semibold"
          style={{ color: isDark ? "#a78bfa" : "#7c3aed" }}
        >
          👋 Hi, I'm Ready to Innovate
        </h2>
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold leading-tight">
          Frontend{" "}
          <span 
            style={{
              background: "linear-gradient(135deg, #06b6d4, #7c3aed, #ec4899)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Developer
          </span>
        </h1>
        <p 
          className="text-sm sm:text-base md:text-lg max-w-lg"
          style={{ color: isDark ? "#d1d5db" : "#6b7280" }}
        >
          I build modern, functional, and user-friendly digital experiences with
          clean and efficient code.
        </p>

        <div className="flex flex-wrap justify-center md:justify-start gap-3 mt-4">
          <span 
            className="px-4 py-2 text-sm rounded-lg border hover:scale-110 transition-all duration-300 cursor-pointer"
            style={{
              background: isDark ? "rgba(124, 58, 237, 0.2)" : "rgba(59, 130, 246, 0.1)",
              borderColor: isDark ? "rgba(168, 85, 247, 0.4)" : "rgba(59, 130, 246, 0.3)",
              color: isDark ? "#a78bfa" : "#3b82f6"
            }}
          >
            React
          </span>
          <span 
            className="px-4 py-2 text-sm rounded-lg border hover:scale-110 transition-all duration-300 cursor-pointer"
            style={{
              background: isDark ? "rgba(99, 102, 241, 0.2)" : "rgba(99, 102, 241, 0.1)",
              borderColor: isDark ? "rgba(129, 140, 248, 0.4)" : "rgba(99, 102, 241, 0.3)",
              color: isDark ? "#a5b4fc" : "#6366f1"
            }}
          >
            JavaScript
          </span>
          <span 
            className="px-4 py-2 text-sm rounded-lg border hover:scale-110 transition-all duration-300 cursor-pointer"
            style={{
              background: isDark ? "rgba(236, 72, 153, 0.2)" : "rgba(236, 72, 153, 0.1)",
              borderColor: isDark ? "rgba(244, 114, 182, 0.4)" : "rgba(236, 72, 153, 0.3)",
              color: isDark ? "#f9a8d4" : "#ec4899"
            }}
          >
            Node.js
          </span>
          <span 
            className="px-4 py-2 text-sm rounded-lg border hover:scale-110 transition-all duration-300 cursor-pointer"
            style={{
              background: isDark ? "rgba(6, 182, 212, 0.2)" : "rgba(6, 182, 212, 0.1)",
              borderColor: isDark ? "rgba(34, 211, 238, 0.4)" : "rgba(6, 182, 212, 0.3)",
              color: isDark ? "#67e8f9" : "#06b6d4"
            }}
          >
            Tailwind
          </span>
        </div>

        <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-6">
          <Link 
            to="/portfolio"
            className="px-6 py-3 rounded-xl text-white font-semibold shadow-md transition-all duration-300 hover:scale-105 text-center"
            style={{ background: "linear-gradient(135deg, #06b6d4, #7c3aed)" }}
          >
            Projects 🚀
          </Link>
          <Link 
            to="/contact"
            className="px-6 py-3 rounded-xl font-semibold shadow-md transition-all duration-300 hover:scale-105 text-center"
            style={{
              border: `2px solid ${isDark ? "#a78bfa" : "#7c3aed"}`,
              color: isDark ? "#a78bfa" : "#7c3aed",
              background: isDark ? "rgba(124, 58, 237, 0.1)" : "rgba(124, 58, 237, 0.05)"
            }}
          >
            Contact 📩
          </Link>
        </div>
      </div>

      <div className={`flex-1 mb-8 lg:mt-0 flex justify-center transition-all duration-1000 delay-500 ${
        isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
      }`}>
        <img
          src={profilePic}
          alt="Ram Kumar Yadav"
          className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 xl:w-80 xl:h-80 rounded-full object-cover hover:scale-105 transition-transform duration-500"
          style={{
            filter: isDark 
              ? "drop-shadow(0 0 30px rgba(168,85,247,0.6))" 
              : "drop-shadow(0 0 20px rgba(59,130,246,0.4))"
          }}
        />
      </div>
    </section>
  );
};

export default Body;