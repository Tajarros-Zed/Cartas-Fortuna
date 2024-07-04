import React from 'react';
import tarot_logo from '../../assets/tarot_logo.png';

const Header = () => {
  return (
    <div className='bg-gradient-to-t from-[#0000008c] to-[#0000008c] w-full max-w-full flex items-start justify-start flex-wrap fixed top-0 left-0 z-[1000] py-2 px-4 sm:px-8 lg:px-12 xl:px-14 2xl:px-20'>
      <div className='container mx-auto flex flex-row items-center justify-between'>
        <h1 className='tarot__primary_font text-[#9DB2BF] text-sm tracking-[3px] font-bold sm:text-base lg:text-lg xl:text-2xl'>Cartas Fortuna</h1>
        <img src={tarot_logo} className='h-auto w-10 sm:w-12 lg:w-14 xl:w-12' />
      </div>
    </div>
  );
}

export default Header;