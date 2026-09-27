import React from 'react';
import { Icon } from '@iconify/react';

const index = ({title, text, icon}: {title: string, text: string, icon: string}) => {
  return (
    <div className='rounded-2xl border border-white/10 bg-surface p-6 transition-transform hover:-translate-y-1'>
      <div className='mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-secondary/10 text-secondary'>
        <Icon icon={icon} className='h-7 w-7' />
      </div>
      <h3 className='text-lg font-semibold text-white'>{title}</h3>
      <p className='mt-2 text-sm leading-6 text-muted'>{text}</p>
    </div>
  );
};

export default index;
