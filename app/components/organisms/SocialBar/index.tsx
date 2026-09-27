import React from 'react';
import { Icon } from '@iconify/react';

const index = () => {
  return (
    <div className='glass fixed bottom-5 right-5 z-40 flex gap-2 rounded-full border border-white/10 p-2 lg:bottom-auto lg:top-1/2 lg:flex-col'>
      <a href='https://github.com/juanparra23' target='_blank'><Icon icon='mdi:github' className='h-6 w-6 text-muted hover:text-secondary' /></a>
      <a href='https://www.linkedin.com/in/juan-ignacio-2b03501b1/' target='_blank'><Icon icon='mdi:linkedin' className='h-6 w-6 text-muted hover:text-secondary' /></a>
      <a href='mailto:parrahoyosjuanignacio@gmail.com'><Icon icon='solar:letter-linear' className='h-6 w-6 text-muted hover:text-secondary' /></a>
    </div>
  );
};

export default index;
