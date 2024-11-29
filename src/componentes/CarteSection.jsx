/*Componente da page Home.jsx*/

import React, { useState } from "react";
import pizzaCard from '../assets/pizzaCard.png';
import CardProduct from '../componentes/CardProduct';
import NavCarte from "./NavCarte";

import { Link } from "react-router-dom";


const products = {
    pizzas: [
        {
            id: 1,
            image: pizzaCard,
            name: 'Pizza Margherita',
            prices: {
                junior: '€5,00',
                senior: '€7,00',
                mega: '€12,00',
            },
            description: "Mozzarella, avec supplément basilic et huile d'olives"
        },
        {
            id: 2,
            image: pizzaCard,
            name: 'Porky',
            prices: {
                junior: '€8,30',
                senior: '€9,90',
                mega: '€14,50',
            },
            description: "Mozzarella et jambon"
        },
        {
            id: 3,
            image: pizzaCard,
            name: 'Reine',
            prices: {
                junior: '€9,00',
                senior: '€11,00',
                mega: '€17,00',
            },
            description: "Mozzarella, jambon, champignons et olives"
        },
        {
            id: 4,
            image: pizzaCard,
            name: 'Vegan',
            prices: {
                junior: '€9,00',
                senior: '€11,20',
                mega: '€17,40',
            },
            description: "Pommes de terre, champignons, poivrons, artichauts, tomates et olives "
        },
        {
            id: 5,
            image: pizzaCard,
            name: 'Modena',
            prices: {
                junior: '€9,30',
                senior: '€11,60',
                mega: '€17,90',
            },
            description: "Mozzarella, jambon, œuf et olives"
        },
        {
            id: 6,
            image: pizzaCard,
            name: 'Orientale',
            prices: {
                junior: '€9,50',
                senior: '€11,60',
                mega: '€17,90',
            },
            description: "Mozzarella, merguez, poivrons, oignons et olives"
        },
        {
            id: 7,
            image: pizzaCard,
            name: 'Vegetarienne',
            prices: {
                junior: '€9,90',
                senior: '€11,90',
                mega: '€17,90',
            },
            description: "Mozzarella, champignons, poivrons, artichauts, tomates, olives et basilic"
        },
        {
            id: 8,
            image: pizzaCard,
            name: 'Calzone',
            prices: {
                junior: '€9,90',
                senior: '€12,50',
                mega: '€17,90',
            },
            description: "Mozzarella, jambon et œuf"
        },
    ],
    boissons: [
        { id: 1, image: '', name: 'Badoit', prices: '€ 1,50', description: "50CL" },
        { id: 2, image: '', name: 'Coca', prices: '€ 1,70', description: "33CL" },
        { id: 3, image: '', name: 'Fanta', prices: '€ 1,70', description: "33CL" },
        { id: 4, image: '', name: 'Oasis', prices: '€ 1,70', description: "33CL" },
        { id: 5, image: '', name: 'Sprite', prices: '€ 1,70', description: "33CL" },
        { id: 6, image: '', name: 'Orangina', prices: '€ 1,70', description: "33CL" },
        { id: 7, image: '', name: 'Schwepps', prices: '€ 1,70', description: "33CL" },
        { id: 8, image: '', name: 'Red Bull', prices: '€ 2,00', description: "" },
    ],
    desserts: [
        { id: 1, image: '', name: 'Panini Nutella', prices: '€ 3,50', description: "" },
        { id: 2, image: '', name: 'Panini Nutella et Banane', prices: '€ 4,20', description: "" },
        { id: 3, image: '', name: 'Pom Potes', prices: '€ 1,0', description: "" },
        { id: 4, image: '', name: 'Glace Haagen Dazs', prices: '€ 3,00', description: "" },
        { id: 5, image: '', name: 'Mister Freez', prices: '€ 1,00', description: "" },
        { id: 6, image: '', name: 'Glace en Cone', prices: '€ 2,50', description: "" },
    ],
    snacks: [
        { id: 1, image: '', name: 'Desperados', prices: '€ 3,00', description: "33CL" },
        { id: 2, image: '', name: 'Desperados', prices: '€ 5,00', description: "1 Litre" },
        { id: 3, image: '', name: 'Super Bock', prices: '€ 2,00', description: "25CL" },
        { id: 4, image: '', name: 'Leffe', prices: '€ 2,50', description: "33CL" },
        { id: 5, image: '', name: 'Vin Rouge', prices: '€ 10', description: "75CL" },
        { id: 6, image: '', name: 'Vin Rose', prices: '€ 10', description: "75CL" },
        { id: 7, image: '', name: 'Vin Blanc', prices: '€ 10', description: "75CL" },
    ],
};

function CarteSection() {
    const [category, setCategory] = useState('pizzas');

    const renderProducts = () => {
        return products[category].map(products => (
            <CardProduct
                key={products.id}
                image={products.image}
                name={products.name}
                prices={products.prices}
                description={products.description}
            />
        ))
    }

    return (
        <div className="h-full w-full px-20 py-10 flex flex-col justify-center items-end gap-10">
            <h1 className="self-stretch text-center text-black text-[64px] font-alegreyaSans font-bold leadind-[64px] break-words">Carte</h1>
            <h4 className="p">Découvrez nos pizzas base crème ou sauce tomate ainsi que nos paninis ! </h4>
            <NavCarte onChangeCategory={setCategory} />
            <div className="self-stretch grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
                {renderProducts()}
            </div>
            <div className="px-1 py-2 rounded-[64px] border border-solid border-black flex justify-center items-center gap-2">
                <div className=" flex justify-start items-center gap-1">
                    <Link to="/Carte"><button className="text-center text-black text-xl font-alegreyaSans font-bold leading-6 break-words">Voir tout</button></Link>
                </div>
            </div>
        </div>
    )
};

export default CarteSection;