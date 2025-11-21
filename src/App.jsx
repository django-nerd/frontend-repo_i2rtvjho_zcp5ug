import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 text-white relative">
      <div className="absolute inset-0 bg-[radial-gradient(600px_400px_at_10%_10%,rgba(56,189,248,0.15),transparent),radial-gradient(600px_300px_at_90%_20%,rgba(59,130,246,0.15),transparent)]" />
      <Navbar />
      <main className="relative">
        <Hero />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <footer className="relative py-10 text-center text-blue-200/70">
        © {new Date().getFullYear()} Your Name — Built with MERN mindset and love for design.
      </footer>
    </div>
  )
}

export default App
