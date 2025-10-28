import Header from './components/Header'
import Footer from './components/Footer'
import ProjectCard from './components/ProjectCard'
import './App.css'

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

        <section className="mt-12 max-w-xl">
          <h2 className="text-2xl font-semibold mb-4">Contact</h2>
          <p className="mb-4">Use the contact form after deployment or list an email here.</p>
          <a href="#" className="inline-block bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-500">Get in touch</a>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default App
