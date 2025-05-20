'use client';

import Image from 'next/image';
import React, { useState } from 'react';
import Button from '@/components/ui/Button';

const NewsletterSection: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Subscribing email:', email);
    setEmail('');
    alert('Thank you for subscribing!');
  };

  return (
    <section className="bg-[#fafbfc] py-16">
      <div className="container mx-auto px-4 text-center">
        <span className="text-[#437ef7] font-semibold text-sm mb-2 inline-block">
          1% OF THE INDUSTRY
        </span>
        <h2 className="text-3xl font-semibold text-[#272d37] max-w-3xl mx-auto mb-12 leading-tight">
          Welcome to your new digital reality that will rock your world truly at all throughout.
        </h2>
        
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row max-w-lg mx-auto mb-8">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="bg-white border border-[#dae0e6] text-[#919ba6] px-4 py-3 rounded-l-md focus:outline-none flex-grow"
          />
          <Button 
            type="submit" 
            className="bg-[#437ef7] text-white font-semibold px-4 py-3 rounded-r-md"
          >
            Submit
          </Button>
        </form>
        
        <div className="flex flex-wrap justify-center gap-8">
          <div className="flex items-center">
            <div className="bg-[#437ef7] rounded-full w-5 h-5 flex items-center justify-center mr-2">
              <Image 
                src="/images/img_check.svg" 
                alt="Check" 
                width={12} 
                height={12} 
              />
            </div>
            <span className="text-[#272d37] font-medium">Fully Secure</span>
          </div>
          <div className="flex items-center">
            <div className="bg-[#437ef7] rounded-full w-5 h-5 flex items-center justify-center mr-2">
              <Image 
                src="/images/img_check.svg" 
                alt="Check" 
                width={12} 
                height={12} 
              />
            </div>
            <span className="text-[#272d37] font-medium">24/7 Support</span>
          </div>
          <div className="flex items-center">
            <div className="bg-[#437ef7] rounded-full w-5 h-5 flex items-center justify-center mr-2">
              <Image 
                src="/images/img_check.svg" 
                alt="Check" 
                width={12} 
                height={12} 
              />
            </div>
            <span className="text-[#272d37] font-medium">Done Deal</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;