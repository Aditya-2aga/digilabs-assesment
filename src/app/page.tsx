'use client';

import React from 'react';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import HeroSection from './components/home/HeroSection';
import FeaturesSection from './components/home/FeaturesSection';
import ProductFeaturesSection from './components/home/ProductFeaturesSection';
import DarkSection from './components/home/DarkSection';
import TestimonialSection from './components/home/TestimonialSection';
import BlogSection from './components/home/BlogSection';
import ClientsSection from './components/home/ClientsSection';
import NewsletterSection from './components/home/NewsletterSection';

export default function Home() {
  return (
    <main>
      <Header />
      <HeroSection />
      <FeaturesSection />
      <ProductFeaturesSection />
      <DarkSection />
      <TestimonialSection />
      <BlogSection />
      <ClientsSection />
      <NewsletterSection />
      <Footer />
    </main>
  );
}