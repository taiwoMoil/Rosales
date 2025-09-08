'use client';

import { useState } from 'react';
import { X, Sparkles } from 'lucide-react';
import { useChat } from '../components/chatProvider';

export function PromoBanner() {
  const [isVisible, setIsVisible] = useState(true);
  const { openChat } = useChat();

  if (!isVisible) return null;

  return (
    <div className="relative bg-gradient-to-r from-warm-orange to-orange-600 text-white py-3 px-4 text-center font-semibold animate-pulse-orange overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1 left-10 text-yellow-300">
          <Sparkles size={16} className="animate-pulse" />
        </div>
        <div className="absolute top-2 right-20 text-yellow-300">
          <Sparkles size={12} className="animate-pulse delay-1000" />
        </div>
        <div className="absolute bottom-1 left-1/3 text-yellow-300">
          <Sparkles size={14} className="animate-pulse delay-2000" />
        </div>
        <div className="absolute bottom-2 right-10 text-yellow-300">
          <Sparkles size={10} className="animate-pulse delay-3000" />
        </div>
      </div>
      
      <div className="relative flex items-center justify-center">
        <div className="flex-1 flex items-center justify-center space-x-2">
          <span className="text-lg">🌱</span>
          <span className="text-sm sm:text-base">
            <strong>Spring Special:</strong> Save $20 on your first service when you book 2 services!
          </span>
          <button
            onClick={openChat}
            className="ml-3 bg-white/20 hover:bg-white/30 text-white px-3 py-1 rounded-full text-sm font-bold transition-all hover:scale-105 backdrop-blur-sm"
            aria-label="Book spring special offer"
          >
            Book Now
          </button>
        </div>
        
        <button
          onClick={() => setIsVisible(false)}
          className="absolute right-2 top-1/2 -translate-y-1/2 p-1 hover:bg-white/20 rounded-full transition-colors"
          aria-label="Close promotional banner"
        >
          <X size={16} />
        </button>
      </div>
    </div>
  );
}