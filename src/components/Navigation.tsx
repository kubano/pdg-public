'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Bars3Icon, XMarkIcon, SunIcon, MoonIcon, EnvelopeIcon } from '@heroicons/react/24/outline';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/#about' },
  { name: 'Projects', href: '/projects' },
  { name: 'Contact', href: '/contact' },
];

const socialLinks = [
  {
    name: 'GitHub',
    href: 'https://github.com/kubano',
    icon: (props: React.SVGProps<SVGSVGElement>) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
      </svg>
    ),
  },
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com/company/pdg',
    icon: (props: React.SVGProps<SVGSVGElement>) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
  },
  {
    name: 'Email',
    href: 'mailto:hello@pdg.dev',
    icon: EnvelopeIcon,
  },
];

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Check for saved theme preference or prefer-color-scheme
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setDarkMode(true);
      document.documentElement.classList.add('dark');
    } else {
      setDarkMode(false);
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    
    if (newDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <Image
              src="/pbw-logo-built-nav.png"
              alt="PDG Logo"
              width={120}
              height={40}
              className="h-8 w-auto drop-shadow-lg"
            />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm font-semibold leading-6 text-white/90 hover:text-white transition-colors"
            >
              {item.name}
            </a>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:items-center lg:gap-x-6">
          {/* Social Links */}
          <div className="flex items-center gap-x-4">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-white transition-colors p-1.5 hover:scale-110 transform duration-200"
                title={link.name}
              >
                <span className="sr-only">{link.name}</span>
                <link.icon className="h-5 w-5" aria-hidden="true" />
              </a>
            ))}
          </div>

          {/* Dark Mode Toggle */}
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-lg text-white/70 hover:text-white hover:bg-white/10 transition-all duration-200 hover:scale-110 transform"
            title={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            <span className="sr-only">Toggle dark mode</span>
            {darkMode ? (
              <SunIcon className="h-5 w-5" aria-hidden="true" />
            ) : (
              <MoonIcon className="h-5 w-5" aria-hidden="true" />
            )}
          </button>

          {/* Contact Link */}
          <a
            href="/contact"
            className="text-sm font-semibold leading-6 text-white/90 hover:text-white transition-colors ml-2"
          >
            Get in touch <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </nav>
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden">
          <div className="fixed inset-0 z-50" />
          <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-black/80 backdrop-blur-xl px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-white/10">
            <div className="flex items-center justify-between">
              <Link href="/" className="-m-1.5 p-1.5">
                <Image
                  src="/pbw-logo-built-nav.png"
                  alt="PDG Logo"
                  width={120}
                  height={40}
                  className="h-8 w-auto drop-shadow-lg"
                />
              </Link>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-white"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-white/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white/90 hover:bg-white/10"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="py-6">
                  <a
                    href="/contact"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-white/90 hover:bg-white/10 mb-4"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Get in touch
                  </a>
                  
                  {/* Mobile Social Links */}
                  <div className="flex items-center justify-center gap-x-6 mb-4">
                    {socialLinks.map((link) => (
                      <a
                        key={link.name}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white/70 hover:text-white transition-colors p-2 hover:bg-white/10 rounded-lg"
                        title={link.name}
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        <span className="sr-only">{link.name}</span>
                        <link.icon className="h-6 w-6" aria-hidden="true" />
                      </a>
                    ))}
                  </div>

                  {/* Mobile Dark Mode Toggle */}
                  <div className="flex justify-center">
                    <button
                      onClick={toggleDarkMode}
                      className="flex items-center gap-2 px-4 py-2 rounded-lg text-white/90 hover:text-white hover:bg-white/10 transition-all duration-200 text-sm font-medium"
                    >
                      {darkMode ? (
                        <>
                          <SunIcon className="h-5 w-5" aria-hidden="true" />
                          Light Mode
                        </>
                      ) : (
                        <>
                          <MoonIcon className="h-5 w-5" aria-hidden="true" />
                          Dark Mode
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
