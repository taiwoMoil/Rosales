'use client';

import { useState } from 'react';
import { ArrowLeftRight, Star, MapPin, Calendar } from 'lucide-react';
import { useChat } from './chatProvider';

interface GalleryCard {
  id: string;
  title: string;
  description: string;
  location: string;
  duration: string;
  rating: number;
  beforeImage: string;
  afterImage: string;
}

const galleryData: GalleryCard[] = [
  {
    id: '1',
    title: 'Complete Lawn Revival',
    description: 'Transformed an overgrown, patchy yard into a lush, healthy landscape',
    location: 'Buda, TX',
    duration: '2 weeks',
    rating: 5,
    beforeImage: '/Before+1.jpg', // placeholder - replace with actual before image
    afterImage: '/After+1.jpg'   // placeholder - replace with actual after image
  },
  {
    id: '2',
    title: 'Custom Landscaping Project',
    description: 'Complete landscape redesign with native plants and modern hardscaping',
    location: 'Kyle, TX',
    duration: '3 weeks',
    rating: 5,
    beforeImage: '/Before+2.jpg', // placeholder
    afterImage: '/After+2.jpg'   // placeholder
  },
  {
    id: '3',
    title: 'Weekly Maintenance Results',
    description: 'Consistent professional care maintaining pristine yard conditions',
    location: 'Manchaca, TX',
    duration: '6 months',
    rating: 5,
    beforeImage: '/Before+3.jpg', // placeholder
    afterImage: '/After+3.jpg'   // placeholder
  },
  {
    id: '4',
    title: 'Weekly Maintenance Results',
    description: 'Lawn mowing and maintenance',
    location: 'Austin, TX',
    duration: '6 months',
    rating: 5,
    beforeImage: '/Before+4.jpg', // placeholder
    afterImage: '/After+4.jpg'   // placeholder
  }
];

export function GallerySection() {
  const { openChat } = useChat();
  const [sliderPositions, setSliderPositions] = useState<{ [key: string]: number }>({});

  const handleSliderMove = (cardId: string, position: number) => {
    setSliderPositions(prev => ({
      ...prev,
      [cardId]: position
    }));
  };

  return (
    <section className="section-padding bg-gradient-to-br from-gray-50 via-white to-green-50/30" id="gallery">
      <div className="container-padding">
        {/* Header Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-accent-green/10 text-accent-green px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <Star size={16} className="fill-current" />
            <span>Real Customer Results</span>
          </div>
          
          <h2 className="section-title mb-6">
            Buda Yard <span className="text-accent-green">Transformations</span>
          </h2>
          
          <p className="section-subtitle mb-4">
            See the amazing results our customers love
          </p>
          
          <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
            From overgrown disasters to neighborhood showcases - discover how we've transformed 500+ Buda-area yards. 
            <span className="text-accent-green font-semibold"> Drag the slider to see the incredible before & after results.</span>
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {galleryData.map((card) => {
            const sliderPosition = sliderPositions[card.id] || 50;
            
            return (
              <div key={card.id} className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group hover:-translate-y-2">
                <div className="before-after-container relative overflow-hidden h-72 cursor-pointer">
                  {/* Before Image */}
                  <div 
                    className="absolute inset-0 bg-cover bg-center transition-all duration-300"
                    style={{ 
                      backgroundImage: `url(${card.beforeImage})`,
                      clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`
                    }}
                  />
                  
                  {/* After Image */}
                  <div 
                    className="absolute inset-0 bg-cover bg-center transition-all duration-300"
                    style={{ 
                      backgroundImage: `url(${card.afterImage})`,
                      clipPath: `inset(0 0 0 ${sliderPosition}%)`
                    }}
                  />
                  
                  {/* Slider Line */}
                  <div 
                    className="absolute top-0 bottom-0 w-0.5 bg-white shadow-lg z-10 transition-all duration-300"
                    style={{ left: `${sliderPosition}%` }}
                  />
                  
                  {/* Slider Handle */}
                  <div 
                    className="absolute top-1/2 transform -translate-y-1/2 -translate-x-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center cursor-grab active:cursor-grabbing z-20 group-hover:scale-110 transition-all duration-300"
                    style={{ left: `${sliderPosition}%` }}
                    onMouseDown={(e) => {
                      const rect = e.currentTarget.closest('.before-after-container')?.getBoundingClientRect();
                      if (!rect) return;
                      
                      const handleMouseMove = (moveEvent: MouseEvent) => {
                        const newPosition = Math.max(0, Math.min(100, 
                          ((moveEvent.clientX - rect.left) / rect.width) * 100
                        ));
                        handleSliderMove(card.id, newPosition);
                      };
                      
                      const handleMouseUp = () => {
                        document.removeEventListener('mousemove', handleMouseMove);
                        document.removeEventListener('mouseup', handleMouseUp);
                      };
                      
                      document.addEventListener('mousemove', handleMouseMove);
                      document.addEventListener('mouseup', handleMouseUp);
                    }}
                  >
                    <ArrowLeftRight size={16} className="text-accent-green" />
                  </div>
                  
                  {/* Before/After Labels */}
                  <div className="absolute top-4 left-4 bg-black/70 text-white px-2 py-1 rounded text-xs font-semibold">
                    BEFORE
                  </div>
                  <div className="absolute top-4 right-4 bg-black/70 text-white px-2 py-1 rounded text-xs font-semibold">
                    AFTER
                  </div>
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <div className="text-white">
                      <div className="flex items-center space-x-1 mb-2">
                        {[...Array(card.rating)].map((_, i) => (
                          <Star key={i} size={14} className="fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                      <h3 className="text-lg font-bold mb-2">{card.title}</h3>
                      <p className="text-sm opacity-90 mb-3">{card.description}</p>
                      <div className="flex items-center justify-between text-xs opacity-80">
                        <div className="flex items-center space-x-1">
                          <MapPin size={12} />
                          <span>{card.location}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Calendar size={12} />
                          <span>{card.duration}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Card Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-bold text-gray-900">{card.title}</h3>
                    <div className="flex items-center space-x-1">
                      {[...Array(card.rating)].map((_, i) => (
                        <Star key={i} size={14} className="fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed">{card.description}</p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center space-x-1">
                      <MapPin size={14} className="text-accent-green" />
                      <span>{card.location}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar size={14} className="text-accent-green" />
                      <span>Completed in {card.duration}</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        
        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-accent-green/5 to-primary-green/5 rounded-2xl p-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Ready for Your Own <span className="text-accent-green">Transformation?</span>
          </h3>
          <p className="text-gray-600 mb-8 max-w-lg mx-auto">
            Join 500+ satisfied Buda homeowners who've transformed their yards with Rosales. Get your instant quote in 60 seconds!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button 
              onClick={openChat}
              className="group relative bg-gradient-to-r from-warm-orange to-orange-600 hover:from-orange-700 hover:to-orange-800 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 hover:scale-105 shadow-2xl hover:shadow-orange-500/25 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative flex items-center space-x-3 text-lg">
                <span className="text-2xl animate-pulse">🌟</span>
                <span>Get Your Free Quote</span>
                <span className="bg-white/20 px-3 py-1 rounded-full text-sm font-semibold">60 SEC</span>
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
