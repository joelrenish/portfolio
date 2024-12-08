import React from "react";
import { Link } from "react-router-dom";

const Header = ({scrollToTop}) => {
  return (
    <header className="sticky top-0 left-0 w-full bg-white shadow-md py-6 z-50">
      <div className="container mx-auto flex justify-between items-center max-w-7xl">
        {/* Home Button */}
        <Link to="/portfolio" onClick={scrollToTop} className="text-2xl font-bold text-black">
          Home
        </Link>

        {/* Navigation Buttons */}
        <nav>
          <ul className="flex space-x-8">
            <li>
              <Link
                to="/about"
                className="text-xl font-medium text-gray-600 hover:text-black transition"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/resume"
                className="text-xl font-medium text-gray-600 hover:text-black transition"
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
