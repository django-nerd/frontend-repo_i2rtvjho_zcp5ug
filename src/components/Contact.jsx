import { useState } from 'react'

function Contact() {
  const [status, setStatus] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('Sending...')

    try {
      const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${baseUrl}/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: e.target.name.value,
          email: e.target.email.value,
          message: e.target.message.value,
        })
      })

      if (res.ok) {
        setStatus('Thanks! I will get back to you soon.')
        e.target.reset()
      } else {
        setStatus('Something went wrong. Please try again later.')
      }
    } catch (err) {
      setStatus('Unable to send. Please try again later.')
    }
  }

  return (
    <section id="contact" className="relative py-24 bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl font-bold text-white mb-3">Let’s build something together</h2>
            <p className="text-blue-100/90 max-w-xl">Have an idea or just want to chat? Drop a message and I’ll reply within a day.</p>
          </div>

          <form onSubmit={handleSubmit} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
            <div className="grid gap-4">
              <input name="name" required placeholder="Your Name" className="w-full rounded-lg bg-white/10 text-white placeholder-blue-200/60 px-4 py-3 outline-none ring-1 ring-white/10 focus:ring-cyan-400/40" />
              <input name="email" type="email" required placeholder="Email" className="w-full rounded-lg bg-white/10 text-white placeholder-blue-200/60 px-4 py-3 outline-none ring-1 ring-white/10 focus:ring-cyan-400/40" />
              <textarea name="message" required rows="4" placeholder="Message" className="w-full rounded-lg bg-white/10 text-white placeholder-blue-200/60 px-4 py-3 outline-none ring-1 ring-white/10 focus:ring-cyan-400/40" />
              <button className="px-5 py-3 rounded-lg bg-gradient-to-r from-cyan-400 to-blue-600 text-white font-medium shadow-lg shadow-cyan-500/20 hover:opacity-90 transition">Send Message</button>
              {status && <p className="text-sm text-blue-100/90">{status}</p>}
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
