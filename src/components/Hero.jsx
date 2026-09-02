import React from 'react';
import { ArrowRight, Sparkles, TrendingUp } from 'lucide-react';
import { useTypewriter } from '../hooks/useTypewriter';

export const Hero = ({ profile }) => {
  const roles = [
    'Social Media Manager',
    'Short-form Video Strategist',
    'Influencer Campaign Architect',
    'Growth & Performance Specialist',
  ];

  const typedRole = useTypewriter(roles, 85, 45, 2200);

  return (
    <section className="hero">
      <div className="container hero-grid">
        <div className="hero-copy reveal-on-scroll is-visible">
          <p className="eyebrow">
            <Sparkles size={14} />
            <span>
              <span className="typewriter-text">{typedRole}</span>
              <span className="typewriter-cursor">|</span>
            </span>
          </p>

          <h1>
            Crafting <span className="gradient-text">high-engagement</span> digital strategies that turn brands into conversations.
          </h1>

          <p className="lead">{profile.leadBio}</p>

          <div className="hero-actions">
            <a className="button button-primary" href="#work">
              <span>View Case Studies</span>
              <ArrowRight size={16} />
            </a>
            <a className="button button-secondary" href="#services">
              <span>Explore Services</span>
            </a>
          </div>

          <ul className="hero-stats" aria-label="Performance statistics">
            {(profile.stats || []).map((stat, idx) => (
              <li key={idx} className={`stagger-${idx + 1}`}>
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="hero-card reveal-on-scroll is-visible stagger-2" aria-label="Profile card">
          <div className="profile-pic">
            <span className="profile-pic-avatar">{profile.initials || 'MK'}</span>
            <span className="profile-pic-tag">
              <TrendingUp size={13} style={{ display: 'inline', marginRight: 5, verticalAlign: 'middle' }} />
              Performance & Strategy
            </span>
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
