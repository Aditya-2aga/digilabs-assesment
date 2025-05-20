'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Button from '@/components/ui/Button';

const HeroSection: React.FC = () => {
  const [notificationStatus, setNotificationStatus] = useState<string>('');

  const handlePushNotification = async () => {
    try {
      if (!('Notification' in window)) {
        setNotificationStatus('This browser does not support notifications.');
        return;
      }

      if (Notification.permission === 'granted') {
        sendNotification();
      } else if (Notification.permission !== 'denied') {
        const permission = await Notification.requestPermission();

        if (permission === 'granted') {
          sendNotification();
        } else {
          setNotificationStatus('Notification permission denied.');
        }
      } else {
        setNotificationStatus('Notification permission previously denied. Please enable it in your browser settings.');
      }
    } catch (error) {
      console.error('Error during notification process:', error);
      setNotificationStatus('An error occurred during the notification process.');
    }
  };

  const sendNotification = () => {
    try {
      const notification = new Notification('Hello from Lookscout!', {
        body: 'Thank you for exploring our products! We appreciate your visit.',
        icon: '/Lookscout.png',
      });

      notification.onclick = () => {
        window.focus();
        notification.close();
      };

      setNotificationStatus('Notification sent successfully!');
    } catch (error) {
      console.error('Error creating notification:', error);
      setNotificationStatus('Failed to create notification.');
    }
  };

  return (
    <section className="bg-[#2b63d9] text-white py-10 md:py-16 relative">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="max-w-xl text-center lg:text-left mx-auto lg:mx-0">
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight lg:leading-[60px] mb-6">
              Your Supercharged Design Workflow.
            </h1>
            <p className="text-[#b1ccfa] text-base sm:text-lg leading-relaxed lg:leading-7 mb-8">
              We've been told it is not possible to overachieve our customers' expectations. We have not reinvented the wheel, we decided to build upon it.
            </p>
            <Button
              onClick={handlePushNotification}
              className="bg-[#437ef7] shadow-sm text-white font-semibold px-5 py-3 rounded-md hover:bg-[#3a6fd0] transition-colors"
            >
              Send Notification
            </Button>

            {notificationStatus && (
              <p className="mt-4 text-sm text-white bg-black/20 p-2 rounded inline-block lg:block">
                {notificationStatus}
              </p>
            )}

            <div className="mt-10 lg:mt-12">
              <p className="text-sm font-medium mb-4">Who supports us</p>
              <div className="flex flex-wrap gap-4 sm:gap-6 justify-center lg:justify-start">
                <Image
                  src="/images/img_company_logo.svg"
                  alt="Supporting Company"
                  width={112}
                  height={28}
                  className="h-6 sm:h-7 w-auto"
                />
                <Image
                  src="/images/img_company_logo_white_a700.svg"
                  alt="Supporting Company"
                  width={112}
                  height={28}
                  className="h-6 sm:h-7 w-auto"
                />
                <Image
                  src="/images/img_company_logo_white_a700_28x112.svg"
                  alt="Supporting Company"
                  width={112}
                  height={28}
                  className="h-6 sm:h-7 w-auto"
                />
                <Image
                  src="/images/img_company_logo_28x112.svg"
                  alt="Supporting Company"
                  width={112}
                  height={28}
                  className="h-6 sm:h-7 w-auto"
                />
              </div>
            </div>
          </div>

          <div className="relative mt-8 lg:mt-0 flex justify-center lg:justify-end items-center">
            {/* Mobile/Tablet specific graphic */}
            <div className="block lg:hidden relative w-[300px] h-[400px] sm:w-[340px] sm:h-[450px] bg-[#3971e7] rounded-lg overflow-hidden mx-auto">
              <div className="absolute top-4 left-1/2 -translate-x-1/2 w-20 h-10 border-2 border-white rounded-full opacity-80"></div>
              <div className="absolute top-16 left-4 w-16 h-16 bg-white rounded-full opacity-80"></div>
              <div className="absolute top-12 right-4 w-12 h-24 bg-white/50 rounded-xl opacity-80"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <Image
                  src="/images/img_rectangle_34624127.png"
                  alt="Person"
                  width={140}
                  height={140}
                  className="rounded-[70px_0px_70px_70px] object-cover"
                />
              </div>
              <div className="absolute bottom-16 left-4 w-20 h-20 bg-white/30 rounded-tl-full rounded-tr-full rounded-bl-full opacity-80 transform rotate-45"></div>
              <div className="absolute bottom-8 right-1/2 translate-x-1/2 w-24 h-12 bg-white rounded-full opacity-80"></div>
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-10 h-10 border-2 border-white rounded-full opacity-80 flex items-center justify-center">
                <div className="w-4 h-4 bg-white rounded-full"></div>
              </div>
            </div>

            {/* Desktop specific graphic (original structure) */}
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
      </div>
    </section>
  );
};

export default HeroSection;