import Navbar from './components/Navbar.tsx'
import Hero from './components/Hero.tsx'
import About from './components/About.tsx'
import Skills from './components/Skills.tsx'
import Projects from './components/Projects.tsx'
import Contact from './components/Contact.tsx'
import Footer from './components/Footer.tsx'
import { useEffect, useState } from 'react'

function App() {
 const [darkMode, setDarkMode] = useState(false)

 useEffect(() => {
  document.documentElement.classList.toggle('dark', darkMode)
 }, [darkMode])

 return (
 <div className="min-h-screen bg-[#eef9ff] text-[#12304a] transition-colors duration-300 dark:bg-[#0d1c2b] dark:text-[#e5f5ff]">
  <Navbar darkMode={darkMode} onToggleTheme={() => setDarkMode((current) => !current)} />
  <main>
   <Hero />
   <About />
   <Skills />
   <Projects />
   <Contact />
  </main>
  <Footer />
 </div>
 )
}
export default App