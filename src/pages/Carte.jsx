import React from 'react';
import NavCarte from '../componentes/NavCarte';


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