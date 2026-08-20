import { useEffect, useState } from 'react'
import './Baddie.css'


  function getGreeting() {
  const hour = new Date().getHours()
  if (hour < 12) return 'Good Morning'
  if (hour < 17) return 'Good Afternoon'
  return 'Good Evening'
}


function Baddie() {
  const [greeting, setGreeting] = useState(getGreeting())

  useEffect(() => {
    setGreeting(getGreeting())
  }, [])

  return (
    <section className="baddie-section" id="baddie">
      <h1 id="greeting">{greeting}, I am Akrithi Prashanth</h1>
      <p className="tagline">
        I am a datascience enthusiast from Bangalore. I am currently pursuing my
        undergraduate degree from Ramaiah University of Applied Sciences in the
        information science field.
      </p>
      <a href="#projects" className="btn btn-primary">
        View projects
      </a>
      <a href="#contact" className="btn btn-secondary">
        Contact me
      </a>
    </section>
  )
}

export default Baddie
