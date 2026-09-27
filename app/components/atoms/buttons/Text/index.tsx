import React from 'react';
import { Icon } from '@iconify/react';

const index = ({text, icon, onClick}: {text: string, icon: string, onClick: () => void}) => {
  return (
    <button onClick={onClick} className='flex items-center gap-2 font-semibold text-secondary transition-all hover:gap-3 hover:text-accent'>
      {text}
      <Icon icon={icon} className='h-5 w-5' />
    </button>
  );
};

export default index;
