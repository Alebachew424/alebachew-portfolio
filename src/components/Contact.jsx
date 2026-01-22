import React, { useState } from 'react'

import emailjs from '@emailjs/browser'

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [touched, setTouched] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)

  const onChange = (e) => {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: value }))
  }

  const onBlur = (e) => {
    const { name } = e.target
    setTouched((t) => ({ ...t, [name]: true }))
  }

  const isEmpty = (v) => !v || v.trim() === ''
  const isEmail = (v) => /\S+@\S+\.\S+/.test(v)

  const errors = {
    name: isEmpty(form.name),
    email: isEmpty(form.email) || !isEmail(form.email),
    subject: isEmpty(form.subject),
    message: isEmpty(form.message)
  }

  const onSubmit = (e) => {
    e.preventDefault()
    const anyError = Object.values(errors).some(Boolean)
    if (anyError) {
      setTouched({ name: true, email: true, subject: true, message: true })
      return
    }
    setIsSubmitting(true)

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

    if (serviceId && templateId && publicKey) {
      emailjs.send(
        serviceId,
        templateId,
        {
          from_name: form.name,
          reply_to: form.email,
          subject: form.subject,
          message: form.message,
          to_email: 'alebachewbisett@gmail.com'
        },
        { publicKey }
      ).then(() => {
        setIsSubmitting(false)
        setShowSuccess(true)
        setForm({ name: '', email: '', subject: '', message: '' })
        setTouched({})
        setTimeout(() => setShowSuccess(false), 5000)
      }).catch(() => {
        const mailto = `mailto:alebachewbisett@gmail.com?subject=${encodeURIComponent(form.subject)}&body=${encodeURIComponent(`From: ${form.name} <${form.email}>\n\n${form.message}`)}`
        window.location.href = mailto
        setIsSubmitting(false)
      })
    } else {
      const mailto = `mailto:alebachewbisett@gmail.com?subject=${encodeURIComponent(form.subject)}&body=${encodeURIComponent(`From: ${form.name} <${form.email}>\n\n${form.message}`)}`
      window.location.href = mailto
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container-padding">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-accent-500 rounded mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Ready to start your next project? Let's discuss how we can work together to bring your ideas to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-8">Let's Connect</h3>
            <div className="space-y-6 mb-12">
              <div className="flex items-center group">
                <div className="w-12 h-12 bg-primary-500 rounded-lg flex items-center justify-center text-white mr-4 group-hover:bg-primary-600 transition-colors duration-300">
                  <i className="fas fa-envelope"></i>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Email</h4>
                  <p className="text-gray-600">alebachewbisett@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center group">
                <div className="w-12 h-12 bg-primary-500 rounded-lg flex items-center justify-center text-white mr-4 group-hover:bg-primary-600 transition-colors duration-300">
                  <i className="fas fa-phone"></i>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Phone</h4>
                  <p className="text-gray-600">+(251) 948-903640</p>
                </div>
              </div>

              <div className="flex items-center group">
                <div className="w-12 h-12 bg-primary-500 rounded-lg flex items-center justify-center text-white mr-4 group-hover:bg-primary-600 transition-colors duration-300">
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Location</h4>
                  <p className="text-gray-600">Ethiopia , Addis Ababa</p>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-gray-800 mb-4">Follow Me</h4>
              <div className="flex space-x-4">
                <a href="https://www.linkedin.com/in/alebachew-biset-b85806331/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-primary-500 hover:text-white transition-all duration-300" aria-label="LinkedIn">
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a href="https://github.com/Alebachew424/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-primary-500 hover:text-white transition-all duration-300" aria-label="GitHub">
                  <i className="fab fa-github"></i>
                </a>
                <a href="#" className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-primary-500 hover:text-white transition-all duration-300">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="mailto:alebachewbisett@gmail.com" className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-primary-500 hover:text-white transition-all duration-300" aria-label="Email">
                  <i className="fab fa-dribbble"></i>
                </a>
              </div>
            </div>
          </div>

          <div>
            <form onSubmit={onSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={onChange}
                    onBlur={onBlur}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                    placeholder="Your Name"
                  />
                  {touched.name && errors.name && (
                    <div className="text-red-500 text-sm mt-1">Name is required</div>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={onChange}
                    onBlur={onBlur}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                    placeholder="alebachewbisett@gmail.com"
                  />
                  {touched.email && errors.email && (
                    <div className="text-red-500 text-sm mt-1">Please enter a valid email</div>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Subject *</label>
                <input
                  type="text"
                  name="subject"
                  value={form.subject}
                  onChange={onChange}
                  onBlur={onBlur}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                  placeholder="Project Discussion"
                />
                {touched.subject && errors.subject && (
                  <div className="text-red-500 text-sm mt-1">Subject is required</div>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Message *</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={onChange}
                  onBlur={onBlur}
                  rows="6"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 resize-none"
                  placeholder="Tell me about your project..."
                ></textarea>
                {touched.message && errors.message && (
                  <div className="text-red-500 text-sm mt-1">Message is required</div>
                )}
              </div>

              <button
                type="submit"
                className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={Object.values(errors).some(Boolean) || isSubmitting}
              >
                {!isSubmitting ? 'Send Message' : (
                  <span className="flex items-center justify-center">
                    <i className="fas fa-spinner fa-spin mr-2"></i>
                    Sending...
                  </span>
                )}
              </button>
            </form>

            {showSuccess && (
              <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg text-green-700">
                <i className="fas fa-check-circle mr-2"></i>
                Thank you! Your message has been sent successfully.
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

