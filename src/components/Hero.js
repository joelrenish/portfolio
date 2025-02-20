import React, { useRef } from "react";
import { motion } from "framer-motion";
import { GrLocationPin } from "react-icons/gr";

function Hero() {
  // Create a ref for the video element
  const videoRef = useRef(null);

  return (
    <section className="relative h-screen flex items-center justify-center bg-secondary">
      {/* Background video */}
      <video
        ref={videoRef}
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        muted
        loop={true}
      >
        <source src="/portfolio/videos/final_gradient.webm" type="video/webm" />
      </video>

      {/* Main content */}
      <div className="relative z-10 text-white text-left px-4">
        <motion.h1 className="text-5xl md:text-7xl font-bold">
          Hi, I'm Joel
        </motion.h1>
        <motion.h1 className="text-3xl md:text-5xl font-bold">
          I'm a full-stack web developer
        </motion.h1>
        <motion.h3 className="text-left text-2xl md:text-3xl font-bold text-offwhite">
          <GrLocationPin className="inline" color="offwhite" /> Seattle, WA
        </motion.h3>
      </div>
    </section>
  );
}

export default Hero;
