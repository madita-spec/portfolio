import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

export const Hero = ({ profile }) => {
  return (
    <section className="hero">
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="eyebrow">
            <Sparkles size={14} />
            <span>{profile.role || 'Social Media Manager'}</span>
          </p>
          <h1>{profile.headline}</h1>
          <p className="lead">{profile.leadBio}</p>

          <div className="hero-actions">
            <a className="button button-primary" href="#work">
              <span>View My Work</span>
              <ArrowRight size={16} />
            </a>
            <a className="button button-secondary" href="#services">
              <span>Explore Services</span>
            </a>
          </div>

          <ul className="hero-stats" aria-label="Performance statistics">
            {(profile.stats || []).map((stat, idx) => (
              <li key={idx}>
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="hero-card" aria-label="Profile card">
          <div className="profile-pic">
            <span className="profile-pic-avatar">{profile.initials || 'MK'}</span>
            <span className="profile-pic-tag">Strategy & Video Execution</span>
          </div>

          <div className="mini-card">
            <p className="small-label">Specialization</p>
            <h3>{profile.specialization}</h3>
          </div>

          <div className="rating-box">
            <div className="stars">{'★'.repeat(profile.ratingStars || 5)}</div>
            <p>{profile.ratingQuote}</p>
          </div>
        </div>
      </div>
    </section>
  );
};
