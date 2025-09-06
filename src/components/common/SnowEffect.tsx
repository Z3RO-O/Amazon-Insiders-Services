import { useEffect, useRef, useState } from 'react';

interface Snowflake {
  id: number;
  x: number;
  y: number;
  size: number;
  speed: number;
  originalX: number;
  deflection: { x: number; y: number };
}

const SnowEffect = () => {
  const [snowflakes, setSnowflakes] = useState<Snowflake[]>([]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number>(0);
  const snowflakesRef = useRef<Snowflake[]>([]);

  useEffect(() => {
    // Initialize snowflakes
    const initialSnowflakes: Snowflake[] = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: Math.random() * window.innerWidth,
      y: -Math.random() * 100,
      size: Math.random() * 0.5 + 1,
      speed: Math.random() * 1,
      originalX: Math.random() * window.innerWidth,
      deflection: { x: 0, y: 0 }
    }));

    snowflakesRef.current = initialSnowflakes;
    setSnowflakes(initialSnowflakes);

    // Mouse tracking
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top
        });
      }
    };

    // Add mouse move listener
    if (containerRef.current) {
      containerRef.current.addEventListener('mousemove', handleMouseMove);
    }

    // Animation loop
    const animate = () => {
      snowflakesRef.current = snowflakesRef.current.map((snowflake) => {
        // Calculate distance to mouse
        const distance = Math.sqrt(
          Math.pow(snowflake.x - mousePosition.x, 2) + Math.pow(snowflake.y - mousePosition.y, 2)
        );

        // Deflection radius (pixels)
        const deflectionRadius = 100;

        if (distance < deflectionRadius && distance > 0) {
          // Calculate deflection force
          const force = (deflectionRadius - distance) / deflectionRadius;
          const angle = Math.atan2(snowflake.y - mousePosition.y, snowflake.x - mousePosition.x);

          // Apply deflection
          const deflectionStrength = force * 2;
          snowflake.deflection.x = Math.cos(angle) * deflectionStrength;
          snowflake.deflection.y = Math.sin(angle) * deflectionStrength;
        } else {
          // Gradually return to original position
          snowflake.deflection.x *= 0.95;
          snowflake.deflection.y *= 0.95;
        }

        // Update position
        snowflake.y += snowflake.speed;
        snowflake.x += snowflake.deflection.x * 0.1;

        // Reset snowflake if it goes off screen
        if (snowflake.y > window.innerHeight + 50) {
          snowflake.y = -50;
          snowflake.x = Math.random() * window.innerWidth;
          snowflake.originalX = snowflake.x;
          snowflake.deflection = { x: 0, y: 0 };
        }

        return snowflake;
      });

      setSnowflakes([...snowflakesRef.current]);
      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      if (containerRef.current) {
        containerRef.current.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, [mousePosition]);

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden pointer-events-none">
      {snowflakes.map((snowflake) => (
        <div
          key={snowflake.id}
          className="absolute text-white opacity-20 select-none pointer-events-none"
          style={{
            left: `${snowflake.x}px`,
            top: `${snowflake.y}px`,
            fontSize: `${snowflake.size}rem`,
            transform: `translate(${snowflake.deflection.x}px, ${snowflake.deflection.y}px)`,
            transition: 'transform 0.1s ease-out'
          }}
        >
          ❄
        </div>
      ))}
    </div>
  );
};

export default SnowEffect;
