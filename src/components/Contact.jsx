import { Link, useOutletContext } from "react-router-dom";

const Contact = () => {
  const { isDark } = useOutletContext();

  return (
    <section 
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 py-12 pt-16 sm:pt-20 transition-all duration-300"
      style={{
        background: isDark ? 'linear-gradient(135deg, #0f0f23, #1e1b4b, #7c3aed)' : 'linear-gradient(135deg, #ffffff, #f3f4f6, #ddd6fe)',
        color: isDark ? 'white' : '#111827'
      }}
    >
      <div className="max-w-6xl w-full grid lg:grid-cols-2 gap-8 sm:gap-12">
        <div className="space-y-6 sm:space-y-8 text-center lg:text-left">
          <div className="space-y-3 sm:space-y-4">
            <h2 
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold"
              style={{background: 'linear-gradient(135deg, #06b6d4, #7c3aed, #ec4899)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}
            >
              Get in Touch
            </h2>
            <p className="leading-relaxed text-base sm:text-lg" style={{color: isDark ? '#d1d5db' : '#6b7280'}}>
              I'd love to hear from you! Whether you have a project idea,
              collaboration request, or just want to say hi, feel free to drop me
              a message.
            </p>
          </div>

          <div 
            className="p-4 sm:p-6 rounded-2xl backdrop-blur-sm border space-y-3 sm:space-y-4"
            style={{
              background: isDark ? 'rgba(30, 27, 75, 0.5)' : 'rgba(255, 255, 255, 0.7)',
              borderColor: isDark ? 'rgba(168, 85, 247, 0.2)' : 'rgba(59, 130, 246, 0.2)'
            }}
          >
            <div className="flex items-center gap-3 sm:gap-4 text-base sm:text-lg">
              <div 
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center text-sm sm:text-base"
                style={{background: 'linear-gradient(135deg, #06b6d4, #7c3aed)'}}
              >
                📍
              </div>
              <span style={{color: isDark ? '#d1d5db' : '#374151'}}>Bhubaneswar</span>
            </div>
            <div className="flex items-center gap-3 sm:gap-4 text-base sm:text-lg">
              <div 
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center text-sm sm:text-base"
                style={{background: 'linear-gradient(135deg, #7c3aed, #ec4899)'}}
              >
                📧
              </div>
              <a
                href="mailto:rkramyadav2063@gmail.com"
                className="transition-colors break-all sm:break-normal"
                style={{color: isDark ? '#06b6d4' : '#3b82f6'}}
              >
                rkramyadav2063@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-3 sm:gap-4 text-base sm:text-lg">
              <div 
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center text-sm sm:text-base"
                style={{background: 'linear-gradient(135deg, #ec4899, #7c3aed)'}}
              >
                📞
              </div>
              <a
                href="tel:+919876543210"
                className="transition-colors"
                style={{color: isDark ? '#06b6d4' : '#3b82f6'}}
              >
                +91 9876543210
              </a>
            </div>
          </div>

          <div className="flex gap-3 sm:gap-4 justify-center lg:justify-start pt-4">
            {[
              {name: "Facebook", url: "https://www.facebook.com/ram.yadav09", bg: "linear-gradient(135deg, #1877f2, #42a5f5)"},
              {name: "Instagram", url: "https://instagram.com", bg: "linear-gradient(135deg, #e4405f, #f77737)"},
              {name: "GitHub", url: "https://github.com", bg: "linear-gradient(135deg, #333, #666)"},
              {name: "LinkedIn", url: "https://linkedin.com", bg: "linear-gradient(135deg, #0077b5, #00a0dc)"}
            ].map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center rounded-full shadow-lg transition-all duration-300 hover:scale-110 text-white text-lg sm:text-xl"
                style={{background: social.bg}}
              >
                {social.name[0]}
              </a>
            ))}
          </div>

          <div className="pt-4 sm:pt-6">
            <Link
              to="/"
              className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 rounded-xl text-white font-semibold shadow-xl transition-all duration-300 hover:scale-105 text-sm sm:text-base"
              style={{background: 'linear-gradient(135deg, #06b6d4, #7c3aed)'}}
            >
              ⬅ Back to Home
            </Link>
          </div>
        </div>

        <div 
          className="p-6 sm:p-8 rounded-3xl shadow-2xl backdrop-blur-sm border space-y-4 sm:space-y-6"
          style={{
            background: isDark ? 'rgba(30, 27, 75, 0.6)' : 'rgba(255, 255, 255, 0.8)',
            borderColor: isDark ? 'rgba(168, 85, 247, 0.2)' : 'rgba(59, 130, 246, 0.2)'
          }}
        >
          <h3 
            className="text-2xl sm:text-3xl font-semibold"
            style={{background: 'linear-gradient(135deg, #06b6d4, #7c3aed)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}
          >
            Send Me a Message
          </h3>
          <form className="space-y-4 sm:space-y-6">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 sm:p-4 rounded-xl border focus:outline-none focus:ring-2 transition-all text-sm sm:text-base"
              style={{
                background: isDark ? 'rgba(15, 15, 35, 0.5)' : 'rgba(255, 255, 255, 0.8)',
                color: isDark ? 'white' : '#111827',
                borderColor: isDark ? 'rgba(168, 85, 247, 0.3)' : 'rgba(59, 130, 246, 0.3)',
                focusRingColor: isDark ? '#7c3aed' : '#3b82f6'
              }}
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 sm:p-4 rounded-xl border focus:outline-none focus:ring-2 transition-all text-sm sm:text-base"
              style={{
                background: isDark ? 'rgba(15, 15, 35, 0.5)' : 'rgba(255, 255, 255, 0.8)',
                color: isDark ? 'white' : '#111827',
                borderColor: isDark ? 'rgba(168, 85, 247, 0.3)' : 'rgba(59, 130, 246, 0.3)'
              }}
            />
            <textarea
              rows="4"
              placeholder="Your Message"
              className="w-full p-3 sm:p-4 rounded-xl border focus:outline-none focus:ring-2 transition-all resize-none text-sm sm:text-base"
              style={{
                background: isDark ? 'rgba(15, 15, 35, 0.5)' : 'rgba(255, 255, 255, 0.8)',
                color: isDark ? 'white' : '#111827',
                borderColor: isDark ? 'rgba(168, 85, 247, 0.3)' : 'rgba(59, 130, 246, 0.3)'
              }}
            ></textarea>
            <button
              type="submit"
              className="w-full py-3 sm:py-4 rounded-xl text-white font-semibold shadow-xl transition-all duration-300 hover:scale-105 text-sm sm:text-base"
              style={{background: 'linear-gradient(135deg, #06b6d4, #7c3aed)'}}
            >
              Send Message ✨
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;