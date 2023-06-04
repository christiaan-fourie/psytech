'use client'

import React, { useState, useEffect } from 'react';

const Cursor = () => {
    // State for the pointer x, y position
    const [position, setPosition] = useState({ x: 0, y: 0 });
    //   Delayed position state
    const [delayedPosition, setDelayedPosition] = useState({ x: 0, y: 0 });


    // Use an effect that gets the mouse movements
    useEffect(() => {
        const setFromEvent = (e) => setPosition({ x: e.clientX, y: e.clientY });
        window.addEventListener('mousemove', setFromEvent);
        return () => {
        window.removeEventListener('mousemove', setFromEvent);
        };
    }, []);

    // Spawn a little ring that disapears after 0.5s
    useEffect(() => {
        // Don't spawn a ring on the first render
        if (position.x === 0 && position.y === 0) return;
        // Set the delayed position to be the current position
        setDelayedPosition(position);
        // Set a timeout to reset it after 0.5s
        const timeout = setTimeout(() => setDelayedPosition({ x: 0, y: 0 }), 500);
        // Clear the timeout if the component unmounts
        return () => clearTimeout(timeout);
    }, [position]);

    

    

  
    //   Log it
    console.log(position);
    console.log(delayedPosition);




    return (
        <div>
            <div
                className='fixed z-50 w-1 h-1 bg-white rounded-full pointer-events-none transform -translate-x-4-translate-y-4'
                style={{ left: delayedPosition.x, top: delayedPosition.y }}
                >
            </div>
            <div
                className='fixed z-50 w-1 h-1 bg-white rounded-full pointer-events-none transform -translate-x-4-translate-y-4'
                style={{ left: position.x, top: position.y }}
                >
            </div>
        </div>    
    );
};

export default Cursor;
