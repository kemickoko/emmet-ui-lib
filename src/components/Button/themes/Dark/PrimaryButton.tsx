// src/components/Button/themes/Dark/PrimaryButton.tsx
import { BaseButtonCore } from '../../shared/BaseButtonCore';
import type { BaseButtonProps } from '../../shared/types';

export function PrimaryButton({ className = '', ...props }: BaseButtonProps) {
  return (
    <BaseButtonCore
      className={[
        'bg-neutral-800 text-white hover:bg-neutral-700',
        'shadow-md hover:shadow-lg',
        className,
      ].join(' ')}
      {...props}
    />
  );
}