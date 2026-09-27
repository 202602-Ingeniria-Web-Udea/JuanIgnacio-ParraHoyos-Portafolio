import React from 'react';
import Image from 'next/image';
import { Icon } from '@iconify/react';
import Skill from '@/app/components/molecules/Skill';
import { NavTitles, Skills } from '@/utils/data';

const index = () => {
  return (
    <aside className='glass relative z-30 border-b border-white/10 px-6 py-6 lg:fixed lg:inset-y-0 lg:left-0 lg:w-76 lg:overflow-y-auto lg:border-r'>
      <div className='flex items-center gap-4 lg:flex-col lg:text-center'>
        <div className='background-gradient rounded-full p-1'>
          <Image src='/portafolio-foto.png' alt='Juan Ignacio Parra' width={120} height={120} className='h-20 w-20 rounded-full object-cover lg:h-28 lg:w-28' />
        </div>
        <div>
          <h2 className='font-semibold text-white'>Juan Ignacio Parra</h2>
          <p className='mt-1 text-xs text-secondary'>Ingeniero de Sistemas</p>
        </div>
      </div>

      <nav className='mt-6 hidden border-y border-white/10 py-4 lg:block'>
        {NavTitles.map((nav) => <a key={nav.title} href={nav.link} className='block rounded-lg px-3 py-2 text-sm text-muted hover:bg-white/5 hover:text-secondary'>{nav.title}</a>)}
      </nav>

      <div className='mt-6 hidden space-y-3 text-xs text-muted lg:block'>
        <p className='flex items-center gap-3'><Icon icon='solar:letter-linear' /> parrahoyosjuanignacio@gmail.com</p>
        <p className='flex items-center gap-3'><Icon icon='solar:phone-linear' /> +57 300 694 4181</p>
        <p className='flex items-center gap-3'><Icon icon='solar:map-point-linear' /> Medellín, Colombia</p>
      </div>

      <div className='mt-7 hidden space-y-4 lg:block'>
        <h3 className='text-xs uppercase tracking-widest text-muted'>Tecnologías</h3>
        {Skills.map((skill) => <Skill key={skill.title} title={skill.title} percentaje={skill.percentage} />)}
      </div>
    </aside>
  );
};

export default index;
