'use client';

import { MessageCircle, Phone, CheckCircle, Leaf, Rocket } from 'lucide-react';
import { useChat } from '../components/chatProvider';

const processSteps = [
  {
    step: '1',
    icon: MessageCircle,
    title: 'Get Instant Quote',
    description: 'Start a chat or call for an instant quote. Tell us about your property size and service needs. We respond within minutes with accurate pricing.',
    highlight: 'instant quote'
  },
  {
    step: '2', 
    icon: Phone,
    title: 'We Call You',
    description: 'John or a team member calls within 2 hours to discuss your vision, answer questions, and schedule your service at your convenience.',
    highlight: 'within 2 hours'
  },
  {
    step: '3',
    icon: CheckCircle,
    title: 'Service Confirmation',
    description: 'We confirm all details including services, pricing, and schedule. You\'ll receive a text confirmation with your crew\'s arrival time.',
    highlight: 'text confirmation'
  },
  {
    step: '4',
    icon: Leaf,
    title: 'Beautiful Results',
    description: 'Our professional crew arrives on time with commercial equipment and transforms your yard with guaranteed satisfaction.',
    highlight: 'guaranteed satisfaction'
  }
];

export function ProcessSection() {
  const { openChat } = useChat();

  return (
    <section id="process" className="section-padding bg-gradient-to-br from-white via-green-50/20 to-gray-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(45deg, rgba(76, 175, 80, 0.08) 25%, transparent 25%),
                           linear-gradient(-45deg, rgba(76, 175, 80, 0.08) 25%, transparent 25%),
                           linear-gradient(45deg, transparent 75%, rgba(46, 125, 50, 0.08) 75%),
                           linear-gradient(-45deg, transparent 75%, rgba(46, 125, 50, 0.08) 75%)`,
          backgroundSize: '60px 60px',
          backgroundPosition: '0 0, 0 30px, 30px -30px, -30px 0px'
        }}></div>
      </div>

      {/* Animated Leaves */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-16 left-12 text-accent-green/15">
          <Leaf size={50} className="animate-float" style={{ transform: 'rotate(25deg)' }} />
        </div>
        <div className="absolute top-32 right-20 text-primary-green/15">
          <Leaf size={35} className="animate-float delay-1000" style={{ transform: 'rotate(-35deg)' }} />
        </div>
        <div className="absolute bottom-24 left-16 text-accent-green/15">
          <Leaf size={40} className="animate-float delay-2000" style={{ transform: 'rotate(65deg)' }} />
        </div>
        <div className="absolute bottom-40 right-12 text-primary-green/15">
          <Leaf size={30} className="animate-float delay-500" style={{ transform: 'rotate(-15deg)' }} />
        </div>
      </div>
      
      <div className="container-padding relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center bg-accent-green/10 text-accent-green px-6 py-2 rounded-full text-sm font-semibold mb-6">
            <Rocket className="mr-2" size={16} />
            Simple & Streamlined Process
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-primary-green mb-6">
            How We Transform
            <span className="block bg-gradient-to-r from-accent-green to-primary-green bg-clip-text text-transparent">
              Your Outdoor Space
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our proven 4-step process ensures seamless service delivery from first contact to beautiful results
          </p>
        </div>

        {/* Process Steps */}
        <div className="relative mb-20">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-20 left-1/2 transform -translate-x-1/2 w-full max-w-4xl h-0.5">
            <div className="w-full h-full bg-gradient-to-r from-transparent via-accent-green/30 to-transparent"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {processSteps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <div
                  key={step.step}
                  className="group cursor-pointer relative"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  {/* Card Container */}
                  <div className="relative bg-white/80 backdrop-blur-sm border border-white/60 rounded-3xl p-8 h-full shadow-light hover:shadow-medium transition-all duration-500 hover:-translate-y-2 text-center">
                    
                    {/* Background Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-accent-green/3 via-transparent to-primary-green/3 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                    {/* Content */}
                    <div className="relative z-10 pt-4">
                      
                      {/* Icon Container */}
                      <div className="mb-6">
                        <div className="relative">
                          <div className="flex justify-center w-full">
                            <div className="w-14 h-14 bg-gradient-to-br from-accent-green/10 to-primary-green/10 rounded-xl flex items-center justify-center group-hover:from-accent-green/20 group-hover:to-primary-green/20 transition-all duration-300">
                              <IconComponent 
                                size={28} 
                                className="text-accent-green group-hover:text-primary-green transition-colors duration-300" 
                              />
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Title */}
                      <h3 className="text-xl font-bold text-primary-green mb-4 group-hover:text-accent-green transition-colors duration-300">
                        {step.title}
                      </h3>
                      
                      {/* Description */}
                      <p className="text-gray-600 leading-relaxed text-sm">
                        {step.description.split(step.highlight).map((part, i) => 
                          i === 1 ? (
                            <span key={i}>
                              <span className="bg-accent-green/10 text-accent-green px-2 py-1 rounded-full text-xs font-semibold">
                                {step.highlight}
                              </span>
                              {step.description.split(step.highlight)[2] || ''}
                            </span>
                          ) : i === 0 ? part : null
                        )}
                      </p>
                    </div>

                    {/* Subtle Border Glow */}
                    <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-accent-green/20 via-primary-green/20 to-accent-green/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl"></div>
                  </div>

                  {/* Arrow Connector (Desktop) */}
                  {/* {index < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-20 -right-3 z-30">
                      <div className="w-6 h-6 bg-accent-green/20 rounded-full flex items-center justify-center group-hover:bg-accent-green/40 transition-colors duration-300">
                        <div className="w-2 h-2 bg-accent-green rounded-full"></div>
                      </div>
                    </div>
                  )} */}
                </div>
              );
            })}
          </div>
        </div>
        
        {/* Bottom CTA */}
        <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-12 lg:p-16 shadow-light border border-white/60 overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at 30% 70%, rgba(76, 175, 80, 0.1) 0%, transparent 50%),
                               radial-gradient(circle at 70% 30%, rgba(46, 125, 50, 0.1) 0%, transparent 50%)`
            }}></div>
          </div>
          
          <div className="relative z-10 text-center">
            <div className="inline-flex items-center bg-accent-green/10 text-accent-green px-6 py-2 rounded-full text-sm font-semibold mb-6">
              <CheckCircle className="mr-2" size={16} />
              Ready to Begin?
            </div>
            
            <h3 className="text-3xl lg:text-4xl font-bold text-primary-green mb-6">
              Start Your Yard
              <span className="block bg-gradient-to-r from-accent-green to-primary-green bg-clip-text text-transparent">
                Transformation Today
              </span>
            </h3>
            
            <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
              Join hundreds of satisfied Austin homeowners who trust us with their outdoor spaces
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <button
                onClick={openChat}
                className="group bg-gradient-to-r from-accent-green to-primary-green hover:from-primary-green hover:to-accent-green text-white px-10 py-4 rounded-2xl font-bold text-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl flex items-center space-x-3"
              >
                <Rocket size={24} className="group-hover:animate-bounce" />
                <span>Start My Transformation</span>
              </button>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-xl mx-auto">
              <div className="flex items-center justify-center space-x-2 text-sm text-gray-600">
                <div className="w-2 h-2 bg-accent-green rounded-full"></div>
                <span className="font-medium">Free estimates</span>
              </div>
              <div className="flex items-center justify-center space-x-2 text-sm text-gray-600">
                <div className="w-2 h-2 bg-primary-green rounded-full"></div>
                <span className="font-medium">No contracts</span>
              </div>
              <div className="flex items-center justify-center space-x-2 text-sm text-gray-600">
                <div className="w-2 h-2 bg-warm-orange rounded-full"></div>
                <span className="font-medium">Same-day response</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}