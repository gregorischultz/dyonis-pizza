/*Componente do componente CarteSection.jsx*/

import React from "react";
import PropTypes from 'prop-types';




const CardProduct = ({ image, name, price, description }) => {
    return (
        <div className="flex flex-col justify-start items-center gap-4 h-[405px] flex-1">
            <img src={image} alt={`${name} Card`} />
            <div className="w-4/5 flex justify-between items-start">
                <h3 className="p1">{name}</h3>
                <p className="p1">{price}</p>
            </div>
            <p className="w-4/5 text-black text-sm font-montserrat font-normal leading-7 break-words">
                {description}
            </p>
        </div>
    );
};

CardProduct.propTypes = {
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
};

export default CardProduct;