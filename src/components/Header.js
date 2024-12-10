import React from "react";
import { Link } from "react-router-dom";

const Header = ({scrollToTop}) => {
  return (
    <header className="w-full bg-primary shadow-md py-6 z-50">
      <div className="container mx-auto flex justify-between items-center max-w-7xl">
        {/* Home Button */}
        <Link to="/portfolio" onClick={scrollToTop} className="text-2xl font-bold text-secondary hover:text-black transition">
          Home
        </Link>

        {/* Navigation Buttons */}
        <nav>
          <ul className="flex space-x-8">
            <li>
              <Link
                to="/about"
                className="text-xl font-medium text-secondary hover:text-black transition"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/resume"
                className="text-xl font-medium text-secondary hover:text-black transition"
              >
                Resume
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
