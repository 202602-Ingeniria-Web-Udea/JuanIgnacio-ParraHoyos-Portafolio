import React from 'react';
import Sidebar from '@/app/components/organisms/Sidebar';
import Hero from '@/app/components/organisms/Hero';
import Knowledge from '@/app/components/organisms/Knowledge';
import Education from '@/app/components/organisms/Education';
import Experience from '@/app/components/organisms/Experience';
import Portfolio from '@/app/components/organisms/Portfolio';
import SocialBar from '@/app/components/organisms/SocialBar';
import Footer from '@/app/components/organisms/Footer';

const index = () => {
  return (
    <div className='min-h-screen bg-background text-foreground'>
      <Sidebar />
      <SocialBar />
      <main className='lg:ml-76 xl:mr-20'>
        <Hero />
        <Knowledge />
        <Education />
        <Experience />
        <Portfolio />
        <Footer />
      </main>
    </div>
  );
};

export default index;
