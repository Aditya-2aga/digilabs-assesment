'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import Image from 'next/image';
import { Menu, X } from 'lucide-react'; // You need to install this if not already

const Header: React.FC = () => {
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileResourcesOpen, setIsMobileResourcesOpen] = useState(false);

  return (
    <header className="bg-[#2b63d9] py-6 border-b border-[#648ef7] relative z-50">
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-4">
          <Link href="/">
            <Image
              src="/images/img_company_logo_white_a700_40x160.svg"
              alt="Lookscout Logo"
              width={160}
              height={40}
              className="h-10"
            />
          </Link>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link href="/" className="text-white font-semibold text-[15px]">
            Home
          </Link>
          <Link href="#products" className="text-white font-semibold text-[15px]">
            Our Products
          </Link>
          <div className="relative">
            <button
              className="flex items-center text-white font-semibold text-[15px]"
              onClick={() => setIsResourcesOpen(!isResourcesOpen)}
            >
              Resources
              <Image
                src="/images/img_chevron_down.svg"
                alt="Dropdown"
                width={20}
                height={20}
                className="ml-1"
              />
            </button>
            {isResourcesOpen && (
              <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
                <Link href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  Documentation
                </Link>
                <Link href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  Tutorials
                </Link>
                <Link href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  Blog
                </Link>
              </div>
            )}
          </div>
          <Link href="#contacts" className="text-white font-semibold text-[15px]">
            Contacts
          </Link>
        </nav>

        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <Link href="/login" className="text-white font-semibold text-[15px]">
            Log in
          </Link>
          <Button
            variant="primary"
            className="bg-[#437ef7] shadow-sm rounded-md"
          >
            Sign up
          </Button>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-white" />
            ) : (
              <Menu className="w-6 h-6 text-white" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#2b63d9] border-t border-[#648ef7] px-4 pb-4 pt-2 space-y-3">
          <Link href="/" className="block text-white font-semibold text-[15px]">
            Home
          </Link>
          <Link href="#products" className="block text-white font-semibold text-[15px]">
            Our Products
          </Link>

          {/* Mobile Resources */}
          <div>
            <button
              className="flex items-center text-white font-semibold text-[15px] w-full"
              onClick={() => setIsMobileResourcesOpen(!isMobileResourcesOpen)}
            >
              Resources
              <Image
                src="/images/img_chevron_down.svg"
                alt="Dropdown"
                width={20}
                height={20}
                className="ml-1"
              />
            </button>
            {isMobileResourcesOpen && (
              <div className="mt-2 ml-4 space-y-2">
                <Link href="#" className="block text-sm text-white hover:underline">
                  Documentation
                </Link>
                <Link href="#" className="block text-sm text-white hover:underline">
                  Tutorials
                </Link>
                <Link href="#" className="block text-sm text-white hover:underline">
                  Blog
                </Link>
              </div>
            )}
          </div>

          <Link href="#contacts" className="block text-white font-semibold text-[15px]">
            Contacts
          </Link>

          {/* Mobile Buttons */}
          <div className="pt-4 border-t border-[#648ef7]">
            <Link href="/login" className="block text-white font-semibold text-[15px] mb-2">
              Log in
            </Link>
            <Button
              variant="primary"
              className="w-full bg-[#437ef7] shadow-sm rounded-md"
            >
              Sign up
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
