// src/SurrealMode.js

import React from 'react';
import './SurrealMode.css';

function SurrealMode() {
  return (
    <div className="surreal-mode">
      <div className="surreal-backdrop" aria-hidden />
      <div className="surreal-floats" aria-hidden>
        {Array.from({ length: 8 }).map((_, i) => (
          <span className="surreal-float" key={i} style={{ ['--i']: i + 1 }}>
            {i % 2 ? '🫧' : '💫'}
          </span>
        ))}
      </div>
      <div className="surreal-emoji">🦄🍄🌀👾</div>
      <div className="surreal-text">
        <span>Surreal Vibes Activated!</span>
        <span className="surreal-rainbow">🌈🌈🌈</span>
      </div>
      {/* ...existing code... */}
    </div>
  );
}

export default SurrealMode;
