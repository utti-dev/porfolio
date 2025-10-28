export default function ProjectCard({ project }) {
  return (
    <article className="border rounded-lg p-4 bg-white dark:bg-gray-800 shadow-sm">
      <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
      <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">{project.desc}</p>
      <div className="text-xs text-gray-500 dark:text-gray-400 mb-3">{project.tech}</div>
      <a href={project.url} className="text-indigo-600 dark:text-indigo-400 hover:underline">View project</a>
    </article>
  )
}
