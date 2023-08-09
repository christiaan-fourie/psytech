'use client'


import React, { useRef, useEffect } from 'react';

const ParticleSystem = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d', { alpha: true });

    // Add a function to calculate the distance between two particles and draw a line if close enough
    function distance(p1, p2) {
        // ... (distance function code)
        var dx = p1.x - p2.x;
        var dy = p1.y - p2.y;
        var dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 80) {
            ctx.beginPath();
            ctx.strokeStyle = '#517dbf';
            // Responsive line with opacity when close
            ctx.lineWidth = Math.random() * 0.05 + (1 - dist / 80) * 2;
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
        }
    }

    // create an array of particles that is round and small
    var particles = [];
    for (var i = 0; i < 50; i++) {
        particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            vx: Math.random() * 6 - 3,
            color: '#2daa52',
            vy: Math.random() * 6 - 3,
            // Make the particles bigger when closer to the center and smaller when further away
            size: Math.random() * 0.5 + 1,
            // Make the particles move at different speeds
            speed: Math.random() * 0.5 + 0.1,   
        });
    }
    

    // Replace setInterval with requestAnimationFrame for smoother animations
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        // Loop through the particles in the array and draw each one
        for (var i = 0; i < particles.length; i++) {
            var p = particles[i];
            ctx.beginPath();
            ctx.fillStyle = p.color;
            ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2, false);
            ctx.fill();
            p.x += p.vx * p.speed;
            p.y += p.vy * p.speed;
            if (p.x < -50) p.x = canvas.width;
            if (p.y < -50) p.y = canvas.height;
            if (p.x > canvas.width + 50) p.x = -50;
            if (p.y > canvas.height + 50) p.y = -50;
            // Check distance between all particles and draw lines if close enough but make them fade out
            for (var j = i + 1; j < particles.length; j++) {
                distance(p, particles[j]);
            }
        }

        // Call the animation again in 1/60 seconds
        window.requestAnimationFrame(animate);
    }

    animate();
  }, []);

  return <canvas ref={canvasRef} width={1200} height={1200} className='fixed w-screen h-screen top-0 left-0 -z-20 overflow-hidden' />;
};

export default ParticleSystem;
