import React from "react";
import { Link } from "react-router-dom";


function Header() {
    return (
        <header className="bg-creme py-10 px-20 w-full h-full flex justify-between items-center">
            <div className="text-musgo text-lg font-normal break-words font-righteous">Diony's Pizz</div>
            <nav className="flex justify-center items-center gap-10">
                <Link to="/" className="li-link">Home</Link>
                <Link className="li-link">Carte</Link>
                <Link className="li-link">Services</Link>
                <Link className="li-link">À proppos</Link>
                <Link className="li-link">Contact</Link>
            </nav>
            <div className="h-12 px-[30px] py-3 bg-black rounded-xl border border-[#1B1D16] ">
                <button className="text-white text-xl font-alegreyaSans font-bold leading-6 break-words">
                    Reserver une table
                </button>
            </div>

        </header>
    )

}

export default Header;