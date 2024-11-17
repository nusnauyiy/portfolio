import { useState, useEffect, useCallback, useRef } from 'react';

const ParticleCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [particles, setParticles] = useState([]);
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isReducedMotion, setIsReducedMotion] = useState(false);
  const lastTouchRef = useRef({ x: 0, y: 0, time: 0 });

  // Physics constants
  const GRAVITY = 0.3;
  const FRICTION = 0.99;
  const BOUNCE_DAMPING = 0.7;
  const PARTICLE_LIFETIME = 2500;
  const MIN_MOVE_DISTANCE = 2; // Minimum pixels moved before spawning new particles
  const BASE_SPAWN_RATE = 0.4; // Base probability of spawning a particle
  const MIN_WAIT_TIME = 40; // Minimum wait time before new particle is spawn


  // Check device capabilities on mount
  useEffect(() => {
    // Check for mobile device
    const checkMobile = () => {
      const userAgent = navigator.userAgent || navigator.vendor || window.opera;
      const isMobileDevice = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(userAgent.toLowerCase());
      const isSmallScreen = window.matchMedia('(max-width: 768px)').matches;
      return isMobileDevice || isSmallScreen;
    };

    // Check for reduced motion preference
    const checkReducedMotion = () => {
      return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    };

    setIsMobile(checkMobile());
    setIsReducedMotion(checkReducedMotion());

    // Listen for changes in reduced motion preference
    const reducedMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const handleReducedMotionChange = (e) => setIsReducedMotion(e.matches);
    reducedMotionQuery.addEventListener('change', handleReducedMotionChange);

    // Listen for screen size changes
    const handleResize = () => {
      setIsMobile(checkMobile());
    };
    window.addEventListener('resize', handleResize);

    return () => {
      reducedMotionQuery.removeEventListener('change', handleReducedMotionChange);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const createParticle = useCallback((x, y, velocityX = 0, velocityY = 0) => {
    // Adjust particle properties based on device
    const sizeFactor = isMobile ? 0.7 : 1; // Smaller particles on mobile
    
    return {
      x,
      y,
      velocityX: (Math.random() - 0.5) * 3 + velocityX * 0.2,
      velocityY: (Math.random() - 0.5) * 3 + velocityY * 0.2,
      size: Math.random() * 10 + 10 * sizeFactor,
      color: `hsl(${Math.random() * 130}, 60%, 50%)`,
      id: Date.now() + Math.random(),
      createdAt: Date.now(),
    };
  }, [isMobile]);

  useEffect(() => {
    // If user prefers reduced motion or device is low-end, don't show effects
    if (isReducedMotion) {
      return;
    }

    let lastX = 0;
    let lastY = 0;
    let lastTime = Date.now();
    let lastSpawnTime = Date.now();
    let animationFrameId;

    const handleMove = (clientX, clientY) => {
      const currentTime = Date.now();
      const timeDelta = Math.max(1, currentTime - lastTime);
      
      const velocityX = (clientX - lastX) / timeDelta;
      const velocityY = (clientY - lastY) / timeDelta;
      const distanceMoved = Math.sqrt(
        Math.pow(clientX - lastX, 2) + 
        Math.pow(clientY - lastY, 2)
      );
      
      setPosition({ x: clientX, y: clientY });
      
      if (distanceMoved >= MIN_MOVE_DISTANCE && 
          currentTime - lastSpawnTime > (isMobile ? MIN_WAIT_TIME * 2 : MIN_WAIT_TIME)) {
        
        const moveSpeed = Math.sqrt(velocityX * velocityX + velocityY * velocityY);
        const spawnProbability = BASE_SPAWN_RATE * Math.min(1, moveSpeed / 10);
        
        if (Math.random() < spawnProbability) {
          setParticles(prevParticles => [
            ...prevParticles,
            createParticle(clientX, clientY, velocityX * 15, velocityY * 15)
          ]);
          lastSpawnTime = currentTime;
        }
      }
      
      lastX = clientX;
      lastY = clientY;
      lastTime = currentTime;
    };

    // Mouse event handlers
    const handleMouseMove = (e) => {
      setIsVisible(true);
      handleMove(e.clientX, e.clientY);
    };

    // Touch event handlers
    const handleTouchMove = (e) => {
      if (e.touches.length > 0) {
        const touch = e.touches[0];
        // Convert touch position to page coordinates
        const clientX = touch.clientX;
        const clientY = touch.clientY;
        
        lastTouchRef.current = { x: clientX, y: clientY, time: Date.now() };
        handleMove(clientX, clientY);
      }
    };

    const handleTouchStart = (e) => {
      if (e.touches.length > 0) {
        setIsVisible(true);
        const touch = e.touches[0];
        lastTouchRef.current = { 
          x: touch.clientX, 
          y: touch.clientY, 
          time: Date.now() 
        };
      }
    };

    const handleTouchEnd = () => {
      setIsVisible(false);
    };

    const updateParticles = () => {
      const currentTime = Date.now();
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;
      
      setParticles(prevParticles => 
        prevParticles
          .filter(particle => currentTime - particle.createdAt < PARTICLE_LIFETIME)
          .map(particle => {
            let { x, y, velocityX, velocityY } = particle;
            
            velocityX *= FRICTION;
            velocityY = velocityY * FRICTION + GRAVITY;
            
            if (x < 0 && velocityX < 0) {
              x = 0;
              velocityX = -velocityX * BOUNCE_DAMPING;
            } else if (x > windowWidth && velocityX > 0) {
              x = windowWidth;
              velocityX = -velocityX * BOUNCE_DAMPING;
            }
            
            if (y < 0 && velocityY < 0) {
              y = 0;
              velocityY = -velocityY * BOUNCE_DAMPING;
            } else if (y > windowHeight && velocityY > 0) {
              y = windowHeight;
              velocityY = -velocityY * BOUNCE_DAMPING;
            }
            
            return {
              ...particle,
              x: x + velocityX,
              y: y + velocityY,
              velocityX,
              velocityY
            };
          })
      );
      
      animationFrameId = requestAnimationFrame(updateParticles);
    };

    // Add event listeners based on device type
    if (isMobile) {
      document.addEventListener('touchmove', handleTouchMove, { passive: true });
      document.addEventListener('touchstart', handleTouchStart, { passive: true });
      document.addEventListener('touchend', handleTouchEnd);
    } else {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseleave', () => setIsVisible(false));
      document.addEventListener('mouseenter', () => setIsVisible(true));
    }
    
    animationFrameId = requestAnimationFrame(updateParticles);

    return () => {
      if (isMobile) {
        document.removeEventListener('touchmove', handleTouchMove);
        document.removeEventListener('touchstart', handleTouchStart);
        document.removeEventListener('touchend', handleTouchEnd);
      } else {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseleave', () => setIsVisible(false));
        document.removeEventListener('mouseenter', () => setIsVisible(true));
      }
      cancelAnimationFrame(animationFrameId);
    };
  }, [isMobile, isReducedMotion, createParticle]);

  // Don't render anything if reduced motion is preferred
  if (isReducedMotion) {
    return null;
  }

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {/* Main cursor - only show on desktop */}
      {isVisible && (
      <div
        className="fixed w-4 h-4 -ml-2 -mt-2 rounded-full mix-blend-difference"
        style={{
          left: position.x,
          top: position.y,
          boxShadow: '0 0 15px rgba(255, 120, 0, 0.6)',
          transition: 'transform 0.1s ease-out',
        }}
      />
    )}
      
      {/* Particles */}
      {particles.map(particle => {
        const age = Date.now() - particle.createdAt;
        const opacity = 1 - (age / PARTICLE_LIFETIME);
        
        return (
          <div
            key={particle.id}
            className="absolute rounded-full"
            style={{
              left: particle.x,
              top: particle.y,
              width: particle.size,
              height: particle.size,
              backgroundColor: particle.color,
              opacity,
              transform: `translate(-50%, -50%) scale(${0.3 + opacity * 0.7})`,
            }}
          />
        );
      })}
    </div>
  );
};

export default ParticleCursor;