'use client';

import React from 'react';
import Image from 'next/image';

const ClientsSection: React.FC = () => {
  const clientLogos = [
    '/images/img_press_logo.svg',
    '/images/img_company_logo_yellow_800.svg',
    '/images/img_company_logo_green_500.svg',
    '/images/img_company_logo_light_blue_600.svg',
    '/images/img_company_logo_red_a700.svg',
    '/images/img_company_logo_gray_900_01.svg'
  ];

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#272d37] mb-4">Proud to Be Used By</h2>
          <p className="text-[#5f6d7e] text-base max-w-2xl mx-auto">
            Professionally cultivate one-to-one customer service with robust ideas. Dynamically innovate resource-leveling customer service for state of the art customer service.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-12">
          {clientLogos.map((logo, index) => (
            <Image 
              key={index}
              src={logo} 
              alt="Client Logo" 
              width={128} 
              height={32} 
              className="h-8 object-contain"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;