// Header.js
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-white shadow-md py-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Home Button */}
        <Link to="/portfolio" className="text-xl font-bold text-gray-800">
          Home
        </Link>

        {/* Navigation Buttons */}
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link
                to="/about"
                className="text-gray-600 hover:text-blue-500 transition"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/resume"
                className="text-gray-600 hover:text-blue-500 transition"
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

/*
function Header() {
  return (
    <header className="fixed top-0 w-full bg-white shadow-md z-50">
      <nav className="max-w-7xl mx-auto flex justify-between items-center p-4">
        <h1 className="text-xl font-bold">Joel Renish</h1>
        <ul className="flex gap-4">
          <li><a href="#about">About</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
*/