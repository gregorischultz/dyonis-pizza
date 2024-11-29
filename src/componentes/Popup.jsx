import React from "react";
import imagem from '../assets/IMGpopup.png';


function Popup({ onClose }) {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="w-[800px] h-auto p-8 bg-white rounded-2xl overflow-hidden flex flex-col justify-start items-center gap-6">
                <h1 className=" text-footer-color text-4xl font-alegreyaSans font-bold leading-[48px] break-words">Vous souhaitez commander ou réserver une table ?</h1>
                <div className="flex justify-center items-center gap-16">
                    <img src={imagem} alt="Imagem" />
                    <div>
                        <h3 className="self-stretch pb-5 text-black text-2xl font-alegreyaSans font-bold leading-[30px] break-words">Appelez-nous au : <br />02 46 91 07 42</h3>
                        <div>
                            <h4 className="text-black pb-2 text-[20px] font-alegreyaSans font-bold leading-[24px] break-words">Pendant nos horaires d’ouverture :</h4>
                            <div>
                                <p>
                                    <span className="text-black text-sm font-montserrat font-bold leading-[18px] break-words">Du mardi au jeudi :</span><br />
                                    <span>11:30 - 14:00 18:00 - 22:00</span><br /><br />
                                    <span className="text-black text-sm font-montserrat font-bold leading-[18px] break-words">Du vendredi au samedi :</span><br />
                                    <span>11:30 - 14:00 18:00 - 23:00</span><br /><br />
                                    <span className="text-black text-sm font-montserrat font-bold leading-[18px] break-words">Le dimanche :</span><br />
                                    <span>18:00 - 22:00</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col self-stretch h-[52px] justify-start items-end gap-[10px]">
                    <div className="inline-flex justify-center items-center pl-[20px] pr-[20px] pt-[16px] pb-[16px] bg-[#1B1D16] rounded-[12px] border">
                        <button className="text-white text-base font-montserrat font-medium leading-[20px] break-words" onClick={onClose}>Fermer</button>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Popup;