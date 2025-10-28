export default function ProjectCard({ project }) {
  return (
    <article className="group relative border rounded-lg overflow-hidden bg-white dark:bg-gray-800 shadow-sm transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      {project.image && (
        <div className="relative">
          <picture>
            <source
              srcSet={project.image.replace('.png', '.webp')}
              type="image/webp"
            />
            <img 
              src={project.image} 
              alt={`${project.title} preview`} 
              className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
              loading="lazy"
              width="800"
              height="600"
            />
          </picture>
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
      )}
      <div className="p-6">
        <h3 className="text-xl font-bold mb-3 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
          {project.title}
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
          {project.desc}
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.split(', ').map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 text-xs rounded-full bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
            >
              {tech}
            </span>
          ))}
        </div>
        <a 
          href={project.url} 
          className="inline-flex items-center px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Project
          <svg 
            className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </a>
      </div>
    </article>
  )
}
