'use client';

import { useState } from 'react';
import Image from 'next/image';

interface ImageWithFallbackProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  fill?: boolean;
  className?: string;
  priority?: boolean;
  fallbackSrc?: string;
}

export default function ImageWithFallback({
  src,
  alt,
  width,
  height,
  fill = false,
  className = '',
  priority = false,
  fallbackSrc = '/placeholder.jpg'
}: ImageWithFallbackProps) {
  const [imageSrc, setImageSrc] = useState(src);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const handleError = () => {
    if (imageSrc !== fallbackSrc) {
      setImageSrc(fallbackSrc);
      setHasError(true);
    }
  };

  const handleLoad = () => {
    setIsLoading(false);
  };

  return (
    <div className="relative">
      {isLoading && (
        <div className={`absolute inset-0 bg-gray-200 dark:bg-gray-700 animate-pulse rounded-lg ${className}`}>
          <div className="flex items-center justify-center h-full">
            <div className="w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
          </div>
        </div>
      )}
      
      <Image
        src={imageSrc}
        alt={alt}
        width={width}
        height={height}
        fill={fill}
        priority={priority}
        className={`transition-opacity duration-300 ${isLoading ? 'opacity-0' : 'opacity-100'} ${className}`}
        onLoad={handleLoad}
        onError={handleError}
      />
      
      {hasError && (
        <div className="absolute top-2 right-2 bg-yellow-100 dark:bg-yellow-900/20 text-yellow-800 dark:text-yellow-200 px-2 py-1 rounded text-xs">
          ⚠️ Fallback
        </div>
      )}
    </div>
  );
}