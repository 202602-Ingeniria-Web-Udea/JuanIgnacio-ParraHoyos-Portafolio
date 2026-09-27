import React from 'react';
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Juan Ignacio Parra | Portafolio',
  description: 'Portafolio profesional de Juan Ignacio Parra Hoyos',
};

const index = ({children}: Readonly<{children: React.ReactNode}>) => {
  return (
    <html lang='es'>
      <body>{children}</body>
    </html>
  );
};

export default index;
