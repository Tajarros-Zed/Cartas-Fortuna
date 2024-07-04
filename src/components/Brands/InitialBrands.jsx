import React from 'react';

const InitialBrands = ({ image, title }) => {
  return (
    <li className='list-none flex items-center justify-center'>
      <img src={image} className="h-auto w-24 sm:w-28 xl:w-36" />
      <h1 className='tarot__secondary_font text-[#DDE6ED] text-base font-semibold pe-6 sm:text-lg xl:text-2xl'>{title}</h1>
    </li>
  );
};

export default InitialBrands;