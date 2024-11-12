import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CardAvis from "./CardAvis";


function Carousel() {
    const Avis = [
        {
            id: 1,
            userpost: "D'excellentes pizzas . Un régal. Je souhaite pleine réussite au nouveau gérant. Nous nous régalons a chaque fois. Les pizzas sont bien garnis et cuites parfaitement. Merci pour votre gentillesse et la qualité de vos produits.",
            username: "Michael B.",
        },
        {
            id: 2,
            userpost: "La meilleure pizza de la région et le personnel le plus gentil. Je le recommande pour une délicieuse pizza et une ambiance calme",
            username: "Constantin C.",
        },
        {
            id: 3,
            userpost: "Les pizzas sont très bonnes et le lieu est propre et soigné. Du choix et des prix abordables. Très bien pour des repas rapides de qualités. Merci à vous c’est très agréable. Nous reviendrons, c’est certain.",
            username: "Alison M.",
        },
        {
            id: 4,
            userpost: "Les meilleurs pizza de st dénis en val et même Orléans sud. Je vous défie de trouver une pizzeria avec des pizzas aussi aussi bien garnies 😊",
            username: "Julien M.",
        },
    ];

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,  // Mostrar 3 slides em telas maiores
        slidesToScroll: 1,
        arrows: true,
        responsive: [
            {
                breakpoint: 1024, // Em telas menores
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };


    return (
        <div className="w-full max-w-[1200px] mx-auto px-4">
            <Slider {...settings}>
                {Avis.map((Avis) => (
                    <CardAvis
                        key={Avis.id}
                        username={Avis.username}
                        userpost={Avis.userpost}
                    />
                ))}
            </Slider>
        </div>
    )

}


export default Carousel;