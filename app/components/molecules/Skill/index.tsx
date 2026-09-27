import React from 'react';
import ProgressBar from '@/app/components/atoms/ProgressBar';

const index = ({title, percentaje}: {title: string, percentaje: number}) => {
  return (
    <div>
      <div className='mb-2 flex justify-between text-xs'>
        <span>{title}</span>
        <span className='text-secondary'>{percentaje}%</span>
      </div>
      <ProgressBar percentaje={percentaje} />
    </div>
  );
};

export default index;
