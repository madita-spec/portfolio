import React from 'react';
import { Quote } from 'lucide-react';

export const Testimonials = ({ testimonials }) => {
  return (
    <section className="section testimonials">
      <div className="container">
        <div className="section-heading reveal-on-scroll">
          <p className="section-tag">
            <Quote size={13} />
            <span>Value & Reputation</span>
          </p>
          <h2>A clear bias toward performance</h2>
        </div>

        <div className="quote-grid">
          {testimonials.map((t, idx) => (
            <article key={t.id} className={`quote-card reveal-on-scroll stagger-${idx + 1}`}>
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
