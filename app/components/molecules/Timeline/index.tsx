import React from 'react';
import Tag from '@/app/components/atoms/Tag';

const index = ({date, title, subtitle, text, tags}: {date: string, title: string, subtitle: string, text: string, tags: string[]}) => {
  return (
    <div className='relative grid gap-5 border-l border-secondary/20 pb-10 pl-7 md:grid-cols-[9rem_1fr]'>
      <span className='absolute -left-1.5 top-1.5 h-3 w-3 rounded-full bg-secondary' />
      <p className='text-xs text-secondary'>{date}</p>
      <div>
        <h3 className='text-lg font-semibold text-white'>{title}</h3>
        <p className='mt-1 text-sm font-medium text-primary'>{subtitle}</p>
        <p className='mt-3 text-sm leading-6 text-muted'>{text}</p>
        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => <Tag key={tag} text={tag} />)}
        </div>
      </div>
    </div>
  );
};

export default index;
