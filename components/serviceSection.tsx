'use client';

import { Scissors, Leaf, Sprout, Trash2, Calculator, Zap, Percent } from 'lucide-react';
import { useChat } from '../components/chatProvider';
import type { Service } from '../types';

const services: Service[] = [
  {
    id: 'mowing',
    name: 'Lawn Mowing & Maintenance',
    icon: 'scissors',
    description: 'Professional weekly or bi-weekly mowing with precision cutting heights optimized for Texas grass types. Includes debris blowoff from hard surfaces.',
    fullDescription: 'Professional weekly or bi-weekly mowing with precision cutting heights optimized for Texas grass types including St. Augustine, Bermuda, and Zoysia. Our commercial-grade equipment ensures clean, even cuts that promote healthy growth. Complete service includes detailed edge trimming along walkways, driveways, and flower beds, plus thorough debris blowoff from hard surfaces (patios, sidewalks, and driveways). We adjust cutting heights seasonally for optimal lawn health. Perfect for homeowners who want consistent, professional lawn care without the weekend hassle.',
    pricing: 'From $80-$250',
    features: [
      'Precision cutting heights for grass type',
      'Complete edge trimming',
      'debris blowoff from hard surfaces (patios, sidewalks and driveways)',
      'Seasonal height adjustments',
      'Commercial-grade equipment'
    ],
    isFeatured: true
  },
  {
    id: 'flowerbed',
    name: 'Flowerbed Cleanup and Maintenance',
    icon: 'sprout',
    description: 'Professional flowerbed maintenance including weeding, trimming, and optional mulching services.',
    fullDescription: 'Keep your flowerbeds looking pristine with our professional maintenance services. We specialize in hand-pulling weeds and grass to ensure your plants thrive without competition. Our services include precise trimming of shrubs, plants, and bushes to maintain their shape and promote healthy growth. Optional mulching services available to help retain moisture and suppress weeds. Perfect for homeowners who want beautiful, well-maintained flowerbeds without the back-breaking work.',
    pricing: 'Custom Quote',
    features: [
      'Hand pulling weeds and grass',
      'Trimming shrubs, plants, and bushes',
      'Optional mulching services',
      'Seasonal cleanup',
      'Custom maintenance plans available'
    ]
  },
  {
    id: 'weed-fertilization',
    name: 'Weed & Fertilization',
    icon: 'leaf',
    description: 'Professional weed control and fertilization programs to keep your lawn healthy and vibrant.',
    fullDescription: 'Choose between our Basic or Premium treatment plans to keep your lawn in top condition throughout the year. Our Basic Treatment Plan includes 8 treatments per year featuring post-emergent weed control, weed & feed applications, balanced fertilization, and pre-emergent treatments. For the ultimate in lawn care, our Premium Treatment Plan offers 18 comprehensive treatments that include everything in the Basic plan plus targeted insecticide applications, fungicide treatments, and soil amendments. Both plans are designed to promote healthy turf growth while controlling weeds and pests.',
    pricing: 'Custom Quote',
    features: [
      'Basic Treatment plan, consists of 8 treatments for the year (includes post-emergent, weed & feed, fertilizer and pre-emergent)',
      'Premium Treatment plan, consists of 18 treatments for the year (includes everything in the basic + insecticide, fungicide and soil amendments)',
      'Post-emergent weed control',
      'Pre-emergent applications',
      'Soil health optimization'
    ],
    savings: 'Ask about our seasonal specials!'
  }
];

const iconMap = {
  scissors: Scissors,
  leaf: Leaf,
  sprout: Sprout,
  broom: Trash2
};

export function ServicesSection() {
  const { openChat, openChatWithService } = useChat();

  return (
    <section id="services" className="section-padding bg-gradient-to-br from-gray-50 via-white to-green-50/30 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, rgba(76, 175, 80, 0.1) 0%, transparent 50%),
                           radial-gradient(circle at 75% 75%, rgba(46, 125, 50, 0.1) 0%, transparent 50%)`
        }}></div>
      </div>

      {/* Animated Leaves */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-8 text-accent-green/12">
          <Leaf size={45} className="animate-float" style={{ transform: 'rotate(15deg)' }} />
        </div>
        <div className="absolute top-48 right-16 text-primary-green/12">
          <Leaf size={38} className="animate-float delay-1500" style={{ transform: 'rotate(-45deg)' }} />
        </div>
        <div className="absolute bottom-32 left-20 text-accent-green/12">
          <Leaf size={42} className="animate-float delay-2500" style={{ transform: 'rotate(75deg)' }} />
        </div>
        <div className="absolute bottom-16 right-8 text-primary-green/12">
          <Leaf size={35} className="animate-float delay-750" style={{ transform: 'rotate(-25deg)' }} />
        </div>
        <div className="absolute top-1/3 left-1/4 text-accent-green/8">
          <Leaf size={28} className="animate-float delay-3000" style={{ transform: 'rotate(105deg)' }} />
        </div>
      </div>

      <div className="container-padding relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center bg-accent-green/10 text-accent-green px-6 py-2 rounded-full text-sm font-semibold mb-6">
            <Leaf className="mr-2" size={16} />
            Professional Lawn Care Excellence
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-primary-green mb-6">
            Premium Service remove for your
            <span className="block bg-gradient-to-r from-accent-green to-primary-green bg-clip-text text-transparent">
              perfect Yard
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Expertly crafted lawn care solutions designed specifically for Buda's unique climate and your lifestyle needs
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 mb-20">
          {services.map((service, index) => {
            const IconComponent = iconMap[service.icon as keyof typeof iconMap];
            const isMainService = service.id === 'mowing';

            return (
              <div
                key={service.id}
                className="group cursor-pointer relative"
                onClick={() => openChatWithService(service.id)}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Card Container */}
                <div className="relative bg-white/90 backdrop-blur-sm border border-white/60 rounded-3xl p-8 lg:p-10 h-full shadow-light hover:shadow-heavy transition-all duration-500 hover:-translate-y-3 overflow-hidden">

                  {/* Featured Badge */}
                  {service.isFeatured && (
                    <div className="absolute -top-[2px] -right-4 bg-gradient-to-r from-warm-orange to-orange-600 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg transform rotate-12 z-20">
                      ⭐ MOST POPULAR
                    </div>
                  )}

                  {/* Background Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-accent-green/3 via-transparent to-primary-green/3 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  {/* Decorative Elements */}
                  <div className="absolute top-6 right-6 text-accent-green/10 group-hover:text-accent-green/20 transition-colors duration-500">
                    <IconComponent size={80} className="transform rotate-12" />
                  </div>

                  {/* Content */}
                  <div className="relative z-10">

                    {/* Service Icon */}
                    <div className="mb-8">
                      <div className="relative">
                        <div className="">
                          <div className="w-16 h-16 bg-gradient-to-br from-accent-green/10 to-primary-green/10 rounded-xl flex items-center justify-center group-hover:from-accent-green/20 group-hover:to-primary-green/20 transition-all duration-300">
                            <IconComponent
                              size={32}
                              className="text-accent-green group-hover:text-primary-green transition-colors duration-300"
                            />
                          </div>
                        </div>

                        {/* Floating indicator */}
                        <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-br from-primary-green to-accent-green rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                          <span className="text-white text-xs font-bold">{index + 1}</span>
                        </div>
                      </div>
                    </div>

                    {/* Service Content */}
                    <div className="mb-8">
                      <h3 className="text-2xl lg:text-3xl font-bold text-primary-green mb-4 group-hover:text-accent-green transition-colors duration-300">
                        {service.name}
                      </h3>

                      <p className="text-gray-600 leading-relaxed mb-6 text-lg">
                        {service.description}
                      </p>

                      {/* Key Features */}
                      <div className="space-y-3">
                        {service.features.slice(0, 3).map((feature: string, idx: number) => (
                          <div key={idx} className="flex items-start group/feature">
                            <div className="w-6 h-6 bg-accent-green/10 rounded-full flex items-center justify-center mr-3 mt-0.5 group-hover/feature:bg-accent-green/20 transition-colors">
                              <div className="w-2 h-2 bg-accent-green rounded-full group-hover/feature:scale-125 transition-transform" />
                            </div>
                            <span className="text-gray-700 font-medium">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Pricing and CTA */}
                    <div className="mt-auto space-y-4">
                      <div className="flex items-center justify-between">
                        <div>
                          {isMainService && (
                            <div className="text-sm text-accent-green font-semibold bg-accent-green/10 px-3 py-1 rounded-full">
                              💡 Get instant pricing!
                            </div>
                          )}
                        </div>

                        {service.savings && (
                          <div className="bg-gradient-to-r from-warm-orange to-orange-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                            {service.savings}
                          </div>
                        )}
                      </div>

                      <button
                        className="w-full bg-gradient-to-r from-accent-green to-primary-green hover:from-primary-green hover:to-accent-green text-white py-4 rounded-2xl font-bold text-lg transition-all duration-300 group-hover:shadow-xl flex items-center justify-center space-x-3 hover:scale-105"
                        onClick={(e) => {
                          e.stopPropagation();
                          openChatWithService(service.id);
                        }}
                      >
                        {isMainService ? (
                          <>
                            <Calculator size={20} className="group-hover:animate-bounce" />
                            <span>Get Instant Quote</span>
                          </>
                        ) : (
                          <>
                            <Zap size={20} className="group-hover:animate-pulse" />
                            <span>Get Custom Quote</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>

                  {/* Subtle Border Glow */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-accent-green/20 via-primary-green/20 to-accent-green/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl"></div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="relative bg-gradient-to-br from-white via-green-50/50 to-white rounded-3xl p-12 lg:p-16 shadow-light border border-white/60 overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-30">
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at 20% 80%, rgba(76, 175, 80, 0.1) 0%, transparent 50%),
                               radial-gradient(circle at 80% 20%, rgba(46, 125, 50, 0.1) 0%, transparent 50%)`
            }}></div>
          </div>

          <div className="relative z-10 text-center">
            <div className="inline-flex items-center bg-accent-green/10 text-accent-green px-6 py-2 rounded-full text-sm font-semibold mb-6">
              <Zap className="mr-2" size={16} />
              We're ready to help!
            </div>

            <h3 className="text-3xl lg:text-4xl font-bold text-primary-green mb-6">
              We're ready to take care of your yard!
            </h3>

            <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
            Get your mowing quote in under 60 seconds — no commitment, no pressure. Just honest pricing for professional service, guaranteed.
            </p>

            <button 
              onClick={openChat}
              className="group mb-10 relative bg-gradient-to-r from-warm-orange to-orange-600 hover:from-orange-700 hover:to-orange-800 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 hover:scale-105 shadow-2xl hover:shadow-orange-500/25 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative flex items-center space-x-3 text-lg">
                <span className="text-2xl animate-pulse">🌟</span>
                <span>Get Your Free Quote</span>
                <span className="bg-white/20 px-3 py-1 rounded-full text-sm font-semibold">60 SEC</span>
              </div>
            </button>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
              <div className="flex flex-col items-center space-y-2">
                <div className="w-12 h-12 bg-accent-green/10 rounded-full flex items-center justify-center">
                  <Zap size={20} className="text-accent-green" />
                </div>
                <span className="text-sm font-semibold text-gray-700">Speak with us</span>
                <span className="text-xs text-gray-500">Real team members</span>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <div className="w-12 h-12 bg-primary-green/10 rounded-full flex items-center justify-center">
                  <Percent size={20} className="text-primary-green" />
                </div>
                <span className="text-sm font-semibold text-gray-700">No contracts</span>
                <span className="text-xs text-gray-500">Flexible scheduling</span>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <div className="w-12 h-12 bg-warm-orange/10 rounded-full flex items-center justify-center">
                  <span className="text-warm-orange font-bold text-lg">✓</span>
                </div>
                <span className="text-sm font-semibold text-gray-700">100% guarantee</span>
                <span className="text-xs text-gray-500">Your satisfaction</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}