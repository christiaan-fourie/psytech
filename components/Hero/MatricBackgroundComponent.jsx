import React, { useEffect, useRef } from 'react';

const matrix = ' MAYBE8 WE4 ARE3 THE6 ONES2 WHO3 ARE0 BROKEN5 IN1 THE7 FIRST9 PLACE1';
const columns = Math.ceil(window.innerWidth / 8);
const drops = Array(columns).fill(1);

const MatrixBackgroundComponent = () => {
  const canvasRef = useRef();

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d', { alpha: true });
    const canvasHeight = window.innerHeight;
    const canvasWidth = window.innerWidth;
    const columnWidth = 12;

    canvas.height = canvasHeight;
    canvas.width = canvasWidth;
    ctx.font = '10px monospace';

    const drawColumn = (i) => {
      const drop = drops[i];
      ctx.clearRect(i * columnWidth, (drop - 1) * columnWidth, columnWidth, columnWidth);

      const opacity = Math.min(1, drop * 0.01);
      ctx.fillStyle = `rgba(45, 170, 82, ${opacity})`;

      const text = matrix[Math.floor(Math.random() * matrix.length)];
      ctx.fillText(text, i * columnWidth, drop * columnWidth);

      if (drop * columnWidth > canvasHeight && Math.random() > 0.1) {
        drops[i] = 9;
      }

      drops[i]++;
    };

    const draw = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0)';
      ctx.fillRect(0, 0, canvasWidth, canvasHeight);

      for (const [i, drop] of drops.entries()) {
        setTimeout(() => drawColumn(i), Math.random() * 100);
      }

      requestAnimationFrame(draw);
    };

    const animationLoop = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(animationLoop);
    };
  }, []);

  return (
    <div
      style={{
        opacity: '0.9',
        filter: 'blur(0.5px)',
        overflow: 'hidden',
        position: 'fixed',
        width: '100%',
        height: '100%',
        right: '0',
        bottom: '0',
        zIndex: -1,
        // Rotate the canvas
        transform: 'rotate(180deg)',
      }}
    >
      <canvas ref={canvasRef} width={window.innerWidth} height={window.innerHeight} />
    </div>
  );
};

export default MatrixBackgroundComponent;
