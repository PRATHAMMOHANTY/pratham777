
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "FINANCE - HUB",
      description: "A .NET 6 Web API for managing savings plans and user plan applications, with features such as JWT authentication, Entity Framework Core integration, and Swagger documentation. It includes services like FeedbackService, SavingsPlanService, and UserApplicationService.",
      technologies: [".NET 6", "Web API", "JWT", "Entity Framework", "Swagger"],
      color: "from-blue-500 to-purple-500"
    },
    {
      title: "Flood Detection & Water Estimation",
      description: "Developing a system for flood area discovery and water estimation in upstanding imagery using deep learning stems from the critical need to enhance disaster response, alleviate the impact of cataracts, and ameliorate overall public safety.",
      technologies: ["Python", "Deep Learning", "Streamlit", "Cloud"],
      color: "from-green-500 to-teal-500"
    },
    {
      title: "Blood Donation Prediction",
      description: "Utilized Python for data pre-processing, feature engineering, model development and streaming the result in a web page using flask framework and employed algorithms such as Random Forest and Logistic Regression.",
      technologies: ["Python", "Flask", "ML", "HTML", "CSS"],
      color: "from-orange-500 to-red-500"
    },
    {
      title: "E-Voting System",
      description: "This project facilitated secure online voting processes incorporating user-friendly interfaces (HTML/CSS), interactive functionalities (JavaScript), and server-side processing (PHP/SQL) for data storage and management.",
      technologies: ["HTML", "CSS", "JavaScript", "PHP", "SQL"],
      color: "from-pink-500 to-violet-500"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Featured Projects</h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            A showcase of my technical projects and innovative solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-slate-900 rounded-lg p-8 border border-slate-700 hover:border-slate-600 transition-all duration-300 hover:transform hover:scale-105">
              <div className="space-y-6">
                <div>
                  <h3 className={`text-xl font-bold bg-gradient-to-r ${project.color} bg-clip-text text-transparent mb-3`}>
                    {project.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {project.description}
                  </p>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-3 py-1 bg-slate-700 text-gray-300 rounded-full text-sm"
                    >
                      {tech}
                    </span>
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

export default Projects;
