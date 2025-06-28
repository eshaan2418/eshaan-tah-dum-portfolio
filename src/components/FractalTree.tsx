
import React, { useRef, useEffect } from 'react';

const FractalTree: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    canvas.width = 800;
    canvas.height = 600;

    let animationFrame: number;
    let angle = 0;

    const drawBranch = (
      startX: number,
      startY: number,
      length: number,
      angle: number,
      depth: number,
      maxDepth: number
    ) => {
      if (depth > maxDepth) return;

      const endX = startX + Math.cos(angle) * length;
      const endY = startY + Math.sin(angle) * length;

      // Color gradient based on depth
      const hue = (depth * 30 + Date.now() * 0.1) % 360;
      ctx.strokeStyle = `hsl(${hue}, 70%, ${70 - depth * 8}%)`;
      ctx.lineWidth = Math.max(1, maxDepth - depth);

      ctx.beginPath();
      ctx.moveTo(startX, startY);
      ctx.lineTo(endX, endY);
      ctx.stroke();

      if (depth < maxDepth) {
        const newLength = length * 0.7;
        const angleOffset = Math.sin(Date.now() * 0.001 + depth) * 0.3;
        
        drawBranch(endX, endY, newLength, angle - 0.5 + angleOffset, depth + 1, maxDepth);
        drawBranch(endX, endY, newLength, angle + 0.5 + angleOffset, depth + 1, maxDepth);
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Dark background with subtle gradient
      const gradient = ctx.createRadialGradient(
        canvas.width / 2, canvas.height / 2, 0,
        canvas.width / 2, canvas.height / 2, canvas.width / 2
      );
      gradient.addColorStop(0, 'rgba(20, 20, 30, 0.1)');
      gradient.addColorStop(1, 'rgba(10, 10, 20, 0.3)');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw the main trunk
      const trunkHeight = 100;
      const startX = canvas.width / 2;
      const startY = canvas.height - 50;

      drawBranch(startX, startY, trunkHeight, -Math.PI / 2, 0, 8);

      angle += 0.01;
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
        className="max-w-full h-auto border border-gray-800 rounded-lg shadow-2xl"
        style={{ background: 'linear-gradient(135deg, #0c0c0c 0%, #1a1a2e 100%)' }}
      />
    </div>
  );
};

export default FractalTree;
