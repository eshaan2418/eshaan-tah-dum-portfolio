
import React, { useRef, useEffect } from 'react';

const FractalTree: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Responsive canvas sizing
    const updateCanvasSize = () => {
      const isMobile = window.innerWidth < 768;
      const size = isMobile ? 250 : 300;
      canvas.width = size;
      canvas.height = size;
    };

    updateCanvasSize();
    window.addEventListener('resize', updateCanvasSize);

    let animationFrame: number;
    let frameCount = 0;

    const drawBranch = (
      length: number,
      angle: number,
      morphFactor: number
    ) => {
      if (length < 3) return;

      ctx.beginPath();
      ctx.moveTo(0, 0);
      
      // Apply morphing transformation
      const endX = Math.sin(angle) * length * morphFactor;
      const endY = -length;
      
      ctx.lineTo(endX, endY);
      ctx.strokeStyle = '#ffffff';
      ctx.lineWidth = Math.max(1, length / 15);
      ctx.stroke();

      ctx.translate(endX, endY);

      // Modify branch angles during morphing
      const leftAngle = angle + (Math.PI/2 - angle) * (1 - morphFactor);
      const rightAngle = -angle - (Math.PI/2 + angle) * (1 - morphFactor);

      ctx.save();
      ctx.rotate(leftAngle);
      drawBranch(length * 0.67, angle, morphFactor);
      ctx.restore();

      ctx.save();
      ctx.rotate(rightAngle);
      drawBranch(length * 0.67, angle, morphFactor);
      ctx.restore();
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      ctx.save();
      ctx.translate(canvas.width / 2, canvas.height - 20);
      
      // Create a full rotation cycle over 600 frames (about 10 seconds at 60fps)
      const cycleProgress = (frameCount % 600) / 600;
      
      // Create morphing factor that goes from tree (0) to squares (1) and back
      let morphFactor;
      if (cycleProgress < 0.25) {
        // Tree to squares (0 to 1)
        morphFactor = cycleProgress * 4;
      } else if (cycleProgress < 0.75) {
        // Stay as squares (1)
        morphFactor = 1;
      } else {
        // Squares back to tree (1 to 0)
        morphFactor = 1 - ((cycleProgress - 0.75) * 4);
      }
      
      // Base angle varies to create the tree branching
      const baseAngle = Math.PI / 6;
      
      // During square phase, create 4 distinct branches
      if (morphFactor > 0.8) {
        // Draw 4 square-like branches
        const squarePositions = [
          { angle: 0, offsetX: -30, offsetY: -30 },
          { angle: 0, offsetX: 30, offsetY: -30 },
          { angle: 0, offsetX: -30, offsetY: 30 },
          { angle: 0, offsetX: 30, offsetY: 30 }
        ];
        
        squarePositions.forEach(pos => {
          ctx.save();
          ctx.translate(pos.offsetX, pos.offsetY);
          ctx.beginPath();
          ctx.rect(-15, -15, 30, 30);
          ctx.strokeStyle = '#ffffff';
          ctx.lineWidth = 2;
          ctx.stroke();
          ctx.restore();
        });
      } else {
        // Normal fractal tree with morphing
        const initialLength = canvas.width < 300 ? 65 : 80;
        drawBranch(initialLength, baseAngle, Math.max(0, 1 - morphFactor));
      }
      
      ctx.restore();
      
      frameCount++;
      animationFrame = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
      window.removeEventListener('resize', updateCanvasSize);
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
