// src/components/Button/index.tsx

import type { ButtonHTMLAttributes, ReactNode } from 'react';

type ButtonProps = {
  variant?: 'primary' | 'secondary';
} & ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
};

export const Button = ({
  children,
  variant = 'primary',
  disabled = false,
  className = '',
  ...rest
}: ButtonProps) => (
  <button
    disabled={disabled}
    className={`px-4 py-2 rounded-lg shadow-md transition-shadow ${
      variant === 'primary'
        ? 'bg-blue-600 text-white hover:bg-blue-700 hover:shadow-lg disabled:bg-blue-300'
        : 'bg-gray-300 text-black hover:bg-gray-400 hover:shadow-lg disabled:bg-gray-200'
    } ${className}`}
    {...rest}
  >
    {children}
  </button>
);
