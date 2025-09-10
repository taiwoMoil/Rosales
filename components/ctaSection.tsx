'use client';

import { useChat } from '../components/chatProvider';
import { Leaf, Phone, MessageCircle, Star, Shield, Clock, CheckCircle } from 'lucide-react';

export function CTASection() {
  const { openChat } = useChat();

  return (
    <section className="relative section-padding bg-white overflow-hidden">
      {/* Decorative Background Illustrations */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Subtle leaf pattern background */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='120' height='120' viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%234CAF50' fill-opacity='0.3'%3E%3Cpath d='M60 60c0-16.569-13.431-30-30-30s-30 13.431-30 30 13.431 30 30 30 30-13.431 30-30zm30-30c0 16.569 13.431 30 30 30s30-13.431 30-30-13.431-30-30-30-30 13.431-30 30z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '120px 120px'
          }} />
        </div>

        {/* Floating decorative elements */}
        <div className="absolute top-10 left-10 text-accent-green/20">
          <Leaf size={40} className="animate-float" />
        </div>
        <div className="absolute top-20 right-20 text-primary-green/20">
          <Leaf size={32} className="animate-float delay-1000" style={{ transform: 'rotate(45deg)' }} />
        </div>
        <div className="absolute bottom-20 left-20 text-accent-green/20">
          <Leaf size={28} className="animate-float delay-2000" style={{ transform: 'rotate(-30deg)' }} />
        </div>
        <div className="absolute bottom-10 right-10 text-primary-green/20">
          <Leaf size={36} className="animate-float delay-3000" style={{ transform: 'rotate(120deg)' }} />
        </div>

        {/* Decorative circles */}
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-accent-green/5 rounded-full animate-pulse" />
        <div className="absolute bottom-1/3 right-1/3 w-24 h-24 bg-primary-green/5 rounded-full animate-pulse delay-1000" />
      </div>

      <div className="relative z-10 container-padding">
        <div className="max-w-5xl mx-auto">
          {/* Main Content */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-accent-green/10 text-accent-green px-6 py-2 rounded-full text-sm font-semibold mb-6">
              <Star className="mr-2" size={16} />
              Buda's #1 Rated Landscaping Service
            </div>
            
            <h2 className="text-4xl lg:text-6xl font-bold text-primary-green mb-6 leading-tight">
              Transform Your Yard Into a
              <span className="block text-accent-green">Beautiful Oasis</span>
            </h2>
            
            <p className="text-xl lg:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
              Join 500+ satisfied homeowners in Buda, Austin, Kyle & Manchaca who trust us with their outdoor spaces
            </p>
          </div>

          {/* CTA Cards */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* Quote Card */}
            <div className="bg-gradient-to-br from-accent-green to-primary-green rounded-3xl p-8 text-white text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-white/10 backdrop-blur-sm" />
              <div className="relative z-10">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <MessageCircle size={32} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Get Instant Quote</h3>
                <p className="text-white/90 mb-6">Chat with us now and get your custom quote in 60 seconds</p>
                <button 
                  className="bg-white text-primary-green px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105 hover:shadow-xl w-full"
                  onClick={openChat}
                >
                  Start Chat Now 💬
                </button>
              </div>
            </div>

            {/* Call Card */}
            <div className="bg-white border-2 border-primary-green rounded-3xl p-8 text-center relative overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-primary-green/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Phone size={32} className="text-primary-green" />
              </div>
              <h3 className="text-2xl font-bold text-primary-green mb-4">Call Direct</h3>
              <p className="text-gray-600 mb-6">Speak with John personally for immediate assistance</p>
              <a 
                href="tel:512-694-1773" 
                className="bg-primary-green hover:bg-accent-green text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl w-full inline-block"
              >
                📞 (512) 694-1773
              </a>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="bg-gray-50 rounded-2xl p-8">
            <h4 className="text-center text-lg font-semibold text-gray-800 mb-6">Why Choose Rosales Yard Maintenance?</h4>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-accent-green/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <CheckCircle className="text-accent-green" size={24} />
                </div>
                <p className="font-semibold text-gray-800">Free Estimates</p>
                <p className="text-sm text-gray-600">No hidden fees</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Shield className="text-blue-600" size={24} />
                </div>
                <p className="font-semibold text-gray-800">Licensed & Insured</p>
                <p className="text-sm text-gray-600">Fully protected</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Star className="text-yellow-600" size={24} />
                </div>
                <p className="font-semibold text-gray-800">500+ Happy Customers</p>
                <p className="text-sm text-gray-600">5-star rated</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Clock className="text-orange-600" size={24} />
                </div>
                <p className="font-semibold text-gray-800">Since 2019</p>
                <p className="text-sm text-gray-600">Proven experience</p>
              </div>
            </div>
          </div>

          {/* Bottom guarantee */}
          <div className="text-center mt-12">
            <div className="inline-flex items-center bg-green-50 border border-accent-green/20 text-accent-green px-6 py-3 rounded-full">
              <Leaf className="mr-2" size={20} />
              <span className="font-semibold">100% Satisfaction Guaranteed • No Contracts Required</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
