import React from 'react';
import NavCarte from '../componentes/NavCarte';


const products = {
  pizzas: [
    Saucetomate = [
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
      {
        id: 9,
        image: pizzaCard,
        name: 'Napolitaine',
        prices: {
          junior: '€10,00',
          senior: '€12,20',
          mega: '€18,50',
        },
        description: "Mozzarella, anchois, capres et olives"
      },
      {
        id: 10,
        image: pizzaCard,
        name: '5 Fromages',
        prices: {
          junior: '€10,50',
          senior: '€12,50',
          mega: '€17,00',
        },
        description: "Mozzarella, cheddar, chevre, reblochon et emmental"
      },
      {
        id: 11,
        image: pizzaCard,
        name: 'Bolognaise',
        prices: {
          junior: '€11,20',
          senior: '€13,50',
          mega: '€18,20',
        },
        description: "Mozzarella, sauce tomate, viande hacheé, oignons et origan"
      },
      {
        id: 12,
        image: pizzaCard,
        name: 'Kebab',
        prices: {
          junior: '€11,20',
          senior: '€13,20',
          mega: '€17,90',
        },
        description: "Mozzarella, kebab, oignons, sauce pita et olives"
      },
      {
        id: 13,
        image: pizzaCard,
        name: 'Maharadia',
        prices: {
          junior: '€9,90',
          senior: '€12,50',
          mega: '€17,90',
        },
        description: "Mozzarella, poulet, lardons, champignons, olives et tandoori"
      },
      {
        id: 14,
        image: pizzaCard,
        name: 'Cho/Chevre',
        prices: {
          junior: '€11,50',
          senior: '€14,10',
          mega: '€18,80',
        },
        description: "Mozzarella, chorizo, chevre olives et miel"
      },
      {
        id: 15,
        image: pizzaCard,
        name: 'Barbecue',
        prices: {
          junior: '€12,30',
          senior: '€14,70',
          mega: '€19,90',
        },
        description: "Mozzarella, poulet, merguez, viande hacheé et sauce barbecue"
      },
      {
        id: 16,
        image: pizzaCard,
        name: 'Mixte',
        prices: {
          junior: '€12,30',
          senior: '€14,70',
          mega: '€19,90',
        },
        description: "Mozzarella, poulet, merguez, viande hacheé et olives"
      },
      {
        id: 17,
        image: pizzaCard,
        name: 'Burger',
        prices: {
          junior: '€12,30',
          senior: '€14,70',
          mega: '€19,90',
        },
        description: "Mozzarella, viande hachee, oignons, cheddar, cornichons et sauce burger"
      },
      {
        id: 18,
        image: pizzaCard,
        name: 'Mama Bolo',
        prices: {
          junior: '€12,30',
          senior: '€14,70',
          mega: '€19,90',
        },
        description: "Mozzarella, double concentre de tomates, carottes, viande hachee, oignons, vin blanc et basilic"
      },
      {
        id: 19,
        image: pizzaCard,
        name: 'Panding',
        prices: {
          junior: '€12,30',
          senior: '€14,70',
          mega: '€19,90',
        },
        description: "Mozzarella, coppa, burrata, tomates sechees, huile d'olives et basilic"
      },
    ],
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




const Carte = () => {
  return (
    <div>
      <div className='w-full h-full px-20 py-40 bg-creme flex flex-col justify-start items-center gap-10'>
        <h1 className='w-[1042px] text-center text-footer-color text-6xl font-alegreyaSans font-bold leading-[64px]'>Découvrez nos pizzas base crème ou sauce tomate ainsi que nos paninis !</h1>
      </div>
      <div className='w-full h-full pt-20 pb-40 px-20 flex flex-col justify-start items-center gap-[60px]'>
        <NavCarte />
      </div>
    </div>

  );
};

export default Carte;