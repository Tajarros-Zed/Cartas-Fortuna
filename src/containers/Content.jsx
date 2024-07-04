import React from 'react';

const Content = ({ children }) => {
  return (
    <div className='tarot__perspective flex flex-1 items-center justify-center flex-col gap-4 text-center sm:gap-8 lg:items-start lg:text-left'>
      {children}
    </div>
  );
};

export default Content;