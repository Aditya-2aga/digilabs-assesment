'use client';

import React from 'react';
import Image from 'next/image';

const TestimonialSection: React.FC = () => {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="bg-[#f8f9fb] rounded-lg p-8 max-w-4xl mx-auto">
          <div className="flex flex-col items-center">
            <Image 
              src="/images/img_company_logo_blue_gray_900_01.svg" 
              alt="Company Logo" 
              width={128} 
              height={32} 
              className="mb-6"
            />
            <p className="text-[#272d37] text-2xl font-medium text-center mb-8 max-w-3xl">
              Thank you for making it painless, pleasant and most of all hassle free! I love LookScout. I can't say enough about LookScout. Great job, I will definitely be ordering again!
            </p>
            <div className="flex items-center">
              <Image 
                src="/images/img_avatar.png" 
                alt="Lisa Smith" 
                width={40} 
                height={40} 
                className="rounded-full mr-3"
              />
              <div>
                <p className="text-[#272d37] font-medium text-[15px]">Lisa Smith</p>
                <p className="text-[#5f6d7e] text-sm">CEO Company</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;