import React from 'react';

const index = ({percentaje}: {percentaje: number}) => {
  return (
    <div className='h-1.5 overflow-hidden rounded-full bg-white/10'>
      <div className='background-gradient h-full rounded-full' style={{width: `${percentaje}%`}} />
    </div>
  );
};

export default index;
