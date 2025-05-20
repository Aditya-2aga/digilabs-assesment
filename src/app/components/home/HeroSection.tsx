'use client';

import React from 'react';
import Image from 'next/image';
import Button from '@/components/ui/Button';

const HeroSection: React.FC = () => {
  return (
    <section className="bg-[#2b63d9] text-white py-16 relative">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="max-w-xl">
            <h1 className="text-5xl font-bold leading-[60px] mb-6">
              Your Supercharged Design Workflow.
            </h1>
            <p className="text-[#b1ccfa] text-lg leading-7 mb-8">
              We've been told it is not possible to overachieve our customers' expectations. We have not reinvented the wheel, we decided to build upon it.
            </p>
            <Button 
              className="bg-[#437ef7] shadow-sm text-white font-semibold px-5 py-3 rounded-md"
            >
              Send Notification
            </Button>
            
            <div className="mt-12">
              <p className="text-sm font-medium mb-4">Who supports us</p>
              <div className="flex flex-wrap gap-6">
                <Image 
                  src="/images/img_company_logo.svg"
                  alt="Supporting Company"
                  width={112}
                  height={28}
                />
                <Image 
                  src="/images/img_company_logo_white_a700.svg"
                  alt="Supporting Company"
                  width={112}
                  height={28}
                />
                <Image 
                  src="/images/img_company_logo_white_a700_28x112.svg"
                  alt="Supporting Company"
                  width={112}
                  height={28}
                />
                <Image 
                  src="/images/img_company_logo_28x112.svg"
                  alt="Supporting Company"
                  width={112}
                  height={28}
                />
              </div>
            </div>
          </div>
          
          <div className="hidden lg:block relative">
            <div className="relative w-[488px] h-[656px] bg-[#3971e7] rounded-lg">
              <Image 
                src="/images/img_elem_1.svg"
                alt="Element 1"
                width={224}
                height={112}
                className="absolute top-8 left-0"
              />
              <Image 
                src="/images/img_elem_2.svg"
                alt="Element 2"
                width={112}
                height={112}
                className="absolute top-8 left-[224px]"
              />
              <Image 
                src="/images/img_elem_3.svg"
                alt="Element 3"
                width={112}
                height={224}
                className="absolute top-[118px] left-[224px]"
              />
              <Image 
                src="/images/img_elem_4.svg"
                alt="Element 4"
                width={112}
                height={224}
                className="absolute top-[342px] left-[224px]"
              />
              <Image 
                src="/images/img_elem_5.svg"
                alt="Element 5"
                width={224}
                height={112}
                className="absolute top-[454px] left-0"
              />
              <div className="absolute top-[454px] left-[-112px] w-[112px] h-[112px] border-2 border-white rounded-full flex items-center justify-center">
                <div className="w-[56px] h-[56px] bg-[#b1ccfa] rounded-full"></div>
              </div>
              <Image 
                src="/images/img_elem_7.svg"
                alt="Element 7"
                width={112}
                height={224}
                className="absolute top-[230px] left-[-112px]"
              />
              <div className="absolute top-[118px] left-[-112px] w-[112px] h-[112px] bg-white rounded-full"></div>
              <div className="absolute top-[342px] left-0 w-[112px] h-[224px] bg-[#2b63d9] rounded-[56px]"></div>
              <Image 
                src="/images/img_rectangle_34624127.png"
                alt="Person"
                width={224}
                height={224}
                className="absolute top-[118px] left-0 rounded-[112px_0px_112px_112px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;