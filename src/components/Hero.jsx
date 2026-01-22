import React from 'react'

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center gradient-bg relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-20 h-20 bg-white rounded-full animate-bounce-gentle"></div>
        <div className="absolute top-1/4 right-20 w-16 h-16 bg-white rounded-full animate-bounce-gentle" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute bottom-1/4 left-1/4 w-12 h-12 bg-white rounded-full animate-bounce-gentle" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container-padding relative z-10">
        <div className="max-w-4xl">
          <div className="text-white animate-fade-in">
            <p className="text-lg md:text-xl mb-4 opacity-90">Hello, I'm</p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Alebachew Biset
            </h1>
            <div className="flex flex-wrap items-center gap-3 mb-8">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-light opacity-90">
                Full Stack Developer & AI Engineer
              </h2>
              <span className="badge badge-success">
                Open to Work
              </span>
            </div>
            <p className="text-lg md:text-xl mb-12 max-w-2xl opacity-90 leading-relaxed">
              I create exceptional digital experiences through modern web technologies,
              clean code, and innovative solutions that drive business growth.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a href="#projects" className="btn-primary bg-white text-gray-800 hover:bg-gray-100">
                View My Work
              </a>
              <a href="#contact" className="btn-secondary text-white border-white hover:bg-white hover:text-gray-800">
                Get In Touch
              </a>
            </div>

            <div className="flex space-x-6">
              <a href="https://www.linkedin.com/in/alebachew-biset-b85806331/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-200 transition-colors duration-300 text-2xl" aria-label="LinkedIn">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="https://github.com/Alebachew424/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-200 transition-colors duration-300 text-2xl" aria-label="GitHub">
                <i className="fab fa-github"></i>
              </a>
              <a href="#" className="text-white hover:text-gray-200 transition-colors duration-300 text-2xl">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="mailto:alebachewbisett@gmail.com" className="text-white hover:text-gray-200 transition-colors duration-300 text-2xl" aria-label="Email">
                <i className="fas fa-envelope"></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}

