'use client';

import { MessageCircle, Shield, Star, Users, CheckCircle } from 'lucide-react';
import { useChat } from '../components/chatProvider';


interface HeroProps {
  title?: string;
  subtitle?: string;
  description?: string;
  showTrustBadges?: boolean;
}

export function Hero({ 
  title = "Beautiful Yards.\nGuaranteed Results.",
  subtitle = "Austin's most trusted lawn care service since 2019",
  description = "Over 500 satisfied customers across Buda, Kyle, Manchaca, and South Austin. Experience the difference of owner-operated professional yard care.",
  showTrustBadges = true
}: HeroProps) {
  const { openChat } = useChat();

  const scrollToGallery = () => {
    const element = document.querySelector('#gallery');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const trustBadges = [
    { icon: Users, text: '500+ Happy Customers', count: '500+' },
    { icon: Shield, text: 'Fully Licensed & Insured', badge: 'Licensed' },
    { icon: CheckCircle, text: '100% Guarantee', badge: '100%' },
    { icon: Star, text: 'Owner-Operated Since 2019', badge: 'Since 2019' },
  ];

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-12 sm:pt-16" style={{
      backgroundImage: 'url(/hero-bg-1.jpeg)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'
    }}>
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/40" />
      
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 hero-pattern animate-pattern-move opacity-20" />
      
      {/* Floating Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-48 h-48 bg-white/10 rounded-full top-1/3 left-[5%] animate-float" />
        <div className="absolute w-32 h-32 bg-white/10 rounded-full top-2/3 right-[8%] animate-float delay-2000" />
        <div className="absolute w-24 h-24 bg-white/10 rounded-full top-1/2 right-1/5 animate-float delay-1000" />
        <div className="absolute w-20 h-20 bg-white/10 rounded-full bottom-1/3 left-[15%] animate-float delay-3000" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full">
        <div className="container-padding py-12 sm:py-16">
          <div className="text-center text-white max-w-5xl mx-auto">
            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 leading-tight">
              {title.split('\n').map((line, index) => (
                <span key={index} className="block">
                  {index === 1 ? (
                    <span className="drop-shadow-lg">{line}</span>
                  ) : (
                    <span className="drop-shadow-lg">{line}</span>
                  )}
                </span>
              ))}
            </h1>

            {/* Subtitle */}
            <p className="text-xl sm:text-2xl lg:text-3xl mb-4 font-medium opacity-95 drop-shadow-md">
              {subtitle}
            </p>

            {/* Description */}
            <p className="text-lg sm:text-xl lg:text-2xl mb-12 max-w-4xl mx-auto opacity-90 leading-relaxed drop-shadow-sm">
              {description}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
              <button 
                onClick={openChat}
                className="group bg-warm-orange hover:bg-orange-600 text-white px-10 py-5 rounded-full font-bold text-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl flex items-center space-x-3 min-w-[280px] justify-center"
                aria-label="Get instant quote via chat"
              >
                <MessageCircle size={24} className="group-hover:animate-pulse" />
                <span>Get Instant Quote</span>
              </button>
              
              <button 
                onClick={scrollToGallery}
                className="group border-2 border-white hover:bg-white hover:text-primary-green text-white px-10 py-5 rounded-full font-bold text-xl transition-all duration-300 flex items-center space-x-3 min-w-[280px] justify-center backdrop-blur-sm"
              >
                {/* <Images size={24} className="group-hover:text-accent-green" /> */}
                <span>View Our Work</span>
              </button>
            </div>

            {/* Trust Badges */}
            {showTrustBadges && (
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
                {trustBadges.map((badge, index) => {
                  const IconComponent = badge.icon;
                  return (
                    <div
                      key={index}
                      className="group bg-white/15 backdrop-blur-md border border-white/20 px-4 py-4 rounded-2xl text-center transition-all duration-300 hover:bg-white/25 hover:scale-105 hover:shadow-lg"
                    >
                      <div className="flex flex-col items-center space-y-2">
                        <IconComponent 
                          size={24} 
                          className="text-warm-orange group-hover:text-yellow-300 transition-colors" 
                        />
                        <div className="text-sm font-semibold leading-tight">
                          {badge.text}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white via-white/50 to-transparent" />
    </section>
  );
}