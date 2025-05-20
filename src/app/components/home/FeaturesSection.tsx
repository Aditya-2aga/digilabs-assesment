'use client';

import React from 'react';
import Card from '@/components/common/Card';

const FeaturesSection: React.FC = () => {
  const features = [
    {
      icon: '/images/img_icon.svg',
      title: 'Easier Work Organization',
      description: 'Efficiently unleash cross-media information without cross-media value. Quickly timely deliverables for real-time schemas.',
      link: { text: 'Learn more', url: '#' }
    },
    {
      icon: '/images/img_icon_white_a700.svg',
      title: 'Fast Connection',
      description: 'Completely pursue scalable customer cross- media through potentialities. Holistically quickly installed portals.',
      link: { text: 'Learn more', url: '#' }
    },
    {
      icon: '/images/img_icon_white_a700_32x32.svg',
      title: 'Streamlined Processes',
      description: 'Objectively innovate empowered scalable manufactured products whereas parallel platforms predominate extensible.',
      link: { text: 'Learn more', url: '#' }
    },
    {
      icon: '/images/img_icon_32x32.svg',
      title: 'Easier Integrations',
      description: 'Completely pursue scalable customer try through potentialities. Pontificate portals installed. Efficiently unleash information.',
      link: { text: 'Learn more', url: '#' }
    },
    {
      icon: '/images/img_icon_1.svg',
      title: 'Marketing Analytics',
      description: 'Phosfluorescently engage worldwide methodologies with web-enabled Interactively coordinate.',
      link: { text: 'Learn more', url: '#' }
    },
    {
      icon: '/images/img_icon_2.svg',
      title: 'Workflow Builder',
      description: 'Collaboratively administrate turnkey service channels whereas virtual e-tailers. This is objectively scalable metrics whereas.',
      link: { text: 'Learn more', url: '#' }
    }
  ];

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-[#272d37] mb-4">Messaging for all</h2>
          <p className="text-[#5f6d7e] text-base max-w-xl mx-auto">
            User generated content in real-time will have multiple touchpoints for offshoring.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-16">
          {features.map((feature, index) => (
            <Card
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              link={feature.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;