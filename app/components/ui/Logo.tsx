'use client';

import { useCallback } from 'react';

export default function Logo({ className = "h-8 w-auto" }: { className?: string }) {
  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <button 
      onClick={scrollToTop}
      className={`flex items-center ${className} hover-lift transition-all duration-300 group`}
      aria-label="Scroll to top"
    >
      <div className="relative">
        {/* Main logo circle with gradient */}
        <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:scale-105 transition-all duration-300">
          {/* Inner design */}
          <div className="w-6 h-6 relative">
            {/* Code brackets design */}
            <div className="absolute inset-0 flex items-center justify-between text-white font-bold text-sm">
              <span>&lt;</span>
              <span>/&gt;</span>
            </div>
          </div>
        </div>
        
        {/* Decorative dot */}
        <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-br from-pink-400 to-red-500 rounded-full shadow-sm group-hover:animate-bounce"></div>
      </div>
      
      {/* Logo text */}
      <div className="ml-3 flex flex-col">
        <span className="text-lg font-bold text-gray-900 dark:text-white leading-none group-hover:text-gradient-primary transition-all duration-300">
          John Dev
        </span>
        <span className="text-xs text-blue-600 dark:text-blue-400 leading-none">
          Portfolio
        </span>
      </div>
    </button>
  );
}