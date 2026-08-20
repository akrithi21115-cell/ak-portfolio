import './Footer.css'

function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <p>&copy; {year} Akrithi. All rights reserved</p>
      <nav aria-label="social-links">
        <a href="https://www.linkedin.com/in/akrithi-prashanth-00977b383" target="_blank" rel="noreferrer">
          LinkedIn
        </a>
        <a href="https://github.com/akrithi67" target="_blank" rel="noreferrer">
          Github
        </a>
      </nav>
    </footer>
  )
}

export default Footer
