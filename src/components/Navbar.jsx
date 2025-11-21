import { useState } from 'react'
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react'

function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-cyan-400 to-blue-600 shadow-lg" />
            <span className="text-white font-semibold tracking-tight">Your Name</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-blue-100 hover:text-white transition-colors">
                {item.label}
              </a>
            ))}
            <div className="hidden sm:flex items-center gap-3">
              <a href="https://github.com/" target="_blank" rel="noreferrer" className="text-blue-200 hover:text-white"><Github size={18} /></a>
              <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="text-blue-200 hover:text-white"><Linkedin size={18} /></a>
              <a href="#contact" className="text-blue-200 hover:text-white"><Mail size={18} /></a>
            </div>
          </nav>

          <button className="md:hidden text-white" onClick={() => setOpen(!open)} aria-label="Menu">
            {open ? <X /> : <Menu />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4">
            <div className="grid gap-2">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="text-blue-100 hover:text-white py-2">
                  {item.label}
                </a>
              ))}
              <div className="flex items-center gap-4 pt-2">
                <a href="https://github.com/" target="_blank" rel="noreferrer" className="text-blue-200 hover:text-white"><Github size={18} /></a>
                <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="text-blue-200 hover:text-white"><Linkedin size={18} /></a>
                <a href="#contact" className="text-blue-200 hover:text-white"><Mail size={18} /></a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Navbar
