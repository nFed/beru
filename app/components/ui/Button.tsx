import { ReactNode } from 'react';
import { ButtonProps } from '../../types';

export default function Button({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '',
  onClick,
  href,
  disabled = false
}: ButtonProps) {
  const baseClasses = 'inline-flex items-center justify-center font-medium transition-all duration-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  const variantClasses = {
    primary: disabled 
      ? 'bg-gray-400 text-white cursor-not-allowed' 
      : 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500',
    secondary: disabled 
      ? 'bg-gray-400 text-white cursor-not-allowed' 
      : 'bg-gray-600 text-white hover:bg-gray-700 focus:ring-gray-500',
    outline: disabled 
      ? 'border-2 border-gray-400 text-gray-400 cursor-not-allowed' 
      : 'border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white focus:ring-blue-500'
  };
  
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };
  
  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;
  
  if (href && !disabled) {
    return (
      <a href={href} className={classes} aria-label={typeof children === 'string' ? children : undefined}>
        {children}
      </a>
    );
  }
  
  return (
    <button 
      onClick={disabled ? undefined : onClick} 
      disabled={disabled}
      className={classes}
      aria-label={typeof children === 'string' ? children : undefined}
    >
      {children}
    </button>
  );
}