export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
      {/* Animated background blobs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-purple-600/30 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-600/30 rounded-full blur-3xl animate-pulse animation-delay-2000" />

      {/* Content */}
      <div className="relative z-10 text-center max-w-3xl">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
            Welcome to Emerson
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
          Elevate your business with our premium services and innovative solutions. 
          Transform your vision into reality.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-lg font-bold rounded-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
            Get Started
          </button>
          <button className="px-8 py-4 border-2 border-purple-400 text-purple-400 text-lg font-bold rounded-lg hover:bg-purple-400/10 transition-all duration-300">
            Learn More
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 mt-16 pt-16 border-t border-slate-700">
          <div>
            <div className="text-3xl font-bold text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text">
              500+
            </div>
            <p className="text-gray-400 mt-2">Happy Clients</p>
          </div>
          <div>
            <div className="text-3xl font-bold text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text">
              10+
            </div>
            <p className="text-gray-400 mt-2">Years Experience</p>
          </div>
          <div>
            <div className="text-3xl font-bold text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text">
              98%
            </div>
            <p className="text-gray-400 mt-2">Success Rate</p>
          </div>
        </div>
      </div>
    </section>
  );
}
