import React, { useRef } from "react";
import { motion } from "framer-motion";
import { GrLocationPin } from "react-icons/gr";
import { FiArrowDown } from "react-icons/fi";

function Hero() {
  // Create a ref for the video element
  const videoRef = useRef(null);

  return (
    <section className="relative h-screen flex flex-col items-center justify-center bg-secondary">
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
        <motion.h1
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{delay: 1, duration: 0.5}}
          className="text-5xl md:text-7xl font-bold">
          Hi, I'm Joel
        </motion.h1>
        <motion.h1
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{delay: 2, duration: 0.5}}
          className="text-3xl md:text-5xl font-bold">
          I'm a full-stack web developer
        </motion.h1>
        <motion.h3
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{delay: 2, duration: 0.5}}
          className="text-left text-2xl md:text-3xl font-bold text-offwhite">
          <GrLocationPin className="inline" color="offwhite" /> Seattle, WA
        </motion.h3>
      </div>
      <motion.div
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{delay: 4, duration: 0.5}}
        className="absolute mt-[60vh] flex justify-center items-center text-white z-10 ">
          <FiArrowDown className="text-offwhite"/>
      </motion.div>
    </section>
  );
}

export default Hero;
