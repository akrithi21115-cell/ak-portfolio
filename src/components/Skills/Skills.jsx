import './Skills.css'

const skills = [
  { name: 'Python', level: 90 },
  { name: 'C Programming', level: 80 },
  { name: 'HTML', level: 85 },
  { name: 'SQL', level: 80 },
  { name: 'CSS', level: 70 },
  {name:'Numpy', level:80}  
]

function Skills() {
  return (
    <section id="skills" className="skill-section">
      <h2>Skills</h2>
      <div className="skill-grid">
        {skills.map((skill) => (
          <div className="skill-item" data-level={skill.level} key={skill.name}>
            {skill.name}
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills
