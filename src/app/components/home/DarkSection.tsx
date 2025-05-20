'use client';

import React from 'react';
import Image from 'next/image';

const DarkSection: React.FC = () => {
  const features = [
    {
      icon: '/images/img_icon_3.svg',
      title: 'Explore ideas together',
      description: 'Engage audience segments and finally create actionable insights. Amplify vertical integration.',
      link: { text: 'Learn more', url: '#' }
    },
    {
      icon: '/images/img_icon_4.svg',
      title: 'Bring those ideas to life',
      description: 'Engage audience segments and finally create actionable insights. Amplify vertical integration.',
      link: { text: 'Learn more', url: '#' }
    },
    {
      icon: '/images/img_icon_5.svg',
      title: 'Ship better outcomes',
      description: 'Engage audience segments and finally create actionable insights. Amplify vertical integration.',
      link: { text: 'Learn more', url: '#' }
    }
  ];

  return (
    <section className="bg-[#151b27] py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <Image 
              src="/images/img_photo_560x560.png" 
              alt="Product Features" 
              width={560} 
              height={560} 
              className="rounded-lg"
            />
          </div>
          <div className="space-y-12">
            {features.map((feature, index) => (
              <div key={index} className="flex">
                <div className="bg-[#437ef7] rounded-full w-12 h-12 flex items-center justify-center mr-4 flex-shrink-0">
                  <Image src={feature.icon} alt={feature.title} width={32} height={32} />
                </div>
                <div>
                  <h3 className="text-[22px] font-semibold text-[#f9f9f9] mb-2">{feature.title}</h3>
                  <p className="text-[#a5abb9] text-base mb-3">{feature.description}</p>
                  <a href={feature.link.url} className="text-[#437ef7] font-semibold text-[15px] flex items-center">
                    {feature.link.text}
                    <Image 
                      src="/images/img_arrow_right.svg" 
                      alt="Arrow Right" 
                      width={20} 
                      height={20} 
                      className="ml-2" 
                    />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DarkSection;