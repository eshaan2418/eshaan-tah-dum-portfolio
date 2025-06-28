
import React, { useRef, useEffect } from 'react';

const FractalTree: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    canvas.width = 400;
    canvas.height = 400;

    let animationFrame: number;
    let frameCount = 0;

    const drawBranch = (
      length: number,
      angle: number
    ) => {
      if (length < 4) return;

      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.lineTo(0, -length);
      ctx.strokeStyle = 'white';
      ctx.lineWidth = Math.max(1, length / 20);
      ctx.stroke();

      ctx.translate(0, -length);

      ctx.save();
      ctx.rotate(angle);
      drawBranch(length * 0.67, angle);
      ctx.restore();

      ctx.save();
      ctx.rotate(-angle);
      drawBranch(length * 0.67, angle);
      ctx.restore();
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      ctx.save();
      ctx.translate(canvas.width / 2, canvas.height);
      
      // Vary the angle using sin for smooth animation
      const currentAngle = Math.sin(frameCount * 0.01) * (Math.PI / 8) + (Math.PI / 6);
      
      drawBranch(100, currentAngle);
      
      ctx.restore();
      
      frameCount++;
      animationFrame = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, []);

  return (
    <div className="flex justify-center items-center">
      <canvas
        ref={canvasRef}
        className="max-w-full h-auto"
        style={{ background: 'transparent' }}
      />
    </div>
  );
};

export default FractalTree;
