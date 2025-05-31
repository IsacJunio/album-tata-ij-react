import { Link } from "react-router-dom";
import { FaUser, FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="flex flex-col md:flex-row items-center justify-between bg-gray-950 text-white font px-4 py-3 fixed w-full z-10">
      <div className="text-xl font-bold mb-2 md:mb-0">Album-Tata-Isac</div>

      <button
        className=" md:hidden absolute right-4 top-4 z-20"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Abrir menu"
      >
        {menuOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
      </button>

      <nav
        className={`
          flex-col gap-4 absolute top-full left-0 w-full bg-gray-950 px-4 py-4
          md:static md:flex md:flex-row md:items-center md:gap-4 md:w-auto md:bg-transparent md:p-0
          transition-all duration-300
          ${menuOpen ? "flex" : "hidden"} md:flex
        `}
      >
        <a
          href="#hero"
          className="hover:text-purple-500 transition text-2xl"
          onClick={() => setMenuOpen(false)}
        >
          Home
        </a>
        <a
          href="#album"
          className="hover:text-purple-500 transition text-2xl"
          onClick={() => setMenuOpen(false)}
        >
          Album
        </a>
        <a
          href="#contador"
          className="hover:text-purple-500 transition text-2xl"
          onClick={() => setMenuOpen(false)}
        >
          Contador
        </a>
      </nav>
    </div>
  );
};

export default Header;
