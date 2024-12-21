import { Github } from 'lucide-react'

export default function Header() {
  return (
    <header className="py-6">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Github className="w-8 h-8 text-pink-500" />
          <span className="text-xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 text-transparent bg-clip-text">
            GitHub Wrapped
          </span>
        </div>
      </div>
    </header>
  )
}

