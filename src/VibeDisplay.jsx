import React from 'react';
import './VibeDisplay.css';

const vibes = [
  '🌈','🔥','💥','🦄','👾','🎉','✨','🌀','🍄','🚀','🧬','🦋','🎨','🧠','🤖','🦚','🦜','🦩','🦕','🦖','🌪️','🌊','⚡','🌌','🧪','💿','🎛️','🎚️'
];

function VibeDisplay() {
  const [idx, setIdx] = React.useState(() => Math.floor(Math.random() * vibes.length));
  const [tick, setTick] = React.useState(0);

  React.useEffect(() => {
    let alive = true;
    const loop = () => {
      if (!alive) return;
      // random hop 1..3 forward for a lively shuffle
      setIdx((i) => (i + 1 + Math.floor(Math.random() * 3)) % vibes.length);
      setTick((t) => t + 1);
      const next = 400 + Math.random() * 800; // 0.4s..1.2s
      timer = setTimeout(loop, next);
    };
    let timer = setTimeout(loop, 500);
    return () => { alive = false; clearTimeout(timer); };
  }, []);

  return (
    <div className="vibe-display">
      <div className="vibe-emoji" aria-live="polite" style={{ transform: `scale(${1 + (tick % 2 ? 0.07 : 0)})` }}>
        {vibes[idx]}
      </div>
      <div className="vibe-text">Vibe Level: <span className="vibe-level">MAXIMUM</span></div>
      {/* ...existing code... */}
    </div>
  );
}

export default VibeDisplay;
