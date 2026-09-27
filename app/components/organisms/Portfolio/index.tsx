'use client';
import React, { useState } from 'react';
import SectionTitle from '@/app/components/atoms/titles/Section';
import Project from '@/app/components/molecules/Project';
import Dialog from '@/app/components/molecules/Dialog';
import { Projects } from '@/utils/data';

const index = () => {
  const [project, setProject] = useState(Projects[0]);
  const [open, setOpen] = useState(false);

  const showProject = (position: number) => {
    setProject(Projects[position]);
    setOpen(true);
  };

  return (
    <section id='portafolio' className='px-6 py-20 md:px-12'>
      <div className='mx-auto max-w-6xl'>
        <SectionTitle title='Portafolio' text='Proyectos donde combino desarrollo de software y datos.' />
        <div className='flex snap-x gap-5 overflow-x-auto pb-5'>
          {Projects.map((item, position) => <Project key={item.title} number={position + 1} title={item.title} text={item.text} technologies={item.technologies} onClick={() => showProject(position)} />)}
        </div>
      </div>
      <Dialog open={open} title={project.title} text={project.description} technologies={project.technologies} onClose={() => setOpen(false)} />
    </section>
  );
};

export default index;
