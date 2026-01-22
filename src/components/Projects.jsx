import React, { useState } from 'react'

const filters = ['All', 'Web App', 'Mobile', 'E-commerce', 'Dashboard', 'Streaming', 'Community', 'Machine Learning']

const initialProjects = [
  {
    id: 1,
    title: 'E-commerce Platform',
    description:
      'A full-stack e-commerce solution with React, Node.js, and Stripe integration. Features include product catalog, shopping cart, payment processing.',
    image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    liveUrl: '#',
    githubUrl: '#',
    featured: true,
    category: 'E-commerce'
  },
  {
    id: 2,
    title: 'Task Management Dashboard',
    description:
      'A comprehensive dashboard for project management with real-time updates, team collaboration, and advanced analytics.',
    image: 'https://images.pexels.com/photos/7681091/pexels-photo-7681091.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['Angular', 'TypeScript', 'Firebase', 'Chart.js'],
    liveUrl: '#',
    githubUrl: '#',
    featured: true,
    category: 'Dashboard'
  },
  {
    id: 3,
    title: 'Mobile Banking App',
    description:
      'A secure mobile banking application with biometric authentication, transaction history, and real-time notifications.',
    image: 'https://images.pexels.com/photos/4968391/pexels-photo-4968391.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['React Native', 'Node.js', 'PostgreSQL', 'JWT'],
    liveUrl: '#',
    githubUrl: '#',
    featured: false,
    category: 'Mobile'
  },
  {
    id: 4,
    title: 'Social Media Analytics',
    description:
      'An analytics platform for social media management with data visualization, scheduling, and performance tracking.',
    image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['Vue.js', 'Python', 'AWS'],
    liveUrl: '#',
    githubUrl: '#',
    featured: true,
    category: 'Dashboard'
  },
  {
    id: 5,
    title: 'MLM Commission Based System',
    description:
      'Progressive Web MLM App Commission Based System and payment integration.',
    image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg',
    technologies: ['Angular', 'ASP.NET', 'MYSQL'],
    liveUrl: '#',
    githubUrl: '#',
    featured: false,
    category: 'Web App'
  },
  {
    id: 6,
    title: 'Learning Management System',
    description:
      'An educational platform with course management, video streaming, progress tracking, and interactive quizzes.',
    image: 'https://images.pexels.com/photos/4144222/pexels-photo-4144222.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['React', 'PHP', 'MySQL'],
    liveUrl: '#',
    githubUrl: '#',
    featured: true,
    category: 'Web App'
  },
  {
    id: 7,
    title: 'Netflix Streaming Clone',
    description:
      'A Netflix-style streaming UI with dynamic categories, carousels, and movie details powered by TMDB.',
    image: 'https://images.pexels.com/photos/5721900/pexels-photo-5721900.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['React', 'Tailwind', 'TMDB API'],
    liveUrl: '#',
    githubUrl: '#',
    featured: true,
    category: 'Streaming'
  },
  {
    id: 8,
    title: 'Amazon E-commerce',
    description:
      'Full e-commerce experience with product pages, cart, checkout, and payments.',
    image: 'https://images.pexels.com/photos/5632404/pexels-photo-5632404.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['React', 'Node.js', 'Stripe', 'MongoDB'],
    liveUrl: '#',
    githubUrl: '#',
    featured: true,
    category: 'E-commerce'
  },
  {
    id: 9,
    title: 'Evangad Community Forum',
    description:
      'Community forum with threads, replies, user profiles, and moderation tools.',
    image: 'https://images.pexels.com/photos/3184435/pexels-photo-3184435.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['React', 'Express', 'MongoDB'],
    liveUrl: '#',
    githubUrl: '#',
    featured: false,
    category: 'Community'
  },
  {
    id: 10,
    title: 'Bank Fraud Detection',
    description:
      'Machine learning pipeline to detect fraudulent transactions with feature engineering, class imbalance handling, and robust evaluation.',
    image: 'https://images.pexels.com/photos/4968396/pexels-photo-4968396.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['Python', 'scikit-learn', 'Pandas', 'SMOTE'],
    liveUrl: '#',
    githubUrl: '#',
    featured: true,
    category: 'Machine Learning'
  },
  {
    id: 11,
    title: 'Credit Score Modelling',
    description:
      'Predictive modelling for credit scoring using logistic regression and gradient boosting with model explainability.',
    image: 'https://images.pexels.com/photos/6693668/pexels-photo-6693668.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['Python', 'XGBoost', 'scikit-learn', 'SHAP'],
    liveUrl: '#',
    githubUrl: '#',
    featured: false,
    category: 'Machine Learning'
  },
  {
    id: 12,
    title: 'Intelligent Compliance Chatbot',
    description:
      'NLP-based chatbot that provides compliance guidance using intent classification, entity extraction, and retrieval-augmented responses.',
    image: 'https://images.pexels.com/photos/8439654/pexels-photo-8439654.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['Python', 'TensorFlow', 'spaCy', 'Rasa'],
    liveUrl: '#',
    githubUrl: '#',
    featured: true,
    category: 'Machine Learning'
  }
]

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All')
  const [hasMoreProjects, setHasMoreProjects] = useState(true)
  const projects = initialProjects

  const filteredProjects = activeFilter === 'All' ? projects : projects.filter(p => p.category === activeFilter)

  const setFilter = (f) => setActiveFilter(f)
  const loadMoreProjects = () => setHasMoreProjects(false)

  return (
    <section id="projects" className="section-padding bg-gray-50">
      <div className="container-padding">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-accent-500 rounded mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and experience
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => {
            const isActive = activeFilter === filter
            const btnClasses = [
              'px-6 py-2 rounded-full border transition-all duration-300',
              isActive ? 'bg-primary-500 text-white border-primary-500' : 'text-primary-500 border-gray-300 hover:border-primary-500'
            ].join(' ')
            return (
              <button key={filter} className={btnClasses} onClick={() => setFilter(filter)}>
                {filter}
              </button>
            )
          })}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className="project-card bg-white rounded-xl overflow-hidden shadow-sm">
              <div className="relative">
                <img src={project.image} alt={project.title} className="w-full h-48 object-cover" loading="lazy" />
                {project.featured && (
                  <span className="absolute top-4 right-4 bg-accent-500 text-white px-3 py-1 rounded-full text-sm">
                    Featured
                  </span>
                )}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4 line-clamp-3">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, idx) => (
                    <span key={idx} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a href={project.liveUrl} className="btn-secondary">Live Demo</a>
                  <a href={project.githubUrl} className="btn-primary">GitHub</a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {hasMoreProjects && (
          <div className="text-center mt-12">
            <button className="btn-primary" onClick={loadMoreProjects}>
              Load More Projects
            </button>
          </div>
        )}
      </div>
    </section>
  )
}
