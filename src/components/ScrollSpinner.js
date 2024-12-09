import React, { useState, useEffect } from "react";

const ScrollSpinner = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showCircle, setShowCircle] = useState(false);

  // Update the scroll progress as the user scrolls
  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercentage = (scrollTop / scrollHeight) * 100;
    setScrollProgress(scrollPercentage);

    // Show the circle when the user scrolls down (not at the top)
    setShowCircle(scrollTop > 0);
  };

  // Set up the event listener for scroll
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Circle properties
  const radius = 20;
  const circumference = 2 * Math.PI * radius;

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="fixed top-1/2 right-4 transform -translate-y-1/2 w-12 h-12">
      {/* Circle */}
      <svg
        className="w-full h-full"
        viewBox="0 0 50 50"
        xmlns="http://www.w3.org/2000/svg"
        onClick={scrollToTop} // Make the whole circle clickable
        style={{ cursor: showCircle ? "pointer" : "default" }} // Show pointer only when the circle is visible
      >
        <circle
          cx="25"
          cy="25"
          r={radius}
          stroke="#21392c" // Apply the color directly here using your theme's primary color
          strokeWidth="5"
          fill="transparent"
          strokeDasharray={circumference} // Full circumference
          strokeDashoffset={circumference - (scrollProgress / 100) * circumference} // Reveal stroke based on scroll
          style={{
            transition: "stroke-dashoffset 0.1s ease", // Smooth transition as user scrolls
            transform: "rotate(-90deg)", // Start from top (rotate counterclockwise by 90 degrees)
            transformOrigin: "50% 50%", // Ensure the circle rotates from the center
          }}
        />
      </svg>

      {/* Show the image inside the circle if scroll position is not at the top */}
      {showCircle && (
        <img
          src="portfolio/images/arrow-up.png" // Image inside the circle
          alt="Scroll to Top"
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6"
          onClick={scrollToTop} // Make the image also clickable
          style={{ cursor: "pointer" }}
        />
      )}
    </div>
  );
};

export default ScrollSpinner;
