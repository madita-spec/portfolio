import React from 'react';

export const Footer = ({ profile }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <p>
          © {currentYear} {profile.name || 'Madita K.C.'} · {profile.role || 'Social Media Manager'}
        </p>

        <div className="social-links" aria-label="Social media links">
          {profile.socialLinks?.videography && (
            <a href={profile.socialLinks.videography} target="_blank" rel="noreferrer">
              Videography
            </a>
          )}
          {profile.socialLinks?.personal && (
            <a href={profile.socialLinks.personal} target="_blank" rel="noreferrer">
              Personal
            </a>
          )}
          {profile.socialLinks?.email && (
            <a href={`mailto:${profile.socialLinks.email}`} target="_blank" rel="noreferrer">
              Email
            </a>
          )}
          {profile.socialLinks?.linkedin && (
            <a href={profile.socialLinks.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          )}
        </div>
      </div>
    </footer>
  );
};
