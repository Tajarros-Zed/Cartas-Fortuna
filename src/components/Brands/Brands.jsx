import React from 'react';
import InitialBrands from './InitialBrands';

import { brandsData } from './BrandsData';


const Brands = () => {
  return (
    <div className='w-full max-w-full min-h-screen px-4 flex flex-col items-start justify-start flex-wrap sm:px-8 lg:px-12 lg:h-[65vh] lg:max-h-[65vh] lg:items-center lg:justify-center xl:px-14 2xl:px-20'>  
      <div className='container mx-auto flex flex-col items-center justify-center gap-8 py-12 lg:gap-20'> 
        <div className='flex flex-1 items-center justify-center flex-col gap-4 text-center pt-20'>
          <h3 className='tarot__secondary_font text-[#DDE6ED] text-base font-semibold sm:text-lg xl:text-2xl'>The Magic Behind Top Tarot</h3>
          <h2 className='tarot__primary_font text-[#9DB2BF] text-lg font-black tracking-widest leading-10 sm:text-2xl sm:leading-[3rem] xl:text-3xl xl:py-4 xl:leading-[4rem] xl:tracking-[2px]'>Fortuna Partnerships</h2>
        </div>

        <div className='flex flex-1 items-center justify-center flex-row flex-wrap gap-4 text-center sm:gap-8 lg:gap-2 lg:w-full lg:justify-between'>
          {brandsData.map((item) => 
            (<InitialBrands key={item.id} {...item} />)
          )}
        </div>
      </div>
    </div>
  );
};

export default Brands;