import React, { useState } from "react";
import PropTypes from 'prop-types';

const CardProduct = ({ image, name, prices, description }) => {
    // Se `prices` existir, configura o estado de tamanho com 'junior' como padrão; caso contrário, `null`
    const [selectedSize, setSelectedSize] = useState(prices ? 'senior' : null);

    // Define o preço atual com base em `selectedSize`, ou `prices` se for um objeto de tamanhos
    const currentPrice = prices ? prices[selectedSize] : prices;

    return (
        <div className="flex flex-col items-center gap-4 h-[405px] flex-1">
            {/* Imagem do produto */}
            <img className="w-[291px] h-[291px]" src={image} alt={`${name} Card`} />

            {/* Informações principais do produto */}
            <div className="w-full flex flex-col items-start px-4">
                <h3 className="text-[#1B1D16] text-2xl font-alegreyaSans font-bold">{name}</h3>
                <p className="text-[#1B1D16] text-sm font-montserrat">{description}</p>
            </div>

            {/* Condicional para exibir seletor de tamanho e preço apenas se `prices` for um objeto */}
            {prices && typeof prices === 'object' ? (
                <div className="w-full flex flex-col items-start gap-4 px-4">
                    {/* Botões de seleção de tamanho */}
                    <div className="flex gap-4">
                        {['junior', 'senior', 'mega'].map(size => (
                            <button
                                key={size}
                                onClick={() => setSelectedSize(size)}
                                className={`px-2 py-1 ${selectedSize === size ? 'font-bold' : 'font-normal'} 
                                            text-[#1B1D16] text-sm font-montserrat`}
                            >
                                {size.charAt(0).toUpperCase() + size.slice(1)}
                            </button>
                        ))}
                    </div>

                    {/* Preço do tamanho selecionado */}
                    <div className="text-[#1B1D16] text-xl font-alegreyaSans font-bold">
                        {currentPrice}
                    </div>
                </div>
            ) : (
                // Exibir preço fixo se `prices` for apenas uma string (ou seja, para produtos sem variação de tamanho)
                <div className="text-[#1B1D16] text-xl font-alegreyaSans font-bold flex justify-start items-start ">
                    {prices}
                </div>
            )}
        </div>
    );
};

CardProduct.propTypes = {
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    // Define `prices` como uma string ou um objeto para suportar variações
    prices: PropTypes.oneOfType([
        PropTypes.shape({
            junior: PropTypes.string.isRequired,
            senior: PropTypes.string.isRequired,
            mega: PropTypes.string.isRequired,
        }),
        PropTypes.string, // Para produtos com preço fixo
    ]).isRequired,
    description: PropTypes.string.isRequired,
};

export default CardProduct;
