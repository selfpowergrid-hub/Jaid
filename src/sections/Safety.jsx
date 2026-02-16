import ScrollReveal from '../components/ScrollReveal'

export default function Safety() {
    return (
        <section className="safety" id="safety">
            <div className="container">
                <ScrollReveal>
                    <div className="section-label">Responsibility</div>
                    <h2 style={{ color: '#fff', marginBottom: '3rem' }}>Safety & Environment</h2>
                </ScrollReveal>

                <div className="safety-grid">
                    <ScrollReveal delay={1}>
                        <div className="safety-card">
                            <div style={{ color: '#c9a84c', marginBottom: '20px' }}>
                                <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                                    <path d="M9 12l2 2 4-4" />
                                </svg>
                            </div>
                            <h3>Occupational Health & Safety</h3>
                            <p>
                                Our comprehensive OHS program ensures the well-being of every worker on site.
                                We maintain strict safety protocols and conduct regular training and equipment
                                inspections to achieve zero-incident project delivery.
                            </p>
                            <div className="safety-features">
                                <div className="safety-feature">
                                    <div className="safety-feature-dot" />
                                    <span>Personal Protective Equipment (PPE) Standards</span>
                                </div>
                                <div className="safety-feature">
                                    <div className="safety-feature-dot" />
                                    <span>Regular Safety Audits & Training</span>
                                </div>
                                <div className="safety-feature">
                                    <div className="safety-feature-dot" />
                                    <span>Emergency Response Protocols</span>
                                </div>
                                <div className="safety-feature">
                                    <div className="safety-feature-dot" />
                                    <span>OSHA Compliance</span>
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>

                    <ScrollReveal delay={2}>
                        <div className="safety-card">
                            <div style={{ color: '#c9a84c', marginBottom: '20px' }}>
                                <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                    <circle cx="12" cy="12" r="10" />
                                    <path d="M16 8l-4 4-4-4M8 16l4-4 4 4" />
                                </svg>
                            </div>
                            <h3>Gender Equality & Inclusion</h3>
                            <p>
                                Jaid Investments is committed to creating an inclusive workplace that provides
                                equal opportunities regardless of gender. We actively promote diversity in construction,
                                a traditionally male-dominated industry.
                            </p>
                            <div className="safety-features">
                                <div className="safety-feature">
                                    <div className="safety-feature-dot" />
                                    <span>Equal Employment Opportunities</span>
                                </div>
                                <div className="safety-feature">
                                    <div className="safety-feature-dot" />
                                    <span>Skills Training for Women in Construction</span>
                                </div>
                                <div className="safety-feature">
                                    <div className="safety-feature-dot" />
                                    <span>Anti-Discrimination Policy</span>
                                </div>
                                <div className="safety-feature">
                                    <div className="safety-feature-dot" />
                                    <span>Community Development Programs</span>
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </div>
        </section>
    )
}
