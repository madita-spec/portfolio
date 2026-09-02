import React from 'react';

export const Services = ({ services }) => {
  return (
    <section id="services" className="section muted-section">
      <div className="container">
        <div className="section-heading">
          <p className="section-tag">Core Strengths</p>
          <h2>What I bring to your brand</h2>
        </div>

        <div className="card-grid three-up">
          {services.map((service) => (
            <article key={service.id} className="info-card">
              <div className="icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              {service.highlights && (
                <ul className="card-highlights">
                  {service.highlights.map((h, i) => (
                    <li key={i}>{h}</li>
                  ))}
                </ul>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
