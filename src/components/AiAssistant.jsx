import { useState, useRef, useEffect } from 'react'

const knowledgeBase = [
    {
        keywords: ['hello', 'hi', 'hey', 'greetings', 'good morning', 'good afternoon'],
        response: 'Welcome to Jaid Investments Co. Ltd! I\'m here to help you with any questions about our services, fleet, certifications, or how to get in touch. What would you like to know?'
    },
    {
        keywords: ['about', 'who', 'company', 'jaid', 'what is'],
        response: 'Jaid Investments Co. Ltd. is an NCA1 registered contractor based in Eldoret, Kenya. We specialize in civil engineering, water irrigation, and building works. Our culture is anchored in integrity, quality, and innovation, delivering world class standards across the region.'
    },
    {
        keywords: ['service', 'offer', 'do you', 'what do', 'work'],
        response: 'We offer three core service areas:\n\n🏗️ Civil Engineering — Road works, grading, drainage, bridges\n💧 Water & Irrigation — Boreholes, pipe works, canals\n🧱 Building Works — Masonry, structural steel, carpentry, material supply\n\nWould you like details on any specific service?'
    },
    {
        keywords: ['civil', 'road', 'bridge', 'grading', 'drainage', 'engineering'],
        response: 'Our Civil Engineering division handles road construction, grading & gravelling, earthworks, drainage systems, structural bridges, and culvert crossings. We have extensive experience with county and national government road projects across the Rift Valley region.'
    },
    {
        keywords: ['water', 'irrigation', 'borehole', 'pipe', 'canal'],
        response: 'Our Water & Irrigation services include borehole drilling, pipe works & distribution networks, canal construction, water storage systems, and complete irrigation network installations. We serve both agricultural and residential water needs.'
    },
    {
        keywords: ['building', 'masonry', 'steel', 'carpentry', 'construct'],
        response: 'Our Building Works division covers general masonry, structural steel works, carpentry & joinery, material supply, and full project management. We handle everything from foundation to finish for commercial and residential projects.'
    },
    {
        keywords: ['fleet', 'equip', 'machine', 'jcb', 'caterpillar', 'cat', 'mahindra', 'tipper', 'grader', 'backhoe'],
        response: 'We own and operate a modern fleet including:\n\n🚜 JCB Backhoe Loaders — Excavation & material handling\n🚧 Caterpillar Motor Graders — Road grading & surface finishing\n🚛 Mahindra Tippers — Material transport & haulage\n\nOwning our equipment means greater efficiency and project continuity.'
    },
    {
        keywords: ['nca', 'certif', 'register', 'license', 'category'],
        response: 'Jaid Investments is registered with the National Construction Authority (NCA) under Category NCA1. This qualifies us for major civil engineering and building projects as specified by Kenyan construction regulations.'
    },
    {
        keywords: ['tax', 'compliance', 'kra', 'revenue'],
        response: 'We are fully registered with the Kenya Revenue Authority (KRA) and maintain an up-to-date Tax Compliance Certificate. This is renewed annually, ensuring transparent financial governance for all our projects and partnerships.'
    },
    {
        keywords: ['contact', 'reach', 'phone', 'email', 'address', 'location', 'office', 'where'],
        response: 'You can reach us at:\n\n📍 City Plaza, Eldoret, Kenya\n📮 P.O. Box 8780, Eldoret\n📧 Jaidinvestments@yahoo.com\n📞 +254 757 717 616\n\nFeel free to use the contact form on our website or reach out directly!'
    },
    {
        keywords: ['safety', 'health', 'osha', 'ppe', 'incident'],
        response: 'Safety is a cornerstone of our operations. Our comprehensive Occupational Health & Safety program includes PPE standards, regular safety audits & training, emergency response protocols, and full OSHA compliance. We strive for zero-incident project delivery.'
    },
    {
        keywords: ['gender', 'equality', 'women', 'diversity', 'inclusion'],
        response: 'We are committed to gender equality and inclusion. Our initiatives include equal employment opportunities, skills training for women in construction, anti-discrimination policies, and community development programs. We actively promote diversity in what is traditionally a male-dominated industry.'
    },
    {
        keywords: ['project', 'hire', 'quote', 'cost', 'price', 'tender', 'bid'],
        response: 'For project inquiries, quotations, or tender submissions, please contact us directly:\n\n📧 Jaidinvestments@yahoo.com\n📞 +254 757 717 616\n\nOr use the Contact form on our website. We\'ll review your requirements and provide a detailed proposal.'
    },
    {
        keywords: ['eldoret', 'kenya', 'uasin gishu', 'rift valley'],
        response: 'We are headquartered in Eldoret, Uasin Gishu County, in Kenya\'s Rift Valley region. While our base is in Eldoret, we undertake projects across Kenya, bringing our expertise to wherever it\'s needed.'
    }
]

function findResponse(input) {
    const lower = input.toLowerCase()
    let bestMatch = null
    let bestScore = 0

    for (const entry of knowledgeBase) {
        const score = entry.keywords.filter(k => lower.includes(k)).length
        if (score > bestScore) {
            bestScore = score
            bestMatch = entry
        }
    }

    if (bestMatch) return bestMatch.response

    return 'Thank you for your question! For specific inquiries, I recommend contacting our team directly at Jaidinvestments@yahoo.com or +254 757 717 616. You can also use the Contact form on our website. Is there anything else about our services, fleet, or certifications I can help with?'
}

export default function AiAssistant() {
    const [open, setOpen] = useState(false)
    const [messages, setMessages] = useState([
        { type: 'bot', text: 'Welcome to Jaid Investments! 👋 I can help you learn about our services, equipment fleet, certifications, and how to get in touch. What would you like to know?' }
    ])
    const [input, setInput] = useState('')
    const [typing, setTyping] = useState(false)
    const messagesRef = useRef(null)

    useEffect(() => {
        if (messagesRef.current) {
            messagesRef.current.scrollTop = messagesRef.current.scrollHeight
        }
    }, [messages, typing])

    const sendMessage = () => {
        if (!input.trim()) return

        const userMsg = input.trim()
        setMessages(prev => [...prev, { type: 'user', text: userMsg }])
        setInput('')
        setTyping(true)

        setTimeout(() => {
            const response = findResponse(userMsg)
            setTyping(false)
            setMessages(prev => [...prev, { type: 'bot', text: response }])
        }, 800 + Math.random() * 600)
    }

    const quickActions = [
        'Our Services',
        'Contact Info',
        'Fleet & Equipment',
        'NCA1 Certification'
    ]

    return (
        <>
            {!open && (
                <button className="ai-assistant-btn" onClick={() => setOpen(true)} title="Chat with us">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
                    </svg>
                </button>
            )}

            <div className={`ai-panel ${open ? 'open' : ''}`}>
                <div className="ai-panel-header">
                    <div className="ai-panel-title">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#c9a84c" strokeWidth="2">
                            <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
                        </svg>
                        <div>
                            <h4>Jaid Assistant</h4>
                            <div className="ai-status">
                                <div className="ai-status-dot" />
                                Online
                            </div>
                        </div>
                    </div>
                    <button className="ai-close" onClick={() => setOpen(false)}>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M18 6L6 18M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                <div className="ai-messages" ref={messagesRef}>
                    {messages.map((msg, i) => (
                        <div key={i} className={`ai-message ${msg.type}`}>
                            {msg.text.split('\n').map((line, j) => (
                                <span key={j}>{line}<br /></span>
                            ))}
                        </div>
                    ))}
                    {typing && (
                        <div className="ai-typing">
                            <span /><span /><span />
                        </div>
                    )}
                </div>

                <div className="ai-quick-actions">
                    {quickActions.map((action, i) => (
                        <button key={i} className="ai-quick-btn" onClick={() => {
                            setInput(action)
                            setTimeout(() => {
                                setMessages(prev => [...prev, { type: 'user', text: action }])
                                setTyping(true)
                                setTimeout(() => {
                                    const response = findResponse(action)
                                    setTyping(false)
                                    setMessages(prev => [...prev, { type: 'bot', text: response }])
                                }, 800 + Math.random() * 600)
                            }, 100)
                        }}>
                            {action}
                        </button>
                    ))}
                </div>

                <div className="ai-input-area">
                    <input
                        type="text"
                        placeholder="Ask about our services..."
                        value={input}
                        onChange={e => setInput(e.target.value)}
                        onKeyDown={e => e.key === 'Enter' && sendMessage()}
                    />
                    <button className="ai-send" onClick={sendMessage}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
                        </svg>
                    </button>
                </div>
            </div>
        </>
    )
}
