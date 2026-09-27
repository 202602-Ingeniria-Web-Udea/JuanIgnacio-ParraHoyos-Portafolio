'use client';
import React from 'react';
import { Icon } from '@iconify/react';
import Tag from '@/app/components/atoms/Tag';

const index = ({open, title, text, technologies, onClose}: {open: boolean, title: string, text: string, technologies: string[], onClose: () => void}) => {
  if (!open) return null;

  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4'>
      <div className='border-gradient w-full max-w-xl rounded-3xl p-7'>
        <div className='flex justify-between'>
          <h2 className='text-2xl font-bold text-white'>{title}</h2>
          <button onClick={onClose}><Icon icon='solar:close-circle-linear' className='h-7 w-7 text-muted' /></button>
        </div>
        <p className='mt-5 leading-7 text-muted'>{text}</p>
        <div className='mt-6 flex flex-wrap gap-2'>
          {technologies.map((technology) => <Tag key={technology} text={technology} />)}
        </div>
      </div>
    </div>
  );
};

export default index;
