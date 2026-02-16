import { useState } from 'react'
import ScrollReveal from '../components/ScrollReveal'

export default function Contact() {
    const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
    const [submitted, setSubmitted] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        setSubmitted(true)
        setTimeout(() => setSubmitted(false), 4000)
        setForm({ name: '', email: '', subject: '', message: '' })
    }

    return (
        <section className="contact" id="contact">
            <div className="container">
                <div className="contact-grid">
                    <div className="contact-info">
                        <ScrollReveal>
                            <div className="section-label">Get In Touch</div>
                            <h2>Let's Build Together</h2>
                            <div className="gold-divider" />
                            <p>
                                Ready to start your next project? Contact us to discuss how our expertise
                                in civil engineering, water irrigation, and building works can deliver
                                world class results for your vision.
                            </p>
                        </ScrollReveal>

                        <ScrollReveal delay={1}>
                            <div className="contact-details">
                                <div className="contact-detail">
                                    <div className="contact-detail-icon">
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                                            <circle cx="12" cy="10" r="3" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4>Office</h4>
                                        <p>City Plaza, Eldoret<br />P.O. Box 8780, Eldoret, Kenya</p>
                                    </div>
                                </div>

                                <div className="contact-detail">
                                    <div className="contact-detail-icon">
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                                            <polyline points="22,6 12,13 2,6" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4>Email</h4>
                                        <p><a href="mailto:Jaidinvestments@yahoo.com" style={{ color: '#c9a84c' }}>Jaidinvestments@yahoo.com</a></p>
                                    </div>
                                </div>

                                <div className="contact-detail">
                                    <div className="contact-detail-icon">
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                            <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4>Phone</h4>
                                        <p><a href="tel:+254757717616" style={{ color: '#c9a84c' }}>+254 757 717 616</a></p>
                                    </div>
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>

                    <ScrollReveal delay={2}>
                        <form className="contact-form" onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="name">Your Name</label>
                                <input id="name" type="text" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email Address</label>
                                <input id="email" type="email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="subject">Subject</label>
                                <input id="subject" type="text" value={form.subject} onChange={e => setForm({ ...form, subject: e.target.value })} required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="message">Message</label>
                                <textarea id="message" value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} required />
                            </div>
                            <div className="form-submit">
                                <button type="submit" className="btn-primary">
                                    {submitted ? 'Message Sent ✓' : 'Send Message'}
                                    {!submitted && (
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
                                        </svg>
                                    )}
                                </button>
                            </div>
                        </form>
                    </ScrollReveal>
                </div>
            </div>
        </section>
    )
}
