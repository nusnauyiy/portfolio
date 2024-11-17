import { useState, useEffect } from 'react';
import { Heart } from 'lucide-react';

const KONAMI_CODE = [
  'ArrowUp',
  'ArrowUp',
  'ArrowDown',
  'ArrowDown',
  'ArrowLeft',
  'ArrowRight',
  'ArrowLeft',
  'ArrowRight',
  'b',
  'a',
];

export const KonamiCode = () => {
  const [inputSequence, setInputSequence] = useState([]);
  const [showHearts, setShowHearts] = useState(false);
  const [hearts, setHearts] = useState([]);

  useEffect(() => {
    const handleKeyPress = (event) => {
      const key = event.key.toLowerCase();

      setInputSequence((prev) => {
        const newSequence = [...prev, key];
        // Keep only the last 10 inputs
        if (newSequence.length > 10) {
          return newSequence.slice(1);
        }
        return newSequence;
      });
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, []);

  useEffect(() => {
    const isKonamiCode =
      JSON.stringify(inputSequence.map((k) => k.toLowerCase())) ===
      JSON.stringify(KONAMI_CODE.map((k) => k.toLowerCase()));

    if (isKonamiCode) {
      setShowHearts(true);
      // Create new hearts
      const newHearts = Array(20)
        .fill(0)
        .map((_, i) => ({
          id: i,
          left: Math.random() * 100,
          delay: Math.random() * 2,
          size: 16 + Math.random() * 16,
        }));
      setHearts(newHearts);

      // Reset after animation
      setTimeout(() => {
        setShowHearts(false);
        setInputSequence([]);
      }, 4000);
    }
  }, [inputSequence]);

  if (!showHearts) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className="absolute animate-float"
          style={{
            left: `${heart.left}%`,
            animationDelay: `${heart.delay}s`,
            color: 'red',
          }}>
          <Heart size={heart.size} fill="currentColor" className="animate-pulse" />
        </div>
      ))}
      <div
        className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
        text-4xl font-bold text-center animate-fade-out"
        style={{
          color: 'red',
        }}>
        {'Meet my love at -> harkunwar.com <-'}
      </div>
    </div>
  );
};
