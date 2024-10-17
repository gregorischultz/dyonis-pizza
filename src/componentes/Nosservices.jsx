import React from "react";
import emporter from '../assets/emporte.png';
import evenements from '../assets/evenements.png';
import terrasse from '../assets/terrasse.png';




function NosServices() {
    return (
        <div className="w-full h-full pt-10 pb-20 pl-20 pr-20 flex flex-col justify-start items-start gap-18">
            <h1 className="text-black text-6xl font-alegreyaSans font-bold leading-[64px] break-words">Nos services</h1>
            <div className="w-full px-[120px] py-4 flex justify-between items-start mt-[72px]">
                <div className="div-cart-NosServices">
                    <img src={emporter} alt="A emporter" />
                    <div className="div-text">
                        <h3 className="h3">À emporter</h3>
                        <p className="p">Commandez par téléphone et <br /> rendez vous sur place pour <br /> récupérer votre commande.</p>
                    </div>
                </div>
                <div className="div-cart-NosServices">
                    <img src={evenements} alt="Événements privés" />
                    <div className="div-text">
                        <h3 className="h3">Événements privés</h3>
                        <p className="p">Réservez pour un événement privé! <br /> Pour plus d’informations prenez <br /> contact avec nous.</p>
                    </div>
                </div>
                <div className="div-cart-NosServices">
                    <img src={terrasse} alt="Terrasse" />
                    <div className="div-text">
                        <h3 className="h3">Terrasse</h3>
                        <p className="p">Profitez de votre repas sur <br /> place en intérieur climatisé, ou <br /> en terrasse !</p>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default NosServices;