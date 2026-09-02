import React, { useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

export const Navbar = ({ profile }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="container nav">
        <a href="#" className="brand">
          <span className="brand-mark">{profile.initials || 'MK'}</span>
          <span>{profile.name || 'Madita K.C.'}</span>
        </a>

        <nav className={`main-nav ${mobileMenuOpen ? 'open' : ''}`} aria-label="Main navigation">
          <a href="#about" onClick={() => setMobileMenuOpen(false)}>About</a>
          <a href="#services" onClick={() => setMobileMenuOpen(false)}>Services</a>
          <a href="#work" onClick={() => setMobileMenuOpen(false)}>Work</a>
          <a href="#skills" onClick={() => setMobileMenuOpen(false)}>Skills</a>
          <a href="#contact" onClick={() => setMobileMenuOpen(false)}>Contact</a>
        </nav>

        <div className="nav-actions">
          <a className="button button-primary button-sm" href="#contact">
            <span>Book a Call</span>
            <ArrowUpRight size={15} />
          </a>

          <button
            className="mobile-menu-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </header>
  );
};
