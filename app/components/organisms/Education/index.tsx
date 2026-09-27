import React from 'react';
import SectionTitle from '@/app/components/atoms/titles/Section';
import Timeline from '@/app/components/molecules/Timeline';

const index = () => {
  return (
    <section id='educacion' className='px-6 py-20 md:px-12'>
      <div className='mx-auto max-w-5xl'>
        <SectionTitle title='Educación' text='Formación académica y aprendizaje continuo.' />
        <Timeline date='2022 - 2026' title='Ingeniería de Sistemas' subtitle='Universidad de Antioquia' text='Formación en desarrollo de software, bases de datos y arquitectura de sistemas.' tags={['Software', 'Datos', 'Ingeniería']} />
        <Timeline date='En curso' title='Curso Full Stack con Python' subtitle='Dev Senior' text='Formación práctica en desarrollo web de extremo a extremo.' tags={['Python', 'Full Stack']} />
      </div>
    </section>
  );
};

export default index;
