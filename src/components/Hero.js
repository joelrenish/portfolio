import React, { useRef } from "react";

function Hero() {
  // Create a ref for the video element
  const videoRef = useRef(null);

  // Event handler to pause the video when it ends
  const handleVideoEnd = () => {
    if (videoRef.current) {
      videoRef.current.pause(); // Pause the video when it ends
    }
  };

  return (
    <section className="relative h-screen flex items-center justify-center bg-black">
      {/* Background video */}
      <video
        ref={videoRef}
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        muted
        onEnded={handleVideoEnd} // Play once and stop when the video ends
      >
        <source src="/portfolio/animations/hero.mp4" type="video/mp4" />
      </video>

      {/* Main content */}
      <div className="relative z-10 text-white text-center px-4">
        <h1 className="text-5xl md:text-7xl font-bold">
          Hi, I'm Joel
        </h1>
      </div>
    </section>
  );
}

export default Hero;
