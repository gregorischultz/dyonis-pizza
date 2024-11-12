/*Componente da page Home.jsx*/

import React from "react";
import map from '../assets/map.png';
import message from '../assets/message.png';
import location from '../assets/location.png';
import call from '../assets/call.png';


function Visite() {
    return (
        <div className="w-full h-full pt-10 pb-20 px-20 flex flex-col justify-start items-start gap-[72px]">
            <h1 className="text-black self-stretch text-6xl  font-alegreyaSans font-bold leading-[64px] break-words">Rendez nous visite</h1>
            <div className="self-stretch flex justify-start items-start gap-24">
                <div className="flex justify-end items-center">
                    <img src={map} alt="Carte" />
                </div>
                <div className="w-[539px] py-4 flex flex-col justify-start items-start gap-10">
                    <div className="self-stretch h-44 flex flex-col justify-start items-start gap-1">
                        <h2 className="self-stretch text-black text-4xl font-alegreyaSans font-bold leading-[48px] break-words">Horaires d'ouverture</h2>
                        <div className="self-stretch flex justify-start items-center gap-4">
                            <p className="p1">Lundi : <br />Mar-Jeu :<br />Ven-Sam :<br />Dimanche :</p>
                            <p className="p1">Fermé<br />11:30 - 14:00 / 18:00 - 22:00<br />11:30 - 14:00 / 18:00 - 23:00<br />18:00 - 22:00</p>
                        </div>
                    </div>
                    <div className="self-stretch h-32 flex flex-col justify-start items-start gap-4">
                        <div className="div-icons">
                            <div>
                                <img src={location} alt="Localization" />
                            </div>
                            <p className="p2">130 RUE DE MELLAY, 45560 SAINT DENIS EN VAL</p>
                        </div>
                        <div className="div-icons">
                            <div>
                                <img src={call} alt="Telephone" />
                            </div>
                            <p className="p2">02 46 91 07 42</p>
                        </div>
                        <div className="div-icons">
                            <div>
                                <img src={message} alt="E-mail" />
                            </div>
                            <p className="p2">dionyspizz@gmail.com</p>
                        </div>
                        <div className="self-stretch px-10 py-4 bg-black rounded-xl border flex justify-center items-center">
                            <button className="text-[#D6DCE2] text-2xl font-alegreyaSans font-bold leading-7 break-words">Contactez nous !</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Visite;