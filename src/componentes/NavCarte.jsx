import React from "react";

function NavCarte({ onChangeCategory }) {
    return (
        <div className="self-stretch flex justify-center items-start gap-8">
            <div className="div-button">
                <button onClick={() => onChangeCategory('snacks')} className="button">Snacks</button>
            </div>
            <div className="div-button">
                <button onClick={() => onChangeCategory('pizzas')} className="button">Pizza</button>
            </div>
            <div className="div-button">
                <button onClick={() => onChangeCategory('desserts')} className="button">Desserts</button>
            </div>
            <div className="div-button">
                <button onClick={() => onChangeCategory('boissons')} className="button">Boissons</button>
            </div>
        </div>
    )
};

export default NavCarte;