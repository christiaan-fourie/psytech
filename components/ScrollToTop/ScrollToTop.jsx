'use client'

import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

const ScrollToTop = () => {
    const [showTopBtn, setShowTopBtn] = useState(false);
  
    useEffect(() => {
      window.addEventListener("scroll", () => {
        if (window.scrollY > 400) {
          setShowTopBtn(true);
        } else {
          setShowTopBtn(false);
        }
      });
    }, []);
  
    const goToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    };
  
    return (
      <div className="fixed bottom-4 right-4">
        {showTopBtn && (
          <button
            className=" text-[#517dbf] p-2 rounded-full border-2 border-[#517dbf] focus:outline-none focus:ring-2 focus:ring-[#2daa52] shadow-md hover:bg-black hover:text-[#517dbf] hover:border-[#517dbf] transition-all duration-300"
            onClick={goToTop}
          >
            <FaArrowUp />
          </button>
        )}
      </div>
    );
  };
  
  export default ScrollToTop;
  