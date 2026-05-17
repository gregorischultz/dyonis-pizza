import React from "react";
import { Link } from "react-router-dom";
import instaIMG from '../assets/instaImg.png';
import faceIMG from '../assets/faceImg.png';
import Logo from '../assets/LOGO.png';

function Footer() {
  return (
    <footer className="w-full bg-footer-color text-white">
      <div className="px-4 sm:px-8 md:px-16 lg:px-20 py-12 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">

        {/* Logo + redes sociais */}
        <div className="flex flex-col gap-5">
          <Link to="/" className="flex items-center gap-3">
            <img className="w-[52px] h-[48px] object-contain" src={Logo} alt="Logo" />
            <span className="text-white text-lg font-righteous">Diony's Pizz</span>
          </Link>
          <p className="text-white/70 text-sm font-montserrat leading-relaxed">
            Pizzeria artisanale à Saint-Denis-en-Val.<br />
            Des pizzas généreuses, cuites avec passion.
          </p>
          <div className="flex gap-4">
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"
               className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/25 transition-colors">
              <img src={instaIMG} alt="Instagram" className="w-5 h-5" />
            </a>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"
               className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/25 transition-colors">
              <img src={faceIMG} alt="Facebook" className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex flex-col gap-3">
          <h3 className="text-white font-alegreyaSans font-bold text-lg mb-1">Navigation</h3>
          <Link to="/" className="text-white/70 font-montserrat text-sm hover:text-white transition-colors">Accueil</Link>
          <Link to="/Carte" className="text-white/70 font-montserrat text-sm hover:text-white transition-colors">Notre carte</Link>
          <Link to="/Apropos" className="text-white/70 font-montserrat text-sm hover:text-white transition-colors">À propos</Link>
        </div>

        {/* Horaires */}
        <div className="flex flex-col gap-2">
          <h3 className="text-white font-alegreyaSans font-bold text-lg mb-1">Horaires</h3>
          <div className="text-white/70 font-montserrat text-sm leading-relaxed space-y-1">
            <p><span className="text-white/50">Lundi</span> — Fermé</p>
            <p><span className="text-white/50">Mar – Jeu</span> — 11h30–14h / 18h–22h</p>
            <p><span className="text-white/50">Ven – Sam</span> — 11h30–14h / 18h–23h</p>
            <p><span className="text-white/50">Dimanche</span> — 18h–22h</p>
          </div>
        </div>

        {/* Contact */}
        <div className="flex flex-col gap-2">
          <h3 className="text-white font-alegreyaSans font-bold text-lg mb-1">Contact</h3>
          <div className="text-white/70 font-montserrat text-sm leading-relaxed space-y-2">
            <p>130 Rue de Mellay<br />45560 Saint-Denis-en-Val</p>
            <a href="tel:0246910742" className="block hover:text-white transition-colors">02 46 91 07 42</a>
            <a href="mailto:dionyspizz@gmail.com" className="block hover:text-white transition-colors break-all">dionyspizz@gmail.com</a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 px-4 sm:px-8 md:px-20 py-4">
        <p className="text-white/40 text-xs font-montserrat text-center">
          © {new Date().getFullYear()} Diony's Pizz · Saint-Denis-en-Val
        </p>
      </div>
    </footer>
  );
}

export default Footer;
