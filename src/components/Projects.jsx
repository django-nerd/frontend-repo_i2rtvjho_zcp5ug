import { useEffect, useState } from 'react'

function Projects() {
  const [projects] = useState([
    {
      title: 'Campus Connect',
      description: 'A platform for NIT Silchar students to collaborate, share resources, and manage clubs/events.',
      tags: ['MERN', 'Auth', 'Realtime'],
      link: '#',
      image: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=1200&auto=format&fit=crop'
    },
    {
      title: 'Design System Kit',
      description: 'Reusable UI components and tokens built with Tailwind + Figma handoff, speeding up product design.',
      tags: ['UI/UX', 'Tailwind', 'Figma'],
      link: '#',
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200&auto=format&fit=crop'
    },
    {
      title: 'TaskFlow',
      description: 'Team task manager with drag & drop boards, JWT auth, and REST API built with Node/Express.',
      tags: ['React', 'Express', 'MongoDB'],
      link: '#',
      image: 'https://images.unsplash.com/photo-1692607431186-e8d7837ad65b?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxUYXNrRmxvd3xlbnwwfDB8fHwxNzYzNzQ3MDA3fDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80'
    },
  ])

  useEffect(() => {}, [])

  return (
    <section id="projects" className="relative py-24 bg-slate-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-10">
          <h2 className="text-3xl font-bold text-white">Featured Projects</h2>
          <a href="#contact" className="text-cyan-300 hover:text-white">Let’s work together →</a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <a key={p.title} href={p.link} className="group rounded-2xl overflow-hidden border border-white/10 bg-white/5 hover:bg-white/10 transition">
              <div className="aspect-video overflow-hidden">
                <img src={p.image} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-5">
                <h3 className="text-white font-semibold mb-1">{p.title}</h3>
                <p className="text-sm text-blue-100/90 line-clamp-2 mb-3">{p.description}</p>
                <div className="flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="text-xs px-2 py-1 rounded-md bg-cyan-400/10 text-cyan-300 ring-1 ring-cyan-400/20">{t}</span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
