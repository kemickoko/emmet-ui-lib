// src/components/Button/themes/Dark/OutlineButton.tsx
import { BaseButtonCore } from '../../shared/BaseButtonCore';
import type { BaseButtonProps } from '../../shared/types';

export function OutlineButton({ className = '', ...props }: BaseButtonProps) {
  return (
    <BaseButtonCore
      className={[
        'text-white bg-transparent border border-neutral-600',
        'hover:bg-neutral-800',
        className,
      ].join(' ')}
      {...props}
    />
  );
}