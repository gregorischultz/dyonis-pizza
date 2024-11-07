import React from "react";
import star from '../assets/Star.png';


function CardAvis({ username, userpost }) {
    return (
        <div className="w-full h-full p-12 bg-creme shadow-lg rounded-lg flex flex-col justify-between items-start">
            <p className="self-stretch text-footer-color text-lg font-bold leading-6 font-alegreyaSans break-words">{userpost}</p>
            <div className="flew items-center gap-3 mt-4">
                <div className="flex">
                    {[...Array(5)].map((_, index) => (
                        <img
                          key={index}
                          src={star}
                          alt="StarIcon"
                          className="w-6 h-6"  
                        />
                    ))}
                </div>
                <p className="text-black text-lg font-extrabold leading-none font-monrop tracking-wider"> {username} </p>
            </div>
        </div>
    );
}

export default CardAvis;