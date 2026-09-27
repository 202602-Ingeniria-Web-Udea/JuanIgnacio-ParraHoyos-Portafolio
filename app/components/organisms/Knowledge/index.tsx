import React from 'react';
import SectionTitle from '@/app/components/atoms/titles/Section';
import Knowledge from '@/app/components/molecules/Knowledge';
import { KnowledgeList } from '@/utils/data';

const index = () => {
  return (
    <section id='conocimientos' className='border-y border-white/5 bg-surface-soft px-6 py-20 md:px-12'>
      <div className='mx-auto max-w-6xl'>
        <SectionTitle title='Mis conocimientos' text='Desarrollo web, backend, bases de datos y análisis de información.' />
        <div className='grid gap-5 sm:grid-cols-2 xl:grid-cols-4'>
          {KnowledgeList.map((knowledge) => <Knowledge key={knowledge.title} title={knowledge.title} text={knowledge.text} icon={knowledge.icon} />)}
        </div>
      </div>
    </section>
  );
};

export default index;
