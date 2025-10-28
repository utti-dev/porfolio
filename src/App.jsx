import { Suspense } from 'react'
import ErrorBoundary from './components/ErrorBoundary'
import LoadingSpinner from './components/LoadingSpinner'
import { lazyLoad } from './utils/lazyLoad'
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
      title: 'Placeholder Project',
      desc: 'A short description of the project. Replace with your project details.',
      tech: 'React, Vite, Tailwind',
      url: '#',
    },
    {
      id: 2,
      title: 'Another Project',
      desc: 'Another example project. Replace or remove as needed.',
      tech: 'JavaScript, CSS',
      url: '#',
    },
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

        <section className="mt-12">
          <h2 className="text-2xl font-semibold mb-6">Projects</h2>
          <div className="grid gap-6 sm:grid-cols-2">
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
