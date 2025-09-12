
import Image from 'next/image';
import { Users, MapPin, Shield, HandHeart, Medal, Star, Leaf, Award, Clock } from 'lucide-react';

const achievements = [
  {
    icon: Users,
    number: '500+',
    title: 'Happy Customers',
    subtitle: 'Across Buda Area'
  },
  {
    icon: Clock,
    number: '6+',
    title: 'Years Experience',
    subtitle: 'Since 2019'
  },
  {
    icon: MapPin,
    number: '4',
    title: 'Cities Served',
    subtitle: 'Buda Metro'
  },
  {
    icon: Award,
    number: '100%',
    title: 'Satisfaction Rate',
    subtitle: 'Guaranteed Results'
  }
];

const credentials = [
  { icon: Shield, text: 'Licensed & Insured', color: 'bg-blue-50 text-blue-600' },
  { icon: HandHeart, text: 'Owner-Operated', color: 'bg-green-50 text-green-600' },
  { icon: Star, text: '5-Star Rated', color: 'bg-yellow-50 text-yellow-600' },
  { icon: Medal, text: '100% Guarantee', color: 'bg-orange-50 text-orange-600' },
];

export function AboutSection() {
  return (
    <section id="about" className="relative section-padding overflow-hidden bg-green-50" style={{
      backgroundImage: `
        linear-gradient(rgba(34, 197, 94, 0.03), rgba(34, 197, 94, 0.03)),
        linear-gradient(90deg, rgba(34, 197, 94, 0.1) 1px, transparent 1px),
        linear-gradient(rgba(34, 197, 94, 0.1) 1px, transparent 1px)
      `,
      backgroundSize: '40px 40px, 40px 40px',
      animation: 'pattern-move 20s linear infinite'
    }}>
      {/* Background Illustrations */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Gradient overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-br from-accent-green/5 via-transparent to-primary-green/5"></div>

        {/* Floating leaf decorations */}
        <div className="absolute top-20 left-10 text-accent-green/10">
          <Leaf size={60} className="animate-float" style={{ transform: 'rotate(15deg)' }} />
        </div>
        <div className="absolute top-40 right-16 text-primary-green/10">
          <Leaf size={45} className="animate-float delay-1000" style={{ transform: 'rotate(-45deg)' }} />
        </div>
        <div className="absolute bottom-32 left-20 text-accent-green/10">
          <Leaf size={35} className="animate-float delay-2000" style={{ transform: 'rotate(75deg)' }} />
        </div>
      </div>

      <div className="relative z-10 container-padding">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-accent-green/10 text-accent-green px-6 py-2 rounded-full text-sm font-semibold mb-6">
            <HandHeart className="mr-2" size={16} />
            Meet Your Local Landscaping Expert
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-primary-green mb-4">
            The Face Behind Beautiful Yards
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Personal service from Buda's most trusted landscaping professional
          </p>
        </div>

        <div className='w-full flex justify-center flex-col items-center'>
          <h3 className="text-3xl lg:text-4xl font-bold text-primary-green mb-4">
            John Rosales
          </h3>
          <div className="flex items-center space-x-3 mb-6">
            <div className="bg-accent-green/10 text-accent-green px-4 py-2 rounded-full text-sm font-semibold">
              🌱 Founder & Lead Landscaper
            </div>
            <div className="bg-warm-orange/10 text-warm-orange px-4 py-2 rounded-full text-sm font-semibold">
              📍 Buda Local Since 2015
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">

          {/* Left Side - John's Photo */}
          <div className="relative order-2 lg:order-1">
            <div className="relative bg-gradient-to-br from-accent-green/5 to-primary-green/5 rounded-3xl p-8 overflow-hidden">
              {/* Decorative background elements */}
              <div className="absolute inset-0 opacity-20">
                <div className="absolute top-6 right-6 text-accent-green/30">
                  <Leaf size={40} style={{ transform: 'rotate(25deg)' }} />
                </div>
                <div className="absolute bottom-6 left-6 text-primary-green/30">
                  <Leaf size={35} style={{ transform: 'rotate(-15deg)' }} />
                </div>
              </div>

              {/* Image Container */}
              <div className="relative z-10 text-center">
                <div className="relative mx-auto mb-6">
                  {/* Image placeholder with professional styling */}
                  <div className="w-80 h-80 mx-auto bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl flex items-center justify-center border-4 border-white shadow-xl overflow-hidden">
                    <Image
                      src="/john_rosales.jpg"
                      alt="John Rosales - Owner of Rosales Yard Maintenance"
                      width={320}
                      height={320}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Floating badge */}
                  <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-white rounded-full px-6 py-3 shadow-lg border-2 border-accent-green/20">
                    <div className="flex items-center space-x-2">
                      <Star className="text-yellow-500" size={20} />
                      <span className="font-bold text-primary-green">Owner & Founder</span>
                    </div>
                  </div>
                </div>

                {/* Credentials */}
                <div className="grid grid-cols-2 gap-3 mt-8">
                  {credentials.map((cred, index) => {
                    const IconComponent = cred.icon;
                    return (
                      <div key={index} className={`${cred.color} rounded-xl p-3 flex items-center space-x-2`}>
                        <IconComponent size={18} />
                        <span className="text-sm font-semibold">{cred.text}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="space-y-8 order-1 lg:order-2">

            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p>
                Since founding Rosales Yard Maintenance in 2019, John has built Buda's most trusted landscaping service through <strong className="text-primary-green">personal dedication and exceptional results</strong>. His hands-on approach ensures every customer receives the same meticulous care that built our reputation.
              </p>

              <p>
                John's expertise in <strong className="text-accent-green">Buda's unique climate, native plants, and soil conditions</strong> comes from years of experience and genuine passion for creating beautiful outdoor spaces. He personally oversees every project, from initial consultation to final cleanup.
              </p>

              {/* Quote */}
              <div className="bg-accent-green/5 border-l-4 border-accent-green rounded-r-xl p-6 my-8">
                <p className="text-xl italic text-primary-green font-medium leading-relaxed">
                  "Every yard has potential to be extraordinary. My mission is to help Buda families fall in love with their outdoor spaces again."
                </p>
                <div className="flex items-center mt-4 text-sm text-gray-600">
                  <div className="w-8 h-8 bg-accent-green/20 rounded-full flex items-center justify-center mr-3">
                    <span className="text-accent-green font-bold">JR</span>
                  </div>
                  <span>— John Rosales, Founder</span>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-accent-green rounded-full"></div>
                  <span><strong>Bilingual Service:</strong> English & Spanish</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-accent-green rounded-full"></div>
                  <span><strong>Email:</strong> rosalesyards@gmail.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-accent-green rounded-full"></div>
                  <span><strong>Service Hours:</strong> 8:00 AM - 5:00 PM, Monday to Friday</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-accent-green rounded-full"></div>
                  <span><strong>Weekend:</strong> Leave a message and a team member will contact you</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-accent-green rounded-full"></div>
                  <span><strong>Service Guarantee:</strong> 100% satisfaction or we return</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Achievement Stats */}
        <div className="bg-gradient-to-r from-neutral-light to-white rounded-3xl p-10 shadow-light">
          <h3 className="text-2xl font-bold text-center text-primary-green mb-10">
            Proven Results Across Buda
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {achievements.map((achievement, index) => {
              const IconComponent = achievement.icon;
              return (
                <div
                  key={index}
                  className="group cursor-pointer relative"
                >
                  {/* Card Container */}
                  <div className="relative bg-white/80 backdrop-blur-sm border border-white/50 rounded-3xl p-8 h-full shadow-light hover:shadow-medium transition-all duration-500 hover:-translate-y-2">

                    {/* Gradient Background Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-accent-green/5 via-transparent to-primary-green/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                    {/* Content */}
                    <div className="relative z-10 text-center">

                      {/* Icon Container */}
                      <div className="relative mb-6">
                        <div className='flex justify-center w-full'>
                          <div className="w-16 h-16 bg-gradient-to-br from-accent-green/10 to-primary-green/10 rounded-xl flex items-center justify-center group-hover:from-accent-green/20 group-hover:to-primary-green/20 transition-all duration-300">
                            <IconComponent
                              size={28}
                              className="text-accent-green group-hover:text-primary-green transition-colors duration-300"
                            />
                          </div>
                        </div>

                        {/* Floating Badge */}
                        {/* <div className="absolute -top-3 -right-3 w-10 h-10 bg-gradient-to-br from-warm-orange to-orange-600 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                          <span className="text-white text-sm font-bold">{index + 1}</span>
                        </div> */}
                      </div>

                      {/* Statistics */}
                      <div className="mb-4">
                        <div className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-primary-green to-accent-green bg-clip-text text-transparent mb-2 group-hover:from-accent-green group-hover:to-primary-green transition-all duration-500">
                          {achievement.number}
                        </div>
                        <div className="h-1 w-16 bg-gradient-to-r from-accent-green to-primary-green rounded-full mx-auto mb-4 group-hover:w-24 transition-all duration-300"></div>
                      </div>

                      {/* Text Content */}
                      <div className="space-y-2">
                        <h4 className="font-bold text-gray-900 text-lg group-hover:text-primary-green transition-colors duration-300">
                          {achievement.title}
                        </h4>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          {achievement.subtitle}
                        </p>
                      </div>
                    </div>

                    {/* Subtle Border Glow */}
                    <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-accent-green/20 via-primary-green/20 to-accent-green/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl"></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center bg-green-50 border border-accent-green/20 text-accent-green px-8 py-4 rounded-full text-lg font-semibold">
            <Leaf className="mr-3" size={24} />
            <span>Ready to work with Buda's landscaping expert?</span>
          </div>
        </div>
      </div>
    </section>
  );
}