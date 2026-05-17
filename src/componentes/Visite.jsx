import React from "react";
import map from '../assets/map.png';
import location from '../assets/location.png';
import call from '../assets/call.png';
import message from '../assets/message.png';

function Visite() {
  return (
    <section className="section-padding bg-creme">
      <h2 className="section-title text-musgo mb-12">Rendez-nous visite</h2>

      <div className="flex flex-col lg:flex-row gap-12 items-start">
        {/* Mapa */}
        <div className="w-full lg:w-1/2 rounded-2xl overflow-hidden shadow-lg">
          <img src={map} alt="Carte Saint-Denis-en-Val" className="w-full h-auto object-cover" />
        </div>

        {/* Info */}
        <div className="w-full lg:w-1/2 flex flex-col gap-8">
          {/* Horaires */}
          <div>
            <h3 className="text-2xl font-alegreyaSans font-bold text-musgo mb-4">Horaires d'ouverture</h3>
            <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-musgo font-montserrat text-sm">
              <span className="font-bold">Lundi</span>          <span className="text-musgo/50">Fermé</span>
              <span className="font-bold">Mardi – Jeudi</span>  <span>11h30–14h / 18h–22h</span>
              <span className="font-bold">Vendredi – Samedi</span><span>11h30–14h / 18h–23h</span>
              <span className="font-bold">Dimanche</span>        <span>18h–22h</span>
            </div>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-3">
            <div className="contact-row text-musgo">
              <img src={location} alt="" className="w-5 h-5 shrink-0" />
              <span>130 Rue de Mellay, 45560 Saint-Denis-en-Val</span>
            </div>
            <div className="contact-row">
              <img src={call} alt="" className="w-5 h-5 shrink-0" />
              <a href="tel:0246910742" className="text-musgo hover:text-footer-color transition-colors">
                02 46 91 07 42
              </a>
            </div>
            <div className="contact-row">
              <img src={message} alt="" className="w-5 h-5 shrink-0" />
              <a href="mailto:dionyspizz@gmail.com" className="text-musgo hover:text-footer-color transition-colors break-all">
                dionyspizz@gmail.com
              </a>
            </div>
          </div>

          <a href="tel:0246910742" className="btn-primary inline-block text-center w-full sm:w-auto">
            Appelez-nous
          </a>
        </div>
      </div>
    </section>
  );
}

export default Visite;
