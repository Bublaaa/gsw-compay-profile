import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-scroll";
import * as LucideIcons from "lucide-react";
import logo from "../assets/logo.webp";

const Navbar = ({ links }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-dark/50 backdrop-blur-md fixed top-0 w-full z-50">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        {/* Logo */}
        <div className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src={logo} className="h-8" alt="gsw-logo" />
          <span className="self-center md:text-xl text-lg font-semibold whitespace-nowrap text-accent">
            Garda Setia Waspada
          </span>
        </div>

        {/* Right Actions */}
        <div className="flex items-center space-x-4">
          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="inline-flex items-center justify-center p-2 w-10 h-10 text-sm  rounded-lg md:hidden hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-600 text-gray-400"
          >
            <span className="sr-only">Open main menu</span>
            <LucideIcons.Menu className="w-5 h-5" />
          </button>
        </div>

        {/* Menu */}
        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } w-full md:block md:w-auto`}
          id="navbar-hamburger"
        >
          <ul className="flex flex-col md:flex-row  mt-4 md:mt-0 md:gap-5 rounded-lg bg-transparent md:dark:bg-transparent">
            {links.map((link) => {
              const isActive = location.pathname === link.href;
              return (
                <li key={link.id}>
                  <a
                    href={link.href}
                    className={`block py-2 px-3 text-sm rounded-md ${
                      isActive
                        ? "text-accent font-semibold"
                        : "text-gray-300 font-regular hover:text-white"
                    }`}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {link.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
