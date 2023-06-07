import React, { useEffect, useRef } from 'react';

const MatrixBackgroundComponent = () => {
  const canvas = useRef();

  useEffect(() => {
    const ctx = canvas.current.getContext('2d', { alpha: true });


    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;

    const matrix = ' MAYBE8 WE4 ARE3 THE6 ONES2 WHO3 ARE0 BROKEN5 IN1 THE7 FIRST9 PLACE1';
    const columns = canvas.width / 8;
    const drops = [];

    for (let i = 0; i < columns; i++) {
      drops[i] = 1;
    }

    const drawColumn = (i) => {
      ctx.clearRect(i * 12, (drops[i] - 1) * 12, 12, 12); // Clear the previous text

      const wildcart = Math.random() + 10;
      ctx.fillStyle = `rgba(45, 170, 82, ${Math.min(1, drops[i] * 0.01)})`;
      
      const text = matrix[Math.floor(Math.random() * matrix.length)];
      ctx.fillText(text, i * 12, drops[i] * 12);

      if (drops[i] * 12 > canvas.height && Math.random() > 0.1) {
        drops[i] = 9;
      }

      drops[i]++;
    };

    const draw = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.font = '10px monospace';

      for (let i = 0; i < drops.length; i++) {
        setTimeout(() => drawColumn(i), Math.random() * 100);
      }
    };

    const loop = setInterval(draw, 100);

    return () => {
      clearInterval(loop);
    };
  }, []);

  return (
    <div
      style={{
        opacity: '0.9',
        filter: 'blur(0.5px)',
        overflow: 'hidden',
        position: 'fixed',
        width: '1440px',
        height: '1440px',
        right: '0',
        bottom: '0',
        zIndex: -1,
        // Rotate the canvas
        transform: 'rotate(180deg)',
      }}
    >
      <canvas ref={canvas} width={1440} height={1440} />
    </div>
  );
};

export default MatrixBackgroundComponent;
