import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Smartphone, GraduationCap } from 'lucide-react';
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
            <GraduationCap size={22} />
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
          <Link to="/app" className="btn btn-primary btn-sm">
            <Smartphone size={16} />
            <span>Get the App</span>
          </Link>

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
        <div style={{ marginTop: '16px' }}>
          <Link
            to="/app"
            className="btn btn-primary btn-lg"
            style={{ width: '100%' }}
            onClick={closeMenu}
          >
            <Smartphone size={18} />
            <span>Get the App</span>
          </Link>
        </div>
      </div>
    </header>
  );
}
