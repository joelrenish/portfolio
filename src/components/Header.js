import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Header = ({ scrollToTop }) => {
  return (
    <header className="absolute top-0 left-0 w-full z-50 p-6">
      <div className="container mx-auto flex justify-between items-center max-w-7xl">
        {/* Home Button */}
        <Link
          to="/portfolio"
          onClick={scrollToTop}
          className="text-2xl font-bold text-accent relative group"
        >
          Home
          <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
        </Link>

        {/* Navigation Buttons */}
        <nav>
          <ul className="flex space-x-8">
            <li>
              <Link
                to="/about"
                className="text-xl font-medium text-accent relative group"
              >
                About
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li>
            <li>
              <Link
                to="/resume"
                className="text-xl font-medium text-accent relative group"
              >
                Resume
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
