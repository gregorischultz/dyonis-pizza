/*Componente da page Home.jsx*/

import React from "react";
import pizzaCard from '../assets/pizzaCard.png'

function CarteSection() {
    return (
        <div className="h-full w-full px-20 py-10 flex flex-col justify-center items-end gap-10">
            <h1 className="self-stretch text-center text-black text-[64px] font-alegreyaSans font-bold leadind-[64px] break-words">Carte</h1>
            <h4 className="p">Découvrez nos pizzas base crème ou sauce tomate ainsi que nos paninis ! </h4>
            <div className="self-stretch flex justify-center items-start gap-8">
                <div className="div-button">
                    <button className="button">Snacks</button>
                </div>
                <div className="div-button">
                    <button className="button">Pizza</button>
                </div>
                <div className="div-button">
                    <button className="button">Desserts</button>
                </div>
                <div className="div-button">
                    <button className="button">Boissons</button>
                </div>
            </div>
            <div>
                <div>
                    
                </div>
            </div>
        </div>
    )
};

export default CarteSection;