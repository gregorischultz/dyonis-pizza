/*Componente da page Home.jsx*/

import React, { useState } from "react";
import pizzaCard from '../assets/pizzaCard.png';
import CardProduct from '../componentes/CardProduct';


const products = {
    pizzas: [
        { id: 1, image:  pizzaCard , name: 'Pizza Margherita', price: '€ 6,00*', description: "Mozzarella, avec supplément basilic et huile d'olives" },
        { id: 2, image:  pizzaCard , name: 'Porky', price: '€ 7,00*', description: "Mozzarella et jambon" },
        { id: 3, image:  pizzaCard , name: 'Reine', price: '€ 9,00*', description: "Mozzarella et jambon" },
        { id: 4, image:  pizzaCard , name: 'Vegan', price: '€ 9,00*', description: "Mozzarella et jambon" },
        { id: 5, image:  pizzaCard , name: 'Modena', price: '€ 9,30*', description: "Mozzarella, jambon, œuf, olives et olives" },
        { id: 6, image:  pizzaCard , name: 'Orientale', price: '€ 9,50*', description: "Mozzarella, merguez, poivrons, oignons et olives" },
        { id: 7, image:  pizzaCard , name: 'Vegetarienne', price: '€ 9,90*', description: "Mozzarella, champignons, poivrons, artichauts, tomates, olives et basilic" },
        { id: 8, image:  pizzaCard , name: 'Calzone', price: '€ 9,90*', description: "Mozzarella, jambon et œuf" },
    ],
    boissons: [
        { id: 1, image: '', name: 'Badoit', price: '€ 1,50', description: "50CL" },
        { id: 2, image: '', name: 'Coca', price: '€ 1,70', description: "33CL" },
        { id: 3, image: '', name: 'Fanta', price: '€ 1,70', description: "33CL" },
        { id: 4, image: '', name: 'Oasis', price: '€ 1,70', description: "33CL" },
        { id: 5, image: '', name: 'Sprite', price: '€ 1,70', description: "33CL" },
        { id: 6, image: '', name: 'Orangina', price: '€ 1,70', description: "33CL" },
        { id: 7, image: '', name: 'Schwepps', price: '€ 1,70', description: "33CL" },
        { id: 8, image: '', name: 'Red Bull', price: '€ 2,00', description: "" },
    ],
    desserts: [
        { id: 1, image: '', name: 'Panini Nutella', price: '€ 3,50', description: "" },
        { id: 2, image: '', name: 'Panini Nutella et Banane', price: '€ 4,20', description: "" },
        { id: 3, image: '', name: 'Pom Potes', price: '€ 1,0', description: "" },
        { id: 4, image: '', name: 'Glace Haagen Dazs', price: '€ 3,00', description: "" },
        { id: 5, image: '', name: 'Mister Freez', price: '€ 1,00', description: "" },
        { id: 6, image: '', name: 'Glace en Cone', price: '€ 2,50', description: "" },
    ],
    snacks: [
        { id: 1, image: '', name: 'Desperados', price: '€ 3,00', description: "33CL" },
        { id: 2, image: '', name: 'Desperados', price: '€ 5,00', description: "1 Litre" },
        { id: 3, image: '', name: 'Super Bock', price: '€ 2,00', description: "25CL" },
        { id: 4, image: '', name: 'Leffe', price: '€ 2,50', description: "33CL" },
        { id: 5, image: '', name: 'Vin Rouge', price: '€ 10', description: "75CL" },
        { id: 6, image: '', name: 'Vin Rose', price: '€ 10', description: "75CL" },
        { id: 7, image: '', name: 'Vin Blanc', price: '€ 10', description: "75CL" },
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
                price={products.price}
                description={products.description}
            />
        ))
    }

    return (
        <div className="h-full w-full px-20 py-10 flex flex-col justify-center items-end gap-10">
            <h1 className="self-stretch text-center text-black text-[64px] font-alegreyaSans font-bold leadind-[64px] break-words">Carte</h1>
            <h4 className="p">Découvrez nos pizzas base crème ou sauce tomate ainsi que nos paninis ! </h4>
            <div className="self-stretch flex justify-center items-start gap-8">
                <div className="div-button">
                    <button onClick={() => setCategory('snacks')} className="button">Snacks</button>
                </div>
                <div className="div-button">
                    <button onClick={() => setCategory('pizzas')} className="button">Pizza</button>
                </div>
                <div className="div-button">
                    <button onClick={() => setCategory('desserts')} className="button">Desserts</button>
                </div>
                <div className="div-button">
                    <button onClick={() => setCategory('boissons')} className="button">Boissons</button>
                </div>
            </div>
            <div className="self-stretch grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
                {renderProducts()}
            </div>
        </div>
    )
};

export default CarteSection;