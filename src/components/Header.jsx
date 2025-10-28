export default function Header() {
  return (
    <header className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="text-lg font-bold">Your Name</div>
        <nav className="space-x-4">
          <a href="#" className="text-gray-700 dark:text-gray-200 hover:underline">Home</a>
          <a href="#projects" className="text-gray-700 dark:text-gray-200 hover:underline">Projects</a>
          <a href="#contact" className="text-gray-700 dark:text-gray-200 hover:underline">Contact</a>
        </nav>
      </div>
    </header>
  )
}
export default function Header() {
  return (
    <header className="bg-white dark:bg-gray-800 shadow">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="text-xl font-bold">YourName</div>
        <nav className="space-x-4">
          <a className="text-gray-700 dark:text-gray-200 hover:underline" href="#">Home</a>
          <a className="text-gray-700 dark:text-gray-200 hover:underline" href="#projects">Projects</a>
          <a className="text-gray-700 dark:text-gray-200 hover:underline" href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  )
}
