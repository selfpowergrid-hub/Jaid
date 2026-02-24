import { useState } from 'react'
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
import ImageGalleryModal from './components/ImageGalleryModal'

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState(null)

  return (
    <>
      <Navbar onOpenGallery={setSelectedCategory} />
      <main>
        <Hero />
        <About />
        <Services onOpenGallery={setSelectedCategory} />
        <Fleet />
        <Safety />
        <Contact />
      </main>
      <Footer />
      <AiAssistant />
      <ImageGalleryModal category={selectedCategory} onClose={() => setSelectedCategory(null)} />
    </>
  )
}
