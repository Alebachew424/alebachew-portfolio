import React, { useEffect, useState } from 'react'

const skills = [
  { name: 'JavaScript', level: 95, icon: 'fab fa-js-square', color: '#F7DF1E' },
  { name: 'TypeScript', level: 90, icon: 'fab fa-js-square', color: '#3178C6' },
  { name: 'React', level: 92, icon: 'fab fa-react', color: '#61DAFB' },
  { name: 'Angular', level: 88, icon: 'fab fa-angular', color: '#DD0031' },
  { name: 'Node.js', level: 85, icon: 'fab fa-node-js', color: '#339933' },
  { name: 'Python', level: 80, icon: 'fab fa-python', color: '#3776AB' },
  { name: 'AWS', level: 75, icon: 'fab fa-aws', color: '#FF9900' },
  { name: 'Docker', level: 70, icon: 'fab fa-docker', color: '#2496ED' },
  { name: 'MongoDB', level: 85, icon: 'fas fa-database', color: '#47A248' },
  { name: 'TensorFlow', level: 75, icon: 'fas fa-brain', color: '#ff6f00' },
  { name: 'PyTorch', level: 70, icon: 'fas fa-brain', color: '#ee4c2c' },
  { name: 'Scikit-learn', level: 78, icon: 'fas fa-robot', color: '#0ea5e9' }
]

export default function Skills() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) setIsVisible(true)
      })
    }, { threshold: 0.3 })

    const el = document.getElementById('skills')
    if (el) observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="skills" className="section-padding bg-white">
      <div className="container-padding">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            My <span className="text-gradient">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-accent-500 rounded mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Here are the technologies and tools I work with to create amazing digital experiences
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {skills.map((skill) => (
            <div key={skill.name} className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-105">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center text-white text-xl mr-4" style={{ backgroundColor: skill.color }}>
                  <i className={skill.icon}></i>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">{skill.name}</h3>
                  <div className="text-sm text-gray-600">{skill.level}% Proficiency</div>
                </div>
              </div>
              <div className="bg-gray-200 rounded-full h-2">
                <div
                  className="skill-bar h-2 rounded-full transition-all duration-1000 ease-out"
                  style={{ width: isVisible ? `${skill.level}%` : 0, backgroundColor: skill.color }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="fas fa-code text-2xl text-blue-600"></i>
            </div>
            <h3 className="text-lg font-semibold mb-2">Frontend</h3>
            <p className="text-gray-600 text-sm">React, Angular, Vue.js, TypeScript</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="fas fa-server text-2xl text-green-600"></i>
            </div>
            <h3 className="text-lg font-semibold mb-2">Backend</h3>
            <p className="text-gray-600 text-sm">Node.js, Python, Express, MYSQL</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="fas fa-cloud text-2xl text-purple-600"></i>
            </div>
            <h3 className="text-lg font-semibold mb-2">Cloud</h3>
            <p className="text-gray-600 text-sm">AWS, Docker, Kubernetes, CI/CD</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="fas fa-mobile-alt text-2xl text-orange-600"></i>
            </div>
            <h3 className="text-lg font-semibold mb-2">Mobile</h3>
            <p className="text-gray-600 text-sm">React Native, Flutter, PWA</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="fas fa-brain text-2xl text-pink-600"></i>
            </div>
            <h3 className="text-lg font-semibold mb-2">AI / ML</h3>
            <p className="text-gray-600 text-sm">TensorFlow, PyTorch, scikit-learn, NLP</p>
          </div>
        </div>
      </div>
    </section>
  )
}

