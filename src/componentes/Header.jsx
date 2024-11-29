import React from "react";
import { useState } from "react";
import Popup from "./Popup";
import { Link } from "react-router-dom";

import Logo from '../assets/LOGO.png'

function Header() {
    const [isPopupOpen, setIsPopupOpen] = useState(false); //estado para controlar o popup

    const openPopup = () => { //funçao para abrir o popup
        setIsPopupOpen(true)
    };

    const closePopup = () => { //funçao para fechar o popup
        setIsPopupOpen(false)
    }

    return (
        <header className="bg-creme py-5 px-20 w-full h-20 flex justify-between items-center fixed top-0 left-0 z-50">
            <div className="flex justify-start items-center gap-3">
                <img className="w-[65.77px] h-[60px]" src={Logo} />
                <div className="text-musgo text-lg font-normal break-words font-righteous">Diony's Pizz</div>
            </div>
            <nav className="flex justify-center items-center gap-10">
                <Link to="/" className="li-link">Home</Link>
                <Link to="/Carte" className="li-link">Carte</Link>
                <Link to="Apropos" className="li-link">À propos</Link>
            </nav>
            <div className="h-12 px-[30px] py-3 bg-black rounded-xl border border-[#1B1D16]">
                <button className="text-white text-xl font-alegreyaSans font-bold leading-6 break-words" onClick={openPopup}>
                    Contactez nous
                </button>
            </div>

            {isPopupOpen && <Popup onClose={closePopup}/>} {/*vai redenrizar o popup*/}
        </header>
    );
}

export default Header;
