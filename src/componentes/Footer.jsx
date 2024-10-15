import React from "react";
import instaIMG from '../assets/instaImg.png';
import faceIMG from '../assets/faceImg.png';


function Footer() {
    return (
        <footer className="w-full h-full p-16 relative bg-footer-color">
            <div className="absolute left-20 top-10 flex flex-col justify-start items-start gap-6">
                {/* Nome da Pizzaria */}
                <h1 className="text-black text-[39.83px] font-righteous font-normal">Diony’s Pizz</h1>

                {/* Ícones de redes sociais */}
                <div className="flex justify-start items-start gap-8">
                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                        <img src={instaIMG}
                            alt="Instagram"
                            className="w-12 h-12"
                        />
                    </a>
                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                        <img src={faceIMG}
                            alt="Facebook"
                            className="w-12 h-12"
                        />
                    </a>
                </div>
            </div>

            {/* Horários de funcionamento */}
            <div className="absolute h-48 left-[734px] top-10 flex flex-col justify-start gap-1">
                <h2 className="text-black text-xl font-alegreyaSans font-bold leading-[30px]">Horaires d’ouverture</h2>
                <div className="flex justify-start items-center gap-4">
                    <p className="text-black text-sm font-montserrat leading-5">
                        <strong>Mardi - jeudi:</strong><br />
                        11:30 - 14:00  18:00 - 22:00<br /><br />
                        <strong>Vendredi - samedi:</strong><br />
                        11:30 - 14:00  18:00 - 23:00<br /><br />
                        <strong>Dimanche:</strong><br />
                        18:00 - 22:00
                    </p>
                </div>
            </div>

            {/* Endereço */}

            <div className="w-full h-18 flex flex-col justify-end items-end gap-1">
                <h2 className="text-black text-xl font-alegreyaSans font-bold leading-[30px] pr-28">Adresse</h2>
                <p className="text-black text-sm font-montserrat leading-5 pr-1">
                    130 Rue de Mellay,<br />
                    45560 Saint Denis en Val
                </p>
            </div>
            {/* Telefone */}
            <div className="w-full h-14 flex flex-col justify-end items-end gap-1" >
                <h2 className="text-black text-xl font-alegreya-sans font-bold leading-[30px] pr-20" >Téléphone</h2>
                <p className="text-black text-sm font-montserrat leading-5 pr-20">02 46 91 07 42</p>
            </div>

        </footer>


    );
}

export default Footer;