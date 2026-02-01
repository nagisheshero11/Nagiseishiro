import "./style/Skills.css";

function Skills() {
  const skills = [
    "Java","C","C++","Python", "HTML", "CSS","JavaScript", "React", 
    "Spring Boot" , "Node.js", "MongoDB","Mysql", "AWS", "Azure", "Docker",
    "Kubernetes", "Jenkins" ,"Git","Jira","Canva", "Wireshark" , "Maven", "Linux" 
  ];

  const learning = [ "TypeScript", "Next.js" , "Solidity", "Blockchain Development","Swift"];


  return (
    <section className="skills">
      <div className="skills-container">

        <h2>Professional Skills</h2>
        <div className="skills-list">
          {skills.map((skill, i) => (
            <span className="skill-pill" key={i}>
              {skill}
            </span>
          ))}
        </div>

        <h2 className="skills-sub">Currently Learning</h2>
        <div className="skills-list">
          {learning.map((item, i) => (
            <span className="skill-pill muted" key={i}>
              {item}
            </span>
          ))}
        </div>
            

      </div>
    </section>
  );
}

export default Skills;