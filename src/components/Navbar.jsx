import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { GooglePlayIcon } from './SocialIcons';
import { siteConfig } from '../config/siteConfig';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <header className="navbar">
      <div className="container navbar-container">
        {/* Brand Logo & Name */}
        <Link to="/" className="nav-brand" onClick={closeMenu}>
          <div className="nav-brand-logo">
            <img src="/app-icon.png" alt="FreshMinds Academy" className="nav-brand-img" />
          </div>
          <div className="nav-brand-text">
            <span className="nav-brand-name">{siteConfig.name}</span>
            <span className="nav-brand-sub">Ethiopian Student Academy</span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav>
          <ul className="nav-links">
            {siteConfig.navLinks.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Action Button */}
        <div className="nav-actions">
          <a 
            href={siteConfig.app.googlePlayUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn btn-primary btn-sm nav-cta-btn"
          >
            <GooglePlayIcon size={16} />
            <span>Get on Play Store</span>
          </a>

          {/* Mobile Menu Toggle */}
          <button
            className="mobile-menu-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <div className={`mobile-drawer ${mobileMenuOpen ? 'open' : ''}`}>
        {siteConfig.navLinks.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            className={`mobile-nav-link ${location.pathname === link.path ? 'active' : ''}`}
            onClick={closeMenu}
          >
            {link.label}
          </Link>
        ))}
        <div style={{ marginTop: '16px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <a
            href={siteConfig.app.googlePlayUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary btn-lg"
            style={{ width: '100%', display: 'flex', justifyContent: 'center', gap: '10px' }}
            onClick={closeMenu}
          >
            <GooglePlayIcon size={20} />
            <span>Download on Google Play</span>
          </a>
        </div>
      </div>
    </header>
  );
}
