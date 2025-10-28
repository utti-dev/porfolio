import { useState } from 'react'

export default function Contact() {
  const [status, setStatus] = useState(null)

  async function handleSubmit(e) {
    e.preventDefault()
    const form = e.target
    const data = new FormData(form)
    const endpoint = import.meta.env.VITE_FORM_ENDPOINT || process.env.REACT_APP_FORM_ENDPOINT || ''
    if (!endpoint) {
      setStatus('missing')
      return
    }

    try {
      const res = await fetch(endpoint, {
        method: 'POST',
        body: data,
        headers: {
          Accept: 'application/json',
        },
      })
      if (res.ok) setStatus('success')
      else setStatus('error')
    } catch (err) {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="max-w-xl">
      <h2 className="text-2xl font-semibold mb-4">Contact</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm">Name</label>
          <input name="name" required className="mt-1 block w-full rounded border px-3 py-2" />
        </div>
        <div>
          <label className="block text-sm">Email</label>
          <input name="email" type="email" required className="mt-1 block w-full rounded border px-3 py-2" />
        </div>
        <div>
          <label className="block text-sm">Message</label>
          <textarea name="message" rows="5" required className="mt-1 block w-full rounded border px-3 py-2" />
        </div>
        <div>
          <button type="submit" className="bg-indigo-600 text-white px-4 py-2 rounded">Send</button>
        </div>
      </form>

      {status === 'missing' && (
        <p className="mt-4 text-sm text-yellow-600">Form endpoint not configured. Set VITE_FORM_ENDPOINT in Vercel or .env.</p>
      )}
      {status === 'success' && <p className="mt-4 text-sm text-green-600">Message sent — thank you!</p>}
      {status === 'error' && <p className="mt-4 text-sm text-red-600">There was an error sending your message.</p>}
    </section>
  )
}
