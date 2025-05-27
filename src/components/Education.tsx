
const Education = () => {
  return (
    <section id="education" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Education</h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            My academic background and achievements
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-slate-800 rounded-lg p-8 border border-slate-700">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">Vellore Institute Of Technology</h3>
                <p className="text-lg text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-violet-500 font-semibold">
                  Bachelor Of Technology in Computer Science
                </p>
              </div>
              <div className="mt-4 md:mt-0 text-right">
                <span className="inline-block px-4 py-2 bg-slate-700 text-gray-300 rounded-full text-sm font-medium mb-2">
                  Sept 2020 – May 2024
                </span>
                <p className="text-lg font-semibold text-green-400">GPA: 8.83</p>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <h4 className="text-lg font-semibold text-white mb-3">Coursework:</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <p className="text-gray-300 flex items-center">
                      <span className="w-2 h-2 bg-pink-500 rounded-full mr-3"></span>
                      Data Structures & Algorithms
                    </p>
                    <p className="text-gray-300 flex items-center">
                      <span className="w-2 h-2 bg-pink-500 rounded-full mr-3"></span>
                      Object Oriented Programming
                    </p>
                    <p className="text-gray-300 flex items-center">
                      <span className="w-2 h-2 bg-pink-500 rounded-full mr-3"></span>
                      Operating Systems
                    </p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-gray-300 flex items-center">
                      <span className="w-2 h-2 bg-violet-500 rounded-full mr-3"></span>
                      Database Management
                    </p>
                    <p className="text-gray-300 flex items-center">
                      <span className="w-2 h-2 bg-violet-500 rounded-full mr-3"></span>
                      Computer Networks
                    </p>
                    <p className="text-gray-300 flex items-center">
                      <span className="w-2 h-2 bg-violet-500 rounded-full mr-3"></span>
                      Machine Learning
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
