import { useState } from 'react'
import './Project.css'

const projects = [
  {
    id: 1,
    name: 'Hotel Management Project',
    category: 'python',
    image: 'hotel management.jpg',
    description:
      'A Python-based hotel management system that streamlines guest check-ins and check-outs, manages room availability, retrieves guest details, and allows users to cancel bookings. Built to simplify essential hotel operations through a clear and efficient system.',
    tags: ['Python'],
    github: '#',
    demo: '#',
  },
  {
    id: 2,
    name: 'College Bazar',
    category: 'web',
    image: 'college.jpg.jpg',
    description:
      'Helps students buy and sell items at affordable prices. The website provides a simple platform to list items, browse products, and find budget-friendly deals within the student community.',
    tags: ['HTML', 'CSS'],
    github: '#',
    demo: '#',
  },
  {
    id: 3,
    name: 'Portfolio',
    category: 'web',
    image: 'portfolio.jpg',
    description:
      'A responsive personal portfolio website built using HTML, CSS, and JavaScript to showcase my skills, projects, achievements, and technical experience through a clean and interactive interface.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    github: '#',
    demo: '#',
  },
  {
    id: 4,
    name: 'Fake News Detector',
    category: 'web',
    image: 'fake.jpg',
    description:
      'Analyze news articles and identify whether the information is likely to be real or fake using AI-powered detection.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    github: '#',
    demo: '#',
  },
  {
    id: 5,
    name: 'RoboControl',
    category: 'IoT',
    image: '/iot.jpg',
    description:
      'An IoT project where an ESP8266 microcontroller hosts its own Wi-Fi access point and a built-in web server, serving a mobile-responsive control panel directly from the chip. Users connect their phone to the ESP8266\'s network and control an LED and servo motor in real time via a browser interface — no app installation or internet connection required.',
    tags: ['C++', 'Arduino', 'HTML', 'CSS', 'JavaScript', 'IoT', 'ESP8266'],
    github: '#',
    demo: '#',
  },
  {
    id: 6,
    name: 'RoboSwarm',
    category: 'IoT',
    image: 'iisc.jpg',
    description:
      'A fleet control system for four ESP8266-based robots, using MQTT publish/subscribe messaging to enable individual or synchronized broadcast control over Wi-Fi. Each robot subscribes to its own command topic as well as a shared broadcast topic, supporting real-time directional movement, adjustable speed, and pre-programmed movement macros like spin and square-path routines.',
    tags: ['C++', 'Arduino', 'MQTT', 'IoT', 'ESP8266', 'Robotics'],
    github: '#',
    demo: '#',
  },
  {
    id: 7,
    name: 'UDP Robot Controller',
    category: 'IoT',
    image: 'iii.jpeg',
    description:
      'Built during a hands-on robotics workshop at IISc Bangalore, this project involved coding a Wi-Fi-connected robot to receive real-time movement commands (forward, backward, left, right) over UDP from a remote controller. Implemented a watchdog timeout that automatically stops the robot if no command is received within 1.5 seconds, preventing runaway movement on connection loss — alongside servo motor control for added functionality.',
      
    tags: ['C++', 'Arduino',' UDP ','IoT' ,'ESP8266' ,'Robotics'],
    github: '#',
    demo: '#',
  },
  {
    id: 8,
    name: 'Student -Record',
    category: 'C-programing',
    image: 'c.jpg',
    description:
      'A C-based student record management system that stores student details and subject-wise marks, allowing users to retrieve individual student information using their unique student ID. The program calculates each students average, and computes overall class average marks across all students — built using core C concepts like structures, arrays, and file/data handling to manage and process academic records efficiently.',
      
    tags: ['C-programming'],
    github: '#',
    demo: '#',
  },
]

const filters = [
  { key: 'all', label: 'All' },
  { key: 'python', label: 'Python' },
  { key: 'web', label: 'Web' },
  { key: 'IoT', label: 'IoT' },
  {key:"C-programing" , label:"C"}
]

function Project() {
  const [activeFilter, setActiveFilter] = useState('all')

  const filtered =
    activeFilter === 'all'
      ? projects
      : projects.filter((project) => project.category === activeFilter)

  return (
    <section id="projects" className="project-section">
      <h2>Projects</h2>

      <div className="filter-buttons">
        {filters.map((f) => (
          <button
            key={f.key}
            className={`filter-btn${activeFilter === f.key ? ' active' : ''}`}
            data-filter={f.key}
            onClick={() => setActiveFilter(f.key)}
          >
            {f.label}
          </button>
        ))}
      </div>

      <div className="project-grid">
        {filtered.map((project) => (
          <article className="project-griid" data-category={project.category} key={project.id}>
            <img src={project.image} alt={project.name} />
            <div className="project-griid-body">
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              <div className="project-tags">
                {project.tags.map((tag) => (
                  <span className="tag" key={tag}>
                    {tag}
                  </span>
                ))}
              </div>
              <div className="project-links">
                <a href={project.github} className="btn">
                  Github
                </a>
                <a href={project.demo} className="btn">
                  Live Demo
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Project