import React from 'react';

const index = ({text}: {text: string}) => {
  return( 
  <span className='rounded-full border border-secondary/20 bg-secondary/5 px-3 py-1 text-xs text-secondary'>
    {text}
    </span>
  );
};

export default index;
