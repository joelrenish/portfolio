import React, { useRef } from "react";

function Hero() {
  // Create a ref for the video element
  const videoRef = useRef(null);

  return (
    <section className="relative h-screen flex items-center justify-center bg-transparent">
      {/* Background video */}
      <video
        ref={videoRef}
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        muted
        loop="true"
      >
        <source src="/portfolio/videos/Particles.webm" type="video/webm" />
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
