import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, ShieldCheck } from 'lucide-react';
import { TelegramIcon, YouTubeIcon, GooglePlayIcon } from './SocialIcons';
import GooglePlayButton from './GooglePlayButton';
import { siteConfig } from '../config/siteConfig';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Brand Column */}
          <div className="footer-brand">
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div className="footer-brand-logo">
                <img src="/app-icon.png" alt="FreshMinds Academy" className="footer-brand-img" />
              </div>
              <span className="footer-brand-title">{siteConfig.name}</span>
            </div>
            <p className="amharic-tag" style={{ color: '#A78BFA', fontSize: '15px' }}>
              {siteConfig.taglineAmharic}
            </p>
            <p className="footer-brand-tagline">
              {siteConfig.description}
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#38BDF8', fontSize: '12px', fontWeight: 600 }}>
              <ShieldCheck size={16} />
              <span>Verified Ethiopian University Learning Companion</span>
            </div>
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
            <h4 className="footer-heading">Community</h4>
            <ul className="footer-links">
              <li>
                <a
                  href={siteConfig.socials.telegram}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ display: 'flex', alignItems: 'center', gap: '8px' }}
                >
                  <TelegramIcon size={16} color="#38BDF8" />
                  <span>Telegram ({siteConfig.community.telegramMembersShort})</span>
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
                  <YouTubeIcon size={16} color="#EF4444" />
                  <span>YouTube ({siteConfig.community.youtubeSubscribersShort})</span>
                  <ArrowUpRight size={13} style={{ opacity: 0.6 }} />
                </a>
              </li>

            </ul>
          </div>

          {/* Official App Column */}
          <div>
            <h4 className="footer-heading">Mobile App</h4>
            <p style={{ fontSize: '12px', color: '#94A3B8', marginBottom: '14px', lineHeight: 1.5 }}>
              Download our mobile app to practice questions, watch videos, and study 100% offline.
            </p>
            <GooglePlayButton />
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
