import { CardProps } from '../../types';
import ImageWithFallback from './ImageWithFallback';

export default function Card({ 
  children, 
  className = '', 
  hover = true,
  imageUrl,
  imageAlt = 'Card image'
}: CardProps) {
  const hoverEffect = hover ? 'hover:shadow-lg hover:-translate-y-1' : '';
  
  return (
    <div className={`bg-white dark:bg-gray-800 rounded-lg shadow-md transition-all duration-300 ${hoverEffect} ${className}`}>
      {imageUrl && (
        <div className="relative h-48 overflow-hidden rounded-t-lg">
          <img
            src={imageUrl}
            alt={imageAlt}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
      )}
      {children}
    </div>
  );
}