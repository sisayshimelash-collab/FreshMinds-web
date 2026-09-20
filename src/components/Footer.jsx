import React from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, ArrowUpRight } from 'lucide-react';
import { TelegramIcon, YouTubeIcon, LinkedInIcon } from './SocialIcons';
import { siteConfig } from '../config/siteConfig';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Brand Column */}
          <div className="footer-brand">
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '10px',
                  background: 'var(--grad-primary)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white'
                }}
              >
                <GraduationCap size={20} />
              </div>
              <span className="footer-brand-title">{siteConfig.name}</span>
            </div>
            <p className="amharic-tag" style={{ color: '#A78BFA', fontSize: '15px' }}>
              {siteConfig.taglineAmharic}
            </p>
            <p className="footer-brand-tagline">
              {siteConfig.description}
            </p>
          </div>

          {/* Explore Links */}
          <div>
            <h4 className="footer-heading">Explore</h4>
            <ul className="footer-links">
              {siteConfig.navLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect Column */}
          <div>
            <h4 className="footer-heading">Connect</h4>
            <ul className="footer-links">
              <li>
                <a
                  href={siteConfig.socials.telegram}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ display: 'flex', alignItems: 'center', gap: '8px' }}
                >
                  <TelegramIcon size={16} />
                  <span>Telegram Community</span>
                  <ArrowUpRight size={13} style={{ opacity: 0.6 }} />
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.socials.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ display: 'flex', alignItems: 'center', gap: '8px' }}
                >
                  <YouTubeIcon size={16} />
                  <span>YouTube Channel</span>
                  <ArrowUpRight size={13} style={{ opacity: 0.6 }} />
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ display: 'flex', alignItems: 'center', gap: '8px' }}
                >
                  <LinkedInIcon size={16} />
                  <span>LinkedIn</span>
                  <ArrowUpRight size={13} style={{ opacity: 0.6 }} />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <p>© {currentYear} {siteConfig.name}. All rights reserved.</p>
          <p>Dedicated to Ethiopian Student Empowerment 🇪🇹</p>
        </div>
      </div>
    </footer>
  );
}
