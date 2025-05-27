
const Experience = () => {
  const experiences = [
    {
      title: "Full Stack Developer",
      company: "LTIMINDTREE",
      period: "February 2025 – Present",
      description: [
        "Enrolled in .NET Full Stack Development with experience in building end-end web applications working with real-world projects",
        "Proficient in ASP.NET Core, C#, Entity Framework, SQL Server, HTML, JavaScript, and Angular",
        "Contributed to the development and deployment of scalable web solutions, focusing on both front-end and back-end integration",
        "Collaborated in agile teams, participating in sprint planning, code reviews, and continuous integration workflows"
      ],
      color: "from-blue-500 to-purple-500"
    },
    {
      title: "Frontend Developer Intern", 
      company: "Guidizy",
      period: "January 2024 – July 2024",
      description: [
        "As a Front-End Developer Intern at Guidizy, I gained hands-on experience in building dynamic and responsive user interfaces using React.js and TypeScript",
        "I collaborated with the backend team, working with GraphQL and MySQL to integrate and optimize data queries"
      ],
      color: "from-green-500 to-teal-500"
    },
    {
      title: "Applied Data Science",
      company: "Smartbridge",
      period: "May 2023 – July 2023", 
      description: [
        "Gained hands-on experience with diverse data science concepts, tools, and techniques",
        "Including data collection, cleaning, exploratory data analysis, statistical modeling, machine learning, and data visualization",
        "Developed a comprehensive understanding of the field"
      ],
      color: "from-orange-500 to-red-500"
    }
  ];

  return (
    <section id="experience" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Work Experience</h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            My professional journey and key contributions in various roles
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="relative">
              <div className="bg-slate-800 rounded-lg p-8 border border-slate-700 hover:border-slate-600 transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-2">{exp.title}</h3>
                    <p className={`text-lg font-semibold bg-gradient-to-r ${exp.color} bg-clip-text text-transparent`}>
                      {exp.company}
                    </p>
                  </div>
                  <div className="mt-2 md:mt-0">
                    <span className="inline-block px-4 py-2 bg-slate-700 text-gray-300 rounded-full text-sm font-medium">
                      {exp.period}
                    </span>
                  </div>
                </div>
                <div className="space-y-3">
                  {exp.description.map((desc, descIndex) => (
                    <p key={descIndex} className="text-gray-300 leading-relaxed flex items-start">
                      <span className="text-pink-500 mr-3 mt-2">•</span>
                      <span>{desc}</span>
                    </p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
