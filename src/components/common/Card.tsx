'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface CardProps {
  icon?: string;
  title: string;
  description: string;
  link?: {
    text: string;
    url: string;
  };
  className?: string;
  iconClassName?: string;
  iconBgColor?: string;
}

const Card: React.FC<CardProps> = ({
  icon,
  title,
  description,
  link,
  className = '',
  iconClassName = '',
  iconBgColor = 'bg-[#437ef7]',
}) => {
  return (
    <div className={`flex flex-col ${className}`}>
      {icon && (
        <div className={`${iconBgColor} rounded-full w-12 h-12 flex items-center justify-center mb-5 ${iconClassName}`}>
          <Image src={icon} alt={title} width={32} height={32} />
        </div>
      )}
      <h3 className="text-[22px] font-semibold text-[#272d37] mb-3">{title}</h3>
      <p className="text-[#5f6d7e] text-base leading-6 mb-4">{description}</p>
      {link && (
        <Link 
          href={link.url} 
          className="text-[#437ef7] font-semibold text-[15px] flex items-center mt-auto"
        >
          {link.text}
          <Image 
            src="/images/img_arrow_right.svg" 
            alt="Arrow Right" 
            width={20} 
            height={20} 
            className="ml-2" 
          />
        </Link>
      )}
    </div>
  );
};

export default Card;