'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import LanguageSelector from './LanguageSelector';
import { MdOutlineFileDownload } from "react-icons/md";

export default function Header() {
  const t = useTranslations('nav');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Hero section is h-screen (100vh), so midpoint is 50vh
      const heroMidpoint = window.innerHeight / 2;
      const scrolled = window.scrollY > heroMidpoint;
      setIsScrolled(scrolled);
    };

    // Initial check
    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: t('solution'), href: '/solution' },
    { name: t('auricAi'), href: '/auric-ai' },
    { name: t('company'), href: '/company' },
    { name: t('contactUs'), href: '/contact-us' },
  ];

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300`}
      style={{
        backgroundColor: isScrolled ? '#ffffff' : '#ffffff00'
      }}
    >
      <div className="w-pc flex h-16 items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <div className="text-2xl font-bold text-600">Auric AI</div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-[15px] font-bold text-gray-900 transition-colors hover:text-blue-600"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Right Section: Language Switcher & Service Intro Button */}
        <div className="hidden md:flex items-center space-x-4">
          {/* Language Select */}
          <LanguageSelector />

          {/* Service Introduction Button */}
          <button className="flex items-center gap-1 px-4 py-2 text-sm font-medium rounded-full border">
            <MdOutlineFileDownload size={20} />
            {t('serviceIntro')}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isMenuOpen ? (
              <path d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t bg-white">
          <nav className="container mx-auto px-4 py-4 space-y-3">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block py-2 text-sm font-medium text-gray-900 hover:text-blue-600"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-4 border-t space-y-3">
              <LanguageSelector />
              <button className="w-full px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700">
                {t('serviceIntro')}
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
