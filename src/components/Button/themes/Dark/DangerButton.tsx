// src/components/Button/themes/Dark/DangerButton.tsx
import { BaseButtonCore } from '../../shared/BaseButtonCore';
import type { BaseButtonProps } from '../../shared/types';

export function DangerButton({ className = '', ...props }: BaseButtonProps) {
  return (
    <BaseButtonCore
      className={[
        'bg-rose-700 text-white hover:bg-rose-600',
        'shadow-md hover:shadow-lg',
        className,
      ].join(' ')}
      {...props}
    />
  );
}