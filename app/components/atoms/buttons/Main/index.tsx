import React from 'react';
import { Icon } from '@iconify/react';

const index = ({text, icon, onClick}: {text: string, icon: string, onClick: () => void}) => {
  return (
    <button onClick={onClick} className='background-gradient flex items-center gap-3 rounded-xl px-6 py-3 font-semibold text-background shadow-xs transition-transform hover:scale-105'>
      {text}
      <Icon icon={icon} className='h-6 w-6' />
    </button>
  );
};

export default index;
