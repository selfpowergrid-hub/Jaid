import { useState, useEffect } from 'react'
import logoImg from '../assets/LOGO.jpg'

const documents = [
  {
    name: 'Company Profile',
    file: '/documents/JAID_INVESTMENTS_PROFILE.pdf',
    size: '2.1 MB',
    type: 'PDF'
  },
  {
    name: 'NCA1 Certificate',
    file: '/documents/JAID_INVESTMENTS_PROFILE.pdf',
    size: '—',
    type: 'PDF'
  },
  {
    name: 'Tax Compliance',
    file: '/documents/JAID_INVESTMENTS_PROFILE.pdf',
    size: '—',
    type: 'PDF'
  }
]

export default function Navbar({ onOpenGallery }) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [docsOpen, setDocsOpen] = useState(false)
  const [galleryOpen, setGalleryOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollTo = (id) => {
    setMobileOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  const handleOpenGallery = (category) => {
    setGalleryOpen(false)
    setMobileOpen(false)
    if (onOpenGallery) onOpenGallery(category)
  }

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <a href="#" className="navbar-logo" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <img src={logoImg} alt="Jaid Investments Logo" style={{ width: '44px', height: '44px', objectFit: 'contain' }} />
          <div className="navbar-logo-text">
            Jaid Investments
            <span>Ltd.</span>
          </div>
        </a>

        <div className={`navbar-links ${mobileOpen ? 'mobile-open' : ''}`}>
          <a href="#about" onClick={(e) => { e.preventDefault(); scrollTo('about') }}>About</a>
          <a href="#services" onClick={(e) => { e.preventDefault(); scrollTo('services') }}>Services</a>

          <div className={`nav-dropdown ${galleryOpen ? 'open' : ''}`}>
            <button className="nav-dropdown-trigger" onClick={() => { setGalleryOpen(!galleryOpen); setDocsOpen(false); }}>
              Service Gallery
              <svg viewBox="0 0 12 12" fill="none">
                <path d="M3 5L6 8L9 5" stroke="currentColor" strokeWidth="1.5" />
              </svg>
            </button>
            <div className="nav-dropdown-menu">
              <a href="#" onClick={(e) => { e.preventDefault(); handleOpenGallery('Civil Engineering'); }} className="nav-dropdown-item">
                <div className="doc-info">
                  <div>Civil Engineering</div>
                </div>
              </a>
              <a href="#" onClick={(e) => { e.preventDefault(); handleOpenGallery('Water & Irrigation'); }} className="nav-dropdown-item">
                <div className="doc-info">
                  <div>Water & Irrigation</div>
                </div>
              </a>
              <a href="#" onClick={(e) => { e.preventDefault(); handleOpenGallery('Building Works'); }} className="nav-dropdown-item">
                <div className="doc-info">
                  <div>Building Works</div>
                </div>
              </a>
            </div>
          </div>

          <a href="#fleet" onClick={(e) => { e.preventDefault(); scrollTo('fleet') }}>Fleet</a>
          <a href="#safety" onClick={(e) => { e.preventDefault(); scrollTo('safety') }}>Safety</a>

          <div className={`nav-dropdown ${docsOpen ? 'open' : ''}`}>
            <button className="nav-dropdown-trigger" onClick={() => { setDocsOpen(!docsOpen); setGalleryOpen(false); }}>
              Documents
              <svg viewBox="0 0 12 12" fill="none">
                <path d="M3 5L6 8L9 5" stroke="currentColor" strokeWidth="1.5" />
              </svg>
            </button>
            <div className="nav-dropdown-menu">
              {documents.map((doc, i) => (
                <a key={i} href={doc.file} download className="nav-dropdown-item">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <polyline points="14,2 14,8 20,8" />
                    <line x1="12" y1="18" x2="12" y2="12" />
                    <polyline points="9,15 12,18 15,15" />
                  </svg>
                  <div className="doc-info">
                    <div>{doc.name}</div>
                    <div className="doc-size">{doc.type} • {doc.size}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <a href="#contact" onClick={(e) => { e.preventDefault(); scrollTo('contact') }}>Contact</a>
        </div>

        <button className={`hamburger ${mobileOpen ? 'active' : ''}`} onClick={() => setMobileOpen(!mobileOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  )
}
