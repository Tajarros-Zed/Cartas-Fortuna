import React from 'react';

const InitialCards = ({ children, onSelect, isSelect }) => {
  return (
    <li className='tarot__perspective list-none flex flex-col items-center justify-center lg:flex-wrap'>
      <button onClick={onSelect} className={isSelect ? 'tarot__image' : ''}>{children}</button>
    </li>
  );
};

export default InitialCards;