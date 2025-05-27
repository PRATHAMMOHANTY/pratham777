
const Hero = () => {
  return (
    <section id="home" className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-white space-y-6">
            <p className="text-sm uppercase tracking-wider text-gray-400 font-medium">
              WELCOME TO MY WORLD
            </p>
            <div className="space-y-2">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
                Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-violet-500">Pratham Mohanty</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300">a Developer.</p>
            </div>
            <p className="text-gray-400 text-lg max-w-2xl leading-relaxed">
              I use technology as a powerful tool to simplify experiences and build innovative solutions. 
              I'm passionate about creating scalable web applications and contributing to meaningful projects 
              that make a difference in the digital world.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button 
                onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-3 bg-gradient-to-r from-pink-500 to-violet-500 text-white rounded-lg font-medium hover:shadow-lg hover:shadow-pink-500/25 transition-all duration-300"
              >
                View My Work
              </button>
              <button 
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-3 border border-gray-600 text-white rounded-lg font-medium hover:bg-gray-800 transition-all duration-300"
              >
                Get In Touch
              </button>
            </div>
          </div>
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 bg-gradient-to-r from-pink-500 to-violet-500 rounded-full opacity-20 blur-3xl absolute inset-0"></div>
              <div className="relative z-10 w-80 h-80 rounded-full overflow-hidden border-4 border-gray-700 shadow-2xl">
                <img 
                  src="/lovable-uploads/78c04504-730e-4a34-8692-8d8e22ee5f94.png" 
                  alt="Pratham Mohanty" 
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
