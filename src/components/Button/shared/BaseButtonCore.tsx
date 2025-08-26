// src/components/Button/shared/BaseButtonCore.tsx
import { forwardRef } from 'react';
import type { BaseButtonProps } from './types';

export const BaseButtonCore = forwardRef<HTMLButtonElement, BaseButtonProps>(
  ({ children, className = '', disabled = false, type = 'button', ...rest }, ref) => {
    return (
      <button
        ref={ref}
        type={type}
        disabled={disabled}
        className={[
          'inline-flex items-center gap-2 rounded-lg px-4 py-2',
          'transition-all active:translate-y-px',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
          'disabled:opacity-50 disabled:cursor-not-allowed',
          className,
        ].join(' ')}
        {...rest}
      >
        {children}
      </button>
    );
  }
);
BaseButtonCore.displayName = 'BaseButtonCore';
