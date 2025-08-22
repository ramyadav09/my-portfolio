import { useOutletContext } from "react-router-dom";

const Experience = () => {
  const { isDark } = useOutletContext();
  
  const experiences = [
    {
      year: "2023 - Present",
      title: "Frontend Developer",
      company: "Tech Solutions Inc.",
      description: "Developing modern web applications using React.js and creating responsive user interfaces",
      skills: ["React", "JavaScript", "Tailwind CSS", "Git"]
    },
    {
      year: "2022 - 2023",
      title: "Junior Web Developer",
      company: "Digital Agency",
      description: "Built websites for clients and learned full-stack development fundamentals",
      skills: ["HTML", "CSS", "JavaScript", "Node.js"]
    },
    {
      year: "2021 - 2022",
      title: "Freelance Developer",
      company: "Self-Employed",
      description: "Created custom websites for small businesses and gained practical experience",
      skills: ["WordPress", "PHP", "MySQL", "Bootstrap"]
    }
  ];

  const achievements = [
    { icon: "🏆", title: "Best Project Award", desc: "University final year project" },
    { icon: "⭐", title: "5-Star Rating", desc: "Client satisfaction on Fiverr" },
    { icon: "🎓", title: "Certified Developer", desc: "React.js certification" },
    { icon: "💡", title: "Innovation Prize", desc: "Hackathon winner 2023" }
  ];

  return (
    <section 
      className="min-h-screen pt-20 px-4 sm:px-6 lg:px-8 transition-all duration-300"
      style={{
        background: isDark ? 'linear-gradient(135deg, #0f0f23, #1e1b4b, #7c3aed)' : 'linear-gradient(135deg, #ffffff, #f3f4f6, #ddd6fe)',
        color: isDark ? 'white' : '#111827'
      }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4"
            style={{background: 'linear-gradient(135deg, #06b6d4, #7c3aed, #ec4899)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}
          >
            Experience & Achievements
          </h1>
          <p className="text-base sm:text-lg max-w-2xl mx-auto" style={{color: isDark ? '#d1d5db' : '#6b7280'}}>
            My journey in web development and key milestones
          </p>
        </div>

        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8 text-center" style={{color: isDark ? '#06b6d4' : '#3b82f6'}}>
            Professional Experience
          </h2>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl backdrop-blur-sm border hover:scale-105 transition-all duration-300"
                style={{
                  background: isDark ? 'rgba(30, 27, 75, 0.6)' : 'rgba(255, 255, 255, 0.8)',
                  borderColor: isDark ? 'rgba(168, 85, 247, 0.2)' : 'rgba(59, 130, 246, 0.2)'
                }}
              >
                <div className="flex flex-col md:flex-row md:items-center gap-4">
                  <div className="md:w-1/4">
                    <span 
                      className="px-3 py-1 rounded-full text-sm font-medium"
                      style={{
                        background: isDark ? 'rgba(124, 58, 237, 0.2)' : 'rgba(59, 130, 246, 0.1)',
                        color: isDark ? '#a78bfa' : '#3b82f6'
                      }}
                    >
                      {exp.year}
                    </span>
                  </div>
                  <div className="md:w-3/4">
                    <h3 className="text-xl font-bold mb-1" style={{color: isDark ? 'white' : '#111827'}}>
                      {exp.title}
                    </h3>
                    <p className="font-medium mb-2" style={{color: isDark ? '#a78bfa' : '#7c3aed'}}>
                      {exp.company}
                    </p>
                    <p className="mb-3 text-sm" style={{color: isDark ? '#d1d5db' : '#6b7280'}}>
                      {exp.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill, i) => (
                        <span
                          key={i}
                          className="px-2 py-1 rounded-md text-xs"
                          style={{
                            background: isDark ? 'rgba(168, 85, 247, 0.2)' : 'rgba(124, 58, 237, 0.1)',
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

        <div>
          <h2 className="text-2xl font-bold mb-8 text-center" style={{color: isDark ? '#06b6d4' : '#3b82f6'}}>
            Key Achievements
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="p-4 rounded-xl backdrop-blur-sm border text-center hover:scale-105 transition-all duration-300"
                style={{
                  background: isDark ? 'rgba(30, 27, 75, 0.6)' : 'rgba(255, 255, 255, 0.8)',
                  borderColor: isDark ? 'rgba(168, 85, 247, 0.2)' : 'rgba(59, 130, 246, 0.2)'
                }}
              >
                <div className="text-3xl mb-3">{achievement.icon}</div>
                <h3 className="text-lg font-bold mb-2" style={{color: isDark ? 'white' : '#111827'}}>
                  {achievement.title}
                </h3>
                <p className="text-sm" style={{color: isDark ? '#d1d5db' : '#6b7280'}}>
                  {achievement.desc}
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