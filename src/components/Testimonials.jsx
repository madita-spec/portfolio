import React from 'react';

export const Testimonials = ({ testimonials }) => {
  return (
    <section className="section testimonials">
      <div className="container">
        <div className="section-heading">
          <p className="section-tag">What I Bring</p>
          <h2>A clear bias toward performance</h2>
        </div>

        <div className="quote-grid">
          {testimonials.map((t) => (
            <article key={t.id} className="quote-card">
              <blockquote>"{t.quote}"</blockquote>
              <footer>
                — {t.author} {t.role ? <span>· {t.role}</span> : null}
              </footer>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
