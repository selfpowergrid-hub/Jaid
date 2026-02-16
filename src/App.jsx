import './index.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import AiAssistant from './components/AiAssistant'
import Hero from './sections/Hero'
import About from './sections/About'
import Services from './sections/Services'
import Fleet from './sections/Fleet'
import Safety from './sections/Safety'
import Contact from './sections/Contact'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Fleet />
        <Safety />
        <Contact />
      </main>
      <Footer />
      <AiAssistant />
    </>
  )
}
