import ScrollReveal from '../components/ScrollReveal'

export default function About() {
    return (
        <section className="about" id="about">
            <div className="container">
                <div className="about-grid">
                    <div className="about-content">
                        <ScrollReveal>
                            <div className="section-label">About Us</div>
                            <h2>Built on Integrity, Driven by Innovation</h2>
                        </ScrollReveal>

                        <ScrollReveal delay={1}>
                            <div className="gold-divider" />
                            <p>
                                Jaid Investments Co. Ltd. is an NCA4 registered contractor based in Eldoret, Kenya,
                                specializing in civil engineering, water irrigation, and building works. We are committed
                                to delivering quality services that meet world class standards.
                            </p>
                        </ScrollReveal>

                        <ScrollReveal delay={2}>
                            <p>
                                Our culture is anchored in safety, quality assurance, and environmental stewardship.
                                We have built a reputation for completing projects on time, within budget, and to the
                                highest specifications, earning the trust of both government and private sector clients
                                across the region.
                            </p>
                        </ScrollReveal>

                        <ScrollReveal delay={3}>
                            <div className="about-values">
                                <div className="about-value">
                                    <div className="about-value-icon">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                                        </svg>
                                    </div>
                                    <h4>Integrity</h4>
                                </div>
                                <div className="about-value">
                                    <div className="about-value-icon">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                        </svg>
                                    </div>
                                    <h4>Quality</h4>
                                </div>
                                <div className="about-value">
                                    <div className="about-value-icon">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                            <circle cx="12" cy="12" r="10" />
                                            <path d="M12 16v-4M12 8h.01" />
                                            <path d="M8 12h8" />
                                        </svg>
                                    </div>
                                    <h4>Innovation</h4>
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>

                    <div className="about-badges">
                        <ScrollReveal>
                            <div className="badge-card">
                                <div className="badge-card-header">
                                    <div className="badge-icon">
                                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M12 15l-2 5h4l-2-5zM9 12a3 3 0 106 0 3 3 0 00-6 0z" />
                                            <path d="M12 2L2 7l10 5 10-5-10-5z" />
                                            <path d="M2 17l10 5 10-5" />
                                            <path d="M2 12l10 5 10-5" />
                                        </svg>
                                    </div>
                                    <h3>NCA4 Certified</h3>
                                </div>
                                <p>Registered by the National Construction Authority as a Category 4 contractor, qualified for major civil engineering and building projects across Kenya.</p>
                                <div className="badge-status">Active & Verified</div>
                            </div>
                        </ScrollReveal>

                        <ScrollReveal delay={1}>
                            <div className="badge-card">
                                <div className="badge-card-header">
                                    <div className="badge-icon">
                                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M9 12l2 2 4-4" />
                                            <path d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                    <h3>Tax Compliant</h3>
                                </div>
                                <p>Fully registered with the Kenya Revenue Authority. Tax Compliance Certificate maintained and updated annually, ensuring transparent financial governance.</p>
                                <div className="badge-status">Compliant</div>
                            </div>
                        </ScrollReveal>

                        <ScrollReveal delay={2}>
                            <div className="badge-card">
                                <div className="badge-card-header">
                                    <div className="badge-icon">
                                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                                            <path d="M9 12l2 2 4-4" />
                                        </svg>
                                    </div>
                                    <h3>Safety Certified</h3>
                                </div>
                                <p>Comprehensive Occupational Health and Safety program ensuring zero-incident work sites and full compliance with Kenyan OSHA standards.</p>
                                <div className="badge-status">Active Program</div>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </div>
        </section>
    )
}
