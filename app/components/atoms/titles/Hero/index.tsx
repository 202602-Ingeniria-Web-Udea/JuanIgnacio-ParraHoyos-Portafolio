import React from 'react';

const HeroTitle = ({title, lastName}: {title: string, lastName: string}) => {
  return (
    <h1 className='text-5xl font-bold leading-tight text-white md:text-7xl'>
      {title}<br />
      <span className='text-gradient'>{lastName}</span>
    </h1>
  );
};

const HeroText = ({text}: {text: string}) => {
  return <p className='mt-6 max-w-xl text-base leading-8 text-muted'>{text}</p>;
};

export { HeroTitle, HeroText };
