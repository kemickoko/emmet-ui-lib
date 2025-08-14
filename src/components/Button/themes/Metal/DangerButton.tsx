// src/components/Button/themes/Metal/DangerButton.tsx
import { BaseButtonCore } from '../../shared/BaseButtonCore';
import type { BaseButtonProps } from '../../shared/types';

export function DangerButton({ className = '', ...props }: BaseButtonProps) {
  return (
    <BaseButtonCore
      className={[
        'bg-gradient-to-b from-rose-600 to-rose-700 text-white',
        'hover:from-rose-500 hover:to-rose-600',
        'shadow-md hover:shadow-lg',
        className,
      ].join(' ')}
      {...props}
    />
  );
}