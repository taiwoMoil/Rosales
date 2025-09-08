'use client';

import { Scissors, Leaf, Sprout, Trash2, Calculator, Zap, Percent } from 'lucide-react';
import { useChat } from '../components/chatProvider';
import type { Service } from '../types';

const services: Service[] = [
  {
    id: 'mowing',
    name: 'Lawn Mowing & Maintenance',
    icon: 'scissors',
    description: 'Professional weekly or bi-weekly mowing with precision cutting heights optimized for Texas grass types.',
    fullDescription: 'Professional weekly or bi-weekly mowing with precision cutting heights optimized for Texas grass types including St. Augustine, Bermuda, and Zoysia. Our commercial-grade equipment ensures clean, even cuts that promote healthy growth. Complete service includes detailed edge trimming along walkways, driveways, and flower beds, plus thorough debris removal and cleanup. We adjust cutting heights seasonally for optimal lawn health. Perfect for homeowners who want consistent, professional lawn care without the weekend hassle. Most popular with busy families in Buda, Kyle, and Manchaca.',
    pricing: 'From $80-$250',
    features: [
      'Precision cutting heights for grass type',
      'Complete edge trimming',
      'Debris removal and cleanup', 
      'Seasonal height adjustments',
      'Commercial-grade equipment'
    ],
    isFeatured: true
  },
  {
    id: 'maintenance',
    name: 'Full Maintenance Package',
    icon: 'leaf',
    description: 'Complete weekly lawn care package - our most comprehensive service! Save 25% compared to individual services.',
    fullDescription: 'Complete weekly lawn care package - our most comprehensive service! Includes professional mowing, precise edging, shrub and hedge trimming, targeted weed control treatments, and seasonal fertilization programs. Additional services include leaf removal during fall and winter months, flower bed maintenance, irrigation system checks, and priority scheduling. Maintenance customers receive dedicated support and flexible service adjustments. Save 25% compared to individual services while ensuring your property looks pristine year-round. Perfect for homeowners who want a completely hands-off, professional solution.',
    pricing: 'Custom Quote',
    features: [
      'Weekly mowing and edging',
      'Shrub and hedge trimming',
      'Weed control treatments',
      'Seasonal fertilization',
      'Priority scheduling'
    ],
    savings: 'Save 25% vs individual services'
  },
  {
    id: 'landscaping',
    name: 'Landscape Design & Installation', 
    icon: 'sprout',
    description: 'Custom landscape transformation starting with free consultation and professional design planning.',
    fullDescription: 'Custom landscape transformation starting with free consultation and professional design planning. We specialize in native Texas plants that thrive in Austin\'s climate while reducing water needs and maintenance. Services include complete irrigation system design and installation, hardscape features like pathways and retaining walls, seasonal planting programs, and garden establishment with ongoing maintenance planning. 1-year plant guarantee included on all installations. Perfect for new homes, property upgrades, or complete yard makeovers. We handle everything from design to installation to ongoing care.',
    pricing: 'Custom Quote',
    features: [
      'Free design consultation',
      'Native Texas plant selection',
      'Irrigation system installation',
      'Hardscape features',
      '1-year plant guarantee'
    ]
  },
  {
    id: 'cleanup',
    name: 'Seasonal Cleanup Services',
    icon: 'broom', 
    description: 'Comprehensive seasonal services to keep your property looking perfect year-round.',
    fullDescription: 'Spring: Deep cleanup, lawn aeration, fertilization, and planting preparation. Summer: Intensive maintenance, irrigation checks, and pest control treatments for Texas heat. Fall: Comprehensive leaf removal, winter lawn preparation, and strategic pruning. Winter: Storm debris cleanup, equipment maintenance, and spring planning consultations. Available as one-time services or seasonal packages. Popular for property preparation before events, seasonal transitions, or getting back on track after neglect. We handle all debris removal and disposal.',
    pricing: 'Custom Quote',
    features: [
      'Spring deep cleanup & aeration',
      'Summer intensive maintenance', 
      'Fall leaf removal & pruning',
      'Winter storm cleanup',
      'Seasonal packages available'
    ]
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
            Premium Services for Your
            <span className="block bg-gradient-to-r from-accent-green to-primary-green bg-clip-text text-transparent">
              Perfect Yard
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Expertly crafted lawn care solutions designed specifically for Austin's unique climate and your lifestyle needs
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
                    <div className="absolute -top-4 -right-4 bg-gradient-to-r from-warm-orange to-orange-600 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg transform rotate-12 z-20">
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
              Ready to Get Started?
            </div>
            
            <h3 className="text-3xl lg:text-4xl font-bold text-primary-green mb-6">
              Transform Your Yard Into
              <span className="block bg-gradient-to-r from-accent-green to-primary-green bg-clip-text text-transparent">
                Something Extraordinary
              </span>
            </h3>
            
            <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
              Get your personalized quote in under 60 seconds. No commitments, no pressure - just honest pricing for exceptional results that will make your neighbors envious.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-10">
              <button
                onClick={openChat}
                className="group bg-gradient-to-r from-warm-orange to-orange-600 hover:from-orange-600 hover:to-red-500 text-white px-10 py-4 rounded-2xl font-bold text-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl flex items-center space-x-3"
              >
                <Calculator size={24} className="group-hover:animate-bounce" />
                <span>Get My Custom Quote Now</span>
              </button>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
              <div className="flex flex-col items-center space-y-2">
                <div className="w-12 h-12 bg-accent-green/10 rounded-full flex items-center justify-center">
                  <Zap size={20} className="text-accent-green" />
                </div>
                <span className="text-sm font-semibold text-gray-700">Free estimates</span>
                <span className="text-xs text-gray-500">Always transparent</span>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <div className="w-12 h-12 bg-primary-green/10 rounded-full flex items-center justify-center">
                  <Percent size={20} className="text-primary-green" />
                </div>
                <span className="text-sm font-semibold text-gray-700">No contracts</span>
                <span className="text-xs text-gray-500">Flexible service</span>
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