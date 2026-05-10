import React, { useEffect, useState } from 'react';

export default function InteractiveBackground() {
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });

  useEffect(() => {
    // Only track mouse on non-touch devices
    const isTouch = matchMedia('(hover: none)').matches;
    if (isTouch) return;

    let requestRef;
    
    const handleMouseMove = (e) => {
      // Use requestAnimationFrame for smoother performance
      cancelAnimationFrame(requestRef);
      requestRef = requestAnimationFrame(() => {
        setMousePos({ x: e.clientX, y: e.clientY });
      });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(requestRef);
    };
  }, []);

  return (
    <div className="interactive-bg">
      {/* Moving Background Bubbles */}
      <div className="bubble bubble-1"></div>
      <div className="bubble bubble-2"></div>
      <div className="bubble bubble-3"></div>
      
      {/* Mouse Follow Glow */}
      <div 
        className="mouse-glow"
        style={{
          transform: `translate(${mousePos.x}px, ${mousePos.y}px)`
        }}
      ></div>
    </div>
  );
}
