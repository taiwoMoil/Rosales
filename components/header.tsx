'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Phone, MessageCircle, Menu, X, Leaf, Zap, Star } from 'lucide-react';
import { useChat } from '../components/chatProvider';

const navigation = [
  { name: 'How It Works', href: '/#process' },
  { name: 'Services', href: '/#services' },
  { name: 'About Us', href: '/#about' },
  { name: 'Get Quote', href: '#quote', isButton: true },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const { openChat } = useChat();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    if (href.startsWith('/#')) {
      const element = document.querySelector(href.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    } else if (href === '#quote') {
      openChat();
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${isScrolled
            ? 'bg-white/95 backdrop-blur-xl shadow-xl border-b border-green-100/50'
            : 'bg-white/90 backdrop-blur-lg shadow-lg border-b border-green-50/30'
          }`}
      >
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-green-50/20 via-white/10 to-green-50/20 pointer-events-none"></div>

        <nav className="container-padding relative z-10">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link
              href="/"
              className="group flex items-center space-x-3 text-primary-green hover:text-accent-green transition-all duration-300"
            >
              <div className="">
                <Image src="/Rosales-Yard-transparent.avif" alt="Rosales Yard Maintenance Logo" width={120} height={120} className="group-hover:scale-110 transition-transform duration-300" />
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-2">
              {navigation.map((item) => {
                if (item.isButton) {
                  return (
                    <button
                      key={item.name}
                      onClick={() => openChat()}
                      className="flex items-center space-x-2 bg-gradient-to-r from-warm-orange to-orange-600 hover:from-orange-600 hover:to-red-500 text-white px-5 py-2.5 rounded-xl font-semibold transition-all duration-300 hover:-translate-y-1 hover:shadow-lg text-sm group"
                    >
                      <Zap size={16} className="group-hover:animate-bounce" />
                      <span>{item.name}</span>
                    </button>
                  );
                }
                return (
                  <NavLink
                    key={item.name}
                    href={item.href}
                    pathname={pathname}
                    onClick={() => scrollToSection(item.href)}
                  >
                    {item.name}
                  </NavLink>
                );
              })}
            </div>

            {/* Contact Buttons */}
            <div className="flex items-center space-x-3">
              <a
                href="tel:512-694-1773"
                className="hidden xl:flex items-center space-x-2 bg-gradient-to-r from-accent-green to-primary-green hover:from-primary-green hover:to-accent-green text-white px-4 py-2.5 rounded-xl font-semibold transition-all duration-300 hover:-translate-y-1 hover:shadow-lg text-sm group"
                aria-label="Call Rosales Yard Maintenance"
              >
                <Phone size={16} className="group-hover:animate-pulse" />
                <span>(512) 694-1773</span>
              </a>

              <a
                href="https://wa.me/15126941773?text=Hi! I'm interested in lawn care services in Buda"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center w-10 h-10 bg-gradient-to-br from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white rounded-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                aria-label="Contact us on WhatsApp"
              >
                <MessageCircle size={18} className="group-hover:scale-110 transition-transform duration-300" />
              </a>

              {/* Mobile menu button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2.5 bg-white/60 hover:bg-white/80 text-neutral-dark hover:text-primary-green rounded-xl shadow-light hover:shadow-medium transition-all duration-300 border border-gray-100/50"
                aria-label="Toggle mobile menu"
              >
                {isMobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
              </button>
            </div>
          </div>
        </nav>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white/95 backdrop-blur-xl border-t border-green-100/50 shadow-xl">
            {/* Subtle background pattern */}
            <div className="absolute inset-0 opacity-30">
              <div className="absolute inset-0" style={{
                backgroundImage: `radial-gradient(circle at 20% 80%, rgba(76, 175, 80, 0.1) 0%, transparent 50%)`
              }}></div>
            </div>

            <div className="container-padding py-6 relative z-10">
              <div className="flex flex-col space-y-2">
                {navigation.filter(item => !item.isButton).map((item) => (
                  <NavLink
                    key={item.name}
                    href={item.href}
                    pathname={pathname}
                    onClick={() => scrollToSection(item.href)}
                    mobile
                  >
                    {item.name}
                  </NavLink>
                ))}

                {/* Mobile CTA Buttons */}
                <div className="flex flex-col space-y-3 pt-6 border-t border-green-100/50 mt-4">
                  <button
                    onClick={() => {
                      openChat();
                      setIsMobileMenuOpen(false);
                    }}
                    className="flex items-center justify-center space-x-2 bg-gradient-to-r from-warm-orange to-orange-600 text-white px-6 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:shadow-xl group"
                  >
                    <Zap size={20} className="group-hover:animate-bounce" />
                    <span>Get Instant Quote</span>
                  </button>

                  <a
                    href="tel:512-694-1773"
                    className="flex items-center justify-center space-x-2 bg-gradient-to-r from-accent-green to-primary-green text-white px-6 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:shadow-xl group"
                  >
                    <Phone size={20} className="group-hover:animate-pulse" />
                    <span>(512) 694-1773</span>
                  </a>

                  <a
                    href="https://wa.me/15126941773?text=Hi! I'm interested in lawn care services in Buda"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center space-x-2 bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:shadow-xl group"
                  >
                    <MessageCircle size={20} className="group-hover:scale-110 transition-transform duration-300" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}

interface NavLinkProps {
  href: string;
  pathname: string;
  children: React.ReactNode;
  onClick?: () => void;
  mobile?: boolean;
}

function NavLink({ href, pathname, children, onClick, mobile }: NavLinkProps) {
  const isActive = href.startsWith('/#') ? false : pathname === href || (href !== '/' && pathname.startsWith(href));

  const baseStyles = mobile
    ? "block px-4 py-3 text-base font-semibold transition-all duration-300"
    : "relative px-3 py-2 text-sm font-medium transition-all duration-300";

  const activeStyles = mobile
    ? "text-primary-green bg-gradient-to-r from-green-50 to-accent-green/10 rounded-xl border border-green-200/50"
    : "text-primary-green bg-white/60 rounded-xl shadow-light border border-green-100/50";

  const inactiveStyles = mobile
    ? "text-neutral-dark hover:text-primary-green hover:bg-gradient-to-r hover:from-gray-50 hover:to-green-50/50 rounded-xl"
    : "text-neutral-dark hover:text-primary-green hover:bg-white/40 rounded-xl hover:shadow-light";

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${isActive ? activeStyles : inactiveStyles}`}
    >
      {children}
    </button>
  );
}