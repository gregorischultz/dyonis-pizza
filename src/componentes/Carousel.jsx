import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CardAvis from "./CardAvis";

const avis = [
  {
    id: 1,
    userpost: "D'excellentes pizzas. Un régal. Les pizzas sont bien garnies et cuites parfaitement. Merci pour votre gentillesse et la qualité de vos produits.",
    username: "Michael B.",
  },
  {
    id: 2,
    userpost: "La meilleure pizza de la région et le personnel le plus gentil. Je le recommande pour une délicieuse pizza et une ambiance calme.",
    username: "Constantin C.",
  },
  {
    id: 3,
    userpost: "Les pizzas sont très bonnes et le lieu est propre et soigné. Du choix et des prix abordables. Nous reviendrons, c'est certain.",
    username: "Alison M.",
  },
  {
    id: 4,
    userpost: "Les meilleures pizzas de Saint-Denis-en-Val et même d'Orléans sud. Des pizzas incroyablement bien garnies !",
    username: "Julien M.",
  },
];

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 4000,
  responsive: [
    { breakpoint: 1024, settings: { slidesToShow: 2 } },
    { breakpoint: 640, settings: { slidesToShow: 1 } },
  ],
};

function Carousel() {
  return (
    <div className="w-full">
      <Slider {...settings}>
        {avis.map((a) => (
          <CardAvis key={a.id} username={a.username} userpost={a.userpost} />
        ))}
      </Slider>
    </div>
  );
}

export default Carousel;
