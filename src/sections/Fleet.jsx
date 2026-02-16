import ScrollReveal from '../components/ScrollReveal'
import loadersImg from '../assets/Loaders.jpg'
import caterpillarImg from '../assets/Caterpillar.jpg'
import tippersImg from '../assets/Tippers.jpg'

const fleet = [
    {
        name: 'JCB Backhoe Loaders',
        description: 'Versatile earthmoving machines for excavation, trenching, and material handling across diverse project sites.',
        tag: 'Earthmoving',
        image: loadersImg
    },
    {
        name: 'Caterpillar Motor Graders',
        description: 'Precision grading equipment for road construction, surface finishing, and land leveling operations.',
        tag: 'Road Works',
        image: caterpillarImg
    },
    {
        name: 'Mahindra Tippers',
        description: 'Heavy-duty transport vehicles for material haulage, aggregate supply, and site logistics.',
        tag: 'Transport',
        image: tippersImg
    }
]

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
                                <div className="fleet-image" style={{ backgroundImage: `url(${item.image})` }}>
                                    {/* Image set via background */}
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
