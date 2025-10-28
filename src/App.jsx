import { Suspense } from 'react'
import ErrorBoundary from './components/ErrorBoundary'
import LoadingSpinner from './components/LoadingSpinner'
import { lazyLoad } from './utils/lazyLoad.jsx'
import './App.css'

// Lazy load components
const Header = lazyLoad(() => import('./components/Header'))
const Footer = lazyLoad(() => import('./components/Footer'))
const ProjectCard = lazyLoad(() => import('./components/ProjectCard'))
const Contact = lazyLoad(() => import('./components/Contact'))
const About = lazyLoad(() => import('./pages/About'))

function App() {
  const projects = [
    {
      id: 1,
      title: 'E-commerce Platform',
      desc: 'A full-stack e-commerce solution with real-time inventory management, secure payments, and an intuitive admin dashboard. Features include user authentication, product search with filters, and order tracking.',
      tech: 'React, Node.js, Express, MongoDB, Stripe API',
      url: 'https://github.com/utti-dev/ecommerce-platform',
      image: '/images/ecommerce.png'
    },
    {
      id: 2,
      title: 'Weather Dashboard',
      desc: 'Interactive weather application providing real-time forecasts, historical data analysis, and location-based weather alerts. Includes dynamic charts and responsive design.',
      tech: 'React, Chart.js, Tailwind CSS, OpenWeather API',
      url: 'https://github.com/utti-dev/weather-dashboard',
      image: '/images/weather.png'
    },
    {
      id: 3,
      title: 'Task Management System',
      desc: 'Collaborative task management platform with real-time updates, drag-and-drop organization, and team workflow automation. Includes progress tracking and deadline notifications.',
      tech: 'React, Firebase, Redux, Material-UI',
      url: 'https://github.com/utti-dev/task-manager',
      image: '/images/tasks.png'
    }
  ]

  return (
    <ErrorBoundary>
      <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        <Header />
      <main className="container mx-auto px-4 py-16 flex-1">
        <section className="max-w-3xl">
          <h1 className="text-4xl font-extrabold mb-4">Your Name</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">A short bio or tagline goes here. Tell visitors who you are and what you build.</p>
        </section>

        <section className="mt-16">
          <h2 className="text-3xl font-bold mb-2">Featured Projects</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8">A selection of my recent development work</p>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((p) => (
              <ProjectCard key={p.id} project={p} />
            ))}
          </div>
        </section>

        <section className="mt-12">
          <About />
        </section>

        <section className="mt-12">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
    </ErrorBoundary>
  )
}

export default App
