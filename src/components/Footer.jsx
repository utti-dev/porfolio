export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4 py-6 text-center text-sm text-gray-600 dark:text-gray-400">
        © {new Date().getFullYear()} Your Name. Built with React + Vite + Tailwind.
      </div>
    </footer>
  )
}
