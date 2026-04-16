export const OneTabLogo = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 1200 600" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <rect x="50" y="150" width="180" height="240" rx="20" stroke="#2AB0E5" stroke-width="15" />
    <line x1="120" y1="175" x2="160" y2="175" stroke="#2AB0E5" stroke-width="4" stroke-linecap="round" />
    <circle cx="140" cy="365" r="5" fill="#2AB0E5" />
    
    <text x="280" y="320" style={{ font: '900 180px Arial' }} fill="black">One</text>
    <text x="610" y="320" style={{ font: '900 180px Arial' }} fill="#2AB0E5">Tab</text>

    <text x="290" y="420" style={{ font: '900 45px Arial', letterSpacing: '15px' }} fill="black">ONE</text>
    <text x="530" y="420" style={{ font: '900 45px Arial', letterSpacing: '15px' }} fill="#2AB0E5">TEACHER</text>
  </svg>
);