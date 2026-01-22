import React, { useEffect, useState } from 'react'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.pageYOffset > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const saved = localStorage.getItem('theme')
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
    const enableDark = saved ? saved === 'dark' : prefersDark
    setIsDark(enableDark)
    document.documentElement.classList.toggle('dark', enableDark)
  }, [])

  const headerClass =
    `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ` +
    (isScrolled ? 'bg-white shadow-lg' : 'bg-transparent')

  const mobileToggleClass = isScrolled ? 'text-gray-800 dark:text-gray-200' : 'text-white'
  const mobileNavMaxClass = isMobileMenuOpen ? 'max-h-96' : 'max-h-0'

  const toggleMobileMenu = () => setIsMobileMenuOpen(v => !v)
  const closeMobileMenu = () => setIsMobileMenuOpen(false)
  const toggleTheme = () => {
    const next = !isDark
    setIsDark(next)
    document.documentElement.classList.toggle('dark', next)
    localStorage.setItem('theme', next ? 'dark' : 'light')
  }

  return (
    <header className={headerClass}>
      <a href="#main" className="skip-link">Skip to content</a>
      <nav className="container-padding" aria-label="Main">
        <div className="flex items-center justify-between h-16">
          <div className="text-2xl font-bold">
            <span className="text-gradient">AL</span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="nav-link" aria-label="Go to Home section">Home</a>
            <a href="#about" className="nav-link" aria-label="Go to About section">About</a>
            <a href="#skills" className="nav-link" aria-label="Go to Skills section">Skills</a>
            <a href="#projects" className="nav-link" aria-label="Go to Projects section">Projects</a>
            <a href="#contact" className="nav-link" aria-label="Go to Contact section">Contact</a>
            <a href="#contact" className="btn-primary" aria-label="Open contact form">Get In Touch</a>
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="ml-4 text-xl nav-link"
              title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {isDark ? <i className="fas fa-sun"></i> : <i className="fas fa-moon"></i>}
            </button>
          </div>

          <button
            className={`md:hidden text-2xl ${mobileToggleClass}`}
            onClick={toggleMobileMenu}
          >
            {!isMobileMenuOpen ? <i className="fas fa-bars"></i> : <i className="fas fa-times"></i>}
          </button>
        </div>

        <div className={`md:hidden overflow-hidden transition-all duration-300 ${mobileNavMaxClass}`}>
          <div className="py-4 space-y-4 bg-white rounded-lg mt-2 shadow-lg">
            <a href="#home" className="mobile-nav-link" onClick={closeMobileMenu}>Home</a>
            <a href="#about" className="mobile-nav-link" onClick={closeMobileMenu}>About</a>
            <a href="#skills" className="mobile-nav-link" onClick={closeMobileMenu}>Skills</a>
            <a href="#projects" className="mobile-nav-link" onClick={closeMobileMenu}>Projects</a>
            <a href="#contact" className="mobile-nav-link" onClick={closeMobileMenu}>Contact</a>
            <button className="mobile-nav-link" onClick={() => { toggleTheme(); closeMobileMenu() }}>
              {isDark ? 'Light Mode' : 'Dark Mode'}
            </button>
          </div>
        </div>
      </nav>
    </header>
  )
}

