/*Componente do componente CarteSection.jsx*/

import React from "react";
import PropTypes from 'prop-types';




const CardProduct = ({ image, name, price, ingredients }) => {
    return (
        <div className="w-full h-full flex flex-col justify-start items-center gap-4">
            <img src={image} alt={`${name} Card`} />
            <div className="self-stretch flex justify-between items-start">
                <h3 className="p1">{name}</h3>
                <p className="p1">{price}</p>
            </div>
            <p className="self-stretch text-black text-sm font-montserrat font-normal leading-7 break-words">
                {ingredients}
            </p>
        </div>
    );
};

CardPizza.propTypes = {
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    ingredients: PropTypes.string.isRequired
};

export default CardProduct;