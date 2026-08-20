import { useEffect, useRef, useState } from 'react'
import './Navbar.css'

const links = [
  { href: '#About', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'contact' },
]

function Navbar({ theme, toggleTheme }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeId, setActiveId] = useState('')
  const headerRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)

      const sections = document.querySelectorAll('section[id]')
      let current = ''
      sections.forEach((section) => {
        if (window.scrollY >= section.offsetTop - 100) {
          current = section.getAttribute('id')
        }
      })
      setActiveId(current)
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`site-header${scrolled ? ' scrolled' : ''}`} ref={headerRef}>
      <nav className="navbar">
        <div className="logo">⦮ ⦯</div>
        <ul className={`nav-list${menuOpen ? ' open' : ''}`}>
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={activeId === link.href.slice(1) ? 'active' : ''}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="nav-controls">
          <button
            className="dark-toggle"
            title="toggle dark"
            aria-label="toggle darkmode"
            onClick={toggleTheme}
          >
            {theme === 'dark' ? '☀' : '⏾'}
          </button>
          <button
            className="nav-toggle"
            aria-label="toggle navigation"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            ☰
          </button>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
