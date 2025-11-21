import Spline from '@splinetool/react-spline'

function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden flex items-center">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-center">
        <div className="text-white py-28">
          <p className="inline-flex items-center text-xs font-semibold tracking-wider uppercase text-blue-200/80 bg-white/5 ring-1 ring-white/10 rounded-full px-3 py-1">
            NIT Silchar • CSE • 2nd year
          </p>
          <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight ">
            Hi, I’m <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">MERN Developer</span><br />and UI/UX Designer
          </h1>
          <p className="mt-4 text-blue-100/90 max-w-xl">
            I build practical, full‑stack web apps with a design‑first approach. Passionate about clean UX, scalable systems, and shipping real products.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#projects" className="px-5 py-2.5 rounded-lg bg-gradient-to-r from-cyan-400 to-blue-600 text-white font-medium shadow-lg shadow-cyan-500/20 hover:opacity-90 transition">View Projects</a>
            <a href="#contact" className="px-5 py-2.5 rounded-lg bg-white/10 ring-1 ring-white/15 text-white font-medium hover:bg-white/15 transition">Contact Me</a>
          </div>
        </div>

        <div className="relative hidden lg:block">
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent" />
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-900/40 via-transparent to-slate-900/80" />
    </section>
  )
}

export default Hero
