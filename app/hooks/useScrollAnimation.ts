'use client';

import { useEffect, useRef, useState, useCallback } from 'react';

export function useScrollAnimation(threshold = 0.1) {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLElement | null>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  const setElementRef = useCallback((element: HTMLElement | null) => {
    // Clean up previous observer
    if (observerRef.current && elementRef.current) {
      observerRef.current.unobserve(elementRef.current);
    }

    elementRef.current = element;

    if (element && typeof window !== 'undefined' && 'IntersectionObserver' in window) {
      // Create new observer if it doesn't exist
      if (!observerRef.current) {
        observerRef.current = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              setIsVisible(true);
              // Once animated, stop observing
              if (observerRef.current && entry.target) {
                observerRef.current.unobserve(entry.target);
              }
            }
          },
          {
            threshold,
            rootMargin: '50px 0px -50px 0px',
          }
        );
      }

      // Observe the new element
      observerRef.current.observe(element);
    } else if (!element || typeof window === 'undefined' || !('IntersectionObserver' in window)) {
      // Fallback: show content immediately if no IntersectionObserver support
      setIsVisible(true);
    }
  }, [threshold]);

  useEffect(() => {
    return () => {
      // Cleanup on unmount
      if (observerRef.current) {
        observerRef.current.disconnect();
        observerRef.current = null;
      }
    };
  }, []);

  return { isVisible, setElementRef };
}

export function useScrollAnimationBatch(threshold = 0.1) {
  const [visibleElements, setVisibleElements] = useState<Set<string>>(new Set());
  const elementsRef = useRef<Map<string, HTMLElement>>(new Map());

  const addElement = (id: string, element: HTMLElement) => {
    elementsRef.current.set(id, element);
  };

  const removeElement = (id: string) => {
    elementsRef.current.delete(id);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute('data-animation-id');
            if (id) {
              setVisibleElements(prev => new Set(prev).add(id));
              observer.unobserve(entry.target);
            }
          }
        });
      },
      {
        threshold,
        rootMargin: '50px 0px -50px 0px',
      }
    );

    // Observe all elements
    elementsRef.current.forEach((element) => {
      observer.observe(element);
    });

    return () => {
      elementsRef.current.forEach((element) => {
        observer.unobserve(element);
      });
    };
  }, [threshold]);

  return { addElement, removeElement, visibleElements };
}