import React from 'react';

export function TelegramIcon({ size = 20, color = 'currentColor' }) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke={color} 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <line x1="22" y1="2" x2="11" y2="13" />
      <polygon points="22 2 15 22 11 13 2 9 22 2" />
    </svg>
  );
}

export function YouTubeIcon({ size = 20, color = 'currentColor' }) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke={color} 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
      <polygon points="10 15 15 12 10 9 10 15" fill={color} />
    </svg>
  );
}

export function LinkedInIcon({ size = 20, color = 'currentColor' }) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke={color} 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export function GooglePlayIcon({ size = 24 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path d="M3.6 1.8A1.8 1.8 0 0 0 3 3.2v17.6a1.8 1.8 0 0 0 .6 1.4l9.5-9.6L3.6 1.8z" fill="#00C3FF"/>
      <path d="M16.9 8.7L13.1 12.6l3.8 3.8 2.7-1.5c1.1-.6 1.1-1.6 0-2.2l-2.7-1.5z" fill="#FFD400"/>
      <path d="M3.6 22.2l9.5-9.6 3.8 3.8-11.4 6.5c-.7.4-1.4.1-1.9-.7z" fill="#FF3A44"/>
      <path d="M3.6 1.8c.5-.8 1.2-1.1 1.9-.7l11.4 6.5-3.8 3.8-9.5-9.6z" fill="#00E676"/>
    </svg>
  );
}
