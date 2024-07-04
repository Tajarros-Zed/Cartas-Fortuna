import React from 'react';
import { useState, useEffect } from 'react';
import { featuresData } from './FeaturesData';

import Content from '../../containers/Content';

const Features = () => {
  const [ featuresIndex, setFeaturesIndex ] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setFeaturesIndex(prevIndex => (prevIndex + 1) % featuresData.length);
    }, 5000);

    return () => clearInterval(timer);
  });

  const currentFeatures = featuresData[featuresIndex];

  return (
    <div className='w-full max-w-full flex items-start justify-start flex-col flex-wrap px-4 sm:px-8 lg:px-12 xl:px-14 2xl:px-20'>
      <div className='container mx-auto pt-4 pb-12 flex flex-col items-center justify-center gap-12 lg:flex-row-reverse'>
        <Content>
          <h3 className='tarot__secondary_font text-[#DDE6ED] font-semibold text-base sm:text-lg xl:text-2xl'>{currentFeatures.topic}</h3>
          <h1 className='tarot__primary_font text-[#9DB2BF] font-bold text-lg tracking-widest leading-10 sm:text-2xl sm:leading-[3rem] xl:text-3xl xl:py-4 xl:leading-[4rem] xl:tracking-[2px]'>{currentFeatures.title}</h1>
          <p className='tarot__secondary_font text-[#DDE6ED] text-sm leading-7 sm:text-base sm:leading-9 lg:leading-7 xl:text-lg xl:leading-10'>{currentFeatures.description}</p>
        </Content>

        <Content>
          <img src={currentFeatures.image} className="tarot__image h-auto w-40 drop-shadow-[0_0_5px_#526D82] lg:mx-auto lg:w-48 xl:w-56" />
        </Content>
      </div>
    </div>
  );
};

export default Features;