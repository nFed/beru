'use client';

import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import ErrorBoundary from './ErrorBoundary';
import { ReactNode, useRef, useCallback } from 'react';

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  animation?: 'fade-in-up' | 'fade-in-down' | 'fade-in-left' | 'fade-in-right' | 'scale-in' | 'slide-in-up' | 'bounce-in' | 'rotate-in';
  delay?: number;
  threshold?: number;
}

export default function AnimatedSection({
  children,
  className = '',
  animation = 'fade-in-up',
  delay = 0,
  threshold = 0.1,
}: AnimatedSectionProps) {
  const divRef = useRef<HTMLDivElement>(null);
  const { isVisible, setElementRef } = useScrollAnimation(threshold);

  const ref = useCallback((node: HTMLDivElement | null) => {
    divRef.current = node;
    setElementRef(node);
  }, [setElementRef]);

  // Provide fallback classes for when animations fail
  const baseClasses = 'transition-opacity duration-300';
  const animationClass = isVisible ? `animate-${animation}` : '';
  const visibilityClass = isVisible ? 'opacity-100' : 'opacity-0';
  
  const delayStyle = delay > 0 ? { animationDelay: `${delay}s` } : {};

  // Fallback component for when animations fail
  const fallbackContent = (
    <div
      ref={ref}
      className={`${baseClasses} opacity-100 ${className}`}
      style={delayStyle}
    >
      {children}
    </div>
  );

  return (
    <ErrorBoundary fallback={fallbackContent}>
      <div
        ref={ref}
        className={`${baseClasses} ${animationClass} ${visibilityClass} ${className}`}
        style={delayStyle}
      >
        {children}
      </div>
    </ErrorBoundary>
  );
}