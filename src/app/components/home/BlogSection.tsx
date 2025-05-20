'use client';

import React from 'react';
import Image from 'next/image';


const BlogSection: React.FC = () => {
  const blogPosts = [
    {
      image: '/images/img_rectangle_1.png',
      title: 'Organize your digital assets with a new methodology here.',
      description: 'Podcasting operational management inside of workflows to establish a framework seamless.\nConvergence collaboratively.',
      author: {
        avatar: '/images/img_avatar_40x40.png',
        name: 'Andrew Miller',
        role: 'CEO'
      },
      date: '25 Apr'
    },
    {
      image: '/images/img_rectangle_1_300x384.png',
      title: 'Organize your digital assets with a new methodology here.',
      description: 'Keeping your eye while performing a deep dive on the start-up mentality to derive convergence collaboratively.',
      author: {
        avatar: '/images/img_avatar_1.png',
        name: 'David Munsan',
        role: 'UX'
      },
      date: '25 Apr'
    },
    {
      image: '/images/img_rectangle_1_1.png',
      title: 'Organize your digital assets with a new methodology here.',
      description: 'Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C.',
      author: {
        avatar: '/images/img_avatar_2.png',
        name: 'Andrew Meller',
        role: 'UI'
      },
      date: '25 Apr'
    }
  ];

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-[#272d37] mb-4">Latest Blog Posts</h2>
          <p className="text-[#5f6d7e] text-base max-w-2xl mx-auto">
            Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate one-to-one customer service with robust ideas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <div key={index} className="flex flex-col">
              <Image 
                src={post.image} 
                alt={post.title} 
                width={384} 
                height={300} 
                className="rounded-lg mb-6"
              />
              <h3 className="text-[22px] font-semibold text-[#272d37] leading-8 mb-4">
                {post.title}
              </h3>
              <p className="text-[#5f6d7e] text-base mb-6 flex-grow">
                {post.description}
              </p>
              <div className="flex justify-between items-center mt-auto">
                <div className="flex items-center">
                  <Image 
                    src={post.author.avatar} 
                    alt={post.author.name} 
                    width={40} 
                    height={40} 
                    className="rounded-full mr-3"
                  />
                  <div>
                    <p className="text-[#272d37] font-medium text-sm">{post.author.name}</p>
                    <p className="text-[#5f6d7e] text-sm">{post.author.role}</p>
                  </div>
                </div>
                <span className="text-[#5f6d7e] text-sm">{post.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;