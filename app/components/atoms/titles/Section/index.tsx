import React from 'react';

const index = ({title, text}: {title: string, text: string}) => {
  return (
    <div className='mx-auto mb-10 max-w-2xl text-center'>
      <h2 className='text-gradient text-4xl font-bold'>{title}</h2>
      <p className='mt-4 leading-7 text-muted'>{text}</p>
    </div>
  );
};

export default index;
