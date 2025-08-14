import type { BaseButtonProps } from './types';

export function BaseButtonCore({ children, className = '', disabled = false, ...rest }: BaseButtonProps) {
  return (
    <button
      disabled={disabled}
      className={[
        'inline-flex items-center gap-2 rounded-lg px-4 py-2',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
        'transition-all active:translate-y-px',
        'disabled:opacity-50 disabled:cursor-not-allowed',
        className,
      ].join(' ')}
      {...rest}
    >
      {children}
    </button>
  );
}