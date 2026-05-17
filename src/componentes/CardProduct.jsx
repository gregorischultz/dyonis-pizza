import React, { useState } from "react";

const SIZES = ['junior', 'senior', 'mega'];

function CardProduct({ image, name, prices, description }) {
  const hasSizes = prices && typeof prices === 'object';
  const [selectedSize, setSelectedSize] = useState(hasSizes ? 'senior' : null);

  const currentPrice = hasSizes ? prices[selectedSize] : prices;

  return (
    <div className="flex flex-col bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200">
      {/* Imagem ou placeholder */}
      {image ? (
        <div className="aspect-square w-full overflow-hidden bg-creme">
          <img
            className="w-full h-full object-cover"
            src={image}
            alt={name}
          />
        </div>
      ) : (
        <div className="aspect-square w-full bg-creme flex items-center justify-center">
          <span className="text-4xl">🍕</span>
        </div>
      )}

      <div className="flex flex-col gap-2 p-4 flex-1">
        <h3 className="text-musgo text-lg font-alegreyaSans font-bold leading-snug">{name}</h3>
        {description && (
          <p className="text-musgo/50 text-xs font-montserrat leading-relaxed flex-1">{description}</p>
        )}

        <div className="mt-auto pt-3 border-t border-gray-100">
          {hasSizes ? (
            <>
              <div className="flex gap-2 mb-2">
                {SIZES.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`text-xs px-2.5 py-1 rounded-full border font-montserrat font-semibold transition-all duration-150 ${
                      selectedSize === size
                        ? "bg-musgo text-white border-musgo"
                        : "text-musgo/60 border-musgo/20 hover:border-musgo/50"
                    }`}
                  >
                    {size.charAt(0).toUpperCase() + size.slice(1)}
                  </button>
                ))}
              </div>
              <p className="text-musgo text-xl font-alegreyaSans font-bold">{currentPrice}</p>
            </>
          ) : (
            <p className="text-musgo text-xl font-alegreyaSans font-bold">{prices}</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default CardProduct;
