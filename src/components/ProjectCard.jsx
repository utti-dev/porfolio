export default function ProjectCard({ project }) {
  return (
    <article className="border rounded-lg overflow-hidden bg-white dark:bg-gray-800 shadow-sm">
      {project.image && (
        <picture>
          <source
            srcSet={project.image.replace('.png', '.webp')}
            type="image/webp"
          />
          <img 
            src={project.image} 
            alt={`${project.title} preview`} 
            className="w-full h-48 object-cover"
            loading="lazy"
            width="800"
            height="600"
          />
        </picture>
      )}
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
        <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">{project.desc}</p>
        <div className="text-xs text-gray-500 dark:text-gray-400 mb-3">{project.tech}</div>
        <a 
          href={project.url} 
          className="inline-block px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Project
        </a>
      </div>
    </article>
  )
}
