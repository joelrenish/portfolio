// Header.js
import './Header.css';

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
