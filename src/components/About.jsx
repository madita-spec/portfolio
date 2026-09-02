import React from 'react';
import { Target } from 'lucide-react';

export const About = ({ profile }) => {
  return (
    <section id="about" className="section">
      <div className="container split-layout">
        <div className="reveal-on-scroll">
          <p className="section-tag">
            <Target size={13} />
            <span>Strategic Philosophy</span>
          </p>
          <h2>
            Results-oriented strategy with a focus on <span className="gradient-text">engagement</span>.
          </h2>
        </div>
        <div className="about-content reveal-on-scroll stagger-2">
          {(profile.aboutParagraphs || []).map((paragraph, idx) => (
            <p key={idx}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  );
};
