import React from 'react';
import SectionTitle from '@/app/components/atoms/titles/Section';
import Timeline from '@/app/components/molecules/Timeline';

const index = () => {
  return (
    <section id='experiencia' className='border-y border-white/5 bg-surface-soft px-6 py-20 md:px-12'>
      <div className='mx-auto max-w-5xl'>
        <SectionTitle title='Experiencia' text='Experiencia técnica aplicada a usuarios, equipos y procesos reales.' />
        <Timeline date='Feb. 2026 - Hoy' title='Auxiliar de Programación' subtitle='Universidad de Antioquia' text='Soporte técnico, configuración de equipos y atención de incidencias.' tags={['Soporte', 'Hardware', 'Software']} />
        <Timeline date='Actualidad' title='Apoyo Tecnológico' subtitle='Soluciones Informáticas Urabá' text='Implementación de soluciones para fortalecer la presencia digital y organizar procesos.' tags={['Transformación digital', 'Procesos', 'Web']} />
      </div>
    </section>
  );
};

export default index;
