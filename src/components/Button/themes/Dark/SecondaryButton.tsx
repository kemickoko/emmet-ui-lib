// src/components/Button/themes/Dark/SecondaryButton.tsx
import { BaseButtonCore } from '../../shared/BaseButtonCore';
import type { BaseButtonProps } from '../../shared/types';

export function SecondaryButton({ className = '', ...props }: BaseButtonProps) {
  return (
    <BaseButtonCore
      className={[
        'bg-neutral-700 text-white hover:bg-neutral-600',
        'shadow-md hover:shadow-lg',
        className,
      ].join(' ')}
      {...props}
    />
  );
}