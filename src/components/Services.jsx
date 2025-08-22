import { useOutletContext } from "react-router-dom";

const Services = () => {
  const { isDark } = useOutletContext();
  
  const services = [
    {
      icon: "🎨",
      title: "UI/UX Design",
      description: "Creating intuitive and beautiful user interfaces with modern design principles",
      features: ["Wireframing", "Prototyping", "User Research", "Design Systems"]
    },
    {
      icon: "💻",
      title: "Frontend Development",
      description: "Building responsive and interactive web applications using latest technologies",
      features: ["React.js", "JavaScript", "Tailwind CSS", "Responsive Design"]
    },
    {
      icon: "⚙️",
      title: "Backend Development",
      description: "Developing robust server-side applications and APIs for seamless functionality",
      features: ["Node.js", "Express.js", "MongoDB", "REST APIs"]
    },
    {
      icon: "🚀",
      title: "Full Stack Solutions",
      description: "End-to-end web development from concept to deployment",
      features: ["MERN Stack", "Database Design", "Deployment", "Maintenance"]
    }
  ];

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
            My Services
          </h1>
          <p className="text-base sm:text-lg max-w-2xl mx-auto" style={{color: isDark ? '#d1d5db' : '#6b7280'}}>
            Comprehensive web development services to bring your ideas to life
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl backdrop-blur-sm border hover:scale-105 transition-all duration-300 group"
              style={{
                background: isDark ? 'rgba(30, 27, 75, 0.6)' : 'rgba(255, 255, 255, 0.8)',
                borderColor: isDark ? 'rgba(168, 85, 247, 0.2)' : 'rgba(59, 130, 246, 0.2)'
              }}
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-3" style={{color: isDark ? 'white' : '#111827'}}>
                {service.title}
              </h3>
              <p className="mb-4 text-sm" style={{color: isDark ? '#d1d5db' : '#6b7280'}}>
                {service.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {service.features.map((feature, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 border rounded-full text-xs"
                    style={{
                      background: isDark ? 'rgba(124, 58, 237, 0.2)' : 'rgba(59, 130, 246, 0.1)',
                      borderColor: isDark ? '#7c3aed' : '#3b82f6',
                      color: isDark ? '#a78bfa' : '#3b82f6'
                    }}
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div 
          className="text-center p-8 rounded-2xl backdrop-blur-sm border"
          style={{
            background: isDark ? 'rgba(30, 27, 75, 0.5)' : 'rgba(255, 255, 255, 0.7)',
            borderColor: isDark ? 'rgba(168, 85, 247, 0.2)' : 'rgba(59, 130, 246, 0.2)'
          }}
        >
          <h2 className="text-2xl font-bold mb-4" style={{color: isDark ? 'white' : '#111827'}}>
            Ready to Start Your Project?
          </h2>
          <p className="mb-6" style={{color: isDark ? '#d1d5db' : '#6b7280'}}>
            Let's discuss how I can help bring your vision to reality
          </p>
          <button 
            className="px-8 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 text-white"
            style={{background: 'linear-gradient(135deg, #06b6d4, #7c3aed)'}}
          >
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;