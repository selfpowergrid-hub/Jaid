import { useState, useEffect } from 'react'
import ScrollReveal from '../components/ScrollReveal'
import hero1 from '../assets/hero1.jpg'
import hero2 from '../assets/hero2.jpg'
import hero3 from '../assets/hero3.jpg'

const heroImages = [
    `url('data:image/svg+xml,${encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="1920" height="1080"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#1a1a1a"/><stop offset="50%" stop-color="#2d2d2d"/><stop offset="100%" stop-color="#0a0a0a"/></linearGradient><pattern id="p" width="100" height="100" patternUnits="userSpaceOnUse"><line x1="0" y1="100" x2="100" y2="0" stroke="#c9a84c" stroke-width="0.3" opacity="0.1"/></pattern></defs><rect fill="url(#g)" width="1920" height="1080"/><rect fill="url(#p)" width="1920" height="1080"/></svg>`)}')`,
    `url(${hero1})`,
    `url(${hero2})`,
    `url(${hero3})`
]

export default function Hero() {
    const [currentIndex, setCurrentIndex] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex(prev => (prev + 1) % heroImages.length)
        }, 3000)
        return () => clearInterval(interval)
    }, [])

    return (
        <section className="hero" id="home">
            {heroImages.map((img, index) => (
                <div
                    key={index}
                    className={`hero-bg-image ${index === currentIndex ? 'active' : ''}`}
                    style={{ backgroundImage: img }}
                />
            ))}

            <div className="hero-bg" />

            <div className={`hero-content ${currentIndex === 0 ? 'visible' : 'hidden'}`}>
                <ScrollReveal>
                    <div className="hero-badge">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#c9a84c" strokeWidth="2">
                            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                        </svg>
                        NCA1 Certified Contractor
                    </div>
                </ScrollReveal>

                <ScrollReveal delay={1}>
                    <h1>Quality Services.<br /><span className="gold">World Class</span> Standards.</h1>
                </ScrollReveal>

                <ScrollReveal delay={3}>
                    <div className="hero-cta">
                        <button className="btn-primary" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                            Start a Project
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                        </button>
                        <button className="btn-outline" onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}>
                            Our Services
                        </button>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    )
}
