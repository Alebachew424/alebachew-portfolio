import React, { useEffect, useState } from 'react'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  const [showBackToTop, setShowBackToTop] = useState(false)

  useEffect(() => {
    const onScroll = () => setShowBackToTop(window.pageYOffset > 300)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-padding py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="text-2xl font-bold mb-4">
              <span className="text-gradient">Alebachew Biset</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Full Stack Developer passionate about creating exceptional digital experiences
              through modern web technologies and innovative solutions.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/in/alebachew-biset-b85806331/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:bg-primary-500 hover:text-white transition-all duration-300" aria-label="LinkedIn">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="https://github.com/Alebachew424/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:bg-primary-500 hover:text-white transition-all duration-300" aria-label="GitHub">
                <i className="fab fa-github"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:bg-primary-500 hover:text-white transition-all duration-300">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="mailto:alebachewbisett@gmail.com" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:bg-primary-500 hover:text-white transition-all duration-300" aria-label="Email">
                <i className="fas fa-envelope"></i>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-white transition-colors duration-300">Home</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-white transition-colors duration-300">About</a></li>
              <li><a href="#skills" className="text-gray-400 hover:text-white transition-colors duration-300">Skills</a></li>
              <li><a href="#projects" className="text-gray-400 hover:text-white transition-colors duration-300">Projects</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors duration-300">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Get In Touch</h3>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-center">
                <i className="fas fa-envelope mr-3 text-primary-500"></i>
                <p className="text-gray-600">alebachewbisett@gmail.com</p>
              </li>
              <li className="flex items-center">
                <i className="fas fa-phone mr-3 text-primary-500"></i>
                + (251) 9-489-03-640
              </li>
              <li className="flex items-center">
                <i className="fas fa-map-marker-alt mr-3 text-primary-500"></i>
                Addis Ababa, Ethiopia
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">© {currentYear} Alebachew Biset. All rights reserved.</p>
            <div className="flex items-center space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>

      <button
        className={`fixed bottom-8 right-8 w-12 h-12 bg-primary-500 text-white rounded-full shadow-lg hover:bg-primary-600 transition-all duration-300 hover:scale-110 z-50 ${showBackToTop ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={scrollToTop}
      >
        <i className="fas fa-arrow-up"></i>
      </button>
    </footer>
  )
}
