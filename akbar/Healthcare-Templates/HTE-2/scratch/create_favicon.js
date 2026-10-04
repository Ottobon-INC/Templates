const sharp = require('sharp');
const path = require('path');

const eyeFaviconSvg = `
<svg width="128" height="128" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="gradPri" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0e3b64" />
      <stop offset="100%" stop-color="#1380be" />
    </linearGradient>
    <linearGradient id="gradRuby" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#cd2653" />
      <stop offset="100%" stop-color="#f43f5e" />
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="#ffffff" />
  <g transform="translate(4, 4)">
    <path d="M 10 60 C 35 15, 85 15, 110 60 C 85 105, 35 105, 10 60 Z" 
          fill="none" stroke="url(#gradPri)" stroke-width="8" stroke-linecap="round" stroke-linejoin="round" />
    <circle cx="60" cy="60" r="26" fill="url(#gradPri)" />
    <circle cx="60" cy="60" r="13" fill="#ffffff" />
    <circle cx="60" cy="60" r="8" fill="url(#gradRuby)" />
    <circle cx="56" cy="55" r="3" fill="#ffffff" />
  </g>
</svg>
`;

sharp(Buffer.from(eyeFaviconSvg.trim()))
  .png()
  .toFile(path.join(__dirname, '..', 'public', 'favicon.png'))
  .then(() => console.log('Favicon created successfully'))
  .catch(console.error);
