import React from 'react';

export const About = ({ profile }) => {
  return (
    <section id="about" className="section">
      <div className="container split-layout">
        <div>
          <p className="section-tag">About</p>
          <h2>{profile.aboutTagline}</h2>
        </div>
        <div className="about-content">
          {(profile.aboutParagraphs || []).map((paragraph, idx) => (
            <p key={idx}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  );
};
