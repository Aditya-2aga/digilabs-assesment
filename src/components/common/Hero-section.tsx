'use client';

import React, { useState } from 'react';
import Button from '@/components/ui/Button';
import Image from 'next/image';

interface HeroSectionProps {
  title: string;
  description: string;
  ctaText: string;
  ctaAction?: () => void;
  supportingLogos?: string[];
  supportingText?: string;
  backgroundImage?: string;
  className?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  description,
  ctaText,
  ctaAction,
  supportingLogos,
  supportingText,
  backgroundImage,
  className = '',
}) => {
  const [notificationStatus, setNotificationStatus] = useState<string>('');
  
  
  const handlePushNotification = async () => {
  
    if (ctaAction) {
      ctaAction();
    }
    
    try {
    
      if (!('Notification' in window)) {
        setNotificationStatus('This browser does not support notifications');
        return;
      }
      
      
      if (Notification.permission === 'granted') {
        
        sendNotification();
      } else if (Notification.permission !== 'denied') {
        
        const permission = await Notification.requestPermission();
        
        if (permission === 'granted') {
          sendNotification();
        } else {
          setNotificationStatus('Notification permission denied');
        }
      } else {
        setNotificationStatus('Notification permission previously denied');
      }
    } catch (error) {
      console.error('Error sending notification:', error);
      setNotificationStatus('Error sending notification');
    }
  };
  
  const sendNotification = () => {
    try {
      const notification = new Notification('New Notification', {
        body: 'Thank you for subscribing to our notifications!',
        icon: '/Lookscout.png',
      });
      
      notification.onclick = () => {
        window.focus();
        notification.close();
      };
      
      setNotificationStatus('Notification sent successfully!');
    } catch (error) {
      console.error('Error creating notification:', error);
      setNotificationStatus('Error creating notification');
    }
  };

  return (
    <section className={`bg-[#2b63d9] text-white py-16 relative ${className}`}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="max-w-xl">
            <h1 className="text-5xl font-bold leading-tight mb-6">{title}</h1>
            <p className="text-[#b1ccfa] text-lg mb-8">{description}</p>
            <Button 
              onClick={handlePushNotification} 
              className="bg-[#437ef7] shadow-sm text-white font-semibold px-5 py-3 rounded-md"
            >
              {ctaText}
            </Button>
            
            {notificationStatus && (
              <p className="mt-4 text-sm text-white bg-black/20 p-2 rounded">
                {notificationStatus}
              </p>
            )}
            
            {supportingText && (
              <div className="mt-12">
                <p className="text-sm font-medium mb-4">{supportingText}</p>
                {supportingLogos && supportingLogos.length > 0 && (
                  <div className="flex flex-wrap gap-6">
                    {supportingLogos.map((logo, index) => (
                      <Image 
                        key={index}
                        src={logo}
                        alt="Supporting Company"
                        width={112}
                        height={28}
                      />
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
          
          {backgroundImage && (
            <div className="hidden lg:block relative">
              <Image 
                src={backgroundImage} 
                alt="Hero Background" 
                width={600} 
                height={600} 
                className="object-cover"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;