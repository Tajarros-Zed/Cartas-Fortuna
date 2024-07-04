import React from 'react';
import { useState } from 'react';
import { cardsImage, cardsData } from './CardsData';
import InitialCards from './InitialCards';

const Cards = () => {
  const [ showCards, setShowCards ] = useState(null);

  const handleShowCards = (selectCards) => {
    setShowCards(selectCards);
  }

  return (
    <div className='w-full max-w-full px-4 flex flex-col items-start justify-start flex-wrap mb-16 sm:px-8 lg:px-12 lg:mb-28 xl:px-14 2xl:px-20'>
      <div className='container mx-auto flex flex-col items-center justify-center gap-8 pt-8 pb-12 sm:gap-14 lg:pt-12 lg:gap-20 lg:flex-wrap'>
        <div className='flex flex-1 items-center justify-center flex-col gap-4 text-center'>
          <h3 className='tarot__secondary_font text-[#DDE6ED] text-base font-semibold sm:text-lg xl:text-2xl'>Physical Tarot Decks</h3>
          <h2 className='tarot__primary_font text-[#9DB2BF] text-lg font-black tracking-wider leading-10 sm:text-2xl sm:leading-[3rem] xl:text-3xl xl:py-4 xl:leading-[4rem] xl:tracking-[2px]'>Immerse yourself in the world of Tarot</h2>
        </div>

        <div className='flex flex-row flex-wrap items-center justify-center gap-x-12 gap-y-4 text-center lg:grid lg:grid-cols-3 lg:w-full lg:gap-y-14 xl:gap-y-20'>
          <InitialCards isSelect={showCards === 'sun'} onSelect={() => handleShowCards('sun')}><img src={cardsImage.one} className="h-auto w-36 mb-8 drop-shadow-[0_0_5px_#526D82] lg:w-40 xl:w-44" /></InitialCards>
          <InitialCards isSelect={showCards === 'lovers'} onSelect={() => handleShowCards('lovers')}><img src={cardsImage.two} className="h-auto w-36 mb-8 drop-shadow-[0_0_5px_#526D82] lg:w-40 xl:w-44" /></InitialCards>
          <InitialCards isSelect={showCards === 'moon'} onSelect={() => handleShowCards('moon')}><img src={cardsImage.three} className="h-auto w-36 mb-8 drop-shadow-[0_0_5px_#526D82] lg:w-40 xl:w-44" /></InitialCards>
          <InitialCards isSelect={showCards === 'queen'} onSelect={() => handleShowCards('queen')}><img src={cardsImage.four} className="h-auto w-36 mb-8 drop-shadow-[0_0_5px_#526D82] lg:w-40 xl:w-44" /></InitialCards>
          <InitialCards isSelect={showCards === 'devil'} onSelect={() => handleShowCards('devil')}><img src={cardsImage.five} className="h-auto w-36 mb-8 drop-shadow-[0_0_5px_#526D82] lg:w-40 xl:w-44" /></InitialCards>
          <InitialCards isSelect={showCards === 'hierophant'} onSelect={() => handleShowCards('hierophant')}><img src={cardsImage.six} className="h-auto w-36 mb-8 drop-shadow-[0_0_5px_#526D82] lg:w-40 xl:w-44" /></InitialCards>
        </div>

        <div className='grid grid-cols-1 items-center justify-center gap-8 py-4 lg:py-12'>
          {!showCards ? (<p className='tarot__secondary_font text-[#DDE6ED] text-base font-semibold lg:text-2xl'>Click the Cards</p>) : (
            <div className='flex flex-col gap-8 lg:flex lg:flex-row lg:gap-0'>
              <div className='flex flex-col items-center justify-center text-center gap-8 py-4 lg:flex-1 lg:text-left lg:items-start'>
                <h3 className='tarot__secondary_font text-[#DDE6ED] text-base font-semibold sm:text-lg xl:text-2xl'>{cardsData[showCards].topic}</h3>
                <h2 className='tarot__primary_font text-[#9DB2BF] text-lg font-black tracking-wider leading-10 sm:text-2xl sm:leading-[3rem] xl:text-3xl xl:py-4 xl:leading-[4rem] xl:tracking-[2px]'>{cardsData[showCards].title}</h2>
                <p className='tarot__secondary_font text-[#DDE6ED] text-sm leading-7 sm:text-base sm:leading-9 lg:leading-7 xl:text-lg xl:leading-10'>{cardsData[showCards].description}</p>
              </div>

              <div className='flex items-center justify-center text-center lg:flex-1'>
                <img src={cardsData[showCards].image} className="animate h-auto w-40 drop-shadow-[0_0_5px_#526D82] lg:w-52 xl:w-56" />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cards;