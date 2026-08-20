import { useEffect, useState } from 'react'
import Navbar from './components/Navbar/Navbar.jsx'
import Baddie from './components/Baddie/Baddie.jsx'
import About from './components/About/About.jsx'
import Skills from './components/Skills/Skills.jsx'
import Project from './components/Project/Project.jsx'
import Contact from './components/Contact/Contact.jsx'
import Footer from './components/Footer/Footer.jsx'

function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light')

  useEffect(() => {
    document.body.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'))
  }

  return (
    <>
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main>
        <Baddie />
        <About />
        <Skills />
        <Project />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App