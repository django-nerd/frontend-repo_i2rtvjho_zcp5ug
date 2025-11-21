import { Code2, Palette, Database, Rocket } from 'lucide-react'

const skills = [
  {
    icon: Code2,
    title: 'MERN Stack',
    items: ['MongoDB', 'Express.js', 'React', 'Node.js'],
  },
  {
    icon: Database,
    title: 'Backend & DevOps',
    items: ['REST APIs', 'Auth & JWT', 'MongoDB Aggregations', 'Cloud & CI/CD'],
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    items: ['Figma', 'Design Systems', 'Prototyping', 'Accessibility'],
  },
  {
    icon: Rocket,
    title: 'Extras',
    items: ['TypeScript', 'Tailwind CSS', 'Framer Motion', 'Git & GitHub'],
  },
]

function Skills() {
  return (
    <section id="skills" className="relative py-24 bg-gradient-to-b from-slate-900 to-slate-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white mb-10">Core Skills</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map(({ icon: Icon, title, items }) => (
            <div key={title} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm hover:bg-white/10 transition group">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-10 w-10 grid place-items-center rounded-xl bg-gradient-to-br from-cyan-400/20 to-blue-600/20 text-cyan-300 ring-1 ring-white/10">
                  <Icon size={20} />
                </div>
                <h3 className="text-white font-semibold">{title}</h3>
              </div>
              <ul className="space-y-2 text-blue-100/90 text-sm">
                {items.map((s) => (
                  <li key={s} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />{s}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
