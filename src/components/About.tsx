
const About = () => {
  const skills = [
    { category: "Languages", items: ["Java", "SQL", "JavaScript", "C#", "Angular", "NoSQL", "ReactJS", "Python"] },
    { category: "Technologies", items: ["ASP.NET Core", "GCP", "Kubernetes", "MongoDB", "MySQL", "WorkBench", "Web Technologies", "PostMan", "Git"] },
    { category: "Frameworks", items: [".NET", "Entity Framework", "React", "Angular", "Flask"] },
    { category: "Cloud & Tools", items: ["Google Cloud Platform", "Kubernetes", "Git", "Swagger", "Entity Framework"] }
  ];

  return (
    <section id="about" className="py-20 bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Passionate Full Stack Developer with expertise in modern web technologies and cloud solutions
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-white space-y-6">
            <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-violet-500">
              My Journey
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Pursued my Bachelor of Technology in Computer Science at Vellore Institute of Technology, 
              I'm passionate about building scalable web applications and solving complex problems through code.
            </p>
            <p className="text-gray-300 leading-relaxed">
              With experience as a Full Stack Developer and Frontend Developer Intern, I've worked with diverse 
              technologies including .NET, React, Angular, and cloud platforms. I believe in continuous learning 
              and staying updated with the latest technological trends.
            </p>
            <div className="pt-4">
              <h4 className="text-lg font-semibold mb-3 text-white">Achievements</h4>
              <ul className="space-y-2 text-gray-300">
                <li>• Google Cloud Certified Associate Cloud Engineer</li>
                <li>• Solved 500+ programming problems on platforms like HackerRank, LeetCode</li>
                <li>• GPA: 8.83 in Computer Science</li>
              </ul>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white">Technical Skills</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {skills.map((skillGroup, index) => (
                <div key={index} className="bg-slate-700 p-6 rounded-lg">
                  <h4 className="text-lg font-semibold text-white mb-3">{skillGroup.category}</h4>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skill, skillIndex) => (
                      <span 
                        key={skillIndex}
                        className="px-3 py-1 bg-slate-600 text-gray-300 rounded-full text-sm hover:bg-gradient-to-r hover:from-pink-500 hover:to-violet-500 hover:text-white transition-all duration-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
