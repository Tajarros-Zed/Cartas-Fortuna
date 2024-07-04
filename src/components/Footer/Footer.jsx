import React from 'react';

const Footer = () => {
  return (
    <footer className='w-full max-w-full flex flex-col items-center justify-center text-center gap-4 py-4 border-t border-[#9DB2BF] sm:px-8 lg:px-12 xl:px-14 2xl:px-20'>
      <div className='flex flex-col items-center justify-center gap-2 sm:container sm:items-center sm:flex-row sm:mx-auto sm:justify-between lg:flex-col lg:items-start'>
        <h2 className='tarot__secondary_font text-[#DDE6ED] text-lg font-semibold'>Cartas Fortuna</h2>
        <p className='tarot__secondary_font text-[#DDE6ED] text-sm xl:leading-10'>Join the Discord Community</p>
      </div>
      <p className='tarot__secondary_font text-[#DDE6ED] text-sm xl:leading-10'>Copyright Cartas Fortuna © 2024. All rights reserved.</p>
    </footer>
  );
};

export default Footer;