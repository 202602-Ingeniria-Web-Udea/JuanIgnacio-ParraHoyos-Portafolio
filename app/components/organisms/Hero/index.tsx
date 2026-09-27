'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import MainButton from '@/app/components/atoms/buttons/Main';
import { HeroTitle, HeroText } from '@/app/components/atoms/titles/Hero';
import Dialog from '@/app/components/molecules/Dialog';

const index = () => {
  const [open, setOpen] = useState(false);

  return (
    <section id='perfil' className='grid-background min-h-168 px-6 py-20 md:px-12 lg:flex lg:items-center'>
      <div className='mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2'>
        <div>
          <p className='mb-5 text-secondary'>Hola, soy</p>
          <HeroTitle title='Juan Ignacio' lastName='Parra Hoyos' />
          <h2 className='mt-6 text-xl text-slate-300'>Ingeniero de Sistemas · Desarrollo Web · Analítica de Datos</h2>
          <HeroText text='Transformo necesidades en soluciones tecnológicas funcionales, combinando desarrollo de software, APIs, bases de datos y visualización de información.' />
          <div className='mt-8'>
            <MainButton text='Conoce mi perfil' icon='solar:arrow-right-linear' onClick={() => setOpen(true)} />
          </div>
        </div>
        <div className='border-gradient w-full overflow-hidden rounded-4xl p-3 lg:block'>
          <Image src='/portafolio-foto.png' alt='Juan Ignacio Parra' width={480} height={580} className='aspect-[4/5] w-full rounded-3xl object-cover object-center' />
        </div>
      </div>
      <Dialog open={open} title='Desarrollo con propósito' text='Me interesa construir soluciones claras, mantenibles y útiles, conectando interfaces, servicios backend y datos.' technologies={['React', 'Next.js', 'Python', 'Power BI']} onClose={() => setOpen(false)} />
    </section>
  );
};

export default index;
