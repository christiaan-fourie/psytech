'use client'
import React, { useEffect, useRef } from 'react';

const Cursor = () => {
  const cursor1 = useRef(null);
  const cursor2 = useRef(null);

  useEffect(() => {
    const handleMouseMove = (event) => {
      cursor1.current.style.left = event.clientX + 8 + 'px';
      cursor1.current.style.top = event.clientY + 8 + 'px';
      cursor2.current.style.left = event.clientX + 'px';
      cursor2.current.style.top = event.clientY + 'px';
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <>
      <div
        id="cursor"
        ref={cursor1}
        className="bg-[#2daa52] h-1 w-1 fixed rounded-full z-[900]"
      ></div>
      <div
        id="cursor2"
        ref={cursor2}
        className="border-2 rounded-full shadow-[0_0_15px_2px_#2daa52] border-[#2daa52] h-9 w-9 fixed transition-all duration-700 ease-out hover:bg-opacity-10 -translate-x-1/4 -translate-y-1/4"
      ></div>
    </>
  );
};

export default Cursor;
