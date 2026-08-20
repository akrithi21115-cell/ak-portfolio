import { useState } from 'react'
import './Contact.css'

const initialForm = { name: '', email: '', subject: '', message: '' }

function Contact() {
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | sending | sent

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const validate = () => {
    const newErrors = {}
    if (!form.name.trim()) newErrors.name = 'Name is required'
    if (!form.email.includes('@')) newErrors.email = 'enter a valid email'
    if (form.message.trim().length < 10) {
      newErrors.message = 'message must be at least 10 characters'
    }
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!validate()) return

    setStatus('sending')
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setStatus('sent')
    setForm(initialForm)

    setTimeout(() => setStatus('idle'), 3000)
  }

  const buttonLabel =
    status === 'sending' ? 'sending...' : status === 'sent' ? ' ✔ Message sent' : 'submit'

  return (
    <section id="contact" class="contact-section">
      <h2>Ping me up</h2>

      <form onSubmit={handleSubmit} id="contact-form">
        <div className="form-group">
          <label htmlFor="name">*Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="enter your name"
            value={form.name}
            onChange={handleChange}
            className={errors.name ? 'error' : ''}
            required
          />
          {errors.name && <span className="error-msg">{errors.name}</span>}

          <label htmlFor="email">*email id</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="enter your email"
            value={form.email}
            onChange={handleChange}
            className={errors.email ? 'error' : ''}
            required
          />
          {errors.email && <span className="error-msg">{errors.email}</span>}

          <label htmlFor="subject">*Select mode of work</label>
          <select name="subject" id="subject" value={form.subject} onChange={handleChange}>
            <option value="">select</option>
            <option value="hire">hire me</option>
            <option value="collaborate">collaborate with me</option>
            <option value="freelancing">freelancing</option>
            <option value="others">other</option>
          </select>

          <textarea
            name="message"
            id="message"
            placeholder="enter brief detail about the project your coming up with."
            value={form.message}
            onChange={handleChange}
            className={errors.message ? 'error' : ''}
          />
          {errors.message && <span className="error-msg">{errors.message}</span>}

          <button type="submit" className="submit" disabled={status === 'sending'}>
            {buttonLabel}
          </button>
        </div>
      </form>

      <p className="email">
        Email: <a href="mailto:akrithi67@gmail.com">akrithi67@gmail.com</a>
      </p>
    </section>
  )
}

export default Contact
