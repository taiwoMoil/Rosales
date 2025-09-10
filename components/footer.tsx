import Link from 'next/link';
import Image from 'next/image';
import { Phone, MessageCircle, Mail, MapPin, Clock, Star, Leaf, Scissors, Sprout, Shield } from 'lucide-react';


const areaLinks = [
  { name: 'Buda, TX', href: '/areas-served/buda' },
  { name: 'Austin (South Austin)', href: '/areas-served/austin' },
  { name: 'Kyle, TX', href: '/areas-served/kyle' },
  { name: 'Manchaca, TX', href: '/areas-served/manchaca' },
];

const businessHours = [
  { day: 'Monday - Friday', hours: '7:00 AM - 6:00 PM' },
  { day: 'Saturday', hours: '8:00 AM - 4:00 PM' },
  { day: 'Sunday', hours: 'Emergency Only' },
];

const trustBadges = [
  { icon: Shield, text: 'Licensed & Insured', color: 'text-blue-400' },
  { icon: Star, text: '500+ Happy Customers', color: 'text-yellow-400' },
  { icon: Leaf, text: 'Eco-Friendly Methods', color: 'text-green-400' },
  { icon: Clock, text: 'Since 2019', color: 'text-orange-400' },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gradient-to-br from-neutral-dark via-gray-900 to-neutral-dark text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%234CAF50' fill-opacity='0.1'%3E%3Cpath d='M30 30c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20zm0 0c0 11.046 8.954 20 20 20s20-8.954 20-20-8.954-20-20-20-20 8.954-20 20z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="container-padding py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            
            {/* Company Info & Logo */}
            <div className="space-y-2">
              <div className="flex items-center">
                <Image 
                  src="/Rosales-Yard-transparent.avif" 
                  alt="Rosales Yard Maintenance Logo" 
                  width={120} 
                  height={120}
                  className="rounded-lg"
                />
              </div>
              
              <p className="text-gray-300 text-sm leading-relaxed">
                Buda's premier landscaping company since 2019. We transform ordinary yards into extraordinary outdoor spaces with professional care and guaranteed results.
              </p>

              {/* Trust Badges */}
              <div className="grid grid-cols-2 gap-3">
                {trustBadges.map((badge, index) => {
                  const IconComponent = badge.icon;
                  return (
                    <div key={index} className="flex items-center space-x-2 text-sm">
                      <IconComponent size={16} className={badge.color} />
                      <span className="text-gray-300">{badge.text}</span>
                    </div>
                  );
                })}
              </div>

              <div className="bg-accent-green/10 border border-accent-green/20 rounded-lg p-4 mt-6">
                <p className="text-accent-green font-semibold text-sm mb-2">🌟 Free Estimate</p>
                <p className="text-gray-300 text-xs">Get your custom quote in 60 seconds. No commitments required!</p>
              </div>
            </div>

            {/* Service Areas */}
            <div className="space-y-6">
              <h3 className="text-lg font-bold text-white mb-4 flex items-center">
                <MapPin className="mr-2 text-accent-green" size={20} />
                Service Areas
              </h3>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-accent-green mb-3 text-sm">Primary Coverage:</h4>
                  <ul className="space-y-2">
                    {areaLinks.map((area) => (
                      <li key={area.name}>
                        <Link
                          href={area.href}
                          className="flex items-center text-gray-300 hover:text-white transition-colors text-sm group"
                        >
                          <span className="mr-2 text-accent-green">📍</span>
                          <span className="group-hover:translate-x-1 transition-transform">
                            {area.name}
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="bg-primary-green/10 border border-primary-green/20 rounded-lg p-3">
                  <p className="text-primary-green font-medium text-sm mb-1">Extended Areas:</p>
                  <p className="text-gray-300 text-xs">
                    Cedar Park • Round Rock • Dripping Springs
                  </p>
                </div>
              </div>
            </div>

            {/* Contact & Hours */}
            <div className="space-y-6">
              <h3 className="text-lg font-bold text-white mb-4 flex items-center">
                <Phone className="mr-2 text-accent-green" size={20} />
                Get In Touch
              </h3>
              
              <div className="space-y-4">
                <a
                  href="tel:512-694-1773"
                  className="flex items-center text-gray-300 hover:text-accent-green transition-colors group bg-white/5 rounded-lg p-3 hover:bg-accent-green/10"
                >
                  <Phone className="mr-3 group-hover:text-accent-green transition-colors" size={18} />
                  <div>
                    <p className="font-semibold">(512) 694-1773</p>
                    <p className="text-xs text-gray-400">Call or text anytime</p>
                  </div>
                </a>
                
                <a
                  href="mailto:info@rosalesyard.com"
                  className="flex items-center text-gray-300 hover:text-accent-green transition-colors group"
                >
                  <Mail className="mr-3 group-hover:text-accent-green transition-colors" size={16} />
                  <span className="text-sm">info@rosalesyard.com</span>
                </a>
              </div>

              <div>
                <h4 className="font-semibold text-accent-green mb-3 text-sm flex items-center">
                  <Clock className="mr-2" size={16} />
                  Service Hours
                </h4>
                <ul className="space-y-1 text-sm">
                  {businessHours.map((schedule) => (
                    <li key={schedule.day} className="flex justify-between text-gray-300">
                      <span>{schedule.day}:</span>
                      <span className="text-white font-medium">{schedule.hours}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-xs text-accent-green mt-2">📞 Emergency services available</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700/50 bg-black/20">
          <div className="container-padding py-6">
            <div className="flex flex-col lg:flex-row items-center justify-between space-y-4 lg:space-y-0">
              <div className="text-center lg:text-left">
                <p className="text-gray-300 text-sm">
                  © {currentYear} Rosales Yard Maintenance. All rights reserved.
                </p>
                <p className="text-gray-400 text-xs mt-1">
                  Licensed & Insured in Texas • Proudly Serving Buda Since 2019
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6">
                <div className="flex items-center space-x-4 text-xs">
                  <Link
                    href="/privacy"
                    className="text-gray-400 hover:text-accent-green transition-colors"
                  >
                    Privacy Policy
                  </Link>
                  <Link
                    href="/terms"
                    className="text-gray-400 hover:text-accent-green transition-colors"
                  >
                    Terms of Service
                  </Link>
                </div>
                
                <div className="flex items-center space-x-2 text-accent-green text-sm font-medium">
                  <Sprout size={16} />
                  <span>Beautiful Yards. Guaranteed Results.</span>
                  <Leaf size={16} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}