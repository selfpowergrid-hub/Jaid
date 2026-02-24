import { useState, useEffect } from 'react'
import ScrollReveal from '../components/ScrollReveal'
import loadersImg from '../assets/Loaders.jpg'
import caterpillarImg from '../assets/Caterpillar.jpg'
import tippersImg from '../assets/Tippers.jpg'

const tipperImages = [
    '/fleet-images/Tippers/WhatsApp Image 2026-02-20 at 17.10.42.jpeg',
    '/fleet-images/Tippers/WhatsApp Image 2026-02-20 at 17.11.33.jpeg',
    '/fleet-images/Tippers/WhatsApp Image 2026-02-20 at 17.38.24.jpeg'
];

const jcbImages = [
    '/fleet-images/JCB/WhatsApp Image 2026-02-20 at 16.53.27.jpeg',
    '/fleet-images/JCB/WhatsApp Image 2026-02-20 at 17.08.26.jpeg',
    '/fleet-images/JCB/WhatsApp Image 2026-02-20 at 17.08.28.jpeg',
    '/fleet-images/JCB/WhatsApp Image 2026-02-20 at 17.14.31.jpeg'
];

const fleet = [
    {
        name: 'JCB Backhoe Loaders',
        description: 'Versatile earthmoving machines for excavation, trenching, and material handling across diverse project sites.',
        tag: 'Earthmoving',
        images: jcbImages
    },
    {
        name: 'Caterpillar Motor Graders',
        description: 'Precision grading equipment for road construction, surface finishing, and land leveling operations.',
        tag: 'Road Works',
        images: [caterpillarImg]
    },
    {
        name: 'Mahindra Tippers',
        description: 'Heavy-duty transport vehicles for material haulage, aggregate supply, and site logistics.',
        tag: 'Transport',
        images: tipperImages
    }
]

function RotatingImageBackground({ images }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (!images || images.length <= 1) return;
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % images.length);
        }, 2000);
        return () => clearInterval(interval);
    }, [images]);

    return (
        <div className="fleet-image-container" style={{ position: 'relative', width: '100%', height: '100%' }}>
            {images.map((img, idx) => (
                <div
                    key={idx}
                    className="fleet-image"
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        backgroundImage: `url("${img}")`,
                        backgroundSize: 'contain',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                        backgroundColor: '#1a1a1a', // Match theme dark color
                        opacity: idx === currentIndex ? 1 : 0,
                        transition: 'opacity 1s ease-in-out',
                        zIndex: idx === currentIndex ? 1 : 0,
                    }}
                />
            ))}
        </div>
    );
}

export default function Fleet() {
    return (
        <section className="fleet" id="fleet">
            <div className="container">
                <ScrollReveal>
                    <div className="fleet-header">
                        <div className="section-label" style={{ justifyContent: 'center' }}>Our Capability</div>
                        <h2>Fleet & Equipment</h2>
                        <p>Company-owned heavy machinery ensuring project continuity, efficiency, and full operational control.</p>
                    </div>
                </ScrollReveal>

                <div className="fleet-grid">
                    {fleet.map((item, i) => (
                        <ScrollReveal key={i} delay={i + 1}>
                            <div className="fleet-card">
                                <div style={{ height: '300px', position: 'relative', overflow: 'hidden' }}>
                                    <RotatingImageBackground images={item.images} />
                                </div>
                                <div className="fleet-info">
                                    <h3>{item.name}</h3>
                                    <p>{item.description}</p>
                                    <span className="fleet-tag">{item.tag}</span>
                                </div>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    )
}
