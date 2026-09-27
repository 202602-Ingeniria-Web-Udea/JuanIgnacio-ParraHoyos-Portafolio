import React from 'react';
import TextButton from '@/app/components/atoms/buttons/Text';
import Tag from '@/app/components/atoms/Tag';

const index = ({number, title, text, technologies, onClick}: {number: number, title: string, text: string, technologies: string[], onClick: () => void}) => {
  return (
    <div className='flex min-h-96 min-w-76 max-w-92 flex-1 snap-start flex-col overflow-hidden rounded-3xl border border-white/10 bg-surface'>
      <div className='grid-background relative h-40 bg-surface-soft p-6'>
        <p className='text-xs tracking-widest text-secondary'>PROYECTO 0{number}</p>
        <span className='absolute bottom-4 right-6 text-6xl font-bold text-white/5'>0{number}</span>
        <div className='background-gradient absolute bottom-6 left-6 h-1 w-24' />
      </div>
      <div className='flex flex-1 flex-col p-6'>
        <h3 className='text-xl font-semibold text-white'>{title}</h3>
        <p className='mt-3 flex-1 text-sm leading-6 text-muted'>{text}</p>
        <div className='my-5 flex flex-wrap gap-2'>
          {technologies.map((technology) => <Tag key={technology} text={technology} />)}
        </div>
        <TextButton text='Saber más' icon='solar:arrow-right-linear' onClick={onClick} />
      </div>
    </div>
  );
};

export default index;
