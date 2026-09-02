import React from 'react';

export const Skills = ({ skills }) => {
  return (
    <section id="skills" className="section muted-section">
      <div className="container">
        <div className="section-heading">
          <p className="section-tag">Skills & Tools</p>
          <h2>My expertise across platforms</h2>
        </div>

        <div className="process-grid">
          {skills.map((skill) => (
            <div key={skill.id} className="process-step">
              <span>{skill.icon}</span>
              <h3>{skill.title}</h3>
              <p>{skill.description}</p>
              {skill.items && (
                <ul className="skill-items">
                  {skill.items.map((item, iIdx) => (
                    <li key={iIdx} className="skill-tag">
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
