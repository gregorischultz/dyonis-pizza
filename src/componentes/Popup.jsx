import React, { useEffect } from "react";
import imagem from '../assets/IMGpopup.png';

function Popup({ onClose }) {
  // Fecha com ESC
  useEffect(() => {
    const handleKey = (e) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 bg-black/60 backdrop-blur-sm flex justify-center items-center z-50 p-4 animate-fade-in"
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div className="w-full max-w-lg bg-white rounded-2xl overflow-hidden shadow-2xl">
        {/* Header */}
        <div className="bg-footer-color text-white px-6 py-5 flex justify-between items-start">
          <h2 className="text-2xl font-alegreyaSans font-bold leading-snug pr-4">
            Commander ou réserver une table ?
          </h2>
          <button
            onClick={onClose}
            className="shrink-0 w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors text-white text-lg"
            aria-label="Fermer"
          >
            ✕
          </button>
        </div>

        {/* Body */}
        <div className="p-6 flex flex-col sm:flex-row gap-6 items-center">
          <img src={imagem} alt="Commande" className="w-28 h-28 object-contain shrink-0 rounded-xl" />
          <div className="flex flex-col gap-4">
            <div>
              <h3 className="text-musgo font-alegreyaSans font-bold text-xl mb-1">
                Appelez-nous :
              </h3>
              <a
                href="tel:0246910742"
                className="text-footer-color font-alegreyaSans font-bold text-2xl hover:text-footer-light transition-colors"
              >
                02 46 91 07 42
              </a>
            </div>
            <div className="text-musgo/70 font-montserrat text-sm leading-relaxed space-y-1">
              <p><strong className="text-musgo">Mar – Jeu :</strong> 11h30–14h / 18h–22h</p>
              <p><strong className="text-musgo">Ven – Sam :</strong> 11h30–14h / 18h–23h</p>
              <p><strong className="text-musgo">Dimanche :</strong> 18h–22h</p>
            </div>
          </div>
        </div>

        <div className="px-6 pb-6">
          <button onClick={onClose} className="btn-outline w-full">
            Fermer
          </button>
        </div>
      </div>
    </div>
  );
}

export default Popup;
