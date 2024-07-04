import React from 'react';
import tarot_hero from '../../assets/tarot_hero_img.png';

import Content from '../../containers/Content';

let getHeaders = (max) => {
  return Math.floor(Math.random() * (max + 1));
}

const Hero = () => {
  const arrayofHeaders = ['Unlock the Mysteries', 'Unlock Your Destiny', 'Empowerment Through Ownership'];
  const setHeaders = arrayofHeaders[getHeaders(2)];

  return (
    <div className='w-full max-w-full min-h-screen px-4 flex flex-col items-center justify-center flex-wrap py-20 lg:px-12 xl:px-14 2xl:px-20'>
      <div className='container mx-auto flex flex-col items-center justify-center flex-wrap gap-8 lg:flex-row'>
        <Content>
          <h3 className='tarot__secondary_font text-[#DDE6ED] text-base font-semibold sm:text-lg xl:text-xl'>{setHeaders}</h3>
          <h1 className='tarot__primary_font text-[#9DB2BF] text-xl font-black tracking-wider leading-10 sm:text-2xl sm:leading-[3rem] xl:text-3xl xl:py-4 xl:leading-[3rem] xl:tracking-[5px]'>Discover the Power of Tarot with Divine Decks</h1>
          <p className='tarot__secondary_font text-[#DDE6ED] text-sm leading-7 sm:text-base sm:leading-9 lg:leading-7 xl:leading-10'>Dive into the ancient art of tarot reading and uncover the secrets of your future. With Divine Decks, explore a world of intuition, wisdom, and insight. Start your journey today and connect with the energies that guide your path.</p>
        </Content>

        <Content>
          <img src={tarot_hero} className="mx-auto animate h-auto w-60 drop-shadow-[0_0_5px_#526D82] lg:w-80 xl:w-[20rem]" />
        </Content>
      </div>
    </div>
  );
};

export default Hero;