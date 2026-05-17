import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Popup from "./Popup";
import Logo from '../assets/LOGO.png';

const links = [
  { name: "Home", to: "/" },
  { name: "Carte", to: "/Carte" },
  { name: "À propos", to: "/Apropos" },
];

function Header() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Fecha o menu mobile ao navegar
  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled ? "bg-creme shadow-md py-3" : "bg-creme py-5"
        }`}
      >
        <div className="px-4 sm:px-8 md:px-16 lg:px-20 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 shrink-0">
            <img className="w-[52px] h-[48px] object-contain" src={Logo} alt="Logo Diony's Pizz" />
            <span className="text-musgo text-lg font-righteous hidden sm:block">Diony's Pizz</span>
          </Link>

          {/* Nav desktop */}
          <nav className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <Link
                key={link.name}
                to={link.to}
                className={`nav-link ${location.pathname === link.to ? "nav-link-active" : ""}`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* CTA + hamburger */}
          <div className="flex items-center gap-4">
            <button
              className="btn-primary hidden sm:block"
              onClick={() => setIsPopupOpen(true)}
            >
              Contactez-nous
            </button>

            {/* Hamburger */}
            <button
              className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5 rounded-lg hover:bg-creme-dark transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Menu"
            >
              <span className={`block h-0.5 bg-musgo transition-all duration-300 ${mobileOpen ? "w-6 rotate-45 translate-y-2" : "w-6"}`} />
              <span className={`block h-0.5 bg-musgo transition-all duration-300 ${mobileOpen ? "opacity-0 w-0" : "w-5"}`} />
              <span className={`block h-0.5 bg-musgo transition-all duration-300 ${mobileOpen ? "w-6 -rotate-45 -translate-y-2" : "w-6"}`} />
            </button>
          </div>
        </div>

        {/* Menu mobile */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            mobileOpen ? "max-h-72 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <nav className="flex flex-col gap-1 px-4 py-4 border-t border-creme-dark animate-slide-down">
            {links.map((link) => (
              <Link
                key={link.name}
                to={link.to}
                className={`px-4 py-3 rounded-lg font-alegreyaSans font-bold text-lg transition-colors ${
                  location.pathname === link.to
                    ? "bg-footer-color text-white"
                    : "text-musgo hover:bg-creme-dark"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <button
              className="mt-2 btn-primary text-center"
              onClick={() => { setIsPopupOpen(true); setMobileOpen(false); }}
            >
              Contactez-nous
            </button>
          </nav>
        </div>
      </header>

      {isPopupOpen && <Popup onClose={() => setIsPopupOpen(false)} />}
    </>
  );
}

export default Header;
