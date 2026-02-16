import ScrollReveal from '../components/ScrollReveal'

const services = [
    {
        title: 'Civil Engineering',
        description: 'Comprehensive road construction, grading, and structural engineering solutions delivered to the highest specifications.',
        items: ['Road Works & Gravelling', 'Grading & Earthworks', 'Drainage Systems', 'Structural Bridges', 'Culverts & Crossings'],
        icon: (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M2 20h20M4 20V10l8-6 8 6v10M9 20v-6h6v6" />
                <path d="M9 10h6" />
            </svg>
        )
    },
    {
        title: 'Water & Irrigation',
        description: 'Expert borehole drilling, pipeline installations, and canal systems for agricultural and residential water solutions.',
        items: ['Borehole Drilling', 'Pipe Works & Distribution', 'Canal Construction', 'Water Storage Systems', 'Irrigation Networks'],
        icon: (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M12 2.69l5.66 5.66a8 8 0 11-11.31 0L12 2.69z" />
            </svg>
        )
    },
    {
        title: 'Building Works',
        description: 'Full-spectrum construction services from foundation to finish, specializing in masonry, steel, and general contracting.',
        items: ['General Masonry', 'Structural Steel Works', 'Carpentry & Joinery', 'Material Supply', 'Project Management'],
        icon: (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="3" y="3" width="7" height="7" />
                <rect x="14" y="3" width="7" height="7" />
                <rect x="14" y="14" width="7" height="7" />
                <rect x="3" y="14" width="7" height="7" />
            </svg>
        )
    }
]

export default function Services() {
    return (
        <section className="services" id="services">
            <div className="container">
                <ScrollReveal>
                    <div className="services-header">
                        <div className="section-label" style={{ justifyContent: 'center' }}>What We Do</div>
                        <h2>Specialist Services</h2>
                        <p>Delivering excellence across civil engineering, water management, and building construction with NCA4 certified expertise.</p>
                    </div>
                </ScrollReveal>

                <div className="services-grid">
                    {services.map((service, i) => (
                        <ScrollReveal key={i} delay={i + 1}>
                            <div className="service-card">
                                <div className="service-icon">
                                    {service.icon}
                                </div>
                                <h3>{service.title}</h3>
                                <p>{service.description}</p>
                                <ul className="service-list">
                                    {service.items.map((item, j) => (
                                        <li key={j}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    )
}
