'use client';

import { MessageCircle, Zap } from 'lucide-react';
import { useChat } from './chatProvider';

export function ChatWidget() {
  const { openChat, isOpen } = useChat();

  if (isOpen) return null;

  return (
    <>
      {/* Main Chat Widget */}
      <button
        onClick={openChat}
        className="fixed bottom-6 right-6 z-40 group bg-warm-orange hover:bg-orange-600 text-white px-6 py-4 rounded-full font-semibold transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl flex items-center space-x-3 shadow-xl"
        aria-label="Open chat for instant quote"
      >
        <div className="relative">
          <MessageCircle size={24} className="group-hover:scale-110 transition-transform" />
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full animate-chat-pulse" />
        </div>
        
        <div className="hidden sm:flex flex-col items-start">
          <span className="text-sm font-bold leading-tight">Chat for Quote</span>
          <span className="text-xs opacity-90 leading-tight">60 sec response</span>
        </div>
        
        <div className="hidden sm:block">
          <Zap size={16} className="text-yellow-300 animate-pulse" />
        </div>
      </button>

      {/* Mobile-Only Secondary CTA */}
      <div className="sm:hidden fixed bottom-24 right-6 z-40">
        <div className="bg-black/80 text-white px-3 py-1 rounded-full text-xs whitespace-nowrap backdrop-blur-sm">
          Get instant pricing! 💬
        </div>
      </div>

      {/* Subtle Background Pulse Effect */}
      <div className="fixed bottom-6 right-6 w-20 h-20 bg-warm-orange/20 rounded-full animate-pulse-orange pointer-events-none z-30" />
    </>
  );
}