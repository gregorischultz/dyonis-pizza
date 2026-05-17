import React from "react";
import emporter from '../assets/emporte.png';
import evenements from '../assets/evenements.png';
import terrasse from '../assets/terrasse.png';

const services = [
  {
    img: emporter,
    alt: "À emporter",
    title: "À emporter",
    desc: "Commandez par téléphone et rendez-vous sur place pour récupérer votre commande.",
  },
  {
    img: evenements,
    alt: "Événements privés",
    title: "Événements privés",
    desc: "Réservez pour un événement privé ! Pour plus d'informations, prenez contact avec nous.",
  },
  {
    img: terrasse,
    alt: "Terrasse",
    title: "Terrasse",
    desc: "Profitez de votre repas en intérieur climatisé ou en terrasse !",
  },
];

function NosServices() {
  return (
    <section className="section-padding bg-white">
      <h2 className="section-title text-musgo mb-12">Nos services</h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {services.map((s) => (
          <div key={s.title} className="service-card">
            <img src={s.img} alt={s.alt} className="w-20 h-20 object-contain" />
            <div className="text-center">
              <h3 className="text-xl font-alegreyaSans font-bold text-musgo mb-2">{s.title}</h3>
              <p className="text-musgo/60 font-montserrat text-sm leading-relaxed">{s.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default NosServices;
