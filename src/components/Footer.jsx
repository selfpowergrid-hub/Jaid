import logoImg from '../assets/LOGO.jpg'

export default function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-grid">
                    <div className="footer-brand">
                        <img src={logoImg} alt="Jaid Investments Logo" style={{ width: '50px', height: '50px', objectFit: 'contain', marginBottom: '15px' }} />
                        <p>An NCA4 registered contractor based in Eldoret, Kenya, delivering quality civil engineering, water irrigation, and building services with world class standards.</p>
                    </div>

                    <div>
                        <h4>Quick Links</h4>
                        <div className="footer-links">
                            <a href="#about">About Us</a>
                            <a href="#services">Services</a>
                            <a href="#fleet">Our Fleet</a>
                            <a href="#safety">Safety</a>
                            <a href="#contact">Contact</a>
                        </div>
                    </div>

                    <div>
                        <h4>Contact</h4>
                        <div className="footer-links">
                            <a href="mailto:Jaidinvestments@yahoo.com">Jaidinvestments@yahoo.com</a>
                            <a href="tel:+254757717616">+254 757 717 616</a>
                            <a>City Plaza, Eldoret</a>
                            <a>P.O. Box 8780, Eldoret</a>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>© {currentYear} Jaid Investments Ltd. All rights reserved.</p>
                    <p>NCA4 Certified Contractor • Uasin Gishu County, Kenya</p>
                </div>
            </div>
        </footer>
    )
}
