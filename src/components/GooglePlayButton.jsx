import React from 'react';
import { GooglePlayIcon } from './SocialIcons';
import { siteConfig } from '../config/siteConfig';

export default function GooglePlayButton({ className = '', style = {}, size = 'normal' }) {
  return (
    <a
      href={siteConfig.app.googlePlayUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`btn-google-play ${size === 'lg' ? 'btn-google-play-lg' : ''} ${className}`}
      style={style}
    >
      <div className="google-play-icon-wrap">
        <GooglePlayIcon size={size === 'lg' ? 26 : 22} />
      </div>
      <div className="btn-google-play-text">
        <span className="btn-google-play-sub">GET IT ON</span>
        <span className="btn-google-play-title">Google Play</span>
      </div>
    </a>
  );
}
